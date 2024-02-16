function myFunction(){
    let node = document.createElement("li")
    let text = document.createTextNode("Tea Powder")
    node.appendChild(text);
    document.getElementById("myList").appendChild(node);
}