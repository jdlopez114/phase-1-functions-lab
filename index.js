// Code your solution in this file!

const hQ = 42;
const feet = 264;
const firstRate = .02;
const secondRate = .25;


function distanceFromHqInBlocks(pickUp){
    if(pickUp > hQ){
        return pickUp - hQ;
    } else if (pickUp < hQ){
        return hQ - pickUp;
    }
}

function distanceFromHqInFeet(pickUp){
    return distanceFromHqInBlocks(pickUp) * feet;
}

function distanceTravelledInFeet(start, destination){
    if(start > destination){
        return (start - destination) * feet;
    } else if (start < destination){
        return (destination - start) * feet;
    }
}

function calculatesFarePrice(start, destination){

    let totalFeetTravelled = distanceTravelledInFeet(start, destination);

    if (totalFeetTravelled > 0 && totalFeetTravelled <= 400){
        return 0;
    } else if (totalFeetTravelled > 400 && totalFeetTravelled <= 2000){
        return (totalFeetTravelled - 400) * firstRate;
    } else if (totalFeetTravelled > 2000 && totalFeetTravelled <= 2500){
        return 25;
    } else if (totalFeetTravelled > 2500){
        return 'cannot travel that far';
    }
}

