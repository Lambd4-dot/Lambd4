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

  }


  create(){

    //load of design images


    //this.image = this.add.image(400,300,'earth1');
    this.image = this.add.image(650,300,'space');
    //this.image = this.add.image(650, 300, 'earth');
    var myEarth = this.add.sprite(650,300,'earth');
    myEarth.setScale(0.55);

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
    metalP.setScale(0.25);


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

       }


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

var rocket = this.add.sprite(700,300,'')



  }

  update(){
    updateRocketOrbit();
  }



}
