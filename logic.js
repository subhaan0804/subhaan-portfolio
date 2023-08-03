let tabLinks = document.getElementsByClassName("tab-link");
let tabContents = document.getElementsByClassName("tabs-content");
console.log(tabLinks)
function opentab(tabName) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-tab-link");
        }
        for (let tabContent of tabContents) {
            tabContent.classList.remove("active-tab-content")
        }
        event.currentTarget.classList.add("active-tab-link")
        document.getElementById(tabName).classList.add("active-tab-content")
}
let sidemenu = document.getElementById("sidebar");
function openmenu() {
    // sidemenu.style.right = "0";
    sidemenu.classList.add("active")
    console.log('openmenu')
}
function closemenu() {
    sidemenu.classList.remove("active")
    console.log("closemenu")
}
document.onclick = function(e){
    if(e.target.id !== "sidebar" && e.target.id !== "ham-burger")
    {
        console.log("right");
        sidemenu.classList.remove("active")
    }
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxuswNF07Mze9YUnWAlqxw41cXQ54Ugv-4UdX53jd9nltPUIief3F-WZGRv1tC7Eq341Q/exec'
const form = document.forms['submit-to-google-sheet'];
const message = document.getElementById("msg");
message.style.display = "none";
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        message.style.display = "block";
        setTimeout(()=>{
            message.style.display = "none";
        }, 8000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})







   