// 모든 컴포넌트의 부보가 될 클래스  
export default class Component {
    target;
    props;
    state;
    // target에는 각각의 요소들을 지정해줌 
    // props에는 배열등의 값을 담아줌 
    // new 객체이름 => constructor 호출됨
    constructor (target, props) {
        this.target = target;
        this.props = props;
        // 메소드 호출
        this.setup();
        this.render();
        this.setEvent();
    }
    // 각각의 target의 innerHTML에 리턴해주는 메소드
    template(){return "";}
    // 화면에 나타내주는 메소드 
    render(){
        this.target.innerHTML = this.template();
        this.mounted();
    }
    // 매개변수 값을 받아서 현재 state를 나타내주는 메소드
    setState(newState) {
        this.state = {...this.state, ...newState};
        this.render();
    }
    setup(){};
    mounted(){};
    setEvent(){};
}
