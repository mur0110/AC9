const songPath = 'songs/ecs.mp3';

let interDuration = .15;
let repeatV=0;
let repeatS=0;

function modInterDuration(){
    let possibleDeviations=[.1,.11,.12,.13,.14,.16,.17,.18,.19,.2,.22,.23,.24,.26,.28,.29,.3,.31,.32, .33, .34, .36, .37, .38, .40, .41, .42, .43, .44, .46, .47, .48, .5, .52, .53, .54, .56, .57];
    interDuration = possibleDeviations[Math.floor(Math.random()*38)];

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
    return Math.floor(Math.random()*5)
}
function rngHex(){
    return Math.floor(Math.random()*6);
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

const volArr2=[4,3,3,2,2,3,3,4];
const speedArr2=[4,3,3,2,2,3,3,4];


const volArr1A=[2.5,3.5,5,3.5,2.5];
const speedArr1A=[2.5,3.5,5,3.5,2.5];

const volArr1B=[2.5,3.5,5,3.5];
const speedArr1B=[2.5,3.5,5,3.5];

const volArr1C=[3.5,5,3.5,2.5];
const speedArr1C=[3.5,5,3.5,2.5];

let incTypeVol=0;
let incTypeSpeed=0;



const primeRaw = [17, 13, 11, 7, 5, 3, 1, 0, 1, 3, 5, 7, 11, 13, 17];

const multVolArr1 = [.415, .435 ,.445, .465, .475, .485, .495, .5, .505, .515, .525, .535, .555, .565, .585];
const multSpeedArr1 = [.83, .87, .89, .93, .95, .97, .99, 1, 1.01, 1.03, 1.05, 1.07, 1.11, 1.13, 1.17]; // 5,7,1,11 off of +-.13

const multVolArr2 = [ .375, .3825, .3875, .4, .4075, .4125, .425, .4325, .4375, .45, .4575, .4625, .475, .4825, .4875, .5, .5125, .5175, .525, .5375, .5425, .55, .5625, .5675, .575, .5875, .5925, .6, .6125, .6175, .625];
const multSpeedArr2 = [ .75, .765, .775, .8, .815, .825, .85, .865, .875, .9, .915, .925, .95, .965, .975, 1, 1.025, 1.035, 1.05, 1.075, 1.085, 1.1, 1.125, 1.135, 1.15, 1.75, 1.85, 1.2, 1.225, 1.235, 1.25];

const randomsForVol1=[];
const randomsForSpeed1=[];

const randomsForVol2=[];
const randomsForSpeed2=[];


let randomsForVolIter = 0;
let randomsForSpeedIter = 0;

for (let i=0; i<2000; i++){
    randomsForVol1.push(pickAmong15());
    randomsForSpeed1.push(pickAmong15());
    randomsForVol2.push(pickAmong31());
    randomsForSpeed2.push(pickAmong31());
}

let presVolIntervalIter = 0;
let presSpeedIntervalIter = 0;

let presVolInterval = 0;
let presSpeedInterval = 0;

function redefineVolInterval(){
    let decideArrayInc=rng12();
    let multiplier=0;
    if (decideArrayInc===0){
        multiplier=1;
    }
    else if (decideArrayInc===1){
        multiplier=6/7;
    }
    else if (decideArrayInc===2){
        multiplier=5/6;
    }
    else if (decideArrayInc===3){
        multiplier=4/5;
    }
    else if(decideArrayInc===4){
        multiplier=3/4;
    }
    else if (decideArrayInc===5){
        multiplier=2/3;
    }
    else if (decideArrayInc===6){
        multiplier=.5;
    }
    else if (decideArrayInc===7){
        multiplier=1/3;
    }
    else if(decideArrayInc===8){
        multiplier=1/4;
    }
    else if (decideArrayInc===9){
        multiplier=1/5;
    }
    else if(decideArrayInc===10){
        multiplier=1/6;
    }
    else{
        multiplier=1/7;
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
    else if (incTypeVol===3){
        presVolInterval = volArr1C[presVolIntervalIter] * multiplier;
    }
    else{
        presVolInterval = volArr2[presVolIntervalIter] * multiplier;
    }
}

function redefineSpeedInterval(){
    let decideArrayInc=rng12();
    let multiplier=0;
    if (decideArrayInc===0){
        multiplier=1;
    }
    else if (decideArrayInc===1){
        multiplier=6/7;
    }
    else if (decideArrayInc===2){
        multiplier=5/6;
    }
    else if (decideArrayInc===3){
        multiplier=4/5;
    }
    else if(decideArrayInc===4){
        multiplier=3/4;
    }
    else if (decideArrayInc===5){
        multiplier=2/3;
    }
    else if (decideArrayInc===6){
        multiplier=.5;
    }
    else if (decideArrayInc===7){
        multiplier=1/3;
    }
    else if(decideArrayInc===8){
        multiplier=1/4;
    }
    else if (decideArrayInc===9){
        multiplier=1/5;
    }
    else if(decideArrayInc===10){
        multiplier=1/6;
    }
    else{
        multiplier=1/7;
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
    else if (incTypeSpeed===3){
        presSpeedInterval = speedArr1C[presSpeedIntervalIter] * multiplier;
    }
    else{
        presSpeedInterval = speedArr2[presSpeedIntervalIter] * multiplier;
    }
}


function pickAmong15(){
    return Math.floor(Math.random() * 15);
}

function pickAmong31(){
    return Math.floor(Math.random() * 31);
}

function nextVolIntervalIter(){
    if (incTypeVol===0||incTypeVol===4){
        if (presVolIntervalIter < 7){
            presVolIntervalIter++;
        }
        else{
            presVolIntervalIter=0;


            if (repeatV===1){
            }
            else{
                let incP=rngQuat();
                if (incP===0){
                    incTypeVol=1;
                }
                else if (incP===3){
                    incTypeVol=4;
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
                let incP=rngQuat();
                if (incP===0){
                    incTypeVol=0;
                }
                else if (incP===3){
                    incTypeVol=4;
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
                let incP=rngQuat();
                if (incP===0){
                    incTypeVol=0;
                }
                else if (incP===3){
                    incTypeVol=4;
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
                let incP=rngQuat();
                if (incP===0){
                    incTypeSpeed=1;
                }
                else if (incP===3){
                    incTypeSpeed=4;
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

    else if (incTypeSpeed===1){
        if (presSpeedIntervalIter < 4){
            presSpeedIntervalIter++;
        }
        else{
            presSpeedIntervalIter=0;

            if (repeatS===1){
            }
            else{
                let incP=rngQuat();
                if (incP===0){
                    incTypeSpeed=1;
                }
                else if (incP===3){
                    incTypeSpeed=4;
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
                let incP=rngQuat();
                if (incP===0){
                    incTypeSpeed=1;
                }
                else if (incP===3){
                    incTypeSpeed=4;
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
}


function eitherVol(){
    if (rngBin()===0){
        decide23();
    }
    else {
        decide13();
    }

    if (primeRaw[multVolArr1.indexOf(randomsForVol1[randomsForVolIter])]+primeRaw[multSpeedArr1.indexOf(randomsForSpeed1[randomsForSpeedIter])]>13){
        if (!rng5()){
        interDuration=interDuration*(5/7);
        }
    }
    else if (primeRaw[multVolArr1.indexOf(randomsForVol1[randomsForVolIter])]+primeRaw[multSpeedArr1.indexOf(randomsForSpeed1[randomsForSpeedIter])]<13){
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

    if (primeRaw[multVolArr1.indexOf(randomsForVol1[randomsForVolIter])]+primeRaw[multSpeedArr1.indexOf(randomsForSpeed1[randomsForSpeedIter])]>13){
        if (!rng5()){
        interDuration=interDuration*(5/7);
        }
    }
    else if (primeRaw[multVolArr1.indexOf(randomsForVol1[randomsForVolIter])]+primeRaw[multSpeedArr1.indexOf(randomsForSpeed1[randomsForSpeedIter])]<13){
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
            volIntervalIter++;
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



              if (rngBin()===0){
                if (rngBin() === 0){
                    rngVS1=dp3*(.595/1.695);
                }
                else {
                    rngVS1=dp4*(.595/1.35845);
                }
              }

              
              else {
                if (rngBin() === 0){
                    rngVS1=((dp3**(1/3)+dp3**(1/2)+dp3**(1/4))/3)*(.595/1.10);
                }
                else{
                    rngVS1=((dp4**(1/3)+dp4**(1/2)+dp4**(1/4))/3)*(.595/1.057);
                }
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
            
            diffT = (((diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/3)+(diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/2)+(diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/4))/3)/1.087 * .595;

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
              speedIntervalIter++;
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


              if (rngBin()===0){
                if (rngBin() === 0){
                    rngVS1=dp3*(1.19/1.695);
                }
                else {
                    rngVS1=dp4*(1.19/1.35845);
                }
              }

              
              else {
                if (rngBin() === 0){
                    rngVS1=((dp3**(1/3)+dp3**(1/2)+dp3**(1/4))/3)*(1.19/1.10);
                }
                else{
                    rngVS1=((dp4**(1/3)+dp4**(1/2)+dp4**(1/4))/3)*(1.19/1.057);
                }
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
            
            diffT = (((diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/3)+(diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/2)+(diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/4))/3);

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
