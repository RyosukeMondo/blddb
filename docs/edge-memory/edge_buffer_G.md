# Edge 3‑Style — Buffer G — Memory Sheet

*Pure‑memorability picks (shortest/cleanest commutator of 100 computer algs per case).*

## The collapse
| metric | value |
|---|---|
| cases | **440** |
| distinct shapes (cores) | **167** |
| shared‑core families (≥2) | **130** covering 403 |
| inverse pairs (learn 1 ⇒ 2) | **220** |
| pure commutators (no setup) | **178** |
| moves min/avg/max | 4 / 8.2 / 11 |

Read: `setup : [interchange , insert]` → setup → interchange → insert → interchange' → insert' → setup'. Inverse case = swap the two pieces.

## Family map

```mermaid
graph LR
  F1["R2 · E"]
  F1 --> GBJ
  F1 --> GBO
  F1 --> GCT
  F1 --> GFR
  F1 --> GFS
  F1 --> GIS
  F1 --> GIZ
  F1 --> GJB
  F1 --> GJO
  F1 --> GKT
  F1 --> GLI
  F1 --> GMS
  F1 --> GNS
  F1 --> GOB
  F1 --> GOJ
  F1 --> GOR
  F1 --> GOS
  F1 --> GOX
  F1 --> GRO
  F1 --> GRT
  F1 --> GSF
  F1 --> GSI
  F1 --> GSM
  F1 --> GSN
  F1 --> GSO
  F1 --> GTC
  F1 --> GTK
  F1 --> GTR
  F1 --> GTX
  F1 --> GXO
  F1 --> GZI
  F2["R2 · E'"]
  F2 --> GBW
  F2 --> GCX
  F2 --> GFN
  F2 --> GIW
  F2 --> GJW
  F2 --> GKX
  F2 --> GMW
  F2 --> GNF
  F2 --> GOT
  F2 --> GOW
  F2 --> GOZ
  F2 --> GTO
  F2 --> GWB
  F2 --> GWI
  F2 --> GWJ
  F2 --> GWM
  F2 --> GWO
  F2 --> GXC
  F2 --> GXK
  F2 --> GXP
  F2 --> GXZ
  F2 --> GZO
  F2 --> GZX
  F3["S' · R2"]
  F3 --> GAK
  F3 --> GEK
  F3 --> GFO
  F3 --> GIM
  F3 --> GKA
  F3 --> GKE
  F3 --> GKO
  F3 --> GLP
  F3 --> GMI
  F3 --> GMR
  F3 --> GMT
  F3 --> GOF
  F3 --> GOK
  F3 --> GQO
  F3 --> GRM
  F3 --> GTM
  F4["S · R2"]
  F4 --> GAE
  F4 --> GBZ
  F4 --> GCO
  F4 --> GEA
  F4 --> GOC
  F4 --> GOQ
  F4 --> GQY
  F4 --> GRZ
  F4 --> GWY
  F4 --> GYO
  F4 --> GYQ
  F4 --> GZB
  F4 --> GZR
  F5["U2 · M"]
  F5 --> GAC
  F5 --> GCA
  F5 --> GCF
  F5 --> GCJ
  F5 --> GCM
  F5 --> GFC
  F5 --> GJC
  F5 --> GMC
  F5 --> GNO
  F5 --> GON
  F5 --> GRF
  F6["U2 · M'"]
  F6 --> GBC
  F6 --> GCB
  F6 --> GCE
  F6 --> GCI
  F6 --> GCN
  F6 --> GCR
  F6 --> GEC
  F6 --> GIC
  F6 --> GNC
  F6 --> GRC
  F7["ERS' · R"]
  F7 --> GLR
  F7 --> GLS
  F7 --> GLY
  F7 --> GRL
  F7 --> GSL
  F7 --> GXL
  F7 --> GYL
  F8["U2@M · U"]
  F8 --> GAI
  F8 --> GEI
  F8 --> GIA
  F8 --> GIE
  F8 --> GJN
  F9["M@U' · R"]
  F9 --> GBN
  F9 --> GNB
  F9 --> GNQ
  F9 --> GNT
  F9 --> GQN
  F10["E'R'S' · R'"]
  F10 --> GLQ
  F10 --> GLZ
  F10 --> GQL
  F10 --> GTL
  F10 --> GZL
  F11["MUS · U"]
  F11 --> GAL
  F11 --> GJL
  F11 --> GLA
  F11 --> GLM
  F12["U2@M' · U'"]
  F12 --> GAM
  F12 --> GEM
  F12 --> GMA
  F12 --> GME
  F13["M2@U' · R"]
  F13 --> GBR
  F13 --> GIQ
  F13 --> GQI
  F13 --> GRB
  F14["R2@S' · R"]
  F14 --> GCQ
  F14 --> GDL
  F14 --> GKD
  F14 --> GQC
  F15["R2@S · R"]
  F15 --> GDK
  F15 --> GKY
  F15 --> GLD
  F15 --> GYK
  F16["B@R · S"]
  F16 --> GDN
  F16 --> GDP
  F16 --> GND
  F16 --> GPD
  F17["ER'S · R"]
  F17 --> GDY
  F17 --> GPX
  F17 --> GXD
  F17 --> GYD
  F18["M'U'S · U'"]
  F18 --> GEL
  F18 --> GIL
  F18 --> GLE
  F18 --> GNL
  F19["S2@R · U'"]
  F19 --> GEY
  F19 --> GFZ
  F19 --> GYE
  F19 --> GZF
  F20["B'@R · S'"]
  F20 --> GFJ
  F20 --> GFP
  F20 --> GJF
  F20 --> GPF
  F21["F'@R' · S"]
  F21 --> GAD
  F21 --> GDJ
  F21 --> GJD
  F22["R@U' · M"]
  F22 --> GAF
  F22 --> GFM
  F22 --> GMF
  F23["E@R' · U'"]
  F23 --> GAT
  F23 --> GTA
  F23 --> GTF
  F24["F@R' · S"]
  F24 --> GBD
  F24 --> GDB
  F24 --> GED
  F25["R'@U · M'"]
  F25 --> GBI
  F25 --> GEB
  F25 --> GIB
  F26["S'R'E · R'"]
  F26 --> GDT
  F26 --> GTY
  F26 --> GYT
  F27["B2@R · S"]
  F27 --> GDW
  F27 --> GWD
  F27 --> GWQ
  F28["S'RE' · R"]
  F28 --> GDX
  F28 --> GQX
  F28 --> GXQ
  F29["SU'M · U"]
  F29 --> GEN
  F29 --> GNE
  F29 --> GNI
  F30["E@R' · U"]
  F30 --> GET
  F30 --> GTE
  F30 --> GTN
  F31["E2@R' · U"]
  F31 --> GEW
  F31 --> GWE
  F31 --> GWN
  F32["E'@R · U"]
  F32 --> GEX
  F32 --> GXB
  F32 --> GXE
  F33["M'@U · R'"]
  F33 --> GJY
  F33 --> GYJ
  F33 --> GYS
  F34["M2@U · R"]
  F34 --> GMQ
  F34 --> GMZ
  F34 --> GQM
  F35["M@U' · R'"]
  F35 --> GNR
  F35 --> GNY
  F35 --> GYN
  F36["R2@E' · R'"]
  F36 --> GQS
  F36 --> GSQ
  F36 --> GSY
  F37["R2@E · R"]
  F37 --> GQW
  F37 --> GXT
  F37 --> GYW
  F38["E@F · U"]
  F38 --> GAJ
  F38 --> GJA
  F39["SU'M · U'"]
  F39 --> GAN
  F39 --> GNA
  F40["E@F · R2"]
  F40 --> GAO
  F40 --> GOA
  F41["F@R · S"]
  F41 --> GAP
  F41 --> GPA
  F42["S2@R' · U"]
  F42 --> GAQ
  F42 --> GQA
  F43["S'@R · U"]
  F43 --> GAR
  F43 --> GRA
  F44["E2@R · U'"]
  F44 --> GAS
  F44 --> GSA
  F45["E@F' · U"]
  F45 --> GAW
  F45 --> GWA
  F46["E'@R · U'"]
  F46 --> GAX
  F46 --> GXA
  F47["E'@F · U"]
  F47 --> GAY
  F47 --> GYA
  F48["E2@F' · U"]
  F48 --> GAZ
  F48 --> GZA
  F49["R'@U · M"]
  F49 --> GBE
  F49 --> GRN
  F50["U2 · S'"]
  F50 --> GBF
  F50 --> GFB
  F51["U@R' · S2"]
  F51 --> GBK
  F51 --> GKB
  F52["S'@R' · F"]
  F52 --> GBL
  F52 --> GLB
  F53["B@E · F"]
  F53 --> GBM
  F53 --> GMB
  F54["F@R' · S'"]
  F54 --> GBP
  F54 --> GPB
  F55["S@U' · R'"]
  F55 --> GBQ
  F55 --> GQB
  F56["E2@R · F'"]
  F56 --> GBS
  F56 --> GSB
  F57["S@U' · R"]
  F57 --> GBY
  F57 --> GYB
  F58["U2 · S"]
  F58 --> GCK
  F58 --> GKC
  F59["S@R · U2"]
  F59 --> GCL
  F59 --> GLC
  F60["E@R · U2"]
  F60 --> GCP
  F60 --> GPC
  F61["E2@R · U2"]
  F61 --> GCS
  F61 --> GSC
  F62["E2@R' · U2"]
  F62 --> GCW
  F62 --> GWC
  F63["S2@R · U2"]
  F63 --> GCY
  F63 --> GYC
  F64["S'@R' · U2"]
  F64 --> GCZ
  F64 --> GZC
  F65["B'@R · S"]
  F65 --> GDF
  F65 --> GFD
  F66["U@r · S'"]
  F66 --> GDI
  F66 --> GID
  F67["U'@r' · S'"]
  F67 --> GDM
  F67 --> GMD
  F68["M@U · R2"]
  F68 --> GDO
  F68 --> GOD
  F69["M@U · R"]
  F69 --> GDQ
  F69 --> GQD
  F70["F'@U · S"]
  F70 --> GDR
  F70 --> GRD
  F71["F2@R' · S"]
  F71 --> GDS
  F71 --> GSD
  F72["U2@R' · S'"]
  F72 --> GDZ
  F72 --> GZD
  F73["SUM' · U"]
  F73 --> GEJ
  F73 --> GJE
  F74["E'@B' · R2"]
  F74 --> GEO
  F74 --> GOE
  F75["E@R · U"]
  F75 --> GEP
  F75 --> GPE
  F76["E@B' · U'"]
  F76 --> GEQ
  F76 --> GQE
  F77["E2@B · U'"]
  F77 --> GER
  F77 --> GRE
  F78["E2@R · U"]
  F78 --> GES
  F78 --> GSE
  F79["S'@R' · U'"]
  F79 --> GEZ
  F79 --> GZE
  F80["R@U' · M'"]
  F80 --> GFA
  F80 --> GZJ
  F81["F'@E' · B'"]
  F81 --> GFI
  F81 --> GIF
  F82["U'@R' · S2"]
  F82 --> GFK
  F82 --> GKF
  F83["S'@R · B'"]
  F83 --> GFL
  F83 --> GLF
  F84["S@U · R'"]
  F84 --> GFQ
  F84 --> GQF
  F85["S@U · R"]
  F85 --> GFY
  F85 --> GYF
  F86["D'@R' · S2"]
  F86 --> GIK
  F86 --> GKI
  F87["E@F' · R2"]
  F87 --> GIO
  F87 --> GOI
  F88["F'@R · S"]
  F88 --> GIP
  F88 --> GPI
  F89["M2@U' · F"]
  F89 --> GIR
  F89 --> GRI
  F90["E'@R' · F"]
  F90 --> GIT
  F90 --> GTI
  F91["D@R · E'"]
  F91 --> GIX
  F91 --> GXI
  F92["M2@U' · R'"]
  F92 --> GIY
  F92 --> GYI
  F93["D@r' · S2"]
  F93 --> GJK
  F93 --> GKJ
  F94["R'@U' · M'"]
  F94 --> GJM
  F94 --> GXJ
  F95["E@R' · D"]
  F95 --> GJP
  F95 --> GPJ
  F96["M@U · F"]
  F96 --> GJQ
  F96 --> GQJ
  F97["E2@R · F"]
  F97 --> GJS
  F97 --> GSJ
  F98["D@R' · S2"]
  F98 --> GKM
  F98 --> GMK
  F99["D'@r · S2"]
  F99 --> GKN
  F99 --> GNK
  F100["F@R · S'"]
  F100 --> GKP
  F100 --> GPK
  F101["R2@S · R'"]
  F101 --> GKQ
  F101 --> GQK
  F102["U2@R · S2"]
  F102 --> GKR
  F102 --> GRK
  F103["U2@R' · S2"]
  F103 --> GKZ
  F103 --> GZK
  F104["S'@R · B2"]
  F104 --> GLW
  F104 --> GWL
  F105["E'@B · R2"]
  F105 --> GMO
  F105 --> GOM
  F106["B@R' · S"]
  F106 --> GMP
  F106 --> GPM
  F107["B'@R · E"]
  F107 --> GMX
  F107 --> GXM
  F108["M2@U · R'"]
  F108 --> GMY
  F108 --> GYM
  F109["B@R · S'"]
  F109 --> GNP
  F109 --> GPN
  F110["ERS' · R2"]
  F110 --> GOL
  F110 --> GWK
  F111["R@D · S'"]
  F111 --> GPQ
  F111 --> GQP
  F112["R'@U' · S"]
  F112 --> GPR
  F112 --> GRP
  F113["F2@R' · S'"]
  F113 --> GPS
  F113 --> GSP
  F114["E@R · U'"]
  F114 --> GPT
  F114 --> GTP
  F115["B2@R · S'"]
  F115 --> GPW
  F115 --> GWP
  F116["R'@D' · S'"]
  F116 --> GPY
  F116 --> GYP
  F117["R@U' · S"]
  F117 --> GPZ
  F117 --> GZP
  F118["S'R'E · R"]
  F118 --> GQT
  F118 --> GTQ
  F119["U'@B · E"]
  F119 --> GQZ
  F119 --> GZQ
  F120["U@F' · E"]
  F120 --> GRS
  F120 --> GSR
  F121["SR'E' · R'"]
  F121 --> GRW
  F121 --> GWR
  F122["U@F' · E2"]
  F122 --> GRX
  F122 --> GXR
  F123["U@F' · E'"]
  F123 --> GRY
  F123 --> GYR
  F124["F2 · E"]
  F124 --> GSW
  F124 --> GWS
  F125["F2@R' · E"]
  F125 --> GSX
  F125 --> GXS
  F126["SRE · R"]
  F126 --> GSZ
  F126 --> GZS
  F127["U@F · E"]
  F127 --> GTW
  F127 --> GWT
  F128["U@F · E2"]
  F128 --> GTZ
  F128 --> GZT
  F129["B2@R · E"]
  F129 --> GWZ
  F129 --> GZW
  F130["U'@B' · E"]
  F130 --> GXY
  F130 --> GYX
```

## Families

### F1. R2 · E · ×31

