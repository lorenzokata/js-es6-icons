const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

// Milestone 2 Coloriamo le icone per tipo

const iconsColor = icons.map((obj) => {

    let color;
    switch (obj.type) {
        case 'animal':
            color = '#ff00ff'
            break;
    
        case 'vegetable':
            color = '#ff0000'
            break;
            
        case 'user':
            color = '#0000ff'
            break;
    }

    return {...obj , color}

});

printIcons(iconsColor);

// Milestone 3 Creare un select per il tipo di icona

const type = [];

iconsColor.forEach(element => {

  if (!type.includes(element.type)) {
    type.push(element.type);
    document.getElementById('type').innerHTML +=
    `
    <option value="${element.type}">${element.type}</option>
    `
  }

});

const select = document.getElementById('type');

select.addEventListener("change", function(){

  const valueSelect = select.value;

  const filteredIcons = iconsColor.filter((element) => {
    return element.type == valueSelect;
  });
  printIcons(filteredIcons);
  if (valueSelect == 'All') {
    printIcons(iconsColor);
  }

});


// funzione di stampa icons

function printIcons(array) {

  document.getElementById('row').innerHTML = "";

  array.forEach(obj => {

    document.getElementById('row').innerHTML += `
    
    <div class="col">
        <div class="icon-card p-2 rounded bg-white d-flex flex-column justify-content-center align-items-center">
            <i class="${obj.family} ${obj.prefix}${obj.name} d-block fs-1" style="color: ${obj.color}"></i>
            <div class="icon-title text-uppercase">${obj.name}</div>
        </div>
    </div>

    `
});

}