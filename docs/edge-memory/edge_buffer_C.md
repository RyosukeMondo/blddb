# Edge 3‑Style — Buffer C — Memory Sheet

*Pure‑memorability picks (shortest/cleanest commutator of 100 computer algs per case).*

## The collapse
| metric | value |
|---|---|
| cases | **288** |
| distinct shapes (cores) | **100** |
| shared‑core families (≥2) | **62** covering 250 |
| inverse pairs (learn 1 ⇒ 2) | **144** |
| pure commutators (no setup) | **80** |
| moves min/avg/max | 5 / 8.3 / 10 |

Read: `setup : [interchange , insert]` → setup → interchange → insert → interchange' → insert' → setup'. Inverse case = swap the two pieces.

## Family map

```mermaid
graph LR
  F1["S · R2"]
  F1 --> CFT
  F1 --> CFW
  F1 --> CIO
  F1 --> CJW
  F1 --> CMO
  F1 --> CNQ
  F1 --> CNS
  F1 --> CNT
  F1 --> CNW
  F1 --> COI
  F1 --> COK
  F1 --> COM
  F1 --> CQN
  F1 --> CQW
  F1 --> CQY
  F1 --> CRT
  F1 --> CSN
  F1 --> CSW
  F1 --> CSY
  F1 --> CTF
  F1 --> CTN
  F1 --> CTR
  F1 --> CWF
  F1 --> CWJ
  F1 --> CWN
  F1 --> CWQ
  F1 --> CWS
  F1 --> CXZ
  F1 --> CYJ
  F1 --> CYQ
  F1 --> CYS
  F1 --> CZX
  F2["U2 · M"]
  F2 --> CEK
  F2 --> CFJ
  F2 --> CFQ
  F2 --> CIK
  F2 --> CJY
  F2 --> CKE
  F2 --> CKI
  F2 --> CKN
  F2 --> CMI
  F2 --> CMQ
  F2 --> CMT
  F2 --> CMW
  F2 --> CMY
  F2 --> CNK
  F2 --> CNX
  F2 --> CQF
  F2 --> CQM
  F2 --> CTM
  F2 --> CWM
  F2 --> CXN
  F2 --> CYM
  F3["R2 · E"]
  F3 --> CIS
  F3 --> CIZ
  F3 --> CJT
  F3 --> CMS
  F3 --> COS
  F3 --> COT
  F3 --> COX
  F3 --> COY
  F3 --> CSI
  F3 --> CSM
  F3 --> CSO
  F3 --> CTJ
  F3 --> CYO
  F3 --> CZI
  F4["U2 · M'"]
  F4 --> CFI
  F4 --> CIF
  F4 --> CIN
  F4 --> CIQ
  F4 --> CIY
  F4 --> CJK
  F4 --> CKJ
  F4 --> CKM
  F4 --> CMK
  F4 --> CNI
  F4 --> CQI
  F4 --> CXI
  F4 --> CYI
  F5["R2 · E'"]
  F5 --> CIW
  F5 --> CJX
  F5 --> CMR
  F5 --> COQ
  F5 --> COW
  F5 --> CQO
  F5 --> CRM
  F5 --> CTO
  F5 --> CWI
  F5 --> CWO
  F5 --> CXJ
  F5 --> CXO
  F6["S' · R2"]
  F6 --> CFK
  F6 --> CKF
  F6 --> CKO
  F6 --> CLP
  F6 --> CLZ
  F6 --> CPL
  F6 --> CRZ
  F6 --> CZL
  F6 --> CZR
  F7["S@R' · B"]
  F7 --> CJZ
  F7 --> CMP
  F7 --> CMX
  F7 --> CMZ
  F7 --> CPM
  F7 --> CXM
  F7 --> CZM
  F8["U2 · S"]
  F8 --> CKQ
  F8 --> CKX
  F8 --> CKY
  F8 --> CQK
  F8 --> CTK
  F8 --> CXK
  F8 --> CYK
  F9["ER'S · R'"]
  F9 --> CPQ
  F9 --> CPT
  F9 --> CPW
  F9 --> CPZ
  F9 --> CQP
  F9 --> CTP
  F9 --> CZP
  F10["E'RS · R"]
  F10 --> CPR
  F10 --> CPS
  F10 --> CPX
  F10 --> CPY
  F10 --> CRP
  F10 --> CXP
  F10 --> CYP
  F11["E2@R' · U"]
  F11 --> CEW
  F11 --> CFX
  F11 --> CWE
  F11 --> CXF
  F12["ER'S · R2"]
  F12 --> CFN
  F12 --> CNF
  F12 --> CTX
  F12 --> CYW
  F13["S@R · F'"]
  F13 --> CIP
  F13 --> CIR
  F13 --> CPI
  F13 --> CRI
  F14["U2@R · S"]
  F14 --> CLO
  F14 --> CLQ
  F14 --> COL
  F14 --> CQL
  F15["U2@R' · S"]
  F15 --> CLS
  F15 --> CLY
  F15 --> CSL
  F15 --> CYL
  F16["U2@M · U'"]
  F16 --> CEI
  F16 --> CIE
  F16 --> CJN
  F17["U2@M' · U"]
  F17 --> CEM
  F17 --> CME
  F17 --> CNJ
  F18["M'US' · U"]
  F18 --> CEP
  F18 --> CNP
  F18 --> CPE
  F19["E@R' · U"]
  F19 --> CET
  F19 --> CFS
  F19 --> CSF
  F20["S@R' · B'"]
  F20 --> CEZ
  F20 --> CNZ
  F20 --> CZE
  F21["U@r' · S2"]
  F21 --> CFO
  F21 --> CFY
  F21 --> COF
  F22["E'@R · U2"]
  F22 --> CKW
  F22 --> CQX
  F22 --> CXQ
  F23["D'@S' · u'"]
  F23 --> CEJ
  F23 --> CJE
  F24["S@R · U'"]
  F24 --> CEL
  F24 --> CLE
  F25["U'@R' · S2"]
  F25 --> CEO
  F25 --> COE
  F26["E@B' · U"]
  F26 --> CEQ
  F26 --> CQE
  F27["S'@R · U'"]
  F27 --> CER
  F27 --> CRE
  F28["E'@B · U"]
  F28 --> CES
  F28 --> CSE
  F29["E'@R · U"]
  F29 --> CEX
  F29 --> CXE
  F30["S2@R · U'"]
  F30 --> CEY
  F30 --> CYE
  F31["U@r' · S"]
  F31 --> CFL
  F31 --> CLF
  F32["U2@R' · E'"]
  F32 --> CFM
  F32 --> CMF
  F33["D@r' · S'"]
  F33 --> CIL
  F33 --> CLI
  F34["M2@U · F'"]
  F34 --> CIT
  F34 --> CTI
  F35["F2 · E"]
  F35 --> CIX
  F35 --> CXT
  F36["D'@R' · S'"]
  F36 --> CJL
  F36 --> CLJ
  F37["FrU' · M'"]
  F37 --> CJM
  F37 --> CMJ
  F38["MU'S' · U'"]
  F38 --> CJP
  F38 --> CPF
  F39["M@U' · F"]
  F39 --> CJQ
  F39 --> CQJ
  F40["M@U' · F'"]
  F40 --> CJS
  F40 --> CSJ
  F41["R2@S' · R"]
  F41 --> CKP
  F41 --> CKR
  F42["D'@r · S'"]
  F42 --> CLM
  F42 --> CML
  F43["D@R' · S'"]
  F43 --> CLN
  F43 --> CNL
  F44["F'@U' · S"]
  F44 --> CLR
  F44 --> CRL
  F45["S@R · U"]
  F45 --> CLT
  F45 --> CTL
  F46["S'@R' · D"]
  F46 --> CLW
  F46 --> CWL
  F47["S@R' · U'"]
  F47 --> CLX
  F47 --> CXL
  F48["U'@r' · S2"]
  F48 --> CNO
  F48 --> CON
  F49["R'@U · M"]
  F49 --> CNY
  F49 --> CYN
  F50["U2@R · S'"]
  F50 --> COR
  F50 --> CRO
  F51["U2@R' · S'"]
  F51 --> COZ
  F51 --> CZO
  F52["R2@S · R'"]
  F52 --> CPK
  F52 --> CRK
  F53["U2@R · E"]
  F53 --> CQT
  F53 --> CTQ
  F54["U@B · E"]
  F54 --> CQZ
  F54 --> CZQ
  F55["U'@F' · E"]
  F55 --> CRS
  F55 --> CSR
  F56["U2@R' · E"]
  F56 --> CRY
  F56 --> CYR
  F57["R2U2 · S'"]
  F57 --> CSK
  F57 --> CWK
  F58["U@B' · E'"]
  F58 --> CSX
  F58 --> CXS
  F59["U'@F · E"]
  F59 --> CTW
  F59 --> CWT
  F60["SRE · R"]
  F60 --> CTY
  F60 --> CYT
  F61["U@B · E'"]
  F61 --> CWZ
  F61 --> CZW
  F62["U@B' · E"]
  F62 --> CXY
  F62 --> CYX
```

## Families

### F1. S · R2 · ×32

