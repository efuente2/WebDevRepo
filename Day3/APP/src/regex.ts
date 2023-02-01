function validate(){

  var phoneNumber =  (<HTMLInputElement>document.getElementById('number')).value;
  var email = (<HTMLInputElement>document.getElementById('email')).value;
  var website = (<HTMLInputElement>document.getElementById('website')).value;

  if(!phoneNumber || !email || !website){
    alert("Please fill out all fields");
    return false;
  }

  var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var websiteRGEX = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
  var emailRGEX = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  
  
  var phoneResult = phoneRGEX.test(phoneNumber);
  var emailResult = emailRGEX.test(email);
  var websiteResult = websiteRGEX.test(website);

  alert("phone:"+phoneResult + ", emailResult: "+emailResult + ", websiteResult: "+websiteResult);
  
  return false;
}