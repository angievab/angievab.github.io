const baseUrl = 'https://pokeapi.co/api/v2/';

function writestuff() { console.log("writestuff")}
async function getJson(url) {
    try {
        setTimeout(writestuff, 200);
        console.log("In function")
        let response = await fetch(url);

        console.log("right after fetch")
        if (response.ok) {
            console.log('in then response', response);
            return await response.json();

        } else {
        console.log('will not run');
        throw new Error('not ok');
        }
    }
    catch (err) {
        console.log(err);
    }
}

const myList = getJson(baseUrl + 'type/3');
myList.then(data => {
    console.log("in then json")
        console.log(data);
        buildList(data);
});

function buildList(data) {
    const myListElement = document.getElementById('list');
    myListElement.innerHTML = data.pokemon
    .map(item => `<li>${item.pokemon.name}</li>`)
    .join('');
}