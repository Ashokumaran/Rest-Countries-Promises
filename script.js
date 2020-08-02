var country = document.createElement('div');
country.className = 'container';

var url = 'https://restcountries.eu/rest/v2/all';
fetch(url)
.then((value) => {
    return value.json();
})
.then((data) => {
    return cards(data);
})
.catch((error) =>{
    return error;
}
)

function cards(input) {
    var row = document.createElement('div');
    row.setAttribute('class','row mt-3');
    for(var i=0; i<input.length; i++)
    {
        let cardContainer = document.createElement('div');
        cardContainer.setAttribute('class', 'col col-sm-2 col-md-4 col-lg-3 mt-3');
        let card = document.createElement('div');
        card.className = 'card cardHeight';
        let cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        cardHeader.innerHTML = `${input[i].name}`;
        let cardImage = document.createElement('img');
        cardImage.className = 'card-img-top';
        cardImage.setAttribute('src',`${input[i].flag}`);
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        let groupText = document.createElement('p');
        groupText.setAttribute('class','card-text');
        let capital = document.createElement('span')
        let capitalName = document.createElement('span');
        capitalName.innerHTML = '<strong>Capital: </strong>';
        let badgeCapital = document.createElement('span');
        badgeCapital.setAttribute('id','badge')
        badgeCapital.innerHTML = `${input[i].capital} <br>`;
        capital.append(capitalName,badgeCapital);
        let code = document.createElement('span');
        code.innerHTML = `<strong>Code:</strong> ${input[i].alpha2Code},${input[i].alpha3Code} <br>`;
        let region = document.createElement('span');
        region.innerHTML = `<strong>Region:</strong> ${input[i].region} <br>`;

        //appending data
        cardBody.append(capital,code,region);
        card.appendChild(cardHeader);
        card.appendChild(cardImage);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
        row.appendChild(cardContainer);
        country.appendChild(row);
        document.body.append(country);
    }
}