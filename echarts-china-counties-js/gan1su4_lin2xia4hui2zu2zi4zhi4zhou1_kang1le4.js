(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('康乐县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"622922","properties":{"name":"康乐县","cp":[103.708354,35.370505],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@AACAA@A@@@@AA@A@A@AAA@@AC@AAAAA@AAA@@@AAA@@AA@@AAA@@A@A@@A@AA@@@@@AAA@AA@@@@A@@A@@AA@@A@C@@AC@@B@BC@@@A@@BA@@@A@@B@@AB@AA@@GACAA@AA@AB@BABA@@@AAABC@AB@D@DAF@F@@@@ABCBA@@BA@@B@B@B@BBBBD@B@BBB@BAD@@@BBBB@@B@B@F@@@B@@A@A@A@@@AA@@@@@AAA@@A@@AA@@A@@AA@AAA@AA@@AA@A@@BC@A@A@@BCBA@ABC@A@AB@DCBEB@AAAAAA@@@@@A@@BA@@@A@A@A@A@@@@B@@A@@@@@AA@A@AA@@@A@A@@AAA@CCA@@A@@@A@A@ABAB@@A@@@A@C@@BC@C@A@@B@@A@C@@AC@@BC@@AA@@BA@@DCB@BA@A@AB@@@@@BBBB@BBB@BBB@@DBBBB@@@B@BCB@BADADAB@BAB@BA@@@A@@BA@@B@H@@@@A@@@@@A@@A@@AB@@CBCBA@@@A@@@@A@AAA@AAC@CAAA@@@@AA@@@A@@BA@C@@AA@A@@CA@A@@@@@A@@B@BAB@FEDCDABADC@AC@@@AAA@@AAA@@A@@A@@@@@A@@@ADABCBA@A@@@AA@AAAA@@@AAA@@CCA@AAAA@C@A@@@CBABABABABAFA@@@A@A@@@AAAACAAAA@A@C@@@ABA@@@@DB@@B@@@B@@ABA@A@A@@AC@@@A@ABABABADA@AFAB@B@@@@E@AB@@@@AB@B@@@H@@@D@BA@@BABABABABABADADAHA@@D@BADABA@@@A@@AA@AAA@A@A@C@I@ADA@AFEB@B@JCB@BB@@@BA@@B@@B@@B@@B@BCDEDCB@B@DADBB@BBB@BBF@@ABA@@BAFCB@BA@ABAB@D@BAB@@@HGBA@A@ABA@ABA@ADC@@BCBA@@DAB@@@@A@@AA@A@@@C@ABAB@@AB@BA@@@ABC@ABA@A@E@A@AA@@A@AAE@C@AAAAAAACAA@AAAA@@AC@@@EAIA@@EAE@AAA@A@A@ABA@@BA@@BA@@BABA@ADE@ABCBA@@@@A@ABGBABA@C@EDAB@@@B@JAD@BEH@BCBGBKDA@E@A@A@ABAD@@AB@@A@E@E@C@CBC@C@A@GCA@A@C@C@KAAAG@A@C@OBC@C@ECCA@@ICCAC@AAEBC@A@I@EAEAC@CAEAA@C@AAA@E@C@C@@AA@AAAAECA@GCC@@@GAAAA@EDA@@@EDCBCBABAFABAB@@@DBB@@BB@@@BBD@@@BABABCDAD@@@BBB@BFDJH@@LL@BBB@B@D@@BBB@BB@@F@B@B@FBFBBAB@BBB@B@DBB@BBB@B@@@BB@@BBBABB@@B@@FBBBBB@@BBB@@@BAB@B@@BBDB@@BBF@@@B@AAB@DE@@B@@@LR@B@B@B@@@BABAB@FAD@F@H@B@BBD@@BB@B@@AB@BA@@BA@C@A@A@CAC@CAA@AACA@A@AA@@AE@C@C@@@@@AAIECA@@AC@AA@AAAA@@A@CAA@ABEDCBEBA@C@A@AB@@@D@B@@@BB@F@B@BABBDB@@@@B@DDDBJHB@B@DDFBB@DBB@D@B@H@@@FAD@D@B@J@BBB@@B@@BB@@@BA@CHABA@A@C@@@CB@BKJAB@B@BAB@@ADADAB@@@B@H@BABABAB@@A@ABA@C@CAGCACAA@@A@A@ABAB@@A@AAA@@@G@A@A@A@@B@@@DAD@@ABABAB@D@@ABBB@BBF@@FCB@B@B@DBB@DAR@BA@@BABABA@ABAFA@AB@@@B@@B@D@FAHADAFA@EFCDCBEBC@ABADABABCB@BC@G@KDE@EBE@ABA@@BAB@@FH@B@D@DABADIHCJAFAD@FADADCFAB@@EBE@CB@BA@@B@B@BBBDDBB@B@BBB@@AB@BAD@BEDCBAB@BAD@D@BCF@DAF@DADCDAD@BABCF@@@@AB@D@F@DB@@BB@FDD@BBDBBBBDBB@D@BA@@@ABG@A@EBA@GBC@C@GAE@C@@@A@EHCHABAB@@A@A@CCGICACAAA@@AB@@BDAB@@@B@B@BBBDB@B@B@H@D@BA@@@AB@@Q@C@A@CBA@A@AAEC@A@E@@@AA@AAA@C@CDAB@BBFDH@@@B@@ABCBGBA@C@C@@@A@@B@@DH@BDBDDBD@B@D@@ABA@@@AAEAA@KBIBE@EBE@CAA@CA@AA@@@AB@B@B@@AB@@A@A@C@@@@BAB@B@J@@ABA@E@K@@@@@@@BDBBHDBBHDDBBBBB@B@@A@@@A@@@A@A@@@AA@@A@A@A@@@AAA@A@AA@@A@@@A@@@AA@@@@@@AA@@@A@@@@AA@@@AA@AAAA@A@@@@A@@@A@A@C@C@C@EA@A@@@BABABADA@CBE@C@EBA@EAA@IA@@A@CDABEFAB@@AB@D@@A@@BA@@@CFADADBBBD@@@BA@C@G@E@A@@@EBABA@A@KACAA@AB@@ADBFAD@@@@A@EAA@A@@@@BFJBB@B@BA@BDBBBDBB@FFBB@DB@@BB@@@@@B@@BB@@@@BBB@B@B@@@@BBB@@B@@BBB@@@BBB@@BD@DB@@BBD@BB@@BB@BD@BBB@BDBBDBB@BDBBB@BBBBB@BFF@BBB@BBBDHB@@BBB@D@D@DBB@BBBBBB@BBD@DBBBBBBBBBBDBB@BBBB@B@DB@@DDDD@@BB@@BBBD@BDDDDBBDBB@@BD@B@@@B@BDBB@D@BBB@@DB@B@@@D@@B@@BB@B@B@@@B@B@@@DDBBHDBBBDB@@BBBBBBB@BBB@@BB@@B@BB@@BBDDDD@@DDDBDBB@BBBBB@B@DDBBFBDDD@B@FBDB@@JDB@H@B@@@DB@@FBBBDDB@D@BBD@DBDBDBDB@@B@B@DBDBHBB@BBB@DB@@DBD@@BB@D@@@B@@BB@DBB@@@FDBBB@BBBBB@DBD@HBFB@@B@BBD@DBD@BBD@BAB@B@D@B@B@@@B@B@B@B@B@FDD@B@D@BBF@J@B@B@FBF@D@@@BB@@B@B@D@D@DAD@D@BAD@FDDBBBB@B@B@B@DAB@B@DAB@B@B@DBD@B@B@B@@@BBFB@@B@JCD@D@BAB@B@@@BBB@@BBA@@@A@@BABABA@@BB@@B@BC@ADCB@BA@@B@B@B@@B@@@@BA@@B@@@@A@@A@@AA@@ABA@@@A@@B@@AB@B@BCBA@@@AB@B@@@B@@@@@BDB@BB@@FBB@B@B@B@@@@AB@B@BAB@@@BAB@@@B@@@BABB@@B@BBB@B@DBBB@A@ABA@@@A@@@@@A@AB@BAB@BADA@A@@@@B@@@@A@@B@@AB@@@@@@ABA@A@@BA@@BA@CBAB@@A@@@@@@@A@@@@@@AABA@@@@@A@@A@BA@@@@@@@AB@@A@@@@EE@@@G@A@A@A@A@CAAA@A@AAA@A@AA@AA@AB@@@DABAF@@@@A@CAECCCAA@@A@CAA@A@A@C@@@A@A@@AA@@A@@EC@@@A@@@C@ABA@AAA@A@C@E@C@AD@@A@@@AAACC@AAA@A@A@AA@@A@@@@AA@@@CAA@ABC@A@A@A@@AAAA@@@@@@@@AA@@@@A@AAA@@A@@A@AA@@AAA@@@@@@AA@@@AA@@@@@@@@A@@A@@@@@AA@@@AA@@@A@AA@@A@@AA@A@@@CAA@@AAA@@@AAAA@A@@A@BAAAB@@AA@BA@@@@@@@@BA@@@C@@AA@AAACAAC@A@A@@A@AA@@AAC@C@@@A@@BABA@@@A@A@A@A@@@@@AAAA@A@A@@@A@@@ADE@@@A@A@@@@CAA@@@@A@@@@@A@@@A@@@@@@@@@A@@AAA@@A@@@@@AA@@@@@AA@A@@@@BA@@@A@@@CBA@@@@AA@@@@@A@@BA@@@@@A@A@A@AAC@@@A@@B@@ABA@@A@@A@@@@@@@A@@@@@A@@AAAAA@@@AA@@@AA@A@@@A@AAAAA@AA@@A@@@A@@AAA@@AAA@@A@A@A@AA@@A@@@@@A@@@@AA@@A@AAA@@@@AAA@@@@AA@AAAAA@AAC"],"encodeOffsets":[[106197,36094]]}}],"UTF8Encoding":true});}));