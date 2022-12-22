console.log(checkSpeed(72))

function checkSpeed(speed){
    speedLimit = 70;
    kmPerPoint = 5;
    if(speed<= speedLimit)
    return 'Ok'

    else{
        let points = (speed-speedLimit)/kmPerPoint;
        points = Math.floor(points);
        if(points<=0)
        return 'OK';
        if(points>=12)
        return 'Liscence Suspended';
        else 
        return points;
    }
}