# Javascript常用正则大全

## 📦 快速安装
~~~
npm install reg-rules
~~~

~~~
yarn add reg-rules
~~~

## 📝文件类正则

### 图片
```javascript
/\.(png|jpe?g|gif|svg|img|image|webp)$/i

import { isImage } from 'reg-rules'
isImage('test.png') // true
```

### Word文档
```javascript
/\.(doc[xm]?|dot[xm]?|wps|wpt)$/i

import { isWord } from 'reg-rules'
isWord('test.doc') // true
```

### Excel表格
```javascript
/\.(xls[xm]?|xlt[xm]?|csv|prn|dif|ett?)$/i

import { isExcel } from 'reg-rules'
isExcel('test.xls') // true
```

### PPT演示
```javascript
/\.(ppt[xm]?|pot[xm]?|pps[xm]?|dp[st])$/i

import { isPpt } from 'reg-rules'
isPpt('test.pptx') // true
```

### PDF
```javascript
/\.(pdf)$/i

import { isPdf } from 'reg-rules'
isPdf('test.pdf') // true
```

### 压缩包
```javascript
/\.(rar|zip|7z|ace|uha|uda|bz|gz)$/i

import { isZip } from 'reg-rules'
isZip('test.zip') // true
```

### 音频文件
```javascript
/\.(mp3|wav|mid|asf|mpg|tti)$/i

import { isMusic } from 'reg-rules'
isMusic('test.mp3') // true
```

### 视频文件
```javascript
/\.(mp4|rmvb|avi|rm|wmv|mkv|mov)$/i

import { isVideo } from 'reg-rules'
isVideo('test.rm') // true
```
## 📋表单类正则

### 手机号码
```javascript
/^(?:(?:\+|00)86)?1[3-9][0-9]{9}$/

import { isMobile } from 'reg-rules'
isMobile('13936126666') // true
```

### 座机号码
```javascript
/^\d{3}-\d{8}|\d{4}-\d{7}$/

import { isTell } from 'reg-rules'
isTell('010-67866366') // true
```

### 数字
```javascript
/^\d+$/

import { isNumber } from 'reg-rules'
isNumber('01067866366') // true
```

### 数字，带有小数点
```javascript
/^\d+\.\d+$/

import { isNumberFloat } from 'reg-rules'
isNumberFloat('0.1067866366') // true
```

### 数字，可以带有一位小数点
```javascript
/^\d+(\.\d{1})?$/

import { isNumberFloatOne } from 'reg-rules'
isNumberFloatOne('0.1') // true
```

### 数字，可以带有两位小数点
```javascript
/^\d+(\.\d{2})?$/

import { isNumberFloatTwo } from 'reg-rules'
isNumberFloatTwo('0.11') // true
```

### 不能含有数字
```javascript
/^\D*$/

import { isNoNumber } from 'reg-rules'
isNoNumber('test12345') // false
isNoNumber('test') // true
```

### 姓名-中文（毕加索全名54个字你造吗⁉️）
```javascript
/^(?:[\u4e00-\u9fa5·|-]{2,72})$/

import { isName } from 'reg-rules'
isName('周杰伦') // true
isName('苏日勒和克·威武') // true
isName('苏日勒和克-威武') // true
```

### 姓名-英文
```javascript
/(^[a-zA-Z][a-zA-Z\s]{0,233}[a-zA-Z]$)/

import { isNameEnglish } from 'reg-rules'
isNameEnglish('Daniel') // true
isNameEnglish('Chris Evans') // true
```

### 只有英文字母
```javascript
/^[a-zA-Z]+$/

import { isEnglish } from 'reg-rules'
isEnglish('test') // true
```

### 不含有英文字母
```javascript
/^[^A-Za-z]*$/

import { isNoEnglish } from 'reg-rules'
isNoEnglish('test') // false
```

### 邮箱
```javascript
/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/

import { isEmail } from 'reg-rules'
isEmail('zhengaojin@live.cn') // true
```

### 身份证号码
```javascript
/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0\d|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/

import { isIdCard } from 'reg-rules'
isIdCard('110101190103075978') // true
```

### 车牌号
```javascript
/^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/

import { isCarNumber } from 'reg-rules'
isCarNumber('浙A00001') // true
isCarNumber('浙AD00001') // true 新能源
```

### 邮政编码
```javascript
/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/

import { isPostalCode } from 'reg-rules'
isPostalCode('310000') // true
```

### 用户名校验 4到18位（字母，数字，点，下划线，减号）
```javascript
/^[a-zA-Z0-9._-]{4,18}$/

import { isUserName } from 'reg-rules'
isUserName('zheng_ao-jin.123') // true
```

### 微信号
```javascript
/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/

import { isWeChat } from 'reg-rules'
isWeChat('zheng_ao-jin123') // true
```

### QQ号
```javascript
/^[1-9][0-9]{4,}$/

import { isQq } from 'reg-rules'
isQq('10000') // true
```

### 金额（支持千位分隔符、负数）
```javascript
/^-?\d+(,\d{3})*(\.\d{1,2})?$/

import { isMoney } from 'reg-rules'
isMoney('1234,567,890') // true
```
