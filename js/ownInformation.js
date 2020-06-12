console.log($.cookie("id"));

var params = {
    "id": $.cookie("id")
};

$.ajax({
    type:"post",
    url:$.cookie("address") + "/users/select/own/information",
    dataType: "JSON",
    contentType: 'application/json;charset=UTF-8',
    data: JSON.stringify(params),
    success: function(res){
        var time = new Date(res.data[0].create_time);
        var createTime = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
        var htmlStr = "<h2>name: <input type=\"text\" id=\"name0\" readonly=\"readonly\" value=\"" + res.data[0].name + "\"></h2>\n" +
            "        <h2>phone: <input type=\"text\" id=\"phone0\" readonly=\"readonly\" value=\"" + res.data[0].phone + "\"></h2>\n" +
            "        <h2>create time: <input type=\"text\" id=\"createTime0\" readonly=\"readonly\" value=\"" + createTime + "\"></h2>\n" +
            "        <input type=\"button\" value=\"edit\" id=\"button1\" onclick=\"edit0();\">\n" +
            "        <input type=\"button\" value=\"save\" id=\"button2\" onclick=\"save0();\">";
        $("#information").html(htmlStr);
    }
});

function edit0() {
    $("#name0").removeAttr("readonly");
    $("#phone0").removeAttr("readonly");
}
function save0() {
    let params = {
        "id": $.cookie("id"),
        "name": $("#name0").val(),
        "phone": $("#phone0").val(),
    };
    if(params.name == "" || params.phone == ""){
        alert("name or phone is empty!");
        return 0;
    }
    $.ajax({
        type:"post",
        url:$.cookie("address") + "/users/update",
        dataType: "JSON",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(params),
        success: function(res){
            $.cookie("name", res.data[0].name);
            $.cookie("phone", res.data[0].phone);
            alert("successful");
            window.parent.location.reload(false);
        }
    });
}
