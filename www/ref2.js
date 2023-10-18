//初めのセット
var applicationKey = "b009093a7eb6aa5ee0b77053e3da884604e50eec5d84e351a6791cb99cd6aab5";
var clientKey = "044069d910f8a15cc57dc464fe4f37c74727de2339cb68c710bceddb231a78a5";
var ncmb  = new NCMB(applicationKey, clientKey);

$(document).ready(function() {
    //表示形式デフォルト
    $(".categoriesContents").hide();
    $(".limitSortContents").show();

    let refFood = ncmb.DataStore("refFood");
    refFood.equalTo("category", "野菜")
            .equalTo("limitQuantity" , "今日まで")
            .fetchAll()
            .then(function(results){
                $(".limitSortContents").append('<h4>'+"今日まで"+'</h4>');
                for (let i = 0; i < results.length; i++) {
                    // let limitYear = results[i].get("limitYear");
                    // let limitMonth = results[i].get("limitMonth");
                    // let limitDate = results[i].get("limitDate");
                    // let limit = limitYear+"年"+limitMonth+"月"+limitDate+"日";
                    let food = results[i].get("food");
                    $(".limitSortContents").append("<div class='limitFoodContents'><img src='./image/kyabetsu.jpeg'>"+food+"<button class='toRecipe'>レシピ</button></p></div>");
                } 
            })
            .catch(function(err){
                console.log(err);
            });

    let refFood = ncmb.DataStore("refFood");
    refFood.equalTo("category", "野菜")
            .equalTo("limitQuantity" , "3日以内")
            .fetchAll()
            .then(function(results){
                $(".limitSortContents").append('<h4>'+"3日以内"+'</h4>');
                for (let i = 0; i < results.length; i++) {
                    let food = results[i].get("food");
                    $(".limitSortContents").append("<div class='limitFoodContents'><img src='./image/kyabetsu.jpeg'>"+food+"<button class='toRecipe'>レシピ</button></p></div>");
                } 
            })
            .catch(function(err){
                console.log(err);
            });

        //カテゴリ別のカテゴリ選択デフォルト
    $("#cOfVegetable").css("background-color", "tomato");
    $("#cOfVegetable").css("color", "white");

    // 冷蔵庫表示形式
    $(".sortIcon").on("click", function() {
        $(".categoriesContents").hide();
        $("#sortName").text("賞味期限順");
        $(".limitSortContents").show();
        $(".sortIcon").css("color","white");
        $(".sortIcon").css("background-color","brown");
        $(".categoryIcon").css("color","brown");
        $(".categoryIcon").css("background-color","white");
    });

    $(".categoryIcon").on("click", function() {
        $(".limitSortContents").hide();
        $("#sortName").text("カテゴリー別");
        $(".categoriesContents").show();
        $(".sortIcon").css("color","brown");
        $(".sortIcon").css("background-color","white");
        $(".categoryIcon").css("color","white");
        $(".categoryIcon").css("background-color","brown");
    });

    // //プラマイの動き
    // $(".minusIcon").on("click", function() {
    //     let countNumber = $(this).next().text();
    //     Number(countNumber);
    //     countNumber -= 1;
    //     $(this).next().text(countNumber);

    //     //ニフクラに保存する処理をここに書く
    //     //どの数を？となってしまうどうしよう
    // });

    // $(".plusIcon").on("click", function() {
    //     let countNumber = $(this).prev().text();
    //     Number(countNumber);
    //     countNumber += 1;
    //     //1+1=11になっちゃう。テキストのままなになってるのか？
    //     $(this).prev().text(countNumber);

    //     //ニフクラに保存する処理をここに書く
    // });

    //カテゴリ別のカテゴリ切り替え
    $(".categories p").on("click", function() {
        let categoryName = $(this).attr('id');
        alert(categoryName);  //ok
        $(".categories p").css("background-color", "#FAEEE0");
        $(".categories p").css("color", "black");
        $(this).css("background-color", "tomato");
        $(this).css("color", "white");


    });

    //レシピボタン押したら
    $(".toRecipe").on("click", function() {
        window.location.href = "./recipe.html";
    });

    //addアイコン押したら
    $("#add").on("click", function() {
        window.location.href = "./refAdd.html";
    });

    //photoアイコン押したら
    $("#photo").on("click", function() {
        window.location.href = "./refPhoto.html";
    });

    //ここからrefAdd.html
        //戻るアイコンで冷蔵庫ページに戻る
    $(".backIcon").on("click", function() {
        window.location.href = "./ref.html";
    });

    //購入日用に今日の取得
    let objDate = new Date();
    let year = objDate.getFullYear();
    let month = objDate.getMonth()+1;
    let date = objDate.getDate();
    $("#buyDate").text(year+"年"+month+"月"+date+"日");

    //addカテゴリボタン押したら
    $(".addCategories h4").on("click", function() {
        $(".addCategories h4").css("color", "brown");
        $(".addCategories h4").css("background-color", "white");
        $(this).css("color", "white");
        $(this).css("background-color", "tomato");
        let category = $(this).attr("id");
        if(category == "addOfVegetable") {
            $("#candidates").html("<input type='checkbox' id='foods'>キャベツ <input type='checkbox'>大根 <input type='checkbox'>ニンジン <input type='checkbox'>ごぼう <input type='checkbox'>レタス <input type='checkbox'>じゃがいも <input type='checkbox'>なす <input type='checkbox'>トマト <input type='checkbox'>きゅうり <input type='checkbox'>かぼちゃ <input type='checkbox'>玉ねぎ <input type='checkbox'>ニンニク <input type='checkbox'>キャベツ <input type='checkbox'>ほうれん草 <input type='checkbox'>サツマイモ<br><br>数量： <select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>");
        } else if (category=="addOfMeat") {
            $("#candidates").html("<p>鶏肉</p><input type='checkbox'>鶏もも肉 <input type='checkbox'>鶏むね肉 <input type='checkbox'>手羽先 <input type='checkbox'>ささみ <input type='checkbox'>鶏小間切れ<p>豚肉</p><input type='checkbox'>豚小間切れ <input type='checkbox'>豚ロース <input type='checkbox'>豚ロースとんかつ用 <input type='checkbox'><p>牛肉</p><input type='checkbox'>牛カルビ <input type='checkbox'>牛ロース <input type='checkbox'>牛ステーキ肉 <input type='checkbox'>牛角切り <input type='checkbox'>牛角切り <input type='checkbox'>牛もも切り落とし<br><br>量： <input type='text' style='width:100px; border:none; border-radius:5px;'> g");
        } else if (category=="addOfProcessed") {
            $("#candidates").html('<input type="checkbox">かまぼこ <input type="checkbox">ヨーグルト <input type="checkbox">ハム <input type="checkbox">ウィンナー <input type="checkbox">チーズ <input type="checkbox">ジャム<br><br>数量： <select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>');
        }
    });

    // manualInputのok押したら
    $("#manualInput button").on("click", function() {
        let food = $("#manualInput input").val();
        $("#manualInput").text(food);
        $("#manualInput").append("<select id='addNumber'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>");
        //add決定ボタン押したら
        $("#addDecision").on("click", function() {
            let buyYear = $("#buyYear").val();
            let month = $("#buyMonth").val();
            let date = $("#buyDate").val();
            let addNumber = $("#addNumber").val(); 
            //食材は先に決めとく方針
            var refFood = ncmb.DataStore("refFood");
            var newFood = new refFood();
            //データストアに保存するデータを定義
            newFood.set("category", "野菜")
            newFood.set("food", food)
            newFood.set("limitYear", buyYear)
            newFood.set("limitMonth", month)
            newFood.set("limitDate", date)  //治んなかったらdateのところ31っていうテキストにする
            newFood.set("quantity", addNumber)
            //保存
            .save();



        });
    });



});

// const cameraSize = { w: 360, h: 240 };
// const resolution = { w: 1080, h: 720 };
// let video;
// let media;

// // video要素をつくる
// video          = document.createElement('video');
// video.id       = 'video';
// video.width    = cameraSize.w;
// video.height   = cameraSize.h;
// // video.autoplay = true;

// // video要素にWebカメラの映像を表示させる
// media = navigator.mediaDevices.getUserMedia({
//   audio: false,
//   video: {
//     width: { ideal: resolution.w },
//     height: { ideal: resolution.h }
//   }
// }).then(function(stream) {
//   video.srcObject = stream;
// });