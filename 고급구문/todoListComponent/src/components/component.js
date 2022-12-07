// component (부모) 클래스 생성
export default class Component {
    target;
    props;
    state;
    constructor(target, props) {
        this.target = target;
        this.props = props;
        this.setup();
        this.render(); // 먼저 화면에 나타낸다 
        this.setEvent(); // 그다음에 이벤트 연결 호출 ! (이벤트 연결부터 x)
    }
    // 메소드 생성
    setup(){} //맨 처음 상태 나타내주는 친구 
    template(){ return ""; } // 화면에 나타나게 해주는 친구 
    mounted(){} // 모든 요소들을 연결 시켜주는 친구 
    setEvent(){} // 이벤트 연결 시켜주는 친구  

    // 화면에 나타내기
    // render은 부모 클래스에만 있음 !
    render(){
        this.target.innerHTML = this.template(); // this.target => App객체의 target : document.querySelector("#app")
        this.mounted(); // render후 mounted호출
    }
    
    // 이벤트가 발생했을 때 호출 
    // 매개변수로 값을 받아서 현재 state의 값을 변경해줌 
    setState(newState){
        this.state = {...this.state, ...newState}; // this.state는 App객체 
        // 기존 배열에 바뀐 배열의 값을 덮어씌움 
        // 바뀐 값을 화면에 다시 나타내기 
        this.render();
        console.log(this.state);
    }
}