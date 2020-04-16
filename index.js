import { IMAGE, WORD, EXCEL, PDF, PPT, ZIP, MUSIC } from './constant'
import {
    MOBILE, TELL,
    NUMBER, NUMBER_FLOAT, NUMBER_FLOAT_ONE, NUMBER_FLOAT_TWO, NONUMBER,
    NAME, NAME_ENGLISH,
    ENGLISH, NOENGLISH,
    EMAIL, IDCARD, CARNUMBER, POSTALCODE,
    USERNAME, WECHAT, QQ, MONEY
} from './constant'

export const isImage = (fileName) => {
    return IMAGE.test(fileName.toLowerCase())
}

export const isWord = (fileName) => {
    return WORD.test(fileName.toLowerCase())
}

export const isExcel = (fileName) => {
    return EXCEL.test(fileName.toLowerCase())
}

export const isPdf = (fileName) => {
    return PDF.test(fileName.toLowerCase())
}

export const isPpt = (fileName) => {
    return PPT.test(fileName.toLowerCase())
}

export const isZip = (fileName) => {
    return ZIP.test(fileName.toLowerCase())
}

export const isMusic = (fileName) => {
    return MUSIC.test(fileName.toLowerCase())
}

export const isVideo = (fileName) => {
    return VIDEO.test(fileName.toLowerCase())
}

export const isMobile = (value) => {
    return MOBILE.test(value)
}

export const isTell = (value) => {
    return TELL.test(value)
}

export const isNumber = (value) => {
    return NUMBER.test(value)
}

export const isNumberFloat = (value) => {
    return NUMBER_FLOAT.test(value)
}

export const isNumberFloatOne = (value) => {
    return NUMBER_FLOAT_ONE.test(value)
}

export const isNumberFloatTwo = (value) => {
    return NUMBER_FLOAT_TWO.test(value)
}

export const isNoNumber = (value) => {
    return NONUMBER.test(value)
}

export const isName = (value) => {
    return NAME.test(value)
}

export const isNameEnglish = (value) => {
    return NAME_ENGLISH.test(value)
}

export const isEnglish = (value) => {
    return ENGLISH.test(value)
}

export const isNoEnglish = (value) => {
    return NOENGLISH.test(value)
}

export const isEmail = (value) => {
    return EMAIL.test(value)
}

export const isIdCard = (value) => {
    return IDCARD.test(value)
}

export const isCarNumber = (value) => {
    return CARNUMBER.test(value)
}

export const isPostalCode = (value) => {
    return POSTALCODE.test(value)
}

export const isUserName = (value) => {
    return USERNAME.test(value)
}

export const isWeChat = (value) => {
    return WECHAT.test(value)
}

export const isQq = (value) => {
    return QQ.test(value)
}

export const isMoney = (value) => {
    return MONEY.test(value)
}
