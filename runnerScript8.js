let interDuration = .15;

function modInterDuration(){
    const possibleDeviations=[.13, .17, .19, .23, .29];
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

const songPath = 'songs/themid.mp3';


const volArr=[3, 5, 7, 7, 5, 3];
const speedArr=[3, 5, 7, 7, 5, 3];

const multVolArr = [.445, .46, .465, .475, .5, .525, .535, .54, .555];
const multSpeedArr = [.89, .92 ,.93, .95, 1, 1.05, 1.07, 1.08, 1.11];

const randomsForVol=[];
const randomsForSpeed=[];

let randomsForVolIter = 0;
let randomsForSpeedIter = 0;

for (let i=0; i<600; i++){
    randomsForVol.push(pickAmongNine());
    randomsForSpeed.push(pickAmongNine());
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

function pickAmongNine(){
    return Math.floor(Math.random() * 9);
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
