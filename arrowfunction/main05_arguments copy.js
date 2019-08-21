/* 
    화살표함수에 없는 3가지

    1. 함수이름
    2. this
    3. arguments
*/
const myFunc = function(){
    console.log(arguments);
}
const myFunc2 = ()=>{
    if(arguments){
        console.log(arguments);
    }
}

// myFunc(1,2,3,4);
myFunc2(1,2,3,4);