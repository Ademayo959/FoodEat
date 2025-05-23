const phoneNavbtn = document.querySelector('.phoneNavbtn');
const phoneNavbar = document.querySelector('.phoneNavbar');
phoneNavbtn.addEventListener('click', ()=> {
    if (phoneNavbar.classList.contains('hidden')) {
        phoneNavbar.classList.remove('hidden');
        console.log('Navbar is now visible');
    } else {
        phoneNavbar.classList.add('hidden');
        console.log('Navbar is now hidden');
    }
    if (phoneNavbar.classList.contains('hidden')) {
        phoneNavbtn.innerText = '⇶'
    } else {
    phoneNavbtn.innerText = '⨉';
  }
});
const bottomBtn = document.querySelector('.bottomBtn')
bottomBtn.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
