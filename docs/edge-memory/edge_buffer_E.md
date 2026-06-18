# Edge 3‑Style — Buffer E — Memory Sheet

*Pure‑memorability picks (shortest/cleanest commutator of 100 computer algs per case).*

## The collapse
| metric | value |
|---|---|
| cases | **224** |
| distinct shapes (cores) | **83** |
| shared‑core families (≥2) | **46** covering 187 |
| inverse pairs (learn 1 ⇒ 2) | **112** |
| pure commutators (no setup) | **66** |
| moves min/avg/max | 4 / 8.5 / 11 |

Read: `setup : [interchange , insert]` → setup → interchange → insert → interchange' → insert' → setup'. Inverse case = swap the two pieces.

## Family map

```mermaid
graph LR
  F1["R2 · E'"]
  F1 --> EIW
  F1 --> EKR
  F1 --> ELT
  F1 --> ELW
  F1 --> EMO
  F1 --> EMR
  F1 --> EMS
  F1 --> EMT
  F1 --> EMW
  F1 --> EMX
  F1 --> EMY
  F1 --> EMZ
  F1 --> EOM
  F1 --> EOT
  F1 --> EOW
  F1 --> EOZ
  F1 --> EPX
  F1 --> ERK
  F1 --> ERM
  F1 --> ESM
  F1 --> ETL
  F1 --> ETM
  F1 --> ETO
  F1 --> EWI
  F1 --> EWL
  F1 --> EWM
  F1 --> EWO
  F1 --> EXM
  F1 --> EXP
  F1 --> EYM
  F1 --> EZM
  F1 --> EZO
  F2["R2 · E"]
  F2 --> EIZ
  F2 --> EJO
  F2 --> EJT
  F2 --> ELS
  F2 --> ENS
  F2 --> ENT
  F2 --> EOJ
  F2 --> EOR
  F2 --> EOS
  F2 --> EPT
  F2 --> ERO
  F2 --> ERT
  F2 --> ESL
  F2 --> ESN
  F2 --> ESO
  F2 --> ESW
  F2 --> ETJ
  F2 --> ETN
  F2 --> ETP
  F2 --> ETR
  F2 --> ETZ
  F2 --> EWS
  F2 --> EXZ
  F2 --> EZI
  F2 --> EZT
  F2 --> EZX
  F3["S' · R2"]
  F3 --> EIL
  F3 --> EJR
  F3 --> EKM
  F3 --> EKO
  F3 --> EKX
  F3 --> EKY
  F3 --> ELI
  F3 --> ELP
  F3 --> ELR
  F3 --> ELZ
  F3 --> EMK
  F3 --> EOK
  F3 --> EPL
  F3 --> ERJ
  F3 --> ERL
  F3 --> EXK
  F3 --> EYK
  F3 --> EYL
  F3 --> EZL
  F4["S · R2"]
  F4 --> EKT
  F4 --> EMP
  F4 --> EPM
  F4 --> EQY
  F4 --> ERW
  F4 --> EWR
  F4 --> EYQ
  F5["B'@R' · S'"]
  F5 --> EIN
  F5 --> EJM
  F5 --> EKP
  F5 --> EMJ
  F5 --> ENI
  F5 --> EPK
  F6["U2 · M'"]
  F6 --> EIT
  F6 --> EJK
  F6 --> EKJ
  F6 --> ETI
  F7["U@R · E2"]
  F7 --> EJW
  F7 --> EQW
  F7 --> EWJ
  F7 --> EWQ
  F8["U2 · S"]
  F8 --> EKQ
  F8 --> ELM
  F8 --> EML
  F8 --> EQK
  F9["S'@R · B'"]
  F9 --> EKW
  F9 --> EKZ
  F9 --> EWK
  F9 --> EZK
  F10["U@R · E"]
  F10 --> EQT
  F10 --> ETQ
  F10 --> ETW
  F10 --> EWT
  F11["U2 · M"]
  F11 --> EIM
  F11 --> EKN
  F11 --> ENK
  F12["R'@U · M"]
  F12 --> ENY
  F12 --> EXN
  F12 --> EYN
  F13["S@U · R'"]
  F13 --> EPR
  F13 --> ERP
  F13 --> EYP
  F14["S@U · R"]
  F14 --> EPZ
  F14 --> EWP
  F14 --> EZP
  F15["U@R' · E2"]
  F15 --> ESY
  F15 --> EXR
  F15 --> EYS
  F16["S@R · D'"]
  F16 --> EIK
  F16 --> EKI
  F17["E@F' · R2"]
  F17 --> EIO
  F17 --> EOI
  F18["F'@R · S"]
  F18 --> EIP
  F18 --> EPI
  F19["R@U · M2"]
  F19 --> EIQ
  F19 --> EQI
  F20["U'r'F · M2"]
  F20 --> EIS
  F20 --> ESI
  F21["R@D · M2"]
  F21 --> EIY
  F21 --> EYI
  F22["u'@S · D'"]
  F22 --> EJL
  F22 --> ELJ
  F23["u@S' · D"]
  F23 --> EJP
  F23 --> EPJ
  F24["B'@E · F'"]
  F24 --> EJQ
  F24 --> EQJ
  F25["B@E' · F"]
  F25 --> EJS
  F25 --> ESJ
  F26["F@E · B"]
  F26 --> EJX
  F26 --> EXJ
  F27["M'@U · R'"]
  F27 --> EJY
  F27 --> EYJ
  F28["F'@E' · B'"]
  F28 --> EJZ
  F28 --> EZJ
  F29["u'@S · D"]
  F29 --> ELN
  F29 --> ENL
  F30["R2@U · M"]
  F30 --> ENO
  F30 --> EON
  F31["R@U · M"]
  F31 --> ENQ
  F31 --> EQN
  F32["R@U' · M"]
  F32 --> ENR
  F32 --> ERN
  F33["B@U' · M'"]
  F33 --> ENW
  F33 --> EWN
  F34["M2@D' · R'"]
  F34 --> EOQ
  F34 --> EQO
  F35["B@R' · E"]
  F35 --> EOX
  F35 --> EXO
  F36["M2@D' · R"]
  F36 --> EOY
  F36 --> EYO
  F37["E2@R · U"]
  F37 --> EQS
  F37 --> ESQ
  F38["E'@R · U"]
  F38 --> EQX
  F38 --> EXQ
  F39["U@R · E'"]
  F39 --> EQZ
  F39 --> EZQ
  F40["R2@B' · E"]
  F40 --> ERS
  F40 --> ESR
  F41["U@R' · E"]
  F41 --> ERY
  F41 --> EYR
  F42["B@R · E'"]
  F42 --> ESX
  F42 --> EXS
  F43["E@R' · U"]
  F43 --> ETY
  F43 --> EYT
  F44["E2@R' · U"]
  F44 --> EWY
  F44 --> EYW
  F45["U'@r' · E'"]
  F45 --> EWZ
  F45 --> EZW
  F46["B@R · E"]
  F46 --> EXY
  F46 --> EYX
```

## Families

### F1. R2 · E' · ×32

