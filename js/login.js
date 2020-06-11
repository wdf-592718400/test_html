function signIn() {
	var phone = $("#phone").val();
	var password = $("#password").val();
	var params = {
		"phone": phone,
		"password": password
	};
	if(phone == "" || password == "") {
		alert("phone or password is empty!");
		return;
	}
	$.ajax({
		url: url0 + "/users/select",
		dataType: "JSON",
		type: "post",
		contentType: 'application/json;charset=UTF-8',
		data: JSON.stringify(params),
		success: function(res) {
			if(res.data.length == 0) {
				alert("phone or password is wrong!");
				return 0;
			}
			setCookie(res);
			location.href = ("welcome.html");
		}
	});
}
