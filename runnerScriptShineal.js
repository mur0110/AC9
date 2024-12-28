const songPath = 'songs/shineal.mp3';

let interDuration = .15;
let repeatV=0;
let repeatS=0;

const rngs=[];
let rngIter=0;

function truncate(x){
    let y=String(x);
    y=y.slice(0,5);
    return parseFloat(y);
}

for (let i=0; i<25000; i++){
    rngs.push(truncate(Math.random()));
}


function modInterDuration(){
    let possibleDeviations=[.05, .07, .11, .13, .17, .19, .23, .29, .31, .37, .41, .43, .47, .53];
    if (rngBin()===0){
        interDuration = possibleDeviations[Math.floor(rngs[rngIter]*14)];
        rngIter++;
    }
}




function rngBin(){
    return Math.floor(rngs[rngIter]*2);
    rngIter++;
}
function rngTrio(){
    return Math.floor(rngs[rngIter]*3);
    rngIter++;
}
function rngQuat(){
    return Math.floor(rngs[rngIter]*4);
    rngIter++;
}
function rngPent(){
    return Math.floor(rngs[rngIter]*5);
    rngIter++;
}
function rngHex(){
    return Math.floor(rngs[rngIter]*6);
    rngIter++;
}
function rngSep(){
    return Math.floor(rngs[rngIter]*7);
    rngIter++;
}
function rngOct(){
    return Math.floor(rngs[rngIter]*8);
    rngIter++;
}
function rng12(){
    return Math.floor(rngs[rngIter]*12);
    rngIter++;
}
function rng14(){
    return Math.floor(rngs[rngIter]*14);
    rngIter++;
}
function rng16(){
    return Math.floor(rngs[rngIter]*16);
    rngIter++;
}
function rng10(){
    return Math.floor(rngs[rngIter]*10);
    rngIter++;
}

function rngR(){
    if (rngBin()===0){
        return 1;
    }
    else{
        return 0;
    }
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
    if (Math.floor(rngs[rngIter]*12)<5){
        return 1;
        rngIter++;
    }
    else{
        return 0;
        rngIter++;
    }
}


function pickArrayVol(x){
    const volArr1=[2,3,3,4,4,3,3,2];
    const volArr1r=[4,3,3,2,2,3,3,4];

    const volArr2=[2,3,4,3,2];
    const volArr2r=[4,3,2,3,4];

    const volArr3=[2.5, 3.5, 3.5, 5, 5, 3.5, 3.5, 2.5];
    const volArr3r=[5, 3.5, 3.5, 2.5, 2.5, 3.5, 3.5, 5];

    const volArr4=[2.5,3.5,5,3.5,2.5];
    const volArr4r=[5,3.5,2.5,3.5,5];

    const volArr5=[2.5,3.5,5,3.5];
    const volArr5r=[3.5,5,3.5,2.5];

    if (x===0){
        return volArr1;
    }
    else if (x===1){
        return volArr1r;
    }
    else if (x===2){
        return volArr2;
    }
    else if (x===3){
        return volArr2r;
    }
    else if (x===4){
        return volArr3;
    }
    else if (x===5){
        return volArr3r;
    }
    else if (x===6){
        return volArr4;
    }
    else if (x===7){
        return volArr4r;
    }
    else if (x===8){
        return volArr5;
    }
    else{
        return volArr5r;
    }
}

function pickArraySpeed(x){
    const speedArr1=[2,3,3,4,4,3,3,2];
    const speedArr1r=[4,3,3,2,2,3,3,4];

    const speedArr2=[2,3,4,3,2];
    const speedArr2r=[4,3,2,3,4];

    const speedArr3=[2.5, 3.5, 3.5, 5, 5, 3.5, 3.5, 2.5];
    const speedArr3r=[5, 3.5, 3.5, 2.5, 2.5, 3.5, 3.5, 5];

    const speedArr4=[2.5,3.5,5,3.5,2.5];
    const speedArr4r=[5,3.5,2.5,3.5,5];

    const speedArr5=[2.5,3.5,5,3.5];
    const speedArr5r=[3.5,5,3.5,2.5];

    if (x===0){
        return speedArr1;
    }
    else if (x===1){
        return speedArr1r;
    }
    else if (x===2){
        return speedArr2;
    }
    else if (x===3){
        return speedArr2r;
    }
    else if (x===4){
        return speedArr3;
    }
    else if (x===5){
        return speedArr3r;
    }
    else if (x===6){
        return speedArr4;
    }
    else if (x===7){
        return speedArr4r;
    }
    else if (x===8){
        return speedArr5;
    }
    else{
        return speedArr5r;
    }
}

