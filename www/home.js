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
    love=Number(love);
    if(love<50){
        $(".rank-text p").text("1");
        $("progress").val(10/50);
    }else if(love>=50 && love<110){
        $(".rank-text p").text("2");
        $("progress").val((love-50)/60);
    }else if(love>=110 && love<180){
        $(".rank-text p").text("3");
        $("progress").val((love-110)/70);
    }else if(love>=180 && love<260){
        $(".rank-text p").text("4");
        $("progress").val((love-180)/70);
    }
    
});