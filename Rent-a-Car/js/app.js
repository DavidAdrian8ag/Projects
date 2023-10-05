const brand = document.querySelector('#brand');
const year = document.querySelector('#year');
const minp = document.querySelector('#minp');
const maxp = document.querySelector('#maxp');
const doors = document.querySelector('#doors');
const transmission = document.querySelector('#transmission');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;
const searchData = {
     brand: '',
     year: '',
     minp: '',
     maxp: '',
     doors: '',
     transmission: '',
     color: '',
}
document.addEventListener('DOMContentLoaded', () => {
     showCars(cars);
     fillyear();
})
brand.addEventListener('change', (selection) => {
     searchData.brand = selection.target.value;
     filterCar();
})
year.addEventListener('change', (selection) => {
     searchData.year = selection.target.value;
     filterCar();
})
minp.addEventListener('change', (selection) => {
     searchData.minp = selection.target.value;
     filterCar();
})
maxp.addEventListener('change', (selection) => {
     searchData.maxp = selection.target.value;
     filterCar();
})
doors.addEventListener('change', (selection) => {
     searchData.doors = parseInt(selection.target.value);
     filterCar();
})
transmission.addEventListener('change', (selection) => {
     searchData.transmission = selection.target.value;
     filterCar();
})
color.addEventListener('change', (selection) => {
     searchData.color = selection.target.value;
     console.log(searchData);
     filterCar();
})
function showCars(cars) {
     limpiarHTML();
     cars.forEach( car  => {
          const { brand, model, year, doors, transmission, price, color  } = car;
          const carHTML = document.createElement('p');
          carHTML.textContent = `
               ${brand} - ${model} - ${year} - ${doors} Doors - Transmission: ${transmission} - Price: ${price} - Color: ${color}
          `;
          resultado.appendChild(carHTML);
     });
}
function limpiarHTML(){
     while (resultado.firstChild) {
          resultado.removeChild(resultado.firstChild);
     }
};
function fillyear () {
     for ( let i = max; i >= min; i--) {
          const years = document.createElement('option');
          years.value = i;
          years.textContent = i;
          year.appendChild(years);
     }
}
function filterCar() {
     const resultFilter  = cars.filter( filterBrand ).filter ( filterYear ).filter (filtrarMin).filter(filtrarMax).filter(filterdoor).filter(filterTransmission).filter(filterColor)
     showCars(resultFilter);
     if (resultFilter.length) {
          showCars(resultFilter);
     } else {
          noResultFound();
     }
};
function noResultFound () {
     limpiarHTML();
     const noResultFound = document.createElement('div');
     noResultFound.classList.add('alerta', 'error');
     noResultFound.textContent = 'There were NO results to show, try again with new parameters';
     resultado.appendChild(noResultFound);
}
function filterBrand (car) {
     const { brand } = searchData;
     if ( brand ) {
          return car.brand === brand;
     }
     return car;
}
function filterYear (car) {
     const { year }  = searchData;
     if ( year ) {
          return car.year === parseInt(year);
     }
     return car;
}
function filtrarMin (car) {
     const { minp }  = searchData;
     if ( minp ) {
          return car.price >= minp;
     }
     return car;
}
function filtrarMax (car) {
     const { maxp }  = searchData;
     if ( maxp ) {
          return car.price <= maxp;
     }
     return car;
}
function filterdoor (car) {
     const { doors } = searchData;
     if ( doors ) {
          return car.doors === doors;
     }
     return car;
}
function filterTransmission (car) {
     const { transmission } = searchData;
     if ( transmission ) {
          return car.transmission === transmission;
     }
     return car;
}
function filterColor (car) {
     const { color } = searchData;
     if ( color ) {
          return car.color === color;
     }
     return car;
}