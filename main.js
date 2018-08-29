'use strict';


function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {

  var splashMain;
  var gameMain;
  var gameOverMain;

  // -- splash

  function buildSplash() {

    splashMain = buildDom(`
      <main>
        <h1>Up or Down</h1>
        <button>Start</button>
      </main>
    `);
    
    document.body.appendChild(splashMain);

    var button = splashMain.querySelector('button');
    button.addEventListener('click', startGame);
  }

  function destoySplash() {
    splashMain.remove();
  }

  
  // -- game

  function startGame() {
    destoySplash();
    destoyGameOver();

    // @todo temporary!!!!!! move to Game.js

    gameMain = buildDom(`
      <main>
        <h1>this is the game, lol</h1>
      </main>
    `);

    document.body.appendChild(gameMain);

    window.setTimeout(function () {
      gameOver();
    }, 3000)
  }

  function destroyGame() {
    gameMain.remove();
  }

  // -- game over 


  function gameOver() {
    destroyGame();
    buildGameOver();
  }

  function buildGameOver() {

    // @todo score
    var score = 99;

    gameOverMain = buildDom(`
      <main>
        <h1>game over</h1>
        <p>Your score: <span></span></p>
        <button>restart</button>
      </main>
    `);

    var button = gameOverMain.querySelector('button');
    button.addEventListener('click', startGame);    
    
    var span = gameOverMain.querySelector('span');
    span.innerText = score;

    document.body.appendChild(gameOverMain);
  }

  function destoyGameOver() {
    if (gameOverMain) {
      gameOverMain.remove();
    }
  }

  // -- initialize

  buildSplash();
}

window.addEventListener('load', main);