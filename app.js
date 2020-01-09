

const turnButtons = document.querySelector('.turn-buttons');
const locationSetter = document.querySelector('.locationSetter');
const dropdownContent = document.querySelector('.dropdown-content');
const locations = document.querySelector('span');
const addRestaurant = document.querySelector('.addRestaurant');


// WHO 'S TURN
// 
function whoPay() { 
    turnButtons.addEventListener('click', e => {
        if(e.target.tagName === 'button') {
            e.target.classList.toggle('.mystyle');
        }
    });
}
    

// //CHOOSE VENUE
// //make whole area clickable and not only the name of the
// function chooseVenue() {

dropdownContent.addEventListener('click', e => {
    if(e.target.tagName === 'SPAN') {
    locationSetter.textContent = e.target.innerHTML;
    locationSetter.style.color ='blue';
    locationSetter.style.fontSize ='18px';
    }
    });
 
console.log(locationSetter)
//ADD A VENUE
function addVenue(newRestaurant) {  
    
    const html = `<li>
                    <span>${newRestaurant}</span>
                    <i class="far fa-trash-alt delete">
                    
                  </li>`;
    
    dropdownContent.innerHTML += html;
    };

addRestaurant.addEventListener('submit', e => {
    e.preventDefault();
    const newRestaurant = addRestaurant.addnew.value.trim();
    addVenue(newRestaurant);
    if(newRestaurant.length) {
        addRestaurant.reset();
    }
});


//DELETE A VENUE
    dropdownContent.addEventListener('click', e => {
         if( e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
            console.log(e);
        }    
    });

 
 
    
 






