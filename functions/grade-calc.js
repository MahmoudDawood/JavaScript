let gradeCalculator = function(score, max){
    if(typeof score !== 'number' || typeof max !== 'number'){
        throw Error('Not a number')
    }
    let percent = (score / max) * 100
    let grade
    if (percent >= 90) {
        grade = 'A'
    } else if(percent >= 80){
        grade = 'B'
    } else if(percent >= 70){
        grade = 'C'
    } else if(percent >= 60){
        grade = 'D'
    } else{
        grade = 'F'
    }
    return (`You got a ${grade} (%${percent})`)
}
try{
    let result = gradeCalculator(false, 20)
    console.log(result)
} catch(e){
    console.log('Woooof thanks god catched it!')
}