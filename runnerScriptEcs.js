const songPath = 'songs/ecs.mp3';

let interDuration = .15;
let repeatV=0;
let repeatS=0;

function modInterDuration(){
    let possibleDeviations3=[0.17, .18, .25, .33, .37];
    let pd3m=5;
    let setHex=rng12();

    if (setHex===0){
       possibleDeviations3=[0.17, .18, .25, .33, .37];
    }
    else if (setHex===1){
        possibleDeviations3=[0.17, .18, .25, .33, .34, .37];
    }
    else if (setHex===2){
        possibleDeviations3=[0.17, .25, .33, .37];
    }
    else if (setHex===3){
        possibleDeviations3=[0.18, .25, .33, .37];
    }
    else if (setHex===4){
        possibleDeviations3=[0.17, .175, .25, .33, .37];
    }
    else if (setHex===5){
        possibleDeviations3=[0.18, .175, .25, .33, .37];
    }
    else if (setHex===6){
        possibleDeviations3=[0.17, .175, .18, .25, .33, .37];
    }
    else if (setHex===7){
        possibleDeviations3=[0.17, .25, .33, .34, .37];
    }
    else if (setHex===8){
        possibleDeviations3=[0.18, .25, .33, .34, .37];
    }
    else if (setHex===9){
        possibleDeviations3=[0.17, .175, .25, .33, .34, .37];
    }
    else if (setHex===10){
        possibleDeviations3=[0.18, .175, .25, .33, .34, .37];
    }
    else if (setHex===11){
        possibleDeviations3=[0.17, .175, .18, .25, .33, .37];
    }


    pd3m=possibleDeviations3.length;

    const possibleDeviations1=[.5, 0.4225, .447, .46, .467, .473, .357];
    const possibleDeviations2=[.714, .510, .364, .260, .186, .133, .095];
    const possibleDeviations6=[.7, .592, .56, .544];
    const possibleDeviations4 = [.13, .17, .19, .23, .29, .31];
    const possibleDeviations5 = [.15, .2, .3, .4, .9];
    const possibleDeviations7=[.2,.4,.6,.8,1];
    const possibleDeviations8=[.15,.3,.45,.6,.75,.9];
    const possibleDeviations9=[.25, .33, .5, .66,.75];
    const possibleDeviations10=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1];
    const possibleDeviations11=[.3333, .408, .437];
    const possibleDeviations12=[.6667, .4444, .296, .1975, .1317, .0878];
    const possibleDeviations13=[.375, .433, .4543];
    const possibleDeviations14=[.75, .5625, .422, .3164, .2373, .1778, .1335, .1001];



    const randomInt3=rng14();

    if (randomInt3===0){
        interDuration = possibleDeviations1[Math.floor(Math.random()*7)];
    }
    else if (randomInt3===1){
        interDuration = possibleDeviations2[Math.floor(Math.random()*7)];
    }
    else if (randomInt3===2){
        interDuration = possibleDeviations3[Math.floor(Math.random()*pd3m)];
    }
    else if (randomInt3===3){
        interDuration = possibleDeviations5[Math.floor(Math.random()*5)];
    }
    else if (randomInt3===4){
        interDuration = possibleDeviations6[Math.floor(Math.random()*4)];
    }
    else if (randomInt3===5){
        interDuration = possibleDeviations7[Math.floor(Math.random()*5)];
    }
    else if (randomInt3===6){
        interDuration = possibleDeviations8[Math.floor(Math.random()*6)];
    }
    else if (randomInt3===7){
        interDuration = possibleDeviations9[Math.floor(Math.random()*5)];
    }
    else if (randomInt3===8){
        interDuration = possibleDeviations10[Math.floor(Math.random()*10)];
    }
    else if (randomInt3===9){
        interDuration = possibleDeviations11[Math.floor(Math.random()*3)];
    }
    else if (randomInt3===10){
        interDuration = possibleDeviations12[Math.floor(Math.random()*6)];
    }
    else if (randomInt3===11){
        interDuration = possibleDeviations13[Math.floor(Math.random()*3)];
    }
    else if (randomInt3===12){
        interDuration = possibleDeviations14[Math.floor(Math.random()*8)];
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
function rngSix(){
    return Math.floor(Math.random()*6);
}
function rngSept(){
    return Math.floor(Math.random()*7);
}
function rngNon(){
    return Math.floor(Math.random()*9);
}
function rng12(){
    return Math.floor(Math.random()*12);
}
function rng14(){
    return Math.floor(Math.random()*14);
}

function decide13(){
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






const volArr1=[2,3,3,4,4,3,2];
const speedArr1=[2,3,3,4,4,3,2];


const volArr1A=[2.5,3.5,5,3.5,2.5];
const speedArr1A=[2.5,3.5,5,3.5,2.5];

const volArr1B=[2.5,3.5,5,3.5];
const speedArr1B=[2.5,3.5,5,3.5];

const volArr1C=[3.5,5,3.5,2.5];
const speedArr1C=[3.5,5,3.5,2.5];

let incTypeVol=0;
let incTypeSpeed=0;



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
    let decideArrayInc=rngPent();
    let multiplier=0;
    if (decideArrayInc===0){
        multiplier=1;
    }
    else if (decideArrayInc===1){
        multiplier=2/3;
    }
    else if (decideArrayInc===2){
        multiplier=.5;
    }
    else if (decideArrayInc===3){
        multiplier=1/3;
    }
    else{
        multiplier=1/4;
    }

    if (incTypeVol===0){
        presVolInterval = volArr1[presVolIntervalIter] * multiplier;
    }
    else if (incTypeVol===1){
        presVolInterval = volArr1A[presVolIntervalIter] * multiplier;
    }
    else if (incTypeVol===2){
        presVolInterval = volArr1B[presVolIntervalIter] * multiplier;
    }
    else{
        presVolInterval = volArr1C[presVolIntervalIter] * multiplier;
    }
}

function redefineSpeedInterval(){
    let decideArrayInc=rngPent();
    let multiplier=0;
    if (decideArrayInc===0){
        multiplier=1;
    }
    else if (decideArrayInc===1){
        multiplier=2/3;
    }
    else if (decideArrayInc===2){
        multiplier=.5;
    }
    else if (decideArrayInc===3){
        multiplier=1/3;
    }
    else{
        multiplier=1/4;
    }

    if (incTypeSpeed===0){
        presSpeedInterval = speedArr1[presSpeedIntervalIter] * multiplier;
    }
    else if (incTypeSpeed===1){
        presSpeedInterval = speedArr1A[presSpeedIntervalIter] * multiplier;
    }
    else if (incTypeSpeed===2){
        presSpeedInterval = speedArr1B[presSpeedIntervalIter] * multiplier;
    }
    else{
        presSpeedInterval = speedArr1C[presSpeedIntervalIter] * multiplier;
    }
}


function pickAmong13(){
    return Math.floor(Math.random() * 13);
}

function pickAmong25(){
    return Math.floor(Math.random() * 25);
}

function nextVolIntervalIter(){
    if (incTypeVol===0){
        if (presVolIntervalIter < 7){
            presVolIntervalIter++;
        }
        else{
            presVolIntervalIter=0;


            if (repeatV===1){
            }
            else{
                let incP=rngTrio();
                if (incP===0){
                    incTypeVol=1;
                }
                else if (incP===1){
                    incTypeVol=2;
                }
                else{
                    incTypeVol=3;
                }
                repeatV=0;
            }

            if (rngBin()===0){
                repeatV=1;
            }
            else{
                repeatV=0;
            }
        }
    }

    else if (incTypeVol===1){
        if (presVolIntervalIter < 4){
            presVolIntervalIter++;
        }
        else{
            presVolIntervalIter=0;

            if (repeatV===1){
            }
            else{
                let incP=rngTrio();
                if (incP===0){
                    incTypeVol=0;
                }
                else if (incP===1){
                    incTypeVol=2;
                }
                else {
                    incTypeVol=3;
                }
                repeatV=0;
            }

            if (rngBin()===0){
                repeatV=1;
            }
            else{
                repeatV=0;
            }
        }
    }

    else{
        if (presVolIntervalIter < 3){
            presVolIntervalIter++;
        }
        else{
            presVolIntervalIter=0;




            if (repeatV===1){
            }
            else{
                let incP=rngTrio();
                if (incP===0){
                    incTypeVol=0;
                }
                else if (incP===1){
                    incTypeVol=1;
                }
                else if (incTypeVol===2){
                    incTypeVol=3;
                }
                else{
                    incTypeVol=2;
                }
                repeatV=0;
            }

            if (rngBin()===0){
                repeatV=1;
            }
            else{
                repeatV=0;
            }
        }
    }



    
}

function nextSpeedIntervalIter(){

    if (incTypeSpeed===0){
        if (presSpeedIntervalIter < 7){
            presSpeedIntervalIter++;
        }
        else{
            presSpeedIntervalIter=0;


            if (repeatS===1){
            }
            else{
                let incP=rngTrio();
                if (incP===0){
                    incTypeSpeed=1;
                }
                else if (incP===1){
                    incTypeSpeed=2;
                }
                else {
                    incTypeSpeed=3;
                }
                repeatS=0;
            }

            if (rngBin()===0){
                repeatS=1;
            }
            else{
                repeatS=0;
            }
        }
    }

    else if (incTypeSpeed===1){
        if (presSpeedIntervalIter < 4){
            presSpeedIntervalIter++;
        }
        else{
            presSpeedIntervalIter=0;

            if (repeatS===1){
            }
            else{
                let incP=rngTrio();
                if (incP===0){
                    incTypeSpeed=0;
                }
                else if (incP===1){
                    incTypeSpeed=2;
                }
                else{
                    incTypeSpeed=3;
                }
                repeatS=0;
            }

            if (rngBin()===0){
                repeatS=1;
            }
            else{
                repeatS=0;
            }
        }
    }

    else{
        if (presSpeedIntervalIter < 3){
            presSpeedIntervalIter++;
        }
        else{
            presSpeedIntervalIter=0;

            if (repeatS===1){
            }
            else{
                let incP=rngTrio();
                if (incP===0){
                    incTypeSpeed=0;
                }
                else if (incP===1){
                    incTypeSpeed=1;
                }
                else if (incTypeVol===2){
                    incTypeSpeed=3;
                }
                else{
                    incTypeSpeed=2;
                }
                repeatS=0;
            }

            if (rngBin()===0){
                repeatS=1;
            }
            else{
                repeatS=0;
            }
            
            
        }
    }
}


function eitherVol(){
    if (rngBin()===0){
        decide23();
    }
    else {
        decide13();
    }

    if (primeRaw[randomsForVol1[randomsForVolIter]]+primeRaw[randomsForSpeed1[randomsForSpeedIter]]>12){
        if (!rng5()){
        interDuration=interDuration*(5/7);
        }
    }
    else if (primeRaw[randomsForVol1[randomsForVolIter]]+primeRaw[randomsForSpeed1[randomsForSpeedIter]]<12){
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

    if (primeRaw[randomsForSpeed1[randomsForSpeedIter]]+primeRaw[randomsForSpeed1[randomsForSpeedIter]]>12){
        if (!rng5()){
        interDuration=interDuration*(5/7);
        }
    }
    else if (primeRaw[randomsForSpeed1[randomsForSpeedIter]]+primeRaw[randomsForSpeed1[randomsForSpeedIter]]<12){
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
            if (incTypeVol===0){
                volIntervalIter += volArr1[presVolIntervalIter];
            }
            else{
                volIntervalIter += volArr1A[presVolIntervalIter];
            }
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
              if (incTypeSpeed===0){
                speedIntervalIter += speedArr1[presSpeedIntervalIter];
              }
              else{
                speedIntervalIter += speedArr1A[presSpeedIntervalIter];
              }
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
