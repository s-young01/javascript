//  부모 클래스 생성
export default class Component {
    target;
    props;
    state;
    constructor(target, props) {
        this.target = target;
        this.props = props;
        this.setup();
        this.render();
        this.setEvent();
    }
    // 메소드 
    setup(){}
    template(){ return ""; }
    mounted(){}
    setEvent(){}

    // 화면에 나타내기 
    // ! render은 부모 클래스에만 있음 !
    render() {
        this.target.innerHTML = this.template();
        this.mounted();
    }
    // 이벤트 발생 시 호출
    setState(newState) {
        this.state = {...this.state, ...newState};
        this.render();
    }
    
}