Shape `[E' , R2]` — interchange `E'`, insert `R2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EIW** | `U D R':[E',R2]` | 9 | EWI |
| **EKR** | `D' B:[R2,E']` | 8 | ERK |
| **ELT** | `S' u R':[E',R2]` | 9 | ETL |
| **ELW** | `S' U R':[E',R2]` | 9 | EWL |
| **EMO** | `S' R' B:[R2,E']` | 10 | EOM |
| **EMR** | `B:[R2,E']` | 6 | ERM |
| **EMS** | `E B:[R2,E']` | 8 | ESM |
| **EMT** | `B E':[R2,E']` | 7 | ETM |
| **EMW** | `U D' R':[E',R2]` | 9 | EWM |
| **EMX** | `E2 B:[R2,E']` | 8 | EXM |
| **EMY** | `E' B:[R2,E']` | 8 | EYM |
| **EMZ** | `R2 B:[R2,E']` | 8 | EZM |
| **EOM** | `S' R' B:[E',R2]` | 10 | EMO |
| **EOT** | `u R':[E',R2]` | 7 | ETO |
| **EOW** | `U R':[E',R2]` | 7 | EWO |
| **EOZ** | `U E R':[E',R2]` | 9 | EZO |
| **EPX** | `M U' R':[E',R2]` | 9 | EXP |
| **ERK** | `D' B:[E',R2]` | 8 | EKR |
| **ERM** | `B:[E',R2]` | 6 | EMR |
| **ESM** | `E B:[E',R2]` | 8 | EMS |
| **ETL** | `S' u R:[E',R2]` | 9 | ELT |
| **ETM** | `B E':[E',R2]` | 7 | EMT |
| **ETO** | `u R:[E',R2]` | 7 | EOT |
| **EWI** | `U D R:[E',R2]` | 9 | EIW |
| **EWL** | `S' U R:[E',R2]` | 9 | ELW |
| **EWM** | `U D' R:[E',R2]` | 9 | EMW |
| **EWO** | `U R:[E',R2]` | 7 | EOW |
| **EXM** | `E2 B:[E',R2]` | 8 | EMX |
| **EXP** | `M U' R:[E',R2]` | 9 | EPX |
| **EYM** | `E' B:[E',R2]` | 8 | EMY |
| **EZM** | `R2 B:[E',R2]` | 8 | EMZ |
| **EZO** | `U E R:[E',R2]` | 9 | EOZ |

### F2. R2 · E · ×26

Shape `[E , R2]` — interchange `E`, insert `R2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EIZ** | `U2 F:[E,R2]` | 8 | EZI |
| **EJO** | `F U R':[E,R2]` | 9 | EOJ |
| **EJT** | `D R B':[E,R2]` | 10 | ETJ |
| **ELS** | `S' U R:[E,R2]` | 9 | ESL |
| **ENS** | `U R' B:[R2,E]` | 10 | ESN |
| **ENT** | `D' R B':[E,R2]` | 10 | ETN |
| **EOJ** | `F U R:[E,R2]` | 9 | EJO |
| **EOR** | `u R:[E,R2]` | 7 | ERO |
| **EOS** | `U R:[E,R2]` | 7 | ESO |
| **EPT** | `R B':[E,R2]` | 8 | ETP |
| **ERO** | `u R':[E,R2]` | 7 | EOR |
| **ERT** | `B':[E,R2]` | 6 | ETR |
| **ESL** | `S' U R':[E,R2]` | 9 | ELS |
| **ESN** | `U R' B:[E,R2]` | 10 | ENS |
| **ESO** | `U R':[E,R2]` | 7 | EOS |
| **ESW** | `E B':[E,R2]` | 8 | EWS |
| **ETJ** | `D R B':[R2,E]` | 10 | EJT |
| **ETN** | `D' R B':[R2,E]` | 10 | ENT |
| **ETP** | `R B':[R2,E]` | 8 | EPT |
| **ETR** | `B':[R2,E]` | 6 | ERT |
| **ETZ** | `R2 B':[R2,E]` | 8 | EZT |
| **EWS** | `E B':[R2,E]` | 8 | ESW |
| **EXZ** | `E2 B':[E,R2]` | 8 | EZX |
| **EZI** | `U2 F:[R2,E]` | 8 | EIZ |
| **EZT** | `R2 B':[E,R2]` | 8 | ETZ |
| **EZX** | `E2 B':[R2,E]` | 8 | EXZ |

### F3. S' · R2 · ×19

Shape `[R2 , S']` — interchange `R2`, insert `S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EIL** | `F' B' R':[S',R2]` | 9 | ELI |
| **EJR** | `D' B' R:[S',R2]` | 9 | ERJ |
| **EKM** | `B E' R:[S',R2]` | 9 | EMK |
| **EKO** | `U:[R2,S']` | 6 | EOK |
| **EKX** | `E' R U:[R2,S']` | 10 | EXK |
| **EKY** | `R U:[R2,S']` | 8 | EYK |
| **ELI** | `F' B' R:[S',R2]` | 9 | EIL |
| **ELP** | `M U':[R2,S']` | 8 | EPL |
| **ELR** | `B' R:[S',R2]` | 7 | ERL |
| **ELZ** | `R2 B' R:[S',R2]` | 9 | EZL |
| **EMK** | `B' E' R:[S',R2]` | 9 | EKM |
| **EOK** | `U:[S',R2]` | 6 | EKO |
| **EPL** | `M U':[S',R2]` | 8 | ELP |
| **ERJ** | `D' B' R':[S',R2]` | 9 | EJR |
| **ERL** | `B' R':[S',R2]` | 7 | ELR |
| **EXK** | `E' R U:[S',R2]` | 10 | EKX |
| **EYK** | `R U:[S',R2]` | 8 | EKY |
| **EYL** | `E' B' R':[S',R2]` | 9 | ELY |
| **EZL** | `R2 B' R':[S',R2]` | 9 | ELZ |

### F4. S · R2 · ×7

Shape `[R2 , S]` — interchange `R2`, insert `S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EKT** | `u' R S:[S,R2]` | 9 | ETK |
| **EMP** | `M U:[R2,S]` | 8 | EPM |
| **EPM** | `M U:[S,R2]` | 8 | EMP |
| **EQY** | `U' R':[S,R2]` | 7 | EYQ |
| **ERW** | `B' U' R:[S,R2]` | 9 | EWR |
| **EWR** | `B' U' R':[S,R2]` | 9 | ERW |
| **EYQ** | `U' R:[S,R2]` | 7 | EQY |

### F5. B'@R' · S' · ×6

Shape `[S' , R' B' R]` — interchange `S'`, insert `R' B' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EIN** | `D':[S',R' B' R]` | 10 | ENI |
| **EJM** | `D:[R' B' R,S']` | 10 | EMJ |
| **EKP** | `[S',R' B' R]` | 8 | EPK |
| **EMJ** | `D:[S',R' B' R]` | 10 | EJM |
| **ENI** | `D':[R' B' R,S']` | 10 | EIN |
| **EPK** | `[R' B' R,S']` | 8 | EKP |

### F6. U2 · M' · ×4

Shape `[M' , U2]` — interchange `M'`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EIT** | `u' R U':[M',U2]` | 9 | ETI |
| **EJK** | `U' S U:[M',U2]` | 9 | EKJ |
| **EKJ** | `U' S U':[M',U2]` | 9 | EJK |
| **ETI** | `u' R U:[M',U2]` | 9 | EIT |

### F7. U@R · E2 · ×4

Shape `[E2 , R U R']` — interchange `E2`, insert `R U R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EJW** | `F':[R U R',E2]` | 10 | EWJ |
| **EQW** | `[R U R',E2]` | 8 | EWQ |
| **EWJ** | `F':[E2,R U R']` | 10 | EJW |
| **EWQ** | `[E2,R U R']` | 8 | EQW |

### F8. U2 · S · ×4

Shape `[S , U2]` — interchange `S`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EKQ** | `U' R:[S,U2]` | 8 | EQK |
| **ELM** | `M U:[S,U2]` | 7 | EML |
| **EML** | `M U':[S,U2]` | 7 | ELM |
| **EQK** | `U' R:[U2,S]` | 8 | EKQ |

### F9. S'@R · B' · ×4

Shape `[B' , R S' R']` — interchange `B'`, insert `R S' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EKW** | `E':[R S' R',B']` | 10 | EWK |
| **EKZ** | `[R S' R',B']` | 8 | EZK |
| **EWK** | `E':[B',R S' R']` | 10 | EKW |
| **EZK** | `[B',R S' R']` | 8 | EKZ |

### F10. U@R · E · ×4

Shape `[E , R U R']` — interchange `E`, insert `R U R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EQT** | `[R U R',E]` | 8 | ETQ |
| **ETQ** | `[E,R U R']` | 8 | EQT |
| **ETW** | `E:[R U R',E]` | 9 | EWT |
| **EWT** | `E:[E,R U R']` | 9 | ETW |

### F11. U2 · M · ×3

Shape `[M , U2]` — interchange `M`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EIM** | `M:[U2,M]` | 5 | EMI |
| **EKN** | `U' S U:[M,U2]` | 9 | ENK |
| **ENK** | `U' S U':[M,U2]` | 9 | EKN |

### F12. R'@U · M · ×3

Shape `[M , U R' U']` — interchange `M`, insert `U R' U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ENY** | `[U R' U',M]` | 8 | EYN |
| **EXN** | `E':[M,U R' U']` | 9 | ENX |
| **EYN** | `[M,U R' U']` | 8 | ENY |

### F13. S@U · R' · ×3

Shape `[R' , U S U']` — interchange `R'`, insert `U S U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EPR** | `[U S U',R']` | 8 | ERP |
| **ERP** | `[R',U S U']` | 8 | EPR |
| **EYP** | `E':[R',U S U']` | 9 | EPY |

### F14. S@U · R · ×3

Shape `[R , U S U']` — interchange `R`, insert `U S U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EPZ** | `[U S U',R]` | 8 | EZP |
| **EWP** | `E':[R,U S U']` | 9 | EPW |
| **EZP** | `[R,U S U']` | 8 | EPZ |

### F15. U@R' · E2 · ×3

Shape `[E2 , R' U R]` — interchange `E2`, insert `R' U R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ESY** | `[E2,R' U R]` | 8 | EYS |
| **EXR** | `E':[R' U R,E2]` | 9 | ERX |
| **EYS** | `[R' U R,E2]` | 8 | ESY |

### F16. S@R · D' · ×2

Shape `[D' , R S R']` — interchange `D'`, insert `R S R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EIK** | `B':[D',R S R']` | 10 | EKI |
| **EKI** | `B':[R S R',D']` | 10 | EIK |

### F17. E@F' · R2 · ×2

Shape `[R2 , F' E F]` — interchange `R2`, insert `F' E F`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EIO** | `U R':[F' E F,R2]` | 11 | EOI |
| **EOI** | `U R:[F' E F,R2]` | 11 | EIO |

### F18. F'@R · S · ×2

Shape `[S , R F' R']` — interchange `S`, insert `R F' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EIP** | `U:[R F' R',S]` | 10 | EPI |
| **EPI** | `U:[S,R F' R']` | 10 | EIP |

### F19. R@U · M2 · ×2

Shape `[M2 , U R U']` — interchange `M2`, insert `U R U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EIQ** | `[U R U',M2]` | 8 | EQI |
| **EQI** | `[M2,U R U']` | 8 | EIQ |

### F20. U'r'F · M2 · ×2

Shape `[M2 , U' r' F]` — interchange `M2`, insert `U' r' F`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EIS** | `[U' r' F,M2]` | 8 | ESI |
| **ESI** | `[M2,U' r' F]` | 8 | EIS |

### F21. R@D · M2 · ×2

Shape `[M2 , D R D']` — interchange `M2`, insert `D R D'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EIY** | `[M2,D R D']` | 8 | EYI |
| **EYI** | `[D R D',M2]` | 8 | EIY |

### F22. u'@S · D' · ×2

Shape `[D' , S u' S']` — interchange `D'`, insert `S u' S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EJL** | `[D',S u' S']` | 8 | ELJ |
| **ELJ** | `[S u' S',D']` | 8 | EJL |

### F23. u@S' · D · ×2

Shape `[D , S' u S]` — interchange `D`, insert `S' u S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EJP** | `[D,S' u S]` | 8 | EPJ |
| **EPJ** | `[S' u S,D]` | 8 | EJP |

### F24. B'@E · F' · ×2

Shape `[F' , E B' E']` — interchange `F'`, insert `E B' E'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EJQ** | `[F',E B' E']` | 8 | EQJ |
| **EQJ** | `[E B' E',F']` | 8 | EJQ |

### F25. B@E' · F · ×2

Shape `[F , E' B E]` — interchange `F`, insert `E' B E`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EJS** | `[F,E' B E]` | 8 | ESJ |
| **ESJ** | `[E' B E,F]` | 8 | EJS |

### F26. F@E · B · ×2

Shape `[B , E F E']` — interchange `B`, insert `E F E'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EJX** | `[E F E',B]` | 8 | EXJ |
| **EXJ** | `[B,E F E']` | 8 | EJX |

### F27. M'@U · R' · ×2

Shape `[R' , U M' U']` — interchange `R'`, insert `U M' U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EJY** | `U:[R',U M' U']` | 9 | EYJ |
| **EYJ** | `U:[U M' U',R']` | 9 | EJY |

### F28. F'@E' · B' · ×2

Shape `[B' , E' F' E]` — interchange `B'`, insert `E' F' E`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EJZ** | `[E' F' E,B']` | 8 | EZJ |
| **EZJ** | `[B',E' F' E]` | 8 | EJZ |

### F29. u'@S · D · ×2

Shape `[D , S u' S']` — interchange `D`, insert `S u' S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ELN** | `[S u' S',D]` | 8 | ENL |
| **ENL** | `[D,S u' S']` | 8 | ELN |

### F30. R2@U · M · ×2

Shape `[M , U R2 U']` — interchange `M`, insert `U R2 U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ENO** | `[U R2 U',M]` | 8 | EON |
| **EON** | `[M,U R2 U']` | 8 | ENO |

### F31. R@U · M · ×2

Shape `[M , U R U']` — interchange `M`, insert `U R U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ENQ** | `[U R U',M]` | 8 | EQN |
| **EQN** | `[M,U R U']` | 8 | ENQ |

### F32. R@U' · M · ×2

Shape `[M , U' R U]` — interchange `M`, insert `U' R U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ENR** | `M:[U' R U,M]` | 9 | ERN |
| **ERN** | `M:[M,U' R U]` | 9 | ENR |

### F33. B@U' · M' · ×2

Shape `[M' , U' B U]` — interchange `M'`, insert `U' B U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ENW** | `[M',U' B U]` | 8 | EWN |
| **EWN** | `[U' B U,M']` | 8 | ENW |

### F34. M2@D' · R' · ×2

Shape `[R' , D' M2 D]` — interchange `R'`, insert `D' M2 D`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EOQ** | `[D' M2 D,R']` | 8 | EQO |
| **EQO** | `[R',D' M2 D]` | 8 | EOQ |

### F35. B@R' · E · ×2

Shape `[E , R' B R]` — interchange `E`, insert `R' B R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EOX** | `R':[E,R' B R]` | 9 | EXO |
| **EXO** | `R':[R' B R,E]` | 9 | EOX |

### F36. M2@D' · R · ×2

Shape `[R , D' M2 D]` — interchange `R`, insert `D' M2 D`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EOY** | `[D' M2 D,R]` | 8 | EYO |
| **EYO** | `[R,D' M2 D]` | 8 | EOY |

### F37. E2@R · U · ×2

Shape `[U , R E2 R']` — interchange `U`, insert `R E2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EQS** | `R:[U,R E2 R']` | 9 | ESQ |
| **ESQ** | `R:[R E2 R',U]` | 9 | EQS |

### F38. E'@R · U · ×2

Shape `[U , R E' R']` — interchange `U`, insert `R E' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EQX** | `R:[U,R E' R']` | 9 | EXQ |
| **EXQ** | `R:[R E' R',U]` | 9 | EQX |

### F39. U@R · E' · ×2

Shape `[E' , R U R']` — interchange `E'`, insert `R U R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EQZ** | `[R U R',E']` | 8 | EZQ |
| **EZQ** | `[E',R U R']` | 8 | EQZ |

### F40. R2@B' · E · ×2

Shape `[E , B' R2 B]` — interchange `E`, insert `B' R2 B`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ERS** | `[B' R2 B,E]` | 8 | ESR |
| **ESR** | `[E,B' R2 B]` | 8 | ERS |

### F41. U@R' · E · ×2

Shape `[E , R' U R]` — interchange `E`, insert `R' U R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ERY** | `[E,R' U R]` | 8 | EYR |
| **EYR** | `[R' U R,E]` | 8 | ERY |

### F42. B@R · E' · ×2

Shape `[E' , R B R']` — interchange `E'`, insert `R B R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ESX** | `[E',R B R']` | 8 | EXS |
| **EXS** | `[R B R',E']` | 8 | ESX |

### F43. E@R' · U · ×2

Shape `[U , R' E R]` — interchange `U`, insert `R' E R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ETY** | `R':[R' E R,U]` | 9 | EYT |
| **EYT** | `R':[U,R' E R]` | 9 | ETY |

### F44. E2@R' · U · ×2

Shape `[U , R' E2 R]` — interchange `U`, insert `R' E2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EWY** | `R':[R' E2 R,U]` | 9 | EYW |
| **EYW** | `R':[U,R' E2 R]` | 9 | EWY |

### F45. U'@r' · E' · ×2

Shape `[E' , r' U' r]` — interchange `E'`, insert `r' U' r`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EWZ** | `[E',r' U' r]` | 8 | EZW |
| **EZW** | `[r' U' r,E']` | 8 | EWZ |

### F46. B@R · E · ×2

Shape `[E , R B R']` — interchange `E`, insert `R B R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **EXY** | `[R B R',E]` | 8 | EYX |
| **EYX** | `[E,R B R']` | 8 | EXY |

## Singletons

| case | comm | moves | inverse |
|---|---|---|---|
| **EIR** | `[M2,U' F U]` | 8 | ERI |
| **EIX** | `u:[R',U' M2 U]` | 9 | EXI |
| **EJN** | `U M':[U,M U2 M]` | 9 | ENJ |
| **EKS** | `u' S:[R,S' R2 S']` | 10 | ESK |
| **ELO** | `r:[D,R' S R]` | 9 | EOL |
| **ELQ** | `U:[E' R' S',R']` | 9 | EQL |
| **ELX** | `[B',U' S U]` | 8 | EXL |
| **ELY** | `r:[S',R' B R]` | 9 | EYL |
| **EMI** | `[D2,M']` | 4 | EIM |
| **EMQ** | `U:[R,U M2 U']` | 9 | EQM |
| **ENJ** | `U M:[U',M' U2 M']` | 9 | EJN |
| **ENP** | `[B' E B,D]` | 8 | EPN |
| **ENX** | `u:[R',U' M U]` | 9 | EXN |
| **ENZ** | `u:[R,U' M U]` | 9 | EZN |
| **EOL** | `S:[S,R' U' R]` | 9 | ELO |
| **EPN** | `[S' u S,D']` | 8 | ENP |
| **EPQ** | `U:[S,u' R u]` | 9 | EQP |
| **EPS** | `u':[R,E' R S]` | 9 | ESP |
| **EPW** | `u:[S,U' R U]` | 9 | EWP |
| **EPY** | `u:[S,U' R' U]` | 9 | EYP |
| **EQL** | `R:[M' U' S,U']` | 9 | ELQ |
| **EQM** | `B:[R' S' R,B2]` | 9 | EMQ |
| **EQP** | `E:[R,u S u']` | 9 | EPQ |
| **ERI** | `M':[U' R U,M2]` | 9 | EIR |
| **ERX** | `[B' R2 B,E2]` | 8 | EXR |
| **ERZ** | `[B E2 B',R2]` | 8 | EZR |
| **ESK** | `u' S':[R',S R2 S]` | 10 | EKS |
| **ESP** | `E:[R',u S u']` | 9 | EPS |
| **ESZ** | `u:[R,S' R E']` | 10 | EZS |
| **ETK** | `u' R':[S',R2 U2]` | 9 | EKT |
| **ETX** | `[R2 E R2 E,B]` | 10 | EXT |
| **EXI** | `E':[M2,U R' U']` | 9 | EIX |
| **EXL** | `u:[R,E R S']` | 9 | ELX |
| **EXT** | `u:[R,E R2 E]` | 9 | ETX |
| **EZN** | `M:[M,U' R' U]` | 9 | ENZ |
| **EZR** | `R:[U S U',R2]` | 9 | ERZ |
| **EZS** | `r':[U',R' E R]` | 10 | ESZ |

## Inverse‑pair index

| learn | comm | ⇄ | derive | comm |
|---|---|---|---|---|
| **EIK** | `B':[D',R S R']` | ⇄ | EKI | `B':[R S R',D']` |
| **EIL** | `F' B' R':[S',R2]` | ⇄ | ELI | `F' B' R:[S',R2]` |
| **EIM** | `M:[U2,M]` | ⇄ | EMI | `[D2,M']` |
| **EIN** | `D':[S',R' B' R]` | ⇄ | ENI | `D':[R' B' R,S']` |
| **EIO** | `U R':[F' E F,R2]` | ⇄ | EOI | `U R:[F' E F,R2]` |
| **EIP** | `U:[R F' R',S]` | ⇄ | EPI | `U:[S,R F' R']` |
| **EIQ** | `[U R U',M2]` | ⇄ | EQI | `[M2,U R U']` |
| **EIR** | `[M2,U' F U]` | ⇄ | ERI | `M':[U' R U,M2]` |
| **EIS** | `[U' r' F,M2]` | ⇄ | ESI | `[M2,U' r' F]` |
| **EIT** | `u' R U':[M',U2]` | ⇄ | ETI | `u' R U:[M',U2]` |
| **EIW** | `U D R':[E',R2]` | ⇄ | EWI | `U D R:[E',R2]` |
| **EIX** | `u:[R',U' M2 U]` | ⇄ | EXI | `E':[M2,U R' U']` |
| **EIY** | `[M2,D R D']` | ⇄ | EYI | `[D R D',M2]` |
| **EIZ** | `U2 F:[E,R2]` | ⇄ | EZI | `U2 F:[R2,E]` |
| **EJK** | `U' S U:[M',U2]` | ⇄ | EKJ | `U' S U':[M',U2]` |
| **EJL** | `[D',S u' S']` | ⇄ | ELJ | `[S u' S',D']` |
| **EJM** | `D:[R' B' R,S']` | ⇄ | EMJ | `D:[S',R' B' R]` |
| **EJN** | `U M':[U,M U2 M]` | ⇄ | ENJ | `U M:[U',M' U2 M']` |
| **EJO** | `F U R':[E,R2]` | ⇄ | EOJ | `F U R:[E,R2]` |
| **EJP** | `[D,S' u S]` | ⇄ | EPJ | `[S' u S,D]` |
| **EJQ** | `[F',E B' E']` | ⇄ | EQJ | `[E B' E',F']` |
| **EJR** | `D' B' R:[S',R2]` | ⇄ | ERJ | `D' B' R':[S',R2]` |
| **EJS** | `[F,E' B E]` | ⇄ | ESJ | `[E' B E,F]` |
| **EJT** | `D R B':[E,R2]` | ⇄ | ETJ | `D R B':[R2,E]` |
| **EJW** | `F':[R U R',E2]` | ⇄ | EWJ | `F':[E2,R U R']` |
| **EJX** | `[E F E',B]` | ⇄ | EXJ | `[B,E F E']` |
| **EJY** | `U:[R',U M' U']` | ⇄ | EYJ | `U:[U M' U',R']` |
| **EJZ** | `[E' F' E,B']` | ⇄ | EZJ | `[B',E' F' E]` |
| **EKM** | `B E' R:[S',R2]` | ⇄ | EMK | `B' E' R:[S',R2]` |
| **EKN** | `U' S U:[M,U2]` | ⇄ | ENK | `U' S U':[M,U2]` |
| **EKO** | `U:[R2,S']` | ⇄ | EOK | `U:[S',R2]` |
| **EKP** | `[S',R' B' R]` | ⇄ | EPK | `[R' B' R,S']` |
| **EKQ** | `U' R:[S,U2]` | ⇄ | EQK | `U' R:[U2,S]` |
| **EKR** | `D' B:[R2,E']` | ⇄ | ERK | `D' B:[E',R2]` |
| **EKS** | `u' S:[R,S' R2 S']` | ⇄ | ESK | `u' S':[R',S R2 S]` |
| **EKT** | `u' R S:[S,R2]` | ⇄ | ETK | `u' R':[S',R2 U2]` |
| **EKW** | `E':[R S' R',B']` | ⇄ | EWK | `E':[B',R S' R']` |
| **EKX** | `E' R U:[R2,S']` | ⇄ | EXK | `E' R U:[S',R2]` |
| **EKY** | `R U:[R2,S']` | ⇄ | EYK | `R U:[S',R2]` |
| **EKZ** | `[R S' R',B']` | ⇄ | EZK | `[B',R S' R']` |
| **ELM** | `M U:[S,U2]` | ⇄ | EML | `M U':[S,U2]` |
| **ELN** | `[S u' S',D]` | ⇄ | ENL | `[D,S u' S']` |
| **ELO** | `r:[D,R' S R]` | ⇄ | EOL | `S:[S,R' U' R]` |
| **ELP** | `M U':[R2,S']` | ⇄ | EPL | `M U':[S',R2]` |
| **ELQ** | `U:[E' R' S',R']` | ⇄ | EQL | `R:[M' U' S,U']` |
| **ELR** | `B' R:[S',R2]` | ⇄ | ERL | `B' R':[S',R2]` |
| **ELS** | `S' U R:[E,R2]` | ⇄ | ESL | `S' U R':[E,R2]` |
| **ELT** | `S' u R':[E',R2]` | ⇄ | ETL | `S' u R:[E',R2]` |
| **ELW** | `S' U R':[E',R2]` | ⇄ | EWL | `S' U R:[E',R2]` |
| **ELX** | `[B',U' S U]` | ⇄ | EXL | `u:[R,E R S']` |
| **ELY** | `r:[S',R' B R]` | ⇄ | EYL | `E' B' R':[S',R2]` |
| **ELZ** | `R2 B' R:[S',R2]` | ⇄ | EZL | `R2 B' R':[S',R2]` |
| **EMO** | `S' R' B:[R2,E']` | ⇄ | EOM | `S' R' B:[E',R2]` |
| **EMP** | `M U:[R2,S]` | ⇄ | EPM | `M U:[S,R2]` |
| **EMQ** | `U:[R,U M2 U']` | ⇄ | EQM | `B:[R' S' R,B2]` |
| **EMR** | `B:[R2,E']` | ⇄ | ERM | `B:[E',R2]` |
| **EMS** | `E B:[R2,E']` | ⇄ | ESM | `E B:[E',R2]` |
| **EMT** | `B E':[R2,E']` | ⇄ | ETM | `B E':[E',R2]` |
| **EMW** | `U D' R':[E',R2]` | ⇄ | EWM | `U D' R:[E',R2]` |
| **EMX** | `E2 B:[R2,E']` | ⇄ | EXM | `E2 B:[E',R2]` |
| **EMY** | `E' B:[R2,E']` | ⇄ | EYM | `E' B:[E',R2]` |
| **EMZ** | `R2 B:[R2,E']` | ⇄ | EZM | `R2 B:[E',R2]` |
| **ENO** | `[U R2 U',M]` | ⇄ | EON | `[M,U R2 U']` |
| **ENP** | `[B' E B,D]` | ⇄ | EPN | `[S' u S,D']` |
| **ENQ** | `[U R U',M]` | ⇄ | EQN | `[M,U R U']` |
| **ENR** | `M:[U' R U,M]` | ⇄ | ERN | `M:[M,U' R U]` |
| **ENS** | `U R' B:[R2,E]` | ⇄ | ESN | `U R' B:[E,R2]` |
| **ENT** | `D' R B':[E,R2]` | ⇄ | ETN | `D' R B':[R2,E]` |
| **ENW** | `[M',U' B U]` | ⇄ | EWN | `[U' B U,M']` |
| **ENX** | `u:[R',U' M U]` | ⇄ | EXN | `E':[M,U R' U']` |
| **ENY** | `[U R' U',M]` | ⇄ | EYN | `[M,U R' U']` |
| **ENZ** | `u:[R,U' M U]` | ⇄ | EZN | `M:[M,U' R' U]` |
| **EOQ** | `[D' M2 D,R']` | ⇄ | EQO | `[R',D' M2 D]` |
| **EOR** | `u R:[E,R2]` | ⇄ | ERO | `u R':[E,R2]` |
| **EOS** | `U R:[E,R2]` | ⇄ | ESO | `U R':[E,R2]` |
| **EOT** | `u R':[E',R2]` | ⇄ | ETO | `u R:[E',R2]` |
| **EOW** | `U R':[E',R2]` | ⇄ | EWO | `U R:[E',R2]` |
| **EOX** | `R':[E,R' B R]` | ⇄ | EXO | `R':[R' B R,E]` |
| **EOY** | `[D' M2 D,R]` | ⇄ | EYO | `[R,D' M2 D]` |
| **EOZ** | `U E R':[E',R2]` | ⇄ | EZO | `U E R:[E',R2]` |
| **EPQ** | `U:[S,u' R u]` | ⇄ | EQP | `E:[R,u S u']` |
| **EPR** | `[U S U',R']` | ⇄ | ERP | `[R',U S U']` |
| **EPS** | `u':[R,E' R S]` | ⇄ | ESP | `E:[R',u S u']` |
| **EPT** | `R B':[E,R2]` | ⇄ | ETP | `R B':[R2,E]` |
| **EPW** | `u:[S,U' R U]` | ⇄ | EWP | `E':[R,U S U']` |
| **EPX** | `M U' R':[E',R2]` | ⇄ | EXP | `M U' R:[E',R2]` |
| **EPY** | `u:[S,U' R' U]` | ⇄ | EYP | `E':[R',U S U']` |
| **EPZ** | `[U S U',R]` | ⇄ | EZP | `[R,U S U']` |
| **EQS** | `R:[U,R E2 R']` | ⇄ | ESQ | `R:[R E2 R',U]` |
| **EQT** | `[R U R',E]` | ⇄ | ETQ | `[E,R U R']` |
| **EQW** | `[R U R',E2]` | ⇄ | EWQ | `[E2,R U R']` |
| **EQX** | `R:[U,R E' R']` | ⇄ | EXQ | `R:[R E' R',U]` |
| **EQY** | `U' R':[S,R2]` | ⇄ | EYQ | `U' R:[S,R2]` |
| **EQZ** | `[R U R',E']` | ⇄ | EZQ | `[E',R U R']` |
| **ERS** | `[B' R2 B,E]` | ⇄ | ESR | `[E,B' R2 B]` |
| **ERT** | `B':[E,R2]` | ⇄ | ETR | `B':[R2,E]` |
| **ERW** | `B' U' R:[S,R2]` | ⇄ | EWR | `B' U' R':[S,R2]` |
| **ERX** | `[B' R2 B,E2]` | ⇄ | EXR | `E':[R' U R,E2]` |
| **ERY** | `[E,R' U R]` | ⇄ | EYR | `[R' U R,E]` |
| **ERZ** | `[B E2 B',R2]` | ⇄ | EZR | `R:[U S U',R2]` |
| **ESW** | `E B':[E,R2]` | ⇄ | EWS | `E B':[R2,E]` |
| **ESX** | `[E',R B R']` | ⇄ | EXS | `[R B R',E']` |
| **ESY** | `[E2,R' U R]` | ⇄ | EYS | `[R' U R,E2]` |
| **ESZ** | `u:[R,S' R E']` | ⇄ | EZS | `r':[U',R' E R]` |
| **ETW** | `E:[R U R',E]` | ⇄ | EWT | `E:[E,R U R']` |
| **ETX** | `[R2 E R2 E,B]` | ⇄ | EXT | `u:[R,E R2 E]` |
| **ETY** | `R':[R' E R,U]` | ⇄ | EYT | `R':[U,R' E R]` |
| **ETZ** | `R2 B':[R2,E]` | ⇄ | EZT | `R2 B':[E,R2]` |
| **EWY** | `R':[R' E2 R,U]` | ⇄ | EYW | `R':[U,R' E2 R]` |
| **EWZ** | `[E',r' U' r]` | ⇄ | EZW | `[r' U' r,E']` |
| **EXY** | `[R B R',E]` | ⇄ | EYX | `[E,R B R']` |
| **EXZ** | `E2 B':[E,R2]` | ⇄ | EZX | `E2 B':[R2,E]` |

## Case cards (with 3‑cycle diagrams)

#### EIK — S@R · D' — `B':[D',R S R']` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      3 d ·
      · · ·
  1=E(UB)  2=I(DF)  3=K(DL)
```

#### EIL — S' · R2 — `F' B' R':[S',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=E(UB)  2=I(DF)  3=L(LD)
```

#### EIM — U2 · M — `M:[U2,M]` (5)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · 3 ·
  1=E(UB)  2=I(DF)  3=M(DB)
```

#### EIN — B'@R' · S' — `D':[S',R' B' R]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · 2 ·
      · d ·
      · · ·
  1=E(UB)  2=I(DF)  3=N(BD)
```

#### EIO — E@F' · R2 — `U R':[F' E F,R2]` (11)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d 3
      · · ·
  1=E(UB)  2=I(DF)  3=O(DR)
```

#### EIP — F'@R · S — `U:[R F' R',S]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=E(UB)  2=I(DF)  3=P(RD)
```

#### EIQ — R@U · M2 — `[U R U',M2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=E(UB)  2=I(DF)  3=Q(FR)
```

#### EIR — F@U' · M2 — `[M2,U' F U]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=E(UB)  2=I(DF)  3=R(RF)
```

#### EIS — U'r'F · M2 — `[U' r' F,M2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=E(UB)  2=I(DF)  3=S(FL)
```

#### EIT — U2 · M' — `u' R U':[M',U2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=E(UB)  2=I(DF)  3=T(LF)
```

#### EIW — R2 · E' — `U D R':[E',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=E(UB)  2=I(DF)  3=W(BL)
```

#### EIX — M2@U' · R' — `u:[R',U' M2 U]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=E(UB)  2=I(DF)  3=X(LB)
```

#### EIY — R@D · M2 — `[M2,D R D']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=E(UB)  2=I(DF)  3=Y(BR)
```

#### EIZ — R2 · E — `U2 F:[E,R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=E(UB)  2=I(DF)  3=Z(RB)
```

#### EJK — U2 · M' — `U' S U:[M',U2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=E(UB)  2=J(FD)  3=K(DL)
```

#### EJL — u'@S · D' — `[D',S u' S']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=J(FD)  3=L(LD)
```

#### EJM — B'@R' · S' — `D:[R' B' R,S']` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=E(UB)  2=J(FD)  3=M(DB)
```

#### EJN — U2@M · U — `U M':[U,M U2 M]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=J(FD)  3=N(BD)
```

#### EJO — R2 · E — `F U R':[E,R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=E(UB)  2=J(FD)  3=O(DR)
```

#### EJP — u@S' · D — `[D,S' u S]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=J(FD)  3=P(RD)
```

#### EJQ — B'@E · F' — `[F',E B' E']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=J(FD)  3=Q(FR)
```

#### EJR — S' · R2 — `D' B' R:[S',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=J(FD)  3=R(RF)
```

#### EJS — B@E' · F — `[F,E' B E]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=J(FD)  3=S(FL)
```

#### EJT — R2 · E — `D R B':[E,R2]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=J(FD)  3=T(LF)
```

#### EJW — U@R · E2 — `F':[R U R',E2]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=J(FD)  3=W(BL)
```

#### EJX — F@E · B — `[E F E',B]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=J(FD)  3=X(LB)
```

#### EJY — M'@U · R' — `U:[R',U M' U']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=J(FD)  3=Y(BR)
```

#### EJZ — F'@E' · B' — `[E' F' E,B']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=J(FD)  3=Z(RB)
```

#### EKI — S@R · D' — `B':[R S R',D']` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      2 d ·
      · · ·
  1=E(UB)  2=K(DL)  3=I(DF)
```

#### EKJ — U2 · M' — `U' S U':[M',U2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=E(UB)  2=K(DL)  3=J(FD)
```

#### EKM — S' · R2 — `B E' R:[S',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · 3 ·
  1=E(UB)  2=K(DL)  3=M(DB)
```

#### EKN — U2 · M — `U' S U:[M,U2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      2 d ·
      · · ·
  1=E(UB)  2=K(DL)  3=N(BD)
```

#### EKO — S' · R2 — `U:[R2,S']` (6)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d 3
      · · ·
  1=E(UB)  2=K(DL)  3=O(DR)
```

#### EKP — B'@R' · S' — `[S',R' B' R]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=E(UB)  2=K(DL)  3=P(RD)
```

#### EKQ — U2 · S — `U' R:[S,U2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=E(UB)  2=K(DL)  3=Q(FR)
```

#### EKR — R2 · E' — `D' B:[R2,E']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=E(UB)  2=K(DL)  3=R(RF)
```

#### EKS — R2@S' · R — `u' S:[R,S' R2 S']` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=E(UB)  2=K(DL)  3=S(FL)
```

#### EKT — S · R2 — `u' R S:[S,R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=E(UB)  2=K(DL)  3=T(LF)
```

#### EKW — S'@R · B' — `E':[R S' R',B']` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=E(UB)  2=K(DL)  3=W(BL)
```

#### EKX — S' · R2 — `E' R U:[R2,S']` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=E(UB)  2=K(DL)  3=X(LB)
```

#### EKY — S' · R2 — `R U:[R2,S']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=E(UB)  2=K(DL)  3=Y(BR)
```

#### EKZ — S'@R · B' — `[R S' R',B']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=E(UB)  2=K(DL)  3=Z(RB)
```

#### ELI — S' · R2 — `F' B' R:[S',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=E(UB)  2=L(LD)  3=I(DF)
```

#### ELJ — u'@S · D' — `[S u' S',D']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=L(LD)  3=J(FD)
```

#### ELM — U2 · S — `M U:[S,U2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=E(UB)  2=L(LD)  3=M(DB)
```

#### ELN — u'@S · D — `[S u' S',D]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=L(LD)  3=N(BD)
```

#### ELO — S@R' · D — `r:[D,R' S R]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=E(UB)  2=L(LD)  3=O(DR)
```

#### ELP — S' · R2 — `M U':[R2,S']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=L(LD)  3=P(RD)
```

#### ELQ — E'R'S' · R' — `U:[E' R' S',R']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=L(LD)  3=Q(FR)
```

#### ELR — S' · R2 — `B' R:[S',R2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=L(LD)  3=R(RF)
```

#### ELS — R2 · E — `S' U R:[E,R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=L(LD)  3=S(FL)
```

#### ELT — R2 · E' — `S' u R':[E',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=L(LD)  3=T(LF)
```

#### ELW — R2 · E' — `S' U R':[E',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=L(LD)  3=W(BL)
```

#### ELX — S@U' · B' — `[B',U' S U]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=L(LD)  3=X(LB)
```

#### ELY — B@R' · S' — `r:[S',R' B R]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=L(LD)  3=Y(BR)
```

#### ELZ — S' · R2 — `R2 B' R:[S',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=L(LD)  3=Z(RB)
```

#### EMI — M' · D2 — `[D2,M']` (4)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · 2 ·
  1=E(UB)  2=M(DB)  3=I(DF)
```

#### EMJ — B'@R' · S' — `D:[S',R' B' R]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=E(UB)  2=M(DB)  3=J(FD)
```

#### EMK — S' · R2 — `B' E' R:[S',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · 2 ·
  1=E(UB)  2=M(DB)  3=K(DL)
```

#### EML — U2 · S — `M U':[S,U2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=E(UB)  2=M(DB)  3=L(LD)
```

#### EMO — R2 · E' — `S' R' B:[R2,E']` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · 2 ·
  1=E(UB)  2=M(DB)  3=O(DR)
```

#### EMP — S · R2 — `M U:[R2,S]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=E(UB)  2=M(DB)  3=P(RD)
```

#### EMQ — M2@U · R — `U:[R,U M2 U']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=E(UB)  2=M(DB)  3=Q(FR)
```

#### EMR — R2 · E' — `B:[R2,E']` (6)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=E(UB)  2=M(DB)  3=R(RF)
```

#### EMS — R2 · E' — `E B:[R2,E']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=E(UB)  2=M(DB)  3=S(FL)
```

#### EMT — R2 · E' — `B E':[R2,E']` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=E(UB)  2=M(DB)  3=T(LF)
```

#### EMW — R2 · E' — `U D' R':[E',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=E(UB)  2=M(DB)  3=W(BL)
```

#### EMX — R2 · E' — `E2 B:[R2,E']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=E(UB)  2=M(DB)  3=X(LB)
```

#### EMY — R2 · E' — `E' B:[R2,E']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=E(UB)  2=M(DB)  3=Y(BR)
```

#### EMZ — R2 · E' — `R2 B:[R2,E']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=E(UB)  2=M(DB)  3=Z(RB)
```

#### ENI — B'@R' · S' — `D':[R' B' R,S']` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · 3 ·
      · d ·
      · · ·
  1=E(UB)  2=N(BD)  3=I(DF)
```

#### ENJ — U2@M' · U' — `U M:[U',M' U2 M']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=N(BD)  3=J(FD)
```

#### ENK — U2 · M — `U' S U':[M,U2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      3 d ·
      · · ·
  1=E(UB)  2=N(BD)  3=K(DL)
```

#### ENL — u'@S · D — `[D,S u' S']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=N(BD)  3=L(LD)
```

#### ENO — R2@U · M — `[U R2 U',M]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d 3
      · · ·
  1=E(UB)  2=N(BD)  3=O(DR)
```

#### ENP — E@B' · D — `[B' E B,D]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=N(BD)  3=P(RD)
```

#### ENQ — R@U · M — `[U R U',M]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=N(BD)  3=Q(FR)
```

#### ENR — R@U' · M — `M:[U' R U,M]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=N(BD)  3=R(RF)
```

#### ENS — R2 · E — `U R' B:[R2,E]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=N(BD)  3=S(FL)
```

#### ENT — R2 · E — `D' R B':[E,R2]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=N(BD)  3=T(LF)
```

#### ENW — B@U' · M' — `[M',U' B U]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=N(BD)  3=W(BL)
```

#### ENX — M@U' · R' — `u:[R',U' M U]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=N(BD)  3=X(LB)
```

#### ENY — R'@U · M — `[U R' U',M]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=N(BD)  3=Y(BR)
```

#### ENZ — M@U' · R — `u:[R,U' M U]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=N(BD)  3=Z(RB)
```

#### EOI — E@F' · R2 — `U R:[F' E F,R2]` (11)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d 2
      · · ·
  1=E(UB)  2=O(DR)  3=I(DF)
```

#### EOJ — R2 · E — `F U R:[E,R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=E(UB)  2=O(DR)  3=J(FD)
```

#### EOK — S' · R2 — `U:[S',R2]` (6)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d 2
      · · ·
  1=E(UB)  2=O(DR)  3=K(DL)
```

#### EOL — U'@R' · S — `S:[S,R' U' R]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=E(UB)  2=O(DR)  3=L(LD)
```

#### EOM — R2 · E' — `S' R' B:[E',R2]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · 3 ·
  1=E(UB)  2=O(DR)  3=M(DB)
```

#### EON — R2@U · M — `[M,U R2 U']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d 2
      · · ·
  1=E(UB)  2=O(DR)  3=N(BD)
```

#### EOQ — M2@D' · R' — `[D' M2 D,R']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=E(UB)  2=O(DR)  3=Q(FR)
```

#### EOR — R2 · E — `u R:[E,R2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=E(UB)  2=O(DR)  3=R(RF)
```

#### EOS — R2 · E — `U R:[E,R2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=E(UB)  2=O(DR)  3=S(FL)
```

#### EOT — R2 · E' — `u R':[E',R2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=E(UB)  2=O(DR)  3=T(LF)
```

#### EOW — R2 · E' — `U R':[E',R2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=E(UB)  2=O(DR)  3=W(BL)
```

#### EOX — B@R' · E — `R':[E,R' B R]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=E(UB)  2=O(DR)  3=X(LB)
```

#### EOY — M2@D' · R — `[D' M2 D,R]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=E(UB)  2=O(DR)  3=Y(BR)
```

#### EOZ — R2 · E' — `U E R':[E',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=E(UB)  2=O(DR)  3=Z(RB)
```

#### EPI — F'@R · S — `U:[S,R F' R']` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=E(UB)  2=P(RD)  3=I(DF)
```

#### EPJ — u@S' · D — `[S' u S,D]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=P(RD)  3=J(FD)
```

#### EPK — B'@R' · S' — `[R' B' R,S']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=E(UB)  2=P(RD)  3=K(DL)
```

#### EPL — S' · R2 — `M U':[S',R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=P(RD)  3=L(LD)
```

#### EPM — S · R2 — `M U:[S,R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=E(UB)  2=P(RD)  3=M(DB)
```

#### EPN — u@S' · D' — `[S' u S,D']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=P(RD)  3=N(BD)
```

#### EPQ — R@u' · S — `U:[S,u' R u]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=P(RD)  3=Q(FR)
```

#### EPR — S@U · R' — `[U S U',R']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=P(RD)  3=R(RF)
```

#### EPS — E'RS · R — `u':[R,E' R S]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=P(RD)  3=S(FL)
```

#### EPT — R2 · E — `R B':[E,R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=P(RD)  3=T(LF)
```

#### EPW — R@U' · S — `u:[S,U' R U]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=P(RD)  3=W(BL)
```

#### EPX — R2 · E' — `M U' R':[E',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=P(RD)  3=X(LB)
```

#### EPY — R'@U' · S — `u:[S,U' R' U]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=P(RD)  3=Y(BR)
```

#### EPZ — S@U · R — `[U S U',R]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=P(RD)  3=Z(RB)
```

#### EQI — R@U · M2 — `[M2,U R U']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=E(UB)  2=Q(FR)  3=I(DF)
```

#### EQJ — B'@E · F' — `[E B' E',F']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Q(FR)  3=J(FD)
```

#### EQK — U2 · S — `U' R:[U2,S]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=E(UB)  2=Q(FR)  3=K(DL)
```

#### EQL — M'U'S · U' — `R:[M' U' S,U']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Q(FR)  3=L(LD)
```

#### EQM — S'@R' · B2 — `B:[R' S' R,B2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=E(UB)  2=Q(FR)  3=M(DB)
```

#### EQN — R@U · M — `[M,U R U']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Q(FR)  3=N(BD)
```

#### EQO — M2@D' · R' — `[R',D' M2 D]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=E(UB)  2=Q(FR)  3=O(DR)
```

#### EQP — S@u · R — `E:[R,u S u']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Q(FR)  3=P(RD)
```

#### EQS — E2@R · U — `R:[U,R E2 R']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Q(FR)  3=S(FL)
```

#### EQT — U@R · E — `[R U R',E]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Q(FR)  3=T(LF)
```

#### EQW — U@R · E2 — `[R U R',E2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Q(FR)  3=W(BL)
```

#### EQX — E'@R · U — `R:[U,R E' R']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Q(FR)  3=X(LB)
```

#### EQY — S · R2 — `U' R':[S,R2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Q(FR)  3=Y(BR)
```

#### EQZ — U@R · E' — `[R U R',E']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Q(FR)  3=Z(RB)
```

#### ERI — R@U' · M2 — `M':[U' R U,M2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=E(UB)  2=R(RF)  3=I(DF)
```

#### ERJ — S' · R2 — `D' B' R':[S',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=R(RF)  3=J(FD)
```

#### ERK — R2 · E' — `D' B:[E',R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=E(UB)  2=R(RF)  3=K(DL)
```

#### ERL — S' · R2 — `B' R':[S',R2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=R(RF)  3=L(LD)
```

#### ERM — R2 · E' — `B:[E',R2]` (6)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=E(UB)  2=R(RF)  3=M(DB)
```

#### ERN — R@U' · M — `M:[M,U' R U]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=R(RF)  3=N(BD)
```

#### ERO — R2 · E — `u R':[E,R2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=E(UB)  2=R(RF)  3=O(DR)
```

#### ERP — S@U · R' — `[R',U S U']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=R(RF)  3=P(RD)
```

#### ERS — R2@B' · E — `[B' R2 B,E]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=R(RF)  3=S(FL)
```

#### ERT — R2 · E — `B':[E,R2]` (6)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=R(RF)  3=T(LF)
```

#### ERW — S · R2 — `B' U' R:[S,R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=R(RF)  3=W(BL)
```

#### ERX — R2@B' · E2 — `[B' R2 B,E2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=R(RF)  3=X(LB)
```

#### ERY — U@R' · E — `[E,R' U R]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=R(RF)  3=Y(BR)
```

#### ERZ — E2@B · R2 — `[B E2 B',R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=R(RF)  3=Z(RB)
```

#### ESI — U'r'F · M2 — `[M2,U' r' F]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=E(UB)  2=S(FL)  3=I(DF)
```

#### ESJ — B@E' · F — `[E' B E,F]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=S(FL)  3=J(FD)
```

#### ESK — R2@S · R' — `u' S':[R',S R2 S]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=E(UB)  2=S(FL)  3=K(DL)
```

#### ESL — R2 · E — `S' U R':[E,R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=S(FL)  3=L(LD)
```

#### ESM — R2 · E' — `E B:[E',R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=E(UB)  2=S(FL)  3=M(DB)
```

#### ESN — R2 · E — `U R' B:[E,R2]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=S(FL)  3=N(BD)
```

#### ESO — R2 · E — `U R':[E,R2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=E(UB)  2=S(FL)  3=O(DR)
```

#### ESP — S@u · R' — `E:[R',u S u']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=S(FL)  3=P(RD)
```

#### ESQ — E2@R · U — `R:[R E2 R',U]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=S(FL)  3=Q(FR)
```

#### ESR — R2@B' · E — `[E,B' R2 B]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=S(FL)  3=R(RF)
```

#### ESW — R2 · E — `E B':[E,R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=S(FL)  3=W(BL)
```

#### ESX — B@R · E' — `[E',R B R']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=S(FL)  3=X(LB)
```

#### ESY — U@R' · E2 — `[E2,R' U R]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=S(FL)  3=Y(BR)
```

#### ESZ — S'RE' · R — `u:[R,S' R E']` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=S(FL)  3=Z(RB)
```

#### ETI — U2 · M' — `u' R U:[M',U2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=E(UB)  2=T(LF)  3=I(DF)
```

#### ETJ — R2 · E — `D R B':[R2,E]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=T(LF)  3=J(FD)
```

#### ETK — R2U2 · S' — `u' R':[S',R2 U2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=E(UB)  2=T(LF)  3=K(DL)
```

#### ETL — R2 · E' — `S' u R:[E',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=T(LF)  3=L(LD)
```

#### ETM — R2 · E' — `B E':[E',R2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=E(UB)  2=T(LF)  3=M(DB)
```

#### ETN — R2 · E — `D' R B':[R2,E]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=T(LF)  3=N(BD)
```

#### ETO — R2 · E' — `u R:[E',R2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=E(UB)  2=T(LF)  3=O(DR)
```

#### ETP — R2 · E — `R B':[R2,E]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=T(LF)  3=P(RD)
```

#### ETQ — U@R · E — `[E,R U R']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=T(LF)  3=Q(FR)
```

#### ETR — R2 · E — `B':[R2,E]` (6)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=T(LF)  3=R(RF)
```

#### ETW — U@R · E — `E:[R U R',E]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=T(LF)  3=W(BL)
```

#### ETX — R2ER2E · B — `[R2 E R2 E,B]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=T(LF)  3=X(LB)
```

#### ETY — E@R' · U — `R':[R' E R,U]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=T(LF)  3=Y(BR)
```

#### ETZ — R2 · E — `R2 B':[R2,E]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=T(LF)  3=Z(RB)
```

#### EWI — R2 · E' — `U D R:[E',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=E(UB)  2=W(BL)  3=I(DF)
```

#### EWJ — U@R · E2 — `F':[E2,R U R']` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=W(BL)  3=J(FD)
```

#### EWK — S'@R · B' — `E':[B',R S' R']` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=E(UB)  2=W(BL)  3=K(DL)
```

#### EWL — R2 · E' — `S' U R:[E',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=W(BL)  3=L(LD)
```

#### EWM — R2 · E' — `U D' R:[E',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=E(UB)  2=W(BL)  3=M(DB)
```

#### EWN — B@U' · M' — `[U' B U,M']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=W(BL)  3=N(BD)
```

#### EWO — R2 · E' — `U R:[E',R2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=E(UB)  2=W(BL)  3=O(DR)
```

#### EWP — S@U · R — `E':[R,U S U']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=W(BL)  3=P(RD)
```

#### EWQ — U@R · E2 — `[E2,R U R']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=W(BL)  3=Q(FR)
```

#### EWR — S · R2 — `B' U' R':[S,R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=W(BL)  3=R(RF)
```

#### EWS — R2 · E — `E B':[R2,E]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=W(BL)  3=S(FL)
```

#### EWT — U@R · E — `E:[E,R U R']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=W(BL)  3=T(LF)
```

#### EWY — E2@R' · U — `R':[R' E2 R,U]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=W(BL)  3=Y(BR)
```

#### EWZ — U'@r' · E' — `[E',r' U' r]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=W(BL)  3=Z(RB)
```

#### EXI — R'@U · M2 — `E':[M2,U R' U']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=E(UB)  2=X(LB)  3=I(DF)
```

#### EXJ — F@E · B — `[B,E F E']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=X(LB)  3=J(FD)
```

#### EXK — S' · R2 — `E' R U:[S',R2]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=E(UB)  2=X(LB)  3=K(DL)
```

#### EXL — ERS' · R — `u:[R,E R S']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=X(LB)  3=L(LD)
```

#### EXM — R2 · E' — `E2 B:[E',R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=E(UB)  2=X(LB)  3=M(DB)
```

#### EXN — R'@U · M — `E':[M,U R' U']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=X(LB)  3=N(BD)
```

#### EXO — B@R' · E — `R':[R' B R,E]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=E(UB)  2=X(LB)  3=O(DR)
```

#### EXP — R2 · E' — `M U' R:[E',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=X(LB)  3=P(RD)
```

#### EXQ — E'@R · U — `R:[R E' R',U]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=X(LB)  3=Q(FR)
```

#### EXR — U@R' · E2 — `E':[R' U R,E2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=X(LB)  3=R(RF)
```

#### EXS — B@R · E' — `[R B R',E']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=X(LB)  3=S(FL)
```

#### EXT — R2@E · R — `u:[R,E R2 E]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=X(LB)  3=T(LF)
```

#### EXY — B@R · E — `[R B R',E]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=X(LB)  3=Y(BR)
```

#### EXZ — R2 · E — `E2 B':[E,R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=X(LB)  3=Z(RB)
```

#### EYI — R@D · M2 — `[D R D',M2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=E(UB)  2=Y(BR)  3=I(DF)
```

#### EYJ — M'@U · R' — `U:[U M' U',R']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Y(BR)  3=J(FD)
```

#### EYK — S' · R2 — `R U:[S',R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=E(UB)  2=Y(BR)  3=K(DL)
```

#### EYL — S' · R2 — `E' B' R':[S',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Y(BR)  3=L(LD)
```

#### EYM — R2 · E' — `E' B:[E',R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=E(UB)  2=Y(BR)  3=M(DB)
```

#### EYN — R'@U · M — `[M,U R' U']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Y(BR)  3=N(BD)
```

#### EYO — M2@D' · R — `[R,D' M2 D]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=E(UB)  2=Y(BR)  3=O(DR)
```

#### EYP — S@U · R' — `E':[R',U S U']` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Y(BR)  3=P(RD)
```

#### EYQ — S · R2 — `U' R:[S,R2]` (7)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Y(BR)  3=Q(FR)
```

#### EYR — U@R' · E — `[R' U R,E]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Y(BR)  3=R(RF)
```

#### EYS — U@R' · E2 — `[R' U R,E2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Y(BR)  3=S(FL)
```

#### EYT — E@R' · U — `R':[U,R' E R]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Y(BR)  3=T(LF)
```

#### EYW — E2@R' · U — `R':[U,R' E2 R]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Y(BR)  3=W(BL)
```

#### EYX — B@R · E — `[E,R B R']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Y(BR)  3=X(LB)
```

#### EZI — R2 · E — `U2 F:[R2,E]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=E(UB)  2=Z(RB)  3=I(DF)
```

#### EZJ — F'@E' · B' — `[B',E' F' E]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Z(RB)  3=J(FD)
```

#### EZK — S'@R · B' — `[B',R S' R']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=E(UB)  2=Z(RB)  3=K(DL)
```

#### EZL — S' · R2 — `R2 B' R':[S',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Z(RB)  3=L(LD)
```

#### EZM — R2 · E' — `R2 B:[E',R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=E(UB)  2=Z(RB)  3=M(DB)
```

#### EZN — R'@U' · M — `M:[M,U' R' U]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Z(RB)  3=N(BD)
```

#### EZO — R2 · E' — `U E R:[E',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=E(UB)  2=Z(RB)  3=O(DR)
```

#### EZP — S@U · R — `[R,U S U']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Z(RB)  3=P(RD)
```

#### EZQ — U@R · E' — `[E',R U R']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Z(RB)  3=Q(FR)
```

#### EZR — S@U · R2 — `R:[U S U',R2]` (9)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Z(RB)  3=R(RF)
```

#### EZS — E@R' · U' — `r':[U',R' E R]` (10)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Z(RB)  3=S(FL)
```

#### EZT — R2 · E — `R2 B':[E,R2]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Z(RB)  3=T(LF)
```

#### EZW — U'@r' · E' — `[r' U' r,E']` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Z(RB)  3=W(BL)
```

#### EZX — R2 · E — `E2 B':[R2,E]` (8)
```
      · 1 ·
      · u ·
      · · ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=E(UB)  2=Z(RB)  3=X(LB)
```
