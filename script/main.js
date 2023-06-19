const ul = document.querySelectorAll("ul")
const navbar = document.querySelector(".collapse")
const btnNav = document.querySelector(".navbar-toggler")

ul.forEach(li => {
  li.addEventListener("click",FecharMenu)
})

function FecharMenu() {
  if (getComputedStyle(btnNav).display == "block") {
    btnNav.click()
  }
}




(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
