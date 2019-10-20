class Exemple1 extends Phaser.Scene {
  constructor() {
    super({key: "Exemple1"});
  }

  preload(){
    //this.load.image('earth1','assets/hearh_1.png')
    this.load.image('space','assets/pixel_space1.png')
    this.load.image('earth','assets/Earth_big_1.png')
    this.load.image('gridup','assets/darkGridnotModified_1.png')
    this.load.image('gridleft','assets/darkGridnotModified_2.png')
    this.load.image('triangolo','assets/triangolo.png')
    this.load.image('triangolo2','assets/triangolo_2.png')
    this.load.image('square1','assets/QuadratinoBello.png')
    this.load.image('satellite1','assets/SatelliteLandObs.png')
    this.load.image('satellite2','assets/Tess_nasa.png')
    this.load.image('BallDeb','assets/BallDebris.png')
    this.load.image('MetalScrap','assets/MetalPaint.png')
    this.load.image('rocket','assets/Rocket1_1.png')
    this.load.spritesheet('explosion', 'assets/GrayEx3.png', { frameWidth: 40, frameHeight: 40, endFrame: 11 });

  }
//commment

  create(){

    //load of design images


    //this.image = this.add.image(400,300,'earth1');
    this.image = this.add.image(650,300,'space');
    //this.image = this.add.image(650, 300, 'earth');
    var myEarth = this.add.sprite(650,300,'earth');
    myEarth.setScale(0.55);
/*
    var backGrid1 = this.add.image(650,100,'gridup');
    backGrid1.setScale(0.19);

    var backGrid1_2 = this.add.image(650,500,'gridup');
    backGrid1_2.setScale(0.19);

    var backGrid2 = this.add.image(450,300,'gridleft');
    backGrid2.setScale(0.19);

    var backGrid2_2 = this.add.image(850,300,'gridleft');
    backGrid2_2.setScale(0.19);

    var triangolo1 = this.add.image(480,150,'triangolo');
    triangolo1.setScale(1.5);

    var triangolo1_2 = this.add.image(820,450,'triangolo2')
    triangolo1_2.setScale(1.5);


    //var square1 = this.add.image(555,63, 'square1')
    //square1.setScale(0.165);
*/
    var sat1 = this.add.image(500,44, 'satellite1')
    sat1.setScale(0.165);

    var sat2 = this.add.image(580,44, 'satellite2')
    sat2.setScale(0.165);

    var ball = this.add.image(567,44, 'BallDeb')
    ball.setScale(0.165);

    var metalP = this.add.image(555,63, 'MetalScrap')
    metalP.setScale(0.165);

/*
    //funzione per coprire la grigliaNord

    var square = this.add.image(510,412, 'square1')
    square.setScale(0.165);



    var x = 537 ;
    var y = 44 ;

    for( var i = 0; i < 12 ; i++)
    {
      for ( var j = 0 ;j < 7 ; j++) {

      var z = y + 20.5*j ;

      var square = this.add.image(x, z, 'square1');
      square.setScale(0.5);
      square.setInteractive();
      square.on('clicked', clickHandler, this);

    }
      x = x + 20.5

    }

    //funzinoe per coprire laGrigliaEst


    var xE = 790;
    var yE = 187;

    for( var i = 0; i < 7 ; i++)
    {
      for ( var j = 0 ;j < 12 ; j++) {

        var zE = yE + 20.5*j ;

        var square = this.add.image(xE, zE, 'square1');
        square.setScale(0.5);
        square.setInteractive();
        square.on('clicked', clickHandler, this);

      }
      xE = xE + 20.5

    }

    //funzione coprire glrigliaSUd
       var xS=537;
       var yS=440;

       for( var i = 0; i < 12 ; i++)
       {
         for ( var j = 0 ;j < 7 ; j++) {

           var zS = yS + 20.5*j ;

           var square = this.add.image(xS, zS, 'square1');
           square.setScale(0.5);
           square.setInteractive();
           square.on('clicked', clickHandler, this);

         }
         xS = xS + 20.5

       }
    //funzione coprire grigliaWest
      var xW= 510;
      var yW= 412;

       for( var i = 0; i < 7 ; i++){

         for ( var j = 0 ;j < 12 ; j++) {

           var zW = yW - 20.5*j ;

           var square = this.add.image(xW, zW, 'square1');
           square.setScale(0.5);
           square.setInteractive();
           square.on('clicked', clickHandler, this);

         }
         xW = xW - 20.5

       }*/


/*
//random spawn for Metaldebris num 20
  for (var k = 0; k < 8 ; k++){

    var x1 = Phaser.Math.Between(537, 537+20.5*12-20);
    var y1 = Phaser.Math.Between(44, 44+20.5*6);

    var deb1 = this.add.image(x1, y1 , 'MetalScrap');
    deb1.setScale(0.25)
  }

  for(var k1= 0 ; k1<3 ; k1++){

    var x2 = Phaser.Math.Between(537, 537+20.5*12-20);
    var y2 = Phaser.Math.Between(44, 44+20.5*6);

    var deb2 = this.add.image(x2, y2, 'BallDeb');
    deb2.setScale(0.45)

  }

  for(var k2=0 ; k2<2 ; k2++){

    var x3 = Phaser.Math.Between(537, 537+20.5*12-20);
    var y3 = Phaser.Math.Between(44, 44+20.5*6);

    var sat1 = this.add.image(x3, y3, 'satellite1')
    sat1.setScale(0.7);

  }

*/
    this.input.on('gameobjectup', function (pointer, gameObject)
   {
       gameObject.emit('clicked', gameObject);
   }, this);

   function clickHandler (square)
   {

       square.off('clicked', clickHandler);
       square.input.enabled = false;
       square.setVisible(false);
   }


  rocketOrbitRadius = 100;
  rocketOrbitPeriod = 1000;
  /*rocketPath = new Phaser.Curves.Path();
  rocketPath.add(new Phaser.Curves.Ellipse(645, 290, rocketOrbitRadius));

  rocket = this.add.follower(rocketPath, 0, 0, 'rocket');

  rocket.startFollow({
    duration: rocketOrbitPeriod,
    repeat: -1,
    rotateToPath: false,
    verticalAdjust: true
  });

  rocket.setRotateToPath(true, 90);
*/

  info = this.add.text(10, 10, 'toto', { font: '100px 8bit-wonder', fill: '#00FF00' });

  rocket = this.add.group();
  rocket.create(750,290,'rocket',0);
  Phaser.Actions.Rotate(rocket.getChildren(), 3.1415);


  cursors = this.input.keyboard.createCursorKeys();

  group = this.add.group();
  player = this.add.group();
  player1 = this.add.group();
  player2 = this.add.group();

  for (var i = 0; i <10 ; i++)
  {
      group.create(Phaser.Math.Between(150,750), Phaser.Math.Between(70,220), 'satellite1', Phaser.Math.Between(0,4)).setInteractive();
      player.create(Phaser.Math.Between(150,750), Phaser.Math.Between(520,700), 'satellite2', Phaser.Math.Between(0,4)).setInteractive();
      player1.create(Phaser.Math.Between(100,300), Phaser.Math.Between(100,600), 'MetalScrap', Phaser.Math.Between(0,4)).setInteractive();
      player2.create(Phaser.Math.Between(600,800), Phaser.Math.Between(100,600), 'BallDeb', Phaser.Math.Between(0,4)).setInteractive();
      Phaser.Actions.RotateAround(group.getChildren(), { x: 645, y: 290 }, Phaser.Math.Between(0.001,3.14));
      Phaser.Actions.RotateAround(player.getChildren(), { x: 645, y: 290 }, Phaser.Math.Between(0.001,3.14));
      Phaser.Actions.RotateAround(player1.getChildren(), { x: 645, y: 290 }, Phaser.Math.Between(0.001,3.14));
      Phaser.Actions.RotateAround(player2.getChildren(), { x: 645, y: 290 }, Phaser.Math.Between(0.001,3.14));
  }

  //time for animation



  var config = {
      key: 'explodeAnimation',
      frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 11, first: 11 }),
      frameRate: 11,
      repeat: 0
   };

   this.anims.create(config);

   //hitfunction
   var ex1 = this.add.sprite(300,300,'BallDeb');
   ex1.setTint(0xff0000);
   ex1.setInteractive();

   var ex2 = this.add.sprite(Phaser.Math.Between(150,750),Phaser.Math.Between(300,600),'BallDeb');
   ex2.setTint(0xff0000);
   ex2.setInteractive();

   var ex3 = this.add.sprite(Phaser.Math.Between(150,750),Phaser.Math.Between(300,600),'BallDeb');
   ex3.setTint(0xff0000);
   ex3.setInteractive();

   var ex4 = this.add.sprite(900,400,'BallDeb');
   ex4.setTint(0xff0000);
   ex4.setInteractive();

   var ex5 = this.add.sprite(800,100,'BallDeb');
   ex5.setTint(0xff0000);
   ex5.setInteractive();


   this.input.keyboard.on('keydown_SPACE', function (event) {

        ex5.play('explodeAnimation')

    });

    this.input.keyboard.on('keydown_C', function (event) {

         ex4.destroy()

     });

     this.input.keyboard.on('keydown_D', function (event) {

          rocket.getChildren()[0].play('explodeAnimation')
      });



       //this.physics.add.collider(rocket, group);
     //this.physics.add.collider(rocket ,player1);




 /*function hitSat (rocket, ex1){

   rocket.getChildren()[0].play('explodeAnimation');
   rocket.getChildren()[0].disableBody(true,true);
 };*/

}



  update(){
    //[rocketOrbitRadius, rocketOrbitPeriod] = updateRocketOrbit(rocketPath,rocketOrbitRadius,rocketOrbitPeriod)
    [rocketOrbitRadius, rocketOrbitPeriod] = updateRocketOrbit(rocketOrbitRadius,rocketOrbitPeriod);
    //console.log(rocket);
    Phaser.Actions.RotateAroundDistance(rocket.getChildren(), { x: 645, y: 290 }, (2*3.1415)/rocketOrbitPeriod, rocketOrbitRadius);
    Phaser.Actions.Rotate(rocket.getChildren(), (2*3.1415)/rocketOrbitPeriod, (2*3.1415)/rocketOrbitPeriod);
    //Phaser.Actions.Rotate(rocket.getChildren(), -(2*3.1415)/rocketOrbitPeriod, -(2*3.1415)/rocketOrbitPeriod);

    Phaser.Actions.RotateAround(group.getChildren(), { x: 645, y: 290 }, 0.003);
    Phaser.Actions.RotateAround(player.getChildren(), { x: 645, y: 290 }, 0.003);
    Phaser.Actions.RotateAround(player1.getChildren(), { x: 645, y: 290 }, 0.002);
    Phaser.Actions.RotateAround(player2.getChildren(), { x: 645, y: 290 }, 0.002);

    group.getChildren()[0].on('pointerdown', function (pointer) {
      info.setText('This is a debris.');
    });




  }



}
