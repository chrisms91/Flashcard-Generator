
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