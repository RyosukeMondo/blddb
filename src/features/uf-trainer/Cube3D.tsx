"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FACELETS, execute, inverse, turnSpec, destination } from "./engine";
import styles from "./lab.module.css";

type Controller = {
  // eslint-disable-next-line no-unused-vars -- parameter names describe the callback type
  update: (moves: string[], tracked: string[]) => void;
  // eslint-disable-next-line no-unused-vars -- parameter name describes the callback type
  view: (back?: boolean) => void;
};
const faceColors: Record<string, string> = {
  U: "#faf9ef",
  D: "#eed371",
  F: "#8cc4a5",
  B: "#88abd3",
  L: "#e6b183",
  R: "#d88e7d",
};
const targetColors = ["#087f78", "#c36d24", "#7760a9"];
export default function Cube3D({
  moves,
  tracked,
}: {
  moves: string[];
  tracked: string[];
}) {
  const host = useRef<HTMLDivElement>(null),
    api = useRef<Controller | null>(null);
  const [failed, setFailed] = useState(false);
  const moveKey = moves.join(" "),
    targetKey = tracked.join(" ");
  useEffect(() => {
    const container = host.current;
    if (!container) {
      return undefined;
    }
    const renderer = (() => {
      try {
        return new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch {
        return null;
      }
    })();
    if (!renderer) {
      queueMicrotask(() => setFailed(true));
      return undefined;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xf5f6ed, 0);
    container.appendChild(renderer.domElement);
    const scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 5;
    controls.maxDistance = 12;
    const view = (back = false) => {
      camera.position.set(back ? -4 : 4, 3.6, back ? -4.8 : 4.8);
      controls.target.set(0, 0, 0);
      controls.update();
    };
    view();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x65766a, 2.5));
    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(4, 7, 5);
    scene.add(light);
    const cube = new THREE.Group();
    scene.add(cube);
    const bodyGeometry = new THREE.BoxGeometry(0.96, 0.96, 0.96),
      stickerGeometry = new THREE.PlaneGeometry(0.64, 0.64);
    const frameGeometry = new THREE.EdgesGeometry(bodyGeometry);
    const bodyMaterial = new THREE.LineBasicMaterial({
      color: 0x607b6c,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    });
    const materials = new Map<string, THREE.MeshBasicMaterial>();
    function material(id: string, targets: string[]) {
      let highlight = targets.indexOf(id);
      if (highlight < 0 && id.length === 2) {
        highlight = targets.indexOf(id.split("").reverse().join(""));
      }
      const cacheKey = `${id}/${highlight}`;
      const cached = materials.get(cacheKey);
      if (cached) {
        return cached;
      }
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        throw new Error("Canvas labels unavailable");
      }
      ctx.fillStyle =
        highlight >= 0 ? targetColors[highlight] : faceColors[id[0]];
      ctx.fillRect(0, 0, 128, 128);
      if (highlight >= 0) {
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 5;
        ctx.strokeRect(5, 5, 118, 118);
      }
      ctx.fillStyle = highlight >= 0 ? "#ffffff" : "#344c40";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `${highlight >= 0 ? "bold " : ""}${id.length === 1 ? 48 : 28}px Arial`;
      ctx.fillText(id, 64, 66);
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      const result = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: highlight >= 0 ? 0.94 : 0.3,
        depthWrite: false,
        side: THREE.FrontSide,
      });
      materials.set(cacheKey, result);
      return result;
    }
    function draw(state: string[], targets: string[], move?: string) {
      cube.clear();
      const pivot = new THREE.Group();
      cube.add(pivot);
      const spec = move ? turnSpec(move) : null;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          for (let z = -1; z <= 1; z++) {
            if (x === 0 && y === 0 && z === 0) {
              continue;
            }
            const body = new THREE.LineSegments(frameGeometry, bodyMaterial);
            body.position.set(x, y, z);
            const parent =
              spec && spec.layers.includes([x, y, z][spec.axis]) ? pivot : cube;
            parent.add(body);
          }
        }
      }
      FACELETS.forEach((slot, i) => {
        const sticker = new THREE.Mesh(
          stickerGeometry,
          material(state[i], targets),
        );
        const normal = new THREE.Vector3(...slot.normal);
        sticker.position.set(...slot.position).addScaledVector(normal, 0.489);
        // Screen-readable labels on every face at each exact turn boundary.
        const right = new THREE.Vector3(1, 0, 0),
          up = new THREE.Vector3(0, 1, 0);
        if (slot.face === "U") {
          up.set(0, 0, -1);
        }
        if (slot.face === "D") {
          up.set(0, 0, 1);
        }
        if (slot.face === "B") {
          right.set(-1, 0, 0);
        }
        if (slot.face === "R") {
          right.set(0, 0, -1);
        }
        if (slot.face === "L") {
          right.set(0, 0, 1);
        }
        sticker.quaternion.setFromRotationMatrix(
          new THREE.Matrix4().makeBasis(right, up, normal),
        );
        // A separate inward-facing label stays readable when viewed through the cube.
        const back = new THREE.Mesh(
          stickerGeometry,
          material(state[i], targets),
        );
        back.rotation.y = Math.PI;
        back.position.z = -0.001;
        sticker.add(back);
        const parent =
          spec && spec.layers.includes(slot.position[spec.axis]) ? pivot : cube;
        parent.add(sticker);
      });
      return pivot;
    }
    let previous: string[] = [],
      previousTargets = "",
      animation: null | {
        pivot: THREE.Group;
        start: number;
        move: string;
        final: string[];
        targets: string[];
      } = null;
    api.current = {
      view,
      update: (next, targets) => {
        const sameTargets = previousTargets === targets.join(" ");
        let move: string | null = null;
        if (
          sameTargets &&
          next.length === previous.length + 1 &&
          next.slice(0, -1).join(" ") === previous.join(" ")
        ) {
          move = next[next.length - 1];
        }
        if (
          sameTargets &&
          previous.length === next.length + 1 &&
          previous.slice(0, -1).join(" ") === next.join(" ")
        ) {
          move = inverse([previous[previous.length - 1]])[0];
        }
        const final = execute(next);
        animation = null;
        if (
          move &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          animation = {
            pivot: draw(execute(previous), targets, move),
            start: performance.now(),
            move,
            final,
            targets,
          };
          container.dataset.animating = "true";
        } else {
          draw(final, targets);
          container.dataset.animating = "false";
        }
        previous = [...next];
        previousTargets = targets.join(" ");
        container.dataset.state = final.join(",");
      },
    };
    const resize = new ResizeObserver(() => {
      const w = container.clientWidth,
        h = container.clientHeight;
      if (!w || !h) {
        return;
      }
      camera.aspect = w / h;
      // Preserve the viewing angle on the shorter axis when panels resize.
      camera.fov = THREE.MathUtils.radToDeg(
        2 *
          Math.atan(
            Math.tan(THREE.MathUtils.degToRad(36 / 2)) /
              Math.min(1, camera.aspect),
          ),
      );
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resize.observe(container);
    let frame = 0;
    const render = (now: number) => {
      if (animation) {
        const t = Math.min((now - animation.start) / 600, 1),
          eased = t * t * (3 - 2 * t),
          spec = turnSpec(animation.move);
        const axis = new THREE.Vector3();
        axis.setComponent(spec.axis, 1);
        animation.pivot.quaternion.setFromAxisAngle(
          axis,
          ((spec.sign * spec.amount * Math.PI) / 2) * eased,
        );
        if (t === 1) {
          draw(animation.final, animation.targets);
          animation = null;
          container.dataset.animating = "false";
        }
      }
      controls.update();
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    const lost = (e: Event) => {
      e.preventDefault();
      setFailed(true);
    };
    renderer.domElement.addEventListener("webglcontextlost", lost);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      controls.dispose();
      renderer.domElement.removeEventListener("webglcontextlost", lost);
      bodyGeometry.dispose();
      frameGeometry.dispose();
      stickerGeometry.dispose();
      bodyMaterial.dispose();
      materials.forEach((m) => {
        m.map?.dispose();
        m.dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
      api.current = null;
    };
  }, []);
  useEffect(() => {
    api.current?.update(
      moveKey ? moveKey.split(" ") : [],
      targetKey.split(" "),
    );
  }, [moveKey, targetKey]);
  const state = execute(moves);
  return (
    <div className={styles.threePreview}>
      <div
        ref={host}
        className={styles.threeStage}
        role="img"
        aria-label={`3D cube. ${tracked.map((id) => `${id} sticker at ${destination(state, id)}`).join(". ")}`}
      />
      {failed ? (
        <p role="status" className={styles.hint}>
          3D graphics are unavailable in this browser. Select 2D net to continue
          the lesson.
        </p>
      ) : (
        <div className={styles.orbitTools}>
          <span>See-through · drag to orbit · pinch to zoom</span>
          <button onClick={() => api.current?.view()}>Reset view</button>
          <button onClick={() => api.current?.view(true)}>Back view</button>
        </div>
      )}
    </div>
  );
}
