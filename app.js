var Game = function() {
  this.turn = 1;
  this.board = [[0,0,0],[0,0,0],[0,0,0]];
}


Game.prototype.checkForWin = function() {
  // Return 1 if player 1 wins, 2 if 2 wins, 0 if no one has won.
  // Check for each player.
  var board = this.board;
  for (var i = 1; i <= 2; i++) {
    // Check rows
    for (var j = 0; j < 3; j++) {
      if (board[j] === [i, i, i]) return i;
    }
    // Check cols
    for (var j = 0; j < 3; j++) {
      if (board[j][0] === board[j][1] && board[j][1] === board[j][2] && board[j][0] === i) return i;
    }
    // Check diags
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === i) return i;
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1] === i) return i;
  }

  return 0;
}

Game.prototype.playMove = function(place) {
  var player = this.turn;
  var color = this.turn === 1 ? 'red' : 'blue'

  if (place > 6) this.board[2][(place+2)%3] = player;
  else if (place > 3) this.board[1][(place+2)%3] = player;
  else this.board[0][(place+2)%3] = player;

  this.turn = this.turn === 1 ? 2 : 1;

  return color;

  // return the color we want to paint that square. (It doesn't need to make sense.)

}

Game.prototype.getTurn = function() { return this.turn; }

//////////////// Declare / Jquery ///////////////

var tic = new Game();

var turn = tic.getTurn();
$('.turnDisplay').text('It is player 1\'s turn.');


$('.one').on('click', function() {
  console.log('you have clicked button 1');
  var color = tic.playMove(1);
  $('.one').css('background-color', color);

  var over = tic.checkForWin();
  if (over === 1) {
    $('.turnDisplay').text('Player 1 has won!');
  } else if (over === 2) {
    $('.turnDisplay').text('Player 2 has won!');
  } else {
    var turn = tic.getTurn();
    $('.turnDisplay').text('It is player ' + turn + '\'s turn.');
  }
});

$('.two').on('click', function() {
  console.log('you have clicked button 2');
  var color = tic.playMove(2);
  $('.two').css('background-color', color);

  var over = tic.checkForWin();
  if (over === 1) {
    $('.turnDisplay').text('Player 1 has won!');
  } else if (over === 2) {
    $('.turnDisplay').text('Player 2 has won!');
  } else {
    var turn = tic.getTurn();
    $('.turnDisplay').text('It is player ' + turn + '\'s turn.');
  }
});

$('.three').on('click', function() {
  console.log('you have clicked button 3');
  var color = tic.playMove(3);
  $('.three').css('background-color', color);

  var over = tic.checkForWin();
  if (over === 1) {
    $('.turnDisplay').text('Player 1 has won!');
  } else if (over === 2) {
    $('.turnDisplay').text('Player 2 has won!');
  } else {
    var turn = tic.getTurn();
    $('.turnDisplay').text('It is player ' + turn + '\'s turn.');
  }
});

$('.four').on('click', function() {
  console.log('you have clicked button 4');
  var color = tic.playMove(4);
  $('.four').css('background-color', color);

  var over = tic.checkForWin();
  if (over === 1) {
    $('.turnDisplay').text('Player 1 has won!');
  } else if (over === 2) {
    $('.turnDisplay').text('Player 2 has won!');
  } else {
    var turn = tic.getTurn();
    $('.turnDisplay').text('It is player ' + turn + '\'s turn.');
  }
});

$('.five').on('click', function() {
  console.log('you have clicked button 5');
  var color = tic.playMove(5);
  $('.five').css('background-color', color);

  var over = tic.checkForWin();
  if (over === 1) {
    $('.turnDisplay').text('Player 1 has won!');
  } else if (over === 2) {
    $('.turnDisplay').text('Player 2 has won!');
  } else {
    var turn = tic.getTurn();
    $('.turnDisplay').text('It is player ' + turn + '\'s turn.');
  }
});

$('.six').on('click', function() {
  console.log('you have clicked button 6');
  var color = tic.playMove(6);
  $('.six').css('background-color', color);

  var over = tic.checkForWin();
  if (over === 1) {
    $('.turnDisplay').text('Player 1 has won!');
  } else if (over === 2) {
    $('.turnDisplay').text('Player 2 has won!');
  } else {
    var turn = tic.getTurn();
    $('.turnDisplay').text('It is player ' + turn + '\'s turn.');
  }
});

$('.seven').on('click', function() {
  console.log('you have clicked button 7');
  var color = tic.playMove(7);
  $('.seven').css('background-color', color);

  var over = tic.checkForWin();
  if (over === 1) {
    $('.turnDisplay').text('Player 1 has won!');
  } else if (over === 2) {
    $('.turnDisplay').text('Player 2 has won!');
  } else {
    var turn = tic.getTurn();
    $('.turnDisplay').text('It is player ' + turn + '\'s turn.');
  }
});

$('.eight').on('click', function() {
  console.log('you have clicked button 8');
  var color = tic.playMove(8);
  $('.eight').css('background-color', color);

  var over = tic.checkForWin();
  if (over === 1) {
    $('.turnDisplay').text('Player 1 has won!');
  } else if (over === 2) {
    $('.turnDisplay').text('Player 2 has won!');
  } else {
    var turn = tic.getTurn();
    $('.turnDisplay').text('It is player ' + turn + '\'s turn.');
  }
});

$('.nine').on('click', function() {
  console.log('you have clicked button 9');
  var color = tic.playMove(9);
  $('.nine').css('background-color', color);

  var over = tic.checkForWin();
  if (over === 1) {
    $('.turnDisplay').text('Player 1 has won!');
  } else if (over === 2) {
    $('.turnDisplay').text('Player 2 has won!');
  } else {
    var turn = tic.getTurn();
    $('.turnDisplay').text('It is player ' + turn + '\'s turn.');
  }
});

