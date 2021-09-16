let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer only vegan dishes')
} else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer some vegan option')
} else{
    console.log('Offer all menu')
}