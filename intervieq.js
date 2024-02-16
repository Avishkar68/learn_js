function parent(){ 
    x = 12
    return function child(){
        console.log(x)
    }
}

childcon = parent()
childcon()