let incTypeVol=0;
let incTypeSpeed=0;

function selectNextVolArray(presVolInc){
    let possibles=[0,1,2,3,4,5,6,7,8,9];
    let where=possibles.indexOf(presVolInc);
    if (where<9){
        possibles=possibles.slice(0,where) + possibles.slice(where+1);
    }
    else{
        possibles=possibles.slice(0,9);
    }

    const rngSelector=Math.floor(Math.random()*9);
    incTypeVol=possibles[rngSelector];
}

function selectNextSpeedArray(presSpeedInc){
    let possibles=[0,1,2,3,4,5,6,7,8,9];
    let where=possibles.indexOf(presSpeedInc);
    if (where<9){
        possibles=possibles.slice(0,where) + possibles.slice(where+1);
    }
    else{
        possibles=possibles.slice(0,9);
    }

    const rngSelector=Math.floor(Math.random()*9);
    incTypeSpeed=possibles[rngSelector];
}






const primeRaw = [17, 13, 11, 7, 5, 3, 1, 0, 1, 3, 5, 7, 11, 13, 17];

const multVolArr1 = [.385, .405, .415, .435 ,.445, .465, .475, .485, .495, .5, .505, .515, .525, .535, .555, .565, .585, .595, .615];
const multSpeedArr1 = [.77, .81, .83, .87, .89, .93, .95, .97, .99, 1, 1.01, 1.03, 1.05, 1.07, 1.11, 1.13, 1.17, 1.19, 1.23]; // 5,7,1,11 off of +-.13

const multVolArr2 = [ .375, .3825, .3875, .4, .4075, .4125, .425, .4325, .4375, .45, .4575, .4625, .475, .4825, .4875, .5, .5125, .5175, .525, .5375, .5425, .55, .5625, .5675, .575, .5875, .5925, .6, .6125, .6175, .625];
const multSpeedArr2 = [ .75, .765, .775, .8, .815, .825, .85, .865, .875, .9, .915, .925, .95, .965, .975, 1, 1.025, 1.035, 1.05, 1.075, 1.085, 1.1, 1.125, 1.135, 1.15, 1.75, 1.85, 1.2, 1.225, 1.235, 1.25];

const randomsForVol1=[];
const randomsForSpeed1=[];

const randomsForVol2=[];
const randomsForSpeed2=[];


let randomsForVolIter = 0;
let randomsForSpeedIter = 0;

for (let i=0; i<2000; i++){
    randomsForVol1.push(pickAmong19());
    randomsForSpeed1.push(pickAmong19());
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
        multiplier=5/6;
    }
    else if (decideArrayInc===2){
        multiplier=4/5;
    }
    else if (decideArrayInc===3){
        multiplier=3/4;
    }
    else if (decideArrayInc===4){
        multiplier=17/24;
    }
    else if(decideArrayInc===5){
        multiplier=2/3;
    }
    else if (decideArrayInc===6){
        multiplier=1/2;
    }
    else if (decideArrayInc===7){
        multiplier=1/3
    }
    else if (decideArrayInc===8){
        multiplier=7/24;
    }
    else if (decideArrayInc===9){
        multiplier=1/4;
    }
    else if (decideArrayInc===10){
        multiplier=1/5;
    }
    else {
        multiplier=1/6;
    }
    
    if (rngBin()===0){
        multiplier=1/multiplier;
    }

    presVolInterval = pickArrayVol(incTypeVol)[presVolIntervalIter] * multiplier;

}

