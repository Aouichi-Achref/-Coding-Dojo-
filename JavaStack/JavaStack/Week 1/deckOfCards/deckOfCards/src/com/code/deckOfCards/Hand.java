package com.code.deckOfCards;

import java.util.ArrayList;

public class Hand {
	
	private String name;
	private ArrayList<Card> myCards;
	private Boolean hidden ;
	public Hand(String name,Boolean hidden) {
		super();
		this.name=name;
		this.hidden=hidden;
		this.myCards=new ArrayList<Card>();
	}
	
	//getters and setters
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public ArrayList<Card> getMyCards() {
		return myCards;
	}
	public void setMyCards(ArrayList<Card> myCards) {
		this.myCards = myCards;
	}
	public Boolean getHidden() {
		return hidden;
	}
	public void setHidden(Boolean hidden) {
		this.hidden = hidden;
	}
	
	// add a card to the hand from the Deck
	public void addCard(Deck deck) {
		this.myCards.add(deck.getOneCard());
	}
	//function to return the sum of my cards
	public int sumPoints() {
		int sum=0;
		for (Card card: this.myCards) {
			if(card.getRank()==11||card.getRank()==12||card.getRank()==13) {
				sum+=10;
			}else {
				sum+=card.getRank();
			}
		}
		for(Card card:this.myCards) {
			if(card.getRank()==1&&sum<17) {
				sum+=11;
			}
		}
		return sum;	
	}
	
	public void displayCards() {
		System.out.println("the "+this.name+"has: ");
		if(this.hidden==true) {
			this.myCards.get(0).showCard();
			System.out.println("hidden CARD");
		}else {
			for(Card card:this.myCards) {
				card.showCard();
			}
			System.out.println("Total: "+ sumPoints());
		}
		System.out.println("=============================");
	}
	
	

	
}
