$(document).ready(function(){
    let love=0;

    var applicationKey = "b009093a7eb6aa5ee0b77053e3da884604e50eec5d84e351a6791cb99cd6aab5";
    var clientKey = "044069d910f8a15cc57dc464fe4f37c74727de2339cb68c710bceddb231a78a5";
    var ncmb  = new NCMB(applicationKey, clientKey);
    let LovePercent = ncmb.DataStore("LovePercent");
    let lovePercent = new LovePercent();
    // let love;
    LovePercent.equalTo("objectId","vZK4eMjxOgPE1sKa")
                .fetch()
                .then(function(result){
                    love=result.get("love"); 
                    // alert(love);
                });

    $("body").on("click",function(){
        $(".main").text("").append('<img src="image/rank.png" id="rankImg"><div class="rank-text"><p>1</p><progress value="0"></progress></div><h4>ログインボーナス</h4><p>親愛度 +10pt</p>');
        // $("progress").val(love);
        love+=10;
        setTimeout(function(){
        $("progress").val(10/50)},1000);
        setTimeout(function(){
            location.href="home.html?10";
        },2000);
        LovePercent.equalTo("objectId","vZK4eMjxOgPE1sKa")
                .fetch()
                .then(function(result){
                    result.set("love",love);
                    return result.update();
                });
    });
});