// jQuery(document).ready(function($) {
//   "use strict";

//   //Contact
//   $('form.contactForm').submit(function() {
//     var f = $(this).find('.form-validate'),
//       ferror = false,
//       emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

//     f.children('input').each(function() { // run all inputs

//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'email':
//             if (!emailExp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'checked':
//             if (! i.is(':checked')) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'regexp':
//             exp = new RegExp(exp);
//             if (!exp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     f.children('textarea').each(function() { // run all inputs

//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     if (ferror) return false;
//     else var str = $(this).serialize();
//     var action = $(this).attr('action');
//     if( ! action ) {
//       action = 'contactform/contactform.php';
//     }
//     $.ajax({
//       type: "POST",
//       url: action,
//       data: str,
//       success: function(msg) {
//         // alert(msg);
//         if (msg == 'OK') {
//           $("#sendmessage").addClass("show");
//           $("#errormessage").removeClass("show");
//           $('.contactForm').find("input, textarea").val("");
//         } else {
//           $("#sendmessage").removeClass("show");
//           $("#errormessage").addClass("show");
//           $('#errormessage').html(msg);
//         }

//       }
//     });
//     return false;
//   });

// });












function validate(form){
  let that = this;

  var name,email,phone,skype,textMsg;
  name = document.getElementById("txt_name");
  email = document.getElementById("txt_email");
  phone = document.getElementById("txt_phone");
  skype = document.getElementById("txt_skype");
  textMsg = document.getElementById("txt_message");

  if(name.checkValidity() === false || name.value.trim()==""){
    window.alert("Invalid Name");
    name.style.color = "red"
    return false;
  }
  if(email.checkValidity() === false || email.value.trim()==""){
    window.alert("Invalid email id");
    email.style.color = "red"
    return false;
  }
  if(phone.checkValidity() === false || phone.value.trim()==""){
    window.alert("Invalid phone");
    phone.style.color = "red"
    return false;
  }
  if(skype.checkValidity() === false || skype.value.trim()==""){
    window.alert("Invalid Skpe");
    skype.style.color = "red"
    return false;
  }
  if(textMsg.checkValidity() === false || textMsg.value.trim()==""){
    window.alert("Invalid TextMessage");
    textMsg.style.color = "red"
    return false;
  }
  

  //Extra Check
  var reg = /^([a-z0-9\.-]+)@([a-z0-9-]+)([\.])([a-z]{2,8})(\.[a-z]{2,8})?$/
  if(reg.test(email.value)===false){

    window.alert("Invalid Email Id");

    //email.style.backgroundColor = "red"
    email.style.color = "red"
    return false;
  }





  debugger;
  return true;
}