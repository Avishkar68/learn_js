let alertfun1 = ()=>{
    alert("hello")
}
let alertfun2 = ()=>{
    alert("hi")
}
let alertfun3 = ()=>{
    alert("how are you")
}
let alertfun4 = ()=>{
    alert("i am fine and you")
}
let alertfun5 = ()=>{
    alert("i am also fine nice to meet you")
}
let alertfun6 = ()=>{
    alert("same here..!!")
}

document.getElementById("google").addEventListener('click', function(){
    window.location = "https://www.google.com/";
    win.focus();
})
document.getElementById("fb").addEventListener('click', function(){
    window.location = "https://www.facebook.com/";
    win.focus();
})
document.getElementById("twitter").addEventListener('click', function(){
    window.location = "https://www.twitter.com/";
    win.focus();
})

const fetchContent = async (url) => {
    con = await fetch(url);
    let a = await con.json()
    return a;

}

setInterval(async function(){
    let url = 'https://jsonplaceholder.typicode.com/todos/1'
    console.log(await fetchContent(url))
}, 300)


setInterval(function(){
    document.getElementById('bulb').classList.toggle('bulb')
})