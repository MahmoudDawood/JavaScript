const getData = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Provide number')
    }, 2000)
})

// getData(2).then((data) => {
//     getData(data).then((data) => {
//         getData(data).then((data) => {
//             console.log(`Promise data: ${data}`)
//         }, (err) => {
//             console.log(err)
//         })
//     }, (err) => {
//         console.log(err)    
//     })
// }, (err) => {
//     console.log(err)
// })

getData(2).then((data) => {
    return getData(data)
}).then((data) => {
    return getData(data)
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})