# Edge 3‑Style — Buffer A — Memory Sheet

*Pure‑memorability picks (shortest/cleanest commutator of 100 computer algs per case).*

## The collapse
| metric | value |
|---|---|
| cases | **360** |
| distinct shapes (cores) | **129** |
| shared‑core families (≥2) | **98** covering 329 |
| inverse pairs (learn 1 ⇒ 2) | **180** |
| pure commutators (no setup) | **131** |
| moves min/avg/max | 4 / 8.4 / 11 |

Read: `setup : [interchange , insert]` → setup → interchange → insert → interchange' → insert' → setup'. Inverse case = swap the two pieces.

## Family map

```mermaid
graph LR
  F1["R2 · E"]
  F1 --> ADO
  F1 --> AIR
  F1 --> AIS
  F1 --> AIT
  F1 --> AIW
  F1 --> AKZ
  F1 --> ALS
  F1 --> ALX
  F1 --> AMS
  F1 --> ANX
  F1 --> AOD
  F1 --> AOI
  F1 --> AOS
  F1 --> AOX
  F1 --> AQI
  F1 --> ARI
  F1 --> ASI
  F1 --> ASL
  F1 --> ASM
  F1 --> ASO
  F1 --> ATI
  F1 --> AWI
  F1 --> AXL
  F1 --> AXN
  F1 --> AXO
  F1 --> AZK
  F2["R2 · E'"]
  F2 --> AJW
  F2 --> AJX
  F2 --> AMR
  F2 --> AMW
  F2 --> AOW
  F2 --> AOZ
  F2 --> APX
  F2 --> ARM
  F2 --> ART
  F2 --> ARX
  F2 --> ASW
  F2 --> ATR
  F2 --> AWJ
  F2 --> AWM
  F2 --> AWO
  F2 --> AWS
  F2 --> AXJ
  F2 --> AXP
  F2 --> AXR
  F2 --> AXZ
  F2 --> AZO
  F2 --> AZX
  F3["S' · R2"]
  F3 --> ADL
  F3 --> AFK
  F3 --> AFL
  F3 --> AKF
  F3 --> AKO
  F3 --> ALD
  F3 --> ALF
  F3 --> ALM
  F3 --> ALP
  F3 --> ALQ
  F3 --> ALW
  F3 --> ALZ
  F3 --> AML
  F3 --> ANZ
  F3 --> AOK
  F3 --> APL
  F3 --> AQL
  F3 --> AWL
  F3 --> AZL
  F3 --> AZN
  F4["U2 · M"]
  F4 --> ACE
  F4 --> ADN
  F4 --> AEC
  F4 --> AEM
  F4 --> AKN
  F4 --> AME
  F4 --> AMX
  F4 --> AND
  F4 --> ANK
  F4 --> ANO
  F4 --> AON
  F4 --> AXM
  F5["S · R2"]
  F5 --> ADM
  F5 --> ADW
  F5 --> ADZ
  F5 --> AEL
  F5 --> ALE
  F5 --> APD
  F5 --> AQY
  F5 --> ASZ
  F5 --> AWD
  F5 --> AYQ
  F5 --> AZD
  F5 --> AZS
  F6["U2 · S"]
  F6 --> ADE
  F6 --> AED
  F6 --> AEK
  F6 --> AIL
  F6 --> AKE
  F6 --> AKQ
  F6 --> AKY
  F6 --> ALI
  F6 --> AQK
  F6 --> AYK
  F7["E2@R · U'"]
  F7 --> ACS
  F7 --> ADS
  F7 --> AQS
  F7 --> ASC
  F7 --> ASD
  F7 --> ASQ
  F8["U2 · S'"]
  F8 --> AEO
  F8 --> AEQ
  F8 --> AEY
  F8 --> AOE
  F8 --> AQE
  F8 --> AYE
  F9["S'@R' · F"]
  F9 --> AKR
  F9 --> AKS
  F9 --> AKT
  F9 --> ARK
  F9 --> ASK
  F9 --> ATK
  F10["F2 · E'"]
  F10 --> AIP
  F10 --> AIQ
  F10 --> AIZ
  F10 --> API
  F10 --> AZI
  F11["U2 · M'"]
  F11 --> ACK
  F11 --> AJK
  F11 --> AKC
  F11 --> AKJ
  F12["S@R · F"]
  F12 --> ACR
  F12 --> ACT
  F12 --> ARC
  F12 --> ATC
  F13["E'@R · U'"]
  F13 --> ADX
  F13 --> AQX
  F13 --> AXD
  F13 --> AXQ
  F14["B@R · S"]
  F14 --> AFM
  F14 --> AFN
  F14 --> AMF
  F14 --> ANF
  F15["R@U · M'"]
  F15 --> AFR
  F15 --> AJR
  F15 --> ARF
  F15 --> ARJ
  F16["B2@R · S"]
  F16 --> AFS
  F16 --> AFX
  F16 --> ASF
  F16 --> AXF
  F17["R'@U · M'"]
  F17 --> AFZ
  F17 --> AJZ
  F17 --> AZF
  F17 --> AZJ
  F18["F@R · S'"]
  F18 --> AJM
  F18 --> AKP
  F18 --> AMJ
  F18 --> APK
  F19["U'@R' · E2"]
  F19 --> ANS
  F19 --> ASN
  F19 --> ASY
  F19 --> AYS
  F20["E'@R · F'"]
  F20 --> AOR
  F20 --> AOT
  F20 --> ARO
  F20 --> ATO
  F21["S@R' · F"]
  F21 --> ARY
  F21 --> ATY
  F21 --> AYR
  F21 --> AYT
  F22["U2@M · U'"]
  F22 --> ACI
  F22 --> AIC
  F22 --> AJN
  F23["U2@M' · U"]
  F23 --> ACM
  F23 --> AMC
  F23 --> ANJ
  F24["R@U' · M2"]
  F24 --> AMQ
  F24 --> AQM
  F24 --> ATM
  F25["S@U' · R'"]
  F25 --> APR
  F25 --> ARP
  F25 --> ASP
  F26["S@U' · R"]
  F26 --> APZ
  F26 --> AQP
  F26 --> AZP
  F27["U'@R' · E'"]
  F27 --> AXS
  F27 --> AXY
  F27 --> AYX
  F28["B'@R · S"]
  F28 --> ACF
  F28 --> AFC
  F29["E@F · U'"]
  F29 --> ACJ
  F29 --> AJC
  F30["S@R · U"]
  F30 --> ACL
  F30 --> ALC
  F31["S'UM · U"]
  F31 --> ACN
  F31 --> ANC
  F32["U@R' · S2"]
  F32 --> ACO
  F32 --> AOC
  F33["MU'S' · U'"]
  F33 --> ACP
  F33 --> APC
  F34["S2@R' · U"]
  F34 --> ACQ
  F34 --> AQC
  F35["E@F' · U'"]
  F35 --> ACW
  F35 --> AWC
  F36["E2@F · U'"]
  F36 --> ACX
  F36 --> AXC
  F37["S2@R · U"]
  F37 --> ACY
  F37 --> AYC
  F38["S'@R' · U"]
  F38 --> ACZ
  F38 --> AZC
  F39["M@U' · F2"]
  F39 --> ADI
  F39 --> AID
  F40["U2@R · E"]
  F40 --> ADJ
  F40 --> AJD
  F41["U'@r · S"]
  F41 --> ADK
  F41 --> AKD
  F42["S2@R' · F"]
  F42 --> ADR
  F42 --> ARD
  F43["RSR'E' · F'"]
  F43 --> ADT
  F43 --> ATD
  F44["M · F2"]
  F44 --> AEI
  F44 --> AIE
  F45["SUM' · U2"]
  F45 --> AEJ
  F45 --> AJE
  F46["E@R · U2"]
  F46 --> AEP
  F46 --> APE
  F47["S'@R · U2"]
  F47 --> AER
  F47 --> ARE
  F48["E2@R · U2"]
  F48 --> AES
  F48 --> ASE
  F49["E@R' · U2"]
  F49 --> AET
  F49 --> ATE
  F50["E2@R' · U2"]
  F50 --> AEW
  F50 --> AWE
  F51["E'@R · U2"]
  F51 --> AEX
  F51 --> AXE
  F52["S'@R' · U2"]
  F52 --> AEZ
  F52 --> AZE
  F53["F'@R' · S"]
  F53 --> AFI
  F53 --> AIF
  F54["U@R · E"]
  F54 --> AFJ
  F54 --> AJF
  F55["R2@U' · M"]
  F55 --> AFO
  F55 --> AOF
  F56["R2@U · M'"]
  F56 --> AFP
  F56 --> APF
  F57["R@U' · M"]
  F57 --> AFQ
  F57 --> AQF
  F58["S@U' · F"]
  F58 --> AFT
  F58 --> ATF
  F59["F'@E · B"]
  F59 --> AFW
  F59 --> AWF
  F60["R'@U' · M"]
  F60 --> AFY
  F60 --> AYF
  F61["S'@R' · F2"]
  F61 --> AIK
  F61 --> AKI
  F62["M'@U' · F2"]
  F62 --> AIN
  F62 --> ANI
  F63["F2 · E"]
  F63 --> AIX
  F63 --> AXI
  F64["E@F' · D"]
  F64 --> AJL
  F64 --> ALJ
  F65["R2@U' · M'"]
  F65 --> AJO
  F65 --> AOJ
  F66["E@F' · D'"]
  F66 --> AJP
  F66 --> APJ
  F67["F@U' · M"]
  F67 --> AJQ
  F67 --> AQJ
  F68["F'@U' · M"]
  F68 --> AJS
  F68 --> ASJ
  F69["R'@U' · M'"]
  F69 --> AJY
  F69 --> AYJ
  F70["S@R' · D"]
  F70 --> AKM
  F70 --> AMK
  F71["u@S · D"]
  F71 --> ALN
  F71 --> ANL
  F72["D'@r' · S"]
  F72 --> ALO
  F72 --> AOL
  F73["S2@R · F"]
  F73 --> ALR
  F73 --> ARL
  F74["S@U · F"]
  F74 --> ALT
  F74 --> ATL
  F75["ERS' · R"]
  F75 --> ALY
  F75 --> AYL
  F76["E'@B · R2"]
  F76 --> AMO
  F76 --> AOM
  F77["B@R' · S"]
  F77 --> AMP
  F77 --> APM
  F78["R@D' · M2"]
  F78 --> AMY
  F78 --> AYM
  F79["R'@U · M2"]
  F79 --> AMZ
  F79 --> AZM
  F80["u'@S' · D'"]
  F80 --> ANP
  F80 --> APN
  F81["M@U' · R"]
  F81 --> ANQ
  F81 --> AQN
  F82["B@E · F"]
  F82 --> ANR
  F82 --> ARN
  F83["B'@E' · F'"]
  F83 --> ANT
  F83 --> ATN
  F84["F'@E · B'"]
  F84 --> ANW
  F84 --> AWN
  F85["F@E' · B"]
  F85 --> ANY
  F85 --> AYN
  F86["M2@D · R'"]
  F86 --> AOQ
  F86 --> AQO
  F87["M2@D · R"]
  F87 --> AOY
  F87 --> AYO
  F88["S'@U' · F"]
  F88 --> APT
  F88 --> ATP
  F89["U'@R · E"]
  F89 --> AQT
  F89 --> ATQ
  F90["U'@R · E2"]
  F90 --> AQW
  F90 --> AWQ
  F91["R2@F · E"]
  F91 --> AQZ
  F91 --> AZQ
  F92["U@r · E"]
  F92 --> ARS
  F92 --> ASR
  F93["E@R · F'"]
  F93 --> ARW
  F93 --> AWR
  F94["E2@F' · R2"]
  F94 --> ARZ
  F94 --> AZR
  F95["F'@R' · E"]
  F95 --> ATW
  F95 --> AWT
  F96["R2E'R2E' · F'"]
  F96 --> ATX
  F96 --> AXT
  F97["R2@F · E2"]
  F97 --> ATZ
  F97 --> AZT
  F98["R2@F · E'"]
  F98 --> AWZ
  F98 --> AZW
```

## Families

### F1. R2 · E · ×26

