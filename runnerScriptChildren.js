const songPath = 'summer.mp3'; //  summer was 1st
let duration1=490;


let volumeLog=0;
let speedLog=0;


const multVolArr1 = [.385, .405, .415, .435 ,.445, .465, .475, .485, .49, .5, .51, .515, .525, .535, .555, .565, .585, .595, .615];
const multSpeedArr1 = [.77, .81, .83, .87, .89, .93, .95, .97, .98, 1, 1.02, 1.03, 1.05, 1.07, 1.11, 1.13, 1.17, 1.19, 1.23]; // 5,7,1,11 off of +-.13

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
    y=y.slice(2,5);
    return parseInt(y);
}

function generateRandomNumber() {
    // Ensure that min and max are integers
    min = 0;
    max = 999;
  
    // Create a typed array to store the random values
    const array = new Uint32Array(1);
  
    // Fill the array with a cryptographically secure random value
    window.crypto.getRandomValues(array);
  
    // Convert the random value to the desired range
    const randomNumber = min + (array[0] % (max - min + 1));
  
    return randomNumber/1000;
  }
  

for (let i=0; i<250000; i++){
    rngs.push(truncate(generateRandomNumber()));
}

const randomsForVol1=[];
const randomsForSpeed1=[];

const randomsForVol2=[];
const randomsForSpeed2=[];

for (let i=0; i<7000; i++){
    randomsForVol1.push(pickAmong19());
    randomsForSpeed1.push(pickAmong19());
    randomsForVol2.push(pickAmong31());
    randomsForSpeed2.push(pickAmong31());
}


function modInterDuration(){
    let mVal=0;
    let mArray=[];

        let rngPick=Math.floor(rngs[rngIter]/1000 *3);
        rngIter++;

        if (rngPick===0){
            mArray=[.05, .07, .11, .13, .17, .19, .23, .29, .31, .37, .41, .43, .47, .53];
            mVal=14;
        }
        else if (rngPick===1){
            mArray=[.05, .07, .11, .13, .17, .19, .23, .29, .31, .37, .41, .43, .47, .53, .59, .61, .67];
            mVal=17;
        }
        else{
            mArray=[.05, .07, .11, .13, .17, .19, .23, .29, .31, .37, .41, .43];
            mVal=12;
        }
        

        interDuration = mArray[Math.floor(rngs[rngIter]/1000 *mVal)];
        rngIter++;

}




function rngBin(){
    const val = Math.floor(rngs[rngIter]/1000 *2);
    rngIter++;
    return val;
}
function rngTrio(){
    const val = Math.floor(rngs[rngIter]/1000 *3);
    rngIter++;
    return val;
}
function rngQuat(){
    const val = Math.floor(rngs[rngIter]/1000 *4);
    rngIter++;
    return val;
}
function rngPent(){
    const val = Math.floor(rngs[rngIter]/1000 *5);
    rngIter++;
    return val;
}
function rngHex(){
    const val = Math.floor(rngs[rngIter]/1000 *6);
    rngIter++;
    return val;
}
function rngSep(){
    const val = Math.floor(rngs[rngIter]/1000 *7);
    rngIter++;
    return val;
}
function rngOct(){
    const val = Math.floor(rngs[rngIter]/1000 *8);
    rngIter++;
    return val;
}
function rng10(){
    const val = Math.floor(rngs[rngIter]/1000 *10);
    rngIter++;
    return val;
}
function rng14(){
    const val = Math.floor(rngs[rngIter]/1000 *14);
    rngIter++;
    return val;
}
function rng16(){
    const val = Math.floor(rngs[rngIter]/1000 *16);
    rngIter++;
    return val;
}
function rng12(){
    const val = Math.floor(rngs[rngIter]/1000 *12);
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
    if (rngs[rngIter]/1000 *7>2){
        rngIter++;
        return 1;
    }
    else{
        rngIter++;
        return 0;
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
    if (where===0){
        possibles=possibles.slice(1);
    }
    else if (where<11){
        possibles=possibles.slice(0,where) + possibles.slice(where+1);
    }
    else{
        possibles=possibles.slice(0,11);
    }

    const rngSelector=Math.floor(rngs[rngIter]/1000 *11);
    rngIter++;
    incTypeVol=possibles[rngSelector];
}

function selectNextSpeedArray(presSpeedInc){
    let possibles=[0,1,2,3,4,5,6,7,8,9,10,11];
    let where=possibles.indexOf(presSpeedInc);
    if (where===0){
        possibles=possibles.slice(1);
    }
    else if (where<11){
        possibles=possibles.slice(0,where) + possibles.slice(where+1);
    }
    else{
        possibles=possibles.slice(0,11);
    }

    const rngSelector=Math.floor(rngs[rngIter]/1000 *11);
    rngIter++;
    incTypeSpeed=possibles[rngSelector];
}






const primeRaw = [17, 13, 11, 7, 5, 3, 1, 0, 1, 3, 5, 7, 11, 13, 17];








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
    let arrayHold=pickArrayVol(Math.floor(rngs[rngIter]/1000 *12));
    rngIter++;
    let randomInt=0;

    if (rngR()){
        randomInt=Math.floor(arrayHold[Math.floor(rngs[rngIter]/1000 *arrayHold.length)]);
        rngIter++;
    }
    else{
        let range1=[2,3,4,2.5,3.5,5];
        randomInt=range1[Math.floor(rngs[rngIter]/1000 *6)];
        rngIter++;
    }

    



    if (!rngRx()){
        multiplier=1;
    }
    else{
        multiplier=randomInt;
    }    




    if (!rngRx()){
        if (rngR()){
            multiplier=1/multiplier;
        }
    }


    if (!rngRx()){
        if (rngR()){
            multiplier=multiplier*5/7;
        }
        else{
            multiplier=multiplier*7/5;
        }
    }


    if (!rngRx()){
        if (rngR()){
            multiplier=1/multiplier;
        }
    }






        
    if (!rngRx()){}
        else{
            let rngTr=rngTrio();
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
        }
        
        


    
    


    

    if (!rngRx()){
        if (rngR()){
            multiplier=1/multiplier;
        }
    }


    if (!rngRx()){
        if (rngR()){
            multiplier=multiplier*5/7;
        }
        else{
            multiplier=multiplier*7/5;
        }
    }


    if (!rngRx()){
        if (rngR()){
            multiplier=1/multiplier;
        }
    }

    if (!rngRx()){
        multiplier=1;
    }

    if (rngRx()){
        presVolInterval = pickArrayVol(incTypeVol)[presVolIntervalIter] * multiplier;
    }
    else{
        if (rngR()){
            presVolInterval = presSpeedInterval * multiplier;
        }
        else{
            presVolInterval = presSpeedInterval;
        }
    }
}

