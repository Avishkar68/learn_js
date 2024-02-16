let first = document.body.firstElementChild.firstElementChild.firstElementChild
first.style.color = "red"

let fristel = document.getElementById("child1")
let lastel = document.getElementById("child3")
fristel.style.color = "green";
lastel.style.color = "green"

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.background = "cyan";
}) 