Shape `[R2 , S]` — interchange `R2`, insert `S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CFT** | `E B' R:[S,R2]` | 9 | CTF |
| **CFW** | `E2 B' R:[S,R2]` | 9 | CWF |
| **CIO** | `R2 D:[S,R2]` | 8 | COI |
| **CJW** | `F E2 R:[S,R2]` | 9 | CWJ |
| **CMO** | `R2 D':[S,R2]` | 8 | COM |
| **CNQ** | `B R:[S,R2]` | 7 | CQN |
| **CNS** | `B' E2 R':[S,R2]` | 9 | CSN |
| **CNT** | `E B R:[S,R2]` | 9 | CTN |
| **CNW** | `E2 B R:[S,R2]` | 9 | CWN |
| **COI** | `R2 D:[R2,S]` | 8 | CIO |
| **COK** | `S2:[R2,S]` | 5 | CKO |
| **COM** | `R2 D':[R2,S]` | 8 | CMO |
| **CQN** | `B R':[S,R2]` | 7 | CNQ |
| **CQW** | `B2 R':[S,R2]` | 7 | CWQ |
| **CQY** | `R':[S,R2]` | 5 | CYQ |
| **CRT** | `E R:[S,R2]` | 7 | CTR |
| **CSN** | `B' E2 R:[S,R2]` | 9 | CNS |
| **CSW** | `E2 R:[S,R2]` | 7 | CWS |
| **CSY** | `F2 R':[S,R2]` | 7 | CYS |
| **CTF** | `E B' R':[S,R2]` | 9 | CFT |
| **CTN** | `E B R':[S,R2]` | 9 | CNT |
| **CTR** | `E R':[S,R2]` | 7 | CRT |
| **CWF** | `E2 B' R':[S,R2]` | 9 | CFW |
| **CWJ** | `F E2 R':[S,R2]` | 9 | CJW |
| **CWN** | `E2 B R':[S,R2]` | 9 | CNW |
| **CWQ** | `B2 R:[S,R2]` | 7 | CQW |
| **CWS** | `E2 R':[S,R2]` | 7 | CSW |
| **CXZ** | `E' R:[S,R2]` | 7 | CZX |
| **CYJ** | `F' R:[S,R2]` | 7 | CJY |
| **CYQ** | `R:[S,R2]` | 5 | CQY |
| **CYS** | `F2 R:[S,R2]` | 7 | CSY |
| **CZX** | `E' R':[S,R2]` | 7 | CXZ |

### F2. U2 · M · ×21

Shape `[M , U2]` — interchange `M`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CEK** | `S M' U':[M,U2]` | 9 | CKE |
| **CFJ** | `F' r U:[M,U2]` | 9 | CJF |
| **CFQ** | `r U:[M,U2]` | 7 | CQF |
| **CIK** | `S M U':[M,U2]` | 9 | CKI |
| **CJY** | `r' U:[M,U2]` | 7 | CYJ |
| **CKE** | `S M' U:[M,U2]` | 9 | CEK |
| **CKI** | `S M U:[M,U2]` | 9 | CIK |
| **CKN** | `S U:[M,U2]` | 7 | CNK |
| **CMI** | `U M:[M,U2]` | 7 | CIM |
| **CMQ** | `R U:[M,U2]` | 7 | CQM |
| **CMT** | `E R U:[M,U2]` | 9 | CTM |
| **CMW** | `E2 R U:[M,U2]` | 9 | CWM |
| **CMY** | `R' U:[M,U2]` | 7 | CYM |
| **CNK** | `S U':[M,U2]` | 7 | CKN |
| **CNX** | `B R' U':[M,U2]` | 9 | CXN |
| **CQF** | `r U':[M,U2]` | 7 | CFQ |
| **CQM** | `R U':[M,U2]` | 7 | CMQ |
| **CTM** | `E R U':[M,U2]` | 9 | CMT |
| **CWM** | `E2 R U':[M,U2]` | 9 | CMW |
| **CXN** | `B R' U:[M,U2]` | 9 | CNX |
| **CYM** | `R' U':[M,U2]` | 7 | CMY |

### F3. R2 · E · ×14

Shape `[E , R2]` — interchange `E`, insert `R2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CIS** | `U2 D R:[E,R2]` | 9 | CSI |
| **CIZ** | `U' F:[E,R2]` | 8 | CZI |
| **CJT** | `S D R:[E,R2]` | 9 | CTJ |
| **CMS** | `U2 D' R:[E,R2]` | 9 | CSM |
| **COS** | `U2 R:[E,R2]` | 7 | CSO |
| **COT** | `R2 S R:[E,R2]` | 9 | CTO |
| **COX** | `U' u' R:[E,R2]` | 9 | CXO |
| **COY** | `u2 R:[E,R2]` | 7 | CYO |
| **CSI** | `U2 D R':[E,R2]` | 9 | CIS |
| **CSM** | `U2 D' R':[E,R2]` | 9 | CMS |
| **CSO** | `U2 R':[E,R2]` | 7 | COS |
| **CTJ** | `S D R':[E,R2]` | 9 | CJT |
| **CYO** | `u2 R':[E,R2]` | 7 | COY |
| **CZI** | `U' F:[R2,E]` | 8 | CIZ |

### F4. U2 · M' · ×13

Shape `[M' , U2]` — interchange `M'`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CFI** | `B' R' U:[M',U2]` | 9 | CIF |
| **CIF** | `B' R' U':[M',U2]` | 9 | CFI |
| **CIN** | `B R' U':[M',U2]` | 9 | CNI |
| **CIQ** | `R U':[M',U2]` | 7 | CQI |
| **CIY** | `R' U':[M',U2]` | 7 | CYI |
| **CJK** | `S U:[M',U2]` | 7 | CKJ |
| **CKJ** | `S U':[M',U2]` | 7 | CJK |
| **CKM** | `S M' U':[M',U2]` | 9 | CMK |
| **CMK** | `S M' U:[M',U2]` | 9 | CKM |
| **CNI** | `B R' U:[M',U2]` | 9 | CIN |
| **CQI** | `R U:[M',U2]` | 7 | CIQ |
| **CXI** | `E' R' U:[M',U2]` | 9 | CIX |
| **CYI** | `R' U:[M',U2]` | 7 | CIY |

### F5. R2 · E' · ×12

