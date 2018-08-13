function number() {
    var num_man = document.getElementById('number').value;
    // console.log(num_man);
    // var setup = document.getElementsByClassName('top-right-top');
    var all =[];
    // all.length=inputnumber.value;
    //杀手与农民的人数
    var killer = Math.floor(inputnumber.value/3);
    // console.log(killer)
    var farmer = inputnumber.value-killer;
    // console.log(farmer)
    
    //把杀手。农民人数加进总人数里
    for(i = killer;i > 0;i --){
        all.push('杀手');
    }
    for(let k = farmer; k > 0;k--){
        all.push('平民')
    }

    // //打乱数组
    var newbox = [];
    for (k = all.length; k > 0; k--) {
        var ran = Math.round(Math.random() * (all.length - 1));
        newbox.push(all[ran]);
        all.splice(ran, 1);
    };
    // console.log(newbox.length);


    //洗牌
//   for(p = 0;p<all.length; p++){
//       var l = Math.floor(Math.random()*(p+1));
    //   var lun = all[p];
    //   all[p] = all[l];
    //   all[l] = lun;

    //   [all[p],all[l]] = [all[l],all[p]];
//   }

// console.log(all);





    //防止重复点击，每次点击删除上次append的数据
    var list = document.getElementById('list');
    var noder = document.getElementsByTagName('li');
    // console.log(list)
    // console.log(noder)
    if(noder.length>0){
        for(n=noder.length;n>0;n--)
        list.removeChild(noder[0]);
        }

        //渲染页面。添加html标签
    for (m = 0;m < newbox.length;m++) {
        var list = document.getElementById('list');
        var node = document.createElement('li');
        var icon = document.createElement('span')
        list.appendChild(node);
        node.appendChild(icon);
       if(newbox[m]=='平民'){
        var textnode = document.createTextNode(' 平 民 1 人')
        node.className = 'nong';
        node.appendChild(textnode);
       }
       else {
         var textnode = document.createTextNode(' 杀 手 1 人')
        node.className = 'sha';
        node.appendChild(textnode);
       }
   }

   //存储
   var storage = window.sessionStorage;
   var send = JSON.stringify(newbox);
   sessionStorage.newbox = send;
   storage.setItem('杀手',killer);
   storage.setItem('平民',farmer);

//    console.log(newbox)
   return newbox;
}

var inputnumber = document.getElementById('number');
var rangenumber = document.getElementById('rangenumber');

//让两个东西关联起来
 inputnumber.onchange = function() {
    if(inputnumber.value>=4 && inputnumber.value<=18){
        rangenumber.value=inputnumber.value;
    }
    else{
        alert("玩家人数需在4-18之间");
    }
}

//让两个东西关联起来
function change() {
    inputnumber.value = rangenumber.value;
}

//警告弹框
function left_icon() {
    rangenumber.value--;
    if (inputnumber.value <= 4) {
        alert("人数不足");
    } else {
        inputnumber.value = rangenumber.value;
    }
}

function right_icon() {
    rangenumber.value++;
    if (inputnumber.value >= 18) {
        alert("人数太多");
    } else {
        inputnumber.value = rangenumber.value;
    }
}


function go(){

    if(rangenumber.value = document.getElementsByTagName('li').length){
        window.location.href="../task3/task3.html"
    }
    else{
        alert('需要设置好人数才可以开始游戏阿弟弟')
    }

}

$('.icon-back').click(function(){
    sessionStorage.clear();
    window.location.href = '../task2/task13.html'
})

$('.icon-help').click(function(){
    sessionStorage.clear();
    window.location.href = 'http://www.baidu.com'
})
