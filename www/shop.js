$(document).ready(function () {

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
        $(this).css("background-color", "#FA7A5F");
        $(this).css("color", "white");
    });
    $("#paneltop1").css("background-color", "#FA7A5F");
    $("#paneltop1").css("color", "white");
    $("#paneltop2").css("background-color", "#FAEEE0");
    $("#paneltop2").css("color", "#7D5A50");
    $("#paneltop3").css("background-color", "#FAEEE0");
    $("#paneltop3").css("color", "#7D5A50");

    //パネル表示終わり
    
    //商品詳細切り替え

    $(".contentsimage").on("click" , function (){
        const imageindex = $(this).data("index");
        console.log("click image #" + imageindex);
        $(".imageDetail").hide();
        $(".panel").hide();
        $("#image" + imageindex).show();
    });
    $(".imageDetail").hide();

    $(".paneltop").on("click", function () {
        $(".imageDetail").hide();
    });

    //商品詳細切り替え終わり

    //マイページ
    $("#personal").on("click" , function(){
        $(".panel").hide();
        $(".Mypage").hide();
        $("#Personal").show();
    });
    $("#bought").on("click" , function(){
        $(".panel").hide();
        $(".Mypage").hide();
        $("#Bought").show();
    });
    $(".Mypage").hide();

    $(".paneltop").on("click", function () {
        $(".Mypage").hide();
    });
    

    //買い物かご
    $(".cartAdd").on("click" , function (){
        console.log("add");
    });

    $(".buy").on("click" , function(){
        $("#panel2").hide();
        $(".cartDetail2").show();
    });
    $(".cartDetail2").hide();

    $(".buyOK").on("click" , function(){
        $("#panel1").show();
        $(".cartDetail2").hide();
        $("#paneltop1").css("background-color", "#FA7A5F");
        $("#paneltop1").css("color", "white");
        $("#paneltop2").css("background-color", "#FAEEE0");
        $("#paneltop2").css("color", "#7D5A50");
        $("#paneltop3").css("background-color", "#FAEEE0");
        $("#paneltop3").css("color", "#7D5A50");
    });

});

var applicationKey="b009093a7eb6aa5ee0b77053e3da884604e50eec5d84e351a6791cb99cd6aab5";
var clientKey="044069d910f8a15cc57dc464fe4f37c74727de2339cb68c710bceddb231a78a5";
var ncmb = new NCMB(applicationKey, clientKey);


//買い物かご

function seeCart(){
    console.log("see");
    var addCartData = ncmb.DataStore("addCartData");
    var cartProduct = "";
    addCartData.equalTo("buy", "n")
    .fetchAll()
    .then(function(results){
    console.log(JSON.stringify(results));
    for(var i of results){
    cartProduct += '<p>' +i['product'] + '</p>';
    }
    document.getElementById("cartproduct").innerHTML = cartProduct;
    });

    var cartQuantity = "";
    addCartData.equalTo("buy", "n").fetchAll()
    .then(function(results){
    console.log(JSON.stringify(results));
    for(var i of results){
    cartQuantity += '<p>' +i['quantity'] + '</p>';
    }
    document.getElementById("cartquantity").innerHTML = cartQuantity;
    });

    var cartPrice = "";
    addCartData.equalTo("buy", "n").fetchAll()
    .then(function(results){
    console.log(JSON.stringify(results));
    for(var i of results){
    cartPrice += '<p>' +i['price'] + '</p>';
    }
    document.getElementById("cartprice").innerHTML = cartPrice;
    });


    
    var cartDeleteButton = "";
    addCartData.equalTo("buy", "n").fetchAll()
    .then(function(results){
    for(var i of results){
        cartDeleteButton += '<button class ="deleteButton" onclick="deleteFromCart(\'' + i.objectId + '\')">削除</button>'
    }
    })
    .then(function(){
        document.getElementById("cartdelete").innerHTML = cartDeleteButton
    })
    
}

