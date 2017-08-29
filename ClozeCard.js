/*
This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
The constructor should accept two arguments: text and cloze.
The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
The constructed object should have a partial property that contains only the partial text.
The constructed object should have a fullText property that contains only the full text.
The constructor should throw or log an error when the cloze deletion does not appear in the input text.
Use prototypes to attach these methods, wherever possible.
*/

var ClozeCard = function (text, cloze) {

    // Check this object is instance of ClozeCard.
    //If new isn't used, a proper instance of the object is created by calling the constructor again with new keyword
    if (!(this instanceof ClozeCard)) {
        return new ClozeCard(text, cloze);
    }

    this.fullText = text;
    this.cloze = cloze;
    this.partial = this.replaceAll(cloze, " ... ");
}

ClozeCard.prototype.replaceAll = function (search, replacement) {
    var target = this.fullText;
    var regex = new RegExp(search, "gi");
    
    // check error when search doesn't appear in target.
    if (target.search(regex) === -1) {
        console.log("ERROR: " + search + " doesn't appear in " + target);
    } else {
         // global, case-insensitive replacement
        return target.replace(regex, replacement);
    }
}

module.exports = ClozeCard;