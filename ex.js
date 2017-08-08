/**
 * Created by hui on 2017/8/8.
 */
const detector = require('../index');

console.log(detector);

let html = '';

html += `<p>是否是node环境：${detector.node}</p>`;
html += `<p>是否是window环境：${detector.node}</p>`;
html += `<p>是否是火狐环境：${detector.version.gecko}</p>`;
html += `<p>是否是IE环境：${detector.version.ie}</p>`;
html += `<p>是否是opera环境：${detector.version.opera}</p>`;
html += `<p>是否是android环境：${detector.version.android}</p>`;
html += `<p>是否是ios环境：${detector.version.ios}</p>`;
html += `<p>是否是mobile环境：${detector.version.mobile}</p>`;
html += `<p>是否是iPhone环境：${detector.version.iPhone}</p>`;
html += `<p>是否是aiPad环境：${detector.version.iPad}</p>`;
html += `<p>是否是safari环境：${detector.version.safari}</p>`;
html += `<p>是否是微信环境：${detector.version.wx}</p>`;
html += `<p>是否是jdapp环境：${detector.version.jdapp}</p>`;
html += `<p>是否是chrome环境：${detector.version.chrome}</p>`;

document.body.innerHTML = html;