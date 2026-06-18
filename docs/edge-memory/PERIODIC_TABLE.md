# Edge 3‑Style — Insert / Interchange Periodic Table

Across **all 1760 edge cases**, every pure‑memorability pick is `setup : [interchange , insert]`.
These two tables are the whole vocabulary — learn the pieces once, every case is a combination.

## Interchanges (the "swap" — usually 1 move)  — 25 distinct

| interchange | used in | nickname |
|---|---|---|
| `R2` | 256 | R2 |
| `E` | 226 | E |
| `E'` | 180 | E' |
| `R` | 119 | R |
| `S` | 109 | S |
| `U` | 99 | U |
| `R'` | 93 | R' |
| `M` | 84 | M |
| `U'` | 78 | U' |
| `S'` | 76 | S' |
| `M'` | 65 | M' |
| `D` | 55 | D |
| `F` | 53 | F |
| `E2` | 39 | E2 |
| `D'` | 38 | D' |
| `U2` | 34 | U2 |
| `F'` | 31 | F' |
| `B` | 27 | B |
| `S2` | 26 | S2 |
| `M2` | 19 | M2 |
| `B'` | 19 | B' |
| `F2` | 17 | F2 |
| `B2` | 9 | B2 |
| `D2` | 6 | D2 |
| `u'` | 2 | u' |

## Inserts (the "cycle" piece)  — 173 distinct

| insert | used in | nickname |
|---|---|---|
| `R2` | 254 | R2 |
| `S'` | 133 | S' |
| `U2` | 115 | U2 |
| `S` | 71 | S |
| `R S R'` | 38 | S@R |
| `R' S R` | 31 | S@R' |
| `R' S' R` | 27 | S'@R' |
| `R E' R'` | 27 | E'@R |
| `U' M U` | 23 | M@U' |
| `R E R'` | 22 | E@R |
| `R E2 R'` | 20 | E2@R |
| `R S2 R'` | 20 | S2@R |
| `R' E R` | 19 | E@R' |
| `R' E2 R` | 19 | E2@R' |
| `E R S'` | 19 | ERS' |
| `U R' U'` | 18 | R'@U |
| `E R' S` | 18 | ER'S |
| `R S' R'` | 17 | S'@R |
| `U' R U` | 17 | R@U' |
| `R B R'` | 15 | B@R |
| `R B2 R'` | 15 | B2@R |
| `S R2 S` | 15 | R2@S |
| `S R E` | 15 | SRE |
| `R B' R'` | 14 | B'@R |
| `R U R'` | 14 | U@R |
| `F2` | 14 | F2 |
| `U S U'` | 14 | S@U |
| `R' U' R` | 14 | U'@R' |
| `R' U2 R` | 14 | U2@R' |
| `M U2 M` | 13 | U2@M |
| `R' S2 R` | 13 | S2@R' |
| `U' S U` | 13 | S@U' |
| `U' R' U` | 13 | R'@U' |
| `R' D R` | 13 | D@R' |
| `M' U2 M'` | 12 | U2@M' |
| `F' E F` | 12 | E@F' |
| `R U2 R'` | 12 | U2@R |
| `R' D' R` | 12 | D'@R' |
| `E' R' S'` | 12 | E'R'S' |
| `R' U R` | 11 | U@R' |
| `U R U'` | 11 | R@U |
| `U M' U'` | 11 | M'@U |
| `R' F2 R` | 11 | F2@R' |
| `E' R S` | 11 | E'RS |
| `S' R' E` | 11 | S'R'E |
| `U' M2 U` | 11 | M2@U' |
| `S R' E'` | 11 | SR'E' |
| `F E F'` | 10 | E@F |
| `R F R'` | 10 | F@R |
| `U M2 U'` | 10 | M2@U |
| `S' R E'` | 10 | S'RE' |
| `E R2 E` | 10 | R2@E |
| `S' R2 S'` | 9 | R2@S' |
| `r' U r` | 9 | U@r' |
| `R' F R` | 8 | F@R' |
| `r' U' r` | 8 | U'@r' |
| `R' E' R` | 8 | E'@R' |
| `R' F' R` | 7 | F'@R' |
| `R' B R` | 7 | B@R' |
| `S U' M` | 7 | SU'M |
| `E' F' E` | 7 | F'@E' |
| `R D R'` | 7 | D@R |
| `F D F'` | 7 | D@F |
| `E' R2 E'` | 7 | R2@E' |
| `F E2 F'` | 6 | E2@F |
| `B E' B'` | 6 | E'@B |
| `E B E'` | 6 | B@E |
| `R U' R'` | 6 | U'@R |
| `F R2 F'` | 6 | R2@F |
| `F' E2 F` | 6 | E2@F' |
| `r' D r` | 6 | D@r' |
| `R' B' R` | 6 | B'@R' |
| `U M U'` | 6 | M@U |
| `B' E' B` | 6 | E'@B' |
| `F' U F` | 6 | U@F' |
| `F' E' F` | 6 | E'@F' |
| `F' D F` | 6 | D@F' |
| `S' U M` | 5 | S'UM |
| `r U' r'` | 5 | U'@r |
| `S U M'` | 5 | SUM' |
| `U' F U` | 5 | F@U' |
| `r U r'` | 5 | U@r |
| `R2 U2` | 5 | R2U2 |
| `B' E B` | 5 | E@B' |
| `r D' r'` | 5 | D'@r |
| `B E B'` | 5 | E@B |
| `B U B'` | 5 | U@B |
| `B' U B` | 5 | U@B' |
| `R F' R'` | 5 | F'@R |
| `M' U' S` | 5 | M'U'S |
| `B E2 B'` | 5 | E2@B |
| `F U F'` | 5 | U@F |
| `B D B'` | 5 | D@B |
| `B' D B` | 5 | D@B' |
| `M U' S'` | 4 | MU'S' |
| `M` | 4 | M |
| `U' R2 U` | 4 | R2@U' |
| `U R2 U'` | 4 | R2@U |
| `E F' E'` | 4 | F'@E |
| `U' F' U` | 4 | F'@U' |
| `U2 R2` | 4 | U2R2 |
| `E' B' E` | 4 | B'@E' |
| `D M2 D'` | 4 | M2@D |
| `U' S' U` | 4 | S'@U' |
| `R2 E' R2 E'` | 4 | R2E'R2E' |
| `B' E2 B` | 4 | E2@B' |
| `D R D'` | 4 | R@D |
| `S u' S'` | 4 | u'@S |
| `U' B U` | 4 | B@U' |
| `D' M2 D` | 4 | M2@D' |
| `M U S` | 4 | MUS |
| `B D' B'` | 4 | D'@B |
| `F D' F'` | 4 | D'@F |
| `B R2 B'` | 4 | R2@B |
| `F' r U` | 3 | F'rU |
| `U' M' U` | 3 | M'@U' |
| `M u2 M` | 3 | u2@M |
| `M' U S'` | 3 | M'US' |
| `F r U'` | 3 | FrU' |
| `F' U' F` | 3 | U'@F' |
| `F U' F'` | 3 | U'@F |
| `S' u S` | 3 | u@S' |
| `B' R2 B` | 3 | R2@B' |
| `R2 E R2 E` | 3 | R2ER2E |
| `R S R' E'` | 2 | RSR'E' |
| `M'` | 2 | M' |
| `S u S'` | 2 | u@S |
| `r' D' r` | 2 | D'@r' |
| `D' R D` | 2 | R@D' |
| `S' u' S` | 2 | u'@S' |
| `E' F E` | 2 | F@E' |
| `u' S u` | 2 | S@u' |
| `S' D' S` | 2 | D'@S' |
| `r S' r'` | 2 | S'@r |
| `U' r' F` | 2 | U'r'F |
| `E B' E'` | 2 | B'@E |
| `E' B E` | 2 | B@E' |
| `E F E'` | 2 | F@E |
| `u' R u` | 2 | R@u' |
| `u S u'` | 2 | S@u |
| `F E' F'` | 2 | E'@F |
| `U F' U'` | 2 | F'@U |
| `u M' u'` | 2 | M'@u |
| `D' R' D` | 2 | R'@D' |
| `B U' B'` | 2 | U'@B |
| `r E' r'` | 2 | E'@r |
| `B' U' B` | 2 | U'@B' |
| `R E R' S` | 2 | RER'S |
| `R' E' R S` | 2 | R'E'RS |
| `B' D' B` | 2 | D'@B' |
| `U' B' U` | 2 | B'@U' |
| `R' D2 R` | 2 | D2@R' |
| `F' D' F` | 2 | D'@F' |
| `R D' R'` | 2 | D'@R |
| `E'` | 2 | E' |
| `F' R2 F` | 2 | R2@F' |
| `r' S' r` | 1 | S'@r' |
| `u R' u'` | 1 | R'@u |
| `E' r S` | 1 | E'rS |
| `E r' S` | 1 | Er'S |
| `r S2 r'` | 1 | S2@r |
| `S' U' M'` | 1 | S'U'M' |
| `u' M u` | 1 | M@u' |
| `u' R' u` | 1 | R'@u' |
| `r' E r` | 1 | E@r' |
| `u R u'` | 1 | R@u |
| `E' r' S'` | 1 | E'r'S' |
| `E r S'` | 1 | ErS' |
| `S r E` | 1 | SrE |
| `S r' E'` | 1 | Sr'E' |
| `S2 R' U2 R` | 1 | S2R'U2R |
| `E` | 1 | E |
| `E R' S' R` | 1 | ER'S'R |