function redefineSpeedInterval(){
    let decideArrayInc=rng12();
    let multiplier=0;
    if (decideArrayInc===0){
        multiplier=1;
    }
    else if (decideArrayInc===1){
        multiplier=5/6;
    }
    else if (decideArrayInc===2){
        multiplier=4/5;
    }
    else if (decideArrayInc===3){
        multiplier=3/4;
    }
    else if (decideArrayInc===4){
        multiplier=17/24;
    }
    else if(decideArrayInc===5){
        multiplier=2/3;
    }
    else if (decideArrayInc===6){
        multiplier=1/2;
    }
    else if (decideArrayInc===7){
        multiplier=1/3
    }
    else if (decideArrayInc===8){
        multiplier=7/24;
    }
    else if (decideArrayInc===9){
        multiplier=1/4;
    }
    else if (decideArrayInc===10){
        multiplier=1/5;
    }
    else {
        multiplier=1/6;
    }
    
    if (rngBin()===0){
        multiplier=1/multiplier;
    }

    presSpeedInterval = pickArraySpeed(incTypeSpeed)[presSpeedIntervalIter] * multiplier;


}


function pickAmong19(){
    const val = Math.floor(rngs[rngIter] * 19);
    rngIter++;
    return val;
}

function pickAmong31(){
    const val = Math.floor(rngs[rngIter] * 31);
    rngIter++;
    return val;
}

function nextVolIntervalIter(){
    if (pickArrayVol(incTypeVol).length===8){
        if (presVolIntervalIter < 7){
            presVolIntervalIter++;
        }
        else{
            presVolIntervalIter=0;


            if (repeatV===1){
            }
            else{
                if (rngBin()===0){
                    incTypeVol=incTypeSpeed;
                }
                else{
                    selectNextVolArray();
                }
            }

            if (rngR()){
                repeatV=1;
            }
            else{
                repeatV=0;
            }
        }
    }

    
    else if (pickArrayVol(incTypeVol).length===5){
        if (presVolIntervalIter < 4){
            presVolIntervalIter++;
        }
        else{
            presVolIntervalIter=0;

            if (repeatV===1){
    
            }
            else{
                if (rngBin()===0){
                    incTypeVol=incTypeSpeed;
                }
                else{
                    selectNextVolArray();
                }
            }

            if (rngR()){
                repeatV=1;
            }
            else{
                repeatV=0;
            }
        }
    }

    else if (pickArrayVol(incTypeVol).length===4){
        if (presVolIntervalIter < 3){
            presVolIntervalIter++;
        }
        else{
            presVolIntervalIter=0;

            if (repeatV===1){
            }
            else{
                if (rngBin()===0){
                    incTypeVol=incTypeSpeed;
                }
                else{
                    selectNextVolArray();  
                }
            }

            if (rngR()){
                repeatV=1;
            }
            else{
                repeatV=0;
            }
        }
    }



    
}

