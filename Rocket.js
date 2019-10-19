
/*Function to update the orbit radius of the rocket*/
function updateRocketOrbit(){
    //if left key, decrease radius
    if (cursors.left.isDown)
    {
        radius-=1;
        path.destroy();
        path.add(new Phaser.Curves.Ellipse(400, 300, radius));
    }
    //if right key, increase radius
    if (cursors.right.isDown)
    {
        radius-=1;
        path.destroy();
        path.add(new Phaser.Curves.Ellipse(400, 300, radius));
    }
}