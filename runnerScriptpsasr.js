const songPath = 'songs/psasr.mp3';

let interDuration = .15;

function modInterDuration(){
    const possibleDeviations1=[.5, 0.4225, .447, .46, .467, .473, .357];
    const possibleDeviations2=[.714, .510, .364, .260, .186, .133, .095];
    const possibleDeviations3=[0.17, .18, .25, .33, .34, .37];
    const possibleDeviations4 = [.13, .17, .19, .23, .29, .31];
    const possibleDeviations5 = [.15, .2, .3, .4, .9];

    const randomInt3=rngPent();

    if (randomInt3===0){
        interDuration = possibleDeviations1[Math.floor(Math.random()*7)];
    }
    else if (randomInt3===1){
        interDuration = possibleDeviations2[Math.floor(Math.random()*7)];
    }
    else if (randomInt3===2){
        interDuration = possibleDeviations3[Math.floor(Math.random()*6)];
    }
    else if (randomInt3===3){
        interDuration = possibleDeviations5[Math.floor(Math.random()*5)];
    }
    else{
        interDuration = possibleDeviations4[Math.floor(Math.random()*6)];
    }

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
function rngPent(){
    return Math.floor(Math.random()*5);
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

function rng5(){
    if (Math.floor(Math.random()*12)<5){
        return 1;
    }
    else{
        return 0;
    }
}





const volArr=[2, 3, 3, 4, 4, 3, 3, 2];
const speedArr=[2, 3, 3, 4, 4, 3, 3, 2];

const primeRaw = [13, 11, 7, 5, 3, 1, 0, 1, 3, 5, 7, 11, 13];

const multVolArr1 = [.435 ,.445, .465, .475, .485, .495, .5, .505, .515, .525, .535, .555, .565];
const multSpeedArr1 = [.87 , .89, .93, .95, .97, .99, 1, 1.01, 1.03, 1.05, 1.07, 1.11, 1.13]; // 5,7,1,11 off of +-.13

const multVolArr2 = [.4, .4075, .4125, .425, .4325, .4375, .45, .4575, .4625, .475, .4825, .4875, .5, .5125, .5175, .525, .5375, .5425, .55, .5625, .5675, .575, .5875, .5925, .6];
const multSpeedArr2 = [.8, .815, .825, .85, .865, .875, .9, .915, .925, .95, .965, .975, 1, 1.025, 1.035, 1.05, 1.075, 1.085, 1.1, 1.125, 1.135, 1.15, 1.75, 1.85, 1.2];

const randomsForVol1=[];
const randomsForSpeed1=[];

const randomsForVol2=[];
const randomsForSpeed2=[];


let randomsForVolIter = 0;
let randomsForSpeedIter = 0;

for (let i=0; i<900; i++){
    randomsForVol1.push(pickAmong13());
    randomsForSpeed1.push(pickAmong13());
    randomsForVol2.push(pickAmong25());
    randomsForSpeed2.push(pickAmong25());
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

function pickAmong25(){
    return Math.floor(Math.random() * 25);
}

function nextVolIntervalIter(){
    if (presVolIntervalIter < 7){
        presVolIntervalIter++;
    }
    else{
        presVolIntervalIter=0;
    }
}

function nextSpeedIntervalIter(){
    if (presSpeedIntervalIter < 7){
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

    if (primeRaw[randomsForVol1[randomsForVolIter]]+primeRaw[randomsForSpeed1[randomsForSpeedIter]]>11){
        if (!rng5()){
        interDuration=interDuration*(5/7);
        }
    }
    else if (primeRaw[randomsForVol1[randomsForVolIter]]+primeRaw[randomsForSpeed1[randomsForSpeedIter]]<11){
        if (rng5()){
        interDuration=interDuration*(7/5);
        }
    }
}


function eitherSpeed(){
    if (rngBin()===0){
        decide23();
    }
    else {
        decide13();
    }

    if (primeRaw[randomsForSpeed1[randomsForSpeedIter]]+primeRaw[randomsForSpeed1[randomsForSpeedIter]]>11){
        if (!rng5()){
        interDuration=interDuration*(5/7);
        }
    }
    else if (primeRaw[randomsForSpeed1[randomsForSpeedIter]]+primeRaw[randomsForSpeed1[randomsForSpeedIter]]<11){
        if (rng5()){
        interDuration=interDuration*(7/5);
        }
    }
}

function eitherVolPlain(){
    if (rngBin()===0){
        decide23();
    }
    else {
        decide13();
    }
}

function eitherSpeedPlain(){
    if (rngBin()===0){
        decide23();
    }
    else {
        decide13();
    }
}

function runner(){
    const songAudio = new Audio(songPath);
    
    let randomForVolVal = multVolArr1[randomsForVol1[randomsForVolIter]];
    let randomForSpeedVal = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]];



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
        let randomToDecide=Math.random();

        setTimeout(function(){
            songAudio.volume = randomForVolVal;
            volIntervalIter += volArr[presVolIntervalIter];
            advanceVolume();
        }, interDuration * volInterval * 1000);
        nextVolIntervalIter();
        redefineVolInterval();
        volInterval = presVolInterval;


          if (randomToDecide<(29/100)){
            

          let dp1=0, dp2=0, dp3=0, dp4=0, rngVS1=0;

          
          
              // vector is same size grouping
              dp1 = multVolArr1[randomsForVol1[randomsForVolIter]] * multVolArr2[randomsForVol2[randomsForVolIter]];
              dp2 = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]] * multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
              dp3 = dp1 + dp2;
              
          
              dp1 = multVolArr1[randomsForVol1[randomsForVolIter]] * multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]];
              dp2 = multVolArr2[randomsForVol2[randomsForVolIter]] * multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
              dp4 = dp1 + dp2;


              const rngQuatOutput = rngQuat();
              if (rngQuatOutput === 0){
                  rngVS1=dp3*(.5825/1.695);
              }
              else if (rngQuatOutput === 1){
                  rngVS1=dp4*(.5825/1.35845);
              }
              else if (rngQuatOutput === 2){
                  rngVS1=Math.sqrt(dp3)*(.5825/1.302);
              }
              else{
                  rngVS1=Math.sqrt(dp4)*(.5825/1.166);
              }


              randomForVolVal = rngVS1;
              eitherVolPlain();
          }

        else if(randomToDecide<((52.667/100))){
            let diff1=0, diff2=0, diff3=0, diff4=0, diffTotal=0;

            diff1 = multVolArr1[randomsForVol1[randomsForVolIter]] - multVolArr2[randomsForVol2[randomsForVolIter]];
            diff2 = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]] - multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];

            diff3 = multVolArr1[randomsForVol1[randomsForVolIter]] - multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]];
            diff4 = multVolArr2[randomsForVol2[randomsForVolIter]] - multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
            
            diffT = ((diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/3))/1.08 * .5825;

            randomForVolVal = diffT;
            eitherVolPlain();

        }
        else if(randomToDecide<(76.33333/100)){
            randomForVolVal = multVolArr1[randomsForVol1[randomsForVolIter]];
            eitherVol();
        }
        else{
            randomForVolVal = multVolArr2[randomsForVol2[randomsForVolIter]];
            eitherVolPlain();
        }

            
        

          
          randomsForVolIter++;

    
          
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

          let randomToDecide=Math.random();

          if (randomToDecide<(29/100)){
            

          let dp1=0, dp2=0, dp3=0, dp4=0, rngVS1=0;

          
          
              // vector is same size grouping
              dp1 = multVolArr1[randomsForVol1[randomsForVolIter]] * multVolArr2[randomsForVol2[randomsForVolIter]];
              dp2 = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]] * multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
              dp3 = dp1 + dp2;
              
          
              dp1 = multVolArr1[randomsForVol1[randomsForVolIter]] * multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]];
              dp2 = multVolArr2[randomsForVol2[randomsForVolIter]] * multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
              dp4 = dp1 + dp2;

              const rngQuatOutput = rngQuat();
              if (rngQuatOutput === 0){
                  rngVS1=dp3*(.5825/1.695);
              }
              else if (rngQuatOutput === 1){
                  rngVS1=dp4*(.5825/1.35845);
              }
              else if (rngQuatOutput === 2){
                  rngVS1=Math.sqrt(dp3)*(.5825/1.302);
              }
              else{
                  rngVS1=Math.sqrt(dp4)*(.5825/1.166);
              }
              
              randomForSpeedVal = rngVS1;
              eitherSpeedPlain();
          }
        else if(randomToDecide<(52.667/100)){
            let diff1=0, diff2=0, diff3=0, diff4=0, diffTotal=0;

            diff1 = multVolArr1[randomsForVol1[randomsForVolIter]] - multVolArr2[randomsForVol2[randomsForVolIter]];
            diff2 = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]] - multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];

            diff3 = multVolArr1[randomsForVol1[randomsForVolIter]] - multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]];
            diff4 = multVolArr2[randomsForVol2[randomsForVolIter]] - multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
            
            diffT = ((diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/3));

            randomForSpeedVal = diffT;
            eitherSpeedPlain();

        }
        else if(randomToDecide<((76.33333/100))){
            randomForSpeedVal = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]];
            eitherSpeed();
        }
        else{
            randomForSpeedVal = multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
            eitherSpeedPlain();
        }

            
        

          
          randomsForSpeedIter++;

          
    
}
}
