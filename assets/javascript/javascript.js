


// resetting the game
function(resetGame()){
  

}




// determining if game is running
document.onkeypress = keyPressed;
  function keyPressed(event) {
    if(isGameRunning){
      playGame(event)
    }
    else{
      resetGame()
      // need to identify the right classes, then .empty()
    }
  }