## Cores (interchange × insert combos)  — 437 distinct shapes

| core shape | name | # cases | cases |
|---|---|---|---|
| `[R2,S']` | S' · R2 | 133 | ADL AFK AFL AKF AKO ALD ALF ALM ALP ALQ ALW ALZ AML ANZ …(+119) |
| `[E,R2]` | R2 · E | 130 | ADO AIR AIS AIT AIW AKZ ALS ALX AMS ANX AOD AOI AOS AOX …(+116) |
| `[E',R2]` | R2 · E' | 124 | AJW AJX AMR AMW AOW AOZ APX ARM ART ARX ASW ATR AWJ AWM …(+110) |
| `[R2,S]` | S · R2 | 71 | ADM ADW ADZ AEL ALE APD AQY ASZ AWD AYQ AZD AZS CFT CFW …(+57) |
| `[M,U2]` | U2 · M | 49 | ACE ADN AEC AEM AKN AME AMX AND ANK ANO AON AXM CEK CFJ …(+35) |
| `[M',U2]` | U2 · M' | 33 | ACK AJK AKC AKJ CFI CIF CIN CIQ CIY CJK CKJ CKM CMK CNI …(+19) |
| `[S,U2]` | U2 · S | 25 | ADE AED AEK AIL AKE AKQ AKY ALI AQK AYK CKQ CKX CKY CQK …(+11) |
| `[E R S',R]` | ERS' · R | 10 | ALY AYL EXL GLR GLS GLY GRL GSL GXL GYL |
| `[R,U' M U]` | M@U' · R | 10 | ANQ AQN ENZ GBN GNB GNQ GNT GQN ONQ OQN |
| `[R' E R,U]` | E@R' · U | 10 | CET CFS CSF ETY EYT GET GTE GTN SMZ SZM |
| `[R B R',S]` | B@R · S | 9 | AFM AFN AMF ANF CZJ GDN GDP GND GPD |
| `[E,F2]` | F2 · E | 9 | AIX AXI CIX CXT GSW GWS OTX QSW QWS |
| `[R' E2 R,U]` | E2@R' · U | 9 | CEW CFX CWE CXF EWY EYW GEW GWE GWN |
| `[R,S' R E']` | S'RE' · R | 9 | CWR ESZ GDX GQX GXQ KQX KXQ ORW OWR |
| `[R E2 R',U']` | E2@R · U' | 8 | ACS ADS AQS ASC ASD ASQ GAS GSA |
| `[S',U2]` | U2 · S' | 8 | AEO AEQ AEY AOE AQE AYE GBF GFB |
| `[F,R' S' R]` | S'@R' · F | 8 | AKR AKS AKT ARK ASK ATK GBL GLB |
| `[E R' S,R']` | ER'S · R' | 8 | APW CPQ CPT CPW CPZ CQP CTP CZP |
| `[R,S R2 S]` | R2@S · R | 8 | AWK CZK GDK GKY GLD GYK OKY OYK |
| `[B,R' S R]` | S@R' · B | 8 | CJZ CMP CMX CMZ CPM CXM CZM GDE |
| `[E' R S,R]` | E'RS · R | 8 | CPR CPS CPX CPY CRP CXP CYP EPS |
| `[R',S' R' E]` | S'R'E · R' | 8 | CSZ GDT GTY GYT KTY KYT OSZ OZS |
| `[R,S R E]` | SRE · R | 8 | CTY CYT GSZ GZS KSZ OLT OTY OYT |
| `[M,U' R U]` | R@U' · M | 7 | AFQ AQF ENR ERN GAF GFM GMF |
| `[R B2 R',S]` | B2@R · S | 7 | AFS AFX ASF AXF GDW GWD GWQ |
| `[M',U R' U']` | R'@U · M' | 7 | AFZ AJZ AZF AZJ GBI GEB GIB |
| `[R E' R',U]` | E'@R · U | 7 | CEX CXE EQX EXQ GEX GXB GXE |
| `[R,S' R2 S']` | R2@S' · R | 7 | CKP CKR EKS GCQ GDL GKD GQC |
| `[M,U R' U']` | R'@U · M | 7 | CNY CYN ENY EXN EYN GBE GRN |
| `[R',S R2 S]` | R2@S · R' | 7 | CPK CRK ESK GKQ GQK OKQ OQK |
| `[M U2 M,U]` | U2@M · U | 7 | EJN GAI GEI GIA GIE GJN QJN |
| `[R',U M' U']` | M'@U · R' | 7 | EJY EYJ GJY GYJ GYS OJY OYJ |
| `[M U2 M,U']` | U2@M · U' | 6 | ACI AIC AJN CEI CIE CJN |
| `[M' U2 M',U]` | U2@M' · U | 6 | ACM AMC ANJ CEM CME CNJ |
| `[R E' R',U']` | E'@R · U' | 6 | ADX AQX AXD AXQ GAX GXA |
| `[E,R U R']` | U@R · E | 6 | AFJ AJF EQT ETQ ETW EWT |
| `[R F R',S']` | F@R · S' | 6 | AJM AKP AMJ APK GKP GPK |
| `[M',U' R' U]` | R'@U' · M' | 6 | AJY AYJ GJM GXJ YJM YMJ |
| `[D,R' S R]` | S@R' · D | 6 | AKM AMK ELO KMR KRJ KRM |
| `[R S2 R',U']` | S2@R · U' | 6 | CEY CYE GEY GFZ GYE GZF |
| `[D',R S R']` | S@R · D' | 6 | EIK EKI GML KIZ KZI KZN |
| `[R' B' R,S']` | B'@R' · S' | 6 | EIN EJM EKP EMJ ENI EPK |
| `[B',R S' R']` | S'@R · B' | 6 | EKW EKZ EWK EZK GFL GLF |
| `[E' R' S',R']` | E'R'S' · R' | 6 | ELQ GLQ GLZ GQL GTL GZL |
| `[M' U2 M',U']` | U2@M' · U' | 6 | ENJ GAM GEM GMA GME YNJ |
| `[R',U' M U]` | M@U' · R' | 6 | ENX GNR GNY GYN ONY OYN |
| `[R',U S U']` | S@U · R' | 6 | EPR ERP EYP GFQ GQF OWQ |
| `[E R2 E,R]` | R2@E · R | 6 | EXT GQW GXT GYW QXT SZW |
| `[R,U' M2 U]` | M2@U' · R | 6 | GBR GIQ GQI GRB OIQ OQI |
| `[R',S R' E']` | SR'E' · R' | 6 | GRW GWR KWR OLX OQX OXQ |
| `[B,R S R']` | S@R · B | 6 | KQZ OQZ QMZ QZM SNX SXN |
| `[R' S2 R,U]` | S2@R' · U | 5 | ACQ AQC COJ GAQ GQA |
| `[R E' R',U2]` | E'@R · U2 | 5 | AEX AXE CKW CQX CXQ |
| `[R' F' R,S]` | F'@R' · S | 5 | AFI AIF GAD GDJ GJD |
| `[E',F2]` | F2 · E' | 5 | AIP AIQ AIZ API AZI |
| `[M2,U' R U]` | R@U' · M2 | 5 | AMQ AQM ATM ERI GZM |
| `[R,U M2 U']` | M2@U · R | 5 | AMT EMQ GMQ GMZ GQM |
| `[R',U' S U]` | S@U' · R' | 5 | APR ARP ASP GBQ GQB |
| `[R,U' S U]` | S@U' · R | 5 | APZ AQP AZP GBY GYB |
| `[E,R' F2 R]` | F2@R' · E | 5 | ASX GSX GXS SXY SYX |
| `[R2 U2,S']` | R2U2 · S' | 5 | AXK CSK CWK ETK GOY |
| `[E R' S,R2]` | ER'S · R2 | 5 | AYW CFN CNF CTX CYW |
| `[E R' S,R]` | ER'S · R | 5 | CRW GDY GPX GXD GYD |
| `[E2,R U R']` | U@R · E2 | 5 | EJW EQW EWJ EWQ GNW |
| `[R,U S U']` | S@U · R | 5 | EPZ EWP EZP GFY GYF |
| `[M' U' S,U']` | M'U'S · U' | 5 | EQL GEL GIL GLE GNL |
| `[E R S',R2]` | ERS' · R2 | 5 | GOL GWK KTX KXT KYW |
| `[R' D' R,S]` | D'@R' · S | 5 | KJM KMJ KNZ OJL OLJ |
| `[D,R S R']` | S@R · D | 5 | KMX KMZ KXM KZM OMZ |
| `[D,R' S2 R]` | S2@R' · D | 5 | KMY KYM OMY ONZ OZN |
| `[R B' R',S]` | B'@R · S | 4 | ACF AFC GDF GFD |
| `[R S R',U]` | S@R · U | 4 | ACL ALC CLT CTL |
| `[R' U R,S2]` | U@R' · S2 | 4 | ACO AOC GBK GKB |
| `[M U' S',U']` | MU'S' · U' | 4 | ACP APC CJP CPF |
| `[F,R S R']` | S@R · F | 4 | ACR ACT ARC ATC |
| `[E,R U2 R']` | U2@R · E | 4 | ADJ AJD CQT CTQ |
| `[R E R',U2]` | E@R · U2 | 4 | AEP APE GCP GPC |
| `[R E2 R',U2]` | E2@R · U2 | 4 | AES ASE GCS GSC |
| `[R' E2 R,U2]` | E2@R' · U2 | 4 | AEW AWE GCW GWC |
| `[R' S' R,U2]` | S'@R' · U2 | 4 | AEZ AZE GCZ GZC |
| `[M',U R U']` | R@U · M' | 4 | AFR AJR ARF ARJ |
| `[R,U M' U']` | M'@U · R | 4 | AJT GJZ OJQ OQJ |
| `[S',U2 R2]` | U2R2 · S' | 4 | AKX CKT KIM KMI |
| `[B E' B',R2]` | E'@B · R2 | 4 | AMO AOM GMO GOM |
| `[R' B R,S]` | B@R' · S | 4 | AMP APM GMP GPM |
| `[E B E',F]` | B@E · F | 4 | ANR ARN GBM GMB |
| `[E2,R' U' R]` | U'@R' · E2 | 4 | ANS ASN ASY AYS |
| `[F',R E' R']` | E'@R · F' | 4 | AOR AOT ARO ATO |
| `[F,R' S R]` | S@R' · F | 4 | ARY ATY AYR AYT |
| `[E',R' U' R]` | U'@R' · E' | 4 | AXS AXY AYX GJX |
| `[R' U' R,S2]` | U'@R' · S2 | 4 | CEO COE GFK GKF |
| `[B',R' S R]` | S@R' · B' | 4 | CEZ CNZ CZE GDA |
| `[F',R S R']` | S@R · F' | 4 | CIP CIR CPI CRI |
| `[R U2 R',S]` | U2@R · S | 4 | CLO CLQ COL CQL |
| `[R' U2 R,S]` | U2@R' · S | 4 | CLS CLY CSL CYL |
| `[R' U2 R,S']` | U2@R' · S' | 4 | COZ CZO GDZ GZD |
| `[S U' M,U]` | SU'M · U | 4 | CPN GEN GNE GNI |
| `[F' E F,R2]` | E@F' · R2 | 4 | EIO EOI GIO GOI |
| `[R F' R',S]` | F'@R · S | 4 | EIP EPI GIP GPI |
| `[B',E' F' E]` | F'@E' · B' | 4 | EJZ EZJ GFI GIF |
| `[M,U R U']` | R@U · M | 4 | ENQ EQN QIN QNI |
| `[R E2 R',U]` | E2@R · U | 4 | EQS ESQ GES GSE |
| `[R' E R,U']` | E@R' · U' | 4 | EZS GAT GTA GTF |
| `[M U S,U]` | MUS · U | 4 | GAL GJL GLA GLM |
| `[R B' R',S']` | B'@R · S' | 4 | GFJ GFP GJF GPF |
| `[E',R D R']` | D@R · E' | 4 | GIX GXI YIX YXI |
| `[R2,S R E]` | SRE · R2 | 4 | GKS OKS SIM SMI |
| `[E,R B' R']` | B'@R · E | 4 | GMX GXM YMX YXM |
| `[R' F2 R,S']` | F2@R' · S' | 4 | GPS GSP QTZ QZT |
| `[R B2 R',S']` | B2@R · S' | 4 | GPW GWP QWZ QZW |
| `[E' R2 E',R']` | R2@E' · R' | 4 | GQS GSQ GSY QTX |
| `[R' D R,S]` | D@R' · S | 4 | KIN KNI OLN ONL |
| `[D',R S2 R']` | S2@R · D' | 4 | KIQ KQI OJR ORJ |
| `[E R S',R']` | ERS' · R' | 4 | KRW OLY OXL OYL |
| `[E' R' S',R]` | E'R'S' · R | 4 | KZS OLQ OQL OTL |
| `[D,R E R']` | E@R · D | 4 | OIT OTI SJZ SZJ |
| `[D,R' E' R]` | E'@R' · D | 4 | OIX OXI QIX QXI |
| `[D',R E R']` | E@R · D' | 4 | OMT OTM SNZ SZN |
| `[E R2 E,R']` | R2@E · R' | 4 | OQW OWY OXT OYW |
| `[R' S' R,U]` | S'@R' · U | 3 | ACZ AZC CZF |
| `[R S' R',U']` | S'@R · U' | 3 | ADQ CER CRE |
| `[R' E R,U2]` | E@R' · U2 | 3 | AET ATE CKS |
| `[M,U' R' U]` | R'@U' · M | 3 | AFY AYF EZN |
| `[F2,R E' R']` | E'@R · F2 | 3 | AIO ORT OTR |
| `[F2,R' S R]` | S@R' · F2 | 3 | AIY QSZ QZS |
| `[M,U' F U]` | F@U' · M | 3 | AJQ AQJ OMJ |
| `[M2,U R' U']` | R'@U · M2 | 3 | AMZ AZM EXI |
| `[E,R U' R']` | U'@R · E | 3 | AQT ATQ GFT |
| `[E2,R U' R']` | U'@R · E2 | 3 | AQW AWQ GFW |
| `[E,r U r']` | U@r · E | 3 | ARS ASR GBT |
| `[E,R' D R]` | D@R' · E | 3 | ATJ QIT QTI |
| `[M u2 M,U]` | u2@M · U | 3 | AYI GNJ QNJ |
| `[M' U S',U]` | M'US' · U | 3 | CEP CNP CPE |
| `[S2,r' U r]` | U@r' · S2 | 3 | CFO CFY COF |
| `[R' F R,S']` | F@R' · S' | 3 | CFP GBP GPB |
| `[R' D' R,S2]` | D'@R' · S2 | 3 | CJO GIK GKI |
| `[S',r' U' r]` | U'@r' · S' | 3 | CNR GDM GMD |
| `[R S' R',U]` | S'@R · U | 3 | CRJ GAR GRA |
| `[R,S' R' E]` | S'R'E · R | 3 | CSP GQT GTQ |
| `[R' S' R,U']` | S'@R' · U' | 3 | CZN GEZ GZE |
| `[R',U' M2 U]` | M2@U' · R' | 3 | EIX GIY GYI |
| `[S,U' R U]` | R@U' · S | 3 | EPW GPZ GZP |
| `[S,U' R' U]` | R'@U' · S | 3 | EPY GPR GRP |
| `[E2,R' U R]` | U@R' · E2 | 3 | ESY EXR EYS |
| `[E',r' U' r]` | U'@r' · E' | 3 | EWZ EZW GFX |
| `[R' F R,S]` | F@R' · S | 3 | GBD GDB GED |
| `[B,E' F' E]` | F'@E' · B | 3 | GIN YIN YNI |
| `[R',S R E]` | SRE · R' | 3 | GLT OQT OTQ |
| `[R,S R' E']` | SR'E' · R | 3 | GLX KWZ OYX |
| `[R',U M2 U']` | M2@U · R' | 3 | GMY GYM OYM |
| `[E',r' U r]` | U@r' · E' | 3 | GNX YNX YXN |
| `[E',F D F']` | D@F · E' | 3 | GPL KRY KYR |
| `[E,F U F']` | U@F · E | 3 | GTW GWT SXZ |
| `[D',R' S R]` | S@R' · D' | 3 | KIR KRI OML |
| `[D2,R S R']` | S@R · D2 | 3 | OKZ OZK YJN |
| `[E' R2 E',R]` | R2@E' · R | 3 | OSQ OSY SWZ |
| `[F E F',U']` | E@F · U' | 2 | ACJ AJC |
| `[S' U M,U]` | S'UM · U | 2 | ACN ANC |
| `[F' E F,U']` | E@F' · U' | 2 | ACW AWC |
| `[F E2 F',U']` | E2@F · U' | 2 | ACX AXC |
| `[R S2 R',U]` | S2@R · U | 2 | ACY AYC |
| `[F2,U' M U]` | M@U' · F2 | 2 | ADI AID |
| `[S,r U' r']` | U'@r · S | 2 | ADK AKD |
| `[F,R' S2 R]` | S2@R' · F | 2 | ADR ARD |
| `[F',R S R' E']` | RSR'E' · F' | 2 | ADT ATD |
| `[F2,M]` | M · F2 | 2 | AEI AIE |
| `[S U M',U2]` | SUM' · U2 | 2 | AEJ AJE |
| `[R S' R',U2]` | S'@R · U2 | 2 | AER ARE |
| `[M,U' R2 U]` | R2@U' · M | 2 | AFO AOF |
| `[M',U R2 U']` | R2@U · M' | 2 | AFP APF |
| `[F,U' S U]` | S@U' · F | 2 | AFT ATF |
| `[B,E F' E']` | F'@E · B | 2 | AFW AWF |
| `[F2,R' S' R]` | S'@R' · F2 | 2 | AIK AKI |
| `[F2,U' M' U]` | M'@U' · F2 | 2 | AIN ANI |
| `[D,F' E F]` | E@F' · D | 2 | AJL ALJ |
| `[M',U' R2 U]` | R2@U' · M' | 2 | AJO AOJ |
| `[D',F' E F]` | E@F' · D' | 2 | AJP APJ |
| `[M,U' F' U]` | F'@U' · M | 2 | AJS ASJ |
| `[R',S' R2 S']` | R2@S' · R' | 2 | AKW CKZ |
| `[D,S u S']` | u@S · D | 2 | ALN ANL |
| `[S,r' D' r]` | D'@r' · S | 2 | ALO AOL |
| `[F,R S2 R']` | S2@R · F | 2 | ALR ARL |
| `[F,U S U']` | S@U · F | 2 | ALT ATL |
| `[D2,M]` | M · D2 | 2 | AMI CIM |
| `[D' R D,M2]` | R@D' · M2 | 2 | AMY AYM |
| `[D',S' u' S]` | u'@S' · D' | 2 | ANP APN |
| `[E' B' E,F']` | B'@E' · F' | 2 | ANT ATN |
| `[B',E F' E']` | F'@E · B' | 2 | ANW AWN |
| `[B,E' F E]` | F@E' · B | 2 | ANY AYN |
| `[D M2 D',R']` | M2@D · R' | 2 | AOQ AQO |
| `[D M2 D',R]` | M2@D · R | 2 | AOY AYO |
| `[F,U' S' U]` | S'@U' · F | 2 | APT ATP |
| `[E,F R2 F']` | R2@F · E | 2 | AQZ AZQ |
| `[F',R E R']` | E@R · F' | 2 | ARW AWR |
| `[F' E2 F,R2]` | E2@F' · R2 | 2 | ARZ AZR |
| `[E,R' F' R]` | F'@R' · E | 2 | ATW AWT |
| `[F',R2 E' R2 E']` | R2E'R2E' · F' | 2 | ATX AXT |
| `[E2,F R2 F']` | R2@F · E2 | 2 | ATZ AZT |
| `[R' E2 R,U']` | E2@R' · U' | 2 | AWY GWF |
| `[E',F R2 F']` | R2@F · E' | 2 | AWZ AZW |
| `[S' D' S,u']` | D'@S' · u' | 2 | CEJ CJE |
| `[R S R',U']` | S@R · U' | 2 | CEL CLE |
| `[S' U M,U']` | S'UM · U' | 2 | CEN GLN |
| `[B' E B,U]` | E@B' · U | 2 | CEQ CQE |
| `[B E' B',U]` | E'@B · U | 2 | CES CSE |
| `[S,r' U r]` | U@r' · S | 2 | CFL CLF |
| `[E',R' U2 R]` | U2@R' · E' | 2 | CFM CMF |
| `[S',r' D r]` | D@r' · S' | 2 | CIL CLI |
| `[F',U M2 U']` | M2@U · F' | 2 | CIT CTI |
| `[R' D' R,S']` | D'@R' · S' | 2 | CJL CLJ |
| `[F r U',M']` | FrU' · M' | 2 | CJM CMJ |
| `[F,U' M U]` | M@U' · F | 2 | CJQ CQJ |
| `[F',U' M U]` | M@U' · F' | 2 | CJS CSJ |
| `[S',r D' r']` | D'@r · S' | 2 | CLM CML |
| `[R' D R,S']` | D@R' · S' | 2 | CLN CNL |
| `[S,U' F' U]` | F'@U' · S | 2 | CLR CRL |
| `[D,R' S' R]` | S'@R' · D | 2 | CLW CWL |
| `[R' S R,U']` | S@R' · U' | 2 | CLX CXL |
| `[S2,r' U' r]` | U'@r' · S2 | 2 | CNO CON |
| `[R U2 R',S']` | U2@R · S' | 2 | COR CRO |
| `[B U B',E]` | U@B · E | 2 | CQZ CZQ |
| `[E,F' U' F]` | U'@F' · E | 2 | CRS CSR |
| `[E,R' U2 R]` | U2@R' · E | 2 | CRY CYR |
| `[B' U B,E']` | U@B' · E' | 2 | CSX CXS |
| `[E,F U' F']` | U'@F · E | 2 | CTW CWT |
| `[B U B',E']` | U@B · E' | 2 | CWZ CZW |
| `[B' U B,E]` | U@B' · E | 2 | CXY CYX |
| `[E' R S,R']` | E'RS · R' | 2 | CZS GTD |
| `[M2,U R U']` | R@U · M2 | 2 | EIQ EQI |
| `[M2,U' r' F]` | U'r'F · M2 | 2 | EIS ESI |
| `[D R D',M2]` | R@D · M2 | 2 | EIY EYI |
| `[D',S u' S']` | u'@S · D' | 2 | EJL ELJ |
| `[D,S' u S]` | u@S' · D | 2 | EJP EPJ |
| `[E B' E',F']` | B'@E · F' | 2 | EJQ EQJ |
| `[E' B E,F]` | B@E' · F | 2 | EJS ESJ |
| `[B,E F E']` | F@E · B | 2 | EJX EXJ |
| `[D,S u' S']` | u'@S · D | 2 | ELN ENL |
| `[M,U R2 U']` | R2@U · M | 2 | ENO EON |
| `[M',U' B U]` | B@U' · M' | 2 | ENW EWN |
| `[D' M2 D,R']` | M2@D' · R' | 2 | EOQ EQO |
| `[E,R' B R]` | B@R' · E | 2 | EOX EXO |
| `[D' M2 D,R]` | M2@D' · R | 2 | EOY EYO |
| `[E',R U R']` | U@R · E' | 2 | EQZ EZQ |
| `[B' R2 B,E]` | R2@B' · E | 2 | ERS ESR |
| `[E,R' U R]` | U@R' · E | 2 | ERY EYR |
| `[E',R B R']` | B@R · E' | 2 | ESX EXS |
| `[E,R B R']` | B@R · E | 2 | EXY EYX |
| `[F E F',U]` | E@F · U | 2 | GAJ GJA |
| `[S U' M,U']` | SU'M · U' | 2 | GAN GNA |
| `[F E F',R2]` | E@F · R2 | 2 | GAO GOA |
| `[R F R',S]` | F@R · S | 2 | GAP GPA |
| `[F' E F,U]` | E@F' · U | 2 | GAW GWA |
| `[F E' F',U]` | E'@F · U | 2 | GAY GYA |
| `[F' E2 F,U]` | E2@F' · U | 2 | GAZ GZA |
| `[F',R E2 R']` | E2@R · F' | 2 | GBS GSB |
| `[R S R',U2]` | S@R · U2 | 2 | GCL GLC |
| `[R S2 R',U2]` | S2@R · U2 | 2 | GCY GYC |
| `[S',r U r']` | U@r · S' | 2 | GDI GID |
| `[R2,U M U']` | M@U · R2 | 2 | GDO GOD |
| `[R,U M U']` | M@U · R | 2 | GDQ GQD |
| `[S,U F' U']` | F'@U · S | 2 | GDR GRD |
| `[R' F2 R,S]` | F2@R' · S | 2 | GDS GSD |
| `[S U M',U]` | SUM' · U | 2 | GEJ GJE |
| `[B' E' B,R2]` | E'@B' · R2 | 2 | GEO GOE |
| `[R E R',U]` | E@R · U | 2 | GEP GPE |
| `[B' E B,U']` | E@B' · U' | 2 | GEQ GQE |
| `[B E2 B',U']` | E2@B · U' | 2 | GER GRE |
| `[M',U' R U]` | R@U' · M' | 2 | GFA GZJ |
| `[F,U' M2 U]` | M2@U' · F | 2 | GIR GRI |
| `[F,R' E' R]` | E'@R' · F | 2 | GIT GTI |
| `[S2,r' D r]` | D@r' · S2 | 2 | GJK GKJ |
| `[D,R' E R]` | E@R' · D | 2 | GJP GPJ |
| `[F,U M U']` | M@U · F | 2 | GJQ GQJ |
| `[F,R E2 R']` | E2@R · F | 2 | GJS GSJ |
| `[R' D R,S2]` | D@R' · S2 | 2 | GKM GMK |
| `[S2,r D' r']` | D'@r · S2 | 2 | GKN GNK |
| `[R U2 R',S2]` | U2@R · S2 | 2 | GKR GRK |
| `[R2,S R' E']` | SR'E' · R2 | 2 | GKW OKW |
| `[R' U2 R,S2]` | U2@R' · S2 | 2 | GKZ GZK |
| `[B2,R S' R']` | S'@R · B2 | 2 | GLW GWL |
| `[R B R',S']` | B@R · S' | 2 | GNP GPN |
| `[D R D',S']` | R@D · S' | 2 | GPQ GQP |
| `[R E R',U']` | E@R · U' | 2 | GPT GTP |
| `[D' R' D,S']` | R'@D' · S' | 2 | GPY GYP |
| `[B U' B',E]` | U'@B · E | 2 | GQZ GZQ |
| `[E,F' U F]` | U@F' · E | 2 | GRS GSR |
| `[E2,F' U F]` | U@F' · E2 | 2 | GRX GXR |
| `[E',F' U F]` | U@F' · E' | 2 | GRY GYR |
| `[E' R' S',R2]` | E'R'S' · R2 | 2 | GSK KQS |
| `[E2,F U F']` | U@F · E2 | 2 | GTZ GZT |
| `[E,R B2 R']` | B2@R · E | 2 | GWZ GZW |
| `[B' U' B,E]` | U'@B' · E | 2 | GXY GYX |
| `[M,U' B U]` | B@U' · M | 2 | INW IWN |
| `[D',R E R' S]` | RER'S · D' | 2 | KIS KSI |
| `[F',R' S' R]` | S'@R' · F' | 2 | KIT KTI |
| `[D,F E F']` | E@F · D | 2 | KIW KWI |
| `[D,F' E2 F]` | E2@F' · D | 2 | KIX KXI |
| `[D,F' E' F]` | E'@F' · D | 2 | KIY KYI |
| `[F',R S2 R']` | S2@R · F' | 2 | KJQ KQJ |
| `[D,R S2 R']` | S2@R · D | 2 | KMQ KQM |
| `[B' E' B,D']` | E'@B' · D' | 2 | KMS KSM |
| `[B E2 B',D']` | E2@B · D' | 2 | KMT KTM |
| `[D,R' E' R S]` | R'E'RS · D | 2 | KMW KWM |
| `[E',F' D F]` | D@F' · E' | 2 | KQT KTQ |
| `[E,F D F']` | D@F · E | 2 | KRS KSR |
| `[E2,F D F']` | D@F · E2 | 2 | KRX KXR |
| `[B D' B',E']` | D'@B · E' | 2 | KSX KXS |
| `[E,F' D F]` | D@F' · E | 2 | KTW KWT |
| `[E2,F' D F]` | D@F' · E2 | 2 | KTZ KZT |
| `[B D' B',E]` | D'@B · E | 2 | KXY KYX |
| `[S,r' D r]` | D@r' · S | 2 | OIL OLI |
| `[F,R E' R']` | E'@R · F | 2 | OIR ORI |
| `[D,R' E2 R]` | E2@R' · D | 2 | OIS OSI |
| `[D',F E F']` | E@F · D' | 2 | OIW OWI |
| `[D',F' E' F]` | E'@F' · D' | 2 | OIY OYI |
| `[D',F E2 F']` | E2@F · D' | 2 | OIZ OZI |
| `[F,R' E2 R]` | E2@R' · F | 2 | OJS OSJ |
| `[R' D2 R,S]` | D2@R' · S | 2 | OLR ORL |
| `[B E B',D]` | E@B · D | 2 | OMQ OQM |
| `[B' E2 B,D]` | E2@B' · D | 2 | OMR ORM |
| `[B' E' B,D]` | E'@B' · D | 2 | OMS OSM |
| `[D',R' E' R]` | E'@R' · D' | 2 | OMX OXM |
| `[E,F D' F']` | D'@F · E | 2 | ORS OSR |
| `[B D B',E2]` | D@B · E2 | 2 | ORX OXR |
| `[E',F D' F']` | D'@F · E' | 2 | ORY OYR |
| `[B D B',E']` | D@B · E' | 2 | OSX OXS |
| `[E,F' D' F]` | D'@F' · E | 2 | OTW OWT |
| `[B' D B,E2]` | D@B' · E2 | 2 | OTZ OZT |
| `[B' D B,E']` | D@B' · E' | 2 | OWZ OZW |
| `[E',R' D R]` | D@R' · E' | 2 | QIZ QZI |
| `[E B E',F']` | B@E · F' | 2 | QJM QMJ |
| `[E,r U' r']` | U'@r · E | 2 | QJT QTJ |
| `[F,R E R']` | E@R · F | 2 | QJX QXJ |
| `[F E2 F',R2]` | E2@F · R2 | 2 | QJY QYJ |
| `[E,R D R']` | D@R · E | 2 | QJZ QZJ |
| `[E,R' D' R]` | D'@R' · E | 2 | QMT QTM |
| `[B,R' S' R]` | S'@R' · B | 2 | QMX QXM |
| `[B R2 B',E]` | R2@B · E | 2 | QNT QTN |
| `[B R2 B',E2]` | R2@B · E2 | 2 | QNW QWN |
| `[E,R D' R']` | D'@R · E | 2 | QNZ QZN |
| `[F2,R E R']` | E@R · F2 | 2 | QSX QXS |
| `[E',R B2 R']` | B2@R · E' | 2 | QTW QWT |
| `[B E B',R2]` | E@B · R2 | 2 | QTY QYT |
| `[F' E' F,R2]` | E'@F' · R2 | 2 | QXY QYX |
| `[B2,R S R']` | S@R · B2 | 2 | QXZ QZX |
| `[E' B' E,F]` | B'@E' · F | 2 | SJM SMJ |
| `[F,R2 E' R2 E']` | R2E'R2E' · F | 2 | SJW SWJ |
| `[E,R' F R]` | F@R' · E | 2 | SJX SXJ |
| `[E2,R F R']` | F@R · E2 | 2 | SJY SYJ |
| `[E',R B' R']` | B'@R · E' | 2 | SMX SXM |
| `[B',R2 E R2 E]` | R2ER2E · B' | 2 | SNW SWN |
| `[B2,E']` | E' · B2 | 2 | SWY SYW |
| `[E',F' R2 F]` | R2@F' · E' | 2 | YJX YXJ |
| `[F' r U,M']` | F'rU · M' | 1 | ADF |
| `[R' S2 R,U']` | S2@R' · U' | 1 | ADP |
| `[U',r' S' r]` | S'@r' · U' | 1 | ADY |
| `[S' U M,U2]` | S'UM · U2 | 1 | AEN |
| `[F' r U,M]` | F'rU · M | 1 | AFD |
| `[F2,M']` | M' · F2 | 1 | AIM |
| `[F' r U,M2]` | F'rU · M2 | 1 | AMD |
| `[S U' M,U2]` | SU'M · U2 | 1 | ANE |
| `[S,U R U']` | R@U · S | 1 | APQ |
| `[S,U R' U']` | R'@U · S | 1 | APS |
| `[S,u R' u']` | R'@u · S | 1 | APY |
| `[R' U' R,S']` | U'@R' · S' | 1 | AQD |
| `[R,u' S u]` | S@u' · R | 1 | AWP |
| `[S',r U' r']` | U'@r · S' | 1 | AYD |
| `[R',u' S u]` | S@u' · R' | 1 | AYP |
| `[S',r' U r]` | U@r' · S' | 1 | CFR |
| `[R U R',S']` | U@R · S' | 1 | CFZ |
| `[F r U',M2]` | FrU' · M2 | 1 | CJF |
| `[R' U R,S']` | U@R' · S' | 1 | CJR |
| `[B E B',U]` | E@B · U | 1 | CNE |
| `[S U M',U']` | SUM' · U' | 1 | CPJ |
| `[E' R S,R2]` | E'RS · R2 | 1 | CQS |
| `[U,r S' r']` | S'@r · U | 1 | CRF |
| `[U',r S' r']` | S'@r · U' | 1 | CRN |
| `[E2,F' U' F]` | U'@F' · E2 | 1 | CRX |
| `[E' r S,R2]` | E'rS · R2 | 1 | CSQ |
| `[B' E2 B,U]` | E2@B' · U | 1 | CTE |
| `[E2,F U' F']` | U'@F · E2 | 1 | CTZ |
| `[R',S' R E']` | S'RE' · R' | 1 | CWP |
| `[E r' S,R2]` | Er'S · R2 | 1 | CWY |
| `[B' U B,E2]` | U@B' · E2 | 1 | CXR |
| `[U,r S2 r']` | S2@r · U | 1 | CYF |
| `[B U B',E2]` | U@B · E2 | 1 | CZT |
| `[M2,U' F U]` | F@U' · M2 | 1 | EIR |
| `[B',U' S U]` | S@U' · B' | 1 | ELX |
| `[R' B R,S']` | B@R' · S' | 1 | ELY |
| `[D2,M']` | M' · D2 | 1 | EMI |
| `[B' E B,D]` | E@B' · D | 1 | ENP |
| `[R' U' R,S]` | U'@R' · S | 1 | EOL |
| `[D',S' u S]` | u@S' · D' | 1 | EPN |
| `[S,u' R u]` | R@u' · S | 1 | EPQ |
| `[B2,R' S' R]` | S'@R' · B2 | 1 | EQM |
| `[R,u S u']` | S@u · R | 1 | EQP |
| `[B' R2 B,E2]` | R2@B' · E2 | 1 | ERX |
| `[B E2 B',R2]` | E2@B · R2 | 1 | ERZ |
| `[R',u S u']` | S@u · R' | 1 | ESP |
| `[B,R2 E R2 E]` | R2ER2E · B | 1 | ETX |
| `[R2,U S U']` | S@U · R2 | 1 | EZR |
| `[E',R' U R]` | U@R' · E' | 1 | GBX |
| `[R',u M' u']` | M'@u · R' | 1 | GJR |
| `[R,u M' u']` | M'@u · R | 1 | GJT |
| `[S' U' M',U]` | S'U'M' · U | 1 | GLJ |
| `[R2,U' S' U]` | S'@U' · R2 | 1 | GLO |
| `[F,U' M' U]` | M'@U' · F | 1 | GMJ |
| `[R,u' M u]` | M@u' · R | 1 | GNZ |
| `[M',u' R' u]` | R'@u' · M' | 1 | GRJ |
| `[U,r' E r]` | E@r' · U | 1 | GTB |
| `[M',u' R u]` | R@u' · M' | 1 | GTJ |
| `[U',r E' r']` | E'@r · U' | 1 | GXF |
| `[U,r E' r']` | E'@r · U | 1 | GXN |
| `[M,u R u']` | R@u · M | 1 | GZN |
| `[R D R',S]` | D@R · S | 1 | KJR |
| `[E' r' S',R2]` | E'r'S' · R2 | 1 | KSQ |
| `[E r S',R2]` | ErS' · R2 | 1 | KWY |
| `[B' D' B,E]` | D'@B' · E | 1 | KZQ |
| `[B' D' B,E']` | D'@B' · E' | 1 | KZW |
| `[M',U' B' U]` | B'@U' · M' | 1 | OIN |
| `[M',U' F U]` | F@U' · M' | 1 | OJM |
| `[S,r D' r']` | D'@r · S | 1 | OLM |
| `[R',U' S' U]` | S'@U' · R' | 1 | OLZ |
| `[M,U' B' U]` | B'@U' · M | 1 | ONI |
| `[R2,S r E]` | SrE · R2 | 1 | OSK |
| `[R2,S r' E']` | Sr'E' · R2 | 1 | OWK |
| `[B D B',E]` | D@B · E | 1 | OXY |
| `[E2,S2 R' U2 R]` | S2R'U2R · E2 | 1 | OYS |
| `[S',U' R' U]` | R'@U' · S' | 1 | OZL |
| `[B,R S' R']` | S'@R · B | 1 | OZM |
| `[B' D B,E]` | D@B' · E | 1 | OZQ |
| `[R2,U' M U]` | M@U' · R2 | 1 | QNY |
| `[B' E2 B,R2]` | E2@B' · R2 | 1 | QYN |
| `[B2,E]` | E · B2 | 1 | QYW |
| `[E,R F' R']` | F'@R · E | 1 | SIX |
| `[F',R' S R]` | S@R' · F' | 1 | SXI |
| `[B2,E R' S' R]` | ER'S'R · B2 | 1 | SZX |
