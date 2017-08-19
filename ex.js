/**
 * Created by hui on 2017/8/8.
 */
const detector = require('../dist/index');

console.log(detector);

let html = '';

html += `<p>是否是node环境：${detector.node}</p>`;
html += `<p>是否是window环境：${detector.win}</p>`;
html += `<p>是否是火狐环境：${detector.gecko}</p>`;
html += `<p>是否是IE环境：${detector.ie}</p>`;
html += `<p>是否是opera环境：${detector.opera}</p>`;
html += `<p>是否是android环境：${detector.android}</p>`;
html += `<p>是否是ios环境：${detector.ios}</p>`;
html += `<p>是否是mobile环境：${detector.mobile}</p>`;
html += `<p>是否是iPhone环境：${detector.iPhone}</p>`;
html += `<p>是否是aiPad环境：${detector.iPad}</p>`;
html += `<p>是否是safari环境：${detector.safari}</p>`;
html += `<p>是否是微信环境：${detector.wx}</p>`;
html += `<p>是否是jdapp环境：${detector.jdapp}</p>`;
html += `<p>是否是chrome环境：${detector.chrome}</p>`;

document.body.innerHTML = html;