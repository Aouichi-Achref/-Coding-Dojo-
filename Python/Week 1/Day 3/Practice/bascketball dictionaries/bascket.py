kevin = {
	"name": "Kevin Durant", 
    "age":34, 
    "position": "small forward", 
	"team": "Brooklyn Nets"
}
jason = {
    "name": "Jason Tatum", 
	"age":24, 
	"position": "small forward", 
    "team": "Boston Celtics"
}
kyrie = {
    "name": "Kyrie Irving", 
	"age":32,
        "position": "Point Guard", 
	"team": "Brooklyn Nets"
}


class Player:
    all_Players=[]
    def __init__(self, players):
        self.name = players['name']
        self.age = players['age']
        self.position = players['position']
        self.team = players['team']
        Player.all_Players.append(self)
    


kyrie_player=Player(kyrie)
print(kyrie_player.name)

kevin_player=Player(kevin)
print(kevin_player.name)

jason_player=Player(jason)
print(jason_player.name)

print(Player.all_Players)



