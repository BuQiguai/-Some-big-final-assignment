$(document).ready(
    function(){


    $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
            if(scrollPosition>200){
                $("#顶部").addClass("aa");
                $("#左边").addClass("de2");
            }else{
                $("#顶部").removeClass("aa");
                $("#左边").removeClass("de2");
            }
        });

    $("#首页按钮").click(function(){
        window.location.href = "index.html"; 
    })
    $("#教程按钮").click(function(){
        window.location.href = "jiaocheng.html"; 
    })
    $("#工具按钮").click(function(){
        window.location.href = "gongju.html"; 
    })
    $("#联系按钮").click(function(){
        window.location.href = "lianxi.html"; 
    })
    $("#搜索按钮").click(function(){
        window.location.href = "sousuo.html"; 
    })
    const shuzu = {
        "常量":"changliang.html",
        "变量":"bianliang.html",
        "判断语句":"panduan.html",
        "循环语句":"xunhuan.html",
        "数组":"shuzu.html",
        "字符串":"zifuchuan.html",
        "方法":"fangfa.html",
        "结构体":"jiegouti.html",
    }
    const gaodu = {
        "常量":1500,
        "变量":2000,
        "判断语句":1000,
        "循环语句":1200,
        "数组":2000,
        "字符串":600,
        "方法":2000,
        "结构体":2000,
    }
    //显示初始界面


    $("#zuobian").children().click(function(){
        var str = $(this).text().trim();
        $("#页面").load(shuzu[str],function(){
            //根据网页自适应高度
            $("#页面").height(gaodu[str])
            //获取所有的h4标签自动生成右侧导航栏
            var elem = $('#页面').find('h4').toArray();
            $('#动态导航栏').empty(); // 清空 <ul> 下的所有 <li> 元素
            var www = 0;
            elem.forEach(element => {
                var listItem = $('<li id='+www.toString()+'>'+ element.textContent+'</li>'); // 创建新的 <li> 元素
                www++
                $('#动态导航栏').append(listItem); // 将新的 <li> 元素追加到 <ul> 中

                listItem.click(function() {
                    var scrollTop = $('#页面').find('h4').toArray()[this.id].offsetTop
                    $('html,body').animate({
                        scrollTop : scrollTop
                    }, 200);

                  });
                
            });
        });
        
    })


    $("#提交").click(function tijiao(){
        var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
        //正则表达式判断是否是邮箱

        var email = $("#email").val();
        var str = $("#feedback-content").val();
        var feedbacktype = $("#feedback-type").val();
        if(reg.test(email)){
            alert("提交成功")
        }else{
            alert("请输入有效邮箱")
        }

    })
    
});
