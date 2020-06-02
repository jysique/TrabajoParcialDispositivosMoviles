window.onload = function () {
  let game = new Phaser.Game(1280, 690, Phaser.AUTO);
  //nombre del diccionario, nombra de la clase
  game.state.add("Preload", Preload);
  game.state.add("Menu", Menu);
  game.state.add("Game", Game);
  game.state.start("Preload");
};