Shape `[E , R2]` — interchange `E`, insert `R2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ADO** | `U' F' R':[E,R2]` | 9 | AOD |
| **AIR** | `R2 F:[E,R2]` | 8 | ARI |
| **AIS** | `U' D R:[E,R2]` | 9 | ASI |
| **AIT** | `E2 F:[E,R2]` | 8 | ATI |
| **AIW** | `E' F:[E,R2]` | 8 | AWI |
| **AKZ** | `D F:[E,R2]` | 8 | AZK |
| **ALS** | `S' U' R:[E,R2]` | 9 | ASL |
| **ALX** | `S' u' R:[E,R2]` | 9 | AXL |
| **AMS** | `U' D' R:[E,R2]` | 9 | ASM |
| **ANX** | `u' R' B:[R2,E]` | 10 | AXN |
| **AOD** | `U' F' R:[E,R2]` | 9 | ADO |
| **AOI** | `R E F:[R2,E]` | 10 | AIO |
| **AOS** | `U' R:[E,R2]` | 7 | ASO |
| **AOX** | `u' R:[E,R2]` | 7 | AXO |
| **AQI** | `E F:[R2,E]` | 8 | AIQ |
| **ARI** | `R2 F:[R2,E]` | 8 | AIR |
| **ASI** | `U' D R':[E,R2]` | 9 | AIS |
| **ASL** | `S' U' R':[E,R2]` | 9 | ALS |
| **ASM** | `U' D' R':[E,R2]` | 9 | AMS |
| **ASO** | `U' R':[E,R2]` | 7 | AOS |
| **ATI** | `E2 F:[R2,E]` | 8 | AIT |
| **AWI** | `E' F:[R2,E]` | 8 | AIW |
| **AXL** | `S' u' R':[E,R2]` | 9 | ALX |
| **AXN** | `u' R' B:[E,R2]` | 10 | ANX |
| **AXO** | `u' R':[E,R2]` | 7 | AOX |
| **AZK** | `D F:[R2,E]` | 8 | AKZ |

### F2. R2 · E' · ×22

