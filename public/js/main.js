
window.addEventListener('scroll',window_scroll);
function window_scroll() {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
    let varlue = document.querySelectorAll('nav a');
    varlue.forEach(element => {
        element.classList.toggle('a-scroll',window.scrollY > 0);
    });
}
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector(".open-menu-btn");
const closeBtn = document.querySelector(".close-menu-btn");
function hidemenu() {
    if (menuBtn.className == 'open-menu-btn') {
        menuBtn.className += ' hide';
        closeBtn.className += ' show';
        menu.className += ' show';
    }
}
function hideclose() {
    if (closeBtn.className == 'close-menu-btn show') {
        menuBtn.className = 'open-menu-btn';
        closeBtn.className = 'close-menu-btn';
        menu.className = 'nav__menu';
    }
}
const btntop = document.querySelector("#top");
window.addEventListener('scroll', ()=>{
        if (window.scrollY > 0) {
            btntop.style.display = "inline-block";
        }
        else btntop.style.display = "none";
});

const focus = document.querySelectorAll('.item__focus');
focus.forEach(focus => {
    focus.addEventListener('click' , ()=> {
        focus.classList.toggle('open');
    });
});
function protect() {
    if (getCookie('token') == "" ) {
        alert("Yêu cầu đăng nhập")
    }
    else{
        let contactpage = "http://localhost:3000/lienhe";
        window.location.href = contactpage;
    }
}
const user = document.querySelector(".user");
const nameuser = document.getElementById('nameuser');
if (getCookie('token') != '') {
    nameuser.innerHTML = ' ' + getCookie('ten');
}
user.addEventListener('click', ()=>{
    if (getCookie('token') != "" ) {
        deleteCookie('token');
        deleteCookie('ten');
    }
    else{
        let loginpage = "http://localhost:3000/dangnhap";
        window.location.href = loginpage;
    }
});
function deleteCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    let homepage = "http://localhost:3000/trangchu";
    window.location.href = homepage;
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
