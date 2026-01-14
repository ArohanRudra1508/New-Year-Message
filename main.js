let show = () => {
    let name = document.getElementById("inp").value;

    document.getElementById("msg").innerHTML = "I wish a very happy new year to "+name+"!";
    
    document.getElementById("p").innerHTML = "May you get a lot of happiness this year!"

    document.getElementById("img").src = "https://i.etsystatic.com/30902893/r/il/e15bb7/6956867577/il_fullxfull.6956867577_tiyz.jpg"

    document.getElementById("msg").style.color = "red"
}

document.getElementById("b").addEventListener("click", show)
