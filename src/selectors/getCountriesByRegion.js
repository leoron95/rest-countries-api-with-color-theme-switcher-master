
export const getCountriesByRegion = (data, region) => {

    return data.filter(country => country.region === region)
}
