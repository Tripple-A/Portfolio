
$(window).on('resize', function () {
    if ($(window).width() < 770) {
        $('#myNav').addClass('overlay');
    } else {
        $('#myNav').removeClass('overlay');
    }
})


function openNav() {
    document.querySelector('.overlay').style.transition = "0.5s";
    document.querySelector('.overlay').style.display = "block";
    if ($(window).width() > 430) {
        document.querySelector('.overlay').style.width = "70%";
    } else {
        document.querySelector('.overlay').style.width = "100%";
    }
}

function closeNav() {
    console.log('you clicked close')
    console.log(document.querySelector('.overlay'))
    document.querySelector('.overlay').style.width = "0%";
    document.querySelector('.overlay').style.display = "none";
}

// setInterval(() => {
//     document.body.style.setProperty('--contentHeight', `${window.innerHeight - 100}px`)
// }, 2000);