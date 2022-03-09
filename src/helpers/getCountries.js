
export const getCountries = async () => {

const url = 'https://restcountries.com/v2/all'
const resp = await fetch(url)
const data = await resp.json()

return data;
}





