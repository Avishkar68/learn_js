// to avoid chaining of .then using promises, async await came in existance

// lets see an example how chaining goes long with promises
// assum we wanna get an API lets write code for it using promises..

function abcd(){
    fetch("https://randomuser.me/api/")
    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log(data)
    })
}

abcd()

// this was the whole code to fetch a url using chaining of .them
// lets do it with async and await

async function abcd2(){
    let raw = await fetch("https://randomuser.me/api/")
    let data = await raw.json()
}
abcd2()

// and u see how simple it is with asyn await
// for theory refer image provided in folder