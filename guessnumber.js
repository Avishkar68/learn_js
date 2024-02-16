function guessNumber (){
    const ran_num = Math.floor(Math.random() * 100 ) + 1; 
    // console.log(ran_num);
    let num = parseInt(prompt("Enter number from 1 to 100 "));

    while(ran_num != num){
        let num = parseInt(prompt("Enter number from 1 to 100 "));
    }

    if(ran_num == num){
        console.log("You guessed correct number")
    }
}

guessNumber();