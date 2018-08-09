
var storage = window.sessionStorage;
var killernum = storage.getItem("杀手");
var farmernum = storage.getItem("平民");

var get = sessionStorage.newbox;
var newnum = JSON.parse(get);

console.log(killernum)
console.log(farmernum)
console.log(newnum)

//初始加载显示上方的1与下方的查看身份
window.onload = function(){
    var circle = document.getElementById('circle');
    var node = document.createElement('span');
    circle.appendChild(node);
    var textnode = document.createTextNode('1');
    node.appendChild(textnode);
    var check = document.getElementById('check');
    var node1 = document.createElement('span');
    var textnode1 = document.createTextNode('查看'+'1'+'号玩家身份')
    check.appendChild(node1);
    node1.appendChild(textnode1);
    var tou = document.getElementById('tou');
    tou.style.display = 'none';
    var sha = document.getElementById('sha');
    sha.style.display = 'none';
}



//点击事件，奇数偶数时怎么怎么样
var x = 0;
var i = 1;

function go(){    
    x += 1;
    console.log(x)
    if(x%2==1){

        if(newnum[x-i]=='平民'){
        var fan = document.getElementById('fan');
        fan.style.display = 'none'
        var tou = document.getElementById('tou');
        tou.style.display = 'block';
    }else{
            var fan = document.getElementById('fan');
            fan.style.display = 'none'
            var sha = document.getElementById('sha');
            sha.style.display = 'block';
        }

        var ren = document.getElementById('ren');
        var node2 = document.createElement('span');
        var textnode2 = document.createTextNode(newnum[x-i])
        ren.appendChild(node2);
        node2.appendChild(textnode2);
        console.log(node2)
        
        //******* */重要的删除前面的操作，使用removechild无果，发现可以用innerhtml覆盖！
        document.getElementById('check').innerHTML = "";
  
        i += 1;
        if(i < (newnum.length+1)){
        var check1 = document.getElementById('check');
        var node3 = document.createElement('span');
        var textnode3 = document.createTextNode('隐藏身份并传递给'+i+'号')
        check1.appendChild(node3);
        node3.appendChild(textnode3);
    }else{
        var check1 = document.getElementById('check');
        var node3 = document.createElement('span');
        var textnode3 = document.createTextNode('法官查看')
        check1.appendChild(node3);
        node3.appendChild(textnode3);


    }




    } else if(i < (newnum.length+1)){

        var tou = document.getElementById('tou');
        tou.style.display = 'none';
        var fan = document.getElementById('fan');
        fan.style.display = 'block'
        var sha = document.getElementById('sha');
        sha.style.display = 'none';
               
        document.getElementById('circle').innerHTML = "";
        document.getElementById('ren').innerHTML = "";
        document.getElementById('check').innerHTML = "";


        var circle = document.getElementById('circle');
        var node = document.createElement('span');
        var textnode = document.createTextNode(i);
        circle.appendChild(node);
        node.appendChild(textnode);

        var check = document.getElementById('check');
        var node1 = document.createElement('span');
        var textnode1 = document.createTextNode('查看'+i+'号玩家身份')
        check.appendChild(node1);
        node1.appendChild(textnode1);

    }else{
        window.location.href="./task3-1.html"
    }

}

$('.back').click(function(){
    sessionStorage.clear();
    window.location.href = '../task2/task2-1.html'
})

$('.false').click(function(){
    sessionStorage.clear();
    window.location.href = '../task2/task13.html'
})



