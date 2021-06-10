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


let processScroll = () => {
    let docElem = document.documentElement,
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
        scrollPercent = scrollTop / scrollBottom * 100 + '%';

        console.log(scrollPercent);

        document.getElementById('progress').style.setProperty('--scrollAmount', scrollPercent);
}

document.addEventListener('scroll', processScroll);
