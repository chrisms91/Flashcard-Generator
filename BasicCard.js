
//BasicCard Constructor
var BasicCard = function (front, back) {
    
    //If new isn't used, a proper instance of the object is created by calling the constructor again with new keyword
    if (!(this instanceof BasicCard)) {
        return new BasicCard(front, back);
    }
    
    this.front = front;
    this.back = back;

}

// exports a constructor for creating basic flashcards
module.exports = BasicCard;