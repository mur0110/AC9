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

const songPath = 'songs/lato.mp3';


const volArr=[2, 4, 7, 7, 4, 2];
const speedArr=[2, 4, 7, 7, 4, 2];

const multVolArr = [.435, .445, .46, .465, .475, .5, .525, .535, .54, .555, .565];
const multSpeedArr = [.76, .80 ,.82 ,.86, .87, .88, .92 ,.94, .98, 1, 1.02, 1.06, 1.08, 1.12, 1.13, 1.14, 1.18, 1.20, 1.24]; // 5,7,1 off of +-.13

const randomsForVol=[];
const randomsForSpeed=[];

let randomsForVolIter = 0;
let randomsForSpeedIter = 0;

for (let i=0; i<600; i++){
    randomsForVol.push(pickAmongEleven());
    randomsForSpeed.push(pickAmong16());
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

function pickAmongEleven(){
    return Math.floor(Math.random() * 11);
}

function pickAmong16(){
    return Math.floor(Math.random() * 15);
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
