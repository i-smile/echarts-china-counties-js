(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('金州区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"210213","properties":{"name":"金州区","cp":[121.782655,39.050001],"childNum":13},"geometry":{"type":"MultiPolygon","coordinates":[["@@B@@@@@@A@@@@@@A@A@@@@B@@B@@@"],["@@A@@@@@@@@@@@@B@@B@@@@@@@BB@@@A@@@@@@@@@A@@@@@@A@@@@@@@@@"],["@@B@BB@@@@B@@@@@A@@A@@B@@@@@@AA@@@A@@@AB@@"],["@@B@B@@AA@@@@A@@A@@@AB@@A@@@@BA@@BB@B@@@BA@@"],["@@@@@AA@@@A@A@A@@@@B@@@@B@@BB@B@@AB@@@"],["@@@@@@@BB@@@@@@A@@@@@AA@A@@@@@@@@@@B@@A@@A@@@@@@@@AA@@@BA@B@@@@B@@@@@@@@BB@@@@@@B@@@BA"],["@@@@@BDB@@B@BEA@@AED"],["@@B@DB@AB@@@@@@A@AA@BA@AA@@A@@A@AB@BAB@@@B@B"],["@@@BB@@BB@BABBBA@@BAB@B@@@@A@@A@@A@@@A@@@@@A@@A@EBCB@BA@@B"],["@@@@ABCB@B@B@@ABA@ABA@@@@B@@@@@B@@@BB@BB@BB@D@B@@AB@BBB@B@BB@B@BB@BBB@B@BABA@ABA@CA@@A@B@@A@@@A@A@@@@AA@A@@AA@AA@CAC@A@AA@A@"],["@@AAAA@@A@A@@@A@@B@@@@@@DD@@@@AB@@A@@BA@A@@@A@@@A@AB@@@@@B@@@@@@A@A@@@AB@@@@@@@BBB@B@@@BA@@@@@A@@@@@@B@@@@@BB@@@@AD@D@@@B@BA@@BA@@B@@@B@@B@@BAB@BA@@B@@@B@@@@@B@@@BBBA@@@@@B@@B@@B@@@@@A@@B@@A@@@A@@@@@A@@@@@AAACA@@AA@A@@CA"],["@@C@A@CBCD@B@B@B@BCBCBCBCDEFA@CBA@@@A@@@@@CBA@AA@@AAA@@@GF@@@@BBB@B@D@B@DA@@DBB@B@B@B@B@BBB@BA@@BA@CBCBADADADAD@D@DABABCBABA@A@@BA@@@A@@A@CAC@"],["@@IBQDEBGACCIDIBKBKDKDGDABAB@@IDOPAD@B@B@DBF@@BF@@@@@@@@C@A@A@@B@@@@@B@@AB@B@@@@@@A@@@@@AA@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@CBAB@@@@@@A@@@@@AB@@B@@@@@@B@@@D@BA@ABBB@@BB@@@BB@@@BB@@@@B@@@@@@B@@A@A@@@@BA@@@@@@@@B@BA@@BE@C@A@A@@@@@@BC@A@@BA@@@@@@@@B@@CBAA@@@@@@CB@B@@@@@@CB@@@@AB@@AACACC@@@@IC@@C@@@@@A@@AA@@@A@AAA@AAEE@@ABCD@@EAABA@ABB@CDABADA@ADEHZJd`FFJHBHKFCBEDEJA@CBCFAF@D@F@DABCBA@A@AAC@A@A@A@ABCT@@A@@@C@AAA@AB@@AB@D@D@B@BGDI@MAeBI@GFERIPCDCDAH@HBHDDHDNDBD@BCDMFCDCFAHBDDFHBHBH@VAdGB@@B@DABOHADBDBBDBF@LGDBDBFD@DABCDC@A@E@A@ABC@A@AACAC@ABAACBADGNEDEDGAECEIAAC@CBADGX@HBJDHFDHBH@VAH@F@BDBHBDF@^IFCF@FDJFF@FAHGDCDAH@LDPJ@BBD@FCFEDE@SEEBEBAH@DDDDBDD@DAF@FDBFBNHfRJBTOHAFFB^CDMD@HHLNPDJ@F@FEBICIEMKYIACACECG@GBM@_IiKSQIC¥Id¦A@D^FDT@J@BFADKFABGHFJHHHHAFGRABABCBC@CACAAB@@@BBD@BA@C@A@CAAACBC@CFCDEBCBA@@DA@@@C@A@CAABABBBDDFBBDBDJLJHPLHHB@HJL@BBB@@BCBAD@@@DFFFHJHLHDBB@D@F@DAHBF@B@B@B@DCD@BAD@B@B@BA@CBC@@@AB@B@B@B@DCBAB@B@B@@@B@D@B@D@B@JBHBBB@@@@BB@H@DBDBB@BED@B@@BDDBBBB@ADBB@BBBD@BBB@B@B@@@B@B@B@B@B@B@B@B@B@B@DBDFDBBBBBDBBBB@B@@BB@DAB@D@BBB@DBBAB@DCBAH@BABE@AB@B@B@BBDFBDDBBB@@B@B@@@@B@@AB@B@@@D@@BB@@BB@@B@BBB@BBBDBDDFBFD@LBFBF@B@D@B@B@@CBAB@DABA@@@C@CB@B@FCFCBCB@B@@BBBB@@@B@BE@CB@DD@@B@BA@AB@@AB@B@BBBDBB@@B@B@B@BDDJDHBBB@@BBAHAHC@A@A@@BAB@B@FDD@BBB@DBB@B@BA@@BA@AAAA@ABA@ABA@A@@A@ABABAD@BAB@BB@@B@B@@@@AAEGIECEE@@AA@ABA@@D@B@D@D@F@F@FAF@B@DB@@BBA@EDA@@B@BHFBBBBBBB@@@BABABA@A@CAA@ABABADABAB@B@@@B@B@B@B@BADABAB@B@B@D@@ADAB@B@B@@@B@B@BABABAB@@@BABCDEBE@A@C@@BAB@B@DFDFDD@BBBB@@@B@B@B@B@B@@@@D@B@@BBB@B@BA@AAA@ABA@AB@BA@GE@IAECAEGI@C@CBCBA@CBABA@C@CACCCBEBA@A@A@ACCA@@A@CA@@@@@@@AA@@@@A@@C@@@EBKA@@AB@IIC@EADEBCDAB@FAL@F@DAFEBADCBAB@B@D@FAH@JKFIDE@CGAE@M@e@BGP@FIOA@JM@AKGDEDG@DEWOUPKKIEJSBCBABCDABA@@HCBABCB@EG@AB@CCAABABB@@@@B@@@BBBA@@B@@@DA@ABAHE@@@@@BB@@@@@@AB@@@B@@@FABAD@DBDBHAFBDBBDFBF@HAH@DAFAD@DEBCBG@CCCACACAEDBF@@@@@DABCBA@@D@@@@AD@@@NH@@@@@@B@@@@@@@@AB@@@@B@@@@@@B@@@@@@@B@B@B@@@@@@@@@B@A@BA@@@@DAB@@@B@B@B@B@@@B@@@@@B@@@D@@@B@@@B@@@BB@@B@@@@@@@@@@B@@B@@@@B@@B@@@@@B@@@@@@@@A@@@@@@@@@@@@B@@B@@B@@@@BA@@@@B@@@@@@@@@@BB@@@@B@@@B@B@@BB@@A@@@AB@@@AC@A@@@@@ABA@@@@@@D@@@B@B@@BB@@@@@@@B@@A@@B@@@@B@@B@@@@@@@@@@@@@@A@@@BBB@B@@B@@@@@AB@@@@B@@@@@B@@@@A@@BA@A@@@@@@@A@@@A@@BA@@@@@@@@@@BB@@B@@@@@@B@@@@@@@B@@@@@@@@B@@@@B@@@@A@@@@@@@BBB@@@@A@@BA@A@@@@@@B@DB@@@@BB@@@@@@B@@@BBB@B@@@@@@A@@@@B@@@@@@@@@@@B@@@@@@@@@@@@A@@A@@@@AB@@@B@B@@@B@@@@A@A@@@@@@B@@@@AA@@@@A@@@@@A@@@@@@@@B@@@B@@@@@BB@@B@@@@@@AB@@@@@B@B@@@@@B@@@B@@@@B@@@@@@@@@A@@B@@@@@@@@@B@@@@A@@B@@@B@@@B@@@@@@@@@@@B@@@B@B@B@@@@@B@@@@B@@@@B@@@BB@@BB@@@@@@B@@@@B@@@B@@@@@BB@@B@@@@@B@B@@@@@@@@B@B@@@@@B@@@@@@B@B@@@@@@@@B@@@@B@@BB@@@@@@@@@@@@B@@@B@@@B@@@@@B@@@@@@B@@@@B@B@@@@BB@@@B@B@@@BB@@@@@A@@@A@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@BA@A@@@@@AB@@@@@BA@@@A@@BB@@B@@A@A@@B@@B@@@B@B@@@B@B@@@@@B@@@@@B@@@@BB@@@@B@@@@@@@B@@@@BB@@@@@@@@@@@B@@@A@@A@@@@@@@A@@@@@@A@@A@@@@@@@AA@@@@@A@@@@A@A@@@@@@BB@@@@@@B@@@B@@@@@@@@@@B@@@B@@B@@@@@@@@@@@@A@@@@@A@@@@@@@A@@B@BAB@@@@@@BA@@@@@@B@@@@BBBB@@B@@A@@B@@B@@@AB@@@AA@@@@@ABA@@@@@@@@B@@@A@@B@@@B@@@@B@@@@A@A@@@AB@@@@@@@@@@@@@@@@A@@@@@@A@@A@A@A@@@@@@@@@@@@@BB@B@B@@@@@BB@@@@@@B@@@@@@B@@@@B@@@@D@@@@@@B@@@@@@@@@@B@@@@BA@@B@@@BAB@DAB@@@@@B@@BB@@A@@B@@AB@@@B@@@@@B@@@@@B@@@B@@BB@@A@@BA@@@@@@B@A@B@@A@@@BB@@BB@@@@AB@@@@@@@A@@@@@B@@@BA@@@@@@@@@@@@B@@@B@@A@A@@B@D@B@@@@@@B@@@@B@@@@BB@@@@@@B@@@@BBBA@@B@B@@@@BB@@@@@@A@A@@@@B@@@@@BA@@@@B@@@B@@B@@@@@BBB@@@@DB@@BBBB@@B@@@@@@@@@B@@@@@BAB@@@B@@@@@@E@ABA@A@@@@@@B@B@@@B@B@D@@@@@BB@@@@@@@@@@@@@BB@@@BB@BB@@BB@@@@BB@@@@@BAB@@AAA@@@A@@D@@@@A@A@@@@@@B@B@@@@A@@@A@@BAB@BA@@B@@BDB@@BB@B@@@@@B@@@@B@B@@@@@@A@@@A@@@@B@B@@@@BBDDBBB@@@@@A@A@@B@@@@@@A@@B@B@@@@@B@@ABA@@@@B@@@B@@ABA@@@BB@@@BA@@@@B@B@B@@@@B@@@@DBB@BBB@@@@@BA@C@@B@@@@@B@AA@@B@@@B@BAB@B@@CB@BBB@@@@A@AA@@A@@A@@ABA@@@@B@@@@@@@@@@A@@@@@@@@@AA@@@@C@@@@B@@@@@@@@@@@@@A@@A@@B@D@@@@@@A@AB@@@@@BB@@@B@@@B@B@@@@AB@@@@BB@@@B@B@@@@BA@@B@@@B@@A@@@@@BB@@@B@@D@@B@DBD@@@@@DAB@BABE@A@@@@B@@@B@@@AB@B@@@@@@B@B@@@@B@BA@@@@BB@@@@@@@BA@@B@@@@@B@@A@@DA@@@@BB@@B@B@@@@@@BB@@@@A@@@@@@DA@@@B@@@B@B@@@@BB@@B@B@@A@@BAB@@@@@BB@@B@@B@AB@@@@@@@D@B@BB@@@@@A@@@@FBB@@BJ@BBD@@B@@BA@@@AB@BC@@BA@A@@@@H@f@FHBBBBN@@EBEEMM]O_GGIEUIWmOYIEAIEEEAAMWECIAY@G@EC@@AEBELEBC@EI]@G@I@@BEFC[FC@E@ECEGAcDKAIAQCMGMIKIKKOOKKEAGAoBGAA@ECAEAGDIFIfcDEAKEGEAI@VODE@E@cGICCEaCCG@G@jIFGHCDEBC@KGCE@E@ERCH@FERcBEACACECECGAEBOJADDHADGDEAQAG@qTIBE@ECAE@EHGjYNETINEJEBCAGEI@G@KDGFAPCJBDA@CKGGEOAMAIEk[ECI@mJMFGDAFBHFH@FCFEBMIK@OHCDADDJ@HALQbENAD@FBFADCBUF"]],"encodeOffsets":[[[124506,40125]],[[124415,40183]],[[124961,39970]],[[124919,39901]],[[124588,40250]],[[125122,40107]],[[124594,40229]],[[124525,40194]],[[124530,40104]],[[124409,40135]],[[125233,40212]],[[124393,40128]],[[124703,39962]]]}}],"UTF8Encoding":true});}));