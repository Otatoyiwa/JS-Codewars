const rps = (p1, p2) => { let result = 
  (p1 == 'rock' && p2 == 'scissors' || p1 == 'scissors' && p2 == 'paper' || p1 == 'paper' && p2 == 'rock')?
    'Player 1 won!':
  (p2 == 'paper' && p1 == 'rock' || p2 == 'scissors' && p1 == 'paper' || p2 == 'rock' && p1 == 'scissors')?
    'Player 2 won!': "Draw!";
    return result
};
