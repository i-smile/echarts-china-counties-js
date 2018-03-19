(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('兴国县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"360732","properties":{"name":"兴国县","cp":[115.363189,26.337937],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@@AAA@@AB@BA@@B@@AB@@A@@AA@A@@BABA@A@@@A@@@A@A@@@A@A@AB@BA@@@A@@@@@@@AA@@@@C@C@@B@@@@@BB@@@A@@AA@@@A@@@AB@@A@@@AB@BAA@@@A@@@@@B@@@BA@@A@@@@A@AB@@A@@A@A@@@E@@@AA@@@@A@AB@@A@@@C@@@DBA@@B@@ABA@@@@@A@AAA@AA@@@@AA@@@A@@@@BA@@@@@@A@ABA@@@A@A@C@@AA@@AA@BAA@AA@@CC@@@@@@CBA@A@@@A@@A@@ABA@@@AB@BABAB@@A@A@@A@@@@@B@@@@AB@@@B@@AA@@@@A@B@@@@AA@@AAB@B@@@B@@@D@@@AB@@@@B@@@@@@@@@@@BA@CB@B@@A@@BBB@BB@@@B@@BB@@@@B@B@B@B@@AB@D@B@@@@@@@BBB@@@@AB@@A@@@A@AB@@@B@@@BB@@@BB@@@B@@@B@B@@@@AB@@@B@@@D@@A@@@A@@@@B@@ABA@@@A@A@@@AB@@@B@@@B@@@B@B@B@@@@@B@B@@B@B@@@B@BB@@BB@@@D@@B@@@@B@@@@BB@@B@BA@@B@BB@@B@@@@BB@@@BA@@BA@BD@@AB@@@B@B@@BBA@@B@@B@@B@@@@@BBB@BB@BAB@@@B@@B@@BB@@BB@BB@@@@BBA@@BB@@@@BABB@@B@BDB@@@B@BBBB@@B@B@@@@@@AB@B@@@@@B@BA@@@A@@B@@A@@@AA@@@B@@A@@@@@@@B@@BB@B@@B@@@B@@@BA@@A@@AB@B@@A@@@A@@@@@@B@@A@AB@@A@A@@@AA@@@@@@AA@@A@A@@@BAA@@ACAA@AAA@@B@@AAAB@@@@A@@@AA@@AA@@AB@@A@@B@@@@A@BAA@A@@@@@@@A@@@@@@@@BA@@@@@A@@@@B@@BB@@A@@BA@@@@B@BA@@@@@AB@@CB@@@BA@@BA@@@@B@@A@@BA@@B@@@B@@@B@@A@@@AB@@@@A@@@A@@@@@A@@B@@A@@B@B@@ABA@@@@BA@@@@BA@@@A@@@@B@B@@@@@@A@AA@@@B@@A@AA@@A@@@@@@A@BA@@A@@@@@@A@@A@@@DAA@B@@A@@A@@A@@@A@@@@@AB@@@B@@A@@B@@@B@@A@@AA@CBABA@@@BB@B@BBB@@A@@@@@A@@@@@@B@B@@A@BBAB@@@B@@@BA@@@@@A@@@A@@@AA@@@A@@@@AA@@@B@@AA@@@@AB@@@BA@A@@@AB@@@@@@A@BB@@@@@B@BA@A@@@@@@BA@A@BD@@@@A@@@AB@@@@BB@@@BB@@@BB@BA@@B@@@BA@@@@@AB@@@@@B@@@B@@A@@@A@AB@@AB@@A@@@CBA@@@A@@@AB@@A@@B@@@BA@@@A@@@A@@B@B@@CA@@@@@B@@@@BD@B@B@B@B@@BBBB@BBB@@@DA@@BA@@@ABAB@@@BABBB@B@@AB@BA@@@@@@@B@@@@B@@BBA@@@A@@B@@@B@@@@@@@@@BB@@@@@@B@@@B@@AA@@A@@@AA@AA@@@@B@D@@@BB@@@@@@BB@@@B@@@@@@B@@@@@A@@@@BB@@@@BB@@@@@@@@A@@@@BA@@@@@@@AB@@A@@A@@@@A@@@@A@@@@@@A@A@A@A@@@A@@BB@@BB@@@@BA@@@BBB@@@@@@B@@@B@@@B@BA@@BA@@@A@@B@@A@@A@A@@AA@@ABA@@BA@A@@BA@@@@@@B@@@B@@A@@@A@AAA@@@@@A@AB@@@@@@AB@@A@@BAA@@A@@@A@@A@@AB@@@@A@@@A@A@@@A@@@AA@@A@@A@@AAA@@@AA@@@A@@A@@@A@@@A@@@@@A@@B@@@@@BAB@BA@@@@@A@A@AA@@@@@@@C@@@AA@@@@AAAB@@@@A@@A@@@A@@@A@@@@BB@@@@@@BA@@B@@@B@@@@A@@@A@@@AA@@@@@AA@A@@@BA@A@@A@@@@B@@A@@@@B@@@BABA@AB@@@A@@@AA@@@AAAA@@A@@@@@A@A@A@@@BB@@A@A@A@@@@A@@@@@@@AA@@A@@@@A@@@@BA@@@AB@@@@AAA@A@@@A@@@@@B@@AA@CAA@@@@@AB@@@@A@@@@@A@@@@BA@@@@B@@@B@@@@A@@@@@BD@B@BBB@@AB@B@@AB@@@@@@BB@@@@BA@@@@BB@@@BB@@B@@B@@@@B@@A@@B@@@AA@@B@@@B@@@@@B@@A@@@@B@BB@@B@BA@@@@D@@@@@B@B@B@@@B@@BD@@A@@@@B@B@@@@A@BB@@@@@B@@AB@@@@@@A@@@@@@B@@@@ABA@@@@B@@AB@BB@@B@@B@@B@@B@@BB@@@@@@B@@@B@B@@@B@@A@@BA@@@A@A@A@@@A@@@AA@@A@@@@@CB@@@AA@A@A@@@A@@@@AA@@@A@AA@@A@A@@@C@A@@BA@A@A@@AA@@A@@@@A@@@@B@@C@@@@@A@A@@@@BA@@@A@AB@@A@C@@BA@AB@@@@AB@@@B@@@B@@A@@B@@@@ABA@AA@AA@@BAAABA@@AA@A@@@A@@@C@C@A@C@@@AB@@A@A@@A@@@@@@AAA@AAA@@@A@A@A@@@A@@AABA@@BA@A@A@@AA@AA@@BA@@AA@A@@A@@@AA@@A@A@AA@@A@@B@@A@@@A@@@@@ABAB@@A@@@A@@@A@@@ABA@@@@A@@A@A@@@@@A@@@A@A@@B@@@@@BA@@@AAAA@@@@AB@B@@@BBB@@@@A@@@@@AB@B@@@B@B@@@BB@@@BB@@ABA@@@A@C@A@@@ABAB@@@@AD@@A@@B@@A@@A@@A@@BBD@@@B@BB@@@@@A@@@A@A@AAA@@@AA@BA@A@@@BB@@@B@@@B@@AB@@@@@BAB@B@@@B@@@B@@@B@BB@D@DA@@B@@B@@A@@B@@A@A@@BC@@@A@@@@@@B@BBB@@DB@@@@A@@B@@B@DB@@@B@B@BA@@@@D@B@@B@BAB@@@@@@@@BA@AB@B@B@@AB@BA@BB@@@B@@A@A@@@A@@B@B@@@@ABA@A@@@C@@A@B@@BBBB@B@@@B@@@B@@A@@BD@@@@@A@@BAA@@A@@BA@AB@@A@@BAB@@@@AB@@A@AB@@@@@B@B@@@@A@A@@@AB@@@B@BA@@@A@@@CB@@@BA@@B@@@B@@@@ABAB@@C@@@A@AB@@@@AD@@A@AB@@ABA@@BAB@BA@@@@B@@AB@@@B@@@@ABA@AB@@AB@BABA@ABA@A@@B@@@@@B@@DD@BB@@B@@A@@B@B@@@B@BB@DB@@B@@@@A@@@A@C@@B@@@@BB@@B@@@B@@BB@B@D@BB@B@@B@@@BA@@@@@ABB@@B@@AB@BA@@@@@A@@BA@@@@@B@@@B@B@B@B@@@AB@@@@A@A@@@A@@@@@@@@@A@@@@B@@@B@@AB@@@BA@@@@AA@A@@@@@A@@B@@B@@B@BB@B@@BB@@@DB@@CBA@@@A@@@@A@@A@@@@BBB@@@@BB@@B@B@@@B@@@B@@B@@@@C@@BA@@@BBB@B@@B@B@@B@@@@ABB@@@A@@B@@@B@B@@BB@BB@@B@@BABBBAB@@BB@@A@@@@@B@@@B@B@@@B@@@@B@@@DA@@@@@A@@@A@A@A@@@@@@B@B@@A@CB@@@@@@A@A@@@@B@@@@DFBDBB@@B@@@B@@B@@@B@@B@@B@@B@A@@@A@@B@@@@@BB@@@@BB@@BA@@@B@@B@B@B@@@@B@@@B@@BA@A@@B@@ABA@@@@B@@B@B@B@BAB@@@B@@@B@BBB@@@B@@@BB@BB@@BBB@B@@B@BB@@BB@B@B@B@B@D@D@B@@DB@@@BB@ABB@@B@@@BB@B@@BB@@BDB@BBBD@@BB@@BB@@BB@@@B@BB@D@@@B@@BB@B@BB@BB@@BB@@BBB@@B@@@BB@@@B@@@@@BB@B@@@B@@@@@BB@@BBB@@BB@@@@BB@@BDB@@@@BDD@@BBD@@B@@B@@BB@@BB@@BA@@@BB@AB@@@@BB@BB@@@A@@B@@B@B@BB@@@@@@B@@BBA@@B@@@@@BB@@@@@BBB@@B@@BB@@B@@BB@@BB@@@DBBB@@B@@B@@B@@BB@BBB@@@@BB@@@BB@@B@@@D@@@BBB@@@B@B@B@@@BB@@B@@@@B@@B@@BB@@BB@@BB@B@@@BB@@B@DB@@B@BA@@B@BBB@@@B@BBB@@BD@BB@@BAB@@@@@B@BB@@B@@@BB@@@@@@@BBA@BB@@@BBB@DB@@@@@@D@B@@BB@B@@@BB@BB@B@@@@@B@@AB@B@B@@@B@@@@@B@@AB@@@BAB@BBB@@@@@B@@B@AB@@@B@B@@@@@B@@@B@B@@@B@B@B@@@B@B@@@@@@BB@B@@@D@@@BA@@@A@@@A@@@@@@B@@@B@@A@@DAB@@@BB@@@ABB@@B@@@@BB@@AB@@@@@B@@@BA@@@@B@BA@@@@B@B@B@@AB@@@B@@@BAB@@@BAB@@@@@B@@@B@@BDBB@@BB@B@B@BB@@B@B@BDB@@@B@@@BB@@@@AD@@@B@@B@@F@BA@@@AB@@A@@B@B@@AB@B@B@@A@@@@A@@@AAA@A@A@@@@@@@@A@@@@@@@A@@B@@@@@@A@A@@@@B@@@@@BA@@@AB@@AB@B@@B@@BB@@@BB@@B@@B@B@B@@@BB@@@@BB@BB@B@BB@@B@@BBB@@BB@B@@@BB@B@@B@B@@@A@@@@BB@@B@@AB@@@@BB@@@@@B@@BB@@@B@D@B@@BBB@B@@@@@BD@@B@@@B@@B@@@B@@BB@B@@B@@BB@@BB@@@@@BBB@@@B@@@@@@@B@@@@B@@@@B@@B@@@B@@BB@@BAB@@@@B@@@@@@@B@@@@BB@AB@@BD@@@BA@@@B@@@B@@@B@B@@@B@@@@A@@B@BBDA@@@@B@B@BBB@@BB@@B@BA@B@@@@@B@@@@B@@@BA@@@B@B@@AB@@@@@@B@@@BB@BBD@@@B@BBB@BBB@BB@@@@BB@@B@B@@@@A@@BB@@@BB@@@@B@@@@@B@BAB@BB@@@B@@@@DBB@DB@BB@@B@@@@BB@@@@@B@@B@B@@@@BB@@@@@BB@@@@B@@B@@@B@@@B@B@BBB@@@BB@@DA@BB@@@B@B@@@B@B@BBB@@@@BBB@@@@@@B@@BA@@@@@@B@@@@B@@B@@@@@B@@@BC@@B@BB@@@@B@DBBB@@B@@@BB@@B@@@@B@@A@@@@@@B@@@@@@@B@@@@@@@@@B@@ABA@ABABAB@@AB@@@@BD@@@B@@B@BBB@@@@@@@DF@@A@AB@@@@BD@@A@@BAB@@@BA@@@@B@@@B@@B@@B@@@@@@@BA@BBA@@@D@B@@@@A@@B@BA@@@@@A@@BBBA@B@@@@BA@@B@@@@BD@@@@@B@BBBBBB@@@B@@BBB@D@@@@@@BA@@@@BB@@@B@@@@A@@B@B@DAD@@@DAD@BA@@@B@B@@@B@@@@@B@@@@BB@@B@@B@@BF@@@@@B@@@BB@B@@B@@BB@@@@BB@BB@D@B@BAB@@@B@BB@@B@B@BA@@B@BA@@@ABA@C@@@@@A@A@AB@B@BA@ABA@@B@BB@@@B@@@@B@@AB@@@AA@@@A@@@A@ABA@@AA@@BAA@@A@@@A@A@@BB@@DBBAB@B@@AD@@@DA@@@@@AB@@AB@@A@@DB@B@@@@@B@@@B@@B@@BBB@BB@B@DBD@BBAAA@@@BA@@B@@A@@A@A@@@@@@A@@B@@@@@BA@@@BB@@BDABABBBBB@@BB@B@BABA@@BBB@@D@@BB@@@BB@BB@@BA@@@BB@@ABA@@@@@@B@B@B@D@B@@@D@DBB@@@@@@B@@@@@B@@@@B@B@@@F@B@BBB@B@@BD@@@BBB@@BBB@@BB@@@@AB@@AB@@@@BB@@@@BB@@BB@A@@B@@@A@@A@@@@B@B@BA@A@@@@@B@B@@@@@@@B@A@B@@@@AB@@ABBB@@@B@@@@BB@AB@B@@@@@B@@@@@@@BB@@@@@BBB@@B@B@@@@@B@@@@@B@@@BB@BBB@@B@@@B@@@B@@BB@BB@@BB@@AB@@@BB@@@@@@@B@B@@B@@B@B@@BB@@@B@@@BABADA@@@@BA@AB@B@@AB@B@BA@B@@BAB@@AB@@@@@A@@@@@@@BA@@@@@A@@B@@@@@BA@@B@@ABA@@@@A@@@@@@A@@A@B@AAB@D@BBD@BAD@B@@@@@@@@B@B@@@B@@B@@@@@@@@B@@@@@@@@@@@@BAB@@@@@BB@A@@BB@@@@@@@A@@B@BD@B@@B@@BB@@@B@@@B@@@B@@@B@BBBB@@DAB@B@@A@@B@@AB@@@BADA@@B@@AB@BA@@BB@@B@B@DBB@B@@@BB@B@@@B@@@@@BAB@@BB@B@@@BBBBB@@B@BBBABA@@BA@@@@B@@@@B@B@@@BBBBBBB@@@B@@@@@@DB@@@@@BBBBBB@@@BAB@@@B@@BB@B@B@@@BA@@BA@C@A@@BA@B@@F@@@@@B@@@@A@@B@@AAC@@BA@C@A@AAA@A@@B@@A@A@@@@@A@A@@@AAAA@@A@@@AB@@AB@@@B@@@A@AA@A@@@ABAAA@A@A@@@ABAA@BA@C@AB@@@@A@AA@@@@ABABAB@@@BABA@AB@BA@@B@@AD@B@BAB@BAB@@@DAB@@@B@@@B@B@@@B@@BDB@@BBB@@@BB@@@@@B@@@AB@@A@@B@@@B@@AB@B@B@@@DABA@@@@B@@@B@@@@@@BB@@@BB@@DBBB@BB@B@B@B@B@BAB@@@BB@@@@@@@@B@A@@@@AD@@@B@@@@AB@BB@@@B@@DB@@@@AB@@@@@BBB@@ABAB@B@B@B@@BBBB@@FAD@@@B@@@B@D@B@@@BA@ABAB@@@BA@B@@B@@B@BBB@@B@@@@B@@BB@@@BD@@@@@B@BBB@BAB@@@@@@@@@BAB@B@B@D@B@@@BA@AA@@@B@@@B@B@@@@B@@@@B@B@B@@@@AD@@ABBBA@@@BB@B@@@@AB@@@B@BBB@@@@@@BB@@BB@@@BAB@B@@AB@@@BA@@A@@ABA@AB@@@@@@A@@@A@@@@B@B@BA@@BAB@BABAB@@B@@@@@@@BB@B@B@A@@A@@AAB@@@@ABA@A@@@@D@B@@AB@@@@@@B@@@@AB@@@@B@@@B@@@BBB@@A@AB@@@@A@AB@@A@A@@BA@@@@@AB@D@BA@@BA@@@@@BB@BB@B@@@B@@ABAB@B@B@B@@@@@BDB@@@B@@A@@@BBB@@@@@BA@@@@B@@@@ABB@@B@@B@@BA@@B@@D@@@@A@@B@B@@@@B@B@B@BB@@@@@B@@@@@@@BBA@@@@BB@@@BB@@B@@@BBB@@@@@@ABAB@@A@@BBB@@@@B@@@BBB@@@@@BBBA@@BBBB@BB@BBB@BB@AA@@AA@@A@AAA@AB@@ABA@@BA@@BA@@@@B@@@@@B@@@@@B@@@@@B@@@@@@@@@B@@AB@@@B@@@BA@@DA@@B@DA@@BAB@@ADC@@B@@@BBD@@@@@B@B@BB@@B@BB@BB@B@B@@@@A@@BA@@B@@@BA@@B@@A@A@@@ABA@A@AA@@@@@@AA@AABC@@@A@@ACB@@A@@BA@@@@AA@@@A@@@@@A@AAAAAA@AA@@A@@@@A@ABC@@@AA@@@C@@@A@@A@@B@@AA@@@@AA@AA@@AAB@AA@@@@@AC@@@@A@@BA@@@A@A@C@A@@B@@A@A@@AA@@BA@@@@B@BBB@@@@@D@@BB@@@@@DAHEBCBA@@D@B@@AB@B@@@B@B@BAD@BBB@BAB@B@B@@@BB@B@@@BBBB@@BB@@@@B@@B@BDB@@@BBB@@@B@@B@@BB@@@B@@B@BB@B@B@BB@B@@@@@BB@B@@@@BA@@@B@@BA@@A@@@DA@A@A@A@AAA@@AA@A@C@A@AAA@@AA@A@@@ABA@AB@@@BA@@@@@@AAAA@A@A@A@@@ABC@@@A@A@A@A@AAC@@AAB@BABAB@@@@CBA@@@AAC@AB@@AB@@AB@DA@ABAB@F@B@B@@@@BA@@@@@@@@BB@@@D@BBBAB@A@@@@A@@D@@AB@B@BA@@BA@@DA@@BA@@@@B@@@@@BB@@@@B@DBBDB@B@B@@B@@@@@BB@@@BB@@@@B@BBB@@@B@B@B@@@@A@@@@AA@AB@AABAAA@A@A@A@@@@BA@@AA@A@@@AB@B@B@B@@@@AA@@A@@@@@C@AB@@@@ABB@@@AB@BD@@DBB@B@B@B@@@@@BBA@@B@@@BB@@B@@@BAB@@B@B@@B@@@BB@B@@@B@@@@@B@@@@AB@B@@@@@@B@@@@@@B@B@BB@@@@B@@@BB@@@@@@@AB@@@D@B@@@B@@A@@@@@@BA@@@AB@@@@@B@@@B@D@B@B@@@@A@@BA@@BA@@@CB@@@@@DB@@D@@BB@@@B@@@@@B@@@B@B@BA@@D@B@DABA@@@@@A@@@AB@@A@@@A@@@@B@@AB@CC@C@@A@AA@@AAA@@@@@AA@@A@A@@A@@@A@@@@@AAA@@@ACCAA@@@AB@@ABA@A@A@A@@@@@A@A@@@A@@@@BA@@BA@A@A@@@AAAB@@@@@@@@AA@AA@@@@A@BA@@B@BA@@DC@@@A@@@A@@@A@@@@@C@@@A@@AAEAAA@@CA@@A@ACAAA@@@@AAAAA@@@A@A@ABC@C@AAA@@@@CAC@@A@@@A@C@A@C@A@ABC@C@A@A@AA@@AA@A@CA@@@@@@@C@@BA@@@@AA@A@@@@@A@@@@C@@@CA@@AAAAAAAAA@A@A@CCA@A@AAC@@AA@@A@@@@B@@A@@@AA@CC@AC@AAAACCA@@@AAAA@@@@AAAA@@AA@@@@AAA@@AA@@@AA@@AAAA@@@@@AA@@@@@@AA@@AA@@@A@@A@@AA@A@A@@AA@@BA@@A@@@DCBC@A@A@AD@@@@@@A@A@@@@A@AAB@@@DAD@@@AA@@A@@@@AA@@A@@@@DB@@@@B@@@B@@B@@@@@A@@@AAAA@@@@A@@@@BAB@@A@A@@B@B@@A@@BA@@@A@@BA@@@@@AB@B@@@DA@@BB@@B@B@DAB@@B@A@@@@@@@A@@@A@@@A@@@A@@DA@@@A@@@@AAAA@@@A@@@A@@BA@@BA@@@AA@AA@@A@@AA@@@AA@@A@A@A@@@@AC@@A@@AAA@ACCAAAA@AA@@C@AA@@@@@A@@A@AA@@C@AAA@@A@@AAC@@@@@CAE@@@AAA@@@CAAAA@A@A@AA@@AA@@@A@@A@@@@A@AB@@@@A@@A@A@AB@@AB@@A@@@AACA@@@@DA@AB@@C@@@A@CA@AAA@AAAAC@C@G@@@@@A@@D@@@@A@ACAAA@@A@@@AAA@@@@AC@A@A@@A@A@@@@@AA@@@@@A@A@@@@AA@@@AA@@AA@A@A@@@@A@@AA@AABAAA@@@A@@AAB@A@@@AA@@@AA@@@A@@@A@@@@@A@@@@BA@@@A@@@A@BB@@@BA@@BB@@@@AB@@B@B@@@BA@@A@@@AA@@@AAA@A@@@A@@AA@@BA@@A@AA@@@BAA@BABA@@B@@@@CB@@@@@@AA@B@@AB@@@@@@@A@@@A@@@A@A@@@@@@@BA@@B@BAB@@@@CA@@@@CDA@@B@B@@AB@D@B@B@@AB@BA@@@@@A@@@A@AAA@@@A@@@AA@@@@AAEAA@@@A@@@AA@@A@@@@AA@@@@A@AA@@@@AC@@@@@@@A@@@AA@A@@AAAA@A@@A@AB@@C@@@@@@AA@@@@@@AA@@A@@@@AAAAA@@@@A@@A@@AA@@A@@@A@@@AA@@@@A@B@AA@@@@@@@A@@@A@@@@@@A@@AA@@@AA@@@A@@AAAA@C@A@@@ABA@A@A@AAA@@@C@@@@AA@@@A@@@@@AA@BA@@A@B@@A@AA@@A@@@@@@BBB@@@@A@AAA@@A@@@B@@BB@@@@A@A@@@@@@@A@@@A@A@A@@@@AAB@@A@@AA@@@@@@@ACB@@@@@AA@B@@@A@A@@@BA@@@A@A@@@@A@A@AAA@@@A@@A@@@@@A@@@@@AA@@ABAB@@@@@@B@@BA@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@AA@@AADA@@BAB@@@@@@AC@@@@CB@BA@AB@AAA@@@@@A@AA@@@@@@@A@C@@@A@@@A@A@A@AA@BA@@AAA@A@@@A@@A@@@@@@BBB@BA@@@A@@@A@@B@AA@A@@@AA@@A@@@@A@@@@A@@AA@A@A@@A@@A@A@A@AB@@A@A@@@@@A@@A@@A@@A@@A@A@@A@@A@@@@@A@@@AA@@A@@@@@@@A@@@B@@AA@@@@A@@@@@@@@A@@A@@@AACA@AAA@@AAA@@@AA@@AAA@@@AA@@@@A@@@A@@@@FA@B@@@@@@@AB@@@@B@@B@@BB@@@@@B@@A@@BBB@@@@@DA@@@@@@A@@A@@B@@@B@@@@@A@@A@@A@A@@@A@@@CBA@A@A@C@@@A@@@A@@A@A@@@AB@BA@@@@@AA@@A@@AA@AA@@@@@AA@AA@@@@AAA@@@AAA@A@@AA@@@A@@@A@@@@AA@@A@@AA@@A@@AA@@A@@@@BA@AB@@@@@A@@AA@A@@C@@@A@A@@@A@AB@@ABABCAAAAA@@C@@@@B@@A@@@A@A@AB@@A@A@@BA@@@@@A@@@A@@@A@@A@@A@@@A@@@@@@ABA@AA@@B@@A@@@@@@@AA@@AA@@@@@BAA@@@@@AA@@AA@@@@BA@A@@@@@A@@@A@AA@@@@@A@@@A@@@@A@AB@@A@@@AACA@@@@@@B@@@@AA@@AB@@@@@@A@AAA@@@A@B@@@AB@@@@@@@A@@@BA@@@@B@@@B@@@@A@@@A@@@@@A@AB@@AB@@@BA@@@AAA@@@@AA@@@@BA@@BABA@@@@@AB@@@@@AA@@@A@@@@AA@@@A@A@A@@@@BAAA@A@C@@@AA@BA@@A@@A@@@@@A@@@A@@A@@@AA@@@@AAA@@A@@@AA@A@@AB@@@@AA@@@@AB@@@@AA@@A@@@@@A@AA@@@A@@AA@@A@AA@ACA@@@@AA@@@AA@@A@@@@@A@@@@@@@@B@BA@@@@@@A@A@@@@@@AB@BA@@@@@A@@@@A@@@@@@@@A@@@BBA@@@@A@B@@A@@@B@@B@@A@@D@@A@@@@B@@@BA@@@@B@@@B@@@B@@A@AA@@@@@AB@@C@A@@@@C@A@A@@@@@@A@@@AB@B@B@@A@@AA@@@@B@D@@@@@@@A@A@C@@AB@@@BA@@B@@ABAA@BA@AA@@AA@A@@@@A@A@@@@@@@@ABA@@@A@@@A@@@AA@A@@A@AA@AA@@@C@A@@@AA@@AC@@AA@@@A@@@@AAAAA@A@@@A@@@A@A@@@A@@@@A@@A@@@AA@@AAAA@A@A@@@A@A@ABA@A@@@A@@B@B@@A@@@A@ABAB@@@BA@@B@@A@@@@BA@@@@@@AA@@A@@@@@B@B@@@@A@@B@@B@@B@BA@@B@B@@@B@B@@@@A@@@A@@B@@@@@@@@A@@@@@@@@@A@@B@@AAB@@@AB@@@@@@@@B@@@@@@@B@B@@@B@@BA@BB@@AB@@@BA@@AA@@AA@A@A@@BAAA@A@@@ABB@@@@@@BA@ACAAA@@@@AA@@@A@A@@BA@@BA@@@@B@@ABADA@@@B@AB@BAB@@@B@AA@C@@ACAA@@@A@A@@@AB@@AB@BA@@BA@@BA@@@@BDD@@@@A@A@@BA@A@@@@@A@A@A@@@AB@@@@A@A@A@@@@A@@@AAA@A@@@@@@A@A@BACA@@@@@@@@@@AA@@A@A@@A@AAA@A@ABCB@@AAA@C@C@@@A@@@@@@BA@A@A@AB@@@@AB@@ABA@A@AA@@A@A@@A@@A@ACA@AA@ACA@@AA@@AB@@@@@AA@A@CAAA@@A@AA@@@@A@@BA@@@A@@@ABCAA@@@AB@AA@@@@@@AAABA@@@@AB@@AA@@A@@AA@@B@@ABA@@A@@AA@A@@@@@@@@@B@@@@@@C@@@@@@@@@@B@@@@@@@@@AA@@B@@B@@@BB@@A@A@@@@@B@@@@@@B@@A@@@@@@@@B@@A@@@@B@@A@@A@@@A@@@A@@@@B@@@A@@@@@@A@@@@AB@B@@@@A@@@@@@A@@BA@@@@@@A@@@@@@@@@@B@@@@@@A@@A@@A@A@@@@@@BA@@@@@@B@B@@@@AA@A@@A@@B@@@@@@@DBBA@@@@@@A@@@@@@@@@@@BA@@@@A@@@@@A@@@BA@@@@@@A@@@@@@ABB@@@B@@B@@@@B@@@@B@@@@@@A@@AA@@@A@@A@@@A@@A@@@@@A@A@@BA@@@@B@B@@@@@@@A@@@@A@@@@@@@@@@@@@@BB@@@AB@@A@@AB@@@A@@@@A@B@@@@A@AB@@@B@BA@BBA@@@@@@@@A@A@@@A@@@@@B@@@@A@@@@A@@@@@B@@@A@@@@A@@B@@A@@@BAA@B@@A@A@@@@@AA@A@A@AB@@@@A@BAA@@@@BA@@@A@@A@@A@A@@@@@@A@A@@@@@@@@A@@A@BAA@@@@@@@@@@@@@A@@@@@@ABAB@BA@@@@@B@@@@B@@A@AA@@@@@@@BA@@@@A@@AB@@CB@@BB@@@@@@@@@@@B@@@@AA@@@BA@@A@@@D@@@@AA@@@@@@@@@@@@@BA@A@@@@AAAABA@A@@@B@@@@@B@@@@B@@A@@@@B@@@@A@@A@@A@@A@@AA@@A@@@A@@@C@@@@AAA@@@@@@A@@@A@@AA@@A@ADA@A@A@@@C@AA@@A@@@A@@AAA@@@@AA@@A@AAAA@@@@AA@@@A@A@@@@AA@@@A@@@A@A@@@@@AB@B@@@@AB@@@A@A@A@@@@@@@BA@@A@A@@@@AA@AAAB@@@BAB@@A@@@@ABA@@@@@@@"],"encodeOffsets":[[118147,26713]]}}],"UTF8Encoding":true});}));