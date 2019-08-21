/* 
    화살표함수에 없는 3가지

    1. 함수이름
    2. this
    3. arguments
*/

const myObj = {
    name:"yallu",
    getName:function(){
        // this === myObj
        return this.name;
    }
}