const storeList = document.querySelector('#store-list');

// create element and render Restaurants
function renderStore(doc){
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');

  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;

  li.appendChild(name);
  li.appendChild(city);

  storeList.appendChild(li);

  console.log(doc.data().name);
  console.log(doc.data().city);
  console.log(doc.data().ingredients);
}

db.collection('Restaurants').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderStore(doc);
  })
});
