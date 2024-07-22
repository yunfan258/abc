var isEnd = function (c) {
    //横线
    var count = 0;
    for (var i = 0; i < tr - 4; i++) {
        for (var j = 0; j < td; j++) {
            for (var k = 0; k < 5; k++) {
                var row = i + k;
                if (document.querySelector('.div' + row + '_' + j).color == c) {
                    count++;
                }
            }
            if (count == 5) {
                return true;
            } else {
                count = 0;
            }
        }

    }
    //竖线
    for (var i = 0; i < tr; i++) {
        for (var j = 0; j < td - 4; j++) {
            for (var k = 0; k < 5; k++) {
                var col = j + k;
                if (document.querySelector('.div' + i + '_' + col).color == c) {
                    count++;

                }
            }
            if (count == 5) {
                return true;
            } else {
                count = 0;
            }
        }

    }
    //斜线'/'
    for (var i = 4; i < tr; i++) {
        for (var j = 0; j < tr - 4; j++) {
            for (var k = 0; k < 5; k++) {
                var row = i - k;
                var col = j + k;
                if (document.querySelector('.div' + row + '_' + col).color == c) {
                    count++;
                }
            }
            if (count == 5) {
                return true;
            } else {
                count = 0;
            }
        }

    }
    //反斜线'\'
    for (var i = 0; i < tr - 4; i++) {
        for (var j = 0; j < tr - 4; j++) {
            for (var k = 0; k < 5; k++) {
                var row = i + k;
                var col = j + k;
                if (document.querySelector('.div' + row + '_' + col).color == c) {
                    count++;
                }
            }
            if (count == 5) {
                return true;
            } else {
                count = 0;
            }
        }
    }
    return false;
}
//初始化
var init = function () {
    var borad = document.getElementById('board');

    for (var i = 0; i < tr; i++) {
        for (var j = 0; j < td; j++) {
            div = borad.getElementsByClassName('div' + i + '_' + j);
            div[0].innerHTML = '';
            div[0].targe = 0;
            div[0].color = 'green';
            div[0].style.backgroundColor = 'green';

        }
    }

}
var sw = 20,
    sh = 20,
    tr = 30,
    td = 30;
if (screen.width < 500) {
    tr = 20;
    td = 20;
}
var color = 'white';
var qzWhite = document.querySelector('.white button');
qzWhite.onclick = function () {
    color = 'white';
}
var qzBlack = document.querySelector('.black button');
qzBlack.onclick = function () {
    color = 'black';
}
var borad = document.getElementById('board');
borad.style.display = 'flex';
borad.style.flex = 'wrap';

borad.style.width = tr * sw + 'px';
borad.style.height = td * sh + 'px';
//判断是否结束

for (var i = 0; i < tr; i++) {
    for (var j = 0; j < td; j++) {
        var oDiv = document.createElement('div');

        borad.appendChild(oDiv);
        oDiv.x = i;
        oDiv.y = j;
        oDiv.className = 'div' + i + '_' + j;
        oDiv.style.backgroundColor = 'green';
        oDiv.style.cursor = 'pointer';

        oDiv.addEventListener("click", function () {
            if (this.targe != 1) { //点击过就不再向里面添加棋子
                qz = document.createElement('div');
                this.color = color;
                qz.style.backgroundColor = color;
                for (var i = 0; i < tr; i++) {
                    for (var j = 0; j < td; j++) {
                        var oDiv = document.getElementsByClassName('div' + i + '_' + j)[0];

                        oDiv.style.backgroundColor = 'green';
                        oDiv.new = 0;
                    }
                }
                this.style.backgroundColor = "cyan";
                this.new = 1;
                qz.style.borderRadius = '50%';
                this.appendChild(qz);
                if (isEnd(this.color) == true) {
                    alert(color + '赢了');
                    //                    qzWhite.innerHTML = "赢了";
                    init();
                    return;
                }
                if (color == 'white') {
                    color = 'black';
                } else {
                    color = 'white';
                }
            }
            this.targe = 1;
            //        this.addEventListener("click",fn1,false);
        }, true);

    }
}
document.querySelector('.huiQi').onclick = function () {
    for (var i = 0; i < tr; i++) {
        for (var j = 0; j < td; j++) {
            var oDiv = document.getElementsByClassName('div' + i + '_' + j)[0];
            if (oDiv.new == 1) {
                oDiv.removeChild(oDiv.childNodes[0]);
                oDiv.new = 0;
                oDiv.targe = 0;
                oDiv.style.backgroundColor = 'green';
                if (color == 'white') {
                    color = 'black';
                } else {
                    color = 'white';
                }
            }

        }
    }
};
