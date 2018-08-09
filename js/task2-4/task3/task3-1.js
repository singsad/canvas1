var storage = window.sessionStorage;
var killernum = storage.getItem("杀手");
var farmernum = storage.getItem("平民");

var get = sessionStorage.newbox;
var newnum = JSON.parse(get);
console.log(killernum)
console.log(farmernum)
console.log(newnum)

window.onload = function(){
    var bigbox = document.getElementById('bigbox');

    for (m = 0;m < newnum.length;m++) {
        
        var node = document.createElement('div');
        var node1 = document.createElement('div');
        var node2 = document.createElement('div');
        var node3 = document.createElement('div');
        var textnode1 = document.createTextNode((m+1)+'号')
        node.className = 'show1';
        node1.className = 'show4';
        node2.className = 'show2';
        node3.className = 'show3';
        bigbox.appendChild(node);
        node.appendChild(node1);
        node.appendChild(node2);
        node2.appendChild(node3);
        node3.appendChild(textnode1);

     if(newnum[m]=='平民'){
       var textnode = document.createTextNode(' 平 民 ')
      node1.appendChild(textnode);
      }
       else {
     var textnode = document.createTextNode(' 杀 手 ')
        node1.appendChild(textnode);
      }
   }

}

function begin(){
  window.location.href = "../task4/task4.html"
}