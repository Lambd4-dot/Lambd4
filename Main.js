class Exemple1 extends Phaser.Scene {
  constructor() {
    super({key: "Exemple1"});
  }

  preload(){
    //this.load.image('earth1','assets/hearh_1.png')
    this.load.image('space','assets/pixel_space1.png')
    this.load.image('earth','assets/Earth_big_1.png')
    this.load.image('satellite1','assets/SatelliteLandObs.png')
    this.load.image('satellite2','assets/Tess_nasa.png')
    this.load.image('BallDeb','assets/BallDeb_resize.png')
    this.load.image('MetalScrap','assets/MetalScrap_res.png')
    this.load.image('AlScrap','assets/Alum_Deb.png')
    this.load.image('Genesis','assets/Genesis2.png')
    this.load.image('rocket','assets/Rocket1_1.png')
    this.load.spritesheet('explosion', 'assets/GrayEx3.png', { frameWidth: 40, frameHeight: 40, endFrame: 11 });
    this.load.image('astronaut','assets/astronout_2--pixilart.png')
    this.load.image('mars','assets/mars.png')
    this.load.image('logo1','assets/logo1.png')
    this.load.image('NASA','Logos/Square White.png')
  }
//commment

  create(){

    //load of design images


    //this.image = this.add.image(400,300,'earth1');
    this.image = this.add.image(650,300,'space');
    //this.image = this.add.image(650, 300, 'earth');
    var myEarth = this.add.sprite(650,300,'earth');
    myEarth.setScale(0.55);

    var mars = this.add.sprite(1100,500,'mars');
    mars.setScale(0.35)

    var NASA = this.add.sprite(1440,100,'NASA');
    NASA.setScale(0.2);

    var teamLogo = this.add.sprite(1440,700,'logo1');
    teamLogo.setScale(2);
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

    var sat1 = this.add.image(500,44, 'satellite1')
    sat1.setScale(0.165);

    var sat2 = this.add.image(580,44, 'satellite2')
    sat2.setScale(0.165);

    var ball = this.add.image(567,44, 'BallDeb')
    ball.setScale(0.165);

    var metalP = this.add.image(555,63, 'MetalScrap')
    metalP.setScale(0.165);

    var AlP = this.add.image(555,63, 'AlScrap')
    metalP.setScale(0.065);


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
  
  infoTitle = this.add.text(10, 10, '', { font: '30px Courier', fill: '#00FF00' });
  infoData = this.add.text(10, 45, '', { font: '16px Courier', fill: '#00FF00' });
  infoTrivia = this.add.text(40, 725, ['Click on a debris to get information on it.','If you want to know more about space debris, click on me!'], { font: '16px Courier', fill: '#00FF00' });
  var miniAstronaut = this.add.image(15, 740, 'astronaut').setInteractive();
  miniAstronaut.setScale(2);
  miniAstronaut.on('pointerup', openExternalLink, this);

  rocket = this.add.group();
  rocket.create(750,290,'rocket',0);
  Phaser.Actions.Rotate(rocket.getChildren(), 3.1415);

  cursors = this.input.keyboard.createCursorKeys();

  group = this.add.group();
  player = this.add.group();
  player1 = this.add.group();
  player2 = this.add.group();
  player3 = this.add.group();
  Genesis = this.add.group();

  Genesis.create(Phaser.Math.Between(150,750), Phaser.Math.Between(70,220), 'Genesis', Phaser.Math.Between(0,4)).setInteractive();

  for (var i = 0; i <10 ; i++)
  {
      group.create(Phaser.Math.Between(150,650), Phaser.Math.Between(70,220), 'satellite1', Phaser.Math.Between(0,4)).setInteractive();
      player.create(Phaser.Math.Between(150,650), Phaser.Math.Between(520,700), 'satellite2', Phaser.Math.Between(0,4)).setInteractive();
      player1.create(Phaser.Math.Between(100,300), Phaser.Math.Between(400,600), 'MetalScrap', Phaser.Math.Between(0,4)).setInteractive();
      Phaser.Actions.RotateAround(group.getChildren(), { x: 645, y: 290 }, Phaser.Math.Between(0.001,3.14));
      Phaser.Actions.RotateAround(player.getChildren(), { x: 645, y: 290 }, Phaser.Math.Between(0.001,3.14));
      Phaser.Actions.RotateAround(player1.getChildren(), { x: 645, y: 290 }, Phaser.Math.Between(0.001,3.14));
  }
  for (var i = 0; i <100 ; i++)
  {
      Phaser.Actions.RotateAround(player2.getChildren(), { x: 645, y: 290 }, Phaser.Math.Between(0.001,3.14));
      Phaser.Actions.RotateAround(player3.getChildren(), { x: 645, y: 290 }, Phaser.Math.Between(0.001,3.14));
      player2.create(Phaser.Math.Between(670,800), Phaser.Math.Between(100,200), 'BallDeb', Phaser.Math.Between(0,4)).setInteractive();
      player3.create(Phaser.Math.Between(660,800), Phaser.Math.Between(400,600), 'AlScrap', Phaser.Math.Between(0,4)).setInteractive();
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


/*
  //Game Over message
  
  var ui_camera;
  var center = this.add.image(400, 300);
  var govertext = this.add.text(400,300,'Game Over!').setOrigin(0.5);
  var ui_camera = this.cameras.add().setScroll(0,1000);

  this.cameras.main.ignore(govertext);
  ui_camera.ignore(center);

    var timeline = this.tweens.timeline({

      tweens: [{
          targets: ui_camera,
          zoom :2,
          scrollY: 0,
          duration: 2000,
          ease: 'Sine.easeInOut'
      },
      {
          targets: ui_camera,
          zoom :1,
          scrollY: 1000,
          duration: 1000,
          delay: 1000
      }]
  });
*/  

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
    Phaser.Actions.RotateAround(player3.getChildren(), { x: 645, y: 290 }, 0.002);
    Phaser.Actions.RotateAround(Genesis.getChildren(), { x: 645, y: 290 }, 0.002);

    var selectedSatellites1 = group.getChildren();
    for (var i = selectedSatellites1.length - 1; i >= 0; i--) {
      selectedSatellites1[i].on('pointerdown', function (pointer) {
        infoTitle.setText('Data')
        infoData.setText([
          'Debris type: ' + 'Retired satellite',
          'Dimensions: ' + '36cm x 56cm',
          'Mass: ' + '56kg',
          'Average speed: ' + '7600m/s',
          'Materials: ' + 'aluminum, nickel',
          'Orbit: ' + 'Low Earth Orbit (LEO)',
          'Estimated profit: ' + '$ or 0*',
          '*not profitable if it re-entries' 
        ]);
        infoTrivia.setPosition(40, 630, 0);
        infoTrivia.setText([
          '- A retired satellite is a satellite',
          'whose mission is over. Since a few years',
          'ago, satellite operators have to prepare',
          'a retirement strategy (graveyard orbit or re-entry).',
          '- The Low Earth Orbit ranges from 300',
          "to 2000km above the Earth's surface. ",
          "It is where we find most of spatial debris.",
          'If you want to know more about space debris, click on me!'
        ]);
      });
    }

    var selectedSatellites1 = player.getChildren()
    for (var i = selectedSatellites1.length - 1; i >= 0; i--) {
      selectedSatellites1[i].on('pointerdown', function (pointer) {
        infoTitle.setText('Data')
        infoData.setText([
          'Debris type: ' + 'Broken satellite',
          'Dimensions: ' + '36cm x 56cm',
          'Mass: ' + '56kg',
          'Average speed: ' + '7600m/s',
          'Materials: ' + 'aluminum, nickel',
          'Orbit: ' + 'Low Earth Orbit (LEO)',
          'Estimated value: depends of the materials'
        ]);
        infoTrivia.setPosition(40, 630, 0);
        infoTrivia.setText([
          '- A broken satellite is damaged and not',
          "usable anymore. It's pure rubbish",
          '- ESA estimates at 20,000 the number',
          'of broken satellites (size > 10 cm).',
          '- The Low Earth Orbit ranges from 300',
          "to 2000km above the Earth's surface. ",
          "It is where we find most of spatial debris.",
          'If you want to know more about space debris, click on me!'
        ]);
      });
    }

    var selectedSatellites1 = player1.getChildren()
    for (var i = selectedSatellites1.length - 1; i >= 0; i--) {
      selectedSatellites1[i].on('pointerdown', function (pointer) {
        infoTitle.setText('Data')
        infoData.setText([
          'Debris type: ' + 'Other metal scrap',
          'Dimensions: ' + '1cm',
          'Mass: ' + '10g',
          'Average speed: ' + '7600m/s',
          'Materials: ' + 'titanium, nickel',
          'Orbit: ' + 'Low Earth Orbit (LEO)',
          'Estimated value: depends of the metal'
        ]);
        infoTrivia.setPosition(40, 630, 0);
        infoTrivia.setText([
          '- The debris dimensions range from',
          'a few millimeters up to a meter.',
          '- ESA estimates at 166,000,000 the number',
          'of debris measuring less than. 1 cm.',
          '- The Low Earth Orbit ranges from 300',
          "to 2000km above the Earth's surface. ",
          "It is where we find most of spatial debris.",
          'If you want to know more about space debris, click on me!'
        ]);
      });
    }

    var selectedSatellites1 = player2.getChildren()
    for (var i = selectedSatellites1.length - 1; i >= 0; i--) {
      selectedSatellites1[i].on('pointerdown', function (pointer) {
        infoTitle.setText('Data')
        infoData.setText([
          'Debris type: ' + 'Circuits, Solar panels...',
          'Dimensions: ' + '1-10cm',
          'Mass: ' + '<1kg',
          'Average speed: ' + '7600m/s',
          'Material: ' + 'various',
          'Orbit: ' + 'Low Earth Orbit (LEO)',
          'Estimated value: not much'
        ]);
        infoTrivia.setPosition(40, 630, 0);
        infoTrivia.setText([
          '- The debris dimensions range from',
          'a few millimeters up to 10 cm.',
          '- ESA estimates at 750,000 the number',
          'of debris measuring from 1 to 10 cm.',
          '- The Low Earth Orbit ranges from 300',
          "to 2000km above the Earth's surface. ",
          "It is where we find most of spatial debris.",
          'If you want to know more about space debris, click on me!'
        ]);
      });
    }

    var selectedSatellites1 = player3.getChildren()
    for (var i = selectedSatellites1.length - 1; i >= 0; i--) {
      selectedSatellites1[i].on('pointerdown', function (pointer) {
        infoTitle.setText('Data')
        infoData.setText([
          'Debris type: ' + 'Aluminum scrap',
          'Dimensions: ' + '1cm',
          'Mass: ' + '10g',
          'Average speed: ' + '7600m/s',
          'Material: ' + 'aluminum',
          'Orbit: ' + 'Low Earth Orbit (LEO)',
          'Estimated value: $1.74/kg'
        ]);
        infoTrivia.setPosition(40, 630, 0);
        infoTrivia.setText([
          '- The debris dimensions range from',
          'a few millimeters up to 10 cm.',
          '- ESA estimates at 166,000,000 the number',
          'of debris measuring less than 1 cm.',
          '- The Low Earth Orbit ranges from 300',
          "to 2000km above the Earth's surface. ",
          "It is where we find most of spatial debris.",
          'If you want to know more about space debris, click on me!'
        ]);
      });
    }

  }



}
