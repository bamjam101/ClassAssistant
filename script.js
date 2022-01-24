function Authenticate() {
    const TAG = "Student";
    const KEY = "example";

    const Tag = document.querySelector("#username").value;
    const Key = document.querySelector("#key").value;

    if (TAG === Tag && KEY === Key) {
        setTimeout(() => {
            document.querySelector(".landingPage").style.display = "none";
        }, 1000);

        document.querySelector(".landingPage").style.transform = "translateY(-100%)";

        document.querySelector("header").style.display = "block";
        document.querySelector("main").style.display = "flex";
        document.querySelector("footer").style.display = "block";
        setTimeout(() => {
            document.querySelector("header").style.opacity = "100";
            document.querySelector("main").style.opacity = "100";
            document.querySelector("footer").style.opacity = "100";
        }, 500);
    } else {
        alert("The Key Is Incorrect!");
    }
}

let toggle = true;

function liveToggle() {

    const navBox = document.querySelector("nav");
    const form = document.querySelector("#selection");
    const footer = document.querySelector("footer");
    const liveBox = document.querySelector(".live");
    const main = document.querySelector("main");

    if (toggle == true) {
        setTimeout(() => {
            main.style.display = "none";
            footer.style.display = "none";
            liveBox.style.display = "none";
        }, 1000);

        liveBox.style.transform = "translateX(25vh)";
        liveBox.style.opacity = "0";

        navBox.style.height = "100vh";
        navBox.style.width = "100vw"
        main.style.opacity = "0";
        footer.style.opacity = "0";

        // liveBox.style.height = "100vh";
        // liveBox.style.clipPath = "polygon(100% 0, 100% 100%, 0 100%, 0 0)";

        navBox.style.clipPath = "polygon(100% 0, 100% 100%, 0 100%, 0 0)";
    } else {
        liveBox.style.display = "block";
        navBox.style.height = "17.5vh";

        main.style.display = "flex";
        footer.style.display = "block";

        main.style.opacity = "100";
        footer.style.opacity = "100";

        liveBox.style.opacity = "80%";
        setTimeout(() => {
            liveBox.style.transform = "translateX(0)";
        }, 1000);
        navBox.style.width = "75%";


        // liveBox.style.height = "17.5vh";
        // liveBox.style.clipPath = "polygon(100% 0, 100% 100%, 0 50%, 0 0)";
        navBox.style.clipPath = "polygon(100% 0, 100% 50%, 0 100%, 0 0)";
        toggle = true;
        return;
    }
    toggle = false;
}