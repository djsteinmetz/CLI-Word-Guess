var Letter = function(character, isGuessed) {
    this.character = character,
    this.isGuessed = isGuessed,
    this.display() = function() {
        if(isGuessed) {
            return this.character;
        } else {
            return "_";
        }
    },
    this.check() = function() {
        
    }
};
module.exports = Letter;