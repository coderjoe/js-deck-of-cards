/*
 * World's simplest object. 
 * We ignore accessors since the variable names will do
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

/*
 * A utility function to help with the creation of decks with multiple suits
 * it makes the following assumptions.
 *
 * 1) Card names are listed in value order
 * 2) Every card  name is present once in each suit
 */
DeckBuilder = {
    build: function( card_names, card_suits ) {
        var deck = [];
        for( var s = 0; s < card_suits.length; s++ ) {
            for( var n = 0; n < card_names.length; n++ ) {
                deck.push( new Card( n+1, card_names[n], card_suits[s] ) );
            }
        }

        return deck;
    }
};
