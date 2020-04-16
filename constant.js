const FILE_REGS = {
    IMAGE : /\.(png|jpe?g|gif|svg|img|image|webp)$/i,
    WORD  : /\.(doc[xm]?|dot[xm]?|wps|wpt)$/i,
    EXCEL : /\.(xls[xm]?|xlt[xm]?|csv|prn|dif|ett?)$/i,
    PDF   : /\.(pdf)$/i,
    PPT   : /\.(ppt[xm]?|pot[xm]?|pps[xm]?|dp[st])$/i,
    ZIP   : /\.(rar|zip|7z|ace|uha|uda|bz|gz)$/i,
    MUSIC : /\.(mp3|wav|mid|asf|mpg|tti)$/i,
    VIDEO : /\.(mp4|rmvb|avi|rm|wmv|mkv|mov)$/i
}

const FORM_REGS = {
    MOBILE           : /^(?:(?:\+|00)86)?1[3-9][0-9]{9}$/,
    TELL             : /^\d{3}-\d{8}|\d{4}-\d{7}$/,
    NUMBER           : /^\d+$/,
    NUMBER_FLOAT     : /^\d+\.\d+$/,
    NUMBER_FLOAT_ONE : /^\d+(\.\d{1})?$/,
    NUMBER_FLOAT_TWO : /^\d+(\.\d{2})?$/,
    NONUMBER         : /^\D*$/,
    NAME             : /^(?:[\u4e00-\u9fa5·|-]{2,72})$/,
    NAME_ENGLISH     : /(^[a-zA-Z][a-zA-Z\s]{0,233}[a-zA-Z]$)/,
    ENGLISH          : /^[a-zA-Z]+$/,
    NOENGLISH        : /^[^A-Za-z]*$/,
    EMAIL            : /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
    IDCARD           : /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0\d|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,
    CARNUMBER        : /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/,
    POSTALCODE       : /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,
    USERNAME         : /^[a-zA-Z0-9._-]{4,18}$/,
    WECHAT           : /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/,
    QQ               : /^[1-9][0-9]{4,}$/,
    MONEY            : /^-?\d+(,\d{3})*(\.\d{1,2})?$/
}

module.exports = {
    ...FILE_REGS,
    ...FORM_REGS
}
