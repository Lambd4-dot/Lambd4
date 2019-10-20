var config = {
  type: Phaser.AUTO,
  width:1600,
  height: 900,
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

var group;
var player;
var player1;
var player2;
var player3;
var Genesis;

var infoTitle;
var infoData;
var infoTrivia;

var moreInfo;

var game = new Phaser.Game(config);
