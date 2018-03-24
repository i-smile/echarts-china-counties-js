(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('惠阳区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"441303","properties":{"name":"惠阳区","cp":[114.456176,22.789788],"childNum":28},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@BA@@@@@@@@@@@A@@A@@@A@@@@@@@@BB@@@@@@@@B@@"],["@@BA@@@@@@@@@@@@A@@@@@@@AB@@@@A@@B@@B@@@@@B@@A"],["@@B@@@@@@@@@@A@C@@@BA@@B@@@B@@@@"],["@@@@@@@@@BB@@@@@@@BA@@@@@A@@@@@@@@@@A@@@@@@@AB"],["@@@B@@@BB@@@B@@A@@AA@@@@A@@@"],["@@A@A@@B@@BBBA@@B@@@@@@AA@@@@@"],["@@@@@A@@@@@@A@@@A@@@@@@B@@@@@B@@@@@@@@B@BA@@"],["@@@A@@A@@@@@A@@@AB@B@@@@B@@@B@B@@A"],["@@@@BA@@@@@A@@@@@A@@A@A@@@@B@@@@A@@@BB@@@@@@B@AB@@@@@@@@B@"],["@@B@@@B@@@@@@A@@@@@@@@@A@@@@A@@@A@@@@BA@@B@@B@@@@@@@"],["@@@@@@BAA@@A@@AAA@@@@B@@@@@@AB@@@BB@@@B@@@B@"],["@@@@@@B@@@B@@A@AA@A@@AABA@@@@B@@@BB@@@@@@@B@@@@@"],["@@@B@@@B@@@@B@@A@@B@@@@@B@@@BA@A@@A@@@@@@@AA@@@BA@@@AB@@"],["@@B@@@@@BAA@B@@A@@AA@@@@A@@@ABA@@B@@A@@B@@@@@@B@B@@@B@"],["@@@@ABB@@@@BB@@@B@@BB@@@@@B@@@@@@@B@@@@@@A@@@@A@@@AAA@AA@@A@"],["@@@@B@B@@@B@@@@@B@B@@A@@@@@AA@B@@AA@@@@@A@@@@@@@A@@@A@@B@@A@@@@@@@A@@@@B@@@B@@@@@@B@"],["@@@@@@BB@@@@BA@@@@@@@@@@@@BA@@@@@@@AAA@AA@A@@A@@A@@B@@@@A@@@@B@@@@@@@B@@BB@@@@@@BB"],["@@@BBBB@@@B@B@@@D@@@B@B@@A@@@@@@@AA@A@@@@@A@A@@A@@A@@AA@ABA@@B"],["@@BB@@B@@@@A@@@@BA@A@@AA@@@@@@@A@@@@A@@@@@@@@A@BA@@@E@AB@@@@@B@@D@BB@@BB"],["@@@@BB@@@@@B@@@@@B@B@@B@B@DA@A@A@@@A@@A@@@@A@@@A@A@AA@@BAB@@@BA@AB"],["@@@@BB@@@BB@@@@BB@@A@@BC@A@A@@@A@AA@@@@AA@@@A@AB@B@@@@@@@B@@A@@B@@@@BB"],["@@@D@@B@@@B@@BFA@@@@@@@K@A@@@@@AA@@@@@@@AA@BA@@@A@@BA@@B@@@@@B@B@B@B"],["@@D@@@BA@A@A@@@A@@B@@A@AB@@@@A@G@@@ACBA@A@@@@@A@A@@@@B@B@B@B@B@@D@@@@B@B@@@@AD@@@@@B@@@B"],["@@@@@D@@B@B@@AB@@AD@B@D@@A@A@A@@AAA@AA@AACAA@@A@@@@BA@@@AA@@@A@AA@A@CBA@@BBB@B@BB@BD@BBD@@B@@A@@@B@B"],["@@BDDD@BDHD@BDBDB@BDB@BBD@F@BA@@@EAAECAA@A@AB@@A@@AACCCA@A@@A@A@A@A@A@AAAAA@ABA@@B"],["@@EB@@GAAAC@@@@B@B@@@B@@AB@@ABBBAB@@AB@@A@@B@@B@@BB@@BA@@B@@@B@@@@B@@@@@BA@@BB@@@DB@@BB@B@BABE@A@AA@@A@@BAB@B@BA@@BBB@@A@A@@@AB@B@D@BAB@BA@A@A@@@AA@BA@@@AB@@ABA@A@@@A@@@A@AA@BA@@@A@@A@@A@A@A@@@@A@AB@@AB@@ABAB@@@F@B@B@@ABA@AB@BBB@@AB"],["@@A@ADCD@BAJA@A@@@CB@@BD@BABA@@DBBDBDBBBB@B@FAB@DBBB@DB@@@DABC@CB@B@D@F@@@BA@CB@FDDBD@@@DCBCBAC@CE@A@@@ACBA@@ABC@A@AA@ABI@E@AAA@ABA@@ACCGEA@A@A@"],["@@C@ABABC@EBAAA@@@@AAA@AAAA@A@AAGA@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@AA@@@@C@@@@@@@A@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@B@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@@B@B@BA@CB@D@BAB@D@B@@@B@@DBB@D@BBBBB@BB@B@@@@B@DBB@B@@BFJBBAHCD@BAB@BAAA@A@A@CBAFA@@@@@@@@@@@@@@@A@GAA@@AA@EH@B@B@B@@@D@@@@BBABABCB@B@B@@@@@@@@ABACA@AAA@@B@@A@C@@@A@AAAA@@ABA@@@@B@@B@@B@BA@AD@@AD@BCDAB@B@B@BB@@@B@@@@AB@@@B@@B@D@HBBDBBBBB@BB@@B@B@B@B@@BBBB@F@B@@@BAB@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@D@@@@@@@@@@@@@@@@A@@@BB@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@B@@@@B@@@B@@B@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@A@@@AB@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@A@@@@@@@@B@@@B@B@BAB@@@@A@@BAB@@@B@@AB@@A@@@@@@@@@A@@@@@@@ABA@@BA@@@@@@@@B@@@@@@@@@@@@AB@@CACACAAAA@AA@E@@AC@@@@@@@A@A@@@@@A@@BA@A@A@A@CAA@C@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@GC@@@@@@@@A@@@A@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@BA@@@@@@@CBA@@@AB@@@@A@A@A@AB@@A@A@@BA@AB@@A@@@A@A@CAAA@@@@@@A@A@AA@B@@CBA@@B@@@BBDAF@@@B@@BB@@CFAB@@GB@@A@AA@@C@ABAB@D@@ABAB@@@@@BDBBD@@@@@@BBB@B@DBB@BF@F@B@BA@AD@@@@BHB@BB@@@@@B@B@@@@ABAAA@@@AB@@AB@B@@A@A@AACB@@ABA@A@@@A@CAC@C@@@@@@@A@@@@@@@C@@@AC@AAAA@G@EB@@@@CB@@@A@@ACAA@A@AA@AAC@@B@@@B@BC@A@C@@@CA@AA@MB@@EBA@@D@B@@@BA@A@AB@BAAA@AAC@CB@@AA@AAA@@@A@A@AEE@@AAA@CA@@@@@@@@@@@@@A@@@A@@AA@@CA@@A@CAA@A@@A@@BA@CAA@@@@EEA@EEA@CBC@C@@@@@AAA@@ACB@@@B@BGHAFABA@A@C@ABIBA@@B@@@D@B@B@BAB@JAB@BA@CD@B@FB@@BBBB@BB@@@@@@BB@BBB@@@B@@@B@BBFABAB@@@F@@BBBB@@@B@D@D@B@B@D@@ABA@AB@B@B@@BB@BA@AB@B@B@B@DB@@@B@@@@@BA@BBB@B@@AB@@@@@@AB@DBB@H@@@B@BA@@BAD@@@B@BA@AB@BAFBB@@@D@B@D@@BBBB@@BDBBB@BBBAB@B@@A@ADAB@BABAB@B@@BB@@D@@DBB@B@@@B@@BBB@@@D@BB@@BB@@@@B@@@@@@@@@@@@B@@@@B@@@@@@B@@@@@@@@@@B@@B@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@B@@@B@@@@BB@@@@@@@@@@B@@B@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@BA@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@CB@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@A@@@@A@@@@@A@A@EA@@@B@@@@ADED@B@BEA@@A@CBA@@@CB@BA@@B@B@D@BDD@@BBBDB@@@@@B@@AFBBAB@@BBBB@BB@BB@BB@@@BB@AB@D@@@B@B@B@B@B@BB@@F@B@@BBB@BBB@@BBBDD@B@BDJD@B@@@BDB@@@AB@@@B@@@B@@@@@@@@@@@@BB@@@@@@@@B@@@@@@@@@@@@@@@@@@ABB@@@@@@@B@@@@@@@@@@@@@DFB@@@@@@AB@D@B@BH@@@@@B@B@B@@B@@BA@@@@@@BA@@BB@@AB@@@@@@@D@B@@BBB@@@BBB@B@@@@@B@BADB@@@B@@@BB@B@DB@@B@ABBBDABAB@@BB@BBBB@@BA@A@C@@@@D@BAB@BC@@@@BA@AB@@@B@@@B@ABBB@@BB@@B@AA@AB@@ADAB@BC@@D@@BB@@@@@@@@A@@@@@A@@@@BA@@@@@@@@@@@@@@@@@@@@@@BA@@@A@@@@@@@@@@@@@@@@DABA@@@@@@@@@@BB@@@@A@ABAB@B@@BBA@@@@@A@@@@@@@@@@@@@@@@@@@@@@BA@@B@@@@B@@@B@@@@@@@@@B@B@@@@BA@@@@@@@A@@@CBAAA@A@@AA@@B@B@BBB@@EAAB@@BB@DBDA@CC@@ABAD@@BD@B@@@BBBBB@@BB@@B@DABB@@B@BABAB@BBBB@B@@@@@DH@D@@BD@@@B@BB@BB@CD@@@@@B@@B@@@@ABCB@@@BD@B@@@BBB@@BB@@BB@BB@@@@BB@@B@@@ADBD@@@@BBB@AFAABBB@BBBB@@@@BBDB@B@@D@BABB@BA@@@@@A@ABAB@BB@@AB@B@DB@@@BBA@@BB@BBBB@AB@B@B@BB@@@A@@@A@@B@@@BDBBB@DAB@B@BB@BBAB@BB@@@@B@@CA@@AA@@A@ABCBC@AAC@@@A@ABA@@@A@C@@DA@A@AB@BBBA@@BABBB@D@BBB@B@B@B@BBB@B@@@DAB@BB@@BA@@BA@A@@@AA@@A@AB@BA@@@A@@BA@A@A@A@A@A@@@AD@D@B@@@@ABA@@BA@@BBB@@A@@AA@AA@@C@ABA@A@A@@@A@@AA@@@A@A@@DA@@@@@A@A@E@@@@@@B@@@@A@@@@@@@A@AD@D@B@@BDBB@BBBA@@@@@AB@BA@@DBD@D@B@B@@@@@BBDB@@B@@A@@B@D@@@@A@A@AB@@A@@@A@A@@AA@@@@@AB@B@@@BA@A@@D@@@B@DAD@B@@A@@@ADCD@BA@@@ABA@A@@DA@@HB@BDAB@BA@BAB@B@B@@@@AB@@@BB@D@B@BBDB@B@@A@AB@@@@D@@@@BBBB@BAB@@@@@@@@@@@@@B@@@AD@BBB@@B@B@@@@@B@@@@@BDBB@@@B@B@@@AB@@BB@@BB@BB@BB@BA@@@@@B@@@@@@@@@@@@B@DAB@BBBBB@B@B@BB@B@DBB@@@B@@@@@@@@B@@B@@DDBDBBBDBB@BB@@BB@B@B@BB@@@D@D@D@@A@AB@@@B@@@@@@DB@BB@@B@@A@@@A@AAA@@B@@AB@@A@@BA@AAA@A@@@@@A@@@BD@@@@B@@@B@@@D@@@B@@@@@BB@@@@@@@BBBBA@@B@@@@A@A@@@AB@BBB@@@@CBB@@@BB@BLB@BAFED@BD@BCBBDBBD@DDBBB@BADDBFDBDBDHBBBBABAB@@DB@HHB@DD@ABCFCB@F@FAB@B@FAD@BAJDD@FBDBFFFDB@@BAHADABAFBHFDJDDAHAD@F@BH@FDF@FBADBFBDABD@@FARDB@F@BDHA@A@@AA@@BA@@B@@@@@A@@C@@@@BAB@B@BA@@@A@A@@BB@@@BBDBBBBDB@B@BBBBDBB@BD@BBB@@@@@@D@B@BBDADA@B@@DADAFGB@BADA@C@ADAB@F@ABDBBBDABDBBBBB@B@@@@A@CBEBA@C@@D@BA@ABAB@BC@C@A@ABCA@AA@ABAB@B@DCBAFABA@@@@@CAAAAAA@AD@B@BABA@CAA@CACDC@E@@@A@AA@BE@CBA@A@AA@@@@CAAC@@E@A@A@@B@@A@AAABA@@A@@A@@@@@@@@ACB@@@B@@@@AAAB@B@AABACABAB@@@AA@A@@BBBAA@@A@@B@DCB@@@B@@A@E@@B@@C@C@@@A@AAA@BA@@@AAA@@BAB@BA@A@A@C@ABCB@A@@@A@A@AAAB@@@AA@@D@@@@@AAA@BAB@@@B@BBB@BADABAFCDC@AA@C@@@A@@@B@@AAAAB@AB@@AAB@@@AB@@AB@@@E@@@FA@@C@@@@@A@CAACA@AC@@AAA@@@A@A@A@@BAAA@A@@AAAA@@AB@DAD@B@D@BAB@B@BCFAFCDABAHABBB@@ABA@AAEA@@@A@C@A@AA@@@@@@@@@@@@@@@@@@A@@@@@@@@@E@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@AA@@@@CA@@@@@@@@@@@@@AE@A@CAA@A@@@CBA@ABAAAA@CBA@AAEAA@A@@@@@@A@@@AAAC@ABCDA@AA@AAA@CACC@C@A@A@@@@@AFCBA@C@@BAAAAA@@AAA@@AAAAA@A@A@A@EDABADE@C@@AKB@@@@AAC@@@CCAEA@BAAABC@A@@@A@AA@@A@@@GF@AAB@@CB@BBB@@@@@@ABA@CDEH@@AB@@CE@GCACACACCB@ACA@A@AA@ACCA@@AAAA@AC@@@@@AAA@@AAA@EBAA@@AAB@BAB@@@D@@@BA@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@AB@@@@@@@@@@@B@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@BA@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@A@@@@B@BAB@@@@@@@@@@@@@B@@A@@B@@@@@B@@@@@@@@@@@@@@@@@B@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@BA@C@@@@B@A@BA@@@@@@A@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@BC@@@@@@@@@@BA@@@@@@BB@@@@B@@@BC@@@A@@@@@@BA@@@@BA@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@AAG@@@A@@@@@@@@@@@@@@AA@@@@@@@@@@@@@A@@@@@@A@CC@@@@@@@@@@@@@A@@A@@@AB@DBB@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@C@@@@@@@@@CBCB@@A@A@@@@@@B@HAB@@@@AB@@AB@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@A@@@@@@@@AACEAC@AAA@@@@@@@@B@@@A@@@@A@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@A@@@@@@@@@@@@@BC@AFG@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@BC@C@@@@B@DA@@@@@@@@@@@@@@@@@@@@BA@@@@@@B@@@@@B@@@@@@@B@@@@@@@B@LE@B@A@@D@@A@@@@@@@@@@@@@@@@@@@@@@BI@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@AA@@A@@@@@@@@@@BC@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@AA@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@AC@AAA@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@BABA@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@B@@@B@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@BBBB@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@A@@B@@A@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@BBB@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@B@JB@B@@B@@@@@B@@@B@@@@@B@@@B@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@B@@@@@@B@@@BB@@B@@@@@@@@@DB@@@@@@@@@@B@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@B@@A@@@@B@@@B@@@@@@@@@@BB@@@DB@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@B@B@@@@@@@@@@@@@@@@@HBB@B@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@BB@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@BB@B@@B@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@AB@@@@@@@@@@@@@@@B@B@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@BBF@D@B@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@B@@@@B@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@A@@B@@A@@@@@A@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@CB@BA@@@@@@@AHGB@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@B@@@@@@@BA@@@@B@@A@@B@@A@@@@@@@@@@@ABA@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@DI@@@A@@@@@@@@@@BA@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@CBC@@@@@A@@@@@@@@@@@A@@@@@@@@@EA@M@ECACAC@EAC@CCGEGECcMECSGmQYIEEE@C@CBABAJEDADCDODI@CAEACEAIAOCWAAAWCQEIGKIWMECCAI@C@C@OGCF@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@G@CBEAABA@@BCAA@C@A@@@CAC@C@@@AG@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@CA@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@AB@@@@@@@@@@@@@@@@ABA@@B@@ABA@ABE@A@E@"]],"encodeOffsets":[[[117400,23182]],[[117393,23200]],[[117397,23167]],[[117392,23235]],[[117394,23162]],[[117399,23197]],[[117390,23108]],[[117387,23173]],[[117386,23263]],[[117400,23225]],[[117397,23112]],[[117402,23133]],[[117392,22989]],[[117390,23260]],[[117365,23236]],[[117378,23206]],[[117399,23178]],[[117382,23154]],[[117422,22943]],[[117397,22987]],[[117412,23115]],[[117401,23206]],[[117401,23220]],[[117361,23215]],[[117393,22968]],[[117403,23116]],[[117381,22988]],[[117210,23212]]]}}],"UTF8Encoding":true});}));