// var url0 = "http://127.0.0.1:18093";
var url0 = "http://119.45.12.212:18093";
function setCookie(data){
	$.cookie('key', data.key, 3600);
	$.cookie('name', data.data[0].name, 3600);
	$.cookie('phone', data.data[0].phone, 3600);
	$.cookie('id', data.data[0].id, 3600);
}
function delCookie(){
	var key0 = $.cookie('key');
	let params = {
		"key": key0
	};
    $.ajax({
        cache: false,
        url: url0 + "/users/delete/key",
        dataType: "JSON",
        type: "post",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(params)
    });
	$.cookie('key', "");
	$.cookie('name', "");
	$.cookie('phone', "");
	$.cookie('id', "");
    $.cookie('address', "");
}
function judgeKey(){
	let params = {
		"key": $.cookie('key')
	};
	$.ajax({
		cache: false,
		url: url0 + "/users/select/key",
		dataType: "JSON",
		type: "post",
		contentType: 'application/json;charset=UTF-8',
		data: JSON.stringify(params),
		success: function(res) {
			if(parseInt(res.key.length) === 0){
				alert("please log in first!");
				location.href = ("login.html");
			}
		}
	});
}
