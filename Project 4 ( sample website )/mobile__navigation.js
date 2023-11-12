let body = document.body,
    val = 1;

const navbar = body.querySelector('.navbar2');
const hamburger = body.querySelector('span.navbar__hamburger');
const anchor = body.querySelectorAll('.navbar2 a')
const mode = body.querySelector('.navbar__content3__btn1__navbar');

mode.addEventListener('click' , ()=> {
    const darkModeCheck = document.body.classList.contains('dark');
    console.log(darkModeCheck);

    if (darkModeCheck) {
        document.body.classList.remove('dark');
        mode.innerHTML = "Dark Mode";
        document.body.classList.add("light__transition");
    } else {
        document.body.classList.add("dark");
        mode.innerHTML = "Light Mode";
    }

    navbar.style.display = "none"
        val = 1;
})

hamburger.addEventListener('click' , ()=> {

    if ( val === 1 ) {
        navbar.style.display = "block";
        val += 1;
    } else {
        navbar.style.display = "none"
        val = 1;
    }
})

anchor.forEach( element => {
    element.addEventListener('click' , ()=> {
        navbar.style.display = "none"
        val = 1;
    })
})

resume.addEventListener('click' , ()=> {
    navbar.style.display = "none"
        val = 1;
})








