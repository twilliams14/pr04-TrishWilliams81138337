//Submit Button
function submitFunction() {
    toastr.options.positionClass = "toast-top-right";
    //Had to remove the submit part because it kept refreshing
    //the page and removing my toastr notifications
    //document.forms["myForm"].submit();
    validateForm();
}
//Reset Button
function resetFunction() {
    toastr.options.positionClass = "toast-top-right";
    document.forms["myForm"].reset();
    toastr['info']("Form has been reset");
}
//Validate Form
function validateForm() {
    // User Section
    var username = document.getElementById("username").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    // Contact Section
    var phone = document.getElementById("phone").value;
    var fax = document.getElementById("fax").value;
    var email = document.getElementById("email").value;
    submitok = "true";

    if(username.length == 0)   {
        toastr['error']("Username must be filled");
        submitok = "false";
    }
    if(fname.length == 0)   {
        toastr['error']("First name must be filled");
        submitok = "false";
    }
    if(lname.length == 0)   {
        toastr['error']("Last name must be filled");
        submitok = "false";
    }
    if(phone.length == 0)   {
        toastr['error']("Phone number must be filled");
        submitok = "false";
    }
    if(fax.length == 0)   {
        toastr['error']("Fax number must be filled");
        submitok = "false";
    }
    if(email.length == 0)   {
        toastr['error']("Email must be filled");
        submitok = "false";
    }
    else    {
        toastr['success']("Form has been submitted");
        document.forms["myForm"].reset();
        submitok = "true";
    }
    
}

function checkDays() {
    var startdate = document.getElementById("startdate").value;
    var enddate = document.getElementById("enddate").value;
    var date1 = new Date(startdate);
    var date2 = new Date(enddate);

    //diff in time
    var timediff = date2.getTime() - date1.getTime();
    //diff in days
    var daydiff = (timediff / (1000 * 3600 * 24));
    document.getElementById("days").value = daydiff;

}
//Cost Calculation
//cost = document.getElementById("days").value = '${150} * ${days}';
//document.getElementById("cost").value = cost;