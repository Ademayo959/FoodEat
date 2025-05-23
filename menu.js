document.addEventListener('DOMContentLoaded', () => { 
//The menus
const chefSpecial = document.querySelector('.chefSpecial');
const familyFav = document.querySelector('.familyFav');
const ourMainstay = document.querySelector('.ourMainstay');
const menuChanger = document.querySelector('.menuChanger')
//The Menu boxes elements
const onePic = document.querySelector('.onePic');
const oneTime = document.querySelector('oneTime');
const oneName = document.querySelector('.oneName');
const onePrice = document.querySelector('onePrice');
const twoPic = document.querySelector('.twoPic');
const twoTime = document.querySelector('twoTime');
const twoName = document.querySelector('.twoName');
const twoPrice = document.querySelector('twoPrice');
const threePic = document.querySelector('.threePic');
const threeTime = document.querySelector('threeTime');
const threeName = document.querySelector('.threeName');
const threePrice = document.querySelector('threePrice');

console.log([...document.querySelectorAll('*')].filter(el => el.className.includes('oneTime')));

chefSpecial.addEventListener('click', () => {
    chefSpecial.classList.add('bg-amber-600');
    menuChanger.innerText = 'Chef Specials'
    oneName.innerText = 'Pizza';
    onePrice.innerText = '$15';
    oneTime.innerText = '1hr, 10mins';
    onePic.setAttribute('src', 'Images/Pizza.png');
});


});