judgeKey();
$("#user_name").html($.cookie('name'));
layui.use('element', function(){
    var element = layui.element;
});
function signOut() {
    delCookie();
    location.href = "login.html";
}
