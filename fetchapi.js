async function logMovies(){
    let p = await fetch("https://api.chucknorris.io/jokes/random")
    let resp = await p.json()
    console.log(resp)
}

logMovies()