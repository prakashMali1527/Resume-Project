// Add smooth scrolling to page
var internalLink = document.querySelectorAll('nav ul li a');

for (var i = 0; i < internalLink.length; i++) {

    internalLink[i].addEventListener('click', function (event) {
        event.preventDefault();
        let targetSectionContent = this.innerText;
        let targetSectionId = targetSectionContent.trim().toLowerCase();
        let targetSection;
        if (targetSectionId == "home")
            targetSection = document.getElementById('body-header');
        else
            targetSection = document.getElementById(targetSectionId);
        let targetCoordinate = targetSection.getBoundingClientRect();

        let id = setInterval(function () {
            window.scrollBy(0, 50);
            if (window.pageYOffset >= targetCoordinate['y']) {
                clearInterval(id);
                return;
            }

        }, 20);

    });
}

// Auto fill skill bar on view with animation
var skillsBar = document.querySelectorAll('.skill-progress > div');
var barAnimated = new Array(skillsBar.length);

// Initialize bar to zero
function initializedBar() {
    for (let i = 0; i < skillsBar.length; i++) {
        // set width to zero
        skillsBar[i].style.width = 0;
        barAnimated[i] = false;
    }
}

initializedBar();

function fillBar(bar) {

    bar.style.width = bar.getAttribute('data-skill-bar') + '%';
}

function resetBar(bar) {

    bar.style.width = '0%';
}

// Fill and Reset bar 
window.addEventListener('scroll', function () {
    console.log('scrolling');
    for (let i = 0; i < skillsBar.length; i++) {
        let barCoordinate = skillsBar[i].getBoundingClientRect();

        if (!barAnimated[i] && barCoordinate.top <= window.innerHeight && barCoordinate.bottom >= 0) {
            console.log('filling bar');
            barAnimated[i] = true;
            fillBar(skillsBar[i]);
            skillsBar[i].style.transition = 'width 1s';

        } else if (barAnimated[i] && (barCoordinate.top > window.innerHeight || barCoordinate.bottom < 0)) {
            barAnimated[i] = false;
            resetBar(skillsBar[i]);
        }
    }
});