Shape `[E , R2]` — interchange `E`, insert `R2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBJ** | `R F:[E,R2]` | 8 | GJB |
| **GBO** | `F' R':[E,R2]` | 7 | GOB |
| **GCT** | `S R':[E,R2]` | 7 | GTC |
| **GFR** | `R' u R:[E,R2]` | 9 | GRF |
| **GFS** | `R' B':[R2,E]` | 8 | GSF |
| **GIS** | `D R:[E,R2]` | 7 | GSI |
| **GIZ** | `U F:[E,R2]` | 8 | GZI |
| **GJB** | `R F:[R2,E]` | 8 | GBJ |
| **GJO** | `F R':[E,R2]` | 7 | GOJ |
| **GKT** | `R2 S' R:[E,R2]` | 9 | GTK |
| **GLI** | `r D F:[R2,E]` | 10 | GIL |
| **GMS** | `D' R:[E,R2]` | 7 | GSM |
| **GNS** | `R' B:[R2,E]` | 8 | GSN |
| **GOB** | `F' R:[E,R2]` | 7 | GBO |
| **GOJ** | `F R:[E,R2]` | 7 | GJO |
| **GOR** | `E' R:[E,R2]` | 7 | GRO |
| **GOS** | `R:[E,R2]` | 5 | GSO |
| **GOX** | `E R:[E,R2]` | 7 | GXO |
| **GRO** | `E' R':[E,R2]` | 7 | GOR |
| **GRT** | `U' B':[E,R2]` | 8 | GTR |
| **GSF** | `R' B':[E,R2]` | 8 | GFS |
| **GSI** | `D R':[E,R2]` | 7 | GIS |
| **GSM** | `D' R':[E,R2]` | 7 | GMS |
| **GSN** | `R' B:[E,R2]` | 8 | GNS |
| **GSO** | `R':[E,R2]` | 5 | GOS |
| **GTC** | `S R:[E,R2]` | 7 | GCT |
| **GTK** | `S U2 R:[E,R2]` | 9 | GKT |
| **GTR** | `U' B':[R2,E]` | 8 | GRT |
| **GTX** | `S R E:[E,R2]` | 9 | GXT |
| **GXO** | `E R':[E,R2]` | 7 | GOX |
| **GZI** | `U F:[R2,E]` | 8 | GIZ |

### F2. R2 · E' · ×23

