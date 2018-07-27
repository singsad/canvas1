function number() {
    var num_man = document.getElementById('number').value;
    console.log(num_man);
    // var setup = document.getElementsByClassName('top-right-top');
    var all =[];
    // all.length=inputnumber.value;
    
 
    
    var killer = Math.floor(inputnumber.value/3);
    console.log(killer)
    var farmer = inputnumber.value-killer;
    console.log(farmer)
    
    for(i = killer;i > 0;i --){
        all.push('killer');
    }
    for(k = farmer; k > 0;k--){
        all.push('farmer')
    }
    console.log(all)

    var newbox = [];
    for (k = all.length; k > 0; k--) {
        var ran = Math.round(Math.random() * (all.length - 1));
        newbox.push(all[ran]);
        all.splice(ran, 1);
    };
    console.log(newbox.length);
    var list = document.getElementById('list');
    var noder = document.getElementsByTagName('li');
    console.log(list)
    console.log(noder)
    if(noder.length>0){
        for(n=noder.length;n>0;n--)
        list.removeChild(noder[0]);
        }

    for (m = 0;m < newbox.length;m++) {
    
        var list = document.getElementById('list');
        var node = document.createElement('li');
        var icon = document.createElement('span')
        list.appendChild(node);
        node.appendChild(icon);

       if(newbox[m]=='farmer'){
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

   

   return newbox;
}

var inputnumber = document.getElementById('number');
var rangenumber = document.getElementById('rangenumber');

 inputnumber.onchange = function() {
    if(inputnumber.value>=4 && inputnumber.value<=18){
        rangenumber.value=inputnumber.value;
    }
    else{
        alert("玩家人数需在4-18之间");
    }
}

function change() {
    inputnumber.value = rangenumber.value;
}

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