function seeBought(){
    console.log("seeB");
    var addCartData = ncmb.DataStore("addCartData");

    var boughtDay = "";
    addCartData.equalTo("buy", "y")
    .fetchAll()
    .then(function(results){
        // console.log(JSON.stringify(results));
    for(var i of results){
        let day=new Date(i["createDate"]);
        let yy=day.getFullYear();
        let mm=day.getMonth()+1;
        let dd=day.getDate();
        console.log(`${yy}/${mm}/${dd}`)
        boughtDay += `<p>${yy}/${mm}/${dd}</p>`;
    }
    document.getElementById("boughtday").innerHTML = boughtDay;
    });

    var boughtProduct = "";
    addCartData.equalTo("buy", "y")
    .fetchAll()
    .then(function(results){
    console.log(JSON.stringify(results));
    for(var i of results){
        boughtProduct += '<p>' +i['product'] + '</p>';
    }
    document.getElementById("boughtproduct").innerHTML = boughtProduct;
    });

    var boughtQuantity = "";
    addCartData.equalTo("buy", "y")
    .fetchAll()
    .then(function(results){
        console.log(JSON.stringify(results));
    for(var i of results){
    boughtQuantity += '<p>' +i['quantity'] + '</p>';
    }
    document.getElementById("boughtquantity").innerHTML = boughtQuantity;
    });

    var boughtPrice = "";
    addCartData.equalTo("buy", "y")
    .fetchAll()
    .then(function(results){
        console.log(JSON.stringify(results));
    for(var i of results){
    boughtPrice += '<p>' +i['price'] + '</p>';
    }
    document.getElementById("boughtprice").innerHTML = boughtPrice;
    });
}

function deleteFromCart(objectId){
    var AddCartData = ncmb.DataStore("addCartData");
    var addCartData = new AddCartData;

    addCartData.set("objectId", objectId).delete()
    .then(function(){
        seeCart()
    });
    
}

function buyOK(){
    console.log("buy");
    var addCartData = ncmb.DataStore("addCartData");
    var cartProduct = "";
    addCartData.equalTo("buy", "n")
    .fetchAll()
    .then(function(results){
    console.log(JSON.stringify(results));
    for(var i of results){
    cartProduct += '<p>' +i['product'] + '</p>';
    }
    document.getElementById("buyOKproduct").innerHTML = cartProduct;
    });

    var cartQuantity = "";
    addCartData.equalTo("buy", "n").fetchAll()
    .then(function(results){
    console.log(JSON.stringify(results));
    for(var i of results){
    cartQuantity += '<p>' +i['quantity'] + '</p>';
    }
    document.getElementById("buyOKquantity").innerHTML = cartQuantity;

    });
    
    
}

/*
function cartDelete(){
    console.log("delete");
    var addCartData = ncmb.DataStore("addCartData");
    //var cartDelete =
    const objectId =addCartData.get("objectId");
    const obj = addCartData.equalTo("objectId", objectId)
    .fetch();
    console.log(obj.get("objectId"));
    obj .delete();
}
*/



function buy(){
    console.log("buy");
    var addCartData = ncmb.DataStore("addCartData");
    addCartData.fetchAll()
    .then(function(results){
    var not_purchased = results.filter(result => result.buy = 'n');
    for(var i of not_purchased){
    addCartData.equalTo("objectId", i.objectId).fetch()
      .then(function(result){
        result.set("buy", "y").update();
      });
  }
}) 
    
    /*.equalTo("buy", "n")
    .fetch()    
    .then(function(results){
            results[0].set("buy", "y");
            return results.update();
    });
    */
    
}


/*
function buy(){
    console.log("buy");
    var addCartData = ncmb.DataStore("addCartData");
    addCartData.equalTo("buy", "n")
    .fetch()    
    .then(function(results){
        for(let i = 0; i < results.length ; i++){
            let nory = results[i];
            console.log(nory);
            if(nory === n){
            results.set("buy", "y");
            return results.update();
            }
            }
    });
    
}
*/

/*
function buy(){
    console.log("buy");
    var addCartData = ncmb.DataStore("addCartData");
    let addcartdata = new addCartData();
    addCartData.equalTo("buy", "n")
    .fetch()    
    .then(function(){
            addcartdata.set("buy", "y")
                        .save();
            return addcartdata.update();
            
    });
    
}
*/






//買い物かごの中身

