var config = {
  type: Phaser.AUTO,
  width:1400,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity:{y : 200}
      }

  },
  scene: [Main] // Exemple2, Exemple3]
}

var game = new Phaser.Game(config);
