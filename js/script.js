class GUESTUI {
    // GUEST MODAL
    static displayGuestModal() {
        guestModal.style.display = 'block';
    }
    static removeGuestModal() {
        guestModal.style.display = 'none';
    }
    static guestModalClick(e) {
        if (e.target == guestModal) {
            guestModal.style.display = 'none';
        }
    }
    // DISPLAY AGE
    static displayAge(e) {
        const dateOfBirth = new Date(`${birthDate.value}`).getTime();
        e.preventDefault()
        // Current Age
        const interval = setInterval(() => {
            const today = new Date().getTime();
            const distance = today - dateOfBirth;
            const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 7 * 4.3 * 12));
            const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 7 * 4.3 * 12)) / (1000 * 60 * 60 * 24 * 7 * 4.3) - 2);
            const weeks = Math.floor((distance % (1000 * 60 * 60 * 24 * 7 * 4.3)) / (1000 * 60 * 60 * 24 * 7));
            const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / (1000));
            currentAge.innerHTML = `
    <ul>
    <li class='age-header'>Current-age</li>
    <li>${userName.value} is  currently</li>
    <li><div>${years}</div>year(s)</li>
    <li><div>${months}</div>month(s)</li>
    <li><div>${weeks}</div>week(s)</li>
    <li><div>${days}</div>day(s)</li>
    <li class='hours'><div>${hours}</div>hour(s)</li>
    <li class='minutes'><div>${minutes}</div>minute(s)</li>
    <li class='seconds'><div>${seconds}</div>second(s)</li>
    <li class='age-header'>old</li>
    </ul>
    `
            if (distance < 0) {
                clearInterval(interval)
                currentAge.innerHTML = 'Oh Sorry Wrong Input'
            }
        }, 1000);

        // CountDown
        const countdownInterval = setInterval(() => {
            const today = new Date().getTime();
            const distance = today - dateOfBirth;
            const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 7 * 4.3 * 12));
            const timeFromDateOfBirthToLastBirthday = dateOfBirth + (31536000000 * years)
            const nextBirthday = timeFromDateOfBirthToLastBirthday + 31536000000
            const futureDistance = nextBirthday - today
            const months = Math.floor((futureDistance % (1000 * 60 * 60 * 24 * 7 * 4.3 * 12)) / (1000 * 60 * 60 * 24 * 7 * 4.3) + 1);
            const weeks = Math.floor((futureDistance % (1000 * 60 * 60 * 24 * 7 * 4.3)) / (1000 * 60 * 60 * 24 * 7));
            const days = Math.floor((futureDistance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((futureDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((futureDistance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((futureDistance % (1000 * 60)) / (1000));
            countdown.innerHTML = `
    <ul>
    <li class='count-header'>Countdown</li>
    <li class='count-header'>to your next birthday <i class="fa fa-birthday-cake" aria-hidden="true"></i></li>
    <li class='months'><div>${months}</div>month(s)</li>
    <li class='weeks'><div>${weeks}</div>week(s)</li>
    <li class='days'><div>${days}</div>day(s)</li>
    <li class='hours'><div>${hours}</div>hour(s)</li>
    <li class='minutes'><div>${minutes}</div>minute(s)</li>
    <li class='seconds'><div>${seconds}</div>second(s)</li>
    </ul>
    
    `
            if (distance < 0) {
                clearInterval(countdownInterval)
                countdown.innerHTML = 'Oh Sorry Wrong Input'
            }
        }, 1000);
        openGuestModal.addEventListener('click', function (e) {
            clearInterval(countdownInterval)
            countdown.innerHTML = ''
        })
        openGuestModal.addEventListener('click', function (e) {
            clearInterval(interval)
            currentAge.innerHTML = ''
        })
    }
    // CLEARFIELDS
    static clearFields() {
        // userName.value = '';
        birthDate.value = '';
    }
    // SHOWALERT
    static showAlert(message, className) {
        const div = document.querySelector('.message');
        div.classList.add(`alert-${className}`);
        div.appendChild(document.createTextNode(message));
        // Vanish in 3 seconds
        setTimeout(() => div.remove(), 3000);
    }
}
// DISPLAY GUEST MODAL
const closeGuestModal = document.querySelector('#close-guest-modal');
const openGuestModal = document.querySelector('#open-guest-modal');
const guestModal = document.querySelector('#guest-modal');
openGuestModal.addEventListener('click', GUESTUI.displayGuestModal);
closeGuestModal.addEventListener('click', GUESTUI.removeGuestModal);
guestModal.addEventListener('click', GUESTUI.guestModalClick);
document.addEventListener('DOMContentLoaded', GUESTUI.displayGuestModal)

// DISPLAY AGE
const birthDate = document.querySelector('#guest-birthdate');
const guestForm = document.querySelector('#guest-form');
const userName = document.querySelector('#guest-username')
const countdown = document.querySelector('.countdown');
const currentAge = document.querySelector('.current-age');
const errormsg = document.querySelector('.message')
guestForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (userName.value === '' || birthDate.value === '') {
        GUESTUI.showAlert('Please fill in all fields', 'danger')
    } else {
        GUESTUI.displayAge(e);
        GUESTUI.clearFields();
        GUESTUI.removeGuestModal();
    }
});



