let oBox = document.getElementById('box'),
    oScore = document.getElementById('score'),
    oRe = document.getElementById('restart'),
    oLevel = document.getElementById('level'),
    oMap = document.getElementById('map'),
    oBiuAll = document.getElementById('BiuAll'),
    allBiu = oBiuAll.children,
    allReChild = oRe.children,
    boxOffsetTop = oBox.offsetTop,
    boxOffsetLeft = oBox.offsetLeft;


//开始
exe();


//初始化选择难度界面，注册点击事件
function exe() {
    //难度选择
    const aP = oLevel.getElementsByTagName('p');
    [...aP].forEach((element, i) => {
        element.onclick = function(e) {
            e = e || window.event;
            startGame(i, {
                    x: e.clientX - boxOffsetLeft,
                    y: e.clientY - boxOffsetTop
                }) //第一个参数是选择的难度等级，第二个参数是鼠标距离map边沿的距离
        }
    });

    //restart按钮
    allReChild[2].onclick = function(e) {
        cancelAnimationFrame(oMap.bgTimer); //停止背景滚动
        oRe.style.display = 'none';
        oLevel.style.display = 'block';
        oScore.innerHTML = 0;
        oMap.innerHTML = "<div id='BiuAll'></div>";
        oBiuAll = document.getElementById("BiuAll");
        allBiu = oBiuAll.children;
    }

    //开始游戏
    function startGame(level, pos) {
        clearMap(); //清理
        MapBg(level); //执行 Map背景相关操作
        let p = plane(level, pos); //创建帅气的我
        enemy(level, p); //创建敌军
        oBox.score = 0; //得分清零
    }
    //隐藏和清理
    function clearMap() {
        oScore.style.display = 'block';
        oLevel.style.display = 'none';
    }

    function MapBg(level) {
        oMap.style.backgroundImage = `url('img/bg_${level+1}.jpg')`;
        (function m() {
            oMap.bgPosY = oMap.bgPosY || 0;
            oMap.bgPosY++;
            oMap.style.backgroundPositionY = oMap.bgPosY + 'px';
            oMap.bgTimer = requestAnimationFrame(m);
        })();
    }

    //创建我军
    function plane(level, pos) {
        //提取我帅气的图案
        let oImg = new Image();
        oImg.src = 'img/plane_0.png';
        oImg.width = 70;
        oImg.height = 70;
        oImg.className = 'plane';
        oImg.style.left = pos.x - oImg.width / 2 + 'px';
        oImg.style.top = pos.y - oImg.height / 2 + 'px';
        oMap.appendChild(oImg);

        //边界值
        const leftMin = -oImg.width / 2,
            leftMax = oMap.clientWidth - oImg.width / 2,
            topMin = 0,
            topMax = oMap.clientHeight - oImg.height / 2;

        //让飞机跟着鼠标走
        document.onmousemove = function(e) {
            e = e || window.event;
            //获取自己的实时坐标
            let left = e.clientX - boxOffsetLeft - oImg.width / 2;
            let top = e.clientY - boxOffsetTop - oImg.height / 2;
            left = Math.max(leftMin, left);
            left = Math.min(left, leftMax);
            top = Math.max(topMin, top);
            top = Math.min(topMax, top);
            //赋值
            oImg.style.left = left + 'px';
            oImg.style.top = top + 'px';
        };

        function touchs(event) {
            event.preventDefault();
            if (event.type == "touchmove") {
                var touch = event.touches[0];
                movex = Math.floor(touch.pageX);
                movey = Math.floor(touch.pageY);
                console.log(movex + ' ' + movey);
                let left = movex - boxOffsetLeft - oImg.width / 2;
                let top = movey - boxOffsetTop - oImg.height / 2;
                left = Math.max(leftMin, left);
                left = Math.min(left, leftMax);
                top = Math.max(topMin, top);
                top = Math.min(topMax, top);
                //赋值
                oImg.style.left = left + 'px';
                oImg.style.top = top + 'px';
            }
        }
        if (window.screen.width < 500) {
            oBox.addEventListener('touchmove', touchs, false);
        }

        //开火
        fire(oImg, level);
        return oImg;

    }
    //我的火力

    function fire(oImg, level) {

        oBox.biuInterval = setInterval(function() {

            if (oBox.score >= 5000) {
                createBiu(true, -8);
                createBiu(true, 8);
            }
            if (oBox.score >= 2000) {
                createBiu(true, 6);
            }
            if (oBox.score >= 1500) {
                createBiu(true, -2);
            }
            if (oBox.score >= 1000) {
                createBiu(true, 2);
            }
            if (oBox.score >= 400) {
                createBiu(true, -0.5);
            }
            if (oBox.score >= 200) {
                createBiu(true, 0.5);
            }
            createBiu(true, 0);
            // for (let i = 0; i < 8; i += 2) {
            //     createBiu(true, -i);

            //     createBiu(true, i);

            // }

        }, [100, 200, 300, 20][level]);

        function createBiu(index, d) {
            //创建子弹
            let oBiu = new Image();
            oBiu.src = 'img/fire.png';
            oBiu.width = 30;
            oBiu.height = 30;
            oBiu.className = 'biu';
            let left = oImg.offsetLeft + oImg.width / 2 - oBiu.width / 2;
            let top = oImg.offsetTop - oBiu.height + 5;
            if (index) {
                left += oBiu.width * d;
            }
            oBiu.style.left = left + 'px';
            oBiu.style.top = top + 'px';
            oBiuAll.appendChild(oBiu);

            //子弹运动
            (function m() {
                if (oBiu.parentNode) {
                    let top = oBiu.offsetTop - 20;
                    if (top < -oBiu.height) {
                        oBiuAll.removeChild(oBiu);
                    } else {
                        oBiu.style.top = top + 'px';
                        requestAnimationFrame(m);
                    }
                }
            })()
            //将运动执行队列放后面，不然子弹会直接初始就在 top-50 的位置
            // setTimeout(function(){
            //     requestAnimationFrame(m);
            // },50);
        }
    }
    //创建敌军
    function enemy(level, oPlane) {
        const w = oMap.clientWidth;;
        const h = oMap.clientHeight;

        const speed = [5, 6, 8, 8][level]; //敌军下落速度
        let num = 1;
        oBox.enemyIntetval = setInterval(function() {
            let index = num % 30 ? 1 : 0;
            //生成敌军
            let oEnemy = new Image();
            oEnemy.index = index;
            oEnemy.HP = [20, 1][index];
            oEnemy.speed = speed + (Math.random() * 0.6 - 0.3) * speed;
            oEnemy.speed *= index ? 1 : 0.5;
            oEnemy.src = 'img/enemy_' + ['big', 'small'][index] + '.png';
            oEnemy.className = 'enemy';
            oEnemy.width = [104, 54][index];
            oEnemy.height = [80, 40][index];
            oEnemy.style.left = Math.random() * w - oEnemy.width / 2 + 'px';
            oEnemy.style.top = -oEnemy.height + 'px';
            oMap.appendChild(oEnemy);
            num++;

            //敌军运动 
            function m() {
                if (oEnemy.parentNode) {
                    let top = oEnemy.offsetTop;
                    top += oEnemy.speed;
                    if (top >= h) {
                        oBox.score--; //漏掉飞机减分
                        oScore.innerHTML = oBox.score;
                        oMap.removeChild(oEnemy);
                    } else {
                        oEnemy.style.top = top + 'px';
                        //子弹碰撞检测
                        for (let i = allBiu.length - 1; i >= 0; i--) {
                            let objBiu = allBiu[i];
                            if (coll(oEnemy, objBiu)) {
                                oBiuAll.removeChild(objBiu); //移除子弹
                                oEnemy.HP--;
                                if (!oEnemy.HP) {
                                    oBox.score += oEnemy.index ? 2 : 20; //打掉飞机加分
                                    oScore.innerHTML = oBox.score;
                                    boom(oEnemy.offsetLeft, oEnemy.offsetTop, oEnemy.width, oEnemy.height, index ? 0 : 2); //敌军爆炸图
                                    oMap.removeChild(oEnemy); //移除敌军
                                    return;
                                }
                            }
                        }
                        //我军碰撞检测
                        if (oPlane.parentNode && coll(oEnemy, oPlane)) {
                            // return;
                            boom(oEnemy.offsetLeft, oEnemy.offsetTop, oEnemy.width, oEnemy.height, index ? 0 : 2); //敌军爆炸图
                            boom(oPlane.offsetLeft, oPlane.offsetTop, oPlane.width, oPlane.height, 1); //我军爆炸图
                            oMap.removeChild(oEnemy); //移除敌军
                            oMap.removeChild(oPlane); //移除我军
                            GameOver();
                            return;
                        }
                        requestAnimationFrame(m);
                    }
                }
            }
            requestAnimationFrame(m);
        }, [350, 150, 120, 40][level]);
    }
    //爆炸函数
    function boom(l, t, w, h, i) {
        let oBoom = new Image();
        oBoom.src = "img/" + ["boom_small", "plane_0", "boom_big"][i] + ".png";
        oBoom.className = 'boom' + ["", "2", ""][i];
        oBoom.width = w;
        oBoom.height = h;
        oBoom.style.left = l + "px";
        oBoom.style.top = t + 'px';
        oMap.appendChild(oBoom);
        setTimeout(function() {
            oBoom.parentNode && oMap.removeChild(oBoom);
        }, [1200, 2500, 1200][i]);
    }
    //两个物体 碰撞检测
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
        return !(B1 < T2 || R1 < L2 || T1 > B2 || L1 > R2);
    }
    //游戏结束
    function GameOver() {
        document.onmousemove = null; //清除移动事件
        clearInterval(oBox.biuInterval); //不再产生新子弹
        clearInterval(oBox.enemyIntetval); //不再产生新敌军
        restart();
    }

    function restart() {
        oScore.style.display = "none";

        let s = oBox.score;
        let honor;

        if (s < -300) {
            honor = "闪避+MAX！！！";
        } else if (s < 200) {
            honor = "菜得…算了我不想说了…";
        } else if (s < 400) {
            honor = "抠脚侠！";
        } else if (s < 600) {
            honor = "初级飞机大师";
        } else if (s < 800) {
            honor = "渐入佳境";
        } else if (s < 1000) {
            honor = "中级飞机大师";
        } else if (s < 1500) {
            honor = "高级飞机大师";
        } else if (s < 2000) {
            honor = "超极飞机大师";
        } else if (s < 5000) {
            honor = "终极飞机大师";
        } else {
            honor = "孤独求败！";
        }

        oRe.style.display = "block";
        allReChild[0].children[0].innerHTML = s;
        allReChild[1].children[0].innerHTML = honor;
    }
}