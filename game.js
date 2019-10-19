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
  scene: [Exemple1] // Exemple2, Exemple3]
}

var rocketFollower;
var rocketPath;
var rocketGraphics;
var rocketOrbitRadius;

var cursors;

var game = new Phaser.Game(config);
