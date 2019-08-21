/* 
    화살표함수에 없는 3가지

    1. 함수이름
    2. this
    3. arguments
*/
function outer(){
    const myFunc2 = ()=>{
        console.log(arguments); // Scope Chain을 통해 outer의 arguments를 참조함
    }
    myFunc2(1,2,3,4);   
}

outer(1,2,3,4);