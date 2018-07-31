(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('海城区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"450502","properties":{"name":"海城区","cp":[109.117209,21.475004],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@GLAH@DBHDBDBNGFEDEBE@CCCEEE@ID"],["@@CACCA@CBEDIBCFGHGBEAECCGDGHG@A@E@@CC@@G@IFMN@N@RALCN@HHHFL^PXJTDHCNELQ@EBMCMGQ@AEGEQCC"],["@@EAEA@@A@C@C@GDKDCBA@CDIIA@A@@@ADA@@@A@@@A@@AA@AB@B@@@@@B@@CBA@@@@@@B@@@@EBABA@@AA@ABE@CBEB@@WJBBBFJLVVZNHDHBPDtLJBHBHBNHNHHFFHDDDHBDBFBJ@@@P@BAJRdD@B@@AB@@ABABB@@@@@@@@@B@@@@@@@@ABBDB@@@@@BABAB@DA@@DAJC@@@@@@@@B@@F@@@B@B@@@D@@@@DDBBNL@@BB@DBD@BBB@D@BBB@DBD@DBBHBBD@ABABA@@BA@@@@BC@AB_@W@CBCFOBE@ADIBC@A@CEi@CAAS]WcACAAGEKG@AA@GA@@@@A@A@@E@E@E@@BBBBBD@BBABAB@B@@@BA@@B@@ABA@C@A@@@AA@@@@@AA@@@AA@@AA@@@@@A@@@@@@@AB@@GCCA@@@AB@@AA@@A@ABA@@A@@@@@@A@AA@@@ABA@@@@@@@@@AB@@@@@@A@@@AA@@@A@@GTAHA@@D[GA@IAICUECAGAA@AAGA"]],"encodeOffsets":[[[111832,21403]],[[111752,21522]],[[111727,21961]]]}}],"UTF8Encoding":true});}));