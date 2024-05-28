package com.code.deckOfCards;

import java.util.Scanner;

public class Game {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Deck myDeck =new Deck();
		myDeck.shuffle();
		
		Hand playerHand = new Hand("player",false);
		Hand dealerHand = new Hand("player",false);
		
		dealerHand.addCard(myDeck);
		dealerHand.addCard(myDeck);
		
		playerHand.addCard(myDeck);
		playerHand.addCard(myDeck);
		Boolean endGame= false;
		Scanner scaner = new Scanner(System.in);
		while(endGame == false) {
			dealerHand.displayCards();
			playerHand.displayCards();
			System.out.println("Do you want to hit or stand, H|S");
			String choice =scaner.nextLine().toLowerCase();
			//HIT
			if(choice.equals("h")) {
				playerHand.addCard(myDeck);
				playerHand.displayCards();
				if(playerHand.sumPoints()>21) {
					System.out.println("player BUST");
					endGame=true;
				}
			}
			
			//stand 
			if(choice.equals("s")) {
				dealerHand.setHidden(false);
				dealerHand.displayCards();
				
				while(dealerHand.sumPoints()<playerHand.sumPoints()) {
					dealerHand.addCard(myDeck);
					dealerHand.displayCards();
					if(playerHand.sumPoints()>21) {
						System.out.println("dealer BUST");
						endGame=true;
					}
				}
				if(dealerHand.sumPoints()>playerHand.sumPoints()) {
					System.out.println("Dealer Win");
				}
				if(dealerHand.sumPoints()<playerHand.sumPoints()) {
					System.out.println("Playeer WIN");
				}
				if(dealerHand.sumPoints()==playerHand.sumPoints()) {
					System.out.println("DRAW");
				}
			}
		}
	}

}
