

let h1 = document.querySelector('h1').textContent = 'Fruits & Vegetables Corp';

let lastItem = document.querySelector('ul > li:nth-child(3n');
lastItem.remove();

let bodyUl = document.querySelector('ul');
let newItem = document.createElement('li');
newItem.setAttribute('id', 'vegetables')
bodyUl.appendChild(newItem);

let vegetables = document.querySelector('#vegetables');
let a = document.createElement('a');
a.textContent = 'Vegetables';
a.setAttribute('href', 'vegetables')
vegetables.appendChild(a);

let pAbout = document.getElementById('about');
pAbout.remove();

let newContact = document.querySelector('#contact');
let contact = document.querySelector('#contact > p');
contact.remove();
let main = document.querySelector('main')
let about = document.createElement('section');
about.setAttribute('id', 'firstSection');
main.appendChild(about);
about.insertAdjacentElement('afterend', newContact);
let h2About = document.createElement('h2');
h2About.textContent = 'About';
about.appendChild(h2About);
let newPAbout = document.createElement('p');
newPAbout.textContent ='We\'re the best in fruits & vegetables';
about.appendChild(newPAbout);

let thead = document.querySelector('thead tr');
thead.remove();

let getThead = document.querySelector('thead');
let tr = document.createElement('tr');
getThead.appendChild(tr);

let th1 = document.createElement('th');
th1.textContent = 'Name';
tr.appendChild(th1);

let th2 = document.createElement('th');
th2.textContent = 'Email';
tr.appendChild(th2);

let contactUs = document.createElement('h2');
contactUs.textContent = 'Contact';
newContact.appendChild(contactUs);
newContact.insertAdjacentElement('afterbegin', contactUs);


let contactUs2 = document.createElement('h2');
contactUs2.textContent = 'Contact us!';
newContact.appendChild(contactUs2);
newContact.insertAdjacentElement('afterbegin', contactUs2);


var head = document.querySelector('head');
var style = document.createElement('link');
style.href = 'main.css';
style.type = 'text/css';
style.rel = 'stylesheet';
head.appendChild(style);
