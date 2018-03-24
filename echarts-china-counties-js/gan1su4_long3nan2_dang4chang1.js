(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('宕昌县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"621223","properties":{"name":"宕昌县","cp":[104.393385,34.047261],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@C@C@CAA@AA@A@@AB@@ABC@@@CBAA@@@@@C@C@@ACACA@AAA@A@A@@@AA@@@A@@@@BBB@B@BABABA@@@A@@B@@@@@B@@@BAB@@@@A@@@AC@@AA@@A@@@A@AAA@AE@C@CAC@@@@@A@@DADAD@@A@A@@@A@C@IDC@A@C@C@E@EBC@@@A@@@@AA@A@@AA@@@@A@A@@@A@@@A@@@AA@@A@A@@@@AA@@@@AA@@@@@A@A@@@A@@@A@A@@@A@AA@@A@@@@@@BA@@@@BA@@@@@A@@B@@@@@@@BABA@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@AA@@@@@@@@@@@@AA@@@@@@@@@@A@@A@@@@@A@@AA@@@@@@@A@@@@@A@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@AA@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@A@@@@@@@@@@B@@@@A@@@@@@@A@@@@@@@@@A@@B@@@@@@@@A@@@@B@@@@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@A@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@A@@@A@@@@@@@@A@@@@@@A@@@@@@@@@@@A@@@@AC@@@@BA@ADA@@@A@AAAAAAAAA@A@A@@@C@AAAAA@@A@@@ABC@@@A@ABA@@@CCACA@BA@CBA@AA@@@@A@C@A@A@ABAB@BAF@@@B@@AB@@A@@DBD@@@BADA@A@@F@B@B@BABADC@@@@@A@@DA@@BA@ABA@@@@BCB@@@D@@@@AB@@@DAB@B@@@@@@AAC@@@AA@@A@A@@@@B@AA@@A@@@AA@@ABA@@@ABAD@@A@AB@@C@A@CAAAA@@AAAA@EAEAA@AAAAA@CDA@A@A@A@CAC@@ACAAAAACAAA@@@AAA@A@@@@D@B@@@@A@ABCBC@A@@@A@A@@@A@@DEBA@A@A@ABADC@AB@D@FABAD@@@DAB@B@BAFADAB@DAB@BABABAB@BADCDADAB@@AD@D@DAB@BABABA@ADADA@@B@B@@@B@BC@ADC@AB@@@BB@@B@@C@@AA@@@@A@AA@A@AAA@A@@@@@A@@@@@@@@AAA@@A@AA@@A@A@A@AAA@@A@ABA@A@@@A@A@@@A@@@A@A@A@@@CAA@@@A@@A@ABA@@@E@A@CAE@CBE@C@@@ABA@A@A@@AA@@@A@@@@@AA@@@@A@@AA@@@A@@@C@AB@BA@@@A@@@AA@@@@@A@@AAA@@A@E@CBA@C@@@AA@@@@AA@AC@E@C@CAE@A@@@AAAA@A@A@ADE@@@AA@CAC@A@I@AAEBAA@@@@@@A@@@@@@AA@@@@@@A@@@@@@@@A@@@@A@@A@@@@@C@A@A@@@@@@@@@@@A@A@ABA@@@@@A@AA@@A@@A@A@A@E@ABE@@BA@@B@DABA@AB@@C@AB@BA@@D@B@@A@ABADC@CB@BABAB@@@@AAC@A@@BA@@@ADE@@BAB@@AB@BC@@D@BA@@B@@A@@@AAA@A@@BABCDCBA@@@AB@B@BA@@@@@@@A@@A@A@A@A@A@@A@@@@C@A@@A@@A@CA@@@@@@@AA@@@@A@A@@@@@@@@@@@@A@@A@@@@AAAC@@@@@@@@@@@@@@A@@@@@@@A@@@@AA@@@@@@@@@@@A@@@A@@@@@CA@@EACAECAAECCAII@AA@AA@@A@ABA@ABA@ABCDCD@@@D@@@D@@ABA@@@@@AA@A@@BAA@@@@@A@@@A@@@A@ABA@A@@BA@@@A@A@A@@A@@A@A@@@@@ABABAB@@A@@@@A@@@@@@@@@A@@@@@AA@@@@@@@@@@@@A@@A@@@@@@@@AA@@@@@@@A@@@@@@@A@@@@A@@A@@A@@ABA@A@A@A@A@@@@@ABAB@@@@@@@@@@@@A@@@@@AB@BA@@B@@AB@BABAB@@@BAB@@@@@@A@ABCBA@ABA@ABA@EBEBCBA@@@@B@B@@@BBD@@@B@B@@B@@B@F@B@B@@@@O@ABA@CB@@@@BBB@B@@@B@@@@@BB@@A@AD@@@B@@B@B@DD@@B@DDB@BB@@B@@@ABABAB@B@@@@@@B@DADABAB@@@BB@@@B@@@@@B@BA@@@C@A@A@ABA@CBABADABA@AD@B@@B@@@F@@@BBB@BB@@@BA@@@CBC@@B@BBB@@@@B@B@BA@@B@@@BB@@@@@B@@BAB@@@@@@B@@@@@B@@@@@B@B@@@@ABCB@BEBA@C@@@A@AD@@A@A@@@@@A@ACA@@A@@@AAA@AAAAA@@@ABA@C@@AAAA@@AA@A@@@ABABC@@BA@@@@@A@@@@@@@@A@AB@@@@@@AB@@A@@@@@AA@@@@@@A@@@@@@@AB@@@@@@A@@@A@@@@@@@@@@A@@@A@@@@@@A@@A@@@@A@@A@@@@CA@@@@@@@@A@@@@@A@@@A@@@@@@@A@@@@@A@@@@@@@@@A@@@A@@@A@@@@@A@A@@@@@@@A@@@A@A@@@CBEA@@AA@@AA@@@@A@A@@AA@AA@@AACAA@AECC@A@@AA@@B@BA@@@A@A@@BCAC@@@A@A@A@CAA@ABA@CB@DA@@JAB@@@BADCDA@AB@B@@@B@BA@@@AAA@@@AA@@AA@AA@A@@A@CA@ACAAAAAC@AA@@@@@BAF@@@@B@@@@B@@@@A@AB@@A@A@@@C@@@A@A@A@C@@@A@@@@@@@ABABEFABCD@BA@@BA@C@@@@AA@@AAA@@@@@A@AAA@@@@@A@A@@CB@@A@@B@@@@@@@@@B@@@@@@@@@@@@@@BB@B@B@@@@B@@@@@@B@@@@BB@B@@@B@@@@B@@@@B@@@@B@@@B@@B@@@@B@@BB@@@@@B@@BB@@B@@@@@@@BB@@@@B@@@@@@@@@@@@A@@@@@@@@@A@@@@BA@@@A@AB@@@@A@@BA@@@@@@BA@A@A@@AA@@@@@AA@@AAA@@AA@AA@A@@@@AAAA@@A@@AA@@@@@AB@@@@@@@B@B@@@D@@@B@@ADADABADA@@BAB@@A@AAA@A@A@A@A@@BA@@@AAA@@@A@A@@@@@CB@@@B@@D@DBDBD@@@@D@@@B@BA@A@A@C@E@C@A@@@@@@B@BAB@@@D@@H@F@@@@@@BAF@B@@BB@BBB@@B@@@@@@B@@AD@@B@BBBBB@@@@@ABA@A@ADA@CB@@B@@@B@BAB@@@B@B@FAB@B@B@D@B@@@@@@@@@@B@@BA@@B@@BBB@@@@AB@@@B@B@B@@@B@@@@B@BA@@BBBB@@D@@@B@B@@@@B@D@B@@A@@BA@ED@@AB@@ABCD@@ABA@@@AAAC@@C@A@ABA@@@@@@CAA@A@@AA@@CCAA@@AA@@A@@B@@@BA@@@AA@@@BA@@@A@@@@A@@@@AB@@@A@@@@A@@@@@@@A@A@A@C@@@A@@A@@A@A@@BE@@@@@@@A@ABA@@BCD@@@B@@BB@BB@@@@B@B@@AB@BCD@@@@@BAB@B@B@BBB@B@@B@@ABAB@D@BA@@FAB@@@BB@@BBB@@@@BA@@B@@AB@D@@AFCH@DAFADABAB@@A@A@C@C@@@A@@BA@@B@B@@CB@@A@ABCBA@@BAB@BAB@@ABCB@@A@@BBBBBBBBDDD@BB@@B@@C@A@@BA@@@@B@@@BA@@@@@@@@B@@@@@@BB@@@@@BB@@B@@B@@@@@@BD@@@@B@B@@B@@@@@BB@@@ABB@@BA@@@BBB@@B@@@BB@@BB@@B@@@@@@@@@B@@@@@@B@@D@B@@@@@@B@@A@AB@@@@@B@@B@@@@BBAB@B@BB@@@@AB@B@@@@B@B@DBBBBD@@BBB@DB@@@ABCB@@AB@@@@BDB@B@@BBBBBD@@BB@@BBDBB@@@@B@B@D@@BB@BBB@@@DBBB@BB@BBBDB@B@@@B@B@B@B@B@BBB@BDD@@BB@@AB@BA@E@A@ABABEBA@@@A@@AAAC@@@@A@@@@A@CBA@@@@@@@@B@@@@@@@@C@A@ABA@CDA@CBADA@A@@BA@@BA@@@ABCBABA@ABA@@@@@AAA@A@@@A@@@A@@@@@@A@@G@A@@AA@@@A@E@A@GB@@A@A@AA@@AB@@E@C@E@A@@@CBA@A@ABA@@@ABCBA@@BABA@@@@DAD@@ABA@@@A@@@A@@@@@BB@@AD@B@BAB@@@DA@ADABAD@@A@@B@@@B@@@B@B@@@B@BB@@BBDBBBB@@@BADABCDCBCBED@@CBA@AB@@@BAB@@@@AB@B@D@@@@@BC@A@A@EBA@AB@@ADABA@@@@DABADAB@B@BA@@BCDCDA@@D@@ABAB@BC@A@C@EBC@@BEAC@A@G@@@AB@@A@A@A@C@G@C@CAA@CBA@@@CAA@A@A@@@A@A@@B@BA@@@E@AB@BA@CDA@CAA@ABCB@@A@CC@@A@AAA@AAA@@@CBAB@@AB@B@B@@BD@@@@AFA@AB@@A@A@@@ADA@ABABABA@@B@D@@@@A@ABA@@B@@@B@BA@ABABA@C@@@ABBDAB@@@@AB@@A@A@@@AB@@A@A@@@A@EA@@CBA@@B@BCB@BA@A@@B@@AB@@A@@@A@A@A@A@@@AAA@A@A@@BA@C@CB@@@@@B@@A@A@A@@B@@CDCBCB@BA@C@@@CA@@@B@@BB@B@BAB@@ABABA@@@CBAB@@A@C@@@CDA@A@CB@BAD@@@BA@ABEBAB@BA@@@ABAB@@ABABABABABGB@@@B@@B@@B@@AF@B@BAB@@ABCBA@E@@BA@ABAB@B@@A@A@@@A@ABA@@@A@@@G@@@@@AB@@C@@@A@@B@@C@A@ABABA@@@E@@@A@E@@@ABA@ABCDAB@@A@CB@@ABEBABCBA@@@@@@B@BA@@BABABCBA@@DCBAB@@A@BB@@@DBB@@AB@@@@GBIDA@ABA@A@A@ABABA@ABAB@B@@ABCBA@@@@BA@@B@@ABA@A@@@CAAA@@ABCBAB@@@D@@@@ABCBABA@@BAB@BABA@@@A@A@AAA@A@A@A@@AA@C@@@A@A@E@A@EB@@CDA@CBCB@BEDABAB@@@@BBDF@@@B@@ABADABAB@B@B@BAB@@CBC@A@C@C@@@A@@@A@ABCBCB@@A@@BCB@@AB@@C@CA@@EAAAAAA@A@AB@B@B@@@@DBBB@B@BBBAD@BCDCDA@@B@B@@@BEBABAD@BABCB@@@@BBBB@B@B@BAD@B@@GB@BA@@@CA@@ABA@A@AA@@@@ABAB@@A@G@A@A@A@C@C@C@A@@B@@AD@@@BBDA@CBAB@B@@@B@BA@ABA@@BCDAB@@AB@@@@@@A@BB@DB@@BBB@BBB@B@@@@@@ED@B@@AB@BC@AB@@@BABBD@BB@@B@B@@BBAB@B@@@B@BB@@BFFDF@@@B@@@@CDAB@@@B@@@BBB@BBB@BAFBDBB@BBDBB@@@D@@@D@B@D@D@@DBBB@@@B@B@B@B@@BB@@BDDD@BB@B@BB@@@BBD@D@F@@@BB@BB@@B@@B@@@@BBBBBBB@B@@BB@BB@@@@BB@BB@@@DB@@B@@@@BA@@B@B@@BD@B@B@B@@@BB@BBBDBB@BBB@BB@B@@@DD@BBB@@AFADDBFBDD@@@@@B@BAD@B@@@B@BB@@D@BB@@@B@@@B@B@@AB@DB@@BA@@BA@@DABABAD@B@@@B@B@@@BBB@B@B@B@D@B@B@DB@@BB@BB@@@@BBBB@B@B@B@@ABA@@D@@@D@B@BBDAD@FB@@B@BA@@F@DAB@BBBBFBDDB@DCDA@@DABAB@@@@A@@BAB@@@B@B@@@BBB@B@B@@BB@@B@B@@@B@B@D@@@DBBDD@@BBDBB@@BBBBB@BB@@@BBB@B@B@B@B@@@@B@@@@@D@@@B@@@@AB@D@B@@AB@@@B@@B@@BB@@@@B@@CB@@BDAB@@A@@@ABA@@@A@@H@B@B@B@DAB@@@B@B@@@BBBBB@@BD@BBB@BBBA@@@@BA@CBABAB@@@BA@@@A@EBA@ABC@CBA@CA@@CBCBABABCBA@@@ABA@@@ADADCB@B@@@BA@@@ADA@@BBBB@@B@B@B@B@BAB@B@@@BCDAB@B@@@B@@@B@B@@A@ABA@@@ABCHAD@B@B@@AD@BAB@DA@@BA@C@@BABABAB@B@B@@@@BBBB@@@@ABADAB@@ABAFA@B@@B@BB@BB@B@@@B@BBBB@B@BBH@B@BBBBB@B@@@B@B@B@BABB@@@@@BB@@BBBB@@@AB@BAB@@@BB@@B@@B@B@@@BBA@BB@@@BBB@@B@D@B@@@DA@@DDD@D@@ABB@@@@@B@D@B@@@BBD@D@B@B@D@@B@B@B@BBB@@@BBBB@@DBBBBBB@@@@@DA@@@A@A@@BABABA@@@@B@B@@@BBD@B@DBB@@@BBBBB@B@D@@@B@BABBB@@@BDDB@BBB@B@@AB@B@@@@BBB@@@BDBB@BBD@BB@@@F@B@B@BBDDBB@@D@BA@@@@B@@CB@@AB@@A@@DAFEBA@@B@DAB@B@@@BA@AB@@@BA@@B@BBDAB@@@B@@@@@DAFA@@BAB@@CB@@@D@D@@ABB@@B@BBBB@@@B@@B@BB@@@AB@BAB@B@B@@@DA@@B@B@@ABA@@DAB@D@B@DC@@B@B@@@B@@CBCBA@A@@@CB@ACB@@@B@@@B@BDDB@@@B@DB@BD@BDDBB@@@B@@ADABAB@@BD@D@B@BA@@@@BB@BFB@@B@BB@B@BAB@B@@@B@DA@@BB@@B@@@@B@B@BB@BB@@@BB@@@BBB@BBBB@B@BBB@@@@BBBA@@DABA@@@CBABCBA@ABA@@B@@@@@@A@@@@ACAA@@@@@A@@J@B@B@BB@@B@B@@AB@B@@@BBB@@@@B@@@B@@@D@@@BBBBBDDBBB@B@H@@@B@@DB@@@@@@@B@@@B@@@@AB@@@@A@@@@@A@@@@@@@A@@@@@AB@@@@@@@@@@AB@@@B@D@BAB@FBB@B@BAB@D@@@BAB@BAB@BAB@B@BA@@@A@A@@@@BA@@@@@@@@BA@@DC@@@@@ABA@A@@@C@AAA@@AA@A@@AA@@BABA@@AA@AAABA@@A@AAAA@@@A@@@@@ADA@@B@BB@@BA@A@AAA@A@CBA@AB@@@@@B@@@@@B@@@@@B@@A@@B@@@@@BB@@@@@@@@BB@@@@@@@@B@@@BA@@@@@@B@@A@@B@@@B@@A@@B@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@B@B@B@@@@B@@B@@@@DB@@@@@B@B@@B@@@@B@@@@@BB@@@A@@@@@@@A@@@@@@@AB@@@@A@@@@B@B@@@@@@@DD@@@@@@BB@@F@@@DBBB@@@BB@@@@@BB@@@@B@@@BA@@@@BADC@@B@@@B@@@B@BA@ABA@AB@@@BA@BB@@BBB@@B@D@DAB@B@@@@AB@@C@A@@@A@@@@B@BAB@BAAAAA@@@A@@@AD@D@@@BABA@AACAA@@@A@A@A@C@C@A@ABA@@@@DA@@DABAHCB@BABA@A@@@AB@B@@AB@@CB@@C@@AA@@@A@@@A@@CAAAA@@AB@BABA@@@A@C@@@A@@B@B@@ABC@ABABC@C@A@@CCAEA@@AA@@@AAA@@@@AA@AAA@AA@@@ABA@A@@@ADABCD@@A@ACC@@@A@@@@BAB@@@B@@@BA@@@A@@B@@C@@@@@@BAB@B@@@D@@AB@@@BA@@BC@A@@BA@C@ABC@@AAA@@A@@BABA@@@AB@@@BAB@BA@@BA@@BB@@@@B@@AB@@@B@@@BA@@@@BBB@B@@@FCHG@@B@@@B@@BBB@B@@B@@@@@DAB@B@D@@@B@B@@@D@DAB@@C@@BA@ABC@@@AB@BAB@B@@@B@DBB@B@@@BABABABAB@FAD@FAD@@@B@@@@E@@BAB@BCBABABAB@BC@@BABEB@@@B@B@DBBBBB@@BB@@BDB@@B@BBB@D@B@@@BB@@@@BA@@B@@@BAB@B@@@BBDBBBB@@ABA@@@@B@BA@@B@@EA@BB@B@B@B@BB@@@@B@@A@@BAB@D@@AB@@ABABABCBCBABA@@@A@@@@@AB@BABAB@D@B@BBB@B@@@BA@@B@@@B@@D@@B@DB@@BA@@@ABA@AAA@@BABAB@B@B@B@@@@@BDBD@@BBFBDBDB@@@B@@BBBB@@A@@BB@@@BB@@FD@@@@JDDBB@@B@@@B@@@BAB@BAB@B@B@BBBB@B@@@@@DC@@B@@@B@DBB@@@@@B@@A@AB@BC@@B@@BB@DF@@D@@B@@@B@@B@B@@@DDBB@@BAB@B@@BB@B@BDBBBB@@B@@@BA@AB@@ABCBA@@D@D@D@B@DABA@@D@@@FA@@@@AA@C@@A@A@AA@@A@@A@A@A@ABA@@A@ABC@A@@@A@@AA@AA@@@A@A@A@A@E@@@A@A@@BA@@BA@@@@@@@A@@AAA@AA@@A@@@@ABA@@AA@A@@@AA@@@C@AAA@@A@AAA@C@@@@@A@@A@BA@@B@@ABA@C@@@A@AB@@A@ADC@A@A@@@A@A@ABADAB@@@BADCBA@A@A@@@A@A@A@@@@@A@@@AD@DAB@DA@@@ABA@A@@@@@@B@F@B@@@B@@AB@@@@@D@BABA@@@A@@B@B@@AB@@A@A@@BA@@@CBC@@BC@@@@B@@A@AAC@@B@@AAABAA@@@CC@A@@@A@@DAB@@@@@@A@@BADC@@D@@@@ADA@@@A@@@C@@@A@@B@B@BC@C@@@AD@@AB@@CB@@@DAB@DAB@DAD@BBB@B@@@@ABA@ABC@A@A@AB@B@B@@ABABABAB@DADA@ABA@@BA@CB@@ABC@A@@BABA@@@EDE@ABE@@@CB@@CB@D@@@@ABABA@@@@B@@@BB@@BA@C@@BABA@A@A@AB@@A@A@AB@@ABBBBB@BCB@@@BAB@B@@ABA@A@@BAB@@A@A@A@@@@B@@@BABC@EBC@@@@B@@@BB@ABA@@B@@@BAB@BA@@@ABA@A@@@@@C@@@A@@BA@@@A@AB@@A@A@A@@@ABABCDC@AB@BA@A@ABA@A@@BA@BBA@ABA@@@@B@@A@@BABCBABA@A@@@C@@AC@A@A@A@A@@BA@@BA@C@@AA@A@@A@BA@@B@BC@E@@B@@A@@BA@@B@B@DA@@FABA@@B@DAB@B@@@B@@BB@@@BD@@@@@BB@B@@B@BAB@@@B@B@@B@@BB@@@BBB@@@BABC@@@A@@AC@@@@AA@@@A@@BAB@@ADAB@@@B@@BB@DDB@@BB@@@D@B@@@@A@@@A@ABC@AD@DAB@BC@A@ABA@A@@AA@A@ABA@@@@@A@@AAA@CAA@CAAACAAAAE@@@@AA@A@AAA@A@A@A@@BC@@@A@@@A@A@AA@@@BA@@BA@@BC@@@@@A@@@@@A@A@@@@@A@A@@@AA@@@@A@@@A@@B@@BB@@BB@@@BBB@BB@@@@@B@@@@B@@@@A@@@@@A@AB@@@@@@@BA@AAA@@BA@@BA@@BA@@B@B@@A@AB@@@BA@A@@AA@A@@@A@@@@AA@@B@@A@@BA@@@@@A@A@@@@BC@@AA@@A@A@AA@@C@@@@@@ACACCA@CAAAB@@A@@B@@@@@@@@@@@@ABA@@@@@A@@@A@@A@@A@@@@@@@A@@BA@@@A@@B@@@DBBBB@@@@@@@@@AAAA@@BA@@BB@@B@@@AA@A@A@@@@@@AAB@@A@AAAA@C@@@A@"],"encodeOffsets":[[107316,34711]]}}],"UTF8Encoding":true});}));