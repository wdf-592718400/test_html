var name;
var phone;
var id;
function next(){
	name = $("#name").val();
	phone = $("#phone").val();
	var params = {
		"name": name,
		"phone": phone
	};
	if(phone == "" || name == ""){alert("phone or name is empty!"); return 0;}
	$.ajax({
		type:"post",
		url:url0 + "/users/forget/password",
		dataType: "JSON",
		contentType: 'application/json;charset=UTF-8',
		data: JSON.stringify(params),
		success: function(res){
			if(res.status == 0){alert("phone or name is wrong!"); return 0;}
			id = res.data[0].id;
			$("#msg h1").text("reset password");
			$("#password0 span").text("enter password:");
			$("#password0 input").val("");
			$("#password1 span").text("password again:");
			$("#password1 input").val("");
			$("#next").val("reset");
			$("#next").attr({"onclick": "reset();"});
			$("#back").attr({"onclick": "back();"});
            $("#password0 input").attr({"style": "width:auto;"});
            $("#password1 input").attr({"style": "width:auto;"});
		}
	});
}
function reset(){
	var password0 = $("#password0 input").val();
	var password1 = $("#password1 input").val();
	var params = {
		"id": id,
		"password": password0
	};
	if(password0 == "" || password1 == ""){alert("password is empty!"); return;}
	if(password0 != password1){alert("two passwords are inconsistent!"); return;}
	$.ajax({
		type:"post",
		url:url0 + "/users/reset/password",
		dataType: "JSON",
		contentType: 'application/json;charset=UTF-8',
		data: JSON.stringify(params),
		success: function(res){
			if(res.status == 0){alert("new password cannot be the same as the old password!"); return;}
			alert("successful");
			location.href = ("login.html");
		}
	});
}
function back(){
	$("#msg h1").val("forget password");
	$("#password0 span").html('name:<span style="opacity: 0;">aaaaa</span>');
	$("#password0 input").val(name);
	$("#password1 span").html('phone:<span style="opacity: 0;">aaaa</span>');
	$("#password1 input").val(phone);
	$("#next").val("next");
	$("#next").attr({"onclick": "next();"});
	$("#back").attr({"onclick": "javascript :history.back(-1);"});
}