function nextSpeedIntervalIter(){
    if (pickArraySpeed(incTypeSpeed).length===8){
        if (presSpeedIntervalIter < 7){
            presSpeedIntervalIter++;
        }
        else{
            presSpeedIntervalIter=0;


            if (repeatV===1){
            }
            else{
                if (rngBin()===0){
                    incTypeSpeed=incTypeSpeed;
                }
                else{
                    selectNextSpeedArray();
                }
            }

            if (rngR()){
                repeatV=1;
            }
            else{
                repeatV=0;
            }
        }
    }

    
    else if (pickArraySpeed(incTypeSpeed).length===5){
        if (presSpeedIntervalIter < 4){
            presSpeedIntervalIter++;
        }
        else{
            presSpeedIntervalIter=0;

            if (repeatV===1){
    
            }
            else{
                if (rngBin()===0){
                    incTypeSpeed=incTypeSpeed;
                }
                else{
                    selectNextSpeedArray();
                }
            }

            if (rngR()){
                repeatV=1;
            }
            else{
                repeatV=0;
            }
        }
    }

    else if (pickArraySpeed(incTypeSpeed).length===4){
        if (presSpeedIntervalIter < 3){
            presSpeedIntervalIter++;
        }
        else{
            presSpeedIntervalIter=0;

            if (repeatV===1){
            }
            else{
                if (rngBin()===0){
                    incTypeSpeed=incTypeSpeed;
                }
                else{
                    selectNextSpeedArray();  
                }
            }

            if (rngR()){
                repeatV=1;
            }
            else{
                repeatV=0;
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


}


function eitherSpeed(){
    if (rngBin()===0){
        decide23();
    }
    else {
        decide13();
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
        let randomToDecide=rngs[rngIter];
        rngIter++;

        setTimeout(function(){
            songAudio.volume = randomForVolVal;
            volIntervalIter++;
            advanceVolume();
        }, interDuration * volInterval * 1000);
        nextVolIntervalIter();
        redefineVolInterval();
        volInterval = presVolInterval;


          if (randomToDecide<(29/100)){
            
            let multVal=0;
            let rngDet=rngBin();
            if (rngDet===0){
              multVal=5/7;
            }
            else {
              multVal=1;
            }  


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
                    rngVS1=dp3*(.62/1.922) * multVal;
                }
                else {
                    rngVS1=dp4*(.62/1.5377) * multVal;
                }
              }

              
              else {
                if (rngBin() === 0){
                    rngVS1=((dp3**(1/3)+dp3**(1/2)+dp3**(1/4))/3)*(.62/1.269) * multVal;
                }
                else{
                    rngVS1=((dp4**(1/3)+dp4**(1/2)+dp4**(1/4))/3)*(.62/1.169) * multVal;
                }
              }
              


              randomForVolVal = rngVS1;
              eitherVolPlain();
          }

        else if(randomToDecide<((52.667/100))){

            let multVal=0;
            let rngDet=rngBin();
            if (rngDet===0){
              multVal=5/7;
            }
            else {
              multVal=1;
            }  


            let diff1=0, diff2=0, diff3=0, diff4=0, diffTotal=0;

            diff1 = multVolArr1[randomsForVol1[randomsForVolIter]] - multVolArr2[randomsForVol2[randomsForVolIter]];
            diff2 = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]] - multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];

            diff3 = multVolArr1[randomsForVol1[randomsForVolIter]] - multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]];
            diff4 = multVolArr2[randomsForVol2[randomsForVolIter]] - multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
            
            diffT = (((diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/3)+(diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/2)+(diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/4))/3)/1.23 * .62 * multVal;

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
          let randomToDecide=rngs[rngIter];
          rngIter++;
          setTimeout(function(){
              songAudio.playbackRate = randomForSpeedVal;
              speedIntervalIter++;
              advanceSpeed();
          }, interDuration * speedInterval * 1000);
          nextSpeedIntervalIter();
          redefineSpeedInterval();
          speedInterval = presSpeedInterval;

          

          if (randomToDecide<(29/100)){

            let multVal=0;
            let rngDet=rngTrio();
            if (rngDet===0){
              multVal=5/7;
            }
            else if (rngDet===1){
              multVal=7/5;
            } 
            else{
                multVal=1;
            }

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
                    rngVS1=dp3*(1.24/1.922) * multVal;
                }
                else {
                    rngVS1=dp4*(1.24/1.5377) * multVal;
                }
              }

              
              else {
                if (rngBin() === 0){
                    rngVS1=((dp3**(1/3)+dp3**(1/2)+dp3**(1/4))/3)*(1.24/1.269) * multVal;
                }
                else{
                    rngVS1=((dp4**(1/3)+dp4**(1/2)+dp4**(1/4))/3)*(1.24/1.169) * multVal;
                }
              }
              
              randomForSpeedVal = rngVS1;
              eitherSpeedPlain();
          }
        else if(randomToDecide<(52.667/100)){
            let multVal=0;
            let rngDet=rngTrio();
            if (rngDet===0){
              multVal=5/7;
            }
            else if (rngDet===1){
              multVal=7/5;
            }
            else{
                multVal=1;
            }

            let diff1=0, diff2=0, diff3=0, diff4=0, diffTotal=0;

            diff1 = multVolArr1[randomsForVol1[randomsForVolIter]] - multVolArr2[randomsForVol2[randomsForVolIter]];
            diff2 = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]] - multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];

            diff3 = multVolArr1[randomsForVol1[randomsForVolIter]] - multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]];
            diff4 = multVolArr2[randomsForVol2[randomsForVolIter]] - multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
            
            diffT = (((diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/3)+(diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/2)+(diff1**2 + diff2**2 + diff3**2 + diff4**2)**(1/4))/3) * multVal;

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
