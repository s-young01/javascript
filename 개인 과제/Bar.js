
// Bar객체 만들기
export class Bar {
    constructor(x,canvasWidth, canvasHeight) {
        // 바의 너비,높이 값 
        this.width = 120;
        this.height = 20;
        // 바의 x,y 좌표 값
        this.x = x;
        this.y = canvasHeight - this.height * 2.5; // 바닥에서 조금 띄워주기 !
        // 바의 속도(시작)값 
        this.speed = 0;
        this.canvasWidth = canvasWidth; // canvasWidth = this.canvas.width
        // 바의 색
        this.fillColor = "#EE6352"; 
    }
    // 캔버스에 그려주는 메소드 (App객체의 ctx받아옴)
    draw(ctx) {
        // 바의 x좌표는 움직이는 속도만큼 더해준다
        this.x += this.speed;
        // 왼쪽으로 끝 없이 가는 거 막기 !
        // x좌표가 0보다 작을 때 
        if(this.x < 0) {
            // x좌표는 0이 됨
            this.x = 0;
        }
        // 오른쪽으로 끝 없이 가는 거 막기 !
        // 바의 x좌표 값과 바의 너비 값을 더한게 캔버스 너비보다 클 때
        if(this.x + this.width > this.canvasWidth) {
            // 바의 x좌표 값이 캔버스 너비에서 바의 너비 값을 뺀다 
            this.x = this.canvasWidth - this.width;
        }
        ctx.fillStyle = this.fillColor;
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}