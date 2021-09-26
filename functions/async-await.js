const getData = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Provide number')
    }, 1000)
})

const processData = async () => {
    let data = await getData(2)
    data = await getData(data)
    data = await getData(data)
    return data
}

processData().then((data) => {
    console.log(`Data: ${data}`)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

console.log(processData())