Shape `[E' , R2]` — interchange `E'`, insert `R2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBW** | `R F:[R2,E']` | 8 | GWB |
| **GCX** | `S R:[E',R2]` | 7 | GXC |
| **GFN** | `R' B:[R2,E']` | 8 | GNF |
| **GIW** | `D R':[E',R2]` | 7 | GWI |
| **GJW** | `R F':[R2,E']` | 8 | GWJ |
| **GKX** | `S U2 R:[E',R2]` | 9 | GXK |
| **GMW** | `D' R':[E',R2]` | 7 | GWM |
| **GNF** | `R' B:[E',R2]` | 8 | GFN |
| **GOT** | `E' R':[E',R2]` | 7 | GTO |
| **GOW** | `R':[E',R2]` | 5 | GWO |
| **GOZ** | `E R':[E',R2]` | 7 | GZO |
| **GTO** | `E' R:[E',R2]` | 7 | GOT |
| **GWB** | `R F:[E',R2]` | 8 | GBW |
| **GWI** | `D R:[E',R2]` | 7 | GIW |
| **GWJ** | `R F':[E',R2]` | 8 | GJW |
| **GWM** | `D' R:[E',R2]` | 7 | GMW |
| **GWO** | `R:[E',R2]` | 5 | GOW |
| **GXC** | `S R':[E',R2]` | 7 | GCX |
| **GXK** | `R2 S' R:[E',R2]` | 9 | GKX |
| **GXP** | `U R' F:[R2,E']` | 10 | GPX |
| **GXZ** | `U F:[R2,E']` | 8 | GZX |
| **GZO** | `E R:[E',R2]` | 7 | GOZ |
| **GZX** | `U F:[E',R2]` | 8 | GXZ |

### F3. S' · R2 · ×16

Shape `[R2 , S']` — interchange `R2`, insert `S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAK** | `R2 U':[R2,S']` | 8 | GKA |
| **GEK** | `R2 U:[R2,S']` | 8 | GKE |
| **GFO** | `S U:[R2,S']` | 8 | GOF |
| **GIM** | `D:[S',R2]` | 6 | GMI |
| **GKA** | `R2 U':[S',R2]` | 8 | GAK |
| **GKE** | `R2 U:[S',R2]` | 8 | GEK |
| **GKO** | `[R2,S']` | 4 | GOK |
| **GLP** | `U M' U:[R2,S']` | 10 | GPL |
| **GMI** | `D:[R2,S']` | 6 | GIM |
| **GMR** | `F D:[R2,S']` | 8 | GRM |
| **GMT** | `F' D:[R2,S']` | 8 | GTM |
| **GOF** | `S U:[S',R2]` | 8 | GFO |
| **GOK** | `[S',R2]` | 4 | GKO |
| **GQO** | `R S2 R:[S',R2]` | 9 | GOQ |
| **GRM** | `F D:[S',R2]` | 8 | GMR |
| **GTM** | `F' D:[S',R2]` | 8 | GMT |

### F4. S · R2 · ×13

Shape `[R2 , S]` — interchange `R2`, insert `S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAE** | `R2 U:[R2,S]` | 8 | GEA |
| **GBZ** | `U F R:[S,R2]` | 9 | GZB |
| **GCO** | `[S,R2]` | 4 | GOC |
| **GEA** | `R2 U:[S,R2]` | 8 | GAE |
| **GOC** | `[R2,S]` | 4 | GCO |
| **GOQ** | `R U2 R:[S,R2]` | 9 | GQO |
| **GQY** | `U2 R':[S,R2]` | 7 | GYQ |
| **GRZ** | `S' R':[S,R2]` | 7 | GZR |
| **GWY** | `E' S' R:[S,R2]` | 9 | GYW |
| **GYO** | `R S2 R':[S,R2]` | 9 | GOY |
| **GYQ** | `U2 R:[S,R2]` | 7 | GQY |
| **GZB** | `U F R':[S,R2]` | 9 | GBZ |
| **GZR** | `S' R:[S,R2]` | 7 | GRZ |

### F5. U2 · M · ×11

Shape `[M , U2]` — interchange `M`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAC** | `M2 U':[M,U2]` | 7 | GCA |
| **GCA** | `M2 U:[M,U2]` | 7 | GAC |
| **GCF** | `M' U:[M,U2]` | 7 | GFC |
| **GCJ** | `M U:[M,U2]` | 7 | GJC |
| **GCM** | `U:[M,U2]` | 5 | GMC |
| **GFC** | `M' U':[M,U2]` | 7 | GCF |
| **GJC** | `M U':[M,U2]` | 7 | GCJ |
| **GMC** | `U':[M,U2]` | 5 | GCM |
| **GNO** | `S' U:[M,U2]` | 7 | GON |
| **GON** | `S' U':[M,U2]` | 7 | GNO |
| **GRF** | `U' r U:[M,U2]` | 9 | GFR |

### F6. U2 · M' · ×10

Shape `[M' , U2]` — interchange `M'`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBC** | `M U:[M',U2]` | 7 | GCB |
| **GCB** | `M U':[M',U2]` | 7 | GBC |
| **GCE** | `M2 U':[M',U2]` | 7 | GEC |
| **GCI** | `U':[M',U2]` | 5 | GIC |
| **GCN** | `M' U':[M',U2]` | 7 | GNC |
| **GCR** | `F U':[M',U2]` | 7 | GRC |
| **GEC** | `M2 U:[M',U2]` | 7 | GCE |
| **GIC** | `U:[M',U2]` | 5 | GCI |
| **GNC** | `M' U:[M',U2]` | 7 | GCN |
| **GRC** | `F U:[M',U2]` | 7 | GCR |

### F7. ERS' · R · ×7

Shape `[R , E R S']` — interchange `R`, insert `E R S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GLR** | `E:[E R S',R]` | 9 | GRL |
| **GLS** | `E2:[E R S',R]` | 9 | GSL |
| **GLY** | `[E R S',R]` | 8 | GYL |
| **GRL** | `E:[R,E R S']` | 9 | GLR |
| **GSL** | `E2:[R,E R S']` | 9 | GLS |
| **GXL** | `E':[R,E R S']` | 8 | GLX |
| **GYL** | `[R,E R S']` | 8 | GLY |

### F8. U2@M · U · ×5

Shape `[U , M U2 M]` — interchange `U`, insert `M U2 M`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAI** | `[U,M U2 M]` | 8 | GIA |
| **GEI** | `U:[M U2 M,U]` | 9 | GIE |
| **GIA** | `[M U2 M,U]` | 8 | GAI |
| **GIE** | `U:[U,M U2 M]` | 9 | GEI |
| **GJN** | `M':[U,M U2 M]` | 8 | GNJ |

### F9. M@U' · R · ×5

Shape `[R , U' M U]` — interchange `R`, insert `U' M U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBN** | `F:[U' M U,R]` | 10 | GNB |
| **GNB** | `F:[R,U' M U]` | 10 | GBN |
| **GNQ** | `[R,U' M U]` | 8 | GQN |
| **GNT** | `E:[R,U' M U]` | 9 | GTN |
| **GQN** | `[U' M U,R]` | 8 | GNQ |

### F10. E'R'S' · R' · ×5

Shape `[R' , E' R' S']` — interchange `R'`, insert `E' R' S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GLQ** | `[E' R' S',R']` | 8 | GQL |
| **GLZ** | `E':[E' R' S',R']` | 9 | GZL |
| **GQL** | `[R',E' R' S']` | 8 | GLQ |
| **GTL** | `E:[R',E' R' S']` | 8 | GLT |
| **GZL** | `E':[R',E' R' S']` | 9 | GLZ |

### F11. MUS · U · ×4

Shape `[U , M U S]` — interchange `U`, insert `M U S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAL** | `[U,M U S]` | 8 | GLA |
| **GJL** | `M':[U,M U S]` | 8 | GLJ |
| **GLA** | `[M U S,U]` | 8 | GAL |
| **GLM** | `M2:[M U S,U]` | 9 | GML |

### F12. U2@M' · U' · ×4

Shape `[U' , M' U2 M']` — interchange `U'`, insert `M' U2 M'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAM** | `U':[M' U2 M',U']` | 9 | GMA |
| **GEM** | `[U',M' U2 M']` | 8 | GME |
| **GMA** | `U':[U',M' U2 M']` | 9 | GAM |
| **GME** | `[M' U2 M',U']` | 8 | GEM |

### F13. M2@U' · R · ×4

Shape `[R , U' M2 U]` — interchange `R`, insert `U' M2 U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBR** | `F:[U' M2 U,R]` | 10 | GRB |
| **GIQ** | `[R,U' M2 U]` | 8 | GQI |
| **GQI** | `[U' M2 U,R]` | 8 | GIQ |
| **GRB** | `F:[R,U' M2 U]` | 10 | GBR |

### F14. R2@S' · R · ×4

Shape `[R , S' R2 S']` — interchange `R`, insert `S' R2 S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GCQ** | `[R,S' R2 S']` | 8 | GQC |
| **GDL** | `R' S:[R,S' R2 S']` | 9 | GLD |
| **GKD** | `U2 R' S:[R,S' R2 S']` | 11 | GDK |
| **GQC** | `[S' R2 S',R]` | 8 | GCQ |

### F15. R2@S · R · ×4

Shape `[R , S R2 S]` — interchange `R`, insert `S R2 S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDK** | `U2 R S':[R,S R2 S]` | 11 | GKD |
| **GKY** | `R:[S R2 S,R]` | 9 | GYK |
| **GLD** | `R S':[R,S R2 S]` | 9 | GDL |
| **GYK** | `R:[R,S R2 S]` | 9 | GKY |

### F16. B@R · S · ×4

Shape `[S , R B R']` — interchange `S`, insert `R B R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDN** | `[R B R',S]` | 8 | GND |
| **GDP** | `D:[R B R',S]` | 10 | GPD |
| **GND** | `[S,R B R']` | 8 | GDN |
| **GPD** | `D:[S,R B R']` | 10 | GDP |

### F17. ER'S · R · ×4

Shape `[R , E R' S]` — interchange `R`, insert `E R' S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDY** | `[E R' S,R]` | 8 | GYD |
| **GPX** | `S' E':[R,E R' S]` | 10 | GXP |
| **GXD** | `E':[R,E R' S]` | 8 | GDX |
| **GYD** | `[R,E R' S]` | 8 | GDY |

### F18. M'U'S · U' · ×4

Shape `[U' , M' U' S]` — interchange `U'`, insert `M' U' S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GEL** | `[U',M' U' S]` | 8 | GLE |
| **GIL** | `M2:[U',M' U' S]` | 9 | GLI |
| **GLE** | `[M' U' S,U']` | 8 | GEL |
| **GNL** | `M:[U',M' U' S]` | 8 | GLN |

### F19. S2@R · U' · ×4

Shape `[U' , R S2 R']` — interchange `U'`, insert `R S2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GEY** | `U':[U',R S2 R']` | 9 | GYE |
| **GFZ** | `S':[R S2 R',U']` | 10 | GZF |
| **GYE** | `U':[R S2 R',U']` | 9 | GEY |
| **GZF** | `S':[U',R S2 R']` | 10 | GFZ |

### F20. B'@R · S' · ×4

Shape `[S' , R B' R']` — interchange `S'`, insert `R B' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GFJ** | `D:[S',R B' R']` | 10 | GJF |
| **GFP** | `[S',R B' R']` | 8 | GPF |
| **GJF** | `D:[R B' R',S']` | 10 | GFJ |
| **GPF** | `[R B' R',S']` | 8 | GFP |

### F21. F'@R' · S · ×3

Shape `[S , R' F' R]` — interchange `S`, insert `R' F' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAD** | `M:[S,R' F' R]` | 9 | GDA |
| **GDJ** | `[R' F' R,S]` | 8 | GJD |
| **GJD** | `[S,R' F' R]` | 8 | GDJ |

### F22. R@U' · M · ×3

Shape `[M , U' R U]` — interchange `M`, insert `U' R U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAF** | `R':[U' R U,M]` | 9 | GFA |
| **GFM** | `r':[U' R U,M]` | 10 | GMF |
| **GMF** | `r':[M,U' R U]` | 10 | GFM |

### F23. E@R' · U' · ×3

Shape `[U' , R' E R]` — interchange `U'`, insert `R' E R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAT** | `[R' E R,U']` | 8 | GTA |
| **GTA** | `[U',R' E R]` | 8 | GAT |
| **GTF** | `M:[U',R' E R]` | 9 | GFT |

### F24. F@R' · S · ×3

Shape `[S , R' F R]` — interchange `S`, insert `R' F R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBD** | `[S,R' F R]` | 8 | GDB |
| **GDB** | `[R' F R,S]` | 8 | GBD |
| **GED** | `M:[S,R' F R]` | 9 | GDE |

### F25. R'@U · M' · ×3

Shape `[M' , U R' U']` — interchange `M'`, insert `U R' U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBI** | `r:[U R' U',M']` | 10 | GIB |
| **GEB** | `R:[U R' U',M']` | 9 | GBE |
| **GIB** | `r:[M',U R' U']` | 10 | GBI |

### F26. S'R'E · R' · ×3

Shape `[R' , S' R' E]` — interchange `R'`, insert `S' R' E`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDT** | `R S:[R',S' R' E]` | 8 | GTD |
| **GTY** | `[R',S' R' E]` | 8 | GYT |
| **GYT** | `[S' R' E,R']` | 8 | GTY |

### F27. B2@R · S · ×3

Shape `[S , R B2 R']` — interchange `S`, insert `R B2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDW** | `[R B2 R',S]` | 8 | GWD |
| **GWD** | `[S,R B2 R']` | 8 | GDW |
| **GWQ** | `S' R:[R B2 R',S]` | 11 | GQW |

### F28. S'RE' · R · ×3

Shape `[R , S' R E']` — interchange `R`, insert `S' R E'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDX** | `R' S:[R,S' R E']` | 8 | GXD |
| **GQX** | `[S' R E',R]` | 8 | GXQ |
| **GXQ** | `[R,S' R E']` | 8 | GQX |

### F29. SU'M · U · ×3

Shape `[U , S U' M]` — interchange `U`, insert `S U' M`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GEN** | `[S U' M,U]` | 8 | GNE |
| **GNE** | `[U,S U' M]` | 8 | GEN |
| **GNI** | `M:[S U' M,U]` | 10 | GIN |

### F30. E@R' · U · ×3

Shape `[U , R' E R]` — interchange `U`, insert `R' E R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GET** | `[R' E R,U]` | 8 | GTE |
| **GTE** | `[U,R' E R]` | 8 | GET |
| **GTN** | `M:[U,R' E R]` | 9 | GNT |

### F31. E2@R' · U · ×3

Shape `[U , R' E2 R]` — interchange `U`, insert `R' E2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GEW** | `[R' E2 R,U]` | 8 | GWE |
| **GWE** | `[U,R' E2 R]` | 8 | GEW |
| **GWN** | `M:[U,R' E2 R]` | 9 | GNW |

### F32. E'@R · U · ×3

Shape `[U , R E' R']` — interchange `U`, insert `R E' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GEX** | `[R E' R',U]` | 8 | GXE |
| **GXB** | `M':[U,R E' R']` | 9 | GBX |
| **GXE** | `[U,R E' R']` | 8 | GEX |

### F33. M'@U · R' · ×3

Shape `[R' , U M' U']` — interchange `R'`, insert `U M' U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GJY** | `[R',U M' U']` | 8 | GYJ |
| **GYJ** | `[U M' U',R']` | 8 | GJY |
| **GYS** | `F':[U M' U',R']` | 10 | GSY |

### F34. M2@U · R · ×3

Shape `[R , U M2 U']` — interchange `R`, insert `U M2 U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GMQ** | `[R,U M2 U']` | 8 | GQM |
| **GMZ** | `E':[R,U M2 U']` | 9 | GZM |
| **GQM** | `[U M2 U',R]` | 8 | GMQ |

### F35. M@U' · R' · ×3

Shape `[R' , U' M U]` — interchange `R'`, insert `U' M U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GNR** | `E:[R',U' M U]` | 9 | GRN |
| **GNY** | `[R',U' M U]` | 8 | GYN |
| **GYN** | `[U' M U,R']` | 8 | GNY |

### F36. R2@E' · R' · ×3

Shape `[R' , E' R2 E']` — interchange `R'`, insert `E' R2 E'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GQS** | `[R',E' R2 E']` | 8 | GSQ |
| **GSQ** | `[E' R2 E',R']` | 8 | GQS |
| **GSY** | `R':[R',E' R2 E']` | 9 | GYS |

### F37. R2@E · R · ×3

Shape `[R , E R2 E]` — interchange `R`, insert `E R2 E`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GQW** | `R:[E R2 E,R]` | 9 | GWQ |
| **GXT** | `E':[R,E R2 E]` | 8 | GTX |
| **GYW** | `[R,E R2 E]` | 8 | GWY |

### F38. E@F · U · ×2

Shape `[U , F E F']` — interchange `U`, insert `F E F'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAJ** | `[U,F E F']` | 8 | GJA |
| **GJA** | `[F E F',U]` | 8 | GAJ |

### F39. SU'M · U' · ×2

Shape `[U' , S U' M]` — interchange `U'`, insert `S U' M`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAN** | `[S U' M,U']` | 8 | GNA |
| **GNA** | `[U',S U' M]` | 8 | GAN |

### F40. E@F · R2 · ×2

Shape `[R2 , F E F']` — interchange `R2`, insert `F E F'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAO** | `R':[F E F',R2]` | 9 | GOA |
| **GOA** | `R:[F E F',R2]` | 9 | GAO |

### F41. F@R · S · ×2

Shape `[S , R F R']` — interchange `S`, insert `R F R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAP** | `[R F R',S]` | 8 | GPA |
| **GPA** | `[S,R F R']` | 8 | GAP |

### F42. S2@R' · U · ×2

Shape `[U , R' S2 R]` — interchange `U`, insert `R' S2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAQ** | `U:[U,R' S2 R]` | 9 | GQA |
| **GQA** | `U:[R' S2 R,U]` | 9 | GAQ |

### F43. S'@R · U · ×2

Shape `[U , R S' R']` — interchange `U`, insert `R S' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAR** | `U:[U,R S' R']` | 9 | GRA |
| **GRA** | `U:[R S' R',U]` | 9 | GAR |

### F44. E2@R · U' · ×2

Shape `[U' , R E2 R']` — interchange `U'`, insert `R E2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAS** | `[R E2 R',U']` | 8 | GSA |
| **GSA** | `[U',R E2 R']` | 8 | GAS |

### F45. E@F' · U · ×2

Shape `[U , F' E F]` — interchange `U`, insert `F' E F`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAW** | `[U,F' E F]` | 8 | GWA |
| **GWA** | `[F' E F,U]` | 8 | GAW |

### F46. E'@R · U' · ×2

Shape `[U' , R E' R']` — interchange `U'`, insert `R E' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAX** | `[R E' R',U']` | 8 | GXA |
| **GXA** | `[U',R E' R']` | 8 | GAX |

### F47. E'@F · U · ×2

Shape `[U , F E' F']` — interchange `U`, insert `F E' F'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAY** | `[U,F E' F']` | 8 | GYA |
| **GYA** | `[F E' F',U]` | 8 | GAY |

### F48. E2@F' · U · ×2

Shape `[U , F' E2 F]` — interchange `U`, insert `F' E2 F`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GAZ** | `[U,F' E2 F]` | 8 | GZA |
| **GZA** | `[F' E2 F,U]` | 8 | GAZ |

### F49. R'@U · M · ×2

Shape `[M , U R' U']` — interchange `M`, insert `U R' U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBE** | `r:[U R' U',M]` | 9 | GEB |
| **GRN** | `u':[M,U R' U']` | 9 | GNR |

### F50. U2 · S' · ×2

Shape `[S' , U2]` — interchange `S'`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBF** | `S U:[S',U2]` | 7 | GFB |
| **GFB** | `S U':[S',U2]` | 7 | GBF |

### F51. U@R' · S2 · ×2

Shape `[S2 , R' U R]` — interchange `S2`, insert `R' U R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBK** | `S:[R' U R,S2]` | 9 | GKB |
| **GKB** | `S':[R' U R,S2]` | 9 | GBK |

### F52. S'@R' · F · ×2

Shape `[F , R' S' R]` — interchange `F`, insert `R' S' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBL** | `R':[R' S' R,F]` | 9 | GLB |
| **GLB** | `R':[F,R' S' R]` | 9 | GBL |

### F53. B@E · F · ×2

Shape `[F , E B E']` — interchange `F`, insert `E B E'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBM** | `R':[E B E',F]` | 10 | GMB |
| **GMB** | `R':[F,E B E']` | 10 | GBM |

### F54. F@R' · S' · ×2

Shape `[S' , R' F R]` — interchange `S'`, insert `R' F R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBP** | `[S',R' F R]` | 8 | GPB |
| **GPB** | `[R' F R,S']` | 8 | GBP |

### F55. S@U' · R' · ×2

Shape `[R' , U' S U]` — interchange `R'`, insert `U' S U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBQ** | `R':[U' S U,R']` | 9 | GQB |
| **GQB** | `R':[R',U' S U]` | 9 | GBQ |

### F56. E2@R · F' · ×2

Shape `[F' , R E2 R']` — interchange `F'`, insert `R E2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBS** | `[F',R E2 R']` | 8 | GSB |
| **GSB** | `[R E2 R',F']` | 8 | GBS |

### F57. S@U' · R · ×2

Shape `[R , U' S U]` — interchange `R`, insert `U' S U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GBY** | `R:[U' S U,R]` | 9 | GYB |
| **GYB** | `R:[R,U' S U]` | 9 | GBY |

### F58. U2 · S · ×2

Shape `[S , U2]` — interchange `S`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GCK** | `[S,U2]` | 4 | GKC |
| **GKC** | `[U2,S]` | 4 | GCK |

### F59. S@R · U2 · ×2

Shape `[U2 , R S R']` — interchange `U2`, insert `R S R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GCL** | `[U2,R S R']` | 8 | GLC |
| **GLC** | `[R S R',U2]` | 8 | GCL |

### F60. E@R · U2 · ×2

Shape `[U2 , R E R']` — interchange `U2`, insert `R E R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GCP** | `[R E R',U2]` | 8 | GPC |
| **GPC** | `[U2,R E R']` | 8 | GCP |

### F61. E2@R · U2 · ×2

Shape `[U2 , R E2 R']` — interchange `U2`, insert `R E2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GCS** | `[R E2 R',U2]` | 8 | GSC |
| **GSC** | `[U2,R E2 R']` | 8 | GCS |

### F62. E2@R' · U2 · ×2

Shape `[U2 , R' E2 R]` — interchange `U2`, insert `R' E2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GCW** | `[R' E2 R,U2]` | 8 | GWC |
| **GWC** | `[U2,R' E2 R]` | 8 | GCW |

### F63. S2@R · U2 · ×2

Shape `[U2 , R S2 R']` — interchange `U2`, insert `R S2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GCY** | `[U2,R S2 R']` | 8 | GYC |
| **GYC** | `[R S2 R',U2]` | 8 | GCY |

### F64. S'@R' · U2 · ×2

Shape `[U2 , R' S' R]` — interchange `U2`, insert `R' S' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GCZ** | `[U2,R' S' R]` | 8 | GZC |
| **GZC** | `[R' S' R,U2]` | 8 | GCZ |

### F65. B'@R · S · ×2

Shape `[S , R B' R']` — interchange `S`, insert `R B' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDF** | `[R B' R',S]` | 8 | GFD |
| **GFD** | `[S,R B' R']` | 8 | GDF |

### F66. U@r · S' · ×2

Shape `[S' , r U r']` — interchange `S'`, insert `r U r'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDI** | `[S',r U r']` | 8 | GID |
| **GID** | `[r U r',S']` | 8 | GDI |

### F67. U'@r' · S' · ×2

Shape `[S' , r' U' r]` — interchange `S'`, insert `r' U' r`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDM** | `[S',r' U' r]` | 8 | GMD |
| **GMD** | `[r' U' r,S']` | 8 | GDM |

### F68. M@U · R2 · ×2

Shape `[R2 , U M U']` — interchange `R2`, insert `U M U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDO** | `[R2,U M U']` | 8 | GOD |
| **GOD** | `[U M U',R2]` | 8 | GDO |

### F69. M@U · R · ×2

Shape `[R , U M U']` — interchange `R`, insert `U M U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDQ** | `[R,U M U']` | 8 | GQD |
| **GQD** | `[U M U',R]` | 8 | GDQ |

### F70. F'@U · S · ×2

Shape `[S , U F' U']` — interchange `S`, insert `U F' U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDR** | `[U F' U',S]` | 8 | GRD |
| **GRD** | `[S,U F' U']` | 8 | GDR |

### F71. F2@R' · S · ×2

Shape `[S , R' F2 R]` — interchange `S`, insert `R' F2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDS** | `[R' F2 R,S]` | 8 | GSD |
| **GSD** | `[S,R' F2 R]` | 8 | GDS |

### F72. U2@R' · S' · ×2

Shape `[S' , R' U2 R]` — interchange `S'`, insert `R' U2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GDZ** | `[S',R' U2 R]` | 8 | GZD |
| **GZD** | `[R' U2 R,S']` | 8 | GDZ |

### F73. SUM' · U · ×2

Shape `[U , S U M']` — interchange `U`, insert `S U M'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GEJ** | `[S U M',U]` | 8 | GJE |
| **GJE** | `[U,S U M']` | 8 | GEJ |

### F74. E'@B' · R2 · ×2

Shape `[R2 , B' E' B]` — interchange `R2`, insert `B' E' B`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GEO** | `R:[B' E' B,R2]` | 9 | GOE |
| **GOE** | `R':[B' E' B,R2]` | 9 | GEO |

### F75. E@R · U · ×2

Shape `[U , R E R']` — interchange `U`, insert `R E R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GEP** | `[R E R',U]` | 8 | GPE |
| **GPE** | `[U,R E R']` | 8 | GEP |

### F76. E@B' · U' · ×2

Shape `[U' , B' E B]` — interchange `U'`, insert `B' E B`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GEQ** | `[U',B' E B]` | 8 | GQE |
| **GQE** | `[B' E B,U']` | 8 | GEQ |

### F77. E2@B · U' · ×2

Shape `[U' , B E2 B']` — interchange `U'`, insert `B E2 B'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GER** | `[U',B E2 B']` | 8 | GRE |
| **GRE** | `[B E2 B',U']` | 8 | GER |

### F78. E2@R · U · ×2

Shape `[U , R E2 R']` — interchange `U`, insert `R E2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GES** | `[R E2 R',U]` | 8 | GSE |
| **GSE** | `[U,R E2 R']` | 8 | GES |

### F79. S'@R' · U' · ×2

Shape `[U' , R' S' R]` — interchange `U'`, insert `R' S' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GEZ** | `U':[U',R' S' R]` | 9 | GZE |
| **GZE** | `U':[R' S' R,U']` | 9 | GEZ |

### F80. R@U' · M' · ×2

Shape `[M' , U' R U]` — interchange `M'`, insert `U' R U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GFA** | `r':[U' R U,M']` | 9 | GAF |
| **GZJ** | `u:[M',U' R U]` | 9 | GJZ |

### F81. F'@E' · B' · ×2

Shape `[B' , E' F' E]` — interchange `B'`, insert `E' F' E`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GFI** | `R:[E' F' E,B']` | 10 | GIF |
| **GIF** | `R:[B',E' F' E]` | 10 | GFI |

### F82. U'@R' · S2 · ×2

Shape `[S2 , R' U' R]` — interchange `S2`, insert `R' U' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GFK** | `S:[R' U' R,S2]` | 9 | GKF |
| **GKF** | `S':[R' U' R,S2]` | 9 | GFK |

### F83. S'@R · B' · ×2

Shape `[B' , R S' R']` — interchange `B'`, insert `R S' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GFL** | `R:[R S' R',B']` | 9 | GLF |
| **GLF** | `R:[B',R S' R']` | 9 | GFL |

### F84. S@U · R' · ×2

Shape `[R' , U S U']` — interchange `R'`, insert `U S U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GFQ** | `R':[U S U',R']` | 9 | GQF |
| **GQF** | `R':[R',U S U']` | 9 | GFQ |

### F85. S@U · R · ×2

Shape `[R , U S U']` — interchange `R`, insert `U S U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GFY** | `R:[U S U',R]` | 9 | GYF |
| **GYF** | `R:[R,U S U']` | 9 | GFY |

### F86. D'@R' · S2 · ×2

Shape `[S2 , R' D' R]` — interchange `S2`, insert `R' D' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GIK** | `[R' D' R,S2]` | 8 | GKI |
| **GKI** | `[S2,R' D' R]` | 8 | GIK |

### F87. E@F' · R2 · ×2

Shape `[R2 , F' E F]` — interchange `R2`, insert `F' E F`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GIO** | `R':[F' E F,R2]` | 9 | GOI |
| **GOI** | `R:[F' E F,R2]` | 9 | GIO |

### F88. F'@R · S · ×2

Shape `[S , R F' R']` — interchange `S`, insert `R F' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GIP** | `[R F' R',S]` | 8 | GPI |
| **GPI** | `[S,R F' R']` | 8 | GIP |

### F89. M2@U' · F · ×2

Shape `[F , U' M2 U]` — interchange `F`, insert `U' M2 U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GIR** | `[U' M2 U,F]` | 8 | GRI |
| **GRI** | `[F,U' M2 U]` | 8 | GIR |

### F90. E'@R' · F · ×2

Shape `[F , R' E' R]` — interchange `F`, insert `R' E' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GIT** | `[F,R' E' R]` | 8 | GTI |
| **GTI** | `[R' E' R,F]` | 8 | GIT |

### F91. D@R · E' · ×2

Shape `[E' , R D R']` — interchange `E'`, insert `R D R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GIX** | `R:[E',R D R']` | 9 | GXI |
| **GXI** | `R:[R D R',E']` | 9 | GIX |

### F92. M2@U' · R' · ×2

Shape `[R' , U' M2 U]` — interchange `R'`, insert `U' M2 U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GIY** | `[R',U' M2 U]` | 8 | GYI |
| **GYI** | `[U' M2 U,R']` | 8 | GIY |

### F93. D@r' · S2 · ×2

Shape `[S2 , r' D r]` — interchange `S2`, insert `r' D r`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GJK** | `[r' D r,S2]` | 8 | GKJ |
| **GKJ** | `[S2,r' D r]` | 8 | GJK |

### F94. R'@U' · M' · ×2

Shape `[M' , U' R' U]` — interchange `M'`, insert `U' R' U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GJM** | `r:[U' R' U,M']` | 10 | GMJ |
| **GXJ** | `u:[M',U' R' U]` | 9 | GJX |

### F95. E@R' · D · ×2

Shape `[D , R' E R]` — interchange `D`, insert `R' E R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GJP** | `[D,R' E R]` | 8 | GPJ |
| **GPJ** | `[R' E R,D]` | 8 | GJP |

### F96. M@U · F · ×2

Shape `[F , U M U']` — interchange `F`, insert `U M U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GJQ** | `[U M U',F]` | 8 | GQJ |
| **GQJ** | `[F,U M U']` | 8 | GJQ |

### F97. E2@R · F · ×2

Shape `[F , R E2 R']` — interchange `F`, insert `R E2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GJS** | `[F,R E2 R']` | 8 | GSJ |
| **GSJ** | `[R E2 R',F]` | 8 | GJS |

### F98. D@R' · S2 · ×2

Shape `[S2 , R' D R]` — interchange `S2`, insert `R' D R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GKM** | `[S2,R' D R]` | 8 | GMK |
| **GMK** | `[R' D R,S2]` | 8 | GKM |

### F99. D'@r · S2 · ×2

Shape `[S2 , r D' r']` — interchange `S2`, insert `r D' r'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GKN** | `[S2,r D' r']` | 8 | GNK |
| **GNK** | `[r D' r',S2]` | 8 | GKN |

### F100. F@R · S' · ×2

Shape `[S' , R F R']` — interchange `S'`, insert `R F R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GKP** | `U:[S',R F R']` | 10 | GPK |
| **GPK** | `U:[R F R',S']` | 10 | GKP |

### F101. R2@S · R' · ×2

Shape `[R' , S R2 S]` — interchange `R'`, insert `S R2 S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GKQ** | `R':[S R2 S,R']` | 9 | GQK |
| **GQK** | `R':[R',S R2 S]` | 9 | GKQ |

### F102. U2@R · S2 · ×2

Shape `[S2 , R U2 R']` — interchange `S2`, insert `R U2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GKR** | `S':[R U2 R',S2]` | 9 | GRK |
| **GRK** | `S:[R U2 R',S2]` | 9 | GKR |

### F103. U2@R' · S2 · ×2

Shape `[S2 , R' U2 R]` — interchange `S2`, insert `R' U2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GKZ** | `S':[R' U2 R,S2]` | 9 | GZK |
| **GZK** | `S:[R' U2 R,S2]` | 9 | GKZ |

### F104. S'@R · B2 · ×2

Shape `[B2 , R S' R']` — interchange `B2`, insert `R S' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GLW** | `R:[B2,R S' R']` | 9 | GWL |
| **GWL** | `R:[R S' R',B2]` | 9 | GLW |

### F105. E'@B · R2 · ×2

Shape `[R2 , B E' B']` — interchange `R2`, insert `B E' B'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GMO** | `R:[B E' B',R2]` | 9 | GOM |
| **GOM** | `R':[B E' B',R2]` | 9 | GMO |

### F106. B@R' · S · ×2

Shape `[S , R' B R]` — interchange `S`, insert `R' B R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GMP** | `[R' B R,S]` | 8 | GPM |
| **GPM** | `[S,R' B R]` | 8 | GMP |

### F107. B'@R · E · ×2

Shape `[E , R B' R']` — interchange `E`, insert `R B' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GMX** | `R:[R B' R',E]` | 9 | GXM |
| **GXM** | `R:[E,R B' R']` | 9 | GMX |

### F108. M2@U · R' · ×2

Shape `[R' , U M2 U']` — interchange `R'`, insert `U M2 U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GMY** | `[R',U M2 U']` | 8 | GYM |
| **GYM** | `[U M2 U',R']` | 8 | GMY |

### F109. B@R · S' · ×2

Shape `[S' , R B R']` — interchange `S'`, insert `R B R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GNP** | `[S',R B R']` | 8 | GPN |
| **GPN** | `[R B R',S']` | 8 | GNP |

### F110. ERS' · R2 · ×2

Shape `[R2 , E R S']` — interchange `R2`, insert `E R S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GOL** | `R:[E R S',R2]` | 9 | GLO |
| **GWK** | `R E':[R2,E R S']` | 9 | GKW |

### F111. R@D · S' · ×2

Shape `[S' , D R D']` — interchange `S'`, insert `D R D'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GPQ** | `[D R D',S']` | 8 | GQP |
| **GQP** | `[S',D R D']` | 8 | GPQ |

### F112. R'@U' · S · ×2

Shape `[S , U' R' U]` — interchange `S`, insert `U' R' U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GPR** | `[S,U' R' U]` | 8 | GRP |
| **GRP** | `[U' R' U,S]` | 8 | GPR |

### F113. F2@R' · S' · ×2

Shape `[S' , R' F2 R]` — interchange `S'`, insert `R' F2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GPS** | `[R' F2 R,S']` | 8 | GSP |
| **GSP** | `[S',R' F2 R]` | 8 | GPS |

### F114. E@R · U' · ×2

Shape `[U' , R E R']` — interchange `U'`, insert `R E R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GPT** | `F:[U',R E R']` | 10 | GTP |
| **GTP** | `F:[R E R',U']` | 10 | GPT |

### F115. B2@R · S' · ×2

Shape `[S' , R B2 R']` — interchange `S'`, insert `R B2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GPW** | `[R B2 R',S']` | 8 | GWP |
| **GWP** | `[S',R B2 R']` | 8 | GPW |

### F116. R'@D' · S' · ×2

Shape `[S' , D' R' D]` — interchange `S'`, insert `D' R' D`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GPY** | `[D' R' D,S']` | 8 | GYP |
| **GYP** | `[S',D' R' D]` | 8 | GPY |

### F117. R@U' · S · ×2

Shape `[S , U' R U]` — interchange `S`, insert `U' R U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GPZ** | `[S,U' R U]` | 8 | GZP |
| **GZP** | `[U' R U,S]` | 8 | GPZ |

### F118. S'R'E · R · ×2

Shape `[R , S' R' E]` — interchange `R`, insert `S' R' E`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GQT** | `[S' R' E,R]` | 8 | GTQ |
| **GTQ** | `[R,S' R' E]` | 8 | GQT |

### F119. U'@B · E · ×2

Shape `[E , B U' B']` — interchange `E`, insert `B U' B'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GQZ** | `[E,B U' B']` | 8 | GZQ |
| **GZQ** | `[B U' B',E]` | 8 | GQZ |

### F120. U@F' · E · ×2

Shape `[E , F' U F]` — interchange `E`, insert `F' U F`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GRS** | `[F' U F,E]` | 8 | GSR |
| **GSR** | `[E,F' U F]` | 8 | GRS |

### F121. SR'E' · R' · ×2

Shape `[R' , S R' E']` — interchange `R'`, insert `S R' E'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GRW** | `S:[S R' E',R']` | 9 | GWR |
| **GWR** | `S:[R',S R' E']` | 9 | GRW |

### F122. U@F' · E2 · ×2

Shape `[E2 , F' U F]` — interchange `E2`, insert `F' U F`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GRX** | `[F' U F,E2]` | 8 | GXR |
| **GXR** | `[E2,F' U F]` | 8 | GRX |

### F123. U@F' · E' · ×2

Shape `[E' , F' U F]` — interchange `E'`, insert `F' U F`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GRY** | `[F' U F,E']` | 8 | GYR |
| **GYR** | `[E',F' U F]` | 8 | GRY |

### F124. F2 · E · ×2

Shape `[E , F2]` — interchange `E`, insert `F2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GSW** | `R':[E,F2]` | 6 | GWS |
| **GWS** | `R':[F2,E]` | 6 | GSW |

### F125. F2@R' · E · ×2

Shape `[E , R' F2 R]` — interchange `E`, insert `R' F2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GSX** | `[R' F2 R,E]` | 8 | GXS |
| **GXS** | `[E,R' F2 R]` | 8 | GSX |

### F126. SRE · R · ×2

Shape `[R , S R E]` — interchange `R`, insert `S R E`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GSZ** | `S:[R,S R E]` | 9 | GZS |
| **GZS** | `S:[S R E,R]` | 9 | GSZ |

### F127. U@F · E · ×2

Shape `[E , F U F']` — interchange `E`, insert `F U F'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GTW** | `[F U F',E]` | 8 | GWT |
| **GWT** | `[E,F U F']` | 8 | GTW |

### F128. U@F · E2 · ×2

Shape `[E2 , F U F']` — interchange `E2`, insert `F U F'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GTZ** | `[F U F',E2]` | 8 | GZT |
| **GZT** | `[E2,F U F']` | 8 | GTZ |

### F129. B2@R · E · ×2

Shape `[E , R B2 R']` — interchange `E`, insert `R B2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GWZ** | `[R B2 R',E]` | 8 | GZW |
| **GZW** | `[E,R B2 R']` | 8 | GWZ |

### F130. U'@B' · E · ×2

Shape `[E , B' U' B]` — interchange `E`, insert `B' U' B`.

| case | comm | moves | inverse |
|---|---|---|---|
| **GXY** | `[B' U' B,E]` | 8 | GYX |
| **GYX** | `[E,B' U' B]` | 8 | GXY |

## Singletons

| case | comm | moves | inverse |
|---|---|---|---|
| **GBT** | `R':[E,r U r']` | 9 | GTB |
| **GBX** | `r:[E',R' U R]` | 9 | GXB |
| **GDA** | `r:[B',R' S R]` | 9 | GAD |
| **GDE** | `r:[B,R' S R]` | 9 | GED |
| **GFT** | `r':[E,R U' R']` | 9 | GTF |
| **GFW** | `r':[E2,R U' R']` | 9 | GWF |
| **GFX** | `R:[E',r' U' r]` | 9 | GXF |
| **GIN** | `R:[B,E' F' E]` | 10 | GNI |
| **GJR** | `E:[R',u M' u']` | 9 | GRJ |
| **GJT** | `E:[R,u M' u']` | 9 | GTJ |
| **GJX** | `r:[E',R' U' R]` | 9 | GXJ |
| **GJZ** | `E':[R,U M' U']` | 9 | GZJ |
| **GKS** | `R2 S':[R2,S R E]` | 9 | GSK |
| **GKW** | `R2 S':[R2,S R' E']` | 9 | GWK |
| **GLJ** | `U S:[U,S' U' M']` | 8 | GJL |
| **GLN** | `U' S:[U',S' U M]` | 8 | GNL |
| **GLO** | `[U' S' U,R2]` | 8 | GOL |
| **GLT** | `R' S':[R',S R E]` | 8 | GTL |
| **GLX** | `R S':[R,S R' E']` | 8 | GXL |
| **GMJ** | `R':[U' M' U,F]` | 10 | GJM |
| **GML** | `r:[D',R S R']` | 10 | GLM |
| **GNJ** | `M':[M u2 M,U]` | 8 | GJN |
| **GNW** | `r':[E2,R U R']` | 9 | GWN |
| **GNX** | `R:[E',r' U r]` | 9 | GXN |
| **GNZ** | `E':[R,u' M u]` | 9 | GZN |
| **GOY** | `S2 R:[S',R2 U2]` | 9 | GYO |
| **GPL** | `R':[F D F',E']` | 10 | GLP |
| **GRJ** | `U:[M',u' R' u]` | 9 | GJR |
| **GSK** | `R' E:[R2,E' R' S']` | 9 | GKS |
| **GTB** | `M':[U,r' E r]` | 9 | GBT |
| **GTD** | `E:[R',E' R S]` | 8 | GDT |
| **GTJ** | `U:[M',u' R u]` | 9 | GJT |
| **GWF** | `M:[U',R' E2 R]` | 9 | GFW |
| **GXF** | `M:[U',r E' r']` | 9 | GFX |
| **GXN** | `M:[U,r E' r']` | 9 | GNX |
| **GZM** | `u:[M2,U' R U]` | 9 | GMZ |
| **GZN** | `U':[M,u R u']` | 9 | GNZ |

## Inverse‑pair index

| learn | comm | ⇄ | derive | comm |
|---|---|---|---|---|
| **GAC** | `M2 U':[M,U2]` | ⇄ | GCA | `M2 U:[M,U2]` |
| **GAD** | `M:[S,R' F' R]` | ⇄ | GDA | `r:[B',R' S R]` |
| **GAE** | `R2 U:[R2,S]` | ⇄ | GEA | `R2 U:[S,R2]` |
| **GAF** | `R':[U' R U,M]` | ⇄ | GFA | `r':[U' R U,M']` |
| **GAI** | `[U,M U2 M]` | ⇄ | GIA | `[M U2 M,U]` |
| **GAJ** | `[U,F E F']` | ⇄ | GJA | `[F E F',U]` |
| **GAK** | `R2 U':[R2,S']` | ⇄ | GKA | `R2 U':[S',R2]` |
| **GAL** | `[U,M U S]` | ⇄ | GLA | `[M U S,U]` |
| **GAM** | `U':[M' U2 M',U']` | ⇄ | GMA | `U':[U',M' U2 M']` |
| **GAN** | `[S U' M,U']` | ⇄ | GNA | `[U',S U' M]` |
| **GAO** | `R':[F E F',R2]` | ⇄ | GOA | `R:[F E F',R2]` |
| **GAP** | `[R F R',S]` | ⇄ | GPA | `[S,R F R']` |
| **GAQ** | `U:[U,R' S2 R]` | ⇄ | GQA | `U:[R' S2 R,U]` |
| **GAR** | `U:[U,R S' R']` | ⇄ | GRA | `U:[R S' R',U]` |
| **GAS** | `[R E2 R',U']` | ⇄ | GSA | `[U',R E2 R']` |
| **GAT** | `[R' E R,U']` | ⇄ | GTA | `[U',R' E R]` |
| **GAW** | `[U,F' E F]` | ⇄ | GWA | `[F' E F,U]` |
| **GAX** | `[R E' R',U']` | ⇄ | GXA | `[U',R E' R']` |
| **GAY** | `[U,F E' F']` | ⇄ | GYA | `[F E' F',U]` |
| **GAZ** | `[U,F' E2 F]` | ⇄ | GZA | `[F' E2 F,U]` |
| **GBC** | `M U:[M',U2]` | ⇄ | GCB | `M U':[M',U2]` |
| **GBD** | `[S,R' F R]` | ⇄ | GDB | `[R' F R,S]` |
| **GBE** | `r:[U R' U',M]` | ⇄ | GEB | `R:[U R' U',M']` |
| **GBF** | `S U:[S',U2]` | ⇄ | GFB | `S U':[S',U2]` |
| **GBI** | `r:[U R' U',M']` | ⇄ | GIB | `r:[M',U R' U']` |
| **GBJ** | `R F:[E,R2]` | ⇄ | GJB | `R F:[R2,E]` |
| **GBK** | `S:[R' U R,S2]` | ⇄ | GKB | `S':[R' U R,S2]` |
| **GBL** | `R':[R' S' R,F]` | ⇄ | GLB | `R':[F,R' S' R]` |
| **GBM** | `R':[E B E',F]` | ⇄ | GMB | `R':[F,E B E']` |
| **GBN** | `F:[U' M U,R]` | ⇄ | GNB | `F:[R,U' M U]` |
| **GBO** | `F' R':[E,R2]` | ⇄ | GOB | `F' R:[E,R2]` |
| **GBP** | `[S',R' F R]` | ⇄ | GPB | `[R' F R,S']` |
| **GBQ** | `R':[U' S U,R']` | ⇄ | GQB | `R':[R',U' S U]` |
| **GBR** | `F:[U' M2 U,R]` | ⇄ | GRB | `F:[R,U' M2 U]` |
| **GBS** | `[F',R E2 R']` | ⇄ | GSB | `[R E2 R',F']` |
| **GBT** | `R':[E,r U r']` | ⇄ | GTB | `M':[U,r' E r]` |
| **GBW** | `R F:[R2,E']` | ⇄ | GWB | `R F:[E',R2]` |
| **GBX** | `r:[E',R' U R]` | ⇄ | GXB | `M':[U,R E' R']` |
| **GBY** | `R:[U' S U,R]` | ⇄ | GYB | `R:[R,U' S U]` |
| **GBZ** | `U F R:[S,R2]` | ⇄ | GZB | `U F R':[S,R2]` |
| **GCE** | `M2 U':[M',U2]` | ⇄ | GEC | `M2 U:[M',U2]` |
| **GCF** | `M' U:[M,U2]` | ⇄ | GFC | `M' U':[M,U2]` |
| **GCI** | `U':[M',U2]` | ⇄ | GIC | `U:[M',U2]` |
| **GCJ** | `M U:[M,U2]` | ⇄ | GJC | `M U':[M,U2]` |
| **GCK** | `[S,U2]` | ⇄ | GKC | `[U2,S]` |
| **GCL** | `[U2,R S R']` | ⇄ | GLC | `[R S R',U2]` |
| **GCM** | `U:[M,U2]` | ⇄ | GMC | `U':[M,U2]` |
| **GCN** | `M' U':[M',U2]` | ⇄ | GNC | `M' U:[M',U2]` |
| **GCO** | `[S,R2]` | ⇄ | GOC | `[R2,S]` |
| **GCP** | `[R E R',U2]` | ⇄ | GPC | `[U2,R E R']` |
| **GCQ** | `[R,S' R2 S']` | ⇄ | GQC | `[S' R2 S',R]` |
| **GCR** | `F U':[M',U2]` | ⇄ | GRC | `F U:[M',U2]` |
| **GCS** | `[R E2 R',U2]` | ⇄ | GSC | `[U2,R E2 R']` |
| **GCT** | `S R':[E,R2]` | ⇄ | GTC | `S R:[E,R2]` |
| **GCW** | `[R' E2 R,U2]` | ⇄ | GWC | `[U2,R' E2 R]` |
| **GCX** | `S R:[E',R2]` | ⇄ | GXC | `S R':[E',R2]` |
| **GCY** | `[U2,R S2 R']` | ⇄ | GYC | `[R S2 R',U2]` |
| **GCZ** | `[U2,R' S' R]` | ⇄ | GZC | `[R' S' R,U2]` |
| **GDE** | `r:[B,R' S R]` | ⇄ | GED | `M:[S,R' F R]` |
| **GDF** | `[R B' R',S]` | ⇄ | GFD | `[S,R B' R']` |
| **GDI** | `[S',r U r']` | ⇄ | GID | `[r U r',S']` |
| **GDJ** | `[R' F' R,S]` | ⇄ | GJD | `[S,R' F' R]` |
| **GDK** | `U2 R S':[R,S R2 S]` | ⇄ | GKD | `U2 R' S:[R,S' R2 S']` |
| **GDL** | `R' S:[R,S' R2 S']` | ⇄ | GLD | `R S':[R,S R2 S]` |
| **GDM** | `[S',r' U' r]` | ⇄ | GMD | `[r' U' r,S']` |
| **GDN** | `[R B R',S]` | ⇄ | GND | `[S,R B R']` |
| **GDO** | `[R2,U M U']` | ⇄ | GOD | `[U M U',R2]` |
| **GDP** | `D:[R B R',S]` | ⇄ | GPD | `D:[S,R B R']` |
| **GDQ** | `[R,U M U']` | ⇄ | GQD | `[U M U',R]` |
| **GDR** | `[U F' U',S]` | ⇄ | GRD | `[S,U F' U']` |
| **GDS** | `[R' F2 R,S]` | ⇄ | GSD | `[S,R' F2 R]` |
| **GDT** | `R S:[R',S' R' E]` | ⇄ | GTD | `E:[R',E' R S]` |
| **GDW** | `[R B2 R',S]` | ⇄ | GWD | `[S,R B2 R']` |
| **GDX** | `R' S:[R,S' R E']` | ⇄ | GXD | `E':[R,E R' S]` |
| **GDY** | `[E R' S,R]` | ⇄ | GYD | `[R,E R' S]` |
| **GDZ** | `[S',R' U2 R]` | ⇄ | GZD | `[R' U2 R,S']` |
| **GEI** | `U:[M U2 M,U]` | ⇄ | GIE | `U:[U,M U2 M]` |
| **GEJ** | `[S U M',U]` | ⇄ | GJE | `[U,S U M']` |
| **GEK** | `R2 U:[R2,S']` | ⇄ | GKE | `R2 U:[S',R2]` |
| **GEL** | `[U',M' U' S]` | ⇄ | GLE | `[M' U' S,U']` |
| **GEM** | `[U',M' U2 M']` | ⇄ | GME | `[M' U2 M',U']` |
| **GEN** | `[S U' M,U]` | ⇄ | GNE | `[U,S U' M]` |
| **GEO** | `R:[B' E' B,R2]` | ⇄ | GOE | `R':[B' E' B,R2]` |
| **GEP** | `[R E R',U]` | ⇄ | GPE | `[U,R E R']` |
| **GEQ** | `[U',B' E B]` | ⇄ | GQE | `[B' E B,U']` |
| **GER** | `[U',B E2 B']` | ⇄ | GRE | `[B E2 B',U']` |
| **GES** | `[R E2 R',U]` | ⇄ | GSE | `[U,R E2 R']` |
| **GET** | `[R' E R,U]` | ⇄ | GTE | `[U,R' E R]` |
| **GEW** | `[R' E2 R,U]` | ⇄ | GWE | `[U,R' E2 R]` |
| **GEX** | `[R E' R',U]` | ⇄ | GXE | `[U,R E' R']` |
| **GEY** | `U':[U',R S2 R']` | ⇄ | GYE | `U':[R S2 R',U']` |
| **GEZ** | `U':[U',R' S' R]` | ⇄ | GZE | `U':[R' S' R,U']` |
| **GFI** | `R:[E' F' E,B']` | ⇄ | GIF | `R:[B',E' F' E]` |
| **GFJ** | `D:[S',R B' R']` | ⇄ | GJF | `D:[R B' R',S']` |
| **GFK** | `S:[R' U' R,S2]` | ⇄ | GKF | `S':[R' U' R,S2]` |
| **GFL** | `R:[R S' R',B']` | ⇄ | GLF | `R:[B',R S' R']` |
| **GFM** | `r':[U' R U,M]` | ⇄ | GMF | `r':[M,U' R U]` |
| **GFN** | `R' B:[R2,E']` | ⇄ | GNF | `R' B:[E',R2]` |
| **GFO** | `S U:[R2,S']` | ⇄ | GOF | `S U:[S',R2]` |
| **GFP** | `[S',R B' R']` | ⇄ | GPF | `[R B' R',S']` |
| **GFQ** | `R':[U S U',R']` | ⇄ | GQF | `R':[R',U S U']` |
| **GFR** | `R' u R:[E,R2]` | ⇄ | GRF | `U' r U:[M,U2]` |
| **GFS** | `R' B':[R2,E]` | ⇄ | GSF | `R' B':[E,R2]` |
| **GFT** | `r':[E,R U' R']` | ⇄ | GTF | `M:[U',R' E R]` |
| **GFW** | `r':[E2,R U' R']` | ⇄ | GWF | `M:[U',R' E2 R]` |
| **GFX** | `R:[E',r' U' r]` | ⇄ | GXF | `M:[U',r E' r']` |
| **GFY** | `R:[U S U',R]` | ⇄ | GYF | `R:[R,U S U']` |
| **GFZ** | `S':[R S2 R',U']` | ⇄ | GZF | `S':[U',R S2 R']` |
| **GIK** | `[R' D' R,S2]` | ⇄ | GKI | `[S2,R' D' R]` |
| **GIL** | `M2:[U',M' U' S]` | ⇄ | GLI | `r D F:[R2,E]` |
| **GIM** | `D:[S',R2]` | ⇄ | GMI | `D:[R2,S']` |
| **GIN** | `R:[B,E' F' E]` | ⇄ | GNI | `M:[S U' M,U]` |
| **GIO** | `R':[F' E F,R2]` | ⇄ | GOI | `R:[F' E F,R2]` |
| **GIP** | `[R F' R',S]` | ⇄ | GPI | `[S,R F' R']` |
| **GIQ** | `[R,U' M2 U]` | ⇄ | GQI | `[U' M2 U,R]` |
| **GIR** | `[U' M2 U,F]` | ⇄ | GRI | `[F,U' M2 U]` |
| **GIS** | `D R:[E,R2]` | ⇄ | GSI | `D R':[E,R2]` |
| **GIT** | `[F,R' E' R]` | ⇄ | GTI | `[R' E' R,F]` |
| **GIW** | `D R':[E',R2]` | ⇄ | GWI | `D R:[E',R2]` |
| **GIX** | `R:[E',R D R']` | ⇄ | GXI | `R:[R D R',E']` |
| **GIY** | `[R',U' M2 U]` | ⇄ | GYI | `[U' M2 U,R']` |
| **GIZ** | `U F:[E,R2]` | ⇄ | GZI | `U F:[R2,E]` |
| **GJK** | `[r' D r,S2]` | ⇄ | GKJ | `[S2,r' D r]` |
| **GJL** | `M':[U,M U S]` | ⇄ | GLJ | `U S:[U,S' U' M']` |
| **GJM** | `r:[U' R' U,M']` | ⇄ | GMJ | `R':[U' M' U,F]` |
| **GJN** | `M':[U,M U2 M]` | ⇄ | GNJ | `M':[M u2 M,U]` |
| **GJO** | `F R':[E,R2]` | ⇄ | GOJ | `F R:[E,R2]` |
| **GJP** | `[D,R' E R]` | ⇄ | GPJ | `[R' E R,D]` |
| **GJQ** | `[U M U',F]` | ⇄ | GQJ | `[F,U M U']` |
| **GJR** | `E:[R',u M' u']` | ⇄ | GRJ | `U:[M',u' R' u]` |
| **GJS** | `[F,R E2 R']` | ⇄ | GSJ | `[R E2 R',F]` |
| **GJT** | `E:[R,u M' u']` | ⇄ | GTJ | `U:[M',u' R u]` |
| **GJW** | `R F':[R2,E']` | ⇄ | GWJ | `R F':[E',R2]` |
| **GJX** | `r:[E',R' U' R]` | ⇄ | GXJ | `u:[M',U' R' U]` |
| **GJY** | `[R',U M' U']` | ⇄ | GYJ | `[U M' U',R']` |
| **GJZ** | `E':[R,U M' U']` | ⇄ | GZJ | `u:[M',U' R U]` |
| **GKM** | `[S2,R' D R]` | ⇄ | GMK | `[R' D R,S2]` |
| **GKN** | `[S2,r D' r']` | ⇄ | GNK | `[r D' r',S2]` |
| **GKO** | `[R2,S']` | ⇄ | GOK | `[S',R2]` |
| **GKP** | `U:[S',R F R']` | ⇄ | GPK | `U:[R F R',S']` |
| **GKQ** | `R':[S R2 S,R']` | ⇄ | GQK | `R':[R',S R2 S]` |
| **GKR** | `S':[R U2 R',S2]` | ⇄ | GRK | `S:[R U2 R',S2]` |
| **GKS** | `R2 S':[R2,S R E]` | ⇄ | GSK | `R' E:[R2,E' R' S']` |
| **GKT** | `R2 S' R:[E,R2]` | ⇄ | GTK | `S U2 R:[E,R2]` |
| **GKW** | `R2 S':[R2,S R' E']` | ⇄ | GWK | `R E':[R2,E R S']` |
| **GKX** | `S U2 R:[E',R2]` | ⇄ | GXK | `R2 S' R:[E',R2]` |
| **GKY** | `R:[S R2 S,R]` | ⇄ | GYK | `R:[R,S R2 S]` |
| **GKZ** | `S':[R' U2 R,S2]` | ⇄ | GZK | `S:[R' U2 R,S2]` |
| **GLM** | `M2:[M U S,U]` | ⇄ | GML | `r:[D',R S R']` |
| **GLN** | `U' S:[U',S' U M]` | ⇄ | GNL | `M:[U',M' U' S]` |
| **GLO** | `[U' S' U,R2]` | ⇄ | GOL | `R:[E R S',R2]` |
| **GLP** | `U M' U:[R2,S']` | ⇄ | GPL | `R':[F D F',E']` |
| **GLQ** | `[E' R' S',R']` | ⇄ | GQL | `[R',E' R' S']` |
| **GLR** | `E:[E R S',R]` | ⇄ | GRL | `E:[R,E R S']` |
| **GLS** | `E2:[E R S',R]` | ⇄ | GSL | `E2:[R,E R S']` |
| **GLT** | `R' S':[R',S R E]` | ⇄ | GTL | `E:[R',E' R' S']` |
| **GLW** | `R:[B2,R S' R']` | ⇄ | GWL | `R:[R S' R',B2]` |
| **GLX** | `R S':[R,S R' E']` | ⇄ | GXL | `E':[R,E R S']` |
| **GLY** | `[E R S',R]` | ⇄ | GYL | `[R,E R S']` |
| **GLZ** | `E':[E' R' S',R']` | ⇄ | GZL | `E':[R',E' R' S']` |
| **GMO** | `R:[B E' B',R2]` | ⇄ | GOM | `R':[B E' B',R2]` |
| **GMP** | `[R' B R,S]` | ⇄ | GPM | `[S,R' B R]` |
| **GMQ** | `[R,U M2 U']` | ⇄ | GQM | `[U M2 U',R]` |
| **GMR** | `F D:[R2,S']` | ⇄ | GRM | `F D:[S',R2]` |
| **GMS** | `D' R:[E,R2]` | ⇄ | GSM | `D' R':[E,R2]` |
| **GMT** | `F' D:[R2,S']` | ⇄ | GTM | `F' D:[S',R2]` |
| **GMW** | `D' R':[E',R2]` | ⇄ | GWM | `D' R:[E',R2]` |
| **GMX** | `R:[R B' R',E]` | ⇄ | GXM | `R:[E,R B' R']` |
| **GMY** | `[R',U M2 U']` | ⇄ | GYM | `[U M2 U',R']` |
| **GMZ** | `E':[R,U M2 U']` | ⇄ | GZM | `u:[M2,U' R U]` |
| **GNO** | `S' U:[M,U2]` | ⇄ | GON | `S' U':[M,U2]` |
| **GNP** | `[S',R B R']` | ⇄ | GPN | `[R B R',S']` |
| **GNQ** | `[R,U' M U]` | ⇄ | GQN | `[U' M U,R]` |
| **GNR** | `E:[R',U' M U]` | ⇄ | GRN | `u':[M,U R' U']` |
| **GNS** | `R' B:[R2,E]` | ⇄ | GSN | `R' B:[E,R2]` |
| **GNT** | `E:[R,U' M U]` | ⇄ | GTN | `M:[U,R' E R]` |
| **GNW** | `r':[E2,R U R']` | ⇄ | GWN | `M:[U,R' E2 R]` |
| **GNX** | `R:[E',r' U r]` | ⇄ | GXN | `M:[U,r E' r']` |
| **GNY** | `[R',U' M U]` | ⇄ | GYN | `[U' M U,R']` |
| **GNZ** | `E':[R,u' M u]` | ⇄ | GZN | `U':[M,u R u']` |
| **GOQ** | `R U2 R:[S,R2]` | ⇄ | GQO | `R S2 R:[S',R2]` |
| **GOR** | `E' R:[E,R2]` | ⇄ | GRO | `E' R':[E,R2]` |
| **GOS** | `R:[E,R2]` | ⇄ | GSO | `R':[E,R2]` |
| **GOT** | `E' R':[E',R2]` | ⇄ | GTO | `E' R:[E',R2]` |
| **GOW** | `R':[E',R2]` | ⇄ | GWO | `R:[E',R2]` |
| **GOX** | `E R:[E,R2]` | ⇄ | GXO | `E R':[E,R2]` |
| **GOY** | `S2 R:[S',R2 U2]` | ⇄ | GYO | `R S2 R':[S,R2]` |
| **GOZ** | `E R':[E',R2]` | ⇄ | GZO | `E R:[E',R2]` |
| **GPQ** | `[D R D',S']` | ⇄ | GQP | `[S',D R D']` |
| **GPR** | `[S,U' R' U]` | ⇄ | GRP | `[U' R' U,S]` |
| **GPS** | `[R' F2 R,S']` | ⇄ | GSP | `[S',R' F2 R]` |
| **GPT** | `F:[U',R E R']` | ⇄ | GTP | `F:[R E R',U']` |
| **GPW** | `[R B2 R',S']` | ⇄ | GWP | `[S',R B2 R']` |
| **GPX** | `S' E':[R,E R' S]` | ⇄ | GXP | `U R' F:[R2,E']` |
| **GPY** | `[D' R' D,S']` | ⇄ | GYP | `[S',D' R' D]` |
| **GPZ** | `[S,U' R U]` | ⇄ | GZP | `[U' R U,S]` |
| **GQS** | `[R',E' R2 E']` | ⇄ | GSQ | `[E' R2 E',R']` |
| **GQT** | `[S' R' E,R]` | ⇄ | GTQ | `[R,S' R' E]` |
| **GQW** | `R:[E R2 E,R]` | ⇄ | GWQ | `S' R:[R B2 R',S]` |
| **GQX** | `[S' R E',R]` | ⇄ | GXQ | `[R,S' R E']` |
| **GQY** | `U2 R':[S,R2]` | ⇄ | GYQ | `U2 R:[S,R2]` |
| **GQZ** | `[E,B U' B']` | ⇄ | GZQ | `[B U' B',E]` |
| **GRS** | `[F' U F,E]` | ⇄ | GSR | `[E,F' U F]` |
| **GRT** | `U' B':[E,R2]` | ⇄ | GTR | `U' B':[R2,E]` |
| **GRW** | `S:[S R' E',R']` | ⇄ | GWR | `S:[R',S R' E']` |
| **GRX** | `[F' U F,E2]` | ⇄ | GXR | `[E2,F' U F]` |
| **GRY** | `[F' U F,E']` | ⇄ | GYR | `[E',F' U F]` |
| **GRZ** | `S' R':[S,R2]` | ⇄ | GZR | `S' R:[S,R2]` |
| **GSW** | `R':[E,F2]` | ⇄ | GWS | `R':[F2,E]` |
| **GSX** | `[R' F2 R,E]` | ⇄ | GXS | `[E,R' F2 R]` |
| **GSY** | `R':[R',E' R2 E']` | ⇄ | GYS | `F':[U M' U',R']` |
| **GSZ** | `S:[R,S R E]` | ⇄ | GZS | `S:[S R E,R]` |
| **GTW** | `[F U F',E]` | ⇄ | GWT | `[E,F U F']` |
| **GTX** | `S R E:[E,R2]` | ⇄ | GXT | `E':[R,E R2 E]` |
| **GTY** | `[R',S' R' E]` | ⇄ | GYT | `[S' R' E,R']` |
| **GTZ** | `[F U F',E2]` | ⇄ | GZT | `[E2,F U F']` |
| **GWY** | `E' S' R:[S,R2]` | ⇄ | GYW | `[R,E R2 E]` |
| **GWZ** | `[R B2 R',E]` | ⇄ | GZW | `[E,R B2 R']` |
| **GXY** | `[B' U' B,E]` | ⇄ | GYX | `[E,B' U' B]` |
| **GXZ** | `U F:[R2,E']` | ⇄ | GZX | `U F:[E',R2]` |

## Case cards (with 3‑cycle diagrams)

#### GAC — U2 · M — `M2 U':[M,U2]` (7)
```
      · · ·
      3 u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=C(UL)
```

#### GAD — F'@R' · S — `M:[S,R' F' R]` (9)
```
      · · ·
      · u 1
      · 2 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=D(LU)
```

#### GAE — S · R2 — `R2 U:[R2,S]` (8)
```
      · 3 ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=E(UB)
```

#### GAF — R@U' · M — `R':[U' R U,M]` (9)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=F(BU)
```

#### GAI — U2@M · U — `[U,M U2 M]` (8)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=I(DF)
```

#### GAJ — E@F · U — `[U,F E F']` (8)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=J(FD)
```

#### GAK — S' · R2 — `R2 U':[R2,S']` (8)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=A(UF)  3=K(DL)
```

#### GAL — MUS · U — `[U,M U S]` (8)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=L(LD)
```

#### GAM — U2@M' · U' — `U':[M' U2 M',U']` (9)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=A(UF)  3=M(DB)
```

#### GAN — SU'M · U' — `[S U' M,U']` (8)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=N(BD)
```

#### GAO — E@F · R2 — `R':[F E F',R2]` (9)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=A(UF)  3=O(DR)
```

#### GAP — F@R · S — `[R F R',S]` (8)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=P(RD)
```

#### GAQ — S2@R' · U — `U:[U,R' S2 R]` (9)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=Q(FR)
```

#### GAR — S'@R · U — `U:[U,R S' R']` (9)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=R(RF)
```

#### GAS — E2@R · U' — `[R E2 R',U']` (8)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=S(FL)
```

#### GAT — E@R' · U' — `[R' E R,U']` (8)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=T(LF)
```

#### GAW — E@F' · U — `[U,F' E F]` (8)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=W(BL)
```

#### GAX — E'@R · U' — `[R E' R',U']` (8)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=X(LB)
```

#### GAY — E'@F · U — `[U,F E' F']` (8)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=Y(BR)
```

#### GAZ — E2@F' · U — `[U,F' E2 F]` (8)
```
      · · ·
      · u 1
      · 2 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=A(UF)  3=Z(RB)
```

#### GBC — U2 · M' — `M U:[M',U2]` (7)
```
      · · ·
      3 u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=C(UL)
```

#### GBD — F@R' · S — `[S,R' F R]` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=D(LU)
```

#### GBE — R'@U · M — `r:[U R' U',M]` (9)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=E(UB)
```

#### GBF — U2 · S' — `S U:[S',U2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=F(BU)
```

#### GBI — R'@U · M' — `r:[U R' U',M']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=I(DF)
```

#### GBJ — R2 · E — `R F:[E,R2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=J(FD)
```

#### GBK — U@R' · S2 — `S:[R' U R,S2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=B(FU)  3=K(DL)
```

#### GBL — S'@R' · F — `R':[R' S' R,F]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=L(LD)
```

#### GBM — B@E · F — `R':[E B E',F]` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=B(FU)  3=M(DB)
```

#### GBN — M@U' · R — `F:[U' M U,R]` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=N(BD)
```

#### GBO — R2 · E — `F' R':[E,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=B(FU)  3=O(DR)
```

#### GBP — F@R' · S' — `[S',R' F R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=P(RD)
```

#### GBQ — S@U' · R' — `R':[U' S U,R']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=Q(FR)
```

#### GBR — M2@U' · R — `F:[U' M2 U,R]` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=R(RF)
```

#### GBS — E2@R · F' — `[F',R E2 R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=S(FL)
```

#### GBT — U@r · E — `R':[E,r U r']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=T(LF)
```

#### GBW — R2 · E' — `R F:[R2,E']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=W(BL)
```

#### GBX — U@R' · E' — `r:[E',R' U R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=X(LB)
```

#### GBY — S@U' · R — `R:[U' S U,R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=Y(BR)
```

#### GBZ — S · R2 — `U F R:[S,R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 2 ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=B(FU)  3=Z(RB)
```

#### GCA — U2 · M — `M2 U:[M,U2]` (7)
```
      · · ·
      2 u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=A(UF)
```

#### GCB — U2 · M' — `M U':[M',U2]` (7)
```
      · · ·
      2 u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=B(FU)
```

#### GCE — U2 · M' — `M2 U':[M',U2]` (7)
```
      · 3 ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=E(UB)
```

#### GCF — U2 · M — `M' U:[M,U2]` (7)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=F(BU)
```

#### GCI — U2 · M' — `U':[M',U2]` (5)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=I(DF)
```

#### GCJ — U2 · M — `M U:[M,U2]` (7)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=J(FD)
```

#### GCK — U2 · S — `[S,U2]` (4)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=C(UL)  3=K(DL)
```

#### GCL — S@R · U2 — `[U2,R S R']` (8)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=L(LD)
```

#### GCM — U2 · M — `U:[M,U2]` (5)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=C(UL)  3=M(DB)
```

#### GCN — U2 · M' — `M' U':[M',U2]` (7)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=N(BD)
```

#### GCO — S · R2 — `[S,R2]` (4)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=C(UL)  3=O(DR)
```

#### GCP — E@R · U2 — `[R E R',U2]` (8)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=P(RD)
```

#### GCQ — R2@S' · R — `[R,S' R2 S']` (8)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=Q(FR)
```

#### GCR — U2 · M' — `F U':[M',U2]` (7)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=R(RF)
```

#### GCS — E2@R · U2 — `[R E2 R',U2]` (8)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=S(FL)
```

#### GCT — R2 · E — `S R':[E,R2]` (7)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=T(LF)
```

#### GCW — E2@R' · U2 — `[R' E2 R,U2]` (8)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=W(BL)
```

#### GCX — R2 · E' — `S R:[E',R2]` (7)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=X(LB)
```

#### GCY — S2@R · U2 — `[U2,R S2 R']` (8)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=Y(BR)
```

#### GCZ — S'@R' · U2 — `[U2,R' S' R]` (8)
```
      · · ·
      2 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=C(UL)  3=Z(RB)
```

#### GDA — S@R' · B' — `r:[B',R' S R]` (9)
```
      · · ·
      · u 1
      · 3 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=A(UF)
```

#### GDB — F@R' · S — `[R' F R,S]` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=B(FU)
```

#### GDE — S@R' · B — `r:[B,R' S R]` (9)
```
      · 3 ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=E(UB)
```

#### GDF — B'@R · S — `[R B' R',S]` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=F(BU)
```

#### GDI — U@r · S' — `[S',r U r']` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=I(DF)
```

#### GDJ — F'@R' · S — `[R' F' R,S]` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=J(FD)
```

#### GDK — R2@S · R — `U2 R S':[R,S R2 S]` (11)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=D(LU)  3=K(DL)
```

#### GDL — R2@S' · R — `R' S:[R,S' R2 S']` (9)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=L(LD)
```

#### GDM — U'@r' · S' — `[S',r' U' r]` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=D(LU)  3=M(DB)
```

#### GDN — B@R · S — `[R B R',S]` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=N(BD)
```

#### GDO — M@U · R2 — `[R2,U M U']` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=D(LU)  3=O(DR)
```

#### GDP — B@R · S — `D:[R B R',S]` (10)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=P(RD)
```

#### GDQ — M@U · R — `[R,U M U']` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=Q(FR)
```

#### GDR — F'@U · S — `[U F' U',S]` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=R(RF)
```

#### GDS — F2@R' · S — `[R' F2 R,S]` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=S(FL)
```

#### GDT — S'R'E · R' — `R S:[R',S' R' E]` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=T(LF)
```

#### GDW — B2@R · S — `[R B2 R',S]` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=W(BL)
```

#### GDX — S'RE' · R — `R' S:[R,S' R E']` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=X(LB)
```

#### GDY — ER'S · R — `[E R' S,R]` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=Y(BR)
```

#### GDZ — U2@R' · S' — `[S',R' U2 R]` (8)
```
      · · ·
      · u 1
      · · ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=D(LU)  3=Z(RB)
```

#### GEA — S · R2 — `R2 U:[S,R2]` (8)
```
      · 2 ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=A(UF)
```

#### GEB — R'@U · M' — `R:[U R' U',M']` (9)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=B(FU)
```

#### GEC — U2 · M' — `M2 U:[M',U2]` (7)
```
      · 2 ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=C(UL)
```

#### GED — F@R' · S — `M:[S,R' F R]` (9)
```
      · 2 ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=D(LU)
```

#### GEI — U2@M · U — `U:[M U2 M,U]` (9)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=I(DF)
```

#### GEJ — SUM' · U — `[S U M',U]` (8)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=J(FD)
```

#### GEK — S' · R2 — `R2 U:[R2,S']` (8)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=E(UB)  3=K(DL)
```

#### GEL — M'U'S · U' — `[U',M' U' S]` (8)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=L(LD)
```

#### GEM — U2@M' · U' — `[U',M' U2 M']` (8)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=E(UB)  3=M(DB)
```

#### GEN — SU'M · U — `[S U' M,U]` (8)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=N(BD)
```

#### GEO — E'@B' · R2 — `R:[B' E' B,R2]` (9)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=E(UB)  3=O(DR)
```

#### GEP — E@R · U — `[R E R',U]` (8)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=P(RD)
```

#### GEQ — E@B' · U' — `[U',B' E B]` (8)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=Q(FR)
```

#### GER — E2@B · U' — `[U',B E2 B']` (8)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=R(RF)
```

#### GES — E2@R · U — `[R E2 R',U]` (8)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=S(FL)
```

#### GET — E@R' · U — `[R' E R,U]` (8)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=T(LF)
```

#### GEW — E2@R' · U — `[R' E2 R,U]` (8)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=W(BL)
```

#### GEX — E'@R · U — `[R E' R',U]` (8)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=X(LB)
```

#### GEY — S2@R · U' — `U':[U',R S2 R']` (9)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=Y(BR)
```

#### GEZ — S'@R' · U' — `U':[U',R' S' R]` (9)
```
      · 2 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=E(UB)  3=Z(RB)
```

#### GFA — R@U' · M' — `r':[U' R U,M']` (9)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=A(UF)
```

#### GFB — U2 · S' — `S U':[S',U2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=B(FU)
```

#### GFC — U2 · M — `M' U':[M,U2]` (7)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=C(UL)
```

#### GFD — B'@R · S — `[S,R B' R']` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=D(LU)
```

#### GFI — F'@E' · B' — `R:[E' F' E,B']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=I(DF)
```

#### GFJ — B'@R · S' — `D:[S',R B' R']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=J(FD)
```

#### GFK — U'@R' · S2 — `S:[R' U' R,S2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=F(BU)  3=K(DL)
```

#### GFL — S'@R · B' — `R:[R S' R',B']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=L(LD)
```

#### GFM — R@U' · M — `r':[U' R U,M]` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=F(BU)  3=M(DB)
```

#### GFN — R2 · E' — `R' B:[R2,E']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=N(BD)
```

#### GFO — S' · R2 — `S U:[R2,S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=F(BU)  3=O(DR)
```

#### GFP — B'@R · S' — `[S',R B' R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=P(RD)
```

#### GFQ — S@U · R' — `R':[U S U',R']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=Q(FR)
```

#### GFR — R2 · E — `R' u R:[E,R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=R(RF)
```

#### GFS — R2 · E — `R' B':[R2,E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=S(FL)
```

#### GFT — U'@R · E — `r':[E,R U' R']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=T(LF)
```

#### GFW — U'@R · E2 — `r':[E2,R U' R']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=W(BL)
```

#### GFX — U'@r' · E' — `R:[E',r' U' r]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=X(LB)
```

#### GFY — S@U · R — `R:[U S U',R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=Y(BR)
```

#### GFZ — S2@R · U' — `S':[R S2 R',U']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=F(BU)  3=Z(RB)
```

#### GIA — U2@M · U — `[M U2 M,U]` (8)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=A(UF)
```

#### GIB — R'@U · M' — `r:[M',U R' U']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=B(FU)
```

#### GIC — U2 · M' — `U:[M',U2]` (5)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=C(UL)
```

#### GID — U@r · S' — `[r U r',S']` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=D(LU)
```

#### GIE — U2@M · U — `U:[U,M U2 M]` (9)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=E(UB)
```

#### GIF — F'@E' · B' — `R:[B',E' F' E]` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=F(BU)
```

#### GIK — D'@R' · S2 — `[R' D' R,S2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      3 d ·
      · · ·
  1=G(UR)  2=I(DF)  3=K(DL)
```

#### GIL — M'U'S · U' — `M2:[U',M' U' S]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=L(LD)
```

#### GIM — S' · R2 — `D:[S',R2]` (6)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · 3 ·
  1=G(UR)  2=I(DF)  3=M(DB)
```

#### GIN — F'@E' · B — `R:[B,E' F' E]` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=N(BD)
```

#### GIO — E@F' · R2 — `R':[F' E F,R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d 3
      · · ·
  1=G(UR)  2=I(DF)  3=O(DR)
```

#### GIP — F'@R · S — `[R F' R',S]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=P(RD)
```

#### GIQ — M2@U' · R — `[R,U' M2 U]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=Q(FR)
```

#### GIR — M2@U' · F — `[U' M2 U,F]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=R(RF)
```

#### GIS — R2 · E — `D R:[E,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=S(FL)
```

#### GIT — E'@R' · F — `[F,R' E' R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=T(LF)
```

#### GIW — R2 · E' — `D R':[E',R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=W(BL)
```

#### GIX — D@R · E' — `R:[E',R D R']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=X(LB)
```

#### GIY — M2@U' · R' — `[R',U' M2 U]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=Y(BR)
```

#### GIZ — R2 · E — `U F:[E,R2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=G(UR)  2=I(DF)  3=Z(RB)
```

#### GJA — E@F · U — `[F E F',U]` (8)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=A(UF)
```

#### GJB — R2 · E — `R F:[R2,E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=B(FU)
```

#### GJC — U2 · M — `M U':[M,U2]` (7)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=C(UL)
```

#### GJD — F'@R' · S — `[S,R' F' R]` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=D(LU)
```

#### GJE — SUM' · U — `[U,S U M']` (8)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=E(UB)
```

#### GJF — B'@R · S' — `D:[R B' R',S']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=F(BU)
```

#### GJK — D@r' · S2 — `[r' D r,S2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=J(FD)  3=K(DL)
```

#### GJL — MUS · U — `M':[U,M U S]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=L(LD)
```

#### GJM — R'@U' · M' — `r:[U' R' U,M']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=J(FD)  3=M(DB)
```

#### GJN — U2@M · U — `M':[U,M U2 M]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=N(BD)
```

#### GJO — R2 · E — `F R':[E,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=J(FD)  3=O(DR)
```

#### GJP — E@R' · D — `[D,R' E R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=P(RD)
```

#### GJQ — M@U · F — `[U M U',F]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=Q(FR)
```

#### GJR — M'@u · R' — `E:[R',u M' u']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=R(RF)
```

#### GJS — E2@R · F — `[F,R E2 R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=S(FL)
```

#### GJT — M'@u · R — `E:[R,u M' u']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=T(LF)
```

#### GJW — R2 · E' — `R F':[R2,E']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=W(BL)
```

#### GJX — U'@R' · E' — `r:[E',R' U' R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=X(LB)
```

#### GJY — M'@U · R' — `[R',U M' U']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=Y(BR)
```

#### GJZ — M'@U · R — `E':[R,U M' U']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=J(FD)  3=Z(RB)
```

#### GKA — S' · R2 — `R2 U':[S',R2]` (8)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=A(UF)
```

#### GKB — U@R' · S2 — `S':[R' U R,S2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=B(FU)
```

#### GKC — U2 · S — `[U2,S]` (4)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=C(UL)
```

#### GKD — R2@S' · R — `U2 R' S:[R,S' R2 S']` (11)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=D(LU)
```

#### GKE — S' · R2 — `R2 U:[S',R2]` (8)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=E(UB)
```

#### GKF — U'@R' · S2 — `S':[R' U' R,S2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=F(BU)
```

#### GKI — D'@R' · S2 — `[S2,R' D' R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=I(DF)
```

#### GKJ — D@r' · S2 — `[S2,r' D r]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=J(FD)
```

#### GKM — D@R' · S2 — `[S2,R' D R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · 3 ·
  1=G(UR)  2=K(DL)  3=M(DB)
```

#### GKN — D'@r · S2 — `[S2,r D' r']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=N(BD)
```

#### GKO — S' · R2 — `[R2,S']` (4)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d 3
      · · ·
  1=G(UR)  2=K(DL)  3=O(DR)
```

#### GKP — F@R · S' — `U:[S',R F R']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=P(RD)
```

#### GKQ — R2@S · R' — `R':[S R2 S,R']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=Q(FR)
```

#### GKR — U2@R · S2 — `S':[R U2 R',S2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=R(RF)
```

#### GKS — SRE · R2 — `R2 S':[R2,S R E]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=S(FL)
```

#### GKT — R2 · E — `R2 S' R:[E,R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=T(LF)
```

#### GKW — SR'E' · R2 — `R2 S':[R2,S R' E']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=W(BL)
```

#### GKX — R2 · E' — `S U2 R:[E',R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=X(LB)
```

#### GKY — R2@S · R — `R:[S R2 S,R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=Y(BR)
```

#### GKZ — U2@R' · S2 — `S':[R' U2 R,S2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=G(UR)  2=K(DL)  3=Z(RB)
```

#### GLA — MUS · U — `[M U S,U]` (8)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=A(UF)
```

#### GLB — S'@R' · F — `R':[F,R' S' R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=B(FU)
```

#### GLC — S@R · U2 — `[R S R',U2]` (8)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=C(UL)
```

#### GLD — R2@S · R — `R S':[R,S R2 S]` (9)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=D(LU)
```

#### GLE — M'U'S · U' — `[M' U' S,U']` (8)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=E(UB)
```

#### GLF — S'@R · B' — `R:[B',R S' R']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=F(BU)
```

#### GLI — R2 · E — `r D F:[R2,E]` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=I(DF)
```

#### GLJ — S'U'M' · U — `U S:[U,S' U' M']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=J(FD)
```

#### GLM — MUS · U — `M2:[M U S,U]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=L(LD)  3=M(DB)
```

#### GLN — S'UM · U' — `U' S:[U',S' U M]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=N(BD)
```

#### GLO — S'@U' · R2 — `[U' S' U,R2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=L(LD)  3=O(DR)
```

#### GLP — S' · R2 — `U M' U:[R2,S']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=P(RD)
```

#### GLQ — E'R'S' · R' — `[E' R' S',R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=Q(FR)
```

#### GLR — ERS' · R — `E:[E R S',R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=R(RF)
```

#### GLS — ERS' · R — `E2:[E R S',R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=S(FL)
```

#### GLT — SRE · R' — `R' S':[R',S R E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=T(LF)
```

#### GLW — S'@R · B2 — `R:[B2,R S' R']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=W(BL)
```

#### GLX — SR'E' · R — `R S':[R,S R' E']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=X(LB)
```

#### GLY — ERS' · R — `[E R S',R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=Y(BR)
```

#### GLZ — E'R'S' · R' — `E':[E' R' S',R']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=L(LD)  3=Z(RB)
```

#### GMA — U2@M' · U' — `U':[U',M' U2 M']` (9)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=A(UF)
```

#### GMB — B@E · F — `R':[F,E B E']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=B(FU)
```

#### GMC — U2 · M — `U':[M,U2]` (5)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=C(UL)
```

#### GMD — U'@r' · S' — `[r' U' r,S']` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=D(LU)
```

#### GME — U2@M' · U' — `[M' U2 M',U']` (8)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=E(UB)
```

#### GMF — R@U' · M — `r':[M,U' R U]` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=F(BU)
```

#### GMI — S' · R2 — `D:[R2,S']` (6)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=I(DF)
```

#### GMJ — M'@U' · F — `R':[U' M' U,F]` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=J(FD)
```

#### GMK — D@R' · S2 — `[R' D R,S2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=K(DL)
```

#### GML — S@R · D' — `r:[D',R S R']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=L(LD)
```

#### GMO — E'@B · R2 — `R:[B E' B',R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · 2 ·
  1=G(UR)  2=M(DB)  3=O(DR)
```

#### GMP — B@R' · S — `[R' B R,S]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=P(RD)
```

#### GMQ — M2@U · R — `[R,U M2 U']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=Q(FR)
```

#### GMR — S' · R2 — `F D:[R2,S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=R(RF)
```

#### GMS — R2 · E — `D' R:[E,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=S(FL)
```

#### GMT — S' · R2 — `F' D:[R2,S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=T(LF)
```

#### GMW — R2 · E' — `D' R':[E',R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=W(BL)
```

#### GMX — B'@R · E — `R:[R B' R',E]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=X(LB)
```

#### GMY — M2@U · R' — `[R',U M2 U']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=Y(BR)
```

#### GMZ — M2@U · R — `E':[R,U M2 U']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=G(UR)  2=M(DB)  3=Z(RB)
```

#### GNA — SU'M · U' — `[U',S U' M]` (8)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=A(UF)
```

#### GNB — M@U' · R — `F:[R,U' M U]` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=B(FU)
```

#### GNC — U2 · M' — `M' U:[M',U2]` (7)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=C(UL)
```

#### GND — B@R · S — `[S,R B R']` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=D(LU)
```

#### GNE — SU'M · U — `[U,S U' M]` (8)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=E(UB)
```

#### GNF — R2 · E' — `R' B:[E',R2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=F(BU)
```

#### GNI — SU'M · U — `M:[S U' M,U]` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=I(DF)
```

#### GNJ — u2@M · U — `M':[M u2 M,U]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=J(FD)
```

#### GNK — D'@r · S2 — `[r D' r',S2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=N(BD)  3=K(DL)
```

#### GNL — M'U'S · U' — `M:[U',M' U' S]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=L(LD)
```

#### GNO — U2 · M — `S' U:[M,U2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=N(BD)  3=O(DR)
```

#### GNP — B@R · S' — `[S',R B R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=P(RD)
```

#### GNQ — M@U' · R — `[R,U' M U]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=Q(FR)
```

#### GNR — M@U' · R' — `E:[R',U' M U]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=R(RF)
```

#### GNS — R2 · E — `R' B:[R2,E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=S(FL)
```

#### GNT — M@U' · R — `E:[R,U' M U]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=T(LF)
```

#### GNW — U@R · E2 — `r':[E2,R U R']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=W(BL)
```

#### GNX — U@r' · E' — `R:[E',r' U r]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=X(LB)
```

#### GNY — M@U' · R' — `[R',U' M U]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=Y(BR)
```

#### GNZ — M@u' · R — `E':[R,u' M u]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=N(BD)  3=Z(RB)
```

#### GOA — E@F · R2 — `R:[F E F',R2]` (9)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=A(UF)
```

#### GOB — R2 · E — `F' R:[E,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=B(FU)
```

#### GOC — S · R2 — `[R2,S]` (4)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=C(UL)
```

#### GOD — M@U · R2 — `[U M U',R2]` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=D(LU)
```

#### GOE — E'@B' · R2 — `R':[B' E' B,R2]` (9)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=E(UB)
```

#### GOF — S' · R2 — `S U:[S',R2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=F(BU)
```

#### GOI — E@F' · R2 — `R:[F' E F,R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=I(DF)
```

#### GOJ — R2 · E — `F R:[E,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=J(FD)
```

#### GOK — S' · R2 — `[S',R2]` (4)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d 2
      · · ·
  1=G(UR)  2=O(DR)  3=K(DL)
```

#### GOL — ERS' · R2 — `R:[E R S',R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=L(LD)
```

#### GOM — E'@B · R2 — `R':[B E' B',R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · 3 ·
  1=G(UR)  2=O(DR)  3=M(DB)
```

#### GON — U2 · M — `S' U':[M,U2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=N(BD)
```

#### GOQ — S · R2 — `R U2 R:[S,R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=Q(FR)
```

#### GOR — R2 · E — `E' R:[E,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=R(RF)
```

#### GOS — R2 · E — `R:[E,R2]` (5)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=S(FL)
```

#### GOT — R2 · E' — `E' R':[E',R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=T(LF)
```

#### GOW — R2 · E' — `R':[E',R2]` (5)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=W(BL)
```

#### GOX — R2 · E — `E R:[E,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=X(LB)
```

#### GOY — R2U2 · S' — `S2 R:[S',R2 U2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=Y(BR)
```

#### GOZ — R2 · E' — `E R':[E',R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=G(UR)  2=O(DR)  3=Z(RB)
```

#### GPA — F@R · S — `[S,R F R']` (8)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=A(UF)
```

#### GPB — F@R' · S' — `[R' F R,S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=B(FU)
```

#### GPC — E@R · U2 — `[U2,R E R']` (8)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=C(UL)
```

#### GPD — B@R · S — `D:[S,R B R']` (10)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=D(LU)
```

#### GPE — E@R · U — `[U,R E R']` (8)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=E(UB)
```

#### GPF — B'@R · S' — `[R B' R',S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=F(BU)
```

#### GPI — F'@R · S — `[S,R F' R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=I(DF)
```

#### GPJ — E@R' · D — `[R' E R,D]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=J(FD)
```

#### GPK — F@R · S' — `U:[R F R',S']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=P(RD)  3=K(DL)
```

#### GPL — D@F · E' — `R':[F D F',E']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=L(LD)
```

#### GPM — B@R' · S — `[S,R' B R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=P(RD)  3=M(DB)
```

#### GPN — B@R · S' — `[R B R',S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=N(BD)
```

#### GPQ — R@D · S' — `[D R D',S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=Q(FR)
```

#### GPR — R'@U' · S — `[S,U' R' U]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=R(RF)
```

#### GPS — F2@R' · S' — `[R' F2 R,S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=S(FL)
```

#### GPT — E@R · U' — `F:[U',R E R']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=T(LF)
```

#### GPW — B2@R · S' — `[R B2 R',S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=W(BL)
```

#### GPX — ER'S · R — `S' E':[R,E R' S]` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=X(LB)
```

#### GPY — R'@D' · S' — `[D' R' D,S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=Y(BR)
```

#### GPZ — R@U' · S — `[S,U' R U]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=P(RD)  3=Z(RB)
```

#### GQA — S2@R' · U — `U:[R' S2 R,U]` (9)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=A(UF)
```

#### GQB — S@U' · R' — `R':[R',U' S U]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=B(FU)
```

#### GQC — R2@S' · R — `[S' R2 S',R]` (8)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=C(UL)
```

#### GQD — M@U · R — `[U M U',R]` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=D(LU)
```

#### GQE — E@B' · U' — `[B' E B,U']` (8)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=E(UB)
```

#### GQF — S@U · R' — `R':[R',U S U']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=F(BU)
```

#### GQI — M2@U' · R — `[U' M2 U,R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=I(DF)
```

#### GQJ — M@U · F — `[F,U M U']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=J(FD)
```

#### GQK — R2@S · R' — `R':[R',S R2 S]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=K(DL)
```

#### GQL — E'R'S' · R' — `[R',E' R' S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=L(LD)
```

#### GQM — M2@U · R — `[U M2 U',R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=Q(FR)  3=M(DB)
```

#### GQN — M@U' · R — `[U' M U,R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=N(BD)
```

#### GQO — S' · R2 — `R S2 R:[S',R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=Q(FR)  3=O(DR)
```

#### GQP — R@D · S' — `[S',D R D']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=P(RD)
```

#### GQS — R2@E' · R' — `[R',E' R2 E']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=S(FL)
```

#### GQT — S'R'E · R — `[S' R' E,R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=T(LF)
```

#### GQW — R2@E · R — `R:[E R2 E,R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=W(BL)
```

#### GQX — S'RE' · R — `[S' R E',R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=X(LB)
```

#### GQY — S · R2 — `U2 R':[S,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=Y(BR)
```

#### GQZ — U'@B · E — `[E,B U' B']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Q(FR)  3=Z(RB)
```

#### GRA — S'@R · U — `U:[R S' R',U]` (9)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=A(UF)
```

#### GRB — M2@U' · R — `F:[R,U' M2 U]` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=B(FU)
```

#### GRC — U2 · M' — `F U:[M',U2]` (7)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=C(UL)
```

#### GRD — F'@U · S — `[S,U F' U']` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=D(LU)
```

#### GRE — E2@B · U' — `[B E2 B',U']` (8)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=E(UB)
```

#### GRF — U2 · M — `U' r U:[M,U2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=F(BU)
```

#### GRI — M2@U' · F — `[F,U' M2 U]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=I(DF)
```

#### GRJ — R'@u' · M' — `U:[M',u' R' u]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=J(FD)
```

#### GRK — U2@R · S2 — `S:[R U2 R',S2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=R(RF)  3=K(DL)
```

#### GRL — ERS' · R — `E:[R,E R S']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=L(LD)
```

#### GRM — S' · R2 — `F D:[S',R2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=R(RF)  3=M(DB)
```

#### GRN — R'@U · M — `u':[M,U R' U']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=N(BD)
```

#### GRO — R2 · E — `E' R':[E,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=R(RF)  3=O(DR)
```

#### GRP — R'@U' · S — `[U' R' U,S]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=P(RD)
```

#### GRS — U@F' · E — `[F' U F,E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=S(FL)
```

#### GRT — R2 · E — `U' B':[E,R2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=T(LF)
```

#### GRW — SR'E' · R' — `S:[S R' E',R']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=W(BL)
```

#### GRX — U@F' · E2 — `[F' U F,E2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=X(LB)
```

#### GRY — U@F' · E' — `[F' U F,E']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=Y(BR)
```

#### GRZ — S · R2 — `S' R':[S,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=R(RF)  3=Z(RB)
```

#### GSA — E2@R · U' — `[U',R E2 R']` (8)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=A(UF)
```

#### GSB — E2@R · F' — `[R E2 R',F']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=B(FU)
```

#### GSC — E2@R · U2 — `[U2,R E2 R']` (8)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=C(UL)
```

#### GSD — F2@R' · S — `[S,R' F2 R]` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=D(LU)
```

#### GSE — E2@R · U — `[U,R E2 R']` (8)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=E(UB)
```

#### GSF — R2 · E — `R' B':[E,R2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=F(BU)
```

#### GSI — R2 · E — `D R':[E,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=I(DF)
```

#### GSJ — E2@R · F — `[R E2 R',F]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=J(FD)
```

#### GSK — E'R'S' · R2 — `R' E:[R2,E' R' S']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=S(FL)  3=K(DL)
```

#### GSL — ERS' · R — `E2:[R,E R S']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=L(LD)
```

#### GSM — R2 · E — `D' R':[E,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=S(FL)  3=M(DB)
```

#### GSN — R2 · E — `R' B:[E,R2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=N(BD)
```

#### GSO — R2 · E — `R':[E,R2]` (5)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=S(FL)  3=O(DR)
```

#### GSP — F2@R' · S' — `[S',R' F2 R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=P(RD)
```

#### GSQ — R2@E' · R' — `[E' R2 E',R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=Q(FR)
```

#### GSR — U@F' · E — `[E,F' U F]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=R(RF)
```

#### GSW — F2 · E — `R':[E,F2]` (6)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=W(BL)
```

#### GSX — F2@R' · E — `[R' F2 R,E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=X(LB)
```

#### GSY — R2@E' · R' — `R':[R',E' R2 E']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=Y(BR)
```

#### GSZ — SRE · R — `S:[R,S R E]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=S(FL)  3=Z(RB)
```

#### GTA — E@R' · U' — `[U',R' E R]` (8)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=A(UF)
```

#### GTB — E@r' · U — `M':[U,r' E r]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=B(FU)
```

#### GTC — R2 · E — `S R:[E,R2]` (7)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=C(UL)
```

#### GTD — E'RS · R' — `E:[R',E' R S]` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=D(LU)
```

#### GTE — E@R' · U — `[U,R' E R]` (8)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=E(UB)
```

#### GTF — E@R' · U' — `M:[U',R' E R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=F(BU)
```

#### GTI — E'@R' · F — `[R' E' R,F]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=I(DF)
```

#### GTJ — R@u' · M' — `U:[M',u' R u]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=J(FD)
```

#### GTK — R2 · E — `S U2 R:[E,R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=T(LF)  3=K(DL)
```

#### GTL — E'R'S' · R' — `E:[R',E' R' S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=L(LD)
```

#### GTM — S' · R2 — `F' D:[S',R2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=T(LF)  3=M(DB)
```

#### GTN — E@R' · U — `M:[U,R' E R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=N(BD)
```

#### GTO — R2 · E' — `E' R:[E',R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=T(LF)  3=O(DR)
```

#### GTP — E@R · U' — `F:[R E R',U']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=P(RD)
```

#### GTQ — S'R'E · R — `[R,S' R' E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=Q(FR)
```

#### GTR — R2 · E — `U' B':[R2,E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=R(RF)
```

#### GTW — U@F · E — `[F U F',E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=W(BL)
```

#### GTX — R2 · E — `S R E:[E,R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=X(LB)
```

#### GTY — S'R'E · R' — `[R',S' R' E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=Y(BR)
```

#### GTZ — U@F · E2 — `[F U F',E2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=T(LF)  3=Z(RB)
```

#### GWA — E@F' · U — `[F' E F,U]` (8)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=A(UF)
```

#### GWB — R2 · E' — `R F:[E',R2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=B(FU)
```

#### GWC — E2@R' · U2 — `[U2,R' E2 R]` (8)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=C(UL)
```

#### GWD — B2@R · S — `[S,R B2 R']` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=D(LU)
```

#### GWE — E2@R' · U — `[U,R' E2 R]` (8)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=E(UB)
```

#### GWF — E2@R' · U' — `M:[U',R' E2 R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=F(BU)
```

#### GWI — R2 · E' — `D R:[E',R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=I(DF)
```

#### GWJ — R2 · E' — `R F':[E',R2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=J(FD)
```

#### GWK — ERS' · R2 — `R E':[R2,E R S']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=W(BL)  3=K(DL)
```

#### GWL — S'@R · B2 — `R:[R S' R',B2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=L(LD)
```

#### GWM — R2 · E' — `D' R:[E',R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=W(BL)  3=M(DB)
```

#### GWN — E2@R' · U — `M:[U,R' E2 R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=N(BD)
```

#### GWO — R2 · E' — `R:[E',R2]` (5)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=W(BL)  3=O(DR)
```

#### GWP — B2@R · S' — `[S',R B2 R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=P(RD)
```

#### GWQ — B2@R · S — `S' R:[R B2 R',S]` (11)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=Q(FR)
```

#### GWR — SR'E' · R' — `S:[R',S R' E']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=R(RF)
```

#### GWS — F2 · E — `R':[F2,E]` (6)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=S(FL)
```

#### GWT — U@F · E — `[E,F U F']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=T(LF)
```

#### GWY — S · R2 — `E' S' R:[S,R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=Y(BR)
```

#### GWZ — B2@R · E — `[R B2 R',E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=W(BL)  3=Z(RB)
```

#### GXA — E'@R · U' — `[U',R E' R']` (8)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=A(UF)
```

#### GXB — E'@R · U — `M':[U,R E' R']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=B(FU)
```

#### GXC — R2 · E' — `S R':[E',R2]` (7)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=C(UL)
```

#### GXD — ER'S · R — `E':[R,E R' S]` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=D(LU)
```

#### GXE — E'@R · U — `[U,R E' R']` (8)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=E(UB)
```

#### GXF — E'@r · U' — `M:[U',r E' r']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=F(BU)
```

#### GXI — D@R · E' — `R:[R D R',E']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=I(DF)
```

#### GXJ — R'@U' · M' — `u:[M',U' R' U]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=J(FD)
```

#### GXK — R2 · E' — `R2 S' R:[E',R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=X(LB)  3=K(DL)
```

#### GXL — ERS' · R — `E':[R,E R S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=L(LD)
```

#### GXM — B'@R · E — `R:[E,R B' R']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=X(LB)  3=M(DB)
```

#### GXN — E'@r · U — `M:[U,r E' r']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=N(BD)
```

#### GXO — R2 · E — `E R':[E,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=X(LB)  3=O(DR)
```

#### GXP — R2 · E' — `U R' F:[R2,E']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=P(RD)
```

#### GXQ — S'RE' · R — `[R,S' R E']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=Q(FR)
```

#### GXR — U@F' · E2 — `[E2,F' U F]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=R(RF)
```

#### GXS — F2@R' · E — `[E,R' F2 R]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=S(FL)
```

#### GXT — R2@E · R — `E':[R,E R2 E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=T(LF)
```

#### GXY — U'@B' · E — `[B' U' B,E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=Y(BR)
```

#### GXZ — R2 · E' — `U F:[R2,E']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=X(LB)  3=Z(RB)
```

#### GYA — E'@F · U — `[F E' F',U]` (8)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=A(UF)
```

#### GYB — S@U' · R — `R:[R,U' S U]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=B(FU)
```

#### GYC — S2@R · U2 — `[R S2 R',U2]` (8)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=C(UL)
```

#### GYD — ER'S · R — `[R,E R' S]` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=D(LU)
```

#### GYE — S2@R · U' — `U':[R S2 R',U']` (9)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=E(UB)
```

#### GYF — S@U · R — `R:[R,U S U']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=F(BU)
```

#### GYI — M2@U' · R' — `[U' M2 U,R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=I(DF)
```

#### GYJ — M'@U · R' — `[U M' U',R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=J(FD)
```

#### GYK — R2@S · R — `R:[R,S R2 S]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=K(DL)
```

#### GYL — ERS' · R — `[R,E R S']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=L(LD)
```

#### GYM — M2@U · R' — `[U M2 U',R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=Y(BR)  3=M(DB)
```

#### GYN — M@U' · R' — `[U' M U,R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=N(BD)
```

#### GYO — S · R2 — `R S2 R':[S,R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=Y(BR)  3=O(DR)
```

#### GYP — R'@D' · S' — `[S',D' R' D]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=P(RD)
```

#### GYQ — S · R2 — `U2 R:[S,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=Q(FR)
```

#### GYR — U@F' · E' — `[E',F' U F]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=R(RF)
```

#### GYS — M'@U · R' — `F':[U M' U',R']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=S(FL)
```

#### GYT — S'R'E · R' — `[S' R' E,R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=T(LF)
```

#### GYW — R2@E · R — `[R,E R2 E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=W(BL)
```

#### GYX — U'@B' · E — `[E,B' U' B]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Y(BR)  3=X(LB)
```

#### GZA — E2@F' · U — `[F' E2 F,U]` (8)
```
      · · ·
      · u 1
      · 3 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=A(UF)
```

#### GZB — S · R2 — `U F R':[S,R2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · 3 ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=B(FU)
```

#### GZC — S'@R' · U2 — `[R' S' R,U2]` (8)
```
      · · ·
      3 u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=C(UL)
```

#### GZD — U2@R' · S' — `[R' U2 R,S']` (8)
```
      · · ·
      · u 1
      · · ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=D(LU)
```

#### GZE — S'@R' · U' — `U':[R' S' R,U']` (9)
```
      · 3 ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=E(UB)
```

#### GZF — S2@R · U' — `S':[U',R S2 R']` (10)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=F(BU)
```

#### GZI — R2 · E — `U F:[R2,E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=I(DF)
```

#### GZJ — R@U' · M' — `u:[M',U' R U]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=J(FD)
```

#### GZK — U2@R' · S2 — `S:[R' U2 R,S2]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=K(DL)
```

#### GZL — E'R'S' · R' — `E':[R',E' R' S']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=L(LD)
```

#### GZM — R@U' · M2 — `u:[M2,U' R U]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=G(UR)  2=Z(RB)  3=M(DB)
```

#### GZN — R@u · M — `U':[M,u R u']` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=N(BD)
```

#### GZO — R2 · E' — `E R:[E',R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=G(UR)  2=Z(RB)  3=O(DR)
```

#### GZP — R@U' · S — `[U' R U,S]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=P(RD)
```

#### GZQ — U'@B · E — `[B U' B',E]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=Q(FR)
```

#### GZR — S · R2 — `S' R:[S,R2]` (7)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=R(RF)
```

#### GZS — SRE · R — `S:[S R E,R]` (9)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=S(FL)
```

#### GZT — U@F · E2 — `[E2,F U F']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=T(LF)
```

#### GZW — B2@R · E — `[E,R B2 R']` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=W(BL)
```

#### GZX — R2 · E' — `U F:[E',R2]` (8)
```
      · · ·
      · u 1
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=G(UR)  2=Z(RB)  3=X(LB)
```
