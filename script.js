var crsr = document.querySelector(".pc .crsr");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 25 + "px";
  crsr.style.top = dets.y + 25 + "px";
});

change = document.querySelector(".pc .page6 .down .change");
change.addEventListener("mouseover" , function(){
    crsr.style.width = `3vw`
    crsr.style.height = `5vh`
    crsr.style.backgroundColor = "#white"
})
change.addEventListener("mouseleave" , function(){
    crsr.style.width = `20px`
    crsr.style.height = `20px`
    crsr.style.backgroundColor = `#edbfff`
})
