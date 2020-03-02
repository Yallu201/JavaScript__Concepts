/**
 * 액션(Action)
 *
 * 상태에 어떤 변화가 필요하게 될 때 발생한다.
 * 하나의 객체로 표현할 수 있으며 형식이 존재한다.
 *
 */
{
    type: "TOGGLE_VALUE";
    // type 필드는 필수이며, 이외는 custom 가능하다.
    data: {
        id: 0;
        text: "study redux";
    }
}
