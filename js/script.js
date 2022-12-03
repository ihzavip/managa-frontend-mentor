const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open') //animate hamburger menu
  nav.classList.toggle('flex') //initially its hidden
  nav.classList.toggle('hidden') //depends on the state
})

