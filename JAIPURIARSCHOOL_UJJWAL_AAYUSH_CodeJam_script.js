var crsr = document.querySelector(".pc .crsr");

function mousefollower() {
  document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 25 + "px";
    crsr.style.top = dets.y + 25 + "px";
  });
}

change = document.querySelector(".pc .page6 .down .change");
change.addEventListener("mouseover", function () {
  crsr.style.width = `3vw`;
  crsr.style.height = `5vh`;
  crsr.style.backgroundColor = "#white";
});
change.addEventListener("mouseleave", function () {
  crsr.style.width = `20px`;
  crsr.style.height = `20px`;
  crsr.style.backgroundColor = `#edbfff`;
});
menu_in = document.querySelector(".pc .menu_in");
mi = document.querySelector(".pc nav .menu i");

function menu_animation() {
  close_pc = document.querySelector(".pc nav .menu #close");
  mi.addEventListener("click", function () {
    menu_in.style.right = `0`;
    menu_in.style.opacity = 1;
    mi.style.display = "none";
    close_pc.style.display = "block";
    close_pc.style.display = "block";
  });

  close_pc.addEventListener("click", function () {
    close_pc.style.display = "none";
    mi.style.display = "block";
    menu_in.style.right = `-100%`;
  });
}

var menu_m_open = document.querySelector(".mobile .main .nav #open")
var menu_m_close = document.querySelector(".mobile .main .nav #close")
var menu_m = document.querySelector(".mobile .main .menu_in_m")


function menu_mobile(){
  menu_m_open.addEventListener("click" , function(){
    menu_m.style.right = `0`
    menu_m.style.opacity = 1
    menu_m_open.style.display = "none"
    menu_m_close.style.display = "block"
  });

  menu_m_close.addEventListener("click" , function(){
    menu_m.style.right = `-100%`;
    menu_m.style.opacity = 0;
    menu_m_close.style.display = "none";
    menu_m_open.style.display = "block"
  })
}


function loaderAnimation() {
  var loader = document.querySelector(".loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 3700)
}

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


menu_animation();
mousefollower();
menu_mobile();
loaderAnimation();
