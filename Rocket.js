
/*Function to update the orbit radius of the rocket*/
function updateRocketOrbit(rocketPath,radius,rocketOrbitPeriod){
    //if left key, decrease radius
    if (cursors.left.isDown)
    {
        radius+=1;
        rocketOrbitPeriod+=100;
        rocketPath.destroy();
        rocketPath.add(new Phaser.Curves.Ellipse(645, 290, radius));
    }
    //if right key, increase radius
    if (cursors.right.isDown)
    {
        radius-=1;
        rocketOrbitPeriod-=100;
        rocketPath.destroy();
        rocketPath.add(new Phaser.Curves.Ellipse(645, 290, radius));
    }

    return [radius, rocketOrbitPeriod]
}