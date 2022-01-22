function Authenticate() {
    const TAG = "Student";
    const KEY = "example";

    const Tag = document.querySelector("#username").value;
    const Key = document.querySelector("#key").value;

    if (TAG===Tag && KEY===Key) {
        setTimeout(() => {
            document.querySelector(".landingPage").style.display = "none";
        }, 1000);

        document.querySelector(".landingPage").style.transform = "translateY(-100%)";

        document.querySelector("header").style.opacity = "100";
        document.querySelector("main").style.opacity = "100";
        document.querySelector("footer").style.opacity = "100";
    } else {
        alert("The Key Is Incorrect!");
    }
}

let toggle = true;

function liveToggle() {

    const liveBox = document.querySelector(".live");
    const form = document.querySelector("#selection");
    const footer = document.querySelector("footer");
    const extendToggle = document.querySelector(".extend");

    if (toggle == true) {
        form.style.transform = "translateX(-25vh)";
        footer.style.transform = "translateX(-25vh)";

        extendToggle.style.top = "90vh"
        extendToggle.style.transform = "rotateZ(120deg)"
        liveBox.style.height = "100vh";
        liveBox.style.clipPath = "polygon(100% 0, 100% 100%, 0 100%, 0 0)";
    } else {
        form.style.transform = "none";
        footer.style.transform = "none";

        extendToggle.style.top = "1rem"
        extendToggle.style.transform = "rotateZ(0)"

        liveBox.style.height = "20vh";
        liveBox.style.clipPath = "polygon(100% 0, 100% 100%, 0 50%, 0 0)";
        toggle = true;
        return;
    }
    toggle = false;
}