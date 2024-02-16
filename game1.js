//Snake , water , gun game...
let user = prompt("Enter S , G or W:");
let cpu_ran = Math.floor(Math.random()*3);
let cpu = ["S","W","G"][cpu_ran];

let match = (user , cpu)=>{
    if(cpu === user ){
        return "Nobody won..! its tie.."
    }
    else if(cpu === "S" && user === "W"){
        return "cpu"
    }
    else if(cpu === "S" && user === "G"){
        return "user"
    }
    else if(cpu === "G" && user === "W"){
        return "user"
    }
    else if(cpu === "G" && user === "S"){
        return "cpu"
    }
    else if(cpu === "W" && user === "S"){
        return "user"
    }
    else if(cpu === "W" && user === "G"){
        return "cpu"
    }
}
let result = match(user, cpu);
console.log(result);
let new_var = document.getElementById('')




// document.write(`CPU ${cpu} User ${user} And the winner is : ${result}`)
// document.getElementById("p").innerHTML = `CPU :${cpu} User :${user} <br> And the winner is : ${result}`;