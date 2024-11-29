window.onload = ()=>{
    document.getElementById("loading").style.display = "none"
    document.getElementById("home").classList.toggle = ""
}

window.onscroll = () => {
    if(document.body.clientWidth > 1024)return;
    document.getElementById("nav").style.height = "0";
    document.getElementById("nav").style.overflowY = "hidden"
    document.getElementById("menu").src = "icon/menu.png"
    showing = !showing;
};
window.onresize = ()=> {
    if(document.body.clientWidth > 1024){
        document.getElementById("nav").style.height = "fit-content";
        document.getElementById("nav").style.overflowY= "visible";
        document.getElementById("nav").style.flexDirection = "row";
        document.getElementById("nav").style.justifyContent = "space-evenly";
        document.getElementById("nav").style.padding = "0em 0em 1em 0em";
    }else{
        document.getElementById("nav").style.height = "0";
        document.getElementById("nav").style.overflowY = "hidden"
        document.getElementById("menu").src = "icon/menu.png"
        document.getElementById("nav").style.flexDirection = "column";
        document.getElementById("nav").style.justifyContent = "flex-start";
        document.getElementById("nav").style.padding = "0em";
        document.getElementById("nav").style.paddingLeft = "1em";
        showing = !showing;
    }
}
let showing = false;
function toggleMenu() {
  document.getElementById("nav").style.height = showing ? "0" : "100vh";
  //document.getElementById("nav").style.paddingBottom = showing ? "0em" : "1em";
  document.getElementById("nav").style.overflowY = showing
    ? "hidden"
    : "visible";
  document.getElementById("menu").src = showing
    ? "icon/menu.png"
    : "icon/close.png";
  showing = !showing;
}
