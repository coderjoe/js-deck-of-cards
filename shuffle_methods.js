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
