var storage = window.sessionStorage;
var killernum = storage.getItem("杀手");
var farmernum = storage.getItem("平民");
//快捷打印，ctrl alt  w  w

//获取数组
var get = sessionStorage.newbox;
var newnum = JSON.parse(get);
console.log(killernum)
console.log(farmernum)
console.log(newnum)
var beginday = window.sessionStorage.getItem('begin')

//创建一个对象数组，限制条件：只运行一次
var day = sessionStorage.getItem('day')
console.log(day)
if (window.sessionStorage.getItem('newarr') == undefined) {
  var newarr = [];
  for (y = 0; y < newnum.length; y++) {
    console.log('reset')
    if (newnum[y] == "平民") {
      newarr[y] = {
        "role": "平民",
        "state": "alive"
      }
    } else {
      newarr[y] = {
        "role": "杀手",
        "state": "alive"
      }
    }
  }
} else {
  //存储
  var newarr = JSON.parse(sessionStorage.getItem("newarr"))
  console.log(newarr)
}

//创建一个对象数组，限制条件：只运行一次
var day = sessionStorage.getItem('day')
console.log(day)
if (window.sessionStorage.getItem('newarr') == undefined) {
  var newarr = [];
  for (y = 0; y < newnum.length; y++) {
    console.log('reset')
    if (newnum[y] == "平民") {
      newarr[y] = {
        "role": "平民",
        "state": "alive"
      }
    } else {
      newarr[y] = {
        "role": "杀手",
        "state": "alive"
      }
    }
  }
} else {
  //存储
  var newarr = JSON.parse(sessionStorage.getItem("newarr"))
  console.log(newarr)
}

