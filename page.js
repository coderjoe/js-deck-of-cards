
var pokerDeck = new Deck( DeckTypes.poker.ace_high, ShuffleMethod.modernFisherYates );
var euchreDeck = new Deck( DeckTypes.euchre, ShuffleMethod.modernFisherYates );
var sillyDeck = new Deck( DeckTypes.silly, ShuffleMethod.modernFisherYates );

var pokerHand = [];
var euchreHand = [];
var sillyHand = [];

function shuffleDecks() {
    pokerDeck.shuffle();
    euchreDeck.shuffle();
    sillyDeck.shuffle();
}

function dealDecks() {
    var dealSize = document.getElementById('deal_size').value;

    pokerHand = pokerHand.concat( pokerDeck.deal(dealSize) );
    euchreHand = euchreHand.concat( euchreDeck.deal(dealSize) );
    sillyHand = sillyHand.concat( sillyDeck.deal(dealSize) );
}

function resetDecks() {
    pokerHand = [];
    euchreHand = [];
    sillyHand = [];

    pokerDeck.reset();
    euchreDeck.reset();
    sillyDeck.reset();
}

function display( deck, hand, deckid, handid ) {
    var deckul = document.createElement('ul');
    var handul = document.createElement('ul');

    var deckArr = deck.get();

    for( var i = 0; i < deckArr.length; i++ ) {
        var li = document.createElement('li');
        li.innerHTML = deckArr[i].toString();
        deckul.appendChild( li );
    }

    for( var i = 0; i < hand.length; i++ ) {
        var li = document.createElement('li');
        li.innerHTML = hand[i].toString();
        handul.appendChild( li );
    }

    var deckElem = document.getElementById(deckid);
    var handElem = document.getElementById(handid);
    deckElem.innerHTML = '';
    handElem.innerHTML = '';

    deckElem.appendChild( deckul );
    handElem.appendChild( handul );
}

function displayAll() {
   display( pokerDeck, pokerHand, 'pokerdeck','pokerhand'); 
   display( euchreDeck, euchreHand, 'euchredeck','euchrehand'); 
   display( sillyDeck, sillyHand, 'sillydeck','sillyhand'); 
}
