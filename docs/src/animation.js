
var button = document.querySelector(".card1");
var button2 = document.querySelector(".card2");
var button3 = document.querySelector(".card3");
var button4 = document.querySelector(".card4");

//var button = document.querySelector('.card1');
//var button = document.querySelector('.card2');
//var button = document.querySelector('.card3');

var mouseHoverAnimation = () => {
    anime({
        targets: button,
        width: '100%',
        scale: {
            delay: 800,
            value: 1.5
        },
        duration: 1500
    })
}

var mouseOutAnimation = () => {
    anime({
        targets: button,
        width: '50%',
        scale: {
            delay: 800,
            value: 1
        },
        duration: 1500
    })
}

var mouseHoverAnimation2 = () => {
    anime({
        targets: button2,
        width: '100%',
        scale: {
            delay: 800,
            value: 1.5
        },
        duration: 1500
    })
}

var mouseOutAnimation2 = () => {
    anime({
        targets: button2,
        width: '50%',
        scale: {
            delay: 800,
            value: 1
        },
        duration: 1500
    })
}

var mouseHoverAnimation3 = () => {
    anime({
        targets: button3,
        width: '100%',
        scale: {
            delay: 800,
            value: 1.5
        },
        duration: 1500
    })
}

var mouseOutAnimation3 = () => {
    anime({
        targets: button3,
        width: '50%',
        scale: {
            delay: 800,
            value: 1
        },
        duration: 1500
    })
}

var mouseHoverAnimation4 = () => {
    anime({
        targets: button4,
        width: '100%',
        scale: {
            delay: 800,
            value: 1.5
        },
        duration: 1500
    })
}

var mouseOutAnimation4 = () => {
    anime({
        targets: button4,
        width: '50%',
        scale: {
            delay: 800,
            value: 1
        },
        duration: 1500
    })
}



var jump = document.querySelector('#api-go-jump')

jump.addEventListener('click', function () {
glide.go('=0')
})

var jump2 = document.querySelector('#api-go-jump2')

jump2.addEventListener('click', function () {
glide.go('=1')
})

button.addEventListener('mouseover', mouseHoverAnimation)
button.addEventListener('mouseout', mouseOutAnimation)

button2.addEventListener('mouseover', mouseHoverAnimation2)
button2.addEventListener('mouseout', mouseOutAnimation2)

button3.addEventListener('mouseover', mouseHoverAnimation3)
button3.addEventListener('mouseout', mouseOutAnimation3)

button4.addEventListener('mouseover', mouseHoverAnimation4)
button4.addEventListener('mouseout', mouseOutAnimation4)


