let restaurant = {
    name: 'KFC',
    capacity: 75,
    busy: 0,
    checkAvailability: function(partySize){
        return this.capacity - this.busy >= partySize
    },
    seatParty: function(partySize){
        // this.capacity = this.capacity - partySize
        this.busy = this.busy + partySize
    },
    removeParty: function(partySize){
        // this.capacity = this.capacity + partySize
        this.busy = this.busy - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))