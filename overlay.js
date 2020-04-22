function openNav() {
    if($(window).width() > 430) {
        console.log('touched')
        document.getElementById("myNav").style.width = "70%";

    } else {
        document.getElementById("myNav").style.width = "100%";
    }
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

