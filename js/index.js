judgeKey();
$("#user_name").html($.cookie('name'));
// $.cookie("address", "http://127.0.0.1:18093");
$.cookie("address", "http://119.45.12.212:18093");
layui.use('element', function(){
    var element = layui.element;
});
function signOut() {
    delCookie();
    location.href = "login.html";
}

function test() {

}
function settings() {

}
function ownInformation() {
    $("#body0").attr({"src": "ownInformation.html"});
}
