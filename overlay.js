
$(window).on('resize', function () {
    if ($(window).width() < 770) {
        $('#myNav').addClass('overlay');
        console.log('horny')
    } else {
        $('#myNav').removeClass('overlay');
        console.log('honey')
    }
})


function openNav() {
    console.log('clicked')
    document.querySelector('.overlay').style.display = "block";
    document.querySelector('.overlay').style.transition = "0.5s";
    if ($(window).width() > 430) {
        document.querySelector('.overlay').style.width = "70%";
    } else {
        document.querySelector('.overlay').style.width = "100%";
    }
}

function closeNav() {
    document.querySelector('.overlay').style.width = "0%";
    document.querySelector('.overlay').style.display = "none";
}

