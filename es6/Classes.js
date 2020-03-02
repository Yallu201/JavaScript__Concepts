/**
 * 1. class 표현식
 * 2. class 선언
 */

//////////////////////////////
//  1. class 선언
//////////////////////////////
class Rectangle {
    constructor(h, w) {
        this.h = h;
        this.w = w;
    }

    /**
     * Class는 Hositing이 일어나지 않습니다.
     * 즉, 항상 먼저 Class선언을 해야 Class를 이용할 수 있습니다.
     * ( Function은 Hoisting이 발생)
     */
}

//////////////////////////////
//  2. class 표현식
//////////////////////////////
// unnamed
let Rectangle = class {
    constructor(h, w) {
        this.h = h;
        this.w = w;
    }
};
console.log(Rectangle2.name);

// named
let Rectangle = class Rectangle2 {
    constructor(h, w) {
        this.h = h;
        this.w = w;
    }
};
console.log(Rectangle.name);
