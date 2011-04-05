/*
 * Take in an array of value ordered card types (from lowest to highest)
 * and a function pointer to a shuffle method which accepts an array of cards
 */
function Deck( card_types, shuffle_method ) {
    if( shuffle_method == undefined ) {
        throw 'Undefined Shuffle Method';
    }

    //Use slice to clone the array as opposed to storing a reference... making this.cards the same as this.deck
    this.cards = card_types.slice(0);
    this.deck = card_types.slice(0);
    this.shuffleMethod = shuffle_method;
}

/*
 * Set the shuffle method outside of constructor
 */
Deck.prototype.setShuffleMethod = function( shuffle_method ) {
    this.shuffleMethod = shuffle_method;
}

/*
 * Deal an array of cards cards off of the deck
 * If the deck is empty the array will be empty
 *
 */
Deck.prototype.deal = function( num_cards ) {
    return this.deck.splice(0,num_cards);
};

/*
 * Shuffle this deck
 */
Deck.prototype.shuffle = function() {
    this.deck =  this.shuffleMethod( this.deck );
};

/*
 * Reset the deck to an unshuffled state
 */
Deck.prototype.reset = function() {
    //clone the array as opposed to referencing
    this.deck = this.cards.slice(0);
};

/*
 * Display the deck as a string of comma separated values
 */
Deck.prototype.toString = function() {
    return this.deck.join(', ');
}

/*
 * Display the ordinal value of a given card type in the deck
 */
Deck.prototype.valueOf = function( card ) {
    var i = this.cards.indexOf( card );
    if( i < 0 ) {
        throw 'InvalidCardException';
    }

    return i;
}

/*
 * Just a namespace to store our shuffle methods
 * No real reason other than for fun
 *
 * Each shuffle method can assume it has access to
 * this. Not really necessary since we pass the deck... but could be useful later;
 */
var ShuffleMethod = {
    /*
     * A simple Math.random shuffle.
     * Semi-bias towards the original position thanks to the way the sort method works
     */
    randomShuffle: function( deck ) {
        return deck.sort( function() { 
                return Math.floor(Math.random()*3+1)-2;
        } );
    },

    modernFisherYates: function( deck ) {
        var decksize = deck.length;
        for( var i = (decksize-1); i >= 1; i-- ) {
            //A random number between 0 and length-1
            var j = Math.floor(Math.random()*(i+1));
            var temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }

        return deck;
    }
};
