/* 
    화살표함수에 없는 3가지

    1. 함수이름
    2. this
    3. arguments
*/
const myFunc = (...args)=>{
     /* 
        ES6 문법 : 
            ...arrayName 을 () 안에 작성하면
            인자로 들어온 값들을 arrayName의 이름을 갖는 배열로
            함수 안에서 사용할 수 있게 만든다.
     */
    console.log(args);
    }
    myFunc(1,2,3,4);   
