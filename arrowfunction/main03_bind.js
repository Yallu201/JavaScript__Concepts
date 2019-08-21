/* 
    화살표함수에 없는 3가지

    1. 함수이름
    2. this
    3. arguments
*/
const btn = document.getElementById("btn");
const myObj = {
    name:"yallu",
    getName:function(){//.....................................1번 함수
        // 1번함수안에서의 this === myObj
        console.log(this.name);
        btn.addEventListener("click",
            function(){// ....................................2번 함수
                console.log(this.name);
            }
        ).bind(this);
        // 본래 2번함수의 this는 btn 이다.
        // 그러나 .bind(this) 를 통해 외부의 this를 사용할 수 있게끔 하였다.
    }
}