const roles = ["Frontend Developer", "UI/Ux Designer", "Entrepreneur", "Blogger"];
let index = 0;
let charIndex = 0;
const roleElement = document.querySelector(".role");

function typeRole() {
    if (charIndex < roles[index].length) {
        roleElement.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100); // Adjust typing speed
    } else {
        setTimeout(eraseRole, 1000); // Pause before erasing
    }
}

function eraseRole() {
    if (charIndex > 0) {
        roleElement.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50); // Adjust erasing speed
    } else {
        index = (index + 1) % roles.length; // Move to the next role
        setTimeout(typeRole, 500);
    }
}
// Start the animation
setTimeout(typeRole, 500);

// scroll to top
function scrollTopBack() {
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 50) {
            scrollTopButton.classList.add("scrollActive");
        } else {
            scrollTopButton.classList.remove("scrollActive");
        }
    };
}
scrollTopBack();