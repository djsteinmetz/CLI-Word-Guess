var Letter = require("./letter");
var Word = function(str) {
    this.letters = function() {
        for(var i=0; i<this.word.length; i++) {
            let i = new Letter(i, false);
        };
        console.log(this.letters);
    };
}