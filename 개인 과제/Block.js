
// Block객체 만들기 
export class Block {
    constructor(x,y) {
        // 블럭의 x,y좌표 값
        this.x = x;
        this.y = y;
        // 블럭의 너비,높이 값
        this.width = 50;
        this.height = 20;
        // 블럭 외곽선 색
        this.strokeColor = "#FFFAFA";
        this.lineWidth = 2;
        // 블럭 색 
        this.fillColor = "#59CD90";
    }

    // 캔버스에 그려주는 메소드 (App객체의 ctx 받아옴)
    draw(ctx) {
        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = this.lineWidth;
        ctx.fillStyle = this.fillColor;
        ctx.beginPath();
        ctx.strokeRect(this.x,this.y,this.width,this.height);
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}