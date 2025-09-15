//global variable 
var done_tag;
var action;
var formid; 
var ServicePath = document.URL.slice(0, document.URL.lastIndexOf('/') + 1) + "";
// calling web service
function TransportCall(data) { 
    
    data.MSC = $.md5(new Date().getDate().toString().padStart(2, "0"));
    var srvdata = JSON.stringify(data);
    $.ajax({
        data: srvdata,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        async: true,
        url: GetUrl(),
        success: function showData(arg){
            onSuccess(arg);
        },
        error: function err(arg) {
            if(arg.status == 404){
                alert(arg.statusText);
                // window.open("../", '_self');
            }else if(arg.status == 401){
                alert(arg.statusText);
            }
            onError(arg);
        }
    });
}

function GetUrl() {
    // if (ServicePath.toLocaleLowerCase().indexOf("pages") >= 0) 
    //     return ServicePath.toLocaleLowerCase().replace("pages/", "") + "api/index.php";
    // else 
        return ServicePath + "api/index.php";
}