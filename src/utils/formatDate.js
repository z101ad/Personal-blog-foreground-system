export default function(time,show=false){
    const date = new Date(+time)
    const month = (date.getMonth()+1).toString().padStart(2,"0")
    const day = date.getDate().toString().padStart(2,"0")
    let str  = `${date.getFullYear()}-${month}-${day}`
    const h = date.getHours().toString().padStart(2,"0")
    const m = date.getMinutes().toString().padStart(2,"0")
    const s = date.getSeconds().toString().padStart(2,"0")
    if(show){
        return str+` ${h}:${m}:${s}`
    }
    return str
}