judgeKey();
$("#header h1").html("welcome " + $.cookie('name'));
function exit(){
	delCookis();
	location.href = "login.html";
}