// USER
class User {
    constructor(userName, birthDate) {
        this.userName = userName;
        this.birthDate = birthDate;
    }
}
class USERUI {
    // STORE MODAL
    static displayStoreModal() {
        storeModal.style.display = 'block';
    }
    static removeStoreModal() {
        storeModal.style.display = 'none';
    }
    static storeModalClick(e) {
        if (e.target == storeModal) {
            storeModal.style.display = 'none';
        }
    }
    static displayUsers() {
        const users = Store.getUsers();
        users.forEach((user) => USERUI.addUserToList(user));
    }

    static addUserToList(user) {
        const list = document.querySelector('#user-list');
        const row = document.createElement('li');
        row.className = 'list-item'
        row.innerHTML = `<div>${user.userName} <a href="#"class= 'delete'>X</a><div class='unbold'>${user.birthDate}</div></div>
    `;
        list.appendChild(row);
    }
    static deleteUser(e) {
        if (e.classList.contains('delete')) {
            e.parentElement.remove();
        }
    }
    // CLEARFIELDS
    static clearFields() {
        userName = '';
        birthDate = '';
    }
    // SHOWALERT
    static showAlert(message, className) {
        const div = document.querySelector('.message-div');
        div.classList.add(`alert-${className}`);
        div.appendChild(document.createTextNode(message));
        // Vanish in 3 seconds
        setTimeout(() => div.remove(), 3000);
        const diva = document.querySelector('.messager-div');
        diva.classList.add(`alert-${className}`);
        diva.appendChild(document.createTextNode(message));
        // Vanish in 3 seconds
        setTimeout(() => diva.remove(), 3000);
    }
}

// STORE
class Store {
    static getUsers() {
        let users;
        if (localStorage.getItem('users') === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem('users'))
        }
        return users
    }
    static addUser(user) {
        const users = Store.getUsers();
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
    }
    static removeUser(e, birthDate) {
        const users = Store.getUsers();
        users.pop();
        localStorage.setItem('users', JSON.stringify(users))
    }
}

// DISPLAY STORE MODAL
const closeStoreModal = document.querySelector('#close-store-modal');
const openStoreModal = document.querySelector('#open-store-modal');
const storeModal = document.querySelector('#store-modal');
openStoreModal.addEventListener('click', USERUI.displayStoreModal);
closeStoreModal.addEventListener('click', USERUI.removeStoreModal);
storeModal.addEventListener('click', USERUI.storeModalClick);

// DISPLAY USERS
document.addEventListener('DOMContentLoaded', USERUI.displayUsers);
// ADD USERS
document.querySelector('#store-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.querySelector('#store-username').value;
    const birthDate = document.querySelector('#store-birthdate').value;
    // VALIDATE
    if (userName === '' || birthDate === '') {
        USERUI.showAlert('Please fill in all fields', 'danger')
    } else {
        // Instantiate a new user
        const user = new User(userName, birthDate);
        // Add user to UI
        USERUI.addUserToList(user);
        // Add user to localStorage
        Store.addUser(user);
        // Clear Fields
        USERUI.clearFields();
        USERUI.removeStoreModal();
        // Show success Message
        USERUI.showAlert('User Added', 'success');

    }
})

// REMOVE USERS
document.querySelector('#user-list').addEventListener('click', (e) => {
    USERUI.deleteUser(e.target);
    // Remove user from store
    Store.removeUser(e.target);
    // Show success message
    USERUI.showAlert('User Removed', 'success');
})
