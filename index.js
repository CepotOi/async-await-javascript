function showCountries() {
  const countriesEndPoint = 'https://restcountries.com/v3.1/all';

  /**
   ** Ajax Request   
   */
  const xhr = new XMLHttpRequest();

  xhr.open('GET', countriesEndPoint, true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const countries = JSON.parse(xhr.response);
      const countriesCard = document.querySelector('.row-countries');

      countries.forEach(country => {
        const col = document.createElement('div');
        col.classList.add('col-md-3');
        const card = document.createElement('div');
        card.classList.add('card', 'mt-3');
        card.innerHTML = `
          <div class="card-image">
            <img src="${country.flags.png}" class="countries-img">
          </div>
          <div class="card-content">
            <h3>${country.name.common}</h3>
            <p>${country.name.official}</p>
            <p>${country.capital}</p>
          </div>
        `;
        col.appendChild(card);
        countriesCard.appendChild(col);
      });
    }
  };

  xhr.send();
}