window.onload = function () {
  //添加所有盒子
  var bigbox = document.getElementById('bigbox');
  for (m = 0; m < newnum.length; m++) {
    var node = document.createElement('button');
    var node1 = document.createElement('span');
    var node2 = document.createElement('span');
    var node3 = document.createElement('span');
    var textnode1 = document.createTextNode((m + 1) + '号')
    node.className = 'show1';
    node1.className = 'show4';
    node2.className = 'show2';
    node3.className = 'show3';
    bigbox.appendChild(node);
    node.appendChild(node1);
    node.appendChild(node2);
    node2.appendChild(node3);
    node3.appendChild(textnode1);
    if (newnum[m] == '平民') {
      var textnode = document.createTextNode(' 平 民 ')
      node1.appendChild(textnode);
    } else {
      var textnode = document.createTextNode(' 杀 手 ')
      node1.appendChild(textnode);
    }
  }

  //创建死人数组，颜色改变
  if (window.sessionStorage.getItem('diemoon') == undefined) {
    var deather = [];
  } else {
    var deather = JSON.parse(sessionStorage.getItem("deather"))
    console.log(deather)
    var send = JSON.stringify(deather);
    sessionStorage.deather = send;
    for (m = 0; m < deather.length; m++) {
      $('.show1').eq(deather[m] - 1).addClass('ancolor');
    }
  }


  //第一步才运行的函数
  if (beginday == "1") {
    $(".show1").click(function () {
      for (i = 0; i < newarr.length; i++) {
        if (newarr[i].state !== "dead") {
          $('.show1').eq(i).removeClass('ancolor');
        }
      }
      console.log(this)
      var q = $(".show1").index($(this));
      if (newarr[q].role == '平民' && newarr[q].state !== "dead") {
        $('.show1').eq(q).addClass('ancolor');
        console.log((q + 1) + "号被选中")
        sessionStorage.setItem("diemoon", q + 1);
      } else if (newarr[q].state == "dead") {
        sessionStorage.removeItem("diemoon");
        alert("死人不可以选")
      } else
      //  if(newarr[q].role == '杀手')
      {
        sessionStorage.removeItem("diemoon");
        $('.show1').eq(q).addClass('bccolor');
        alert('不可以选队友或自己');

      }
    })
  }

  //第四步才运行的函数
  if (beginday == "4") {
    $("header").find(".word").text("玩家投票");
    $(".box1").text("发言讨论结束，请玩家投票");
    $(".show1").click(function () {
      var x = $('.show1').index($(this))
      if (newarr[x].state !== "dead") {
        sessionStorage.setItem("dietou", x + 1);
      } else {
        sessionStorage.removeItem('dietou');
        alert("你不能选一个死人")
        console.log((x + 1) + "号被选中");
      }
    })
  }

  //   //判断是否从第一步获取到被杀的人
  //   if (sessionStorage.getItem("diemoon") !== null) {
  //     var diemoon = window.sessionStorage.getItem("diemoon")
  //     //序号添加进死人数组
  //     deather.push(parseInt(diemoon));
  //     newarr[diemoon - 1].state = "dead"
  //     console.log(newarr[diemoon - 1])
  //     console.log(newarr)
  //     var send = JSON.stringify(newarr);
  //     sessionStorage.newarr = send;
  //   }

  // //判断是否从第四步获取到被投的人
  //   if (sessionStorage.getItem("dietou") !== null) {
  //     var dietou = window.sessionStorage.getItem("dietou");
  //     deather.push(parseInt(dietou));
  //     newarr[dietou - 1].state = "dead";

  //     console.log(newarr[dietou - 1])
  //   }


  $('.begin').click(function () {

    //判断是否从第一步获取到被杀的人

    if (beginday == '1') {
      if (sessionStorage.getItem("diemoon") !== null) {
        var diemoon = window.sessionStorage.getItem("diemoon")
        //添加判断
        if(newarr[diemoon - 1].state !== 'dead'){
        //序号添加进死人数组
        deather.push(parseInt(diemoon));
        newarr[diemoon - 1].state = "dead"
        console.log(newarr[diemoon - 1])
        var send = JSON.stringify(newarr);
        sessionStorage.newarr = send;
        window.sessionStorage.setItem('deather', JSON.stringify(deather));
        window.location.href = "../task4/task4.html"
        window.sessionStorage.setItem('beginday', beginday);
      }else{
        alert('不可以选死人阿')
      }
      } else {
        alert('还没有选人')
      }
    }
    //第四步
    if (beginday == '4') {
      if (sessionStorage.getItem("dietou") !== null) {
        
        var dietou = window.sessionStorage.getItem("dietou");
        if(newarr[dietou - 1].state !== 'dead'){
        var diemoon = window.sessionStorage.getItem("diemoon")
        deather.push(parseInt(dietou));
        newarr[diemoon - 1].state = "dead"
        newarr[dietou - 1].state = "dead";
        var send = JSON.stringify(newarr);
        sessionStorage.newarr = send;
        window.sessionStorage.setItem('deather', JSON.stringify(deather));
        window.location.href = "../task4/task4.html"
        window.sessionStorage.setItem('beginday', beginday);
      }else{
        alert('不能选死人')
      }
      } else {
        alert('不能选一样的人')
      }
    }

    var myfilter = newarr.filter(function (item, index, array) {
      return (item.state == 'alive');
    })
    console.log(myfilter)
    var killn = 0;
    var farmern = 0;
    console.log(newarr)
    for (p = 0; p < myfilter.length; p++) {
      if (myfilter[p].role === '杀手') {
        killn++;
      } else if (myfilter[p].role === '平民') {
        farmern++;
      }
    }
    console.log(killn)
    sessionStorage.setItem('killn', killn);
    sessionStorage.setItem('farmern', farmern);

    if (killn >= farmern || killn === 0) {
      if (killn === 0) {
        var win = '平民胜利'
        sessionStorage.setItem('win', win);
        window.location.href = "./task4-2.html"
      } else {
        var win = '杀手胜利'
        sessionStorage.setItem('win', win);
        window.location.href = "./task4-2.html"

      }

      // var win = (killn === 0)? '平民胜利':'杀手胜利'
      // sessionStorage.setItem('win',win);
      // window.location.href = "/task2-4/task2/7.html"

    }

  })
}


$('.back').click(function(){
  sessionStorage.clear();
  window.location.href = '../task2/task2-1.html'
})

$('.false').click(function(){
  sessionStorage.clear();
  window.location.href = '../task2/task13.html'
})
