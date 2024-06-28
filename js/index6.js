function alertValues(elementParameter) {
    console.log(elementParameter.value);
    console.log(elementParameter.className)
}

function getEl(id) {
    var el = document.getElementById(id);
    return el;

}
var firstNameId = 'first-name';
var FirstNameEl = getEl(firstNameId);
//alertFirstNameValues();
alertValues(FirstNameEl);
var lastNameId = 'last-name';
var lastNameEl = getEl(lastNameId);
//alertLastNameValues();
alertValues(lastNameEl);
var addressId = 'address';
var addressEl = getEl(addressId);
//alertAddressValues();
alertValues(addressEl);

var citiesId = 'cities';
var citiesEl = getEl(citiesId);
var hobbiesId = 'hobbies';
var hobbiesEl = getEl(hobbiesId);
//alertHobbiesValues();
alertValues(hobbiesEl);
var avatarWrapperId = 'avatar-wrapper';
var avatarWrapperEl = getEl(avatarWrapperId);
var avatarId = 'avatar';
var avatarEl = getEl(avatarId);

FirstNameEl.value = 'Alim'
console.log(FirstNameEl.value);
console.log(FirstNameEl.className);

lastNameEl.className = 'last-name-input default-input error-input';
// console.log(lastNameEl.value);
// console.log(lastNameEl.className);

lastNameEl.tittle = 'wrong last name';
// console.log(lastNameEl.value);
// console.log(lastNameEl.className);

FirstNameEl.className = 'new-class';
// console.log(FirstNameEl.value);
// console.log(FirstNameEl.className);


//console.log(lastNameEl.className);
lastNameEl.className = 'last-name default-input error-input';
lastNameEl.title = 'wrong last name';
//avatarEl.src = 'https://позитив-екб.рф/upload/iblock/b43/b43e381dce7e89259069f42b31ca514e.jpg';
avatarEl.title = 'Persice';

citiesEl.value = 'SpB';
hobbiesEl.value = 'I am a programmer';
avatarWrapperEl.innerHTML = '<ul id="list"><li>1</li><li>2</li></ul>';

var listId = 'list';
var numberList = document.getElementById(listId);
console.log(numberList.innerHTML);

//console.log(avatarEl.alt)
//console.log(hobbiesEl.value)
//console.log(citiesEl.value)

//console.log(firstNameEl.value)
//console.log(lastNameEl.value)
//console.log(addressEl.value)

function alertValue() {
    console.log('1');
    console.log('2');
    console.log('3');
}

alertValue()