Shape `[E' , R2]` — interchange `E'`, insert `R2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AJW** | `U' R F':[R2,E']` | 10 | AWJ |
| **AJX** | `D R' F:[E',R2]` | 10 | AXJ |
| **AMR** | `U2 B:[R2,E']` | 8 | ARM |
| **AMW** | `U' D' R':[E',R2]` | 9 | AWM |
| **AOW** | `U' R':[E',R2]` | 7 | AWO |
| **AOZ** | `u' R':[E',R2]` | 7 | AZO |
| **APX** | `R' F:[E',R2]` | 8 | AXP |
| **ARM** | `U2 B:[E',R2]` | 8 | AMR |
| **ART** | `E2 F:[R2,E']` | 8 | ATR |
| **ARX** | `R2 F:[E',R2]` | 8 | AXR |
| **ASW** | `E' F:[R2,E']` | 8 | AWS |
| **ATR** | `E2 F:[E',R2]` | 8 | ART |
| **AWJ** | `U' R F':[E',R2]` | 10 | AJW |
| **AWM** | `U' D' R:[E',R2]` | 9 | AMW |
| **AWO** | `U' R:[E',R2]` | 7 | AOW |
| **AWS** | `E' F:[E',R2]` | 8 | ASW |
| **AXJ** | `D R' F:[R2,E']` | 10 | AJX |
| **AXP** | `R' F:[R2,E']` | 8 | APX |
| **AXR** | `R2 F:[R2,E']` | 8 | ARX |
| **AXZ** | `F:[R2,E']` | 6 | AZX |
| **AZO** | `u' R:[E',R2]` | 7 | AOZ |
| **AZX** | `F:[E',R2]` | 6 | AXZ |

### F3. S' · R2 · ×20

Shape `[R2 , S']` — interchange `R2`, insert `S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ADL** | `S' U':[R2,S']` | 8 | ALD |
| **AFK** | `B' R U':[S',R2]` | 10 | AKF |
| **AFL** | `F R' U:[R2,S']` | 10 | ALF |
| **AKF** | `B' R U':[R2,S']` | 10 | AFK |
| **AKO** | `U':[R2,S']` | 6 | AOK |
| **ALD** | `S' U':[S',R2]` | 8 | ADL |
| **ALF** | `F R' U:[S',R2]` | 10 | AFL |
| **ALM** | `F B R':[S',R2]` | 9 | AML |
| **ALP** | `M' U:[R2,S']` | 8 | APL |
| **ALQ** | `E F R':[S',R2]` | 9 | AQL |
| **ALW** | `E' F R':[S',R2]` | 9 | AWL |
| **ALZ** | `F R':[S',R2]` | 7 | AZL |
| **AML** | `F B R:[S',R2]` | 9 | ALM |
| **ANZ** | `F D R':[S',R2]` | 9 | AZN |
| **AOK** | `U':[S',R2]` | 6 | AKO |
| **APL** | `M' U:[S',R2]` | 8 | ALP |
| **AQL** | `E F R:[S',R2]` | 9 | ALQ |
| **AWL** | `E' F R:[S',R2]` | 9 | ALW |
| **AZL** | `F R:[S',R2]` | 7 | ALZ |
| **AZN** | `F D R:[S',R2]` | 9 | ANZ |

### F4. U2 · M · ×12

Shape `[M , U2]` — interchange `M`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACE** | `U' M2 U':[M,U2]` | 9 | AEC |
| **ADN** | `F R U:[M,U2]` | 9 | AND |
| **AEC** | `U' M2 U:[M,U2]` | 9 | ACE |
| **AEM** | `[M,U2]` | 4 | AME |
| **AKN** | `U S U:[M,U2]` | 9 | ANK |
| **AME** | `[U2,M]` | 4 | AEM |
| **AMX** | `u R' U:[M,U2]` | 9 | AXM |
| **AND** | `F R U':[M,U2]` | 9 | ADN |
| **ANK** | `U S U':[M,U2]` | 9 | AKN |
| **ANO** | `U' S' U:[M,U2]` | 9 | AON |
| **AON** | `U' S' U':[M,U2]` | 9 | ANO |
| **AXM** | `u R' U':[M,U2]` | 9 | AMX |

### F5. S · R2 · ×12

Shape `[R2 , S]` — interchange `R2`, insert `S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ADM** | `F B R:[S,R2]` | 9 | AMD |
| **ADW** | `E' F R:[S,R2]` | 9 | AWD |
| **ADZ** | `F R:[S,R2]` | 7 | AZD |
| **AEL** | `S' U:[R2,S]` | 8 | ALE |
| **ALE** | `S' U:[S,R2]` | 8 | AEL |
| **APD** | `R' F R':[S,R2]` | 9 | ADP |
| **AQY** | `U R':[S,R2]` | 7 | AYQ |
| **ASZ** | `F U R:[S,R2]` | 9 | AZS |
| **AWD** | `E' F R':[S,R2]` | 9 | ADW |
| **AYQ** | `U R:[S,R2]` | 7 | AQY |
| **AZD** | `F R':[S,R2]` | 7 | ADZ |
| **AZS** | `F U R':[S,R2]` | 9 | ASZ |

### F6. U2 · S · ×10

Shape `[S , U2]` — interchange `S`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ADE** | `S' U:[S,U2]` | 7 | AED |
| **AED** | `S' U':[S,U2]` | 7 | ADE |
| **AEK** | `U':[S,U2]` | 5 | AKE |
| **AIL** | `M' U:[S,U2]` | 7 | ALI |
| **AKE** | `U:[S,U2]` | 5 | AEK |
| **AKQ** | `U R:[S,U2]` | 8 | AQK |
| **AKY** | `U R':[S,U2]` | 8 | AYK |
| **ALI** | `M' U':[S,U2]` | 7 | AIL |
| **AQK** | `U R:[U2,S]` | 8 | AKQ |
| **AYK** | `U R':[U2,S]` | 8 | AKY |

### F7. E2@R · U' · ×6

Shape `[U' , R E2 R']` — interchange `U'`, insert `R E2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACS** | `U':[R E2 R',U']` | 9 | ASC |
| **ADS** | `S:[U',R E2 R']` | 10 | ASD |
| **AQS** | `R:[U',R E2 R']` | 9 | ASQ |
| **ASC** | `U':[U',R E2 R']` | 9 | ACS |
| **ASD** | `S:[R E2 R',U']` | 10 | ADS |
| **ASQ** | `R:[R E2 R',U']` | 9 | AQS |

### F8. U2 · S' · ×6

Shape `[S' , U2]` — interchange `S'`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AEO** | `U:[S',U2]` | 5 | AOE |
| **AEQ** | `R' U:[S',U2]` | 7 | AQE |
| **AEY** | `R U:[S',U2]` | 7 | AYE |
| **AOE** | `U':[S',U2]` | 5 | AEO |
| **AQE** | `R' U':[S',U2]` | 7 | AEQ |
| **AYE** | `R U':[S',U2]` | 7 | AEY |

### F9. S'@R' · F · ×6

Shape `[F , R' S' R]` — interchange `F`, insert `R' S' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AKR** | `[R' S' R,F]` | 8 | ARK |
| **AKS** | `E:[R' S' R,F]` | 10 | ASK |
| **AKT** | `F:[F,R' S' R]` | 9 | ATK |
| **ARK** | `[F,R' S' R]` | 8 | AKR |
| **ASK** | `E:[F,R' S' R]` | 10 | AKS |
| **ATK** | `F:[R' S' R,F]` | 9 | AKT |

### F10. F2 · E' · ×5

Shape `[E' , F2]` — interchange `E'`, insert `F2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AIP** | `R' F':[E',F2]` | 7 | API |
| **AIQ** | `E F':[E',F2]` | 7 | AQI |
| **AIZ** | `F':[E',F2]` | 5 | AZI |
| **API** | `R' F:[E',F2]` | 7 | AIP |
| **AZI** | `F:[E',F2]` | 5 | AIZ |

### F11. U2 · M' · ×4

Shape `[M' , U2]` — interchange `M'`, insert `U2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACK** | `S M U':[M',U2]` | 9 | AKC |
| **AJK** | `U S U:[M',U2]` | 9 | AKJ |
| **AKC** | `S M U:[M',U2]` | 9 | ACK |
| **AKJ** | `U S U':[M',U2]` | 9 | AJK |

### F12. S@R · F · ×4

Shape `[F , R S R']` — interchange `F`, insert `R S R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACR** | `[R S R',F]` | 8 | ARC |
| **ACT** | `F:[F,R S R']` | 9 | ATC |
| **ARC** | `[F,R S R']` | 8 | ACR |
| **ATC** | `F:[R S R',F]` | 9 | ACT |

### F13. E'@R · U' · ×4

Shape `[U' , R E' R']` — interchange `U'`, insert `R E' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ADX** | `S:[U',R E' R']` | 10 | AXD |
| **AQX** | `R:[U',R E' R']` | 9 | AXQ |
| **AXD** | `S:[R E' R',U']` | 10 | ADX |
| **AXQ** | `R:[R E' R',U']` | 9 | AQX |

### F14. B@R · S · ×4

Shape `[S , R B R']` — interchange `S`, insert `R B R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AFM** | `U:[S,R B R']` | 10 | AMF |
| **AFN** | `U':[R B R',S]` | 10 | ANF |
| **AMF** | `U:[R B R',S]` | 10 | AFM |
| **ANF** | `U':[S,R B R']` | 10 | AFN |

### F15. R@U · M' · ×4

Shape `[M' , U R U']` — interchange `M'`, insert `U R U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AFR** | `[M',U R U']` | 8 | ARF |
| **AJR** | `M':[U R U',M']` | 9 | ARJ |
| **ARF** | `[U R U',M']` | 8 | AFR |
| **ARJ** | `M':[M',U R U']` | 9 | AJR |

### F16. B2@R · S · ×4

Shape `[S , R B2 R']` — interchange `S`, insert `R B2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AFS** | `u:[S,R B2 R']` | 10 | ASF |
| **AFX** | `U:[S,R B2 R']` | 10 | AXF |
| **ASF** | `u:[R B2 R',S]` | 10 | AFS |
| **AXF** | `U:[R B2 R',S]` | 10 | AFX |

### F17. R'@U · M' · ×4

Shape `[M' , U R' U']` — interchange `M'`, insert `U R' U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AFZ** | `[M',U R' U']` | 8 | AZF |
| **AJZ** | `M':[U R' U',M']` | 9 | AZJ |
| **AZF** | `[U R' U',M']` | 8 | AFZ |
| **AZJ** | `M':[M',U R' U']` | 9 | AJZ |

### F18. F@R · S' · ×4

Shape `[S' , R F R']` — interchange `S'`, insert `R F R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AJM** | `D:[R F R',S']` | 10 | AMJ |
| **AKP** | `[S',R F R']` | 8 | APK |
| **AMJ** | `D:[S',R F R']` | 10 | AJM |
| **APK** | `[R F R',S']` | 8 | AKP |

### F19. U'@R' · E2 · ×4

Shape `[E2 , R' U' R]` — interchange `E2`, insert `R' U' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ANS** | `B:[R' U' R,E2]` | 10 | ASN |
| **ASN** | `B:[E2,R' U' R]` | 10 | ANS |
| **ASY** | `[E2,R' U' R]` | 8 | AYS |
| **AYS** | `[R' U' R,E2]` | 8 | ASY |

### F20. E'@R · F' · ×4

Shape `[F' , R E' R']` — interchange `F'`, insert `R E' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AOR** | `F':[F',R E' R']` | 9 | ARO |
| **AOT** | `[R E' R',F']` | 8 | ATO |
| **ARO** | `F':[R E' R',F']` | 9 | AOR |
| **ATO** | `[F',R E' R']` | 8 | AOT |

### F21. S@R' · F · ×4

Shape `[F , R' S R]` — interchange `F`, insert `R' S R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ARY** | `[F,R' S R]` | 8 | AYR |
| **ATY** | `F:[R' S R,F]` | 9 | AYT |
| **AYR** | `[R' S R,F]` | 8 | ARY |
| **AYT** | `F:[F,R' S R]` | 9 | ATY |

### F22. U2@M · U' · ×3

Shape `[U' , M U2 M]` — interchange `U'`, insert `M U2 M`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACI** | `[M U2 M,U']` | 8 | AIC |
| **AIC** | `[U',M U2 M]` | 8 | ACI |
| **AJN** | `U M':[U',M U2 M]` | 9 | ANJ |

### F23. U2@M' · U · ×3

Shape `[U , M' U2 M']` — interchange `U`, insert `M' U2 M'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACM** | `U:[U,M' U2 M']` | 9 | AMC |
| **AMC** | `U:[M' U2 M',U]` | 9 | ACM |
| **ANJ** | `U M:[U,M' U2 M']` | 9 | AJN |

### F24. R@U' · M2 · ×3

Shape `[M2 , U' R U]` — interchange `M2`, insert `U' R U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AMQ** | `[U' R U,M2]` | 8 | AQM |
| **AQM** | `[M2,U' R U]` | 8 | AMQ |
| **ATM** | `E:[M2,U' R U]` | 9 | AMT |

### F25. S@U' · R' · ×3

Shape `[R' , U' S U]` — interchange `R'`, insert `U' S U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **APR** | `[U' S U,R']` | 8 | ARP |
| **ARP** | `[R',U' S U]` | 8 | APR |
| **ASP** | `E:[R',U' S U]` | 9 | APS |

### F26. S@U' · R · ×3

Shape `[R , U' S U]` — interchange `R`, insert `U' S U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **APZ** | `[U' S U,R]` | 8 | AZP |
| **AQP** | `E:[R,U' S U]` | 9 | APQ |
| **AZP** | `[R,U' S U]` | 8 | APZ |

### F27. U'@R' · E' · ×3

Shape `[E' , R' U' R]` — interchange `E'`, insert `R' U' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AXS** | `E':[R' U' R,E']` | 9 | ASX |
| **AXY** | `[E',R' U' R]` | 8 | AYX |
| **AYX** | `[R' U' R,E']` | 8 | AXY |

### F28. B'@R · S · ×2

Shape `[S , R B' R']` — interchange `S`, insert `R B' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACF** | `U:[R B' R',S]` | 10 | AFC |
| **AFC** | `U:[S,R B' R']` | 10 | ACF |

### F29. E@F · U' · ×2

Shape `[U' , F E F']` — interchange `U'`, insert `F E F'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACJ** | `[F E F',U']` | 8 | AJC |
| **AJC** | `[U',F E F']` | 8 | ACJ |

### F30. S@R · U · ×2

Shape `[U , R S R']` — interchange `U`, insert `R S R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACL** | `[U,R S R']` | 8 | ALC |
| **ALC** | `[R S R',U]` | 8 | ACL |

### F31. S'UM · U · ×2

Shape `[U , S' U M]` — interchange `U`, insert `S' U M`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACN** | `[U,S' U M]` | 8 | ANC |
| **ANC** | `[S' U M,U]` | 8 | ACN |

### F32. U@R' · S2 · ×2

Shape `[S2 , R' U R]` — interchange `S2`, insert `R' U R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACO** | `[R' U R,S2]` | 8 | AOC |
| **AOC** | `[S2,R' U R]` | 8 | ACO |

### F33. MU'S' · U' · ×2

Shape `[U' , M U' S']` — interchange `U'`, insert `M U' S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACP** | `[M U' S',U']` | 8 | APC |
| **APC** | `[U',M U' S']` | 8 | ACP |

### F34. S2@R' · U · ×2

Shape `[U , R' S2 R]` — interchange `U`, insert `R' S2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACQ** | `[U,R' S2 R]` | 8 | AQC |
| **AQC** | `[R' S2 R,U]` | 8 | ACQ |

### F35. E@F' · U' · ×2

Shape `[U' , F' E F]` — interchange `U'`, insert `F' E F`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACW** | `[F' E F,U']` | 8 | AWC |
| **AWC** | `[U',F' E F]` | 8 | ACW |

### F36. E2@F · U' · ×2

Shape `[U' , F E2 F']` — interchange `U'`, insert `F E2 F'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACX** | `[F E2 F',U']` | 8 | AXC |
| **AXC** | `[U',F E2 F']` | 8 | ACX |

### F37. S2@R · U · ×2

Shape `[U , R S2 R']` — interchange `U`, insert `R S2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACY** | `[U,R S2 R']` | 8 | AYC |
| **AYC** | `[R S2 R',U]` | 8 | ACY |

### F38. S'@R' · U · ×2

Shape `[U , R' S' R]` — interchange `U`, insert `R' S' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ACZ** | `[U,R' S' R]` | 8 | AZC |
| **AZC** | `[R' S' R,U]` | 8 | ACZ |

### F39. M@U' · F2 · ×2

Shape `[F2 , U' M U]` — interchange `F2`, insert `U' M U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ADI** | `[U' M U,F2]` | 8 | AID |
| **AID** | `[F2,U' M U]` | 8 | ADI |

### F40. U2@R · E · ×2

Shape `[E , R U2 R']` — interchange `E`, insert `R U2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ADJ** | `F:[E,R U2 R']` | 10 | AJD |
| **AJD** | `F:[R U2 R',E]` | 10 | ADJ |

### F41. U'@r · S · ×2

Shape `[S , r U' r']` — interchange `S`, insert `r U' r'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ADK** | `[r U' r',S]` | 8 | AKD |
| **AKD** | `[S,r U' r']` | 8 | ADK |

### F42. S2@R' · F · ×2

Shape `[F , R' S2 R]` — interchange `F`, insert `R' S2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ADR** | `[R' S2 R,F]` | 8 | ARD |
| **ARD** | `[F,R' S2 R]` | 8 | ADR |

### F43. RSR'E' · F' · ×2

Shape `[F' , R S R' E']` — interchange `F'`, insert `R S R' E'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ADT** | `[R S R' E',F']` | 10 | ATD |
| **ATD** | `[F',R S R' E']` | 10 | ADT |

### F44. M · F2 · ×2

Shape `[F2 , M]` — interchange `F2`, insert `M`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AEI** | `[M,F2]` | 4 | AIE |
| **AIE** | `[F2,M]` | 4 | AEI |

### F45. SUM' · U2 · ×2

Shape `[U2 , S U M']` — interchange `U2`, insert `S U M'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AEJ** | `U':[S U M',U2]` | 9 | AJE |
| **AJE** | `U:[S U M',U2]` | 9 | AEJ |

### F46. E@R · U2 · ×2

Shape `[U2 , R E R']` — interchange `U2`, insert `R E R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AEP** | `U':[R E R',U2]` | 9 | APE |
| **APE** | `U:[R E R',U2]` | 9 | AEP |

### F47. S'@R · U2 · ×2

Shape `[U2 , R S' R']` — interchange `U2`, insert `R S' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AER** | `U:[R S' R',U2]` | 9 | ARE |
| **ARE** | `U':[R S' R',U2]` | 9 | AER |

### F48. E2@R · U2 · ×2

Shape `[U2 , R E2 R']` — interchange `U2`, insert `R E2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AES** | `U':[R E2 R',U2]` | 9 | ASE |
| **ASE** | `U:[R E2 R',U2]` | 9 | AES |

### F49. E@R' · U2 · ×2

Shape `[U2 , R' E R]` — interchange `U2`, insert `R' E R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AET** | `U':[R' E R,U2]` | 9 | ATE |
| **ATE** | `U:[R' E R,U2]` | 9 | AET |

### F50. E2@R' · U2 · ×2

Shape `[U2 , R' E2 R]` — interchange `U2`, insert `R' E2 R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AEW** | `U':[R' E2 R,U2]` | 9 | AWE |
| **AWE** | `U:[R' E2 R,U2]` | 9 | AEW |

### F51. E'@R · U2 · ×2

Shape `[U2 , R E' R']` — interchange `U2`, insert `R E' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AEX** | `U':[R E' R',U2]` | 9 | AXE |
| **AXE** | `U:[R E' R',U2]` | 9 | AEX |

### F52. S'@R' · U2 · ×2

Shape `[U2 , R' S' R]` — interchange `U2`, insert `R' S' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AEZ** | `U:[R' S' R,U2]` | 9 | AZE |
| **AZE** | `U':[R' S' R,U2]` | 9 | AEZ |

### F53. F'@R' · S · ×2

Shape `[S , R' F' R]` — interchange `S`, insert `R' F' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AFI** | `U:[S,R' F' R]` | 10 | AIF |
| **AIF** | `U:[R' F' R,S]` | 10 | AFI |

### F54. U@R · E · ×2

Shape `[E , R U R']` — interchange `E`, insert `R U R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AFJ** | `F:[E,R U R']` | 10 | AJF |
| **AJF** | `F:[R U R',E]` | 10 | AFJ |

### F55. R2@U' · M · ×2

Shape `[M , U' R2 U]` — interchange `M`, insert `U' R2 U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AFO** | `[U' R2 U,M]` | 8 | AOF |
| **AOF** | `[M,U' R2 U]` | 8 | AFO |

### F56. R2@U · M' · ×2

Shape `[M' , U R2 U']` — interchange `M'`, insert `U R2 U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AFP** | `[M',U R2 U']` | 8 | APF |
| **APF** | `[U R2 U',M']` | 8 | AFP |

### F57. R@U' · M · ×2

Shape `[M , U' R U]` — interchange `M`, insert `U' R U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AFQ** | `[U' R U,M]` | 8 | AQF |
| **AQF** | `[M,U' R U]` | 8 | AFQ |

### F58. S@U' · F · ×2

Shape `[F , U' S U]` — interchange `F`, insert `U' S U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AFT** | `[F,U' S U]` | 8 | ATF |
| **ATF** | `[U' S U,F]` | 8 | AFT |

### F59. F'@E · B · ×2

Shape `[B , E F' E']` — interchange `B`, insert `E F' E'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AFW** | `[B,E F' E']` | 8 | AWF |
| **AWF** | `[E F' E',B]` | 8 | AFW |

### F60. R'@U' · M · ×2

Shape `[M , U' R' U]` — interchange `M`, insert `U' R' U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AFY** | `[U' R' U,M]` | 8 | AYF |
| **AYF** | `[M,U' R' U]` | 8 | AFY |

### F61. S'@R' · F2 · ×2

Shape `[F2 , R' S' R]` — interchange `F2`, insert `R' S' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AIK** | `F:[R' S' R,F2]` | 9 | AKI |
| **AKI** | `F':[R' S' R,F2]` | 9 | AIK |

### F62. M'@U' · F2 · ×2

Shape `[F2 , U' M' U]` — interchange `F2`, insert `U' M' U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AIN** | `[F2,U' M' U]` | 8 | ANI |
| **ANI** | `[U' M' U,F2]` | 8 | AIN |

### F63. F2 · E · ×2

Shape `[E , F2]` — interchange `E`, insert `F2`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AIX** | `F:[E,F2]` | 5 | AXI |
| **AXI** | `F':[E,F2]` | 5 | AIX |

### F64. E@F' · D · ×2

Shape `[D , F' E F]` — interchange `D`, insert `F' E F`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AJL** | `[F' E F,D]` | 8 | ALJ |
| **ALJ** | `[D,F' E F]` | 8 | AJL |

### F65. R2@U' · M' · ×2

Shape `[M' , U' R2 U]` — interchange `M'`, insert `U' R2 U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AJO** | `[U' R2 U,M']` | 8 | AOJ |
| **AOJ** | `[M',U' R2 U]` | 8 | AJO |

### F66. E@F' · D' · ×2

Shape `[D' , F' E F]` — interchange `D'`, insert `F' E F`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AJP** | `[F' E F,D']` | 8 | APJ |
| **APJ** | `[D',F' E F]` | 8 | AJP |

### F67. F@U' · M · ×2

Shape `[M , U' F U]` — interchange `M`, insert `U' F U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AJQ** | `[M,U' F U]` | 8 | AQJ |
| **AQJ** | `[U' F U,M]` | 8 | AJQ |

### F68. F'@U' · M · ×2

Shape `[M , U' F' U]` — interchange `M`, insert `U' F' U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AJS** | `[M,U' F' U]` | 8 | ASJ |
| **ASJ** | `[U' F' U,M]` | 8 | AJS |

### F69. R'@U' · M' · ×2

Shape `[M' , U' R' U]` — interchange `M'`, insert `U' R' U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AJY** | `[U' R' U,M']` | 8 | AYJ |
| **AYJ** | `[M',U' R' U]` | 8 | AJY |

### F70. S@R' · D · ×2

Shape `[D , R' S R]` — interchange `D`, insert `R' S R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AKM** | `F:[R' S R,D]` | 10 | AMK |
| **AMK** | `F:[D,R' S R]` | 10 | AKM |

### F71. u@S · D · ×2

Shape `[D , S u S']` — interchange `D`, insert `S u S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ALN** | `[S u S',D]` | 8 | ANL |
| **ANL** | `[D,S u S']` | 8 | ALN |

### F72. D'@r' · S · ×2

Shape `[S , r' D' r]` — interchange `S`, insert `r' D' r`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ALO** | `[r' D' r,S]` | 8 | AOL |
| **AOL** | `[S,r' D' r]` | 8 | ALO |

### F73. S2@R · F · ×2

Shape `[F , R S2 R']` — interchange `F`, insert `R S2 R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ALR** | `[R S2 R',F]` | 8 | ARL |
| **ARL** | `[F,R S2 R']` | 8 | ALR |

### F74. S@U · F · ×2

Shape `[F , U S U']` — interchange `F`, insert `U S U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ALT** | `[F,U S U']` | 8 | ATL |
| **ATL** | `[U S U',F]` | 8 | ALT |

### F75. ERS' · R · ×2

Shape `[R , E R S']` — interchange `R`, insert `E R S'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ALY** | `U':[E R S',R]` | 9 | AYL |
| **AYL** | `U':[R,E R S']` | 9 | ALY |

### F76. E'@B · R2 · ×2

Shape `[R2 , B E' B']` — interchange `R2`, insert `B E' B'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AMO** | `U' R:[B E' B',R2]` | 11 | AOM |
| **AOM** | `U' R':[B E' B',R2]` | 11 | AMO |

### F77. B@R' · S · ×2

Shape `[S , R' B R]` — interchange `S`, insert `R' B R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AMP** | `U':[R' B R,S]` | 10 | APM |
| **APM** | `U':[S,R' B R]` | 10 | AMP |

### F78. R@D' · M2 · ×2

Shape `[M2 , D' R D]` — interchange `M2`, insert `D' R D`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AMY** | `[M2,D' R D]` | 8 | AYM |
| **AYM** | `[D' R D,M2]` | 8 | AMY |

### F79. R'@U · M2 · ×2

Shape `[M2 , U R' U']` — interchange `M2`, insert `U R' U'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AMZ** | `M':[U R' U',M2]` | 9 | AZM |
| **AZM** | `M:[U R' U',M2]` | 9 | AMZ |

### F80. u'@S' · D' · ×2

Shape `[D' , S' u' S]` — interchange `D'`, insert `S' u' S`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ANP** | `[D',S' u' S]` | 8 | APN |
| **APN** | `[S' u' S,D']` | 8 | ANP |

### F81. M@U' · R · ×2

Shape `[R , U' M U]` — interchange `R`, insert `U' M U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ANQ** | `U':[R,U' M U]` | 9 | AQN |
| **AQN** | `U':[U' M U,R]` | 9 | ANQ |

### F82. B@E · F · ×2

Shape `[F , E B E']` — interchange `F`, insert `E B E'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ANR** | `[E B E',F]` | 8 | ARN |
| **ARN** | `[F,E B E']` | 8 | ANR |

### F83. B'@E' · F' · ×2

Shape `[F' , E' B' E]` — interchange `F'`, insert `E' B' E`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ANT** | `[E' B' E,F']` | 8 | ATN |
| **ATN** | `[F',E' B' E]` | 8 | ANT |

### F84. F'@E · B' · ×2

Shape `[B' , E F' E']` — interchange `B'`, insert `E F' E'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ANW** | `[B',E F' E']` | 8 | AWN |
| **AWN** | `[E F' E',B']` | 8 | ANW |

### F85. F@E' · B · ×2

Shape `[B , E' F E]` — interchange `B`, insert `E' F E`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ANY** | `[B,E' F E]` | 8 | AYN |
| **AYN** | `[E' F E,B]` | 8 | ANY |

### F86. M2@D · R' · ×2

Shape `[R' , D M2 D']` — interchange `R'`, insert `D M2 D'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AOQ** | `[D M2 D',R']` | 8 | AQO |
| **AQO** | `[R',D M2 D']` | 8 | AOQ |

### F87. M2@D · R · ×2

Shape `[R , D M2 D']` — interchange `R`, insert `D M2 D'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AOY** | `[D M2 D',R]` | 8 | AYO |
| **AYO** | `[R,D M2 D']` | 8 | AOY |

### F88. S'@U' · F · ×2

Shape `[F , U' S' U]` — interchange `F`, insert `U' S' U`.

| case | comm | moves | inverse |
|---|---|---|---|
| **APT** | `[F,U' S' U]` | 8 | ATP |
| **ATP** | `[U' S' U,F]` | 8 | APT |

### F89. U'@R · E · ×2

Shape `[E , R U' R']` — interchange `E`, insert `R U' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AQT** | `[R U' R',E]` | 8 | ATQ |
| **ATQ** | `[E,R U' R']` | 8 | AQT |

### F90. U'@R · E2 · ×2

Shape `[E2 , R U' R']` — interchange `E2`, insert `R U' R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AQW** | `[R U' R',E2]` | 8 | AWQ |
| **AWQ** | `[E2,R U' R']` | 8 | AQW |

### F91. R2@F · E · ×2

Shape `[E , F R2 F']` — interchange `E`, insert `F R2 F'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AQZ** | `[E,F R2 F']` | 8 | AZQ |
| **AZQ** | `[F R2 F',E]` | 8 | AQZ |

### F92. U@r · E · ×2

Shape `[E , r U r']` — interchange `E`, insert `r U r'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ARS** | `[r U r',E]` | 8 | ASR |
| **ASR** | `[E,r U r']` | 8 | ARS |

### F93. E@R · F' · ×2

Shape `[F' , R E R']` — interchange `F'`, insert `R E R'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ARW** | `F':[R E R',F']` | 9 | AWR |
| **AWR** | `F':[F',R E R']` | 9 | ARW |

### F94. E2@F' · R2 · ×2

Shape `[R2 , F' E2 F]` — interchange `R2`, insert `F' E2 F`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ARZ** | `[R2,F' E2 F]` | 8 | AZR |
| **AZR** | `[F' E2 F,R2]` | 8 | ARZ |

### F95. F'@R' · E · ×2

Shape `[E , R' F' R]` — interchange `E`, insert `R' F' R`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ATW** | `[R' F' R,E]` | 8 | AWT |
| **AWT** | `[E,R' F' R]` | 8 | ATW |

### F96. R2E'R2E' · F' · ×2

Shape `[F' , R2 E' R2 E']` — interchange `F'`, insert `R2 E' R2 E'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ATX** | `[F',R2 E' R2 E']` | 10 | AXT |
| **AXT** | `[R2 E' R2 E',F']` | 10 | ATX |

### F97. R2@F · E2 · ×2

Shape `[E2 , F R2 F']` — interchange `E2`, insert `F R2 F'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **ATZ** | `[E2,F R2 F']` | 8 | AZT |
| **AZT** | `[F R2 F',E2]` | 8 | ATZ |

### F98. R2@F · E' · ×2

Shape `[E' , F R2 F']` — interchange `E'`, insert `F R2 F'`.

| case | comm | moves | inverse |
|---|---|---|---|
| **AWZ** | `[E',F R2 F']` | 8 | AZW |
| **AZW** | `[F R2 F',E']` | 8 | AWZ |

## Singletons

| case | comm | moves | inverse |
|---|---|---|---|
| **ADF** | `r':[F' r U,M']` | 9 | AFD |
| **ADP** | `r:[U',R' S2 R]` | 9 | APD |
| **ADQ** | `M':[U',R S' R']` | 9 | AQD |
| **ADY** | `M':[U',r' S' r]` | 9 | AYD |
| **AEN** | `U:[S' U M,U2]` | 9 | ANE |
| **AFD** | `R':[F' r U,M]` | 9 | ADF |
| **AIM** | `[M',F2]` | 4 | AMI |
| **AIO** | `F':[R E' R',F2]` | 9 | AOI |
| **AIY** | `F:[R' S R,F2]` | 9 | AYI |
| **AJT** | `u':[R,U M' U']` | 9 | ATJ |
| **AKW** | `u S:[R',S' R2 S']` | 10 | AWK |
| **AKX** | `u R' U2:[S',U2 R2]` | 9 | AXK |
| **AMD** | `[F' r U,M2]` | 8 | ADM |
| **AMI** | `[M,D2]` | 4 | AIM |
| **AMT** | `u':[R,U M2 U']` | 9 | ATM |
| **ANE** | `U:[S U' M,U2]` | 9 | AEN |
| **APQ** | `u':[S,U R U']` | 9 | AQP |
| **APS** | `u':[S,U R' U']` | 9 | ASP |
| **APW** | `u:[R',E R' S]` | 9 | AWP |
| **APY** | `U':[S,u R' u']` | 9 | AYP |
| **AQD** | `r:[S',R' U' R]` | 9 | ADQ |
| **ASX** | `U':[R' F2 R,E]` | 9 | AXS |
| **ATJ** | `F':[R' D R,E]` | 10 | AJT |
| **AWK** | `u S':[R,S R2 S]` | 10 | AKW |
| **AWP** | `E':[R,u' S u]` | 9 | APW |
| **AWY** | `R':[R' E2 R,U']` | 9 | AYW |
| **AXK** | `u R:[S',R2 U2]` | 9 | AKX |
| **AYD** | `R':[S',r U' r']` | 9 | ADY |
| **AYI** | `R':[M u2 M,U]` | 9 | AIY |
| **AYP** | `E':[R',u' S u]` | 9 | APY |
| **AYW** | `u:[R2,E R' S]` | 9 | AWY |

## Inverse‑pair index

| learn | comm | ⇄ | derive | comm |
|---|---|---|---|---|
| **ACE** | `U' M2 U':[M,U2]` | ⇄ | AEC | `U' M2 U:[M,U2]` |
| **ACF** | `U:[R B' R',S]` | ⇄ | AFC | `U:[S,R B' R']` |
| **ACI** | `[M U2 M,U']` | ⇄ | AIC | `[U',M U2 M]` |
| **ACJ** | `[F E F',U']` | ⇄ | AJC | `[U',F E F']` |
| **ACK** | `S M U':[M',U2]` | ⇄ | AKC | `S M U:[M',U2]` |
| **ACL** | `[U,R S R']` | ⇄ | ALC | `[R S R',U]` |
| **ACM** | `U:[U,M' U2 M']` | ⇄ | AMC | `U:[M' U2 M',U]` |
| **ACN** | `[U,S' U M]` | ⇄ | ANC | `[S' U M,U]` |
| **ACO** | `[R' U R,S2]` | ⇄ | AOC | `[S2,R' U R]` |
| **ACP** | `[M U' S',U']` | ⇄ | APC | `[U',M U' S']` |
| **ACQ** | `[U,R' S2 R]` | ⇄ | AQC | `[R' S2 R,U]` |
| **ACR** | `[R S R',F]` | ⇄ | ARC | `[F,R S R']` |
| **ACS** | `U':[R E2 R',U']` | ⇄ | ASC | `U':[U',R E2 R']` |
| **ACT** | `F:[F,R S R']` | ⇄ | ATC | `F:[R S R',F]` |
| **ACW** | `[F' E F,U']` | ⇄ | AWC | `[U',F' E F]` |
| **ACX** | `[F E2 F',U']` | ⇄ | AXC | `[U',F E2 F']` |
| **ACY** | `[U,R S2 R']` | ⇄ | AYC | `[R S2 R',U]` |
| **ACZ** | `[U,R' S' R]` | ⇄ | AZC | `[R' S' R,U]` |
| **ADE** | `S' U:[S,U2]` | ⇄ | AED | `S' U':[S,U2]` |
| **ADF** | `r':[F' r U,M']` | ⇄ | AFD | `R':[F' r U,M]` |
| **ADI** | `[U' M U,F2]` | ⇄ | AID | `[F2,U' M U]` |
| **ADJ** | `F:[E,R U2 R']` | ⇄ | AJD | `F:[R U2 R',E]` |
| **ADK** | `[r U' r',S]` | ⇄ | AKD | `[S,r U' r']` |
| **ADL** | `S' U':[R2,S']` | ⇄ | ALD | `S' U':[S',R2]` |
| **ADM** | `F B R:[S,R2]` | ⇄ | AMD | `[F' r U,M2]` |
| **ADN** | `F R U:[M,U2]` | ⇄ | AND | `F R U':[M,U2]` |
| **ADO** | `U' F' R':[E,R2]` | ⇄ | AOD | `U' F' R:[E,R2]` |
| **ADP** | `r:[U',R' S2 R]` | ⇄ | APD | `R' F R':[S,R2]` |
| **ADQ** | `M':[U',R S' R']` | ⇄ | AQD | `r:[S',R' U' R]` |
| **ADR** | `[R' S2 R,F]` | ⇄ | ARD | `[F,R' S2 R]` |
| **ADS** | `S:[U',R E2 R']` | ⇄ | ASD | `S:[R E2 R',U']` |
| **ADT** | `[R S R' E',F']` | ⇄ | ATD | `[F',R S R' E']` |
| **ADW** | `E' F R:[S,R2]` | ⇄ | AWD | `E' F R':[S,R2]` |
| **ADX** | `S:[U',R E' R']` | ⇄ | AXD | `S:[R E' R',U']` |
| **ADY** | `M':[U',r' S' r]` | ⇄ | AYD | `R':[S',r U' r']` |
| **ADZ** | `F R:[S,R2]` | ⇄ | AZD | `F R':[S,R2]` |
| **AEI** | `[M,F2]` | ⇄ | AIE | `[F2,M]` |
| **AEJ** | `U':[S U M',U2]` | ⇄ | AJE | `U:[S U M',U2]` |
| **AEK** | `U':[S,U2]` | ⇄ | AKE | `U:[S,U2]` |
| **AEL** | `S' U:[R2,S]` | ⇄ | ALE | `S' U:[S,R2]` |
| **AEM** | `[M,U2]` | ⇄ | AME | `[U2,M]` |
| **AEN** | `U:[S' U M,U2]` | ⇄ | ANE | `U:[S U' M,U2]` |
| **AEO** | `U:[S',U2]` | ⇄ | AOE | `U':[S',U2]` |
| **AEP** | `U':[R E R',U2]` | ⇄ | APE | `U:[R E R',U2]` |
| **AEQ** | `R' U:[S',U2]` | ⇄ | AQE | `R' U':[S',U2]` |
| **AER** | `U:[R S' R',U2]` | ⇄ | ARE | `U':[R S' R',U2]` |
| **AES** | `U':[R E2 R',U2]` | ⇄ | ASE | `U:[R E2 R',U2]` |
| **AET** | `U':[R' E R,U2]` | ⇄ | ATE | `U:[R' E R,U2]` |
| **AEW** | `U':[R' E2 R,U2]` | ⇄ | AWE | `U:[R' E2 R,U2]` |
| **AEX** | `U':[R E' R',U2]` | ⇄ | AXE | `U:[R E' R',U2]` |
| **AEY** | `R U:[S',U2]` | ⇄ | AYE | `R U':[S',U2]` |
| **AEZ** | `U:[R' S' R,U2]` | ⇄ | AZE | `U':[R' S' R,U2]` |
| **AFI** | `U:[S,R' F' R]` | ⇄ | AIF | `U:[R' F' R,S]` |
| **AFJ** | `F:[E,R U R']` | ⇄ | AJF | `F:[R U R',E]` |
| **AFK** | `B' R U':[S',R2]` | ⇄ | AKF | `B' R U':[R2,S']` |
| **AFL** | `F R' U:[R2,S']` | ⇄ | ALF | `F R' U:[S',R2]` |
| **AFM** | `U:[S,R B R']` | ⇄ | AMF | `U:[R B R',S]` |
| **AFN** | `U':[R B R',S]` | ⇄ | ANF | `U':[S,R B R']` |
| **AFO** | `[U' R2 U,M]` | ⇄ | AOF | `[M,U' R2 U]` |
| **AFP** | `[M',U R2 U']` | ⇄ | APF | `[U R2 U',M']` |
| **AFQ** | `[U' R U,M]` | ⇄ | AQF | `[M,U' R U]` |
| **AFR** | `[M',U R U']` | ⇄ | ARF | `[U R U',M']` |
| **AFS** | `u:[S,R B2 R']` | ⇄ | ASF | `u:[R B2 R',S]` |
| **AFT** | `[F,U' S U]` | ⇄ | ATF | `[U' S U,F]` |
| **AFW** | `[B,E F' E']` | ⇄ | AWF | `[E F' E',B]` |
| **AFX** | `U:[S,R B2 R']` | ⇄ | AXF | `U:[R B2 R',S]` |
| **AFY** | `[U' R' U,M]` | ⇄ | AYF | `[M,U' R' U]` |
| **AFZ** | `[M',U R' U']` | ⇄ | AZF | `[U R' U',M']` |
| **AIK** | `F:[R' S' R,F2]` | ⇄ | AKI | `F':[R' S' R,F2]` |
| **AIL** | `M' U:[S,U2]` | ⇄ | ALI | `M' U':[S,U2]` |
| **AIM** | `[M',F2]` | ⇄ | AMI | `[M,D2]` |
| **AIN** | `[F2,U' M' U]` | ⇄ | ANI | `[U' M' U,F2]` |
| **AIO** | `F':[R E' R',F2]` | ⇄ | AOI | `R E F:[R2,E]` |
| **AIP** | `R' F':[E',F2]` | ⇄ | API | `R' F:[E',F2]` |
| **AIQ** | `E F':[E',F2]` | ⇄ | AQI | `E F:[R2,E]` |
| **AIR** | `R2 F:[E,R2]` | ⇄ | ARI | `R2 F:[R2,E]` |
| **AIS** | `U' D R:[E,R2]` | ⇄ | ASI | `U' D R':[E,R2]` |
| **AIT** | `E2 F:[E,R2]` | ⇄ | ATI | `E2 F:[R2,E]` |
| **AIW** | `E' F:[E,R2]` | ⇄ | AWI | `E' F:[R2,E]` |
| **AIX** | `F:[E,F2]` | ⇄ | AXI | `F':[E,F2]` |
| **AIY** | `F:[R' S R,F2]` | ⇄ | AYI | `R':[M u2 M,U]` |
| **AIZ** | `F':[E',F2]` | ⇄ | AZI | `F:[E',F2]` |
| **AJK** | `U S U:[M',U2]` | ⇄ | AKJ | `U S U':[M',U2]` |
| **AJL** | `[F' E F,D]` | ⇄ | ALJ | `[D,F' E F]` |
| **AJM** | `D:[R F R',S']` | ⇄ | AMJ | `D:[S',R F R']` |
| **AJN** | `U M':[U',M U2 M]` | ⇄ | ANJ | `U M:[U,M' U2 M']` |
| **AJO** | `[U' R2 U,M']` | ⇄ | AOJ | `[M',U' R2 U]` |
| **AJP** | `[F' E F,D']` | ⇄ | APJ | `[D',F' E F]` |
| **AJQ** | `[M,U' F U]` | ⇄ | AQJ | `[U' F U,M]` |
| **AJR** | `M':[U R U',M']` | ⇄ | ARJ | `M':[M',U R U']` |
| **AJS** | `[M,U' F' U]` | ⇄ | ASJ | `[U' F' U,M]` |
| **AJT** | `u':[R,U M' U']` | ⇄ | ATJ | `F':[R' D R,E]` |
| **AJW** | `U' R F':[R2,E']` | ⇄ | AWJ | `U' R F':[E',R2]` |
| **AJX** | `D R' F:[E',R2]` | ⇄ | AXJ | `D R' F:[R2,E']` |
| **AJY** | `[U' R' U,M']` | ⇄ | AYJ | `[M',U' R' U]` |
| **AJZ** | `M':[U R' U',M']` | ⇄ | AZJ | `M':[M',U R' U']` |
| **AKM** | `F:[R' S R,D]` | ⇄ | AMK | `F:[D,R' S R]` |
| **AKN** | `U S U:[M,U2]` | ⇄ | ANK | `U S U':[M,U2]` |
| **AKO** | `U':[R2,S']` | ⇄ | AOK | `U':[S',R2]` |
| **AKP** | `[S',R F R']` | ⇄ | APK | `[R F R',S']` |
| **AKQ** | `U R:[S,U2]` | ⇄ | AQK | `U R:[U2,S]` |
| **AKR** | `[R' S' R,F]` | ⇄ | ARK | `[F,R' S' R]` |
| **AKS** | `E:[R' S' R,F]` | ⇄ | ASK | `E:[F,R' S' R]` |
| **AKT** | `F:[F,R' S' R]` | ⇄ | ATK | `F:[R' S' R,F]` |
| **AKW** | `u S:[R',S' R2 S']` | ⇄ | AWK | `u S':[R,S R2 S]` |
| **AKX** | `u R' U2:[S',U2 R2]` | ⇄ | AXK | `u R:[S',R2 U2]` |
| **AKY** | `U R':[S,U2]` | ⇄ | AYK | `U R':[U2,S]` |
| **AKZ** | `D F:[E,R2]` | ⇄ | AZK | `D F:[R2,E]` |
| **ALM** | `F B R':[S',R2]` | ⇄ | AML | `F B R:[S',R2]` |
| **ALN** | `[S u S',D]` | ⇄ | ANL | `[D,S u S']` |
| **ALO** | `[r' D' r,S]` | ⇄ | AOL | `[S,r' D' r]` |
| **ALP** | `M' U:[R2,S']` | ⇄ | APL | `M' U:[S',R2]` |
| **ALQ** | `E F R':[S',R2]` | ⇄ | AQL | `E F R:[S',R2]` |
| **ALR** | `[R S2 R',F]` | ⇄ | ARL | `[F,R S2 R']` |
| **ALS** | `S' U' R:[E,R2]` | ⇄ | ASL | `S' U' R':[E,R2]` |
| **ALT** | `[F,U S U']` | ⇄ | ATL | `[U S U',F]` |
| **ALW** | `E' F R':[S',R2]` | ⇄ | AWL | `E' F R:[S',R2]` |
| **ALX** | `S' u' R:[E,R2]` | ⇄ | AXL | `S' u' R':[E,R2]` |
| **ALY** | `U':[E R S',R]` | ⇄ | AYL | `U':[R,E R S']` |
| **ALZ** | `F R':[S',R2]` | ⇄ | AZL | `F R:[S',R2]` |
| **AMO** | `U' R:[B E' B',R2]` | ⇄ | AOM | `U' R':[B E' B',R2]` |
| **AMP** | `U':[R' B R,S]` | ⇄ | APM | `U':[S,R' B R]` |
| **AMQ** | `[U' R U,M2]` | ⇄ | AQM | `[M2,U' R U]` |
| **AMR** | `U2 B:[R2,E']` | ⇄ | ARM | `U2 B:[E',R2]` |
| **AMS** | `U' D' R:[E,R2]` | ⇄ | ASM | `U' D' R':[E,R2]` |
| **AMT** | `u':[R,U M2 U']` | ⇄ | ATM | `E:[M2,U' R U]` |
| **AMW** | `U' D' R':[E',R2]` | ⇄ | AWM | `U' D' R:[E',R2]` |
| **AMX** | `u R' U:[M,U2]` | ⇄ | AXM | `u R' U':[M,U2]` |
| **AMY** | `[M2,D' R D]` | ⇄ | AYM | `[D' R D,M2]` |
| **AMZ** | `M':[U R' U',M2]` | ⇄ | AZM | `M:[U R' U',M2]` |
| **ANO** | `U' S' U:[M,U2]` | ⇄ | AON | `U' S' U':[M,U2]` |
| **ANP** | `[D',S' u' S]` | ⇄ | APN | `[S' u' S,D']` |
| **ANQ** | `U':[R,U' M U]` | ⇄ | AQN | `U':[U' M U,R]` |
| **ANR** | `[E B E',F]` | ⇄ | ARN | `[F,E B E']` |
| **ANS** | `B:[R' U' R,E2]` | ⇄ | ASN | `B:[E2,R' U' R]` |
| **ANT** | `[E' B' E,F']` | ⇄ | ATN | `[F',E' B' E]` |
| **ANW** | `[B',E F' E']` | ⇄ | AWN | `[E F' E',B']` |
| **ANX** | `u' R' B:[R2,E]` | ⇄ | AXN | `u' R' B:[E,R2]` |
| **ANY** | `[B,E' F E]` | ⇄ | AYN | `[E' F E,B]` |
| **ANZ** | `F D R':[S',R2]` | ⇄ | AZN | `F D R:[S',R2]` |
| **AOQ** | `[D M2 D',R']` | ⇄ | AQO | `[R',D M2 D']` |
| **AOR** | `F':[F',R E' R']` | ⇄ | ARO | `F':[R E' R',F']` |
| **AOS** | `U' R:[E,R2]` | ⇄ | ASO | `U' R':[E,R2]` |
| **AOT** | `[R E' R',F']` | ⇄ | ATO | `[F',R E' R']` |
| **AOW** | `U' R':[E',R2]` | ⇄ | AWO | `U' R:[E',R2]` |
| **AOX** | `u' R:[E,R2]` | ⇄ | AXO | `u' R':[E,R2]` |
| **AOY** | `[D M2 D',R]` | ⇄ | AYO | `[R,D M2 D']` |
| **AOZ** | `u' R':[E',R2]` | ⇄ | AZO | `u' R:[E',R2]` |
| **APQ** | `u':[S,U R U']` | ⇄ | AQP | `E:[R,U' S U]` |
| **APR** | `[U' S U,R']` | ⇄ | ARP | `[R',U' S U]` |
| **APS** | `u':[S,U R' U']` | ⇄ | ASP | `E:[R',U' S U]` |
| **APT** | `[F,U' S' U]` | ⇄ | ATP | `[U' S' U,F]` |
| **APW** | `u:[R',E R' S]` | ⇄ | AWP | `E':[R,u' S u]` |
| **APX** | `R' F:[E',R2]` | ⇄ | AXP | `R' F:[R2,E']` |
| **APY** | `U':[S,u R' u']` | ⇄ | AYP | `E':[R',u' S u]` |
| **APZ** | `[U' S U,R]` | ⇄ | AZP | `[R,U' S U]` |
| **AQS** | `R:[U',R E2 R']` | ⇄ | ASQ | `R:[R E2 R',U']` |
| **AQT** | `[R U' R',E]` | ⇄ | ATQ | `[E,R U' R']` |
| **AQW** | `[R U' R',E2]` | ⇄ | AWQ | `[E2,R U' R']` |
| **AQX** | `R:[U',R E' R']` | ⇄ | AXQ | `R:[R E' R',U']` |
| **AQY** | `U R':[S,R2]` | ⇄ | AYQ | `U R:[S,R2]` |
| **AQZ** | `[E,F R2 F']` | ⇄ | AZQ | `[F R2 F',E]` |
| **ARS** | `[r U r',E]` | ⇄ | ASR | `[E,r U r']` |
| **ART** | `E2 F:[R2,E']` | ⇄ | ATR | `E2 F:[E',R2]` |
| **ARW** | `F':[R E R',F']` | ⇄ | AWR | `F':[F',R E R']` |
| **ARX** | `R2 F:[E',R2]` | ⇄ | AXR | `R2 F:[R2,E']` |
| **ARY** | `[F,R' S R]` | ⇄ | AYR | `[R' S R,F]` |
| **ARZ** | `[R2,F' E2 F]` | ⇄ | AZR | `[F' E2 F,R2]` |
| **ASW** | `E' F:[R2,E']` | ⇄ | AWS | `E' F:[E',R2]` |
| **ASX** | `U':[R' F2 R,E]` | ⇄ | AXS | `E':[R' U' R,E']` |
| **ASY** | `[E2,R' U' R]` | ⇄ | AYS | `[R' U' R,E2]` |
| **ASZ** | `F U R:[S,R2]` | ⇄ | AZS | `F U R':[S,R2]` |
| **ATW** | `[R' F' R,E]` | ⇄ | AWT | `[E,R' F' R]` |
| **ATX** | `[F',R2 E' R2 E']` | ⇄ | AXT | `[R2 E' R2 E',F']` |
| **ATY** | `F:[R' S R,F]` | ⇄ | AYT | `F:[F,R' S R]` |
| **ATZ** | `[E2,F R2 F']` | ⇄ | AZT | `[F R2 F',E2]` |
| **AWY** | `R':[R' E2 R,U']` | ⇄ | AYW | `u:[R2,E R' S]` |
| **AWZ** | `[E',F R2 F']` | ⇄ | AZW | `[F R2 F',E']` |
| **AXY** | `[E',R' U' R]` | ⇄ | AYX | `[R' U' R,E']` |
| **AXZ** | `F:[R2,E']` | ⇄ | AZX | `F:[E',R2]` |

## Case cards (with 3‑cycle diagrams)

#### ACE — U2 · M — `U' M2 U':[M,U2]` (9)
```
      · 3 ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=E(UB)
```

#### ACF — B'@R · S — `U:[R B' R',S]` (10)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=F(BU)
```

#### ACI — U2@M · U' — `[M U2 M,U']` (8)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=I(DF)
```

#### ACJ — E@F · U' — `[F E F',U']` (8)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=J(FD)
```

#### ACK — U2 · M' — `S M U':[M',U2]` (9)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=C(UL)  3=K(DL)
```

#### ACL — S@R · U — `[U,R S R']` (8)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=L(LD)
```

#### ACM — U2@M' · U — `U:[U,M' U2 M']` (9)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=C(UL)  3=M(DB)
```

#### ACN — S'UM · U — `[U,S' U M]` (8)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=N(BD)
```

#### ACO — U@R' · S2 — `[R' U R,S2]` (8)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=C(UL)  3=O(DR)
```

#### ACP — MU'S' · U' — `[M U' S',U']` (8)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=P(RD)
```

#### ACQ — S2@R' · U — `[U,R' S2 R]` (8)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=Q(FR)
```

#### ACR — S@R · F — `[R S R',F]` (8)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=R(RF)
```

#### ACS — E2@R · U' — `U':[R E2 R',U']` (9)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=S(FL)
```

#### ACT — S@R · F — `F:[F,R S R']` (9)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=T(LF)
```

#### ACW — E@F' · U' — `[F' E F,U']` (8)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=W(BL)
```

#### ACX — E2@F · U' — `[F E2 F',U']` (8)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=X(LB)
```

#### ACY — S2@R · U — `[U,R S2 R']` (8)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=Y(BR)
```

#### ACZ — S'@R' · U — `[U,R' S' R]` (8)
```
      · · ·
      2 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=C(UL)  3=Z(RB)
```

#### ADE — U2 · S — `S' U:[S,U2]` (7)
```
      · 3 ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=E(UB)
```

#### ADF — F'rU · M' — `r':[F' r U,M']` (9)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=F(BU)
```

#### ADI — M@U' · F2 — `[U' M U,F2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=I(DF)
```

#### ADJ — U2@R · E — `F:[E,R U2 R']` (10)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=J(FD)
```

#### ADK — U'@r · S — `[r U' r',S]` (8)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=D(LU)  3=K(DL)
```

#### ADL — S' · R2 — `S' U':[R2,S']` (8)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=L(LD)
```

#### ADM — S · R2 — `F B R:[S,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=D(LU)  3=M(DB)
```

#### ADN — U2 · M — `F R U:[M,U2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=N(BD)
```

#### ADO — R2 · E — `U' F' R':[E,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=D(LU)  3=O(DR)
```

#### ADP — S2@R' · U' — `r:[U',R' S2 R]` (9)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=P(RD)
```

#### ADQ — S'@R · U' — `M':[U',R S' R']` (9)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=Q(FR)
```

#### ADR — S2@R' · F — `[R' S2 R,F]` (8)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=R(RF)
```

#### ADS — E2@R · U' — `S:[U',R E2 R']` (10)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=S(FL)
```

#### ADT — RSR'E' · F' — `[R S R' E',F']` (10)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=T(LF)
```

#### ADW — S · R2 — `E' F R:[S,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=W(BL)
```

#### ADX — E'@R · U' — `S:[U',R E' R']` (10)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=X(LB)
```

#### ADY — S'@r' · U' — `M':[U',r' S' r]` (9)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=Y(BR)
```

#### ADZ — S · R2 — `F R:[S,R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· 2 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=D(LU)  3=Z(RB)
```

#### AEC — U2 · M — `U' M2 U:[M,U2]` (9)
```
      · 2 ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=C(UL)
```

#### AED — U2 · S — `S' U':[S,U2]` (7)
```
      · 2 ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=D(LU)
```

#### AEI — M · F2 — `[M,F2]` (4)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=I(DF)
```

#### AEJ — SUM' · U2 — `U':[S U M',U2]` (9)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=J(FD)
```

#### AEK — U2 · S — `U':[S,U2]` (5)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=E(UB)  3=K(DL)
```

#### AEL — S · R2 — `S' U:[R2,S]` (8)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=L(LD)
```

#### AEM — U2 · M — `[M,U2]` (4)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=E(UB)  3=M(DB)
```

#### AEN — S'UM · U2 — `U:[S' U M,U2]` (9)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=N(BD)
```

#### AEO — U2 · S' — `U:[S',U2]` (5)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=E(UB)  3=O(DR)
```

#### AEP — E@R · U2 — `U':[R E R',U2]` (9)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=P(RD)
```

#### AEQ — U2 · S' — `R' U:[S',U2]` (7)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=Q(FR)
```

#### AER — S'@R · U2 — `U:[R S' R',U2]` (9)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=R(RF)
```

#### AES — E2@R · U2 — `U':[R E2 R',U2]` (9)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=S(FL)
```

#### AET — E@R' · U2 — `U':[R' E R,U2]` (9)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=T(LF)
```

#### AEW — E2@R' · U2 — `U':[R' E2 R,U2]` (9)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=W(BL)
```

#### AEX — E'@R · U2 — `U':[R E' R',U2]` (9)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=X(LB)
```

#### AEY — U2 · S' — `R U:[S',U2]` (7)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=Y(BR)
```

#### AEZ — S'@R' · U2 — `U:[R' S' R,U2]` (9)
```
      · 2 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=E(UB)  3=Z(RB)
```

#### AFC — B'@R · S — `U:[S,R B' R']` (10)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=C(UL)
```

#### AFD — F'rU · M — `R':[F' r U,M]` (9)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=D(LU)
```

#### AFI — F'@R' · S — `U:[S,R' F' R]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=I(DF)
```

#### AFJ — U@R · E — `F:[E,R U R']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=J(FD)
```

#### AFK — S' · R2 — `B' R U':[S',R2]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=F(BU)  3=K(DL)
```

#### AFL — S' · R2 — `F R' U:[R2,S']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=L(LD)
```

#### AFM — B@R · S — `U:[S,R B R']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=F(BU)  3=M(DB)
```

#### AFN — B@R · S — `U':[R B R',S]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=N(BD)
```

#### AFO — R2@U' · M — `[U' R2 U,M]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=F(BU)  3=O(DR)
```

#### AFP — R2@U · M' — `[M',U R2 U']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=P(RD)
```

#### AFQ — R@U' · M — `[U' R U,M]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=Q(FR)
```

#### AFR — R@U · M' — `[M',U R U']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=R(RF)
```

#### AFS — B2@R · S — `u:[S,R B2 R']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=S(FL)
```

#### AFT — S@U' · F — `[F,U' S U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=T(LF)
```

#### AFW — F'@E · B — `[B,E F' E']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=W(BL)
```

#### AFX — B2@R · S — `U:[S,R B2 R']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=X(LB)
```

#### AFY — R'@U' · M — `[U' R' U,M]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=Y(BR)
```

#### AFZ — R'@U · M' — `[M',U R' U']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 2 ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=F(BU)  3=Z(RB)
```

#### AIC — U2@M · U' — `[U',M U2 M]` (8)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=C(UL)
```

#### AID — M@U' · F2 — `[F2,U' M U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=D(LU)
```

#### AIE — M · F2 — `[F2,M]` (4)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=E(UB)
```

#### AIF — F'@R' · S — `U:[R' F' R,S]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=F(BU)
```

#### AIK — S'@R' · F2 — `F:[R' S' R,F2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      3 d ·
      · · ·
  1=A(UF)  2=I(DF)  3=K(DL)
```

#### AIL — U2 · S — `M' U:[S,U2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=L(LD)
```

#### AIM — M' · F2 — `[M',F2]` (4)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · 3 ·
  1=A(UF)  2=I(DF)  3=M(DB)
```

#### AIN — M'@U' · F2 — `[F2,U' M' U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=N(BD)
```

#### AIO — E'@R · F2 — `F':[R E' R',F2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d 3
      · · ·
  1=A(UF)  2=I(DF)  3=O(DR)
```

#### AIP — F2 · E' — `R' F':[E',F2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=P(RD)
```

#### AIQ — F2 · E' — `E F':[E',F2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=Q(FR)
```

#### AIR — R2 · E — `R2 F:[E,R2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=R(RF)
```

#### AIS — R2 · E — `U' D R:[E,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=S(FL)
```

#### AIT — R2 · E — `E2 F:[E,R2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=T(LF)
```

#### AIW — R2 · E — `E' F:[E,R2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=W(BL)
```

#### AIX — F2 · E — `F:[E,F2]` (5)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=X(LB)
```

#### AIY — S@R' · F2 — `F:[R' S R,F2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=Y(BR)
```

#### AIZ — F2 · E' — `F':[E',F2]` (5)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · 2 ·
      · d ·
      · · ·
  1=A(UF)  2=I(DF)  3=Z(RB)
```

#### AJC — E@F · U' — `[U',F E F']` (8)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=C(UL)
```

#### AJD — U2@R · E — `F:[R U2 R',E]` (10)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=D(LU)
```

#### AJE — SUM' · U2 — `U:[S U M',U2]` (9)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=E(UB)
```

#### AJF — U@R · E — `F:[R U R',E]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=F(BU)
```

#### AJK — U2 · M' — `U S U:[M',U2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=J(FD)  3=K(DL)
```

#### AJL — E@F' · D — `[F' E F,D]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=L(LD)
```

#### AJM — F@R · S' — `D:[R F R',S']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=J(FD)  3=M(DB)
```

#### AJN — U2@M · U' — `U M':[U',M U2 M]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=N(BD)
```

#### AJO — R2@U' · M' — `[U' R2 U,M']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=J(FD)  3=O(DR)
```

#### AJP — E@F' · D' — `[F' E F,D']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=P(RD)
```

#### AJQ — F@U' · M — `[M,U' F U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=Q(FR)
```

#### AJR — R@U · M' — `M':[U R U',M']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=R(RF)
```

#### AJS — F'@U' · M — `[M,U' F' U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=S(FL)
```

#### AJT — M'@U · R — `u':[R,U M' U']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=T(LF)
```

#### AJW — R2 · E' — `U' R F':[R2,E']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=W(BL)
```

#### AJX — R2 · E' — `D R' F:[E',R2]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=X(LB)
```

#### AJY — R'@U' · M' — `[U' R' U,M']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=Y(BR)
```

#### AJZ — R'@U · M' — `M':[U R' U',M']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · 2 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=J(FD)  3=Z(RB)
```

#### AKC — U2 · M' — `S M U:[M',U2]` (9)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=C(UL)
```

#### AKD — U'@r · S — `[S,r U' r']` (8)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=D(LU)
```

#### AKE — U2 · S — `U:[S,U2]` (5)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=E(UB)
```

#### AKF — S' · R2 — `B' R U':[R2,S']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=F(BU)
```

#### AKI — S'@R' · F2 — `F':[R' S' R,F2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=I(DF)
```

#### AKJ — U2 · M' — `U S U':[M',U2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=J(FD)
```

#### AKM — S@R' · D — `F:[R' S R,D]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · 3 ·
  1=A(UF)  2=K(DL)  3=M(DB)
```

#### AKN — U2 · M — `U S U:[M,U2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=N(BD)
```

#### AKO — S' · R2 — `U':[R2,S']` (6)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d 3
      · · ·
  1=A(UF)  2=K(DL)  3=O(DR)
```

#### AKP — F@R · S' — `[S',R F R']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=P(RD)
```

#### AKQ — U2 · S — `U R:[S,U2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=Q(FR)
```

#### AKR — S'@R' · F — `[R' S' R,F]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=R(RF)
```

#### AKS — S'@R' · F — `E:[R' S' R,F]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=S(FL)
```

#### AKT — S'@R' · F — `F:[F,R' S' R]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=T(LF)
```

#### AKW — R2@S' · R' — `u S:[R',S' R2 S']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=W(BL)
```

#### AKX — U2R2 · S' — `u R' U2:[S',U2 R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=X(LB)
```

#### AKY — U2 · S — `U R':[S,U2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=Y(BR)
```

#### AKZ — R2 · E — `D F:[E,R2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      2 d ·
      · · ·
  1=A(UF)  2=K(DL)  3=Z(RB)
```

#### ALC — S@R · U — `[R S R',U]` (8)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=C(UL)
```

#### ALD — S' · R2 — `S' U':[S',R2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=D(LU)
```

#### ALE — S · R2 — `S' U:[S,R2]` (8)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=E(UB)
```

#### ALF — S' · R2 — `F R' U:[S',R2]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=F(BU)
```

#### ALI — U2 · S — `M' U':[S,U2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=I(DF)
```

#### ALJ — E@F' · D — `[D,F' E F]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=J(FD)
```

#### ALM — S' · R2 — `F B R':[S',R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=L(LD)  3=M(DB)
```

#### ALN — u@S · D — `[S u S',D]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=N(BD)
```

#### ALO — D'@r' · S — `[r' D' r,S]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=L(LD)  3=O(DR)
```

#### ALP — S' · R2 — `M' U:[R2,S']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=P(RD)
```

#### ALQ — S' · R2 — `E F R':[S',R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=Q(FR)
```

#### ALR — S2@R · F — `[R S2 R',F]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=R(RF)
```

#### ALS — R2 · E — `S' U' R:[E,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=S(FL)
```

#### ALT — S@U · F — `[F,U S U']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=T(LF)
```

#### ALW — S' · R2 — `E' F R':[S',R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=W(BL)
```

#### ALX — R2 · E — `S' u' R:[E,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=X(LB)
```

#### ALY — ERS' · R — `U':[E R S',R]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=Y(BR)
```

#### ALZ — S' · R2 — `F R':[S',R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· 2 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=L(LD)  3=Z(RB)
```

#### AMC — U2@M' · U — `U:[M' U2 M',U]` (9)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=C(UL)
```

#### AMD — F'rU · M2 — `[F' r U,M2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=D(LU)
```

#### AME — U2 · M — `[U2,M]` (4)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=E(UB)
```

#### AMF — B@R · S — `U:[R B R',S]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=F(BU)
```

#### AMI — M · D2 — `[M,D2]` (4)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=I(DF)
```

#### AMJ — F@R · S' — `D:[S',R F R']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=J(FD)
```

#### AMK — S@R' · D — `F:[D,R' S R]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=K(DL)
```

#### AML — S' · R2 — `F B R:[S',R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=L(LD)
```

#### AMO — E'@B · R2 — `U' R:[B E' B',R2]` (11)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · 2 ·
  1=A(UF)  2=M(DB)  3=O(DR)
```

#### AMP — B@R' · S — `U':[R' B R,S]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=P(RD)
```

#### AMQ — R@U' · M2 — `[U' R U,M2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=Q(FR)
```

#### AMR — R2 · E' — `U2 B:[R2,E']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=R(RF)
```

#### AMS — R2 · E — `U' D' R:[E,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=S(FL)
```

#### AMT — M2@U · R — `u':[R,U M2 U']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=T(LF)
```

#### AMW — R2 · E' — `U' D' R':[E',R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=W(BL)
```

#### AMX — U2 · M — `u R' U:[M,U2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=X(LB)
```

#### AMY — R@D' · M2 — `[M2,D' R D]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=Y(BR)
```

#### AMZ — R'@U · M2 — `M':[U R' U',M2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 2 ·
  1=A(UF)  2=M(DB)  3=Z(RB)
```

#### ANC — S'UM · U — `[S' U M,U]` (8)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=C(UL)
```

#### AND — U2 · M — `F R U':[M,U2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=D(LU)
```

#### ANE — SU'M · U2 — `U:[S U' M,U2]` (9)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=E(UB)
```

#### ANF — B@R · S — `U':[S,R B R']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=F(BU)
```

#### ANI — M'@U' · F2 — `[U' M' U,F2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=I(DF)
```

#### ANJ — U2@M' · U — `U M:[U,M' U2 M']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=J(FD)
```

#### ANK — U2 · M — `U S U':[M,U2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=N(BD)  3=K(DL)
```

#### ANL — u@S · D — `[D,S u S']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=L(LD)
```

#### ANO — U2 · M — `U' S' U:[M,U2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=N(BD)  3=O(DR)
```

#### ANP — u'@S' · D' — `[D',S' u' S]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=P(RD)
```

#### ANQ — M@U' · R — `U':[R,U' M U]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=Q(FR)
```

#### ANR — B@E · F — `[E B E',F]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=R(RF)
```

#### ANS — U'@R' · E2 — `B:[R' U' R,E2]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=S(FL)
```

#### ANT — B'@E' · F' — `[E' B' E,F']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=T(LF)
```

#### ANW — F'@E · B' — `[B',E F' E']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=W(BL)
```

#### ANX — R2 · E — `u' R' B:[R2,E]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=X(LB)
```

#### ANY — F@E' · B — `[B,E' F E]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=Y(BR)
```

#### ANZ — S' · R2 — `F D R':[S',R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · 2 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=N(BD)  3=Z(RB)
```

#### AOC — U@R' · S2 — `[S2,R' U R]` (8)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=C(UL)
```

#### AOD — R2 · E — `U' F' R:[E,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=D(LU)
```

#### AOE — U2 · S' — `U':[S',U2]` (5)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=E(UB)
```

#### AOF — R2@U' · M — `[M,U' R2 U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=F(BU)
```

#### AOI — R2 · E — `R E F:[R2,E]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=I(DF)
```

#### AOJ — R2@U' · M' — `[M',U' R2 U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=J(FD)
```

#### AOK — S' · R2 — `U':[S',R2]` (6)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d 2
      · · ·
  1=A(UF)  2=O(DR)  3=K(DL)
```

#### AOL — D'@r' · S — `[S,r' D' r]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=L(LD)
```

#### AOM — E'@B · R2 — `U' R':[B E' B',R2]` (11)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · 3 ·
  1=A(UF)  2=O(DR)  3=M(DB)
```

#### AON — U2 · M — `U' S' U':[M,U2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=N(BD)
```

#### AOQ — M2@D · R' — `[D M2 D',R']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=Q(FR)
```

#### AOR — E'@R · F' — `F':[F',R E' R']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=R(RF)
```

#### AOS — R2 · E — `U' R:[E,R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=S(FL)
```

#### AOT — E'@R · F' — `[R E' R',F']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=T(LF)
```

#### AOW — R2 · E' — `U' R':[E',R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=W(BL)
```

#### AOX — R2 · E — `u' R:[E,R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=X(LB)
```

#### AOY — M2@D · R — `[D M2 D',R]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=Y(BR)
```

#### AOZ — R2 · E' — `u' R':[E',R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 2
      · · ·
  1=A(UF)  2=O(DR)  3=Z(RB)
```

#### APC — MU'S' · U' — `[U',M U' S']` (8)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=C(UL)
```

#### APD — S · R2 — `R' F R':[S,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=D(LU)
```

#### APE — E@R · U2 — `U:[R E R',U2]` (9)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=E(UB)
```

#### APF — R2@U · M' — `[U R2 U',M']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=F(BU)
```

#### API — F2 · E' — `R' F:[E',F2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=I(DF)
```

#### APJ — E@F' · D' — `[D',F' E F]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=J(FD)
```

#### APK — F@R · S' — `[R F R',S']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=P(RD)  3=K(DL)
```

#### APL — S' · R2 — `M' U:[S',R2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=L(LD)
```

#### APM — B@R' · S — `U':[S,R' B R]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=P(RD)  3=M(DB)
```

#### APN — u'@S' · D' — `[S' u' S,D']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=N(BD)
```

#### APQ — R@U · S — `u':[S,U R U']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=Q(FR)
```

#### APR — S@U' · R' — `[U' S U,R']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=R(RF)
```

#### APS — R'@U · S — `u':[S,U R' U']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=S(FL)
```

#### APT — S'@U' · F — `[F,U' S' U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=T(LF)
```

#### APW — ER'S · R' — `u:[R',E R' S]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 3
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=W(BL)
```

#### APX — R2 · E' — `R' F:[E',R2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=X(LB)
```

#### APY — R'@u · S — `U':[S,u R' u']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=Y(BR)
```

#### APZ — S@U' · R — `[U' S U,R]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · 2 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=P(RD)  3=Z(RB)
```

#### AQC — S2@R' · U — `[R' S2 R,U]` (8)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=C(UL)
```

#### AQD — U'@R' · S' — `r:[S',R' U' R]` (9)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=D(LU)
```

#### AQE — U2 · S' — `R' U':[S',U2]` (7)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=E(UB)
```

#### AQF — R@U' · M — `[M,U' R U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=F(BU)
```

#### AQI — R2 · E — `E F:[R2,E]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=I(DF)
```

#### AQJ — F@U' · M — `[U' F U,M]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=J(FD)
```

#### AQK — U2 · S — `U R:[U2,S]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=K(DL)
```

#### AQL — S' · R2 — `E F R:[S',R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=L(LD)
```

#### AQM — R@U' · M2 — `[M2,U' R U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=Q(FR)  3=M(DB)
```

#### AQN — M@U' · R — `U':[U' M U,R]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=N(BD)
```

#### AQO — M2@D · R' — `[R',D M2 D']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=Q(FR)  3=O(DR)
```

#### AQP — S@U' · R — `E:[R,U' S U]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=P(RD)
```

#### AQS — E2@R · U' — `R:[U',R E2 R']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=S(FL)
```

#### AQT — U'@R · E — `[R U' R',E]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=T(LF)
```

#### AQW — U'@R · E2 — `[R U' R',E2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=W(BL)
```

#### AQX — E'@R · U' — `R:[U',R E' R']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f 2  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=X(LB)
```

#### AQY — S · R2 — `U R':[S,R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=Y(BR)
```

#### AQZ — R2@F · E — `[E,F R2 F']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 2  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Q(FR)  3=Z(RB)
```

#### ARC — S@R · F — `[F,R S R']` (8)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=C(UL)
```

#### ARD — S2@R' · F — `[F,R' S2 R]` (8)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=D(LU)
```

#### ARE — S'@R · U2 — `U':[R S' R',U2]` (9)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=E(UB)
```

#### ARF — R@U · M' — `[U R U',M']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=F(BU)
```

#### ARI — R2 · E — `R2 F:[R2,E]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=I(DF)
```

#### ARJ — R@U · M' — `M':[M',U R U']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=J(FD)
```

#### ARK — S'@R' · F — `[F,R' S' R]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=R(RF)  3=K(DL)
```

#### ARL — S2@R · F — `[F,R S2 R']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=L(LD)
```

#### ARM — R2 · E' — `U2 B:[E',R2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=R(RF)  3=M(DB)
```

#### ARN — B@E · F — `[F,E B E']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=N(BD)
```

#### ARO — E'@R · F' — `F':[R E' R',F']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=R(RF)  3=O(DR)
```

#### ARP — S@U' · R' — `[R',U' S U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=P(RD)
```

#### ARS — U@r · E — `[r U r',E]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=S(FL)
```

#### ART — R2 · E' — `E2 F:[R2,E']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=T(LF)
```

#### ARW — E@R · F' — `F':[R E R',F']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=W(BL)
```

#### ARX — R2 · E' — `R2 F:[E',R2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  2 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=X(LB)
```

#### ARY — S@R' · F — `[F,R' S R]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=Y(BR)
```

#### ARZ — E2@F' · R2 — `[R2,F' E2 F]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  2 r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=R(RF)  3=Z(RB)
```

#### ASC — E2@R · U' — `U':[U',R E2 R']` (9)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=C(UL)
```

#### ASD — E2@R · U' — `S:[R E2 R',U']` (10)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=D(LU)
```

#### ASE — E2@R · U2 — `U:[R E2 R',U2]` (9)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=E(UB)
```

#### ASF — B2@R · S — `u:[R B2 R',S]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=F(BU)
```

#### ASI — R2 · E — `U' D R':[E,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=I(DF)
```

#### ASJ — F'@U' · M — `[U' F' U,M]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=J(FD)
```

#### ASK — S'@R' · F — `E:[F,R' S' R]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=S(FL)  3=K(DL)
```

#### ASL — R2 · E — `S' U' R':[E,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=L(LD)
```

#### ASM — R2 · E — `U' D' R':[E,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=S(FL)  3=M(DB)
```

#### ASN — U'@R' · E2 — `B:[E2,R' U' R]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=N(BD)
```

#### ASO — R2 · E — `U' R':[E,R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=S(FL)  3=O(DR)
```

#### ASP — S@U' · R' — `E:[R',U' S U]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=P(RD)
```

#### ASQ — E2@R · U' — `R:[R E2 R',U']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=Q(FR)
```

#### ASR — U@r · E — `[E,r U r']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=R(RF)
```

#### ASW — R2 · E' — `E' F:[R2,E']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=W(BL)
```

#### ASX — F2@R' · E — `U':[R' F2 R,E]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  2 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=X(LB)
```

#### ASY — U'@R' · E2 — `[E2,R' U' R]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=Y(BR)
```

#### ASZ — S · R2 — `F U R:[S,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  2 f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=S(FL)  3=Z(RB)
```

#### ATC — S@R · F — `F:[R S R',F]` (9)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=C(UL)
```

#### ATD — RSR'E' · F' — `[F',R S R' E']` (10)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=D(LU)
```

#### ATE — E@R' · U2 — `U:[R' E R,U2]` (9)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=E(UB)
```

#### ATF — S@U' · F — `[U' S U,F]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=F(BU)
```

#### ATI — R2 · E — `E2 F:[R2,E]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=I(DF)
```

#### ATJ — D@R' · E — `F':[R' D R,E]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=J(FD)
```

#### ATK — S'@R' · F — `F:[R' S' R,F]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=T(LF)  3=K(DL)
```

#### ATL — S@U · F — `[U S U',F]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=L(LD)
```

#### ATM — R@U' · M2 — `E:[M2,U' R U]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=T(LF)  3=M(DB)
```

#### ATN — B'@E' · F' — `[F',E' B' E]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=N(BD)
```

#### ATO — E'@R · F' — `[F',R E' R']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=T(LF)  3=O(DR)
```

#### ATP — S'@U' · F — `[U' S' U,F]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=P(RD)
```

#### ATQ — U'@R · E — `[E,R U' R']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=Q(FR)
```

#### ATR — R2 · E' — `E2 F:[E',R2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=R(RF)
```

#### ATW — F'@R' · E — `[R' F' R,E]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=W(BL)
```

#### ATX — R2E'R2E' · F' — `[F',R2 E' R2 E']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l 2  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=X(LB)
```

#### ATY — S@R' · F — `F:[R' S R,F]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=Y(BR)
```

#### ATZ — R2@F · E2 — `[E2,F R2 F']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 2  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=T(LF)  3=Z(RB)
```

#### AWC — E@F' · U' — `[U',F' E F]` (8)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=C(UL)
```

#### AWD — S · R2 — `E' F R':[S,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=D(LU)
```

#### AWE — E2@R' · U2 — `U:[R' E2 R,U2]` (9)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=E(UB)
```

#### AWF — F'@E · B — `[E F' E',B]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=F(BU)
```

#### AWI — R2 · E — `E' F:[R2,E]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=I(DF)
```

#### AWJ — R2 · E' — `U' R F':[E',R2]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=J(FD)
```

#### AWK — R2@S · R — `u S':[R,S R2 S]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=W(BL)  3=K(DL)
```

#### AWL — S' · R2 — `E' F R:[S',R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=L(LD)
```

#### AWM — R2 · E' — `U' D' R:[E',R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=W(BL)  3=M(DB)
```

#### AWN — F'@E · B' — `[E F' E',B']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=N(BD)
```

#### AWO — R2 · E' — `U' R:[E',R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=W(BL)  3=O(DR)
```

#### AWP — S@u' · R — `E':[R,u' S u]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  · b 2
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=P(RD)
```

#### AWQ — U'@R · E2 — `[E2,R U' R']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=Q(FR)
```

#### AWR — E@R · F' — `F':[F',R E R']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=R(RF)
```

#### AWS — R2 · E' — `E' F:[E',R2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=S(FL)
```

#### AWT — F'@R' · E — `[E,R' F' R]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=T(LF)
```

#### AWY — E2@R' · U' — `R':[R' E2 R,U']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  3 b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=Y(BR)
```

#### AWZ — R2@F · E' — `[E',F R2 F']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 3  · b 2
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=W(BL)  3=Z(RB)
```

#### AXC — E2@F · U' — `[U',F E2 F']` (8)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=C(UL)
```

#### AXD — E'@R · U' — `S:[R E' R',U']` (10)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=D(LU)
```

#### AXE — E'@R · U2 — `U:[R E' R',U2]` (9)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=E(UB)
```

#### AXF — B2@R · S — `U:[R B2 R',S]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=F(BU)
```

#### AXI — F2 · E — `F':[E,F2]` (5)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=I(DF)
```

#### AXJ — R2 · E' — `D R' F:[R2,E']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=J(FD)
```

#### AXK — R2U2 · S' — `u R:[S',R2 U2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=X(LB)  3=K(DL)
```

#### AXL — R2 · E — `S' u' R':[E,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=L(LD)
```

#### AXM — U2 · M — `u R' U':[M,U2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=X(LB)  3=M(DB)
```

#### AXN — R2 · E — `u' R' B:[E,R2]` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=N(BD)
```

#### AXO — R2 · E — `u' R':[E,R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=X(LB)  3=O(DR)
```

#### AXP — R2 · E' — `R' F:[R2,E']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=P(RD)
```

#### AXQ — E'@R · U' — `R:[R E' R',U']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f 3  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=Q(FR)
```

#### AXR — R2 · E' — `R2 F:[R2,E']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  3 r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=R(RF)
```

#### AXS — U'@R' · E' — `E':[R' U' R,E']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  3 f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=S(FL)
```

#### AXT — R2E'R2E' · F' — `[R2 E' R2 E',F']` (10)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l 3  · f ·  · r ·  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=T(LF)
```

#### AXY — U'@R' · E' — `[E',R' U' R]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r ·  3 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=Y(BR)
```

#### AXZ — R2 · E' — `F:[R2,E']` (6)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
2 l ·  · f ·  · r 3  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=X(LB)  3=Z(RB)
```

#### AYC — S2@R · U — `[R S2 R',U]` (8)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=C(UL)
```

#### AYD — U'@r · S' — `R':[S',r U' r']` (9)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=D(LU)
```

#### AYE — U2 · S' — `R U':[S',U2]` (7)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=E(UB)
```

#### AYF — R'@U' · M — `[M,U' R' U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=F(BU)
```

#### AYI — u2@M · U — `R':[M u2 M,U]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=I(DF)
```

#### AYJ — R'@U' · M' — `[M',U' R' U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=J(FD)
```

#### AYK — U2 · S — `U R':[U2,S]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=K(DL)
```

#### AYL — ERS' · R — `U':[R,E R S']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=L(LD)
```

#### AYM — R@D' · M2 — `[D' R D,M2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=Y(BR)  3=M(DB)
```

#### AYN — F@E' · B — `[E' F E,B]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=N(BD)
```

#### AYO — M2@D · R — `[R,D M2 D']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=Y(BR)  3=O(DR)
```

#### AYP — S@u' · R' — `E':[R',u' S u]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=P(RD)
```

#### AYQ — S · R2 — `U R:[S,R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=Q(FR)
```

#### AYR — S@R' · F — `[R' S R,F]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=R(RF)
```

#### AYS — U'@R' · E2 — `[R' U' R,E2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=S(FL)
```

#### AYT — S@R' · F — `F:[F,R' S R]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=T(LF)
```

#### AYW — ER'S · R2 — `u:[R2,E R' S]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r ·  2 b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=W(BL)
```

#### AYX — U'@R' · E' — `[R' U' R,E']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r ·  2 b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Y(BR)  3=X(LB)
```

#### AZC — S'@R' · U — `[R' S' R,U]` (8)
```
      · · ·
      3 u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=C(UL)
```

#### AZD — S · R2 — `F R':[S,R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· 3 ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=D(LU)
```

#### AZE — S'@R' · U2 — `U':[R' S' R,U2]` (9)
```
      · 3 ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=E(UB)
```

#### AZF — R'@U · M' — `[U R' U',M']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · 3 ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=F(BU)
```

#### AZI — F2 · E' — `F:[E',F2]` (5)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · 3 ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=I(DF)
```

#### AZJ — R'@U · M' — `M':[M',U R' U']` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · 3 ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=J(FD)
```

#### AZK — R2 · E — `D F:[R2,E]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      3 d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=K(DL)
```

#### AZL — S' · R2 — `F R:[S',R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· 3 ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=L(LD)
```

#### AZM — R'@U · M2 — `M:[U R' U',M2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · 3 ·
  1=A(UF)  2=Z(RB)  3=M(DB)
```

#### AZN — S' · R2 — `F D R:[S',R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · 3 ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=N(BD)
```

#### AZO — R2 · E' — `u' R:[E',R2]` (7)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d 3
      · · ·
  1=A(UF)  2=Z(RB)  3=O(DR)
```

#### AZP — S@U' · R — `[R,U' S U]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · 3 ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=P(RD)
```

#### AZQ — R2@F · E — `[F R2 F',E]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f 3  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=Q(FR)
```

#### AZR — E2@F' · R2 — `[F' E2 F,R2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  3 r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=R(RF)
```

#### AZS — S · R2 — `F U R':[S,R2]` (9)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  3 f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=S(FL)
```

#### AZT — R2@F · E2 — `[F R2 F',E2]` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l 3  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=T(LF)
```

#### AZW — R2@F · E' — `[F R2 F',E']` (8)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
· l ·  · f ·  · r 2  · b 3
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=W(BL)
```

#### AZX — R2 · E' — `F:[E',R2]` (6)
```
      · · ·
      · u ·
      · 1 ·
· · ·  · · ·  · · ·  · · ·
3 l ·  · f ·  · r 2  · b ·
· · ·  · · ·  · · ·  · · ·
      · · ·
      · d ·
      · · ·
  1=A(UF)  2=Z(RB)  3=X(LB)
```
