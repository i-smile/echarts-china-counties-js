(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('新华区', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"新华区"},"geometry":{"type":"MultiPolygon","coordinates":[["@@@SS@@TT@"],["@@JL\\nOPWbWMwH]WcwiRH\\cX"]],"encodeOffsets":[[[119662,39203]],[[119662,39203]]]}}],"UTF8Encoding":true});}));