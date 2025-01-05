const songPath = 'songs/year3000.mp3'; //year3000 was first





const multVolArr1 = [.385, .405, .415, .435 ,.445, .465, .475, .485, .495, .5, .505, .515, .525, .535, .555, .565, .585, .595, .615];
const multSpeedArr1 = [.77, .81, .83, .87, .89, .93, .95, .97, .99, 1, 1.01, 1.03, 1.05, 1.07, 1.11, 1.13, 1.17, 1.19, 1.23]; // 5,7,1,11 off of +-.13

const multVolArr2 = [ .375, .3825, .3875, .4, .4075, .4125, .425, .4325, .4375, .45, .4575, .4625, .475, .4825, .4875, .5, .5125, .5175, .525, .5375, .5425, .55, .5625, .5675, .575, .5875, .5925, .6, .6125, .6175, .625];
const multSpeedArr2 = [ .75, .765, .775, .8, .815, .825, .85, .865, .875, .9, .915, .925, .95, .965, .975, 1, 1.025, 1.035, 1.05, 1.075, 1.085, 1.1, 1.125, 1.135, 1.15, 1.75, 1.85, 1.2, 1.225, 1.235, 1.25];













let interDuration = .15;
let repeatV=0;
let repeatS=0;

const rngs=[];
let rngIter=0;

let wasRepeatVol=0;
let wasRepeatSpeed=0;

function truncate(x){
    let y=String(x);
    y=y.slice(0,5);
    return parseFloat(y);
}

for (let i=0; i<1000000; i++){
    rngs.push(truncate(Math.random()));
}


function modInterDuration(){
    let mVal=0;
    let mArray=[];

        mArray=[.05, .07, .11, .13, .17, .19, .23, .29, .31, .37, .41, .43, .47, .53];
        mVal=14;

        interDuration = mArray[Math.floor(rngs[rngIter]*mVal)];
        rngIter++;

}




function rngBin(){
    const val = Math.floor(rngs[rngIter]*2);
    rngIter++;
    return val;
}
function rngTrio(){
    const val = Math.floor(rngs[rngIter]*3);
    rngIter++;
    return val;
}
function rngQuat(){
    const val = Math.floor(rngs[rngIter]*4);
    rngIter++;
    return val;
}
function rngPent(){
    const val = Math.floor(rngs[rngIter]*5);
    rngIter++;
    return val;
}
function rngHex(){
    const val = Math.floor(rngs[rngIter]*6);
    rngIter++;
    return val;
}
function rngSep(){
    const val = Math.floor(rngs[rngIter]*7);
    rngIter++;
    return val;
}
function rngOct(){
    const val = Math.floor(rngs[rngIter]*8);
    rngIter++;
    return val;
}
function rng10(){
    const val = Math.floor(rngs[rngIter]*10);
    rngIter++;
    return val;
}
function rng14(){
    const val = Math.floor(rngs[rngIter]*14);
    rngIter++;
    return val;
}
function rng16(){
    const val = Math.floor(rngs[rngIter]*16);
    rngIter++;
    return val;
}
function rng12(){
    const val = Math.floor(rngs[rngIter]*12);
    rngIter++;
    return val;
}

function rngR(){
    if (rngBin()===0){
        rngIter++;
        return 1;
    }
    else{
        rngIter++;
        return 0;
    }
}

