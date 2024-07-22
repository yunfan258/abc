let tbody = document.querySelector('tbody'),
    type = document.querySelector('#type'),
    type_list = type.querySelectorAll('div'),
    body = document.querySelector('body'),
    topYG = document.getElementById('yangGuang'),
    main = document.querySelector('#main'),
    jinDuTiao = document.querySelector('#jinDuTiao'),
    jinDuTiaoSon = document.querySelector('#jinDuTiaoSon'),
    startBtn = document.querySelector('#start'),
    tr = 5,  //5行
    td = 10, //10列
    tw = 50, //宽
    th = 60; //高,
let num = 0,
    jsNums = 20,
    gameTimer,
    grobalYG;
jinDuTiao
main.style.width = screen.width + 'px';
main.style.height = screen.height + 'px';

startBtn.style.width = screen.width * 0.9 + 'px';
startBtn.style.height = screen.height * 0.9 + 'px';
startBtn.style.top = screen.height / 2 - startBtn.offsetHeight / 2 + 'px';
startBtn.style.left = screen.width / 2 - startBtn.offsetWidth / 2 + 'px';
if (screen.width > 1000) {
    // td = 14;
    tw = 88; //宽
    th = 108; //高
}


let now = ''; //用于判存储点击了哪个类型的植物
function coll(obj1, obj2) {
    let T1 = obj1.offsetTop,
        B1 = T1 + obj1.clientHeight,
        L1 = obj1.offsetLeft,
        R1 = L1 + obj1.clientWidth;

    let T2 = obj2.offsetTop,
        B2 = T2 + obj2.clientHeight,
        L2 = obj2.offsetLeft,
        R2 = L2 + obj2.clientWidth;
    //如果物体1不在物体2的 上方or左方or下方or右方 则相撞了
    return !(B1 <= T2 || R1 <= L2 || T1 >= B2 || L1 >= R2);
}

function myAlert(comment) {
    let oD = document.createElement('div'); // 提示框盒子
    oD.style.position = 'fixed';
    oD.style.padding = '30px';
    oD.style.backgroundColor = 'gray';
    oD.style.opacity = '0.6';

    oD.style.textAlign = 'center';
    oD.innerHTML = comment;
    body.appendChild(oD);

    oD.style.top = screen.height / 2 - oD.offsetHeight / 2 + 'px';

    oD.style.left = screen.width / 2 - oD.offsetWidth / 2 + 'px';
    setTimeout(() => {
        oD.parentNode.removeChild(oD);
    }, 3000);

}

