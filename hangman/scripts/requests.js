const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else{
        throw new Error('Unable to get puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = fetch('//restcountries.eu/rest/v2/all?access_key=05faf6e6fec8b84097753775de246913')
    if(response.status === 200){
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else{
        throw new Error('Unable to get country')
    }
}

const getCurrentCountry = async () => {
    const response = await getLocation()
    return getCountry(response.country)
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/41.232.101.230\?token=9e93bb13778e84')
    if(response.status === 200){
        return response.json()
    } else{
        throw new Error('Unable to get location')
    }
}
