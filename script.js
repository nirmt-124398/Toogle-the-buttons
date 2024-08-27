function toggleButtons(){
    const btn1= document.getElementById("button1")
    const btn2= document.getElementById("button2")
    const btn3= document.getElementById("button3")

    if (btn1.style.display !== "none") {
        btn1.style.display="none"
        btn2.style.display="inline"
        btn3.style.display="inline"
    } 
    else if (btn2.style.display !== "none") {
        btn1.style.display="inline"
        btn2.style.display="none"
        btn3.style.display="inline"
    }
    else {
        btn1.style.display="inline"
        btn2.style.display="inline"
        btn3.style.display="none"
    }
}