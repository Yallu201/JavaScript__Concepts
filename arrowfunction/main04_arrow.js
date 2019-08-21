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
            // function(){// ..................................2번 함수
            //     console.log(this.name);
            // }
            ()=>{//............................................3번 함수
                console.log(this.name);
            }
        ).bind(this);
        // 3번 화살표함수의 this는 존재하지 않는다.
        // 따라서 Scope Chain을 따라 1번 함수의 this로 접근하여 사용한다.
    }
}