function redefineSpeedInterval(){
    let multiplier=0;
    let arrayHold=pickArrayVol(Math.floor(rngs[rngIter]/1000 *12));
    rngIter++;
    let randomInt=0;

    if (rngR()){
        randomInt=Math.floor(arrayHold[Math.floor(rngs[rngIter]/1000 *arrayHold.length)]);
        rngIter++;
    }
    else{
        let range1=[2,3,4,2.5,3.5,5];
        randomInt=range1[Math.floor(rngs[rngIter]/1000 *6)];
        rngIter++;
    }
    


    if (!rngRx()){
        multiplier=1;
    }
    else{
        multiplier=randomInt;
    }    
    
    
    if (!rngRx()){
        if (rngR()){
            multiplier=1/multiplier;
        }
    }


    if (!rngRx()){
        if (rngR()){
            multiplier=multiplier*5/7;
        }
        else{
            multiplier=multiplier*7/5;
        }
    }


    if (!rngRx()){
        if (rngR()){
            multiplier=1/multiplier;
        }
    }

    if (!rngRx()){}
        else{
            let rngTr=rngTrio();
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
        }

   
    if (!rngRx()){
        if (rngR()){
            multiplier=1/multiplier;
        }
    }


    if (!rngRx()){
        if (rngR()){
            multiplier=multiplier*5/7;
        }
        else{
            multiplier=multiplier*7/5;
        }
    }


    if (!rngRx()){
        if (rngR()){
            multiplier=1/multiplier;
        }
    }

    if (!rngRx()){
        multiplier=1;
    }


    if (rngRx()){
        presSpeedInterval = pickArraySpeed(incTypeSpeed)[presSpeedIntervalIter] * multiplier;
    }
    else{
        if (rngR()){
            presSpeedInterval = presVolInterval * multiplier;
        }
        else{
            presSpeedInterval = presVolInterval;
        }
    }



}


function pickAmong19(){
    const val = Math.floor(rngs[rngIter]/1000 * 19);
    rngIter++;
    return val;
}

