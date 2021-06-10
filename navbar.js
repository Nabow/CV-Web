var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementsByClassName("progress")[0].style.top = "56px";
  } else {
    document.getElementById("navbar").style.top = "-56px";
    document.getElementsByClassName("progress")[0].style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
}

let prog = document.getElementById('progress');

let body = document.body,
    html = document.documentElement;

let height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
);

const setProgress = () => {
    let scrollFromTop = (html.scrollTop || body.scrollTop) + html.clientHeight;
    let width = (scrollFromTop / height) * 100 + '%';

    prog.style.width = width;
};

window.addEventListener('scroll', setProgress);

setProgress();