Shape `[E' , R2]` — interchange `E'`, insert `R2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CIW** | `U2 D R':[E',R2]` | 9 | CWI |
| **CJX** | `S D R':[E',R2]` | 9 | CXJ |
| **CMR** | `U B:[R2,E']` | 8 | CRM |
| **COQ** | `u2 R':[E',R2]` | 7 | CQO |
| **COW** | `U2 R':[E',R2]` | 7 | CWO |
| **CQO** | `u2 R:[E',R2]` | 7 | COQ |
| **CRM** | `U B:[E',R2]` | 8 | CMR |
| **CTO** | `U u R:[E',R2]` | 9 | COT |
| **CWI** | `U2 D R:[E',R2]` | 9 | CIW |
| **CWO** | `U2 R:[E',R2]` | 7 | COW |
| **CXJ** | `S D R:[E',R2]` | 9 | CJX |
| **CXO** | `R2 S R:[E',R2]` | 9 | COX |

### F6. S' · R2 · ×9

Shape `[R2 , S']` — interchange `R2`, insert `S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CFK** | `S' U:[S',R2]` | 8 | CKF |
| **CKF** | `S' U:[R2,S']` | 8 | CFK |
| **CKO** | `S':[R2,S']` | 5 | COK |
| **CLP** | `U M U':[R2,S']` | 10 | CPL |
| **CLZ** | `U' F R':[S',R2]` | 9 | CZL |
| **CPL** | `U M U':[S',R2]` | 10 | CLP |
| **CRZ** | `S' R:[S',R2]` | 7 | CZR |
| **CZL** | `U' F R:[S',R2]` | 9 | CLZ |
| **CZR** | `S' R':[S',R2]` | 7 | CRZ |

### F7. S@R' · B · ×7

Shape `[B , R' S R]` — interchange `B`, insert `R' S R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CJZ** | `M:[B,R' S R]` | 9 | CZJ |
| **CMP** | `R':[B,R' S R]` | 9 | CPM |
| **CMX** | `B:[R' S R,B]` | 9 | CXM |
| **CMZ** | `[B,R' S R]` | 8 | CZM |
| **CPM** | `R':[R' S R,B]` | 9 | CMP |
| **CXM** | `B:[B,R' S R]` | 9 | CMX |
| **CZM** | `[R' S R,B]` | 8 | CMZ |

### F8. U2 · S · ×7

Shape `[S , U2]` — interchange `S`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CKQ** | `R:[S,U2]` | 6 | CQK |
| **CKX** | `E' R':[S,U2]` | 8 | CXK |
| **CKY** | `R':[S,U2]` | 6 | CYK |
| **CQK** | `R:[U2,S]` | 6 | CKQ |
| **CTK** | `E R:[U2,S]` | 8 | CKT |
| **CXK** | `E' R':[U2,S]` | 8 | CKX |
| **CYK** | `R':[U2,S]` | 6 | CKY |

### F9. ER'S · R' · ×7

Shape `[R' , E R' S]` — interchange `R'`, insert `E R' S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CPQ** | `E:[R',E R' S]` | 9 | CQP |
| **CPT** | `E2:[R',E R' S]` | 9 | CTP |
| **CPW** | `E':[R',E R' S]` | 8 | CWP |
| **CPZ** | `[R',E R' S]` | 8 | CZP |
| **CQP** | `E:[E R' S,R']` | 9 | CPQ |
| **CTP** | `E2:[E R' S,R']` | 9 | CPT |
| **CZP** | `[E R' S,R']` | 8 | CPZ |

### F10. E'RS · R · ×7

Shape `[R , E' R S]` — interchange `R`, insert `E' R S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CPR** | `[R,E' R S]` | 8 | CRP |
| **CPS** | `E:[R,E' R S]` | 8 | CSP |
| **CPX** | `E2:[R,E' R S]` | 9 | CXP |
| **CPY** | `E':[R,E' R S]` | 9 | CYP |
| **CRP** | `[E' R S,R]` | 8 | CPR |
| **CXP** | `E2:[E' R S,R]` | 9 | CPX |
| **CYP** | `E':[E' R S,R]` | 9 | CPY |

### F11. E2@R' · U · ×4

Shape `[U , R' E2 R]` — interchange `U`, insert `R' E2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CEW** | `U:[U,R' E2 R]` | 9 | CWE |
| **CFX** | `S:[R' E2 R,U]` | 10 | CXF |
| **CWE** | `U:[R' E2 R,U]` | 9 | CEW |
| **CXF** | `S:[U,R' E2 R]` | 10 | CFX |

### F12. ER'S · R2 · ×4

Shape `[R2 , E R' S]` — interchange `R2`, insert `E R' S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CFN** | `B' E':[R2,E R' S]` | 10 | CNF |
| **CNF** | `B E':[R2,E R' S]` | 10 | CFN |
| **CTX** | `E2:[E R' S,R2]` | 9 | CXT |
| **CYW** | `E':[R2,E R' S]` | 8 | CWY |

### F13. S@R · F' · ×4

Shape `[F' , R S R']` — interchange `F'`, insert `R S R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CIP** | `R:[F',R S R']` | 9 | CPI |
| **CIR** | `[F',R S R']` | 8 | CRI |
| **CPI** | `R:[R S R',F']` | 9 | CIP |
| **CRI** | `[R S R',F']` | 8 | CIR |

### F14. U2@R · S · ×4

Shape `[S , R U2 R']` — interchange `S`, insert `R U2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CLO** | `R:[R U2 R',S]` | 9 | COL |
| **CLQ** | `[R U2 R',S]` | 8 | CQL |
| **COL** | `R:[S,R U2 R']` | 9 | CLO |
| **CQL** | `[S,R U2 R']` | 8 | CLQ |

### F15. U2@R' · S · ×4

Shape `[S , R' U2 R]` — interchange `S`, insert `R' U2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CLS** | `E2:[R' U2 R,S]` | 10 | CSL |
| **CLY** | `[R' U2 R,S]` | 8 | CYL |
| **CSL** | `E2:[S,R' U2 R]` | 10 | CLS |
| **CYL** | `[S,R' U2 R]` | 8 | CLY |

### F16. U2@M · U' · ×3

Shape `[U' , M U2 M]` — interchange `U'`, insert `M U2 M`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CEI** | `U':[M U2 M,U']` | 9 | CIE |
| **CIE** | `U':[U',M U2 M]` | 9 | CEI |
| **CJN** | `M':[U',M U2 M]` | 8 | CNJ |

### F17. U2@M' · U · ×3

Shape `[U , M' U2 M']` — interchange `U`, insert `M' U2 M'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CEM** | `[U,M' U2 M']` | 8 | CME |
| **CME** | `[M' U2 M',U]` | 8 | CEM |
| **CNJ** | `M:[U,M' U2 M']` | 8 | CJN |

### F18. M'US' · U · ×3

Shape `[U , M' U S']` — interchange `U`, insert `M' U S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CEP** | `[U,M' U S']` | 8 | CPE |
| **CNP** | `M:[U,M' U S']` | 8 | CPN |
| **CPE** | `[M' U S',U]` | 8 | CEP |

### F19. E@R' · U · ×3

Shape `[U , R' E R]` — interchange `U`, insert `R' E R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CET** | `U:[U,R' E R]` | 9 | CTE |
| **CFS** | `S:[R' E R,U]` | 10 | CSF |
| **CSF** | `S:[U,R' E R]` | 10 | CFS |

### F20. S@R' · B' · ×3

Shape `[B' , R' S R]` — interchange `B'`, insert `R' S R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CEZ** | `[B',R' S R]` | 8 | CZE |
| **CNZ** | `M:[B',R' S R]` | 9 | CZN |
| **CZE** | `[R' S R,B']` | 8 | CEZ |

### F21. U@r' · S2 · ×3

Shape `[S2 , r' U r]` — interchange `S2`, insert `r' U r`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CFO** | `[S2,r' U r]` | 8 | COF |
| **CFY** | `R:[S2,r' U r]` | 9 | CYF |
| **COF** | `[r' U r,S2]` | 8 | CFO |

### F22. E'@R · U2 · ×3

Shape `[U2 , R E' R']` — interchange `U2`, insert `R E' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CKW** | `S:[R E' R',U2]` | 10 | CWK |
| **CQX** | `R:[U2,R E' R']` | 9 | CXQ |
| **CXQ** | `R:[R E' R',U2]` | 9 | CQX |

### F23. D'@S' · u' · ×2

Shape `[u' , S' D' S]` — interchange `u'`, insert `S' D' S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CEJ** | `[S' D' S,u']` | 8 | CJE |
| **CJE** | `[u',S' D' S]` | 8 | CEJ |

### F24. S@R · U' · ×2

Shape `[U' , R S R']` — interchange `U'`, insert `R S R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CEL** | `[R S R',U']` | 8 | CLE |
| **CLE** | `[U',R S R']` | 8 | CEL |

### F25. U'@R' · S2 · ×2

Shape `[S2 , R' U' R]` — interchange `S2`, insert `R' U' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CEO** | `[S2,R' U' R]` | 8 | COE |
| **COE** | `[R' U' R,S2]` | 8 | CEO |

### F26. E@B' · U · ×2

Shape `[U , B' E B]` — interchange `U`, insert `B' E B`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CEQ** | `[U,B' E B]` | 8 | CQE |
| **CQE** | `[B' E B,U]` | 8 | CEQ |

### F27. S'@R · U' · ×2

Shape `[U' , R S' R']` — interchange `U'`, insert `R S' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CER** | `[R S' R',U']` | 8 | CRE |
| **CRE** | `[U',R S' R']` | 8 | CER |

### F28. E'@B · U · ×2

Shape `[U , B E' B']` — interchange `U`, insert `B E' B'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CES** | `[U,B E' B']` | 8 | CSE |
| **CSE** | `[B E' B',U]` | 8 | CES |

### F29. E'@R · U · ×2

Shape `[U , R E' R']` — interchange `U`, insert `R E' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CEX** | `U:[U,R E' R']` | 9 | CXE |
| **CXE** | `U:[R E' R',U]` | 9 | CEX |

### F30. S2@R · U' · ×2

Shape `[U' , R S2 R']` — interchange `U'`, insert `R S2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CEY** | `[R S2 R',U']` | 8 | CYE |
| **CYE** | `[U',R S2 R']` | 8 | CEY |

### F31. U@r' · S · ×2

Shape `[S , r' U r]` — interchange `S`, insert `r' U r`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CFL** | `[S,r' U r]` | 8 | CLF |
| **CLF** | `[r' U r,S]` | 8 | CFL |

### F32. U2@R' · E' · ×2

Shape `[E' , R' U2 R]` — interchange `E'`, insert `R' U2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CFM** | `B':[R' U2 R,E']` | 10 | CMF |
| **CMF** | `B':[E',R' U2 R]` | 10 | CFM |

### F33. D@r' · S' · ×2

Shape `[S' , r' D r]` — interchange `S'`, insert `r' D r`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CIL** | `[r' D r,S']` | 8 | CLI |
| **CLI** | `[S',r' D r]` | 8 | CIL |

### F34. M2@U · F' · ×2

Shape `[F' , U M2 U']` — interchange `F'`, insert `U M2 U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CIT** | `[U M2 U',F']` | 8 | CTI |
| **CTI** | `[F',U M2 U']` | 8 | CIT |

### F35. F2 · E · ×2

Shape `[E , F2]` — interchange `E`, insert `F2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CIX** | `U' R' F:[E,F2]` | 9 | CXI |
| **CXT** | `S R':[F2,E]` | 8 | CTX |

### F36. D'@R' · S' · ×2

Shape `[S' , R' D' R]` — interchange `S'`, insert `R' D' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CJL** | `[R' D' R,S']` | 8 | CLJ |
| **CLJ** | `[S',R' D' R]` | 8 | CJL |

### F37. FrU' · M' · ×2

Shape `[M' , F r U']` — interchange `M'`, insert `F r U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CJM** | `[F r U',M']` | 8 | CMJ |
| **CMJ** | `[M',F r U']` | 8 | CJM |

### F38. MU'S' · U' · ×2

Shape `[U' , M U' S']` — interchange `U'`, insert `M U' S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CJP** | `M':[U',M U' S']` | 8 | CPJ |
| **CPF** | `M:[M U' S',U']` | 9 | CFP |

### F39. M@U' · F · ×2

Shape `[F , U' M U]` — interchange `F`, insert `U' M U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CJQ** | `[U' M U,F]` | 8 | CQJ |
| **CQJ** | `[F,U' M U]` | 8 | CJQ |

### F40. M@U' · F' · ×2

Shape `[F' , U' M U]` — interchange `F'`, insert `U' M U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CJS** | `[U' M U,F']` | 8 | CSJ |
| **CSJ** | `[F',U' M U]` | 8 | CJS |

### F41. R2@S' · R · ×2

Shape `[R , S' R2 S']` — interchange `R`, insert `S' R2 S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CKP** | `R S:[R,S' R2 S']` | 9 | CPK |
| **CKR** | `S:[R,S' R2 S']` | 8 | CRK |

### F42. D'@r · S' · ×2

Shape `[S' , r D' r']` — interchange `S'`, insert `r D' r'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CLM** | `[S',r D' r']` | 8 | CML |
| **CML** | `[r D' r',S']` | 8 | CLM |

### F43. D@R' · S' · ×2

Shape `[S' , R' D R]` — interchange `S'`, insert `R' D R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CLN** | `[S',R' D R]` | 8 | CNL |
| **CNL** | `[R' D R,S']` | 8 | CLN |

### F44. F'@U' · S · ×2

Shape `[S , U' F' U]` — interchange `S`, insert `U' F' U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CLR** | `[U' F' U,S]` | 8 | CRL |
| **CRL** | `[S,U' F' U]` | 8 | CLR |

### F45. S@R · U · ×2

Shape `[U , R S R']` — interchange `U`, insert `R S R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CLT** | `F:[U,R S R']` | 10 | CTL |
| **CTL** | `F:[R S R',U]` | 10 | CLT |

### F46. S'@R' · D · ×2

Shape `[D , R' S' R]` — interchange `D`, insert `R' S' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CLW** | `B:[R' S' R,D]` | 10 | CWL |
| **CWL** | `B:[D,R' S' R]` | 10 | CLW |

### F47. S@R' · U' · ×2

Shape `[U' , R' S R]` — interchange `U'`, insert `R' S R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CLX** | `B':[U',R' S R]` | 10 | CXL |
| **CXL** | `B':[R' S R,U']` | 10 | CLX |

### F48. U'@r' · S2 · ×2

Shape `[S2 , r' U' r]` — interchange `S2`, insert `r' U' r`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CNO** | `[S2,r' U' r]` | 8 | CON |
| **CON** | `[r' U' r,S2]` | 8 | CNO |

### F49. R'@U · M · ×2

Shape `[M , U R' U']` — interchange `M`, insert `U R' U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CNY** | `U:[U R' U',M]` | 9 | CYN |
| **CYN** | `U:[M,U R' U']` | 9 | CNY |

### F50. U2@R · S' · ×2

Shape `[S' , R U2 R']` — interchange `S'`, insert `R U2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **COR** | `R:[S',R U2 R']` | 9 | CRO |
| **CRO** | `R:[R U2 R',S']` | 9 | COR |

### F51. U2@R' · S' · ×2

Shape `[S' , R' U2 R]` — interchange `S'`, insert `R' U2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **COZ** | `R':[S',R' U2 R]` | 9 | CZO |
| **CZO** | `R':[R' U2 R,S']` | 9 | COZ |

### F52. R2@S · R' · ×2

Shape `[R' , S R2 S]` — interchange `R'`, insert `S R2 S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CPK** | `R S':[R',S R2 S]` | 9 | CKP |
| **CRK** | `S':[R',S R2 S]` | 8 | CKR |

### F53. U2@R · E · ×2

Shape `[E , R U2 R']` — interchange `E`, insert `R U2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CQT** | `[R U2 R',E]` | 8 | CTQ |
| **CTQ** | `[E,R U2 R']` | 8 | CQT |

### F54. U@B · E · ×2

Shape `[E , B U B']` — interchange `E`, insert `B U B'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CQZ** | `[E,B U B']` | 8 | CZQ |
| **CZQ** | `[B U B',E]` | 8 | CQZ |

### F55. U'@F' · E · ×2

Shape `[E , F' U' F]` — interchange `E`, insert `F' U' F`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CRS** | `[F' U' F,E]` | 8 | CSR |
| **CSR** | `[E,F' U' F]` | 8 | CRS |

### F56. U2@R' · E · ×2

Shape `[E , R' U2 R]` — interchange `E`, insert `R' U2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CRY** | `[E,R' U2 R]` | 8 | CYR |
| **CYR** | `[R' U2 R,E]` | 8 | CRY |

### F57. R2U2 · S' · ×2

Shape `[S' , R2 U2]` — interchange `S'`, insert `R2 U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CSK** | `E2 R:[S',R2 U2]` | 9 | CKS |
| **CWK** | `E2 R':[S',R2 U2]` | 9 | CKW |

### F58. U@B' · E' · ×2

Shape `[E' , B' U B]` — interchange `E'`, insert `B' U B`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CSX** | `[E',B' U B]` | 8 | CXS |
| **CXS** | `[B' U B,E']` | 8 | CSX |

### F59. U'@F · E · ×2

Shape `[E , F U' F']` — interchange `E`, insert `F U' F'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CTW** | `[F U' F',E]` | 8 | CWT |
| **CWT** | `[E,F U' F']` | 8 | CTW |

### F60. SRE · R · ×2

Shape `[R , S R E]` — interchange `R`, insert `S R E`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CTY** | `S2:[R,S R E]` | 9 | CYT |
| **CYT** | `S2:[S R E,R]` | 9 | CTY |

### F61. U@B · E' · ×2

Shape `[E' , B U B']` — interchange `E'`, insert `B U B'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CWZ** | `[E',B U B']` | 8 | CZW |
| **CZW** | `[B U B',E']` | 8 | CWZ |

### F62. U@B' · E · ×2

Shape `[E , B' U B]` — interchange `E`, insert `B' U B`.

| case | comm | moves | inverse |
|---|---|---|---|
| **CXY** | `[B' U B,E]` | 8 | CYX |
| **CYX** | `[E,B' U B]` | 8 | CXY |

## Singletons

| case | comm | moves | inverse |
|---|---|---|---|
| **CEN** | `[S' U M,U']` | 8 | CNE |
| **CFP** | `U2:[S',R' F R]` | 10 | CPF |
| **CFR** | `R:[S',r' U r]` | 9 | CRF |
| **CFZ** | `r':[S',R U R']` | 9 | CZF |
| **CIM** | `U' R':[D2,M]` | 7 | CMI |
| **CJF** | `[F r U',M2]` | 8 | CFJ |
| **CJO** | `S:[R' D' R,S2]` | 9 | COJ |
| **CJR** | `r:[S',R' U R]` | 9 | CRJ |
| **CKS** | `S:[R' E R,U2]` | 10 | CSK |
| **CKT** | `E R U2:[S',U2 R2]` | 9 | CTK |
| **CKZ** | `S:[R',S' R2 S']` | 8 | CZK |
| **CNE** | `[B E B',U]` | 8 | CEN |
| **CNR** | `R:[S',r' U' r]` | 9 | CRN |
| **COJ** | `r:[U,R' S2 R]` | 9 | CJO |
| **CPJ** | `U' S':[U',S U M']` | 8 | CJP |
| **CPN** | `U S':[U,S U' M]` | 8 | CNP |
| **CQS** | `E:[R2,E' R S]` | 8 | CSQ |
| **CRF** | `M:[U,r S' r']` | 9 | CFR |
| **CRJ** | `M':[U,R S' R']` | 9 | CJR |
| **CRN** | `M:[U',r S' r']` | 9 | CNR |
| **CRW** | `R E':[R,E R' S]` | 8 | CWR |
| **CRX** | `[F' U' F,E2]` | 8 | CXR |
| **CSP** | `R S:[R,S' R' E]` | 8 | CPS |
| **CSQ** | `E:[E' r S,R2]` | 8 | CQS |
| **CSZ** | `S:[R',S' R' E]` | 8 | CZS |
| **CTE** | `[B' E2 B,U]` | 8 | CET |
| **CTZ** | `[F U' F',E2]` | 8 | CZT |
| **CWP** | `R' S:[R',S' R E']` | 8 | CPW |
| **CWR** | `S:[R,S' R E']` | 8 | CRW |
| **CWY** | `E':[E r' S,R2]` | 8 | CYW |
| **CXR** | `[B' U B,E2]` | 8 | CRX |
| **CYF** | `M:[U,r S2 r']` | 9 | CFY |
| **CZF** | `M:[U,R' S' R]` | 9 | CFZ |
| **CZJ** | `r':[S,R B R']` | 9 | CJZ |
| **CZK** | `S':[R,S R2 S]` | 8 | CKZ |
| **CZN** | `M:[U',R' S' R]` | 9 | CNZ |
| **CZS** | `R' E:[R',E' R S]` | 8 | CSZ |
| **CZT** | `[B U B',E2]` | 8 | CTZ |

## Inverse‑pair index

| learn | comm | ⇄ | derive | comm |
|---|---|---|---|---|
| **CEI** | `U':[M U2 M,U']` | ⇄ | CIE | `U':[U',M U2 M]` |
| **CEJ** | `[S' D' S,u']` | ⇄ | CJE | `[u',S' D' S]` |
| **CEK** | `S M' U':[M,U2]` | ⇄ | CKE | `S M' U:[M,U2]` |
| **CEL** | `[R S R',U']` | ⇄ | CLE | `[U',R S R']` |
| **CEM** | `[U,M' U2 M']` | ⇄ | CME | `[M' U2 M',U]` |
| **CEN** | `[S' U M,U']` | ⇄ | CNE | `[B E B',U]` |
| **CEO** | `[S2,R' U' R]` | ⇄ | COE | `[R' U' R,S2]` |
| **CEP** | `[U,M' U S']` | ⇄ | CPE | `[M' U S',U]` |
| **CEQ** | `[U,B' E B]` | ⇄ | CQE | `[B' E B,U]` |
| **CER** | `[R S' R',U']` | ⇄ | CRE | `[U',R S' R']` |
| **CES** | `[U,B E' B']` | ⇄ | CSE | `[B E' B',U]` |
| **CET** | `U:[U,R' E R]` | ⇄ | CTE | `[B' E2 B,U]` |
| **CEW** | `U:[U,R' E2 R]` | ⇄ | CWE | `U:[R' E2 R,U]` |
| **CEX** | `U:[U,R E' R']` | ⇄ | CXE | `U:[R E' R',U]` |
| **CEY** | `[R S2 R',U']` | ⇄ | CYE | `[U',R S2 R']` |
| **CEZ** | `[B',R' S R]` | ⇄ | CZE | `[R' S R,B']` |
| **CFI** | `B' R' U:[M',U2]` | ⇄ | CIF | `B' R' U':[M',U2]` |
| **CFJ** | `F' r U:[M,U2]` | ⇄ | CJF | `[F r U',M2]` |
| **CFK** | `S' U:[S',R2]` | ⇄ | CKF | `S' U:[R2,S']` |
| **CFL** | `[S,r' U r]` | ⇄ | CLF | `[r' U r,S]` |
| **CFM** | `B':[R' U2 R,E']` | ⇄ | CMF | `B':[E',R' U2 R]` |
| **CFN** | `B' E':[R2,E R' S]` | ⇄ | CNF | `B E':[R2,E R' S]` |
| **CFO** | `[S2,r' U r]` | ⇄ | COF | `[r' U r,S2]` |
| **CFP** | `U2:[S',R' F R]` | ⇄ | CPF | `M:[M U' S',U']` |
| **CFQ** | `r U:[M,U2]` | ⇄ | CQF | `r U':[M,U2]` |
| **CFR** | `R:[S',r' U r]` | ⇄ | CRF | `M:[U,r S' r']` |
| **CFS** | `S:[R' E R,U]` | ⇄ | CSF | `S:[U,R' E R]` |
| **CFT** | `E B' R:[S,R2]` | ⇄ | CTF | `E B' R':[S,R2]` |
| **CFW** | `E2 B' R:[S,R2]` | ⇄ | CWF | `E2 B' R':[S,R2]` |
| **CFX** | `S:[R' E2 R,U]` | ⇄ | CXF | `S:[U,R' E2 R]` |
| **CFY** | `R:[S2,r' U r]` | ⇄ | CYF | `M:[U,r S2 r']` |
| **CFZ** | `r':[S',R U R']` | ⇄ | CZF | `M:[U,R' S' R]` |
| **CIK** | `S M U':[M,U2]` | ⇄ | CKI | `S M U:[M,U2]` |
| **CIL** | `[r' D r,S']` | ⇄ | CLI | `[S',r' D r]` |
| **CIM** | `U' R':[D2,M]` | ⇄ | CMI | `U M:[M,U2]` |
| **CIN** | `B R' U':[M',U2]` | ⇄ | CNI | `B R' U:[M',U2]` |
| **CIO** | `R2 D:[S,R2]` | ⇄ | COI | `R2 D:[R2,S]` |
| **CIP** | `R:[F',R S R']` | ⇄ | CPI | `R:[R S R',F']` |
| **CIQ** | `R U':[M',U2]` | ⇄ | CQI | `R U:[M',U2]` |
| **CIR** | `[F',R S R']` | ⇄ | CRI | `[R S R',F']` |
| **CIS** | `U2 D R:[E,R2]` | ⇄ | CSI | `U2 D R':[E,R2]` |
| **CIT** | `[U M2 U',F']` | ⇄ | CTI | `[F',U M2 U']` |
| **CIW** | `U2 D R':[E',R2]` | ⇄ | CWI | `U2 D R:[E',R2]` |
| **CIX** | `U' R' F:[E,F2]` | ⇄ | CXI | `E' R' U:[M',U2]` |
| **CIY** | `R' U':[M',U2]` | ⇄ | CYI | `R' U:[M',U2]` |
| **CIZ** | `U' F:[E,R2]` | ⇄ | CZI | `U' F:[R2,E]` |
| **CJK** | `S U:[M',U2]` | ⇄ | CKJ | `S U':[M',U2]` |
| **CJL** | `[R' D' R,S']` | ⇄ | CLJ | `[S',R' D' R]` |
| **CJM** | `[F r U',M']` | ⇄ | CMJ | `[M',F r U']` |
| **CJN** | `M':[U',M U2 M]` | ⇄ | CNJ | `M:[U,M' U2 M']` |
| **CJO** | `S:[R' D' R,S2]` | ⇄ | COJ | `r:[U,R' S2 R]` |
| **CJP** | `M':[U',M U' S']` | ⇄ | CPJ | `U' S':[U',S U M']` |
| **CJQ** | `[U' M U,F]` | ⇄ | CQJ | `[F,U' M U]` |
| **CJR** | `r:[S',R' U R]` | ⇄ | CRJ | `M':[U,R S' R']` |
| **CJS** | `[U' M U,F']` | ⇄ | CSJ | `[F',U' M U]` |
| **CJT** | `S D R:[E,R2]` | ⇄ | CTJ | `S D R':[E,R2]` |
| **CJW** | `F E2 R:[S,R2]` | ⇄ | CWJ | `F E2 R':[S,R2]` |
| **CJX** | `S D R':[E',R2]` | ⇄ | CXJ | `S D R:[E',R2]` |
| **CJY** | `r' U:[M,U2]` | ⇄ | CYJ | `F' R:[S,R2]` |
| **CJZ** | `M:[B,R' S R]` | ⇄ | CZJ | `r':[S,R B R']` |
| **CKM** | `S M' U':[M',U2]` | ⇄ | CMK | `S M' U:[M',U2]` |
| **CKN** | `S U:[M,U2]` | ⇄ | CNK | `S U':[M,U2]` |
| **CKO** | `S':[R2,S']` | ⇄ | COK | `S2:[R2,S]` |
| **CKP** | `R S:[R,S' R2 S']` | ⇄ | CPK | `R S':[R',S R2 S]` |
| **CKQ** | `R:[S,U2]` | ⇄ | CQK | `R:[U2,S]` |
| **CKR** | `S:[R,S' R2 S']` | ⇄ | CRK | `S':[R',S R2 S]` |
| **CKS** | `S:[R' E R,U2]` | ⇄ | CSK | `E2 R:[S',R2 U2]` |
| **CKT** | `E R U2:[S',U2 R2]` | ⇄ | CTK | `E R:[U2,S]` |
| **CKW** | `S:[R E' R',U2]` | ⇄ | CWK | `E2 R':[S',R2 U2]` |
| **CKX** | `E' R':[S,U2]` | ⇄ | CXK | `E' R':[U2,S]` |
| **CKY** | `R':[S,U2]` | ⇄ | CYK | `R':[U2,S]` |
| **CKZ** | `S:[R',S' R2 S']` | ⇄ | CZK | `S':[R,S R2 S]` |
| **CLM** | `[S',r D' r']` | ⇄ | CML | `[r D' r',S']` |
| **CLN** | `[S',R' D R]` | ⇄ | CNL | `[R' D R,S']` |
| **CLO** | `R:[R U2 R',S]` | ⇄ | COL | `R:[S,R U2 R']` |
| **CLP** | `U M U':[R2,S']` | ⇄ | CPL | `U M U':[S',R2]` |
| **CLQ** | `[R U2 R',S]` | ⇄ | CQL | `[S,R U2 R']` |
| **CLR** | `[U' F' U,S]` | ⇄ | CRL | `[S,U' F' U]` |
| **CLS** | `E2:[R' U2 R,S]` | ⇄ | CSL | `E2:[S,R' U2 R]` |
| **CLT** | `F:[U,R S R']` | ⇄ | CTL | `F:[R S R',U]` |
| **CLW** | `B:[R' S' R,D]` | ⇄ | CWL | `B:[D,R' S' R]` |
| **CLX** | `B':[U',R' S R]` | ⇄ | CXL | `B':[R' S R,U']` |
| **CLY** | `[R' U2 R,S]` | ⇄ | CYL | `[S,R' U2 R]` |
| **CLZ** | `U' F R':[S',R2]` | ⇄ | CZL | `U' F R:[S',R2]` |
| **CMO** | `R2 D':[S,R2]` | ⇄ | COM | `R2 D':[R2,S]` |
| **CMP** | `R':[B,R' S R]` | ⇄ | CPM | `R':[R' S R,B]` |
| **CMQ** | `R U:[M,U2]` | ⇄ | CQM | `R U':[M,U2]` |
| **CMR** | `U B:[R2,E']` | ⇄ | CRM | `U B:[E',R2]` |
| **CMS** | `U2 D' R:[E,R2]` | ⇄ | CSM | `U2 D' R':[E,R2]` |
| **CMT** | `E R U:[M,U2]` | ⇄ | CTM | `E R U':[M,U2]` |
| **CMW** | `E2 R U:[M,U2]` | ⇄ | CWM | `E2 R U':[M,U2]` |
| **CMX** | `B:[R' S R,B]` | ⇄ | CXM | `B:[B,R' S R]` |
| **CMY** | `R' U:[M,U2]` | ⇄ | CYM | `R' U':[M,U2]` |
| **CMZ** | `[B,R' S R]` | ⇄ | CZM | `[R' S R,B]` |
| **CNO** | `[S2,r' U' r]` | ⇄ | CON | `[r' U' r,S2]` |
| **CNP** | `M:[U,M' U S']` | ⇄ | CPN | `U S':[U,S U' M]` |
| **CNQ** | `B R:[S,R2]` | ⇄ | CQN | `B R':[S,R2]` |
| **CNR** | `R:[S',r' U' r]` | ⇄ | CRN | `M:[U',r S' r']` |
| **CNS** | `B' E2 R':[S,R2]` | ⇄ | CSN | `B' E2 R:[S,R2]` |
| **CNT** | `E B R:[S,R2]` | ⇄ | CTN | `E B R':[S,R2]` |
| **CNW** | `E2 B R:[S,R2]` | ⇄ | CWN | `E2 B R':[S,R2]` |
| **CNX** | `B R' U':[M,U2]` | ⇄ | CXN | `B R' U:[M,U2]` |
| **CNY** | `U:[U R' U',M]` | ⇄ | CYN | `U:[M,U R' U']` |
| **CNZ** | `M:[B',R' S R]` | ⇄ | CZN | `M:[U',R' S' R]` |
| **COQ** | `u2 R':[E',R2]` | ⇄ | CQO | `u2 R:[E',R2]` |
| **COR** | `R:[S',R U2 R']` | ⇄ | CRO | `R:[R U2 R',S']` |
| **COS** | `U2 R:[E,R2]` | ⇄ | CSO | `U2 R':[E,R2]` |
| **COT** | `R2 S R:[E,R2]` | ⇄ | CTO | `U u R:[E',R2]` |
| **COW** | `U2 R':[E',R2]` | ⇄ | CWO | `U2 R:[E',R2]` |
| **COX** | `U' u' R:[E,R2]` | ⇄ | CXO | `R2 S R:[E',R2]` |
| **COY** | `u2 R:[E,R2]` | ⇄ | CYO | `u2 R':[E,R2]` |
| **COZ** | `R':[S',R' U2 R]` | ⇄ | CZO | `R':[R' U2 R,S']` |
| **CPQ** | `E:[R',E R' S]` | ⇄ | CQP | `E:[E R' S,R']` |
| **CPR** | `[R,E' R S]` | ⇄ | CRP | `[E' R S,R]` |
| **CPS** | `E:[R,E' R S]` | ⇄ | CSP | `R S:[R,S' R' E]` |
| **CPT** | `E2:[R',E R' S]` | ⇄ | CTP | `E2:[E R' S,R']` |
| **CPW** | `E':[R',E R' S]` | ⇄ | CWP | `R' S:[R',S' R E']` |
| **CPX** | `E2:[R,E' R S]` | ⇄ | CXP | `E2:[E' R S,R]` |
| **CPY** | `E':[R,E' R S]` | ⇄ | CYP | `E':[E' R S,R]` |
| **CPZ** | `[R',E R' S]` | ⇄ | CZP | `[E R' S,R']` |
| **CQS** | `E:[R2,E' R S]` | ⇄ | CSQ | `E:[E' r S,R2]` |
| **CQT** | `[R U2 R',E]` | ⇄ | CTQ | `[E,R U2 R']` |
| **CQW** | `B2 R':[S,R2]` | ⇄ | CWQ | `B2 R:[S,R2]` |
| **CQX** | `R:[U2,R E' R']` | ⇄ | CXQ | `R:[R E' R',U2]` |
| **CQY** | `R':[S,R2]` | ⇄ | CYQ | `R:[S,R2]` |
| **CQZ** | `[E,B U B']` | ⇄ | CZQ | `[B U B',E]` |
| **CRS** | `[F' U' F,E]` | ⇄ | CSR | `[E,F' U' F]` |
| **CRT** | `E R:[S,R2]` | ⇄ | CTR | `E R':[S,R2]` |
| **CRW** | `R E':[R,E R' S]` | ⇄ | CWR | `S:[R,S' R E']` |
| **CRX** | `[F' U' F,E2]` | ⇄ | CXR | `[B' U B,E2]` |
| **CRY** | `[E,R' U2 R]` | ⇄ | CYR | `[R' U2 R,E]` |
| **CRZ** | `S' R:[S',R2]` | ⇄ | CZR | `S' R':[S',R2]` |
| **CSW** | `E2 R:[S,R2]` | ⇄ | CWS | `E2 R':[S,R2]` |
| **CSX** | `[E',B' U B]` | ⇄ | CXS | `[B' U B,E']` |
| **CSY** | `F2 R':[S,R2]` | ⇄ | CYS | `F2 R:[S,R2]` |
| **CSZ** | `S:[R',S' R' E]` | ⇄ | CZS | `R' E:[R',E' R S]` |
| **CTW** | `[F U' F',E]` | ⇄ | CWT | `[E,F U' F']` |
| **CTX** | `E2:[E R' S,R2]` | ⇄ | CXT | `S R':[F2,E]` |
| **CTY** | `S2:[R,S R E]` | ⇄ | CYT | `S2:[S R E,R]` |
| **CTZ** | `[F U' F',E2]` | ⇄ | CZT | `[B U B',E2]` |
| **CWY** | `E':[E r' S,R2]` | ⇄ | CYW | `E':[R2,E R' S]` |
| **CWZ** | `[E',B U B']` | ⇄ | CZW | `[B U B',E']` |
| **CXY** | `[B' U B,E]` | ⇄ | CYX | `[E,B' U B]` |
| **CXZ** | `E' R:[S,R2]` | ⇄ | CZX | `E' R':[S,R2]` |

## Case cards (with 3‑cycle diagrams)

#### CEI — U2@M · U' — `U':[M U2 M,U']` (9)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=C(UL)  2=E(UB)  3=I(DF)
```

#### CEJ — D'@S' · u' — `[S' D' S,u']` (8)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=E(UB)  3=J(FD)
```

#### CEK — U2 · M — `S M' U':[M,U2]` (9)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=C(UL)  2=E(UB)  3=K(DL)
```

#### CEL — S@R · U' — `[R S R',U']` (8)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=E(UB)  3=L(LD)
```

#### CEM — U2@M' · U — `[U,M' U2 M']` (8)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=C(UL)  2=E(UB)  3=M(DB)
```

#### CEN — S'UM · U' — `[S' U M,U']` (8)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=E(UB)  3=N(BD)
```

#### CEO — U'@R' · S2 — `[S2,R' U' R]` (8)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=C(UL)  2=E(UB)  3=O(DR)
```

#### CEP — M'US' · U — `[U,M' U S']` (8)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=E(UB)  3=P(RD)
```

#### CEQ — E@B' · U — `[U,B' E B]` (8)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=E(UB)  3=Q(FR)
```

#### CER — S'@R · U' — `[R S' R',U']` (8)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=E(UB)  3=R(RF)
```

#### CES — E'@B · U — `[U,B E' B']` (8)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=E(UB)  3=S(FL)
```

#### CET — E@R' · U — `U:[U,R' E R]` (9)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=E(UB)  3=T(LF)
```

#### CEW — E2@R' · U — `U:[U,R' E2 R]` (9)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=E(UB)  3=W(BL)
```

#### CEX — E'@R · U — `U:[U,R E' R']` (9)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=E(UB)  3=X(LB)
```

#### CEY — S2@R · U' — `[R S2 R',U']` (8)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=E(UB)  3=Y(BR)
```

#### CEZ — S@R' · B' — `[B',R' S R]` (8)
```
      · 2 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=E(UB)  3=Z(RB)
```

#### CFI — U2 · M' — `B' R' U:[M',U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=C(UL)  2=F(BU)  3=I(DF)
```

#### CFJ — U2 · M — `F' r U:[M,U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=F(BU)  3=J(FD)
```

#### CFK — S' · R2 — `S' U:[S',R2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=C(UL)  2=F(BU)  3=K(DL)
```

#### CFL — U@r' · S — `[S,r' U r]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=F(BU)  3=L(LD)
```

#### CFM — U2@R' · E' — `B':[R' U2 R,E']` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=C(UL)  2=F(BU)  3=M(DB)
```

#### CFN — ER'S · R2 — `B' E':[R2,E R' S]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=F(BU)  3=N(BD)
```

#### CFO — U@r' · S2 — `[S2,r' U r]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=C(UL)  2=F(BU)  3=O(DR)
```

#### CFP — F@R' · S' — `U2:[S',R' F R]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=F(BU)  3=P(RD)
```

#### CFQ — U2 · M — `r U:[M,U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=F(BU)  3=Q(FR)
```

#### CFR — U@r' · S' — `R:[S',r' U r]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=F(BU)  3=R(RF)
```

#### CFS — E@R' · U — `S:[R' E R,U]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=F(BU)  3=S(FL)
```

#### CFT — S · R2 — `E B' R:[S,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=F(BU)  3=T(LF)
```

#### CFW — S · R2 — `E2 B' R:[S,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=F(BU)  3=W(BL)
```

#### CFX — E2@R' · U — `S:[R' E2 R,U]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=F(BU)  3=X(LB)
```

#### CFY — U@r' · S2 — `R:[S2,r' U r]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=F(BU)  3=Y(BR)
```

#### CFZ — U@R · S' — `r':[S',R U R']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=F(BU)  3=Z(RB)
```

#### CIE — U2@M · U' — `U':[U',M U2 M]` (9)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=C(UL)  2=I(DF)  3=E(UB)
```

#### CIF — U2 · M' — `B' R' U':[M',U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=C(UL)  2=I(DF)  3=F(BU)
```

#### CIK — U2 · M — `S M U':[M,U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      3 d ·
      · · ·
  1=C(UL)  2=I(DF)  3=K(DL)
```

#### CIL — D@r' · S' — `[r' D r,S']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=C(UL)  2=I(DF)  3=L(LD)
```

#### CIM — M · D2 — `U' R':[D2,M]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · 3 ·
  1=C(UL)  2=I(DF)  3=M(DB)
```

#### CIN — U2 · M' — `B R' U':[M',U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · 2 ·
      · d ·
      · · ·
  1=C(UL)  2=I(DF)  3=N(BD)
```

#### CIO — S · R2 — `R2 D:[S,R2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d 3
      · · ·
  1=C(UL)  2=I(DF)  3=O(DR)
```

#### CIP — S@R · F' — `R:[F',R S R']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=C(UL)  2=I(DF)  3=P(RD)
```

#### CIQ — U2 · M' — `R U':[M',U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=C(UL)  2=I(DF)  3=Q(FR)
```

#### CIR — S@R · F' — `[F',R S R']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=C(UL)  2=I(DF)  3=R(RF)
```

#### CIS — R2 · E — `U2 D R:[E,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=C(UL)  2=I(DF)  3=S(FL)
```

#### CIT — M2@U · F' — `[U M2 U',F']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=C(UL)  2=I(DF)  3=T(LF)
```

#### CIW — R2 · E' — `U2 D R':[E',R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=C(UL)  2=I(DF)  3=W(BL)
```

#### CIX — F2 · E — `U' R' F:[E,F2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=C(UL)  2=I(DF)  3=X(LB)
```

#### CIY — U2 · M' — `R' U':[M',U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=C(UL)  2=I(DF)  3=Y(BR)
```

#### CIZ — R2 · E — `U' F:[E,R2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=C(UL)  2=I(DF)  3=Z(RB)
```

#### CJE — D'@S' · u' — `[u',S' D' S]` (8)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=J(FD)  3=E(UB)
```

#### CJF — FrU' · M2 — `[F r U',M2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=J(FD)  3=F(BU)
```

#### CJK — U2 · M' — `S U:[M',U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=C(UL)  2=J(FD)  3=K(DL)
```

#### CJL — D'@R' · S' — `[R' D' R,S']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=J(FD)  3=L(LD)
```

#### CJM — FrU' · M' — `[F r U',M']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=C(UL)  2=J(FD)  3=M(DB)
```

#### CJN — U2@M · U' — `M':[U',M U2 M]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=J(FD)  3=N(BD)
```

#### CJO — D'@R' · S2 — `S:[R' D' R,S2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=C(UL)  2=J(FD)  3=O(DR)
```

#### CJP — MU'S' · U' — `M':[U',M U' S']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=J(FD)  3=P(RD)
```

#### CJQ — M@U' · F — `[U' M U,F]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=J(FD)  3=Q(FR)
```

#### CJR — U@R' · S' — `r:[S',R' U R]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=J(FD)  3=R(RF)
```

#### CJS — M@U' · F' — `[U' M U,F']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=J(FD)  3=S(FL)
```

#### CJT — R2 · E — `S D R:[E,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=J(FD)  3=T(LF)
```

#### CJW — S · R2 — `F E2 R:[S,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=J(FD)  3=W(BL)
```

#### CJX — R2 · E' — `S D R':[E',R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=J(FD)  3=X(LB)
```

#### CJY — U2 · M — `r' U:[M,U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=J(FD)  3=Y(BR)
```

#### CJZ — S@R' · B — `M:[B,R' S R]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=J(FD)  3=Z(RB)
```

#### CKE — U2 · M — `S M' U:[M,U2]` (9)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=E(UB)
```

#### CKF — S' · R2 — `S' U:[R2,S']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=F(BU)
```

#### CKI — U2 · M — `S M U:[M,U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=I(DF)
```

#### CKJ — U2 · M' — `S U':[M',U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=J(FD)
```

#### CKM — U2 · M' — `S M' U':[M',U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · 3 ·
  1=C(UL)  2=K(DL)  3=M(DB)
```

#### CKN — U2 · M — `S U:[M,U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=N(BD)
```

#### CKO — S' · R2 — `S':[R2,S']` (5)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d 3
      · · ·
  1=C(UL)  2=K(DL)  3=O(DR)
```

#### CKP — R2@S' · R — `R S:[R,S' R2 S']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=P(RD)
```

#### CKQ — U2 · S — `R:[S,U2]` (6)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=Q(FR)
```

#### CKR — R2@S' · R — `S:[R,S' R2 S']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=R(RF)
```

#### CKS — E@R' · U2 — `S:[R' E R,U2]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=S(FL)
```

#### CKT — U2R2 · S' — `E R U2:[S',U2 R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=T(LF)
```

#### CKW — E'@R · U2 — `S:[R E' R',U2]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=W(BL)
```

#### CKX — U2 · S — `E' R':[S,U2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=X(LB)
```

#### CKY — U2 · S — `R':[S,U2]` (6)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=Y(BR)
```

#### CKZ — R2@S' · R' — `S:[R',S' R2 S']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=C(UL)  2=K(DL)  3=Z(RB)
```

#### CLE — S@R · U' — `[U',R S R']` (8)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=E(UB)
```

#### CLF — U@r' · S — `[r' U r,S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=F(BU)
```

#### CLI — D@r' · S' — `[S',r' D r]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=I(DF)
```

#### CLJ — D'@R' · S' — `[S',R' D' R]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=J(FD)
```

#### CLM — D'@r · S' — `[S',r D' r']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=C(UL)  2=L(LD)  3=M(DB)
```

#### CLN — D@R' · S' — `[S',R' D R]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=N(BD)
```

#### CLO — U2@R · S — `R:[R U2 R',S]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=C(UL)  2=L(LD)  3=O(DR)
```

#### CLP — S' · R2 — `U M U':[R2,S']` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=P(RD)
```

#### CLQ — U2@R · S — `[R U2 R',S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=Q(FR)
```

#### CLR — F'@U' · S — `[U' F' U,S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=R(RF)
```

#### CLS — U2@R' · S — `E2:[R' U2 R,S]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=S(FL)
```

#### CLT — S@R · U — `F:[U,R S R']` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=T(LF)
```

#### CLW — S'@R' · D — `B:[R' S' R,D]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=W(BL)
```

#### CLX — S@R' · U' — `B':[U',R' S R]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=X(LB)
```

#### CLY — U2@R' · S — `[R' U2 R,S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=Y(BR)
```

#### CLZ — S' · R2 — `U' F R':[S',R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=L(LD)  3=Z(RB)
```

#### CME — U2@M' · U — `[M' U2 M',U]` (8)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=E(UB)
```

#### CMF — U2@R' · E' — `B':[E',R' U2 R]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=F(BU)
```

#### CMI — U2 · M — `U M:[M,U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=I(DF)
```

#### CMJ — FrU' · M' — `[M',F r U']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=J(FD)
```

#### CMK — U2 · M' — `S M' U:[M',U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=K(DL)
```

#### CML — D'@r · S' — `[r D' r',S']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=L(LD)
```

#### CMO — S · R2 — `R2 D':[S,R2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · 2 ·
  1=C(UL)  2=M(DB)  3=O(DR)
```

#### CMP — S@R' · B — `R':[B,R' S R]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=P(RD)
```

#### CMQ — U2 · M — `R U:[M,U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=Q(FR)
```

#### CMR — R2 · E' — `U B:[R2,E']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=R(RF)
```

#### CMS — R2 · E — `U2 D' R:[E,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=S(FL)
```

#### CMT — U2 · M — `E R U:[M,U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=T(LF)
```

#### CMW — U2 · M — `E2 R U:[M,U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=W(BL)
```

#### CMX — S@R' · B — `B:[R' S R,B]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=X(LB)
```

#### CMY — U2 · M — `R' U:[M,U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=Y(BR)
```

#### CMZ — S@R' · B — `[B,R' S R]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=C(UL)  2=M(DB)  3=Z(RB)
```

#### CNE — E@B · U — `[B E B',U]` (8)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=E(UB)
```

#### CNF — ER'S · R2 — `B E':[R2,E R' S]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=F(BU)
```

#### CNI — U2 · M' — `B R' U:[M',U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · 3 ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=I(DF)
```

#### CNJ — U2@M' · U — `M:[U,M' U2 M']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=J(FD)
```

#### CNK — U2 · M — `S U':[M,U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      3 d ·
      · · ·
  1=C(UL)  2=N(BD)  3=K(DL)
```

#### CNL — D@R' · S' — `[R' D R,S']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=L(LD)
```

#### CNO — U'@r' · S2 — `[S2,r' U' r]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d 3
      · · ·
  1=C(UL)  2=N(BD)  3=O(DR)
```

#### CNP — M'US' · U — `M:[U,M' U S']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=P(RD)
```

#### CNQ — S · R2 — `B R:[S,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=Q(FR)
```

#### CNR — U'@r' · S' — `R:[S',r' U' r]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=R(RF)
```

#### CNS — S · R2 — `B' E2 R':[S,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=S(FL)
```

#### CNT — S · R2 — `E B R:[S,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=T(LF)
```

#### CNW — S · R2 — `E2 B R:[S,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=W(BL)
```

#### CNX — U2 · M — `B R' U':[M,U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=X(LB)
```

#### CNY — R'@U · M — `U:[U R' U',M]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=Y(BR)
```

#### CNZ — S@R' · B' — `M:[B',R' S R]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=N(BD)  3=Z(RB)
```

#### COE — U'@R' · S2 — `[R' U' R,S2]` (8)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=E(UB)
```

#### COF — U@r' · S2 — `[r' U r,S2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=F(BU)
```

#### COI — S · R2 — `R2 D:[R2,S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=I(DF)
```

#### COJ — S2@R' · U — `r:[U,R' S2 R]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=J(FD)
```

#### COK — S · R2 — `S2:[R2,S]` (5)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d 2
      · · ·
  1=C(UL)  2=O(DR)  3=K(DL)
```

#### COL — U2@R · S — `R:[S,R U2 R']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=L(LD)
```

#### COM — S · R2 — `R2 D':[R2,S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · 3 ·
  1=C(UL)  2=O(DR)  3=M(DB)
```

#### CON — U'@r' · S2 — `[r' U' r,S2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=N(BD)
```

#### COQ — R2 · E' — `u2 R':[E',R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=Q(FR)
```

#### COR — U2@R · S' — `R:[S',R U2 R']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=R(RF)
```

#### COS — R2 · E — `U2 R:[E,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=S(FL)
```

#### COT — R2 · E — `R2 S R:[E,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=T(LF)
```

#### COW — R2 · E' — `U2 R':[E',R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=W(BL)
```

#### COX — R2 · E — `U' u' R:[E,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=X(LB)
```

#### COY — R2 · E — `u2 R:[E,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=Y(BR)
```

#### COZ — U2@R' · S' — `R':[S',R' U2 R]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=C(UL)  2=O(DR)  3=Z(RB)
```

#### CPE — M'US' · U — `[M' U S',U]` (8)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=E(UB)
```

#### CPF — MU'S' · U' — `M:[M U' S',U']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=F(BU)
```

#### CPI — S@R · F' — `R:[R S R',F']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=I(DF)
```

#### CPJ — SUM' · U' — `U' S':[U',S U M']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=J(FD)
```

#### CPK — R2@S · R' — `R S':[R',S R2 S]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=C(UL)  2=P(RD)  3=K(DL)
```

#### CPL — S' · R2 — `U M U':[S',R2]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=L(LD)
```

#### CPM — S@R' · B — `R':[R' S R,B]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=C(UL)  2=P(RD)  3=M(DB)
```

#### CPN — SU'M · U — `U S':[U,S U' M]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=N(BD)
```

#### CPQ — ER'S · R' — `E:[R',E R' S]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=Q(FR)
```

#### CPR — E'RS · R — `[R,E' R S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=R(RF)
```

#### CPS — E'RS · R — `E:[R,E' R S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=S(FL)
```

#### CPT — ER'S · R' — `E2:[R',E R' S]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=T(LF)
```

#### CPW — ER'S · R' — `E':[R',E R' S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=W(BL)
```

#### CPX — E'RS · R — `E2:[R,E' R S]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=X(LB)
```

#### CPY — E'RS · R — `E':[R,E' R S]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=Y(BR)
```

#### CPZ — ER'S · R' — `[R',E R' S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=P(RD)  3=Z(RB)
```

#### CQE — E@B' · U — `[B' E B,U]` (8)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=E(UB)
```

#### CQF — U2 · M — `r U':[M,U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=F(BU)
```

#### CQI — U2 · M' — `R U:[M',U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=I(DF)
```

#### CQJ — M@U' · F — `[F,U' M U]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=J(FD)
```

#### CQK — U2 · S — `R:[U2,S]` (6)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=K(DL)
```

#### CQL — U2@R · S — `[S,R U2 R']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=L(LD)
```

#### CQM — U2 · M — `R U':[M,U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=C(UL)  2=Q(FR)  3=M(DB)
```

#### CQN — S · R2 — `B R':[S,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=N(BD)
```

#### CQO — R2 · E' — `u2 R:[E',R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=C(UL)  2=Q(FR)  3=O(DR)
```

#### CQP — ER'S · R' — `E:[E R' S,R']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=P(RD)
```

#### CQS — E'RS · R2 — `E:[R2,E' R S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=S(FL)
```

#### CQT — U2@R · E — `[R U2 R',E]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=T(LF)
```

#### CQW — S · R2 — `B2 R':[S,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=W(BL)
```

#### CQX — E'@R · U2 — `R:[U2,R E' R']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=X(LB)
```

#### CQY — S · R2 — `R':[S,R2]` (5)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=Y(BR)
```

#### CQZ — U@B · E — `[E,B U B']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Q(FR)  3=Z(RB)
```

#### CRE — S'@R · U' — `[U',R S' R']` (8)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=R(RF)  3=E(UB)
```

#### CRF — S'@r · U — `M:[U,r S' r']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=R(RF)  3=F(BU)
```

#### CRI — S@R · F' — `[R S R',F']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=C(UL)  2=R(RF)  3=I(DF)
```

#### CRJ — S'@R · U — `M':[U,R S' R']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=R(RF)  3=J(FD)
```

#### CRK — R2@S · R' — `S':[R',S R2 S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=C(UL)  2=R(RF)  3=K(DL)
```

#### CRL — F'@U' · S — `[S,U' F' U]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=R(RF)  3=L(LD)
```

#### CRM — R2 · E' — `U B:[E',R2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=C(UL)  2=R(RF)  3=M(DB)
```

#### CRN — S'@r · U' — `M:[U',r S' r']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=R(RF)  3=N(BD)
```

#### CRO — U2@R · S' — `R:[R U2 R',S']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=C(UL)  2=R(RF)  3=O(DR)
```

#### CRP — E'RS · R — `[E' R S,R]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=R(RF)  3=P(RD)
```

#### CRS — U'@F' · E — `[F' U' F,E]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=R(RF)  3=S(FL)
```

#### CRT — S · R2 — `E R:[S,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=R(RF)  3=T(LF)
```

#### CRW — ER'S · R — `R E':[R,E R' S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=R(RF)  3=W(BL)
```

#### CRX — U'@F' · E2 — `[F' U' F,E2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=R(RF)  3=X(LB)
```

#### CRY — U2@R' · E — `[E,R' U2 R]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=R(RF)  3=Y(BR)
```

#### CRZ — S' · R2 — `S' R:[S',R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=R(RF)  3=Z(RB)
```

#### CSE — E'@B · U — `[B E' B',U]` (8)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=S(FL)  3=E(UB)
```

#### CSF — E@R' · U — `S:[U,R' E R]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=S(FL)  3=F(BU)
```

#### CSI — R2 · E — `U2 D R':[E,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=C(UL)  2=S(FL)  3=I(DF)
```

#### CSJ — M@U' · F' — `[F',U' M U]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=S(FL)  3=J(FD)
```

#### CSK — R2U2 · S' — `E2 R:[S',R2 U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=C(UL)  2=S(FL)  3=K(DL)
```

#### CSL — U2@R' · S — `E2:[S,R' U2 R]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=S(FL)  3=L(LD)
```

#### CSM — R2 · E — `U2 D' R':[E,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=C(UL)  2=S(FL)  3=M(DB)
```

#### CSN — S · R2 — `B' E2 R:[S,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=S(FL)  3=N(BD)
```

#### CSO — R2 · E — `U2 R':[E,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=C(UL)  2=S(FL)  3=O(DR)
```

#### CSP — S'R'E · R — `R S:[R,S' R' E]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=S(FL)  3=P(RD)
```

#### CSQ — E'rS · R2 — `E:[E' r S,R2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=S(FL)  3=Q(FR)
```

#### CSR — U'@F' · E — `[E,F' U' F]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=S(FL)  3=R(RF)
```

#### CSW — S · R2 — `E2 R:[S,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=S(FL)  3=W(BL)
```

#### CSX — U@B' · E' — `[E',B' U B]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=S(FL)  3=X(LB)
```

#### CSY — S · R2 — `F2 R':[S,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=S(FL)  3=Y(BR)
```

#### CSZ — S'R'E · R' — `S:[R',S' R' E]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=S(FL)  3=Z(RB)
```

#### CTE — E2@B' · U — `[B' E2 B,U]` (8)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=T(LF)  3=E(UB)
```

#### CTF — S · R2 — `E B' R':[S,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=T(LF)  3=F(BU)
```

#### CTI — M2@U · F' — `[F',U M2 U']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=C(UL)  2=T(LF)  3=I(DF)
```

#### CTJ — R2 · E — `S D R':[E,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=T(LF)  3=J(FD)
```

#### CTK — U2 · S — `E R:[U2,S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=C(UL)  2=T(LF)  3=K(DL)
```

#### CTL — S@R · U — `F:[R S R',U]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=T(LF)  3=L(LD)
```

#### CTM — U2 · M — `E R U':[M,U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=C(UL)  2=T(LF)  3=M(DB)
```

#### CTN — S · R2 — `E B R':[S,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=T(LF)  3=N(BD)
```

#### CTO — R2 · E' — `U u R:[E',R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=C(UL)  2=T(LF)  3=O(DR)
```

#### CTP — ER'S · R' — `E2:[E R' S,R']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=T(LF)  3=P(RD)
```

#### CTQ — U2@R · E — `[E,R U2 R']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=T(LF)  3=Q(FR)
```

#### CTR — S · R2 — `E R':[S,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=T(LF)  3=R(RF)
```

#### CTW — U'@F · E — `[F U' F',E]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=T(LF)  3=W(BL)
```

#### CTX — ER'S · R2 — `E2:[E R' S,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=T(LF)  3=X(LB)
```

#### CTY — SRE · R — `S2:[R,S R E]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=T(LF)  3=Y(BR)
```

#### CTZ — U'@F · E2 — `[F U' F',E2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=T(LF)  3=Z(RB)
```

#### CWE — E2@R' · U — `U:[R' E2 R,U]` (9)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=W(BL)  3=E(UB)
```

#### CWF — S · R2 — `E2 B' R':[S,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=W(BL)  3=F(BU)
```

#### CWI — R2 · E' — `U2 D R:[E',R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=C(UL)  2=W(BL)  3=I(DF)
```

#### CWJ — S · R2 — `F E2 R':[S,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=W(BL)  3=J(FD)
```

#### CWK — R2U2 · S' — `E2 R':[S',R2 U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=C(UL)  2=W(BL)  3=K(DL)
```

#### CWL — S'@R' · D — `B:[D,R' S' R]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=W(BL)  3=L(LD)
```

#### CWM — U2 · M — `E2 R U':[M,U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=C(UL)  2=W(BL)  3=M(DB)
```

#### CWN — S · R2 — `E2 B R':[S,R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=W(BL)  3=N(BD)
```

#### CWO — R2 · E' — `U2 R:[E',R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=C(UL)  2=W(BL)  3=O(DR)
```

#### CWP — S'RE' · R' — `R' S:[R',S' R E']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=W(BL)  3=P(RD)
```

#### CWQ — S · R2 — `B2 R:[S,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=W(BL)  3=Q(FR)
```

#### CWR — S'RE' · R — `S:[R,S' R E']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=W(BL)  3=R(RF)
```

#### CWS — S · R2 — `E2 R':[S,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=W(BL)  3=S(FL)
```

#### CWT — U'@F · E — `[E,F U' F']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=W(BL)  3=T(LF)
```

#### CWY — Er'S · R2 — `E':[E r' S,R2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=W(BL)  3=Y(BR)
```

#### CWZ — U@B · E' — `[E',B U B']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=W(BL)  3=Z(RB)
```

#### CXE — E'@R · U — `U:[R E' R',U]` (9)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=X(LB)  3=E(UB)
```

#### CXF — E2@R' · U — `S:[U,R' E2 R]` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=X(LB)  3=F(BU)
```

#### CXI — U2 · M' — `E' R' U:[M',U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=C(UL)  2=X(LB)  3=I(DF)
```

#### CXJ — R2 · E' — `S D R:[E',R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=X(LB)  3=J(FD)
```

#### CXK — U2 · S — `E' R':[U2,S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=C(UL)  2=X(LB)  3=K(DL)
```

#### CXL — S@R' · U' — `B':[R' S R,U']` (10)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=X(LB)  3=L(LD)
```

#### CXM — S@R' · B — `B:[B,R' S R]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=C(UL)  2=X(LB)  3=M(DB)
```

#### CXN — U2 · M — `B R' U:[M,U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=X(LB)  3=N(BD)
```

#### CXO — R2 · E' — `R2 S R:[E',R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=C(UL)  2=X(LB)  3=O(DR)
```

#### CXP — E'RS · R — `E2:[E' R S,R]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=X(LB)  3=P(RD)
```

#### CXQ — E'@R · U2 — `R:[R E' R',U2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=X(LB)  3=Q(FR)
```

#### CXR — U@B' · E2 — `[B' U B,E2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=X(LB)  3=R(RF)
```

#### CXS — U@B' · E' — `[B' U B,E']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=X(LB)  3=S(FL)
```

#### CXT — F2 · E — `S R':[F2,E]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=X(LB)  3=T(LF)
```

#### CXY — U@B' · E — `[B' U B,E]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=X(LB)  3=Y(BR)
```

#### CXZ — S · R2 — `E' R:[S,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=X(LB)  3=Z(RB)
```

#### CYE — S2@R · U' — `[U',R S2 R']` (8)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=E(UB)
```

#### CYF — S2@r · U — `M:[U,r S2 r']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=F(BU)
```

#### CYI — U2 · M' — `R' U:[M',U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=I(DF)
```

#### CYJ — S · R2 — `F' R:[S,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=J(FD)
```

#### CYK — U2 · S — `R':[U2,S]` (6)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=K(DL)
```

#### CYL — U2@R' · S — `[S,R' U2 R]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=L(LD)
```

#### CYM — U2 · M — `R' U':[M,U2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=C(UL)  2=Y(BR)  3=M(DB)
```

#### CYN — R'@U · M — `U:[M,U R' U']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=N(BD)
```

#### CYO — R2 · E — `u2 R':[E,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=C(UL)  2=Y(BR)  3=O(DR)
```

#### CYP — E'RS · R — `E':[E' R S,R]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=P(RD)
```

#### CYQ — S · R2 — `R:[S,R2]` (5)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=Q(FR)
```

#### CYR — U2@R' · E — `[R' U2 R,E]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=R(RF)
```

#### CYS — S · R2 — `F2 R:[S,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=S(FL)
```

#### CYT — SRE · R — `S2:[S R E,R]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=T(LF)
```

#### CYW — ER'S · R2 — `E':[R2,E R' S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=W(BL)
```

#### CYX — U@B' · E — `[E,B' U B]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Y(BR)  3=X(LB)
```

#### CZE — S@R' · B' — `[R' S R,B']` (8)
```
      · 3 ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=E(UB)
```

#### CZF — S'@R' · U — `M:[U,R' S' R]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=F(BU)
```

#### CZI — R2 · E — `U' F:[R2,E]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=I(DF)
```

#### CZJ — B@R · S — `r':[S,R B R']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=J(FD)
```

#### CZK — R2@S · R — `S':[R,S R2 S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=K(DL)
```

#### CZL — S' · R2 — `U' F R:[S',R2]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=L(LD)
```

#### CZM — S@R' · B — `[R' S R,B]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=C(UL)  2=Z(RB)  3=M(DB)
```

#### CZN — S'@R' · U' — `M:[U',R' S' R]` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=N(BD)
```

#### CZO — U2@R' · S' — `R':[R' U2 R,S']` (9)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=C(UL)  2=Z(RB)  3=O(DR)
```

#### CZP — ER'S · R' — `[E R' S,R']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=P(RD)
```

#### CZQ — U@B · E — `[B U B',E]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=Q(FR)
```

#### CZR — S' · R2 — `S' R':[S',R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=R(RF)
```

#### CZS — E'RS · R' — `R' E:[R',E' R S]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=S(FL)
```

#### CZT — U@B · E2 — `[B U B',E2]` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=T(LF)
```

#### CZW — U@B · E' — `[B U B',E']` (8)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=W(BL)
```

#### CZX — S · R2 — `E' R':[S,R2]` (7)
```
      · · ·
      1 u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=C(UL)  2=Z(RB)  3=X(LB)
```
