const songPath = 'songs/shineal.mp3';

let interDuration = .15;
let repeatV=0;
let repeatS=0;

function modInterDuration(){
    let possibleDeviations=[.07, .11, .13, .17, .19, .23, .29, .31, .37, .41, .43, .47, .53, .57, .59, .61, .67, .71, .73];
    if (rngBin()===0){
        interDuration = possibleDeviations[Math.floor(Math.random()*19)];
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
    return Math.floor(Math.random()*5)
}
function rngHex(){
    return Math.floor(Math.random()*6);
}
function rngSep(){
    return Math.floor(Math.random()*7);
}
function rng12(){
    return Math.floor(Math.random()*12);
}
function rng14(){
    return Math.floor(Math.random()*14);
}
function rng16(){
    return Math.floor(Math.random()*16);
}
function rng18(){
    return Math.floor(Math.random()*18);
}

function rngR(){
    if (rngTrio()===0){
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

const volArr1D=[2.5, 3.5, 3.5, 5, 5, 3.5, 3.5, 2.5];
const speedArr1D=[2.5, 3.5, 3.5, 5, 5, 3.5, 3.5, 2.5];

const volArr1E=[5, 3.5, 3.5, 2.5, 2.5, 3.5, 3.5, 5];
const speedArr1E=[5, 3.5, 3.5, 2.5, 2.5, 3.5, 3.5, 5];

let incTypeVol=0;
let incTypeSpeed=0;



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
    let decideArrayInc=rng18();
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
    else if(decideArrayInc===11){
        multiplier=1/8;
    }
    else if(decideArrayInc===12){
        multiplier=7/8;
    }
    else if(decideArrayInc===13){
        multiplier=1/9;
    }
    else if(decideArrayInc===14){
        multiplier=8/9;
    }
    else if(decideArrayInc===15){
        multiplier=1/10;
    }
    else if(decideArrayInc===16){
        multiplier=9/10;
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
    else if (incTypeVol===4){
        presVolInterval = volArr2[presVolIntervalIter] * multiplier;
    }
    else if (incTypeVol===5){
        presVolInterval=volArr1D[presVolIntervalIter]*multiplier;
    }
    else{
        presVolInterval=volArr1E[presVolIntervalIter]*multiplier;
    }
}

function redefineSpeedInterval(){
    let decideArrayInc=rng18();
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
    else if(decideArrayInc===11){
        multiplier=1/8;
    }
    else if(decideArrayInc===12){
        multiplier=7/8;
    }
    else if(decideArrayInc===13){
        multiplier=1/9;
    }
    else if(decideArrayInc===14){
        multiplier=8/9;
    }
    else if(decideArrayInc===15){
        multiplier=1/10;
    }
    else if(decideArrayInc===16){
        multiplier=9/10;
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
    else if (incTypeSpeed===4){
        presSpeedInterval = speedArr2[presSpeedIntervalIter] * multiplier;
    }
    else if (incTypeSpeed===5){
        presSpeedInterval=speedArr1D[presSpeedIntervalIter]*multiplier;
    }
    else{
        presSpeedInterval=speedArr1E[presSpeedIntervalIter]*multiplier;
    }
}


function pickAmong19(){
    return Math.floor(Math.random() * 19);
}

function pickAmong31(){
    return Math.floor(Math.random() * 31);
}

function nextVolIntervalIter(){
    if (incTypeVol===0||incTypeVol===4||incTypeVol===5||incTypeVol===6){
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
                    if (incTypeVol===0){
                        let decider=rngHex();
                        if (decider===0){
                            incTypeVol=1;
                        }
                        else if (decider===1){
                            incTypeVol=2;
                        }
                        else if (decider===2){
                            incTypeVol=3;
                        }
                        else if (decider===3){
                            incTypeVol=4;
                        }
                        else if (decider===4){
                            incTypeVol=5;
                        }
                        else {
                            incTypeVol=6;
                        }
                    }
                    else if (incTypeVol===4){
                        let decider=rngHex();
                        if (decider===0){
                            incTypeVol=0;
                        }
                        else if (decider===1){
                            incTypeVol=2;
                        }
                        else if (decider===2){
                            incTypeVol=3;
                        }
                        else if (decider===3){
                            incTypeVol=1;
                        }
                        else if (decider===4){
                            incTypeVol=5;
                        }
                        else {
                            incTypeVol=6;
                        }
                    }
                    else if (incTypeVol===5){
                        let decider=rngHex();
                        if (decider===0){
                            incTypeVol=0;
                        }
                        else if (decider===1){
                            incTypeVol=2;
                        }
                        else if (decider===2){
                            incTypeVol=3;
                        }
                        else if (decider===3){
                            incTypeVol=4;
                        }
                        else if (decider===4){
                            incTypeVol=1;
                        }
                        else {
                            incTypeVol=6;
                        }
                    }
                    else{
                        let decider=rngHex();
                        if (decider===0){
                            incTypeVol=0;
                        }
                        else if (decider===1){
                            incTypeVol=2;
                        }
                        else if (decider===2){
                            incTypeVol=3;
                        }
                        else if (decider===3){
                            incTypeVol=4;
                        }
                        else if (decider===4){
                            incTypeVol=1;
                        }
                        else {
                            incTypeVol=5;
                        }
                    }
                    
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

    
    else if (incTypeVol===1){
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
                        let decider=rngHex();
                        if (decider===0){
                            incTypeVol=0;
                        }
                        else if (decider===1){
                            incTypeVol=2;
                        }
                        else if (decider===2){
                            incTypeVol=3;
                        }
                        else if (decider===3){
                            incTypeVol=4;
                        }
                        else if (decider===4){
                            incTypeVol=5;
                        }
                        else {
                            incTypeVol=6;
                        }
                  
                    
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

    else if (incTypeVol===2||incTypeVol===3){
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
                    if (incTypeVol===2){
                        let decider=rngHex();
                        if (decider===0){
                            incTypeVol=1;
                        }
                        else if (decider===1){
                            incTypeVol=0;
                        }
                        else if (decider===2){
                            incTypeVol=3;
                        }
                        else if (decider===3){
                            incTypeVol=4;
                        }
                        else if (decider===4){
                            incTypeVol=5;
                        }
                        else {
                            incTypeVol=6;
                        }
                    }
                    else if (incTypeVol===3){
                        let decider=rngHex();
                        if (decider===0){
                            incTypeVol=0;
                        }
                        else if (decider===1){
                            incTypeVol=2;
                        }
                        else if (decider===2){
                            incTypeVol=4;
                        }
                        else if (decider===3){
                            incTypeVol=1;
                        }
                        else if (decider===4){
                            incTypeVol=5;
                        }
                        else {
                            incTypeVol=6;
                        }
                    }
                    
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
    if (incTypeSpeed===0||incTypeSpeed===4||incTypeSpeed===5||incTypeSpeed===6){
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
                    if (incTypeSpeed===0){
                        let decider=rngHex();
                        if (decider===0){
                            incTypeSpeed=1;
                        }
                        else if (decider===1){
                            incTypeSpeed=2;
                        }
                        else if (decider===2){
                            incTypeSpeed=3;
                        }
                        else if (decider===3){
                            incTypeSpeed=4;
                        }
                        else if (decider===4){
                            incTypeSpeed=5;
                        }
                        else {
                            incTypeSpeed=6;
                        }
                    }
                    else if (incTypeSpeed===4){
                        let decider=rngHex();
                        if (decider===0){
                            incTypeSpeed=0;
                        }
                        else if (decider===1){
                            incTypeSpeed=2;
                        }
                        else if (decider===2){
                            incTypeSpeed=3;
                        }
                        else if (decider===3){
                            incTypeSpeed=1;
                        }
                        else if (decider===4){
                            incTypeSpeed=5;
                        }
                        else {
                            incTypeSpeed=6;
                        }
                    }
                    else if (incTypeSpeed===5){
                        let decider=rngHex();
                        if (decider===0){
                            incTypeSpeed=0;
                        }
                        else if (decider===1){
                            incTypeSpeed=2;
                        }
                        else if (decider===2){
                            incTypeSpeed=3;
                        }
                        else if (decider===3){
                            incTypeSpeed=4;
                        }
                        else if (decider===4){
                            incTypeSpeed=1;
                        }
                        else {
                            incTypeSpeed=6;
                        }
                    }
                    else{
                        let decider=rngHex();
                        if (decider===0){
                            incTypeSpeed=0;
                        }
                        else if (decider===1){
                            incTypeSpeed=2;
                        }
                        else if (decider===2){
                            incTypeSpeed=3;
                        }
                        else if (decider===3){
                            incTypeSpeed=4;
                        }
                        else if (decider===4){
                            incTypeSpeed=1;
                        }
                        else {
                            incTypeSpeed=5;
                        }
                    }
                    
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

    
    else if (incTypeSpeed===1){
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
                        let decider=rngHex();
                        if (decider===0){
                            incTypeSpeed=0;
                        }
                        else if (decider===1){
                            incTypeSpeed=2;
                        }
                        else if (decider===2){
                            incTypeSpeed=3;
                        }
                        else if (decider===3){
                            incTypeSpeed=4;
                        }
                        else if (decider===4){
                            incTypeSpeed=5;
                        }
                        else {
                            incTypeSpeed=6;
                        }
                  
                    
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

    else if (incTypeSpeed===2||incTypeSpeed===3){
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
                    if (incTypeSpeed===2){
                        let decider=rngHex();
                        if (decider===0){
                            incTypeSpeed=1;
                        }
                        else if (decider===1){
                            incTypeSpeed=0;
                        }
                        else if (decider===2){
                            incTypeSpeed=3;
                        }
                        else if (decider===3){
                            incTypeSpeed=4;
                        }
                        else if (decider===4){
                            incTypeSpeed=5;
                        }
                        else {
                            incTypeSpeed=6;
                        }
                    }
                    else if (incTypeSpeed===3){
                        let decider=rngHex();
                        if (decider===0){
                            incTypeSpeed=0;
                        }
                        else if (decider===1){
                            incTypeSpeed=2;
                        }
                        else if (decider===2){
                            incTypeSpeed=4;
                        }
                        else if (decider===3){
                            incTypeSpeed=1;
                        }
                        else if (decider===4){
                            incTypeSpeed=5;
                        }
                        else {
                            incTypeSpeed=6;
                        }
                    }
                    
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
