let button = document.body.querySelector('.navbar__content3__btn1');

button.addEventListener('click', () => {
    const darkModeCheck = document.body.classList.contains('dark');
    console.log(darkModeCheck);

    if (darkModeCheck) {
        document.body.classList.remove('dark');
        button.innerHTML = "Dark Mode";
        document.body.classList.add("light__transition");
    } else {
        document.body.classList.add("dark");
        button.innerHTML = "Light Mode";
    }
});