var box = document.getElementsByClassName("box1"); //获取9个小格子，定义个变量，现在9个小格子有一个递增的下标。

// console.log(boxnum());
// boxnum();
// console.log(box23[0]);
// console.log(box23[1]);     这里打印出来的跟boxnum（）不一样的，因为box23是一个变量，上面运行完boxnum（）会形成一个数组，
// console.log(box23[2]);       下面这时候会在运行一次得到一个新数组，然后就会跟boxnum（）不一样。

// console.log(newcolor);

function box11() {
  // 每次循环前让所有的背景颜色变回去，避免之前颜色没有变回去
    for(m=0;m<9;m++){
        box[m].style.background='orange';
    };

    // 获取三个随机数，放进newbox里
    function boxnum(){
    var box = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var newbox = [];
    var runnam = 3;
    for (k = 0; k < runnam; k++) {
        var ran = Math.round(Math.random() * (box.length - 1));
        newbox.push(box[ran]);
        box.splice(ran, 1);
    };
    console.log(newbox);
    return newbox; }
    var box23 = boxnum();// 把函数运行结果赋给box23

    //利用for循环，循环三次，获得三个随机颜色。
    var newcolor = [];
    var runcolor = 3;
    for (l = 0; l < runcolor; l++) {
        function color() {
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += (Math.random() * 16 | 0).toString(16);
            }
            return color;
        }
        newcolor.push(color());
    };

    //颜色重复时，重新取颜色。
    while (newcolor[0] == newcolor[1]) {
        newcolor[1] += (Math.random() * 16 | 0).toString(16);
    };
    while (newcolor[0] == newcolor[2] || newcolor[1] == newcolor[2]) {
        newcolor[2] += (Math.random() * 16 | 0).toString(16);
    };

    //把获取的随机颜色赋到三个随机盒子上去。
    box[box23[0]].style.background = newcolor[0];
    box[box23[1]].style.background = newcolor[1];
    box[box23[2]].style.background = newcolor[2];

};

//声明一个定时器函数，使得触发点击事件时无限循环函数box11（）
var time
function shine() {
    clearInterval(time); //防止多次点击，‘跑马灯’事件
    time = setInterval('box11()', 1000);
};

//声明一个函数，清楚定时器，使得所有盒子背景颜色变回原色
function shine1() {
    clearInterval(time);
    for(m = 0;m<9;m++){
        box[m].style.background='orange';
    }
};

var newarr = [];

  
    newarr[0] = {
      "role": "平民",
      "state": "alive"
    }
 
    newarr[1] = {
      "role": "杀手",
      "state": "alive"
    }
     newarr[2] = {
        "role": "杀手",
        "state": "dead"
     }
     console.log(newarr)

var myfilter = newarr.filter(function (item, index, array) {
    console.log(item)
    console.log(index)
    item.state == 'alive';
  
    return (newarr);
  })
  console.log(myfilter)