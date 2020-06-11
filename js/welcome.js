judgeKey();
$("#header h1").html("welcome " + $.cookie('name'));
function exit(){
    delCookie();
	location.href = "login.html";
}
