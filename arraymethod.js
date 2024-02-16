let items = [
    {name: "laptop" , price: 100},
    {name: "mobile" , price: 1000},
    {name: "tab" , price: 200},
    {name: "keyboard" , price: 5000},
    {name: "mouse" , price: 10},
    {name: "mousepad" , price: 700},
    {name: "display" , price: 300}
]

//filter method

let filtered_arr = items.filter((item)=>{
    return item.price > 500
})
console.log(filtered_arr)

//map method

let onlyprice = items.map((item)=>{
    return item.price
})
console.log(onlyprice)

//foreach method

items.forEach((item)=>{
   console.log(item.price) 
})

//reduce method 

let reducedTotal = items.reduce((TotalCurrent, item)=>{
    return item.price += TotalCurrent
}, 0)

console.log(reducedTotal)