
var storage = window.sessionStorage;
var killernum = storage.getItem("杀手");
var farmernum = storage.getItem("平民");
var get = sessionStorage.newbox;
var newnum = JSON.parse(get);
console.log(killernum)
console.log(farmernum)
console.log(newnum)
var diemoon = window.sessionStorage.getItem("diemoon")
var dietou = window.sessionStorage.getItem("dietou")
var newarr = JSON.parse(sessionStorage.getItem("newarr"))
console.log(newarr)
var deather = JSON.parse(sessionStorage.getItem('deather'))
console.log(deather)


//状态机步骤
$(document).ready(function () {
    var begin = new StateMachine({
        currentState: 'none',
        transitions: [{
                name: 'kill',
                from: 'none',
                to: '1'
            },
            {
                name: 'dead',
                from: '1',
                to: '2'
            },
            {
                name: 'player',
                from: '2',
                to: '3'
            },
            {
                name: 'tou',
                from: '3',
                to: '4'
            },
            {
                name: 'reset',
                from: '*',
                to: 'none'
            }
        ],

        //状态机方法    后期添加eq选择器/***很重要 */
        methods: {
            onKill: function () {
                $('.step1').eq(day*4-4).css("background-color", "#83b09a");
                $('.san').eq(day*4-4).css("border-right-color", "#83b09a");
            },
            onDead: function () {
                $('.step1').eq(day*4-3).css("background-color", "#83b09a");
                $('.san').eq(day*4-3).css("border-right-color", "#83b09a");
            },
            onPlayer: function () {
                $('.step1').eq(day*4-2).css("background-color", "#83b09a");
                $('.san').eq(day*4-2).css("border-right-color", "#83b09a");
            },
            onTou: function () {
                $('.step1').eq(day*4-1).css("background-color", "#83b09a");
                $('.san').eq(day*4-1).css("border-right-color", "#83b09a");
            },
            onAfterTou: function () {
                sessionStorage.removeItem('beginday');
                sessionStorage.removeItem('begin');
                window.location.reload();
            }
        }
    })

    //点击事件
    $('.step1').eq(day*4-4).click(function () {
        if (begin.is('none')) {
            begin.kill();
            alert("开始杀人！！")
            window.sessionStorage.setItem('begin', '1')
            window.location.href = "task4-1.html"
            window.sessionStorage.getItem('beginday');
        } else {
            alert('要执行后面的步骤咯，不能重复杀人~')
        }
    });

    $('.step1').eq(day*4-3).click(function () {
        if (begin.is('1')) {
            window.sessionStorage.setItem('begin', '2');
            window.sessionStorage.setItem('beginday', '2');
            begin.dead();
            alert("死者没有发言机会")
        } else if (begin.is('none')) {
            alert('要按照顺序执行步骤奥~')
        }
    });

    $('.step1').eq(day*4-2).click(function () {
        if (begin.is('2')) {
            window.sessionStorage.setItem('begin', '3');
            window.sessionStorage.setItem('beginday', '3');
            begin.player();
            alert("玩家依次发言")
        } else {
            alert('按步骤顺序执行！')
        }
    });

    $('.step1').eq(day*4-1).click(function () {
        if (begin.is('3')) {
            window.sessionStorage.setItem('begin', '4');
            window.sessionStorage.setItem('beginday', '4');
            alert("开始投票")
            window.location.href = "task4-1.html"
        } else {
            alert('按步骤执行，弟弟')
        }
    });

    //添加判断，添加盒子
    console.log(diemoon)
    if (window.sessionStorage.getItem('deather') !== null) {
    for(k = 0;k < deather.length;k++){
        console.log(k);
        var t = deather[k];
        console.log(k)
        if ((k+1)%2 === 0){
            $('.add').eq(k).after("<div class='killword'>" + t + "号被大家投死，他的身份是" + newarr[t - 1].role + "</div>")
        }
        else{
            $('.add').eq(k).after("<div class='killword'>" + t + "号被杀手杀死，他的身份是" + newarr[t - 1].role + "</div>")
        }
    }
    }
    //获取游戏进度
    var beginday = window.sessionStorage.getItem("beginday");
    console.log(beginday);

    if (beginday == "1") {
        begin.kill();
    } else if (beginday == "2") {
        begin.kill();
        begin.dead();
    } else if (beginday == "3") {
        begin.kill();
        begin.dead();
        begin.player();
    } else if (beginday == "4") {
        begin.kill();
        begin.dead();
        begin.player();
        begin.tou();
    } else {
        begin.reset();
    }
});

var day = JSON.parse(sessionStorage.getItem("day"));
if (day == undefined) {
    day = 0;
}
//天数判断
if (window.sessionStorage.getItem('deather') !== null) {
    console.log(deather)
    console.log(day)
    if (deather.length >= 2*day) {
        day++;
        console.log(day)
        sessionStorage.setItem('day', day);
    }
};
console.log(day)

//如果天数为1，添加html
for(var x = 0;x < day;x++){
    if(x > 0){       
         $('.firstd').first().clone().prependTo($('main'));
    }
}

//
for(var y = 0;y < (day-1)*4;y++){
    $(".step1").eq(y).addClass("ancolor");
    $(".san").eq(y).css("border-right-color", "#83b09a")
    $('.step_').eq(y).hide();
}

//给html标签内添加第几天
for(z = 0;z <= day;z++){
    $('.firstd_word').eq(z).html('第'+(z+1)+'天')
}

//切换隐藏
$(".step_").eq(day - 1).show();
$(".firstd_word").click(function () {
    $(this).siblings().toggle();
})

// $('.san').eq(y).addClass("ancolor")
// $('.step1').eq(y).addClass('ancolor');

$('.over').click(function(){
    sessionStorage.clear();
    window.location.href = '../task2/task2-1.html'
})

$('.log').click(function(){
    window.location.href = '../task3/task3-1.html'
})

$('.back').click(function(){
    sessionStorage.clear();
    window.location.href = '../task2/task2-1.html'
})

$('.false').click(function(){
    sessionStorage.clear();
    window.location.href = '../task2/task13.html'
})
