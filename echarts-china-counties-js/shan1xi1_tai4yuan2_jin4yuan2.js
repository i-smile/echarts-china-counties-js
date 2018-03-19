(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('晋源区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"140110","properties":{"name":"晋源区","cp":[112.47794,37.715193],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@C@GAK@ECEAKIAA@@AACAKSCEC@AACIKQAAA@A@IBEBGHCHCF@BCH@@@@ABAH@B@BDJ@FCDAD@FDF@FADEDCDGJAFADAFCDC@GBEBCBCD@BADEDADEH@@CJIJAB@FDFB@BB@@@BB@BB@B@B@B@B@@ADAF@DEF@DAD@D@BBDDBDDBBNFHD@BFNBD@DABEBCDAFBH@H@FADEHEDABC@@BAD@BTDbHPDLD`LNBD@HBH@F@LDHDDB@@@L@DBDDDBBFBD@@@DBDBDBBBH@D@FCNIPID@H@H@N@B@@@BA@@FA@A@@@@@A@@AA@A@@@C@A@A@@BAB@BAB@B@B@B@BBBB@BBBBDBF@BBB@@@BAJ@B@@AB@@@@A@@@C@A@@@AB@@@@BBBB@BB@@@AB@@ABA@@B@@@@B@B@BB@@@@@@@BB@@@@@DA@DB@BAB@B@@ABAB@B@@@B@B@B@B@BAD@@ABA@@@A@A@@FA@@D@D@@@FAB@@@@@@C@@@@@@BA@@@@BAA@@CA@@AA@DAB@F@@A@@@A@@B@@A@@@@FAAAA@A@@@@A@A@@@A@@B@B@D@@@@@B@@@D@@@CHB@@@FA@BD@@HDJFA@FN@@C@CAE@@@E@A@@AC@C@A@A@IACAE@AAEAA@CAE@ABGBGBCDIBCDGDEBEDI@A@@@@@A@C@GBC@@@A@I@E@@CGEIACGIAAEIAACCQKEGEEEKKGC@@AC@AAC@C@E@C@CBABID@@A@A@C@@@IAMIKKAA@@EEAAAA@@@@AAA@EC@AEC@@AACCAAAA@@AACA@A@@EC@ACAAA"],"encodeOffsets":[[115138,38551]]}}],"UTF8Encoding":true});}));