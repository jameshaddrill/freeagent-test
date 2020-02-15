const apiBase = 'http://data.fixer.io/api/';
const apiKey = 'd909ad6e2bb49803ef3c78b7778984a7';

const getApi = () => {
    fetch(`${apiBase}latest?access_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(JSON.stringify(data));
    })
}

export { getApi };