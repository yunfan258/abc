// var c = document.getElementById("myCanvas");
// var cxt = c.getContext("2d");
// cxt.fillStyle = "peachpuff"; //填充颜色
// cxt.fillRect(0, 0, 500, 550); //画已填充颜色的矩形
// for (let i = 50; i <= 500; i += 50) { //画横线
//     cxt.moveTo(50, i);
//     cxt.lineTo(450, i);
// }
// for (let i = 50; i <= 450; i += 50) { //画竖线
//     if (i == 50 || i == 450) {
//         cxt.moveTo(i, 50);
//         cxt.lineTo(i, 500);
//     } else {
//         cxt.moveTo(i, 50);
//         cxt.lineTo(i, 250);
//         cxt.moveTo(i, 300);
//         cxt.lineTo(i, 500);
//     }
// }
// cxt.stroke();
// cxt.moveTo(200, 50);
// cxt.lineTo(300, 150);
// cxt.moveTo(200, 150);
// cxt.lineTo(300, 50);
// cxt.moveTo(200, 400);
// cxt.lineTo(300, 500);
// cxt.moveTo(300, 400);
// cxt.lineTo(200, 500);
// cxt.stroke();

var board = document.querySelector('#board');
for (let i = 0; i < 10; i++) { //十行 //第几行
    for (let j = 0; j < 9; j++) { //九列 //第几列
        var viewContent = document.createElement('div');
        viewContent.className = 'views';
        viewContent.id = 'view' + i + '_' + j;
        viewContent.style.left = j * 50 + 25 + 'px';
        viewContent.style.top = i * 50 + 25 + 'px';
        board.appendChild(viewContent);
    }
}
var now = null;
var nowColor = null;
var Arr = new Array();
for (let m = 0; m < 10; m++) {
    Arr[m] = new Array();
    for (let n = 0; n < 9; n++) {
        Arr[m][n] = document.getElementById('view' + m + '_' + n);
    }
}

function Qi(name, color, left, top) {
    this.qi = document.createElement('div');
    this.qi.className = 'qis';
    this.i = top / 50 - 1;
    this.j = left / 50 - 1;
    this.qi.innerText = name;
    this.qi.style.color = color;


    Arr[this.i][this.j].appendChild(this.qi);

    this.qi.onclick = (e) => {
        if (now == null) {
            this.oEvent = e || event;
            // this.qi.cssText = "box-shadow:0 0 2px 2px white";
            now = this.qi;
            nowColor = color;

            now.style.borderColor = 'white';

            this.oEvent.cancelBubble = true;
        }
    }
}
for (let m = 0; m < 10; m++) {
    for (let n = 0; n < 9; n++) {
        Arr[m][n].onclick = function() {
            if (Arr[m][n].children) {
                if (Arr[m][n].children[0]) {

                    if (Arr[m][n].children[0].style.color == nowColor) {
                        now.style.borderColor = 'black';

                        now = Arr[m][n].children[0];
                        now.style.borderColor = 'white';
                        var tag = 0;
                    } else {
                        if (Arr[m][n].children[0].innerText == '帅') {
                            alert('黑方赢了');
                        }
                        if (Arr[m][n].children[0].innerText == '将') {
                            alert('红方赢了');
                        }
                        Arr[m][n].removeChild(Arr[m][n].children[0]);
                        tag = 1;
                    }


                }
            }
            if (now != null && tag != 0) {
                this.appendChild(now);
                now.style.borderColor = 'black';
                now.style.left = '0px';
                now.style.top = '0px';
                now = null;
            }

        }
    }
}
//创建红方棋子
var redShuai = new Qi('帅', 'red', 250, 50);

var redShi1 = new Qi('仕', 'red', 200, 50);
var redShi2 = new Qi('仕', 'red', 300, 50);

var redXiang1 = new Qi('相', 'red', 150, 50);
var redXiang2 = new Qi('相', 'red', 350, 50);

var redMa1 = new Qi('马', 'red', 100, 50);
var redMa2 = new Qi('马', 'red', 400, 50);

var redChe1 = new Qi('车', 'red', 50, 50);
var redChe2 = new Qi('车', 'red', 450, 50);

var redPao1 = new Qi('炮', 'red', 100, 150);
var redPao2 = new Qi('炮', 'red', 400, 150);

var redBing1 = new Qi('兵', 'red', 50, 200);
var redBing2 = new Qi('兵', 'red', 150, 200);
var redBing3 = new Qi('兵', 'red', 250, 200);
var redBing4 = new Qi('兵', 'red', 350, 200);
var redBing5 = new Qi('兵', 'red', 450, 200);

//创建黑方棋子
var blackJiang = new Qi('将', 'black', 250, 500);

var blackShi1 = new Qi('士', 'black', 200, 500);
var blackShi2 = new Qi('士', 'black', 300, 500);

var blackXiang1 = new Qi('象', 'black', 150, 500);
var blackXiang2 = new Qi('象', 'black', 350, 500);

var blackMa1 = new Qi('馬', 'black', 100, 500);
var blackMa2 = new Qi('馬', 'black', 400, 500);

var blackChe1 = new Qi('車', 'black', 50, 500);
var blackChe2 = new Qi('車', 'black', 450, 500);

var blackPao1 = new Qi('炮', 'black', 100, 400);
var blackPao2 = new Qi('炮', 'black', 400, 400);

var blackZu1 = new Qi('卒', 'black', 50, 350);
var blackZu2 = new Qi('卒', 'black', 150, 350);
var blackZu3 = new Qi('卒', 'black', 250, 350);
var blackZu4 = new Qi('卒', 'black', 350, 350);
var blackZu5 = new Qi('卒', 'black', 450, 350);
// console.log(redShuai.qi);
function isOver() {
    if (redShuai.qi == null) {
        alert('黑方赢了')
    }
    if (blackJiang.qi == null) {
        alert('红方赢了')
    }
}
var guiZeBtn = document.getElementById('guiZeBtn');
var guiZe = document.getElementById('guiZe');
guiZeBtn.onclick = (e) => {
    guiZe.style.display = 'block';
    e.cancelBubble = true;
}
guiZe.onclick = () => {
    guiZe.style.display = 'none';
}