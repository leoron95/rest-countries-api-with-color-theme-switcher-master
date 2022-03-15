export const getCountriesByName = (data ,name='') => {

    if( name === '') {
        return [];
    }

    name = name.toLowerCase()
    return data.filter(country => country.name.toLowerCase().includes(name)) || []

}

