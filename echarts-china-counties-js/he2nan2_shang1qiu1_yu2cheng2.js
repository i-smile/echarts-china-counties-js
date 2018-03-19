(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('虞城县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411425","properties":{"name":"虞城县","cp":[115.828319,34.400835],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@D@@A@@REVGLCDALTNBXBF@B@B@BBdDD@N@H@XBD@X@B@FBtN@@DBLBR@XBHDHDBZ@F@BLXLBTB@@VWDAPQ\\QJ@ZDNHB@PHRHFBH@JATABA`_HO@CDIBCDCBCJKDELCFEFCB@H@B@H@BBFBHDJFFDFDPFB@DBDBFDLHBBBCBEEABA@A@A@C@E@CACBEAECCAEAE@CAA@E@EDEBC@@BCDCDE@CJE@C@E@KIEIGGIWABM@E@CAAAAAA@A@AAACECCG@ACBC@AAEIK@@DCBEFEDAHGBABABG@ABC@CBGBA@AFCHA@@CI@@@A@C@@AAQB@AA@@@@A@@IBAIG@C@@AC@@AA@@AA@C@ACEAE@@E@@@@@@A@@@A@@D@@A@@@I@@FA@@@@@AA@B@@A@@@AN@@@FD@AFC@C@@AM@AEG@@@@FG@A@@@A@@A@C@@ACOAA@A@BEC@@AC@@@E@@EOAAD@B@@C@@AA@C@@@@@@F@D@BAB@B@B@@C@@AA@@AC@A@@A@AC@@DC@@@B@@CC@@D@@@CA@@B@@A@@A@@@AAAC@@@D@@AE@S@AA@@AAA@@@CE@@@@BFABACA@BDA@@@@BiA@DB@@H@@A@ABAB@@A@@AA@@C@@C@@EC@@AEB@BGB@BA@@CA@@@A@@AA@@CM@G@@@C@@DA@G@@A@CA@@@@CA@@AA@BCD@@CBC@@@A@@C@@@@CCB@C@@@AE@@CB@@C@@A@A@AG@A@AD@@@ACB@@AB@BAD@B@@@AAB@@CE@@AF@B@F@AK@@@A@AA@@AA@@A@@@@D@AA@@CBA@@AF@@@@CA@@AAAB@AEA@AA@@F@ACAGEB@AE@@@@CD@@AC@@C@@A@@AC@@@@@A@A@@@@@AEA@@CA@BAF@@@ACA@@@@@B@BA@@B@@A@@@A@@@A@@@A@A@@BA@@@A@C@@@AAB@@ABC@C@@CGBAC@@AE@@DAD@@A@AA@@EA@A@@C@A@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@B@@@B@@AB@B@BAD@@@@@B@@@@A@@@@@AH@@A@@@BFA@AF@@CD@@@B@@@@AB@@CDA@C@@D@@A@C@@A@@@GD@A@@@AA@@@@@@AC@@EC@@CA@@AAA@A@AA@BAAA@A@@@AB@ACB@@@G@AA@@EBAAG@@A@A@AC@@A@@@AC@@A@@@G@@B@@@@CA@ACC@A@IAA@@@@C@@BA@A@A@@@@BA@AAC@@ACACB@ACD@@AB@CEDAAA@AAAA@CCB@AAA@CG@@BAAAB@B@@ADA@@DA@@@@@A@A@@BCA@BAAE@@BABAD@BAB@A@AA@@DA@@@A@@A@@EA@BDA@ACC@@EGB@G@@@@F@@AE@AA@@D@AAA@@AA@@AAAE@@CA@@A@@C@@@AA@@EB@@AC@AA@A@ABBBGBACAB@@ABAA@@CBAEABACCB@BC@AB@@AEA@@@CBAEABACA@@@@@AE@CC@AC@@@AABC@A@@@C@@@CBA@@AEBBBCB@AA@A@@AAAA@AA@@A@A@@@AA@@A@@D@@AA@@@AA@@A@@AIB@@E@@@ABAA@A@A@A@@C@AA@@AA@@AC@@AF@@AC@@@@@BABA@A@A@AB@@A@@A@@CE@A@AEA@@A@@BA@@E@@EBA@CEB@C@@@IB@@K@@@ABAB@@AHABD@@@CB@@@B@B@B@@BFAB@NC@BD@@@B@@@BCD@@@@AD@@AE@@@@AB@F@@A@A@AB@@@AC@@N@@E@@BDB@@@AMA@@CA@@@@G@@@BA@@@A@@@@GB@@B@@@AB@@DB@@D@@@BB@@CB@@C@A@@@BA@@BA@@EA@BCA@@CB@@C@@B@BAB@@BDA@@@@@B@@BB@B@@B@D@@BB@@BB@@AB@@@@BB@@EB@@AD@@AH@BC@@@@@@@@B@@A@B@C@@@ABAB@@@B@AAB@@ABA@AB@AADA@@AC@@CEA@@@CC@@AA@@AB@AAAAB@ACBBCAAB@ACBAAAB@AC@AJABABABABAB@DA@BDAB@CBB@B@BDB@AABA@@D@B@@A@@AAD@@AB@@C@@@@AC@@A@@AA@@B@@ACAAAA@BA@@ACB@BC@BBC@@CA@@@AA@@A@@AABACA@@@C@@CC@@ABAA@@AD@@@@@DAACH@@AFA@@A@@CACA@AAA@@@@@AA@@@@@A@@A@@@AA@@@CB@@@@AB@@CJ@@ACA@AC@@A@@AAB@@CB@@BB@@BDA@@@A@C@EA@AAC@@AA@BBA@@@@@ACA@BHA@@DC@@CCBC@@AA@@AC@@B@B@@A@@ABA@ADC@A@@@BB@@A@AF@A@@ACBAC@A@CA@EBGDC@GACAG@EBCBCBCF@DAHAFAF@@AD@@CBEBEDC@A@C@ECCA@@@@AA@C@C@G@O@A@CBE@A@A@CC@GBC@E@AAGBC@E@E@AAEBCDCHAD@D@F@DBF@F@D@DADEB@BCBEDEDCBGHEBCDCDCBCFCDABCF@BABABG@IBK@CB@@AB@BABABA@ABA@@@A@CBABABAB@@AB@@D@BB@@@FA@AB@BABADAB@@A@@@@BABADABABABAB@AAAA@@H@@@B@@@BCBAB@B@@BF@B@D@BC@@B@BGB@@B@@BFA@BFA@F@B@BCJA@@BABAFD@@B@@@@@B@DB@@BFBADBB@@@DA@@@@@C@AH@@C@BEI@@CC@A@@B@@@B@BA@@BA@A@@DE@A@@@ABE@ABA@AB@B@@@@@BA@@@@BA@BDB@@BBB@BBB@BABABABADAB@AACC@@BC@@CCBC@A@@AC@@AAB@@@FA@@DBB@AD@@FA@@@@DB@@CFB@@@B@@FA@@BD@@@@@B@BAB@BA@@BD@@DBA@B@D@@@CB@@DD@@D@@B@B@@@@FG@ADABA@@AA@BBA@@AC@@BA@@AG@AH@@A@CB@@@BA@BHA@BFADC@@@@BB@AB@@@BC@@DA@@BC@@AC@DJAB@BABA@@AEBB@A@BDA@ACA@BF@@@@AAC@BB@@@B@@B@@BC@A@CBC@ABA@E@@BBBC@BBABA@@@@B@BA@AA@@@@A@BDA@BB@BA@A@C@BDA@@@@@@B@BDA@BBJD@@@@F@B@@F@@FD@@@ABA@CDADA@F@BB@@@@@BB@@DB@BDA@A@BDA@BDEBBDC@C@@B@B@FBDBBB@@CF@B@@@B@BJE@@D@@@@A@@DD@DA@DBBB@@AB@@B@B@@BD@BA@@DE@@FB@@CD@@DB@AEB@@FB@@DA@@@@@@DC@E@@B@@EBBFB@@BB@@H@@DHC@BB@B@@GBBFCB@BA@AAA@@@CBA@@AA@BBA@@BABE@@BCD@BEB@@@@A@BBE@@BA@@DB@@B@@@@BB@@BABBHRBA@B@BBD@BBBBB@@@BBBB@@DDDB@@BB@B@@@BDB@BD@@BDA@BBFA@@@@@B@@A@@DDA@BDA@B@@BD@@@BIBBH@@PA@BH@@@BD@@D@D@@@B@AAD@BAF@@CJ@@@@@B@@A@@@AB@BB@@B@BAAABA@BDADC@BHCBAHC@A@A@@@@@CABAABABBDA@@CGHCBDBA@BBAAAB@DDB@BABFDA@DBAD@ACD@@DJAD@B@B@B@@@@@@E@AB@@B@BB@@@@A@@@A@@B@@A@AF@@CD@@CHAAEFA@@AA@@ACDA@DDA@@BDB@@@AB@BB@@ADA@BB@BA@@B@@AACB@@@@B@@B@BFFABBB@@DB@@@@@@@B@@B@B@@@B@@ACA@BD@@EBA@BDAB@B@@@@@B@BA@@B@@A@@F@@@DG@BF@@@@@BB@@DB@@@@DB@@DBA@D@FBA@BDB@DA@@BB@@@B@@B@DB@@DC@@@@DA@@F@DC@@FA@@DA@@C@@@DA@BJ@@G@@BE@A@@J@B@BC@@BC@@FAD@@D@@A@@@DD@@DB@@DD@@@@JB@E@@D@@A@@JDA@@@FB@@@@B@DAB@@@@EB@@@@@DCB@D@@A@@AABBBC@ID@BAB@@ABAA@@ABCBABBBAB@@BBCD@@ABC@@@ABAB@BFBADCA@B@@@B@BABB@@BAB@@@@C@@BC@BD@B@@@DDD@DF@@F@H@BG@@BH@@D@@I@@BJ@@BI@@FC@@DA@@BB@@BBBBB@@AFC@A@AAC@C@@@@AE@E@AA@@@AAAA@@AA@@AC@@CA@CCA@@ECBC@GBA@@B@@@@B@@F@BD@@DD@@FE@@B@BG@ABABA@@@@BAA@B@BA@@B@B@@@@@FB@@@B@AB@H@@@@@DBBCB@@FB@DB@@@F@@AB@@DA@AB@BA@@B@BE@A@@D@@@@AB@B@@@B@BA@@@@BA@@@@BB@@BD@BHB@@@BB@B@D@@@FB@@B@@B@@A@CDB@@@DH@@FH@@B@DD@@DDB@A@CD@B@@@@C@@@BH@@AB@@EA@BC@@@@KA@CM@@C@AA@BC@ADBBE@@BCA@BE@@@@BAB@AHBBAB@@AFD@@ABABEA@BA@A@@@AB@@DDBADB@@AH@BDD@DB@BE@@BAB@@B@@@HAB@ACD@@DBDC@@F@DB@B@BA@BA@BBA@@BB@@BA@A@@H@BIBE@@DA@A@@A@@ADABCAABBFB@@BA@BB@D@@@BABAB@B@BB@@@@BB@@EB@@B@B@BB@FABA@A@ABB@D@@@@@B@B@@L@BB@@@DA@BBE@BFD@BBFB@BDB@F@@B@@BD@@@D@@AB@F@@AB@D@@@B@@@F@@C@ABF@@BB@@DABBF@@BD@@HD@@BB@@B@@@BD@@BBABBBD"],"encodeOffsets":[[118580,35404]]}}],"UTF8Encoding":true});}));