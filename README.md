detect your client's userAgent

Android or iPhone or weixin or mobile

### install

 ```js
const isClient = require('isClient');
// or
import isClient from 'isclient';

// iphone
const isIphone = isClient.iPhone
```

print different client's userAgent, return `Boolean value`

```text
node：    isClient.node  
window：  isClient.node  
firefox： isClient.gecko  
IE：      isClient.ie  
opera：   isClient.opera  
android： isClient.android  
ios：     isClient.ios  
mobile：  isClient.mobile  
iPhone：  isClient.iPhone  
aiPad：   isClient.iPad  
safari：  isClient.safari  
weixin：  isClient.wx  
jdapp：   isClient.jdapp  
chrome：  isClient.chrome  
```