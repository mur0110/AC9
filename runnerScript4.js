let interDuration = .15;

function modInterDuration(){
    const possibleDeviations=[.17, .18, .25, .34, .37];
    interDuration = possibleDeviations[Math.floor(Math.random()*5)];
}
function rngBin(){
    return Math.floor(Math.random()*2);
}
function rngTrio(){
    return Math.floor(Math.random()*3);
}
function rngQuat(){
    return Math.floor(Math.random()*4);
}

function decide13(){
    if (rngBin()===0){
        if (rngQuat()==0){
            modInterDuration();
        }
      }
      else{
        if (rngTrio()==0){
            modInterDuration();
        }
      }
}

function decide23(){
    if (rngBin()===0){
        if (rngQuat()!==0){
            modInterDuration();
        }
      }
      else{
        if (rngTrio()!==0){
            modInterDuration();
        }
      }
}


const songPath = 'songs/lato.mp3';


const volArr=[2.5, 3.5, 5, 2.5, 5, 3.5];
const speedArr=[2.5, 3.5, 5, 2.5, 5, 3.5];

const multVolArr = [.4, .4075, .4125, .425, .4325, .4375, .45, .4575, .4625, .475, .4825, .4875, .5, .5125, .5175, .525, .5375, .5425, .55, .5625, .5675, .575, .5875, .5925, .6];
const multSpeedArr = [.8, .815, .825, .85, .865, .875, .9, .915, .925, .95, .965, .975, 1, 1.025, 1.035, 1.05, 1.075, 1.085, 1.1, 1.125, 1.135, 1.15, 1.75, 1.85, 1.2]; // 5,7,1,11 off of +-.13

const randomsForVol=[];
const randomsForSpeed=[];

let randomsForVolIter = 0;
let randomsForSpeedIter = 0;

for (let i=0; i<900; i++){
    randomsForVol.push(pickAmong25());
    randomsForSpeed.push(pickAmong25());
}

let presVolIntervalIter = 0;
let presSpeedIntervalIter = 0;

let presVolInterval = 0;
let presSpeedInterval = 0;

function redefineVolInterval(){
    presVolInterval = volArr[presVolIntervalIter];
}

function redefineSpeedInterval(){
    presSpeedInterval = speedArr[presSpeedIntervalIter];
}


function pickAmong25(){
    return Math.floor(Math.random() * 25);
}

function nextVolIntervalIter(){
    if (presVolIntervalIter < 5){
        presVolIntervalIter++;
    }
    else{
        presVolIntervalIter=0;
    }
}

function nextSpeedIntervalIter(){
    if (presSpeedIntervalIter < 5){
        presSpeedIntervalIter++;
    }
    else{
        presSpeedIntervalIter=0;
    }
}

let ab1=1;
let nextValV = 4;
function eitherVol(){
    if (presVolInterval === nextVal && ab1===1){
        decide23();
        nextValV = nextValV+7;
        ab1=2;
    }
    else if (presVolInterval === nextVal && ab1===2){
        decide13();
        nextValV = nextValV + 5;
        ab1 = 1; 
    }

}

let ab2=1;
let nextValS = 4;
function eitherSpeed(){
    if (presSpeedInterval === nextVal && ab1===1){
        decide23();
        nextValS = nextValS+7;
        ab2=2;
    }
    else if (presSpeedInterval === nextVal && ab1===2){
        decide13();
        nextValS = nextValS + 5;
        ab2 = 1; 
    }
}


function runner(){
    const songAudio = new Audio(songPath);
    
    let randomForVolVal = multVolArr[randomsForVol[randomsForVolIter]];
    let randomForSpeedVal = multSpeedArr[randomsForSpeed[randomsForSpeedIter]];



    let volIntervalIter = 0;
    let speedIntervalIter = 0;
    redefineVolInterval();
    redefineSpeedInterval();


    let volInterval = presVolInterval;
    let speedInterval = presSpeedInterval;


    songAudio.play();
    advanceVolume();
    advanceSpeed();

    function advanceVolume(){
          setTimeout(function(){
              songAudio.volume = randomForVolVal;
              volIntervalIter += volArr[presVolIntervalIter];
              advanceVolume();
          }, interDuration * volInterval * 1000);
          nextVolIntervalIter();
          redefineVolInterval();
          volInterval = presVolInterval;
          randomForVolVal = multVolArr[randomsForVol[randomsForVolIter]];
          randomsForVolIter++;
          
          eitherVol();
    }

    function advanceSpeed(){
          setTimeout(function(){
              songAudio.playbackRate = randomForSpeedVal;
              speedIntervalIter += speedArr[presSpeedIntervalIter];
              advanceSpeed();
          }, interDuration * speedInterval * 1000);
          nextSpeedIntervalIter();
          redefineSpeedInterval();
          speedInterval = presSpeedInterval;
          randomForSpeedVal = multSpeedArr[randomsForSpeed[randomsForSpeedIter]];
          randomsForSpeedIter++;
          
          eitherSpeed();
    }
}
