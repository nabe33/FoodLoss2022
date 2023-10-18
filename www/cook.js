$(document).ready(function(){
    //ページを開いた時に「調理中」を消す
    //const p = 
    $(".nowcooked").hide();
    $("#completed").hide();
    
    //「料理を作る(=yes)」のボタンを押されたら「調理中」を表示
    $('.yes').on("click",function() {
       $('.nowcooked').show();
    });


//レシピ差し替え
    $("h2").text("基本のカレー");
    $(".exp").text("初めてカレーを作る方でも簡単に作ることができるレシピです。");

    let ingredient=["カレールー","牛肉","玉ねぎ","じゃがいも","にんじん"];
    let howmany_ingredient=["1/2箱","250g","2個","",""]

    for(let i=0;i<ingredient.length;i++){
        $(".zairyou table").append(`<tr><th>${ingredient[i]}</th><td>${howmany_ingredient[i]}</td></tr>`);
    }
    $("#make-next").on("click",function(){
        if($(".num").text()==1){
            $(".num").text("2");
            $("#h4").text(" 具材を炒める");
            $("#shousai").text("厚手の鍋にサラダ油を熱し、牛肉、玉ねぎ、じゃがいも、にんじんを入れ、肉に焼き目がつき、玉ねぎがしんなりするまで炒めます。");
            $("#make-prev").css("color","#7D5A50");
        }else if($(".num").text()==2){
            $(".num").text("3");
            $("#h4").text(" 煮る");
            $("#shousai").text("水を加え、沸騰したらあくを取ります。具材が柔らかくなるまで弱火～中火で約15分煮込みます。"); 
            $("#make-next").css("color","#fff");  
        }
    });
    $("#make-prev").on("click",function(){
        if($(".num").text()==3){
            $(".num").text("2");
            $("#h4").text(" 具材を炒める");
            $("#shousai").text("厚手の鍋にサラダ油を熱し、牛肉、玉ねぎ、じゃがいも、にんじんを入れ、肉に焼き目がつき、玉ねぎがしんなりするまで炒めます。");
            $("#make-next").css("color","#7D5A50");
        }else if($(".num").text()==2){
            $(".num").text("1");
            $("#h4").text(" 具材をきる");
            $("#shousai").text("").append("玉ねぎ：くし切り<br>じゃがいも：縦半分にしたものをさらに2等分<br>にんじん：3cmくらいの乱切り");
            $("#make-prev").css("color","#fff");
        }
    });
    $("#letscook").on("click",function(){
        $("#letscook").hide();
        $("#completed").show();
    });
    var applicationKey = "b009093a7eb6aa5ee0b77053e3da884604e50eec5d84e351a6791cb99cd6aab5";
    var clientKey = "044069d910f8a15cc57dc464fe4f37c74727de2339cb68c710bceddb231a78a5";
    var ncmb  = new NCMB(applicationKey, clientKey);
    let LovePercent = ncmb.DataStore("LovePercent");
    let lovePercent = new LovePercent();
    let love;
    LovePercent.equalTo("objectId","vZK4eMjxOgPE1sKa")
                .fetch()
                .then(function(result){
                    love=result.get("love"); 
                    // alert(love);
                });
    $("#completed").on("click",function(){
        $(".content").html("").append("<img src='image/man_up.png' id='manup'><img src='image/saying.png' id='sayingImg'><p id='manName'>翔太</p><p id='sayingText'>一緒に食うと、食欲も増進して<br>食べ残しも減るな！</p>");
        setTimeout(function(){
            $(".content").append("<img src='image/love_up.png' id='loveUp'><div class='loveUp'><p>親愛度 +40</p><p>1 → 2</p><progress value='10/50'></progress></div>");
            // $("progress").val(love);
        },5000);
        setTimeout(function(){
            // love+=40;
            $("progress").val(50/50);
        },5000);
        // LovePercent.equalTo("objectId","vZK4eMjxOgPE1sKa")
        //         .fetch()
        //         .then(function(result){
        //             result.set("love",love);
        //             return result.update();
        //         });
    });
    
});