function pickAmong31(){
    const val = Math.floor(rngs[rngIter]/1000 * 31);
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
                if (!rngRx()){
                    incTypeVol=incTypeSpeed;
                }
                else{
                    selectNextVolArray();  
                }
            }

            

            if (rngR()){
                if (rngR()){
                    repeatV=1;
                }
                else{
                    if (rngR()){
                        repeatV=repeatS;
                    }
                    else{
                        repeatV=1;
                        repeatS=1;
                    }
                }
            }
            else{}

            if (!rngRx()){
                if (rngRx()){
                    repeatV=0;
                }
                else{
                    repeatV=0;
                    repeatS=0;
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
                if (!rngRx()){
                    incTypeVol=incTypeSpeed;
                }
                else{
                    selectNextVolArray();  
                }
            }

            if (rngR()){
                if (rngR()){
                    repeatV=1;
                }
                else{
                    if (rngR()){
                        repeatV=repeatS;
                    }
                    else{
                        repeatV=1;
                        repeatS=1;
                    }
                }
            }
            else{}

            if (!rngRx()){
                if (rngRx()){
                    repeatV=0;
                }
                else{
                    repeatV=0;
                    repeatS=0;
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
                if (!rngRx()){
                    incTypeVol=incTypeSpeed;
                }
                else{
                    selectNextVolArray();  
                }
            }

            if (rngR()){
                if (rngR()){
                    repeatV=1;
                }
                else{
                    if (rngR()){
                        repeatV=repeatS;
                    }
                    else{
                        repeatV=1;
                        repeatS=1;
                    }
                }
            }
            else{}

            if (!rngRx()){
                if (rngRx()){
                    repeatV=0;
                }
                else{
                    repeatV=0;
                    repeatS=0;
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
                if (!rngRx()){
                    incTypeSpeed=incTypeVol;
                }
                else{
                    selectNextSpeedArray();  
                }
            }

            
            if (rngR()){
                if (rngR()){
                    repeatS=1;
                }
                else{
                    if (rngR()){
                        repeatS=repeatV;
                    }
                    else{
                        repeatV=1;
                        repeatS=1;
                    }
                }
            }
            else{}
            if (!rngRx()){
                if (rngRx()){
                    repeatS=0;
                }
                else{
                    repeatV=0;
                    repeatS=0;
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
                if (!rngRx()){
                    incTypeSpeed=incTypeVol;
                }
                else{
                    selectNextSpeedArray();  
                }
            }


            if (rngR()){
                if (rngR()){
                    repeatS=1;
                }
                else{
                    if (rngR()){
                        repeatS=repeatV;
                    }
                    else{
                        repeatV=1;
                        repeatS=1;
                    }
                }
            }
            else{}
            if (!rngRx()){
                if (rngRx()){
                    repeatS=0;
                }
                else{
                    repeatV=0;
                    repeatS=0;
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
                if (!rngRx()){
                    incTypeSpeed=incTypeVol;
                }
                else{
                    selectNextSpeedArray();  
                }
            }


            if (rngR()){
                if (rngR()){
                    repeatS=1;
                }
                else{
                    if (rngR()){
                        repeatS=repeatV;
                    }
                    else{
                        repeatV=1;
                        repeatS=1;
                    }
                }
            }
            else{}
            if (!rngRx()){
                if (rngRx()){
                    repeatS=0;
                }
                else{
                    repeatV=0;
                    repeatS=0;
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
    if (!rngRx()){
        modInterDuration();
    }
}

function eitherSpeedPlain(){
    if (!rngRx()){
        modInterDuration();
    }
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

            if (volumeLog<duration1-2){
                av();
            }
            else{
                songAudio.pause();
            }
        


        function av(){

        

        // rngWhich
        let rngWhich=rngs[rngIter]/1000;
        rngIter++;

        setTimeout(function(){
            songAudio.volume = randomForVolVal;
            volIntervalIter++;
            advanceVolume();
        }, interDuration * volInterval * 1000);
        volumeLog+=interDuration*volInterval;
        volInterval = presVolInterval;
        let multVal=0;
            let rngDet=rngBin();
            if (rngDet===0){
              multVal=.7143;
            }
            else {
              multVal=1;
            } 

        if (!rngRx()){
            if (rngR()){
                if (rngR()){
                    randomForVolVal=randomForVolVal;
                    
                    eitherVolPlain();
                    
                }
                else{
                    randomForVolVal=randomForVolVal * multVal;
                    
                    eitherVolPlain();
                    
                }
            }
            else{
                if (rngR()){
                    randomForVolVal = randomForSpeedVal/2;
                    
                    eitherVolPlain();
                    
                }
                else{
                    randomForVolVal = randomForSpeedVal/2 * multVal;
                    
                    eitherVolPlain();
                    
                }
            }
            if (rngRx()){
                nextVolIntervalIter();
                redefineVolInterval();
            }
                

        }
           else{
           
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
                        let multVal2=0;
                        let multVal2Rng=Math.floor(rngs[rngIter]*2);
                        if (multVal2Rng===0){
                            multVal2=1;
                        }
                        else{
                            multVal2=.7143;
                        }
                        if (rngR()){
                            if (multVal===.7143){
                                rngVS1=(dp3**multVal)*(.62/1.5947) * multVal2;
                            }
                            else{
                                rngVS1=(dp3)*(.62/1.922) * multVal2;
                            }
                        }
                        else{
                            if (multVal2===.7143){
                                rngVS1=(dp3**multVal2)*(.62/1.5947) * multVal;
                            }
                            else{
                                rngVS1=(dp3)*(.62/1.922) * multVal;
                            }
                        }

                    }
                    else{
                        rngVS1=((dp3**(1/3)+dp3**(1/2)+dp3**(1/4))/3)*(.62/1.269) * multVal;
                    }
                }
                else {
                    if (rngR()){
                        let multVal2=0;
                        let multVal2Rng=Math.floor(rngs[rngIter]*2);
                        if (multVal2Rng===0){
                            multVal2=1;
                        }
                        else{
                            multVal2=.7143;
                        }
                        if (rngR()){
                            if (multVal===.7143){
                                rngVS1=(dp4**multVal)*(.62/1.3598) * multVal2;
                            }
                            else{
                                rngVS1=(dp4)*(.62/1.5377) * multVal2;
                            }
                        }
                        else{
                            if (multVal2===.7143){
                                rngVS1=(dp4*multVal2)*(.62/1.3598) * multVal;
                            }
                            else{
                                rngVS1=(dp4)*(.62/1.5377) * multVal;
                            }
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


        if (rngR()){
            if (rngRx()){
                nextVolIntervalIter();
                redefineVolInterval();
            }
            if (rngRx()){
                randomsForVolIter++;
            }
        }
        else{
            if (rngRx()){
                nextVolIntervalIter();
                redefineVolInterval();
                randomsForVolIter++;
            }
        }
        


    }

          
}
    }

    function advanceSpeed(){

            if (speedLog<duration1-2){
                as();
            }
            else{
                songAudio.pause();
            }
        

        function as(){



          let rngWhich=rngs[rngIter]/1000;
          rngIter++;
          setTimeout(function(){
              songAudio.playbackRate = randomForSpeedVal;
              speedIntervalIter++;
              advanceSpeed();
          }, interDuration * speedInterval * 1000);
          speedLog+=interDuration*speedInterval;

          speedInterval = presSpeedInterval;
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
          if (!rngRx()){
            if (rngR()){
                if (rngR()){
                    randomForSpeedVal=randomForSpeedVal;
    
                    eitherSpeedPlain();
                    
                }
                else{
                    randomForSpeedVal=randomForSpeedVal * multVal;
                    
                    eitherSpeedPlain();
                    
                }
            }
            else{
                if (rngR()){
                    randomForSpeedVal = randomForVolVal*2;
                    
                    eitherSpeedPlain();
                    
                }
                else{
                    randomForSpeedVal = randomForVolVal*2 * multVal;
                    
                    eitherSpeedPlain();
                    
                }
            }
            if (rngRx()){
                nextSpeedIntervalIter();
                redefineSpeedInterval();
            }

        }
            else{
            
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
                        let multVal2=0;
                        let multVal2Rng=Math.floor(rngs[rngIter]*3);
                        if (multVal2Rng===0){
                            multVal2=1;
                        }
                        else if (multVal2Rng===1){
                            multVal2=.7143;
                        }
                        else{
                            multVal2=7/5;
                        }
                        if (rngR()){
                            if (multVal===.7143){
                                rngVS1=(dp3**multVal)*(1.24/1.5947) * multVal2;
                            }
                            else{
                                rngVS1=(dp3)*(1.24/1.922) * multVal2;
                            }
                        }
                        else{
                            if (multVal2===.7143){
                                rngVS1=(dp3**multVal2)*(1.24/1.5947) * multVal;
                            }
                            else{
                                rngVS1=(dp3)*(1.24/1.922) * multVal;
                            }
                        }

                    }
                    else{
                        rngVS1=((dp3**(1/3)+dp3**(1/2)+dp3**(1/4))/3)*(1.24/1.269) * multVal;
                    }
                }
                else {
                    if (rngR()){
                        let multVal2=0;
                        let multVal2Rng=Math.floor(rngs[rngIter]*3);
                        if (multVal2Rng===0){
                            multVal2=1;
                        }
                        else if (multVal2Rng===1){
                            multVal2=.7143;
                        }
                        else{
                            multVal2=7/5;
                        }
                        if (rngR()){
                            if (multVal===.7143){
                                rngVS1=(dp4**multVal)*(1.24/1.3598) * multVal2;
                            }
                            else{
                                rngVS1=(dp4)*(1.24/1.5377) * multVal2;
                            }
                        }
                        else{
                            if (multVal2===.7143){
                                rngVS1=(dp4*multVal2)*(1.24/1.3598) * multVal;
                            }
                            else{
                                rngVS1=(dp4)*(1.24/1.5377) * multVal;
                            }
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


        if (rngR()){
            if (rngRx()){
                nextSpeedIntervalIter();
                redefineSpeedInterval();
            }
            if (rngRx()){
                randomsForSpeedIter++;
            }
        }
        else{
            if (rngRx()){
                nextSpeedIntervalIter();
                redefineSpeedInterval();
                randomsForSpeedIter++;
            }
        }
        



            
    }

          
}
}
}
