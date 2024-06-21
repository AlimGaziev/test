var firstNameId = 'first-name';
var firstNameEl = document.getElementById(firstNameId);
var lastNameId = 'last-name';
var lastNameEl = document.getElementById(lastNameId);
var addressId = 'address';
var addressEl = document.getElementById(addressId);
var citiesId = 'cities';
var citiesEl = document.getElementById(citiesId);
var hobbiesId = 'hobbies';
var hobbiesEl = document.getElementById(hobbiesId);
var avatarWrapperId = 'avatar-wrapper';
var avatarWrapperEl = document.getElementById(avatarWrapperId);
var avatarId = 'avatar';
var avatarEl = document.getElementById(avatarId);

//window.alert(lastNameEl.className);
lastNameEl.className = 'last-name default-input error-input';
lastNameEl.title = 'wrong last name';
avatarEl.src = 'https://позитив-екб.рф/upload/iblock/b43/b43e381dce7e89259069f42b31ca514e.jpg';
avatarEl.title = 'Persice';

citiesEl.value = 'SpB';
hobbiesEl.value = 'I am a programmer';
avatarWrapperEl.innerHTML = '<ul id="list"><li>1</li><li>2</li></ul>';

var listId = 'list';
var numberList = document.getElementById(listId);
window.alert(numberList.innerHTML);

//window.alert(avatarEl.alt)
//window.alert(hobbiesEl.value)
//window.alert(citiesEl.value)

//window.alert(firstNameEl.value)
//window.alert(lastNameEl.value)
//window.alert(addressEl.value)