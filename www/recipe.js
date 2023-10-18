$(document).ready(function(){
    let foodArray=["じゃがいも","にんじん","キャベツ","トマト"];
    for(let i=0;i<foodArray.length;i++){
        $(".foods-container").append(`<div class="food food${i}"><p class="recipe-title">${foodArray[i]}を使ったレシピ</p><div class="recipe-container" id="rc${i}"></div></div>`)
        for(let j=0;j<4;j++){
            $(`#rc${i}`).append(`<div class="recipe recipe${j}"><img src="image/recipe_blank.png"><p class="recipe-name">レシピ名</p></div>`);
        }
    }
    
    $(".food0 .recipe0 .recipe-name").text("基本のカレー");
    $(".food0 .recipe0 img").attr("src","image/curry_photo.jpg");
    $(".recipe0 img").on("click",function(){
        location.href="cook.html";
    });
    $(".food0 .recipe1 .recipe-name").text("ポテトサラダ");
    $(".food0 .recipe1 img").attr("src","image/potesara_photo.png");


    //パネル表示

    $(".paneltop").on("click", function () {
        const index = $(this).data("index");
        console.log("click panel #" + index);
        $(".panel").hide();
        $("#panel" + index).show();
    });
    $(".panel").hide();
    $("#panel1").show();

    $(".paneltop").on("click", function() {
        $(".paneltop").css("background-color", "#FAEEE0");
        $(".paneltop").css("color", "#7D5A50");
        $(this).css("background-color", "#FA907A");
        $(this).css("color", "white");
    });
    $("#paneltop1").css("background-color", "#FA907A");
    $("#paneltop1").css("color", "white");
    $("#paneltop2").css("background-color", "#FAEEE0");
    $("#paneltop2").css("color", "#7D5A50");
    $("#paneltop3").css("background-color", "#FAEEE0");
    $("#paneltop3").css("color", "#7D5A50");

    //パネル表示終わり
});