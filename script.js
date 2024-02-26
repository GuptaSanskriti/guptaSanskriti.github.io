
let tabLinks = document.getElementsByClassName('tab-links')
let tabContents = document.getElementsByClassName('tab-contents')  

function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link")
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add("active-tab")
}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxpjA59DmTFiFnu2Snmy8r4cKzYoj2T1UjoYt_byqyWUnjyq8xiEBsvJYazkuAdlmtp9A/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Sent successfully"
    setTimeout(function(){
        msg.innerHTML=""
    },2000)
    form.reset()
})
      .catch(error => console.error('Error!', error.message))
  })

  document.getElementById("openLinkProject1").addEventListener("click", function() {
    window.open('https://lively-biscuit-b02bcf.netlify.app', "_blank");
});  

document.getElementById("openLinkProject2").addEventListener("click", function() {
    window.open('https://sage-daifuku-04e2c8.netlify.app', "_blank");
});

document.getElementById("openLinkProject3").addEventListener("click", function() {
    window.open('https://delightful-marshmallow-4acc59.netlify.app/', "_blank");
}); 