import random

class Monster:
    def __init__(self, name, typeofmonster, HP):
        self.name = name
        self.typeofmonster = typeofmonster
        self.HP = HP

    def monsterintro(self):
        print ("Prepare for Battle! You have encountered {}, he is a {}, with an HP of {}".format(self.name, self.typeofmonster, self.HP))

hero = Monster("hero", "goodguy", 100)
skip = Monster("Lola", "Boss monster", 75)
juan = Monster("Wendy", "regular monster", 60)
garett = Monster("Lucy", "regular monster", 60)
car = Monster("Violet", "regular monster", 60)
oliver = Monster("Bella", "junior monster", 40)
monsterlist = [skip, juan, garett, car, oliver]




CELLS = [(0, 0), (0, 1), (0, 2), (0, 3), (0, 4),
         (1, 0), (1, 1), (1, 2), (1, 3), (1, 4),
         (2, 0), (2, 1), (2, 2), (2, 3), (2, 4),
         (3, 0), (3, 1), (3, 2), (3, 3), (3, 4),
         (4, 0), (4, 1), (4, 2), (4, 3), (4, 4)]

def hpfight(hero_HP, monster_ATT):
    return hero_HP - monster_ATT

def get_locations():
    monster = random.choice(CELLS)
    monster2 = random.choice(CELLS)
    monstername = random.choice(monsterlist)
    monstername2 = random.choice(monsterlist)
    door = random.choice(CELLS)
    player = random.choice(CELLS)
    if monster == player or monster == door or door == player or monster2 == monster or monster2 == door or monster2 == player or monster == monster2:
        return get_locations()
    else:
        return monster, monster2, monstername, monstername2, door, player

def get_moves(player):
  MOVES = ['LEFT', 'RIGHT', 'UP', 'DOWN']
  if player[1] == 0:
      MOVES.remove('LEFT')
  if player[0] == 0:
      MOVES.remove('UP')
  if player[1] == 4:
      MOVES.remove('RIGHT')
  if player[0] == 4:
      MOVES.remove('DOWN')
  return MOVES

def move_player(player, move):
  if move == "LEFT" and "LEFT" in get_moves(player):
      player = (player[0], player[1] -1)
  if move == "RIGHT" and "RIGHT" in get_moves(player):
      player = (player[0], player[1] +1)
  if move == "UP" and "UP" in get_moves(player):
      player = (player[0] -1, player[1])
  if move == "DOWN" and "DOWN" in get_moves(player):
      player = (player[0] +1, player[1])
  return player


def display(CELLS, player):
    newcells = CELLS[:]
    for var in newcells:
        if var == player:
            cellindex = newcells.index(var)
            newcells[cellindex] = ("***")
            print(newcells[0:5])
            print(newcells[5:10])
            print(newcells[10:15])
            print(newcells[15:20])
            print(newcells[20:25])


monster, monster2, monstername, monstername2, door, player = get_locations()
print("Welcome to the dungeon!")
while True:
  moving = get_moves(player)
  print("You're currently in room {}".format(player))
  display(CELLS, player) # fill in with player position
  print("You can move {}".format(moving))  # fill in with available moves
  print("Enter QUIT to quit")
  move = input("> ").upper()

  player = move_player(player, move)


  if player == door:
      print ("tada, the door! your a winner!")

  elif player == monster:
      monstername.monsterintro()
      gotowar = input("Do you want to fight {}?: Type yes or no".format(monstername.name)).lower()
      if gotowar == "yes" and hpfight(hero.HP, monstername.HP) > 0:
          hero.HP = hpfight(hero.HP, monstername.HP)
          print ("Good job you won! You have {} HP left".format(hero.HP))
      elif  gotowar == "yes" and hpfight(hero.HP, monstername.HP) <0:
          print ("You died in battle! too bad bruh")

  elif player == monster2:
      monstername2.monsterintro()
      gotowar = input("Do you want to fight {}?: Type yes or no".format(monstername2.name)).lower()
      if gotowar == "yes" and hpfight(hero.HP, monstername2.HP) > 0:
          hero.HP = hpfight(hero.HP, monstername.HP)
          print ("Good job you won! You have {} HP left".format(hero.HP))
      elif  gotowar == "yes" and hpfight(hero.HP, monstername2.HP) <0:
          print ("You died in battle! too bad bruh")

  elif move == 'QUIT':
      break


  # If it's a good move, change the player's position
  # If it's a bad move, don't change anything
  # If the new player position is the door, they win!
  # If the new player position is the monster, they lose!
  # Otherwise, continue
