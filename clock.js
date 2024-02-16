let clcok = document.getElementById('clock')
let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
setInterval(function(){
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()

    // clcok.innerHTML = `${h} : ${m} : ${s}`
    // clcok.innerHTML = (m<10?"0":"") + m
    hrs.innerHTML = (h<10?"0":"") + h
    min.innerHTML = (m<10?"0":"") + m
    sec.innerHTML = (s<10?"0":"") + s

},1000)
