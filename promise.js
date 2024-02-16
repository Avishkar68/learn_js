// basically promise is just like real life promise
// lets take a ex 
// maine dosto ko promise kiya ki kal clg me aate vakta tumhare liye choclate leke aaunga 
// okkk ab ye maine bss promise kiya hai kisiko pata nhi ye complete hoga bhi ya nahi 
// sooo ek baat hogi vo matlab ki jabtak me clg ata nhi tab tak mera promise pending state me rahega
// agar maine clg ate vakta choclate laya to vo resolve hoga like maine promise pura kiya 
// agar maine choclate nhi laya matlab ye ho gaya reject state like maine promise pura hi kiya ksii karan ...
// same yahi baat promises me hai js me 
// tum jab promise likhte ho to vo tin state me ho sakta hai ek to pending ya resolve ya reject ..
// so basically whwnever we want to a task while our peomise is in resolve state then we use .then 
// and if our promise is in reject state then we use .catch
// so lets take an example ..


// in this code we want a number greater than 5

let newp = new Promise((res , rej) => {
        let num = Math.floor(Math.random()*10)
        if(num > 5){
            return res();
        }
        else{
            return rej();
        }
})
newp.then(function(){
    console.log("number is greater than 5 so its in resolve state");
}).catch(function(){
    console.log("number is not greater than 5 so its in reject state")
})

