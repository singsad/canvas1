var newarr = JSON.parse(sessionStorage.getItem("newarr"));
var win = window.sessionStorage.getItem('win');
var killn = window.sessionStorage.getItem('killn');
var farmern = window.sessionStorage.getItem('farmern');

$('.icon').text(win);
$('.num').text('杀手还有'+killn+'人　　平民还有'+farmern+'人');

var deather = JSON.parse(sessionStorage.getItem("deather"));

var day = sessionStorage.getItem('day');
for(m = 0;m < day;m++){
    if(m > 0){
        $('.box31').first().clone().appendTo($('.down'));
    }
}

for(x = 0;x <= day; x++){
    $(".leftword").eq(x).html("第" + (x + 1) + "天");
}

if (window.sessionStorage.getItem('deather') !== null) {

    for(k = 0;k < deather.length;k++){
        console.log(k);
        var t = deather[k];
        console.log(k)
        if ((k+1)%2 === 0){
            $('.news').eq(k).text(  t + "号被大家投死，他的身份是" + newarr[t - 1].role )
        }
        else{
            $('.news').eq(k).text( t + "号被杀手杀死，他的身份是" + newarr[t - 1].role)
        }
    }
    }

    $('.foot1').click(function(){
        sessionStorage.clear();
        window.location.href = '../task2/task2-1.html'
    })

    
    $('.foot2').click(function(){
        sessionStorage.clear();
        window.location.href = '../task2/task13.html'
    })

    $('.left').click(function(){
        sessionStorage.clear();
        window.location.href = '../task2/task2-1.html'
    })

    $('.right').click(function(){
        sessionStorage.clear();
        window.location.href = 'http://www.baidu.com'
    })