function rngRx(){
    if (rngs[rngIter]*7>2){
        rngIter++;
        return 1;
    }
    else{
        rngIter++;
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

    const volArr6=[2,3,4,3];
    const volArr6r=[3,4,3,2];



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
    else if (x===9){
        return volArr5r;
    }
    else if(x===10){
        return volArr6;
    }
    else{
        return volArr6r;
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

    const speedArr6=[2,3,4,3];
    const speedArr6r=[3,4,3,2];

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
    else if (x===9){
        return speedArr5r;
    }
    else if(x===10){
        return speedArr6;
    }
    else{
        return speedArr6r;
    }
}

let incTypeVol=0;
let incTypeSpeed=0;

function selectNextVolArray(presVolInc){
    let possibles=[0,1,2,3,4,5,6,7,8,9,10,11];
    let where=possibles.indexOf(presVolInc);
    if (where<11){
        possibles=possibles.slice(0,where) + possibles.slice(where+1);
    }
    else{
        possibles=possibles.slice(0,11);
    }

    const rngSelector=rngs[rngIter];
    rngIter++;
    incTypeVol=possibles[rngSelector];
}

function selectNextSpeedArray(presSpeedInc){
    let possibles=[0,1,2,3,4,5,6,7,8,9,10,11];
    let where=possibles.indexOf(presSpeedInc);
    if (where<11){
        possibles=possibles.slice(0,where) + possibles.slice(where+1);
    }
    else{
        possibles=possibles.slice(0,11);
    }

    const rngSelector=rngs[rngIter];
    rngIter++;
    incTypeSpeed=possibles[rngSelector];
}






const primeRaw = [17, 13, 11, 7, 5, 3, 1, 0, 1, 3, 5, 7, 11, 13, 17];



const randomsForVol1=[];
const randomsForSpeed1=[];

const randomsForVol2=[];
const randomsForSpeed2=[];

for (let i=0; i<2000; i++){
    randomsForVol1.push(pickAmong19());
    randomsForSpeed1.push(pickAmong19());
    randomsForVol2.push(pickAmong31());
    randomsForSpeed2.push(pickAmong31());
}




let randomsForVolIter = 0;
let randomsForSpeedIter = 0;

let randomForVolVal = multVolArr1[randomsForVol1[randomsForVolIter]];
let randomForSpeedVal = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]];

let presVolIntervalIter = 0;
let presSpeedIntervalIter = 0;

let presVolInterval = 0;
let presSpeedInterval = 0;

let volIntervalIter = 0;
let speedIntervalIter = 0;

let volInterval = presVolInterval;
let speedInterval = presSpeedInterval;






function redefineVolInterval(){
    let multiplier=0;
    let arrayHold=pickArrayVol(Math.floor(rngs[rngIter]*10));
    rngIter++;
    let randomInt=Math.floor(arrayHold[Math.floor(rngs[rngIter]*arrayHold.length)]);
    rngIter++;


    if (rngRx()){
        multiplier=1;
    }
    else{
        multiplier=randomInt;
    }    

    let when=rngBin();
    let when2=rngBin();

    if (when===0){
        if (rngs[rngIter]*7<2){
            rngIter++;
            multiplier=5/7;
        }
    }

    if (when2===0){
        if (rngBin()===0){
            multiplier=1/multiplier;
        }
    }

    let rngTr=rngQuat();

    if (rngTr===0){
        multiplier=(multiplier**(1/2) + multiplier**(1/3) + multiplier**(1/4))/3;
    }
    else if (rngTr===1)
    {
        multiplier=multiplier**(5/7);
    }
    else if (rngTr===2){
        multiplier=multiplier**(7/5);
    }
    else{
        
    }

    

    if (when===1){
        if (rngs[rngIter]*7<2){
            rngIter++;
            multiplier=5/7;
        }
    }

    if (when2===1){
        if (rngBin()===0){
            multiplier=1/multiplier;
        }
    }

    if (rngRx()){
        multiplier=1;
    }


    if (!rngRx()){
        presVolInterval = pickArrayVol(incTypeVol)[presVolIntervalIter] * multiplier;
    }
    else{
        if (rngBin()){
            presVolInterval = presSpeedInterval * multiplier;
        }
        else{
            presVolInterval = presSpeedInterval;
        }
    }
}

