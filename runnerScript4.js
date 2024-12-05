let interDuration = .15;

function modInterDuration(){
    const possibleDeviations=[.17, .18, .25, .32, .33];
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

const songPath = 'songs/lato.mp3';


const volArr=[2.5, 3.5, 5, 2.5, 5, 3.5];
const speedArr=[2.5, 3.5, 5, 2.5, 5, 3.5];

const multVolArr = [.45, .4575, .4625, .475, .4825, .4875, .5, .5125, .5175, .525, .5375, .5425, .55];
const multSpeedArr = [.9, .915, .925, .95, .965, .975, 1, 1.025, 1.035, 1.05, 1.075, 1.085, 1.1]; // 5,7,1,11 off of +-.13

const randomsForVol=[];
const randomsForSpeed=[];

let randomsForVolIter = 0;
let randomsForSpeedIter = 0;

for (let i=0; i<600; i++){
    randomsForVol.push(pickAmong13());
    randomsForSpeed.push(pickAmong13());
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

function pickAmong13(){
    return Math.floor(Math.random() * 13);
}

function pickAmong19(){
    return Math.floor(Math.random() * 19);
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
          if (rngBin()===0){
            if (rngQuat()===0){
                modInterDuration();
            }
          }
          else{
            if (rngTrio()===0){
                modInterDuration();
            }
          }
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
          if (rngBin()===0){
            if (rngQuat()===0){
                modInterDuration();
            }
          }
          else{
            if (rngTrio()===0){
                modInterDuration();
            }
          }
    }
}
