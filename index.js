/**
 * Created by hui on 2017/8/8.
 * check client 返回都是通过true判断
 */

const nd = typeof module !== 'undefined';
const win = typeof window !== 'undefined';

const version = () => {
  let ua = navigator.userAgent.toLocaleLowerCase();
  return {
    // webkit 内核
    webkit: ua.indexOf('applewebkit') > -1,
    // IE
    ie: ua.indexOf('trident') > -1,
    // opera内核
    opera: ua.indexOf('presto') > -1,
    // 火狐内核
    gecko: ua.indexOf('gecko') > -1 && ua.indexOf('khtml') == -1,
    // 是否为移动终端
    mobile: !!ua.match(/applewebkit.*mobile.*/),
    // ios终端
    ios: !!ua.match(/\(i[^;]+;( ua;)? cpu.+mac os x/),
    // android终端或者uc浏览器
    android: ua.indexOf('android') > -1 || ua.indexOf('linux') > -1,
    // 是否为iPhone或者QQHD浏览器
    iPhone: ua.indexOf('iphone') > -1,
    // 是否iPad
    iPad: ua.indexOf('ipad') > -1,
    // 是否web应该程序，没有头部与底部
    safari: ua.indexOf('safari') > -1,
    // 是否web应该程序，没有头部与底部
    chrome: ua.indexOf('chrome') > -1,
    // 是否是微信内核
    wx: ua.indexOf('micromessenger') > -1,
    // 是否为jdapp
    jdapp: ua.indexOf('jdapp') > -1,
  };
};

let obj;
if (win) {
  obj = Object.assign({}, version(), {node: false, win: true});
} else {
  obj = Object.assign({}, { node: nd, win: false });
}

module.exports = obj;
