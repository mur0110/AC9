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


const songPath = 'songs/children.mp3';


const volArr=[2.5, 3.5, 5, 2.5, 5, 3.5];
const speedArr=[2.5, 3.5, 5, 2.5, 5, 3.5];

const primeRaw = [13, 11, 7, 5, 3, 1, 0, 1, 3, 5, 7, 11, 13];

const multVolArr = [.435 ,.445, .465, .475, .485, .495, .5, .505, .515, .525, .535, .555, .565];
const multSpeedArr = [.87 , .89, .93, .95, .97, .99, 1, 1.01, 1.03, 1.05, 1.07, 1.11, 1.13]; // 5,7,1,11 off of +-.13

const randomsForVol=[];
const randomsForSpeed=[];

let randomsForVolIter = 0;
let randomsForSpeedIter = 0;

for (let i=0; i<900; i++){
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


function eitherVol(){
    if (rngBin()===0){
        decide23();
    }
    else {
        decide13();
    }

    if (primeRaw[randomsForVol[randomsForVolIter]]+primeRaw[randomsForSpeed[randomsForSpeedIter]]>11){
        interDuration=interDuration*(7/5);
    }
    else if (primeRaw[randomsForVol[randomsForVolIter]]+primeRaw[randomsForSpeed[randomsForSpeedIter]]<11){
        interDuration=interDuration*(5/7);
    }
}


function eitherSpeed(){
    if (rngBin()===0){
        decide23();
    }
    else {
        decide13();
    }

    if (primeRaw[randomsForSpeed[randomsForSpeedIter]]+primeRaw[randomsForSpeed[randomsForSpeedIter]]>11){
        interDuration=interDuration*(7/5);
    }
    else if (primeRaw[randomsForSpeed[randomsForSpeedIter]]+primeRaw[randomsForSpeed[randomsForSpeedIter]]<11){
        interDuration=interDuration*(5/7);
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
