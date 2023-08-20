const __LOG = !PRODUCTION
const __LOGSTICKER = !PRODUCTION
const __LOGCURSOR = !PRODUCTION

export default class Logger{
    static Log(msg){
        if(__LOG)
        console.log(msg)
    }

    static Warn(msg){
        if(__LOG)
        console.log(`%c${msg}`,'background: #aaaaaa; color: #FFFF00')
    }

    static Error(msg){
        if(__LOG)
        console.log(`%c${msg}`,'background: #aaaaaa; color: #FF0000')
    }

    static LogSticker(msg){
        if(__LOGSTICKER)
        this.Log(`[Sticker] ${msg}`)
    }
    
    static WarnSticker(msg){
        if(__LOGSTICKER)
        this.Warn(`[Sticker] ${msg}`)
    }

    static LogCursor(msg){
        if(__LOGCURSOR)
        this.Log(`[Cursor] ${msg}`)
    }
}