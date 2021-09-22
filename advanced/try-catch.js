const passNum = (num) => {
    if(typeof num === 'number'){
     return num * 0.25
    } else {
        throw Error('Arg must be a num')
    }
}


try{
    const result = passNum(1)
    console.log(result)
} catch(e){
    console.log('catccch')
}