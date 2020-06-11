function signUp(){
	var name = $("#name").val();
	var phone = $("#phone").val();
	var password = $("#password").val();
	var params = {
		"name": name,
		"phone": phone,
		"password": password
	};
	if(name == "" || phone == "" || password == ""){alert("name or phone or password is empty!"); return;}

	$.ajax({
		type:"post",
		url:url0 + "/users/insert",
		dataType: "JSON",
		contentType: 'application/json;charset=UTF-8',
		data: JSON.stringify(params),
		success: function(res){
			if(res.status == 1){
				alert("successful");
				location.href = ("login.html");
			}
			else{
				alert("phone already registerde!");
				return 0;
			}
		}
	});
}
