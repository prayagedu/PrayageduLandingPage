$(function() {
    
    });

    // ##########################    validation modal start  $######################
  $('#name, #schoolName').keypress(function (e) {    
        var charCode = (e.which) ? e.which : event.keyCode;    
        if (String.fromCharCode(charCode).match(/[^A-Za-z0-9 ]/g))    
            return false;                        
    }); 

    // Allow only numbers in phone
    $('#phoneNumber').keypress(function (e) {    
        var charCode = (e.which) ? e.which : event.keyCode;    
        if (String.fromCharCode(charCode).match(/[^0-9]/g))   
            // showToast("Number Doesnt match the length!", "warn"); 
            return false;                        
    });

    // Save button click
    $("#saveform").click(function() {
        let obj = {};
        obj.Module = ""; // set if needed
        obj.Page_key = "addLeads";
        let json = {};

        // Collect values
        json.Name = $("#name").val().trim();
        json.SchoolName = $("#schoolName").val().trim();
        json.PhoneNumber = $("#phoneNumber").val().trim();
        json.Email = $("#email").val().trim();
        json.Students = $("#students").val();

        // Validation
        if (json.Name === '' || json.PhoneNumber === '') {
        //    $(".form").notify("Important fields cannot be empty",{
        //        position: "top center",
        //     //    autoHide: true,
        //        className: "error"

        //    });
        //    showToast("Form saved successfully!", "success");
        //     showToast("Something went wrong!", "error");
            showToast("Important fields cannot be empty!", "warn");
            return false;
        }

        if (!/^\d{10}$/.test(json.PhoneNumber)) {
            showToast("Phone number must be exactly 10 digits!", "error");
            return false;
        }


        if (json.Students === '-1') {
        //    $("body").notify("Please select number of students", "warn");
           showToast("Please select number of students", "warn");
            return false;
        }

        // Example captcha if you still use it
        // if($("#captcha").length && $("#captcha").val()=='') {
        //     notify("warning","Invalid Captcha");
        //     return false;
        // }

        obj.JSON = json;

        console.log("Final payload:", obj);
        // TransportCall(obj); // <-- call your backend handler
    });

    // ##########################    validation modal end  $######################


    // #########################  VALIDATION FORM  START ##########################
     $('#leadsName').keypress(function (e) {    
            var charCode = (e.which) ? e.which : event.keyCode    
            if (String.fromCharCode(charCode).match(/[^A-Za-z0-9.'\-_ ]/g))    
                return false;                        
        }); 

        $("#inlineRadioID1").on("change", function()
        {
            $("#independentSchool1").show();
            $("#multipleschool1").hide();
        });

        $("#inlineRadioID2").on("change", function()
        {
            $("#independentSchool1").hide();
            $("#multipleschool1").show();
        });

        $('#schlname').keypress(function (e) {    
            var charCode = (e.which) ? e.which : event.keyCode    
            if (String.fromCharCode(charCode).match(/[^A-Za-z0-9.'\-_ ]/g))    
                return false;                        
        }); 

        $('#groupName1').keypress(function (e) {    
            var charCode = (e.which) ? e.which : event.keyCode    
            if (String.fromCharCode(charCode).match(/[^A-Za-z0-9.'\-_ ]/g))    
                return false;                        
        }); 

        $('#NoOfSchool1').keypress(function (e) {    
            var charCode = (e.which) ? e.which : event.keyCode    
            if (String.fromCharCode(charCode).match(/[^0-9]/g))    
                return false;                        
        });

        
        $('#PhoneNumber1').keypress(function (e) {    
            var charCode = (e.which) ? e.which : event.keyCode    
            if (String.fromCharCode(charCode).match(/[^0-9]/g))    
                return false;                        
        });

        $('#PhoneNumber1').change(function () {  
            var  number=$("#PhoneNumber1").val();
            if(number.length < 10)
            {
                notify("warning","Invalid Phone Number");
                $("#PhoneNumber1").val('');
                return false; 
            }                    
        });

        $("#addnewLeads").click(function(){

            let obj = {};
            obj.Module = "";
            obj.Page_key = "addLeads";
            let json = {};
            json.Name=$("#leadsName").val();


            if(!$('#inlineRadioID2')[0].checked && !$('#inlineRadioID1')[0].checked)
            {
                    notify("warning","Please Select  Organisation type");
                    return false;
            } 

            if( $('#inlineRadioID1')[0].checked ){ 
                json.OrganizationTypeID=$("#inlineRadioID1").val();
                json.schoolName=$("#schlname").val();
                if($("#schlname").val()==''){
                    notify("warning","Important Field cannot be Empty");
                    return false;
                }
            }

            if( $('#inlineRadioID2')[0].checked ){ 
                json.OrganizationTypeID=$("#inlineRadioID2").val();
                json.GroupName=$("#groupName1").val();  
                json.NoofSchool=$("#NoOfSchool1").val();
                if($("#groupName1").val()=='' || $("#NoOfSchool1").val()==''){
                    notify("warning","Important Field cannot be Empty");
                    return false;
                }
            }

            if($("#leadsName").val()=='' || $("#PhoneNumber1").val()=='')
            {
                    notify("warning","Important Field cannot be Empty");
                    return false;
            }

            if($("#roleInschool1").val()=='-1')
            {
                notify("warning","Please choose your role");
                return false;
            }

            json.PhoneNumber=$("#PhoneNumber1").val();  
            json.Role=$("#roleInschool1").val();

            if($("#captcha1").val()=='')
            {
                notify("warning","Invalid Captcha");
                return false;
            }

            json.Captcha=$("#captcha1").val();
            
            obj.JSON = json;
            TransportCall(obj);
      
        });

        //  ##################################  END HERE  ###################################
        function onSuccess(rc) {
        if (rc.return_code) {
            switch (rc.Page_key) {
                case "addLeads":
                    notify("success",rc.return_data);
                    location.reload();
                    break;

                default:
                    notify("error", rc.return_data);
            }
        } else {
            notify("error",rc.return_data);
        }
    }
    function onError()
    {

    }

 