function getStyle(obj, name) {
    if (obj.currentstyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}

function end() { //游戏结束函数
    clearInterval(gameTimer);
    clearInterval(grobalYG);
    for (let i = 0; i < tr; i++) {
        for (let j = 0; j < td; j++) {
            let cell = tbody.rows[i].cells[j];
            if (cell.innerHTML != '') {
                if (cell.tb) { clearInterval(cell.tb); }    // 清楚产生子弹的定时器
                if (cell.ygt) { clearInterval(cell.ygt); }  // 清除产生阳光的定时器
            }

        }
    }
    setTimeout(() => {
        location.assign('./index.html');

    }, 3000);
}
for (let i of type_list) {
    i.addEventListener('mouseover', () => {
        if (getStyle(i, 'backgroundColor') == 'rgb(255, 255, 255)') { //注意逗号后面必须加空格才相等
            const YGNum = topYG.innerHTML,
                plantName = i.className
            if (plantName == 'xRK' && YGNum >= 50) {
                f()
            } else if (plantName == 'tD' && YGNum >= 25) {
                f()
            } else if (plantName == 'hBSS' && YGNum >= 150) {
                f()
            } else if (plantName == 'wDSS' && YGNum >= 100) {
                f()
            } else if (plantName == 'jQSS' && YGNum >= 300) {
                f()
            } else if (i.id == 'chanZhi') {
                f()
            } else {
                myAlert('不好意思，阳光不足');
            }

            function f() {
                for (let j of type_list) {
                    j.style.borderColor = 'gray';
                }
                i.style.borderColor = 'red';
                now = i;
            }
        } else {
            myAlert('不好意思，植物需要冷静一下');

        }
        return false;
    });
}

// 产生阳光的函数
function creatYG(positionObj) {
    let div = document.createElement('div'); // 阳光盒子
    div.innerHTML = "<img src='./img/yangGuang.png'></img>";
    let img = div.querySelector('img');
    let w = 50,
        h = 50;
    img.style.width = w + 'px';
    img.style.height = h + 'px';

    div.style.position = 'absolute';
    div.style.top = positionObj.offsetTop + th - w + 'px';
    div.style.left = positionObj.offsetLeft + tw - h + 'px';
    tbody.appendChild(div);
    setTimeout(() => {
        if (tbody.contains(div)) {
            tbody.removeChild(div);
        }
    }, 8000)
    div.addEventListener('mouseover', () => {
        topYG.innerHTML = parseInt(topYG.innerHTML) + 50;
        div.parentNode.removeChild(div);
        return false;
    })
}
document.oncontextmenu = function () {
    return false;
};
for (let i = 0; i < tr; i++) { //5行
    tbody.insertRow(i);
    for (let j = 0; j < td; j++) { //10列
        tbody.rows[i].insertCell(j);
        tbody.rows[i].cells[j].style.width = tw + 'px';
        tbody.rows[i].cells[j].style.height = th + 'px';
        tbody.rows[i].cells[j].addEventListener('click', function (e) { //点击了草坪触发
            if (now) {
                if (j == 0) {
                    myAlert('好大的胆子，这是小推车的位置，你也敢乱动？？？')
                    return;
                }
                if (now.id == 'chanZhi') {
                    this.innerHTML = '';
                    now.style.borderColor = 'gray';
                    now = '';
                    clearInterval(this.tb);
                    if (this.ygt) {
                        clearInterval(this.ygt);
                    }
                } else if (this.innerHTML == '') {
                    function createBiu(color, speed) { //创建子弹
                        let biu = document.createElement('div');
                        biu.className = 'biu';
                        biu.style.backgroundColor = color;
                        biu.style.left = tbody.rows[i].cells[j].offsetLeft + tw * 3 / 4 + 'px';
                        biu.style.top = tbody.rows[i].cells[j].offsetTop + th / 4 + 'px';
                        biu.t = setInterval(() => {
                            biu.style.left = biu.offsetLeft + speed + 'px';
                            if (biu.offsetLeft > tbody.offsetWidth) {
                                biu.parentNode.removeChild(biu);
                            }
                            let jiangShis = tbody.rows[i].getElementsByClassName('jiangShi');

// 判断僵尸和子弹相撞的逻辑
                            if (biu.parentNode && jiangShis.length >= 1) {
                                let jiangShi;

                                //     jiangShi = jiangShis[0];
                                //     for (let jS of jiangShis) {
                                //         if (biu.offsetLeft <= j.offsetLeft) {
                                //             jiangShi = jS;
                                //             break
                                //         }
                                //     }

                                // jiangShi = jiangShis[0];
                                let rightJSS = [];
                                for (let jS of jiangShis) {
                                    if (biu.offsetLeft <= jS.offsetLeft + jS.offsetWidth) {
                                        rightJSS.push(jS);
                                    }
                                }
                                if (rightJSS.length >= 1) {
                                    jiangShi = rightJSS[0];
                                    for (let jS of rightJSS) {
                                        if (jS.offsetLeft < jiangShi.offsetLeft) {
                                            jiangShi = jS;
                                        }
                                    }

                                    if (coll(biu, jiangShi)) {
                                        console.log(biu.offsetLeft, jiangShi.offsetLeft, biu.offsetWidth);
                                        // debugger;
                                        biu.parentNode.removeChild(biu);
                                        if (color == 'lightgreen') {
                                            jiangShi.life--;

                                        } else if (color == 'blue') {
                                            jiangShi.speed = 1;
                                            jiangShi.style.width = tw * 0.8 + 'px';
                                            jiangShi.style.height = th * 0.8 + 'px';
                                            jiangShi.life -= 1;

                                        } else if (color == 'orange') {
                                            jiangShi.life -= 2;
                                        }
                                        if (jiangShi.life <= 0) {
                                            jiangShi.t = null;
                                            jiangShi.parentNode.removeChild(jiangShi);
                                            if (num >= jsNums && !tbody.querySelector('.jiangShi')) {
                                                end();
                                                myAlert('你赢了');
                                            }
                                        }
                                    }
                                }


                            }

                        }, 50);
                        tbody.rows[i].cells[j].appendChild(biu);
                    }

                    this.innerHTML = now.innerHTML;
                    now.style.backgroundColor = 'gray';
                    now.style.borderColor = 'gray';
                    if (now.className == 'xRK') {
                        if (topYG.innerHTML >= 50) {
                            tbody.rows[i].cells[j].ygt = setInterval(() => {
                                creatYG(tbody.rows[i].cells[j]);
                            }, 7000);
                            topYG.innerHTML = parseInt(topYG.innerHTML) - 50;

                        }
                    } else if (now.className == 'tD') {
                        topYG.innerHTML = parseInt(topYG.innerHTML) - 25;

                    } else if (now.className == 'hBSS') {
                        topYG.innerHTML = parseInt(topYG.innerHTML) - 150;
                        createBiu('blue', 2);
                        this.tb = setInterval(() => {
                            createBiu('blue', 2);
                        }, 3000);

                    } else if (now.className == 'wDSS') {
                        topYG.innerHTML = parseInt(topYG.innerHTML) - 100;
                        createBiu('lightgreen', 2);
                        this.tb = setInterval(() => {
                            createBiu('lightgreen', 2);
                        }, 3000);

                    } else if (now.className == 'jQSS') {
                        topYG.innerHTML = parseInt(topYG.innerHTML) - 300;
                        createBiu('orange', 2);

                        this.tb = setInterval(() => { //创建子弹定时器
                            createBiu('orange', 2);
                        }, 3000);
                    }

                    let nowTop = now;
                    setTimeout(() => {
                        nowTop.style.backgroundColor = 'white';
                    }, 3500);
                    now = '';
                }
            }
            e.preventDefault();
            return false;

        });
    }
}
for (let i = 0; i < tr; i++) {
    tbody.rows[i].cells[0].innerHTML = "<img src='./img/xiaoTuiChe.png' />";
    tbody.rows[i].cells[0].querySelector('img').className = 'xiaoTuiChe';
}

function creatjiangShi(life, speed, type) { //随机位置产生僵尸
    let jiangShi = document.createElement('div');
    jiangShi.life = life;
    jiangShi.speed = speed;
    jiangShi.className = 'jiangShi';
    jiangShi.style.width = tw + 'px';
    jiangShi.style.height = th + 'px';
    if (type == 1) {
        jiangShi.innerHTML = "<img src='./img/puTongJiangShi.png' />";
    } else if (type == 2) {
        jiangShi.innerHTML = "<img src='./img/maoZhiJiangShi.png' />";

    } else if (type == 3) {
        jiangShi.innerHTML = "<img src='./img/tieTongJiangShi.png' />";

    } else if (type == 4) {
        jiangShi.innerHTML = "<img src='./img/tieBanJiangShi.png' />";
    }

    jiangShi.querySelector('img').style.width = "100%";
    jiangShi.querySelector('img').style.height = "100%";


    let i = Math.floor(Math.random() * tr);
    const createJSRow = tbody.rows[i]
    let c = createJSRow.cells; //每一行的所有格子
    console.log(createJSRow.offsetTop)
    // jiangShi.style.top = createJSRow.offsetTop + 'px';
    jiangShi.style.left = createJSRow.offsetWidth + 'px';
    createJSRow.appendChild(jiangShi);

    let xiaoTuiChe = jiangShi.parentNode.querySelector('.xiaoTuiChe'); //小推车

    function f() {
        let jc = jiangShi.offsetLeft + tw / 2; //僵尸的左边加一半（僵尸中间）
        if (jc <= tw && xiaoTuiChe && jiangShi.parentNode) {
            let jss = jiangShi.parentNode.getElementsByClassName('jiangShi');
            let xiaoTuiCheTimer = setInterval(() => {
                xiaoTuiChe.style.left = xiaoTuiChe.offsetLeft + 5 + 'px';
                // debugger;
                for (let j of jss) {    // j为这一行的僵尸
                    if (coll(xiaoTuiChe, j)) {
                        if (j.parentNode != null) {
                            j.parentNode.removeChild(j);
                            if (num >= jsNums && !tbody.querySelector('.jiangShi')) {
                                end();
                                myAlert('你赢了');
                                // alert('你赢了');
                            }

                        }

                        clearInterval(j.t);

                    }
                }
                if (xiaoTuiChe.offsetLeft >= tbody.offsetLeft + tbody.offsetWidth) {

                    clearInterval(xiaoTuiCheTimer);
                    xiaoTuiChe.parentNode.removeChild(xiaoTuiChe);
                }
            }, 50);
        }
        if (jc <= 0) { //僵尸走到最后，你死了
            end();
            // tbody.innerHTML = '';
            jiangShi.parentNode.removeChild(jiangShi);
            myAlert('僵尸吃掉了你的脑子' + '你的得分为：' + topYG.innerHTML);
            for (let js of tbody.getElementsByClassName('jiangShi')) {
                clearInterval(js.t);
            }
        }
        let hasZW; //用于判断僵尸下一格中是否有植物
        for (let k = 0; k < c.length; k++) {
            if (jc > c[k].offsetLeft) {
                hasZW = c[k];
            }
        }
        if (hasZW && hasZW.innerHTML == '') {
            jiangShi.style.left = jiangShi.offsetLeft - jiangShi.speed + 'px';
        } else if (hasZW && jiangShi.offsetLeft != 0 && !hasZW.contains(xiaoTuiChe)) {
            if (hasZW.querySelector('div') && hasZW.querySelector('div').className == 'tD') {
                setTimeout(() => {
                    hasZW.innerHTML = ''; //8s吃掉土豆
                    hasZW = '';
                }, 8000);
            } else {
                setTimeout(() => {
                    hasZW.innerHTML = ''; //三秒后吃掉植物
                    clearInterval(hasZW.tb); //清除植物上产生子弹的定时器
                    clearInterval(hasZW.ygt); //清除植物上产生阳光的定时器
                    hasZW = '';
                }, 3000);
            }

        }
    }
    jiangShi.t = setInterval(f, 100); //僵尸移动函数
}
let gameTime = 7000;


function timerF() {
    gameTime = Math.floor(Math.random() * 10000);
    clearInterval(gameTimer);
    gameTimer = setInterval(timerF, gameTime);

    if (num >= jsNums) {
        clearInterval(gameTimer);
    }
    if (num < jsNums) {

        let type, life, speed = 1;
        type = (Math.floor(Math.random() * 5)) % 4 + 1;

        life = type * 3;

        // if (type == 1) { speed = 2; } else { speed = 1; }

        if (screen.width > 1000) {
            life = life + 2;
            speed = speed + 1;
        }
        if (num < 3) {
            type = 1;
            speed = 1;
        }
        creatjiangShi(life, speed, type);
        num++;
        jinDuTiaoSon.style.left = jinDuTiaoSon.offsetWidth - num / jsNums * jinDuTiaoSon.offsetWidth + "px";
    }


}
// 1. 每隔一段时间产生僵尸
// 2. 定量
// 3. 最后关掉定时器
function start() {
    gameTimer = setInterval(timerF, gameTime);

    grobalYG = setInterval(() => {
        let i = Math.floor(Math.random() * tr);
        let j = 1 + Math.floor(Math.random() * (td - 1));
        creatYG(tbody.rows[i].cells[j]);
    }, 6000);
}
startBtn.addEventListener('click', () => {
    myAlert('游戏开始，即将产生僵尸');
    start();
    startBtn.style.display = "none";

});