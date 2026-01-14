let show = () => {
    let name = document.getElementById("inp").value;

    document.getElementById("msg").innerHTML = "I wish a very happy to "+name+"!";
    
    document.getElementById("p").innerHTML = "May you get a lot of happiness this year!"
}

document.getElementById("b").addEventListener("click", show)