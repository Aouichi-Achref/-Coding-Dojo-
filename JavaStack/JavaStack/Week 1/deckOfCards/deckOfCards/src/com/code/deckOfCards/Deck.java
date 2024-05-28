package com.code.deckOfCards;

import java.util.ArrayList;
import java.util.Collections;

public class Deck {
	private ArrayList<Card> cards;

	public Deck() {
		super();
		this.cards=new ArrayList<Card>();
		for(String name : new String[] {"Hearts","Clubs","Diamonds","Spades"}){
			for(Integer rank=1;rank<=13;rank++) {
				this.cards.add(new Card(name,rank));
			}
		}
	}
	//randomize the order 
	public void shuffle() {
		Collections.shuffle(cards);
	}

	// get one card from the front of the deck
	public Card getOneCard() {
		Card oneCard=this.cards.get(0);
		this.cards.remove(0);
		return oneCard;
	}
	//==========================
	public ArrayList<Card> getCards() {
		return cards;
	}
	public void setCards(ArrayList<Card> cards) {
		this.cards = cards;
	}
}
	

