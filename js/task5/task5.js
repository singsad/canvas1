    // function login() {
    //     var un = document.getElementById('username').value;
    //     var pw = document.getElementById('password').value;
    //     var xmlhttp = new XMLHttpRequest();

    //     xmlhttp.open('POST', '/carrots-admin-ajax/a/login', true);

    //     xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //     xmlhttp.send('name=' + un + '&pwd=' + pw)

    //     var state = xmlhttp.readyState;

    //     var status = xmlhttp.status;

    //     var content = xmlhttp.responseText;

    //     xmlhttp.onreadystatechange = function () {
    //         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //             //双重判断。4为读取服务器响应结束，200为成功
    //             var text = JSON.parse(xmlhttp.responseText);
    //             console.log(text)

    //             if (text.message == 'success') {
    //                 window.location.href = "http://www.taobao.com"
    //             } else {
    //                 alert(
    //                     document.getElementById('msg').innerHTML = text.message)
    //             }
    //         }
    //     }
    // }

    $(document).ready(function(){
        $('.button').click(function(){
            var un = $('.username').val();
            var pw = $('.password').val();
            console.log(un)
            $.ajax({
                url:'/carrots-admin-ajax/a/login',
                type:'post',
                data:{name:un,pwd:pw},
                dataType:'json',
                success:function(data){
                    if (data.message == 'success') {
                        window.location.href = "http://www.taobao.com"
                    }else{
                       alert($('.msg').innerHTML = data.message)
                    }
                }
            })
        })
    })
