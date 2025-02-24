//Elements
const microsLink = document.getElementById("microsLink");
const homeLink = document.getElementById('homeLink');
const projectsLink = document.getElementById('projectsLink');
const contactLink = document.getElementById('contactLink');
const gitHubLink = document.getElementById("ghLink");

const elementArray = [
    [homeLink, "Home"],
    [microsLink, "MicroServices", '16px'],
    [projectsLink, "Projects"],
    [contactLink, "Contact"],
    [gitHubLink, "GitHub"]
]
/*
Function To Add Event Listeners to Links
el is the element
str is the string you want displayed when you hover the mouse over the link
fS is an optional parameter to change the fontsize for larger words
*/

function hover(el, str, fS = el.style.fontSize)
{
    let icon = el.innerHTML;
    el.addEventListener('mouseenter', () => {
        el.innerHTML += str;
        el.style.fontSize = fS;
    })
    el.addEventListener('mouseleave', () => {
        el.innerHTML = icon;
        el.style.fontSize = '20px';
    })
}

elementArray.forEach(element => {
    if(element[0]){
        let target = element[0];
        let string = element[1];
        let fontAdjust = element[2] || element[0].style.fontSize;
        hover(target, string, fontAdjust);
    }
});