/*
function addCart(){
    console.log("addCart");
    
    var cartAdd = document.getElementsByClassName("cartAdd");

    console.log(cartAdd.length);

    //for (i = 0; i < cartAdd.length; i++){
        //cartAdd[i].addEventListener("click",function(){

        var addCartData = ncmb.DataStore("addCartData");
        var addcartdata = new addCartData();
        const productindex = $(this).data("index");
        console.log("productindex" + productindex);
        var quantity = document.getElementById("quantity"+productindex).value;
        var product = document.getElementById("product"+productindex).textContent;
        console.log("quantity" + quantity)
        console.log("product" + product)
        addcartdata.set("quantity", quantity)
                    .set("product", product)
                    .save();
        //});
    //}
}


function addCart1(){
    var addCartData = ncmb.DataStore("addCartData");
    var addcartdata = new addCartData();
    var quantity = document.getElementById("quantity1").value;
    var product = document.getElementById("product1").textContent;
    console.log(quantity)
    console.log(product)
    addcartdata.set("quantity1", quantity)
                .set("product1", product)
                .save();
}
function addCart2(){
    var addCartData = ncmb.DataStore("addCartData");
    var addcartdata = new addCartData();
    var quantity = document.getElementById("quantity2").value;
    var product = document.getElementById("product2").textContent;
    console.log(quantity)
    console.log(product)
    addcartdata.set("quantity2", quantity)
                .set("product2", product)
                .save();
}
function addCart3(){
    var addCartData = ncmb.DataStore("addCartData");
    var addcartdata = new addCartData();
    var quantity = document.getElementById("quantity3").value;
    var product = document.getElementById("product3").textContent;
    console.log(quantity)
    console.log(product)
    addcartdata.set("quantity3", quantity)
                .set("product3", product)
                .save();
}
function addCart4(){
    var addCartData = ncmb.DataStore("addCartData");
    var addcartdata = new addCartData();
    var quantity = document.getElementById("quantity4").value;
    var product = document.getElementById("product4").textContent;
    console.log(quantity)
    console.log(product)
    addcartdata.set("quantity4", quantity)
                .set("product4", product)
                .save();
}
function addCart5(){
    var addCartData = ncmb.DataStore("addCartData");
    var addcartdata = new addCartData();
    var quantity = document.getElementById("quantity5").value;
    var product = document.getElementById("product5").textContent;
    console.log(quantity)
    console.log(product)
    addcartdata.set("quantity5", quantity)
                .set("product5", product)
                .save();
}
function addCart6(){
    var addCartData = ncmb.DataStore("addCartData");
    var addcartdata = new addCartData();
    var quantity = document.getElementById("quantity6").value;
    var product = document.getElementById("product6").textContent;
    console.log(quantity)
    console.log(product)
    addcartdata.set("quantity6", quantity)
                .set("product6", product)
                .save();
}
function addCart7(){
    var addCartData = ncmb.DataStore("addCartData");
    var addcartdata = new addCartData();
    var quantity = document.getElementById("quantity7").value;
    var product = document.getElementById("product7").textContent;
    console.log(quantity)
    console.log(product)
    addcartdata.set("quantity7", quantity)
                .set("product7", product)
                .save();
}
function addCart8(){
    var addCartData = ncmb.DataStore("addCartData");
    var addcartdata = new addCartData();
    var quantity = document.getElementById("quantity8").value;
    var product = document.getElementById("product8").textContent;
    console.log(quantity)
    console.log(product)
    addcartdata.set("quantity8", quantity)
                .set("product8", product)
                .save();
}
function addCart9(){
    var addCartData = ncmb.DataStore("addCartData");
    var addcartdata = new addCartData();
    var quantity = document.getElementById("quantity9").value;
    var product = document.getElementById("product9").textContent;
    console.log(quantity)
    console.log(product)
    addcartdata.set("quantity9", quantity)
                .set("product9", product)
                .save();
}
function addCart10(){
    var addCartData = ncmb.DataStore("addCartData");
    var addcartdata = new addCartData();
    var quantity = document.getElementById("quantity10").value;
    var product = document.getElementById("product10").textContent;
    console.log(quantity)
    console.log(product)
    addcartdata.set("quantity10", quantity)
                .set("product10", product)
                .save();
}
function addCart11(){
    var addCartData = ncmb.DataStore("addCartData");
    var addcartdata = new addCartData();
    var quantity = document.getElementById("quantity11").value;
    var product = document.getElementById("product11").textContent;
    console.log(quantity)
    console.log(product)
    addcartdata.set("quantity11", quantity)
                .set("product11", product)
                .save();
}
function addCart12(){
    var addCartData = ncmb.DataStore("addCartData");
    var addcartdata = new addCartData();
    var quantity = document.getElementById("quantity12").value;
    var product = document.getElementById("product12").textContent;
    console.log(quantity)
    console.log(product)
    addcartdata.set("quantity12", quantity)
                .set("product12", product)
                .save();
}
*/