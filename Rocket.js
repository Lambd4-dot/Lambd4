
/*Function to update the orbit radius of the rocket*/
//function updateRocketOrbit(rocketPath,radius,rocketOrbitPeriod){
function updateRocketOrbit(radius,rocketOrbitPeriod){
    //if left key, decrease radius
    if (cursors.left.isDown)
    {
        radius+=1;
        rocketOrbitPeriod=rocketOrbitPeriod*(1+1/radius);
        //rocketPath.destroy();
        //rocketPath.add(new Phaser.Curves.Ellipse(645, 290, radius));
    }
    //if right key, increase radius
    if (cursors.right.isDown)
    {
        radius-=1;
        rocketOrbitPeriod=rocketOrbitPeriod*(1-1/radius);
        //rocketPath.destroy();
        //rocketPath.add(new Phaser.Curves.Ellipse(645, 290, radius));
    }

    return [radius, rocketOrbitPeriod]
}