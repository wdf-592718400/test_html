var url0 = "http://127.0.0.1:18093";
//var url0 = "http://119.45.12.212:18093";
function setCookie(data){
	$.cookie('key', data.key);
	$.cookie('name', data.data[0].name);
	$.cookie('phone', data.data[0].phone);
	$.cookie('id', data.data[0].id);
}
function delCookis(){
	var params = {
		"key": $.cookie('key')
	}
	$.cookie('key', "");
	$.cookie('name', "");
	$.cookie('phone', "");
	$.cookie('id', "");
	$.ajax({
		cache: false,
		url: url0 + "/users/delete/key",
		dataType: "JSON",
		type: "post",
		contentType: 'application/json;charset=UTF-8',
		data: JSON.stringify(params)
	});
}
function judgeKey(){
	var params = {
		"key": $.cookie('key')
	}
	$.ajax({
		cache: false,
		url: url0 + "/users/select/key",
		dataType: "JSON",
		type: "post",
		contentType: 'application/json;charset=UTF-8',
		data: JSON.stringify(params),
		success: function(res) {
			if(res.key.length == 0){
				alert("please log in first!");
				location.href = ("login.html");
			}
		}
	});
}
