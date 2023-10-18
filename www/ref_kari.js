//初めのセット
var applicationKey = "b009093a7eb6aa5ee0b77053e3da884604e50eec5d84e351a6791cb99cd6aab5";
var clientKey = "044069d910f8a15cc57dc464fe4f37c74727de2339cb68c710bceddb231a78a5";
var ncmb  = new NCMB(applicationKey, clientKey);

$(document).ready(function() {
    //表示形式デフォルト
    $(".categoriesContents").hide();
    $(".limitSortContents").show();

    //カテゴリ表示にする
    $(".categoryIcon").on("click",function(){
        $(".limitSortContents").hide();
        $(".categoriesContents").show();
    });
    //$(".material-symbols-outlined sortIcon").on("click",function(){
     //   $(".limitSortContents").hide();
    //    $(".categoriesContents").show();
    //});