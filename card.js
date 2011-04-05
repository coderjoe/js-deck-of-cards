/*
 * World's simplest object. 
 * We ignore accessors since the instance variables will do
 */
function Card( value, name, suit ) {
    this.value = value;
    this.name = name;
    this.suit = suit;
}

Card.prototype.toString = function() {
    if( this.suit == undefined ) {
        return this.name;
    }

    return this.name + ' of ' + this.suit;
};

