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

var rocket
var rocketFollower;
var rocketPath;
var rocketGraphics;
var rocketOrbitRadius;
var rocketOrbitPeriod;

var cursors;

var game = new Phaser.Game(config);
