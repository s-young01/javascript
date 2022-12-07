// 컴포넌트(부모) 클래스 선언
export default class Component {
    // 객체가 가지는 필드
    $target;
    $state;
    // 생성자
    constructor(target) {
        this.target = target; //document.querySelector("#app")
        this.setup();
        this.render();
    }
    // 객체가 가지는 메소드
    setup(){}
    // template() 역할 : 화면 구현 리턴
    template(){return "";}
    // setEvent() 역할 : 이벤트 연결
    setEvent(){}
    // render() 역할 : 화면에 나타내기 / DOM요소 이벤트 연결 (호출해야 변경된 화면 볼 수 있다)
    render() {
        this.target.innerHTML = this.template();
        // 이벤트 연결 함수 호출
        this.setEvent();
    }
    setState(newState){
        // 두 변수의 key가 똑같을 때 원본은 유지하고 원본에서 변경되는 key만 덮어씌운다
        this.state = {...this.state, ...newState};
        // 상태가 바뀌면 다시 화면에 나타내기 호출
        this.render();
    }
}