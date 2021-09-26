const createTipper = (tip) => {
    return (bill) => {
        console.log(`Your tip is ${tip * bill }`)
    }
}

const tip10 = createTipper(.1)
tip10(100)
tip10(50)

const tip1 = createTipper(.05)
tip1(100)
tip1(50)