function redefineSpeedInterval(){
    let multiplier=0;
    let arrayHold=pickArrayVol(Math.floor(rngs[rngIter]*10));
    rngIter++;
    let randomInt=Math.floor(arrayHold[Math.floor(rngs[rngIter]*arrayHold.length)]);
    rngIter++;
    


    if (rngRx()){
        multiplier=1;
    }
    else{
        multiplier=randomInt;
    }    
    
    
    let when=rngBin();
    let when2=rngBin();

    if (when===0){
        if (rngs[rngIter]*7<2){
            rngIter++;
            multiplier=5/7;
        }
    }

    if (when2===0){
        if (rngBin()===0){
            multiplier=1/multiplier;
        }
    }

    let rngTr=rngQuat();

    if (rngTr===0){
        multiplier=(multiplier**(1/2) + multiplier**(1/3) + multiplier**(1/4))/3;
    }
    else if (rngTr===1)
    {
        multiplier=multiplier**(5/7);
    }
    else if (rngTr===2){
        multiplier=multiplier**(7/5);
    }
    else{
        
    }

   
    if (when===1){
        if (rngs[rngIter]*7<2){
            rngIter++;
            multiplier=5/7;
        }
    }
    if (when2===1){
        if (rngBin()===0){
            multiplier=1/multiplier;
        }
    }

    if (rngRx()){
        multiplier=1;
    }


    if (!rngRx()){
        presSpeedInterval = pickArraySpeed(incTypeSpeed)[presSpeedIntervalIter] * multiplier;
    }
    else{
        if (rngBin()){
            presSpeedInterval = presVolInterval * multiplier;
        }
        else{
            presSpeedInterval = presVolInterval;
        }
    }



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
                if (rngRx()){
                    incTypeVol=incTypeSpeed;
                }
                else{
                    selectNextVolArray();  
                }
            }

            if (rngRx()){

                repeatV=repeatS;

            }
            else{
                if (!rngRx()){
                    repeatV=1;
                }
                else{
                    repeatV=1;
                    repeatS=1;
                }
                
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
                if (rngRx()){
                    incTypeVol=incTypeSpeed;
                }
                else{
                    selectNextVolArray();  
                }
            }

            if (rngRx()){

                repeatV=repeatS;

            }
            else{
                if (!rngRx()){
                    repeatV=1;
                }
                else{
                    repeatV=1;
                    repeatS=1;
                }
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
                if (rngRx()){
                    incTypeVol=incTypeSpeed;
                }
                else{
                    selectNextVolArray();  
                }
            }

            if (rngRx()){

                repeatV=repeatS;

            }
            else{
                if (!rngRx()){
                    repeatV=1;
                }
                else{
                    repeatV=1;
                    repeatS=1;
                }
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

            if (repeatS===1){
            }
            else{
                if (rngRx()){
                    incTypeSpeed=incTypeVol;
                }
                else{
                    selectNextSpeedArray();  
                }
            }

            if (rngRx()){

                repeatS=repeatV;

            }
            else{
                if (!rngRx()){
                    repeatS=1;
                }
                else{
                    repeatV=1;
                    repeatS=1;
                }
            }
        }
    }

    
    else if (pickArraySpeed(incTypeSpeed).length===5){
        if (presSpeedIntervalIter < 4){
            presSpeedIntervalIter++;
        }
        else{
            presSpeedIntervalIter=0;

            if (repeatS===1){
            }
            else{
                if (rngRx()){
                    incTypeSpeed=incTypeVol;
                }
                else{
                    selectNextSpeedArray();  
                }
            }

            if (rngRx()){

                repeatS=repeatV;

            }
            else{
                if (!rngRx()){
                    repeatS=1;
                }
                else{
                    repeatV=1;
                    repeatS=1;
                }
            }
        }
    }

    else if (pickArraySpeed(incTypeSpeed).length===4){
        if (presSpeedIntervalIter < 3){
            presSpeedIntervalIter++;
        }
        else{
            presSpeedIntervalIter=0;

            if (repeatS===1){
            }
            else{
                if (rngRx()){
                    incTypeSpeed=incTypeVol;
                }
                else{
                    selectNextSpeedArray();  
                }
            }

            if (rngRx()){

                repeatS=repeatV;

            }
            else{
                if (!rngRx()){
                    repeatS=1;
                }
                else{
                    repeatV=1;
                    repeatS=1;
                }
            }
        }
    }



    
}


function eitherVol(){
    eitherVolPlain();


}


function eitherSpeed(){
    eitherSpeedPlain();


}

function eitherVolPlain(){
    decide13();
}

function eitherSpeedPlain(){
    decide13();
}

function runner(){
    const songAudio = new Audio(songPath);
    
    // set initial vol and speed intervals
    redefineVolInterval();
    redefineSpeedInterval();

    songAudio.play(); // begin playing song

    // set volumes and speeds for initialization
    advanceVolume();
    advanceSpeed();



    function advanceVolume(){


        // rngWhich
        let rngWhich=rngs[rngIter];
        rngIter++;

        setTimeout(function(){
            songAudio.volume = randomForVolVal;
            volIntervalIter++;
            advanceVolume();
        }, interDuration * volInterval * 1000);
        nextVolIntervalIter();
        redefineVolInterval();
        volInterval = presVolInterval;


        if (rngRx()){
            if (rngBin()){
                randomForVolVal=randomForVolVal;
                eitherVolPlain();
            }
            else{
                randomForVolVal = randomForSpeedVal/2;
                eitherVolPlain();
            }
        }
           else{
           rngIter++;
           let multVal=0;
            let rngDet=rngBin();
            if (rngDet===0){
              multVal=.7143;
            }
            else {
              multVal=1;
            } 
          if (rngWhich<(1/3)){
             
            let rngDecider=rngBin();

            let dp1=0, dp2=0, dp3=0, dp4=0, rngVS1=0;

              // vector is same size grouping
              dp1 = multVolArr1[randomsForVol1[randomsForVolIter]] * multVolArr2[randomsForVol2[randomsForVolIter]];
              dp2 = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]] * multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
              dp3 = dp1 + dp2;
              
          
              dp1 = multVolArr1[randomsForVol1[randomsForVolIter]] * multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]];
              dp2 = multVolArr2[randomsForVol2[randomsForVolIter]] * multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
              dp4 = dp1 + dp2;
              if (rngDecider===0){
                
                if (rngBin() === 0){
                    if (rngBin()===0){
                        if (rngBin()===0){
                            if (multVal===.7143){
                                rngVS1=(dp3**multVal)*(.62/1.5947) * multVal;
                            }
                            else{
                                rngVS1=dp3*(.62/1.922) * multVal;
                            }
                        }
                        else{
                            rngVS1=dp3*(.62/1.922) * multVal;
                        }
                    }
                    else{
                        rngVS1=((dp3**(1/3)+dp3**(1/2)+dp3**(1/4))/3)*(.62/1.269) * multVal;
                    }
                }
                else {
                    if (rngBin()===0){
                        if (rngBin()===0){
                            if (multVal===.7143){
                                rngVS1=(dp4**multVal)*(.62/1.3598) * multVal;
                            }
                            else{
                                rngVS1=dp4*(.62/1.5377) * multVal;
                            }
                        }
                        else{
                            rngVS1=dp4*(.62/1.5377) * multVal;

                        }
                    }
                    else{
                        rngVS1=((dp4**(1/3)+dp4**(1/2)+dp4**(1/4))/3)*(.62/1.169) * multVal;
                    }
                }
              }
              else{
                let diff1=0, diff2=0, diff3=0, diff4=0, diffTotal=0;

                diff1 = multVolArr1[randomsForVol1[randomsForVolIter]] - multVolArr2[randomsForVol2[randomsForVolIter]];
                diff2 = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]] - multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
    
                diff3 = multVolArr1[randomsForVol1[randomsForVolIter]] - multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]];
                diff4 = multVolArr2[randomsForVol2[randomsForVolIter]] - multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
                
                let diffT = 0;
                diffT=(diff1**2 + diff2**2 + diff3**2 + diff4**2);

                diffT = ((diffT**(1/2) + diffT**(1/3) + diffT**(1/4))/3)/1.23 * .62 * multVal;

                rngVS1 = diffT;
              }
              randomForVolVal = rngVS1;
              eitherVolPlain();

            }
            
        else if(rngWhich<(2/3)){
            randomForVolVal = multVolArr1[randomsForVol1[randomsForVolIter]]*multVal;
            eitherVol();
        }
        else{
            randomForVolVal = multVolArr2[randomsForVol2[randomsForVolIter]]*multVal;
            eitherVolPlain();
        }
        randomsForVolIter++;
    }

          

    }

    function advanceSpeed(){
          let rngWhich=rngs[rngIter];
          rngIter++;
          setTimeout(function(){
              songAudio.playbackRate = randomForSpeedVal;
              speedIntervalIter++;
              advanceSpeed();
          }, interDuration * speedInterval * 1000);
          nextSpeedIntervalIter();
          redefineSpeedInterval();
          speedInterval = presSpeedInterval;

          if (rngRx()){
            if (rngBin()){
                randomForSpeedVal=randomForSpeedVal;
                eitherSpeedPlain();
            }
            else{
                randomForSpeedVal = randomForVolVal*2;
                eitherSpeedPlain();
            }
        }
            else{

            rngIter++;
            let multVal=0;
            let rngDet=rngTrio();
            if (rngDet===0){
              multVal=.7143;
            }
            else if (rngDet===1){
              multVal=7/5;
            } 
            else{
                multVal=1;
            }
          if (rngWhich<(1/3)){
            
            let rngDecider=rngBin();

            let dp1=0, dp2=0, dp3=0, dp4=0, rngVS1=0;
          
            // vector is same size grouping
            dp1 = multVolArr1[randomsForVol1[randomsForVolIter]] * multVolArr2[randomsForVol2[randomsForVolIter]];
            dp2 = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]] * multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
            dp3 = dp1 + dp2;
            
        
            dp1 = multVolArr1[randomsForVol1[randomsForVolIter]] * multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]];
            dp2 = multVolArr2[randomsForVol2[randomsForVolIter]] * multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
            dp4 = dp1 + dp2;
              

            if (rngDecider===0){
                
                if (rngBin() === 0){
                    if (rngBin()===0){
                        if (rngBin()===0){
                            if (multVal===.7143){
                                rngVS1=(dp3**multVal)*(1.24/1.5947) * multVal;
                            }
                            else{
                                rngVS1=dp3*(1.24/1.922) * multVal;
                            }
                        }
                        else{
                            rngVS1=dp3*(1.24/1.922) * multVal;
                        }
                    }
                    else{
                        rngVS1=((dp3**(1/3)+dp3**(1/2)+dp3**(1/4))/3)*(1.24/1.269) * multVal;
                    }
                }
                else {
                    if (rngBin()===0){
                        if (rngBin()===0){
                            if (multVal===.7143){
                                rngVS1=(dp4**multVal)*(1.24/1.3598) * multVal;
                            }
                            else{
                                rngVS1=dp4*(1.24/1.5377) * multVal;
                            }
                        }
                        else{
                            rngVS1=dp4*(1.24/1.5377) * multVal;

                        }
                    }
                    else{
                        rngVS1=((dp4**(1/3)+dp4**(1/2)+dp4**(1/4))/3)*(1.24/1.169) * multVal;
                    }
                }
              }

              else{
                let diff1=0, diff2=0, diff3=0, diff4=0, diffTotal=0;

                diff1 = multVolArr1[randomsForVol1[randomsForVolIter]] - multVolArr2[randomsForVol2[randomsForVolIter]];
                diff2 = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]] - multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
    
                diff3 = multVolArr1[randomsForVol1[randomsForVolIter]] - multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]];
                diff4 = multVolArr2[randomsForVol2[randomsForVolIter]] - multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]];
                
                let diffT = 0;
                diffT=(diff1**2 + diff2**2 + diff3**2 + diff4**2);

                diffT = ((diffT**(1/2) + diffT**(1/3) + diffT**(1/4))/3)/1.23 * 1.24 * multVal;



    
                rngVS1 = diffT;

              } 
              randomForSpeedVal = rngVS1;
              eitherSpeedPlain();
            }
        else if(rngWhich<(2/3)){
            randomForSpeedVal = multSpeedArr1[randomsForSpeed1[randomsForSpeedIter]]*multVal;
            eitherSpeed();
        }
        else{
            randomForSpeedVal = multSpeedArr2[randomsForSpeed2[randomsForSpeedIter]]*multVal;
            eitherSpeedPlain();
        }
        randomsForSpeedIter++;
            
    }

          
    
}
}
