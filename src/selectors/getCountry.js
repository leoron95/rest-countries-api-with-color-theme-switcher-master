export const getCountry = (data, name='') => {
    return data.find(country => country.name === name) || []
}