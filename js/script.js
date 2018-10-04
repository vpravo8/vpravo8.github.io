var modalConfirm = function(callback){
    $("#btn-callback-carousel").on("click", function(){
        $("#callback-modal").modal('show');
      });
    $("#btn-callback-carousel2").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel3").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel4").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel5").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel6").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel7").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel8").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel9").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel10").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel11").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel12").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel13").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel14").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel15").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#call-back-law1").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#call-back-law2").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#call-back-law3").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#call-back-law4").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#call-back-law5").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#call-back-law6").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#call-back-law7").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#call-back-law8").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#call-back-law9").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#call-back-law10").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#call-back-law11").on("click", function(){
      $("#callback-modal").modal('show');
    });
    

    $("#btn-callback-carousel-ok").on("click", function(){
      callback(true);
      $("#callback-modal").modal('hide');
      sendEmailCallBack('inputName', 'inputNumber', false);
    });

    $("#success-modal-ok2").on("click", function(){
      callback(false);
      $("#success-modal2").modal('hide');
    });
  };
  
  modalConfirm(function(confirm){
    if(confirm){
      
    }else{
      
    }
  });

  function sendEmailCallBack(nameId, phoneId, flag) {
    var name = document.getElementById(nameId).value;
    var phone = document.getElementById(phoneId).value;
    var currentDate = new Date(); 
    var date = currentDate.getDate() + "." + (currentDate.getMonth()+1) + "." + currentDate.getFullYear()
    + " время заказа " + currentDate.getHours() + ":"+ (currentDate.getMinutes()<10?'0':'') + currentDate.getMinutes()

    if((typeof name !== 'undefined') && (typeof phone !== 'undefined') && (name !== '') && (phone !== '')) {
      emailjs.send("default_service","11",{name: name, phone: phone, date: date});
      if(flag){
        $("#success-modal").modal('show');
      }
      $("#success-modal-ok").on("click", function(){
        $("#success-modal").modal('hide');
      });
    } else {
      $("#errFields-modal").modal('show');
      $("#errFields-modal-ok").on("click", function(){
        $("#errFields-modal").modal('hide');
      });
    }
  }

  function sendEmailQuestions() {
    var email = document.getElementById('emailUser').value;
    var message = document.getElementById('messageUser').value;
    var currentDate = new Date(); 
    var date = currentDate.getDate() + "." + (currentDate.getMonth()+1) + "." + currentDate.getFullYear()
    + " " + currentDate.getHours() + ":"+ (currentDate.getMinutes()<10?'0':'') + currentDate.getMinutes();

    if((typeof email !== 'undefined') && (typeof message !== 'undefined') && (email !== '') && (message !== '')) {
      emailjs.send("default_service","10",{email: email, message: message, date: date});
      $("#success-modal").modal('show');
      $("#success-modal-ok").on("click", function(){
        $("#success-modal").modal('hide');
      });
    } else {
      $("#errFields-modal").modal('show');
      $("#errFields-modal-ok").on("click", function(){
        $("#errFields-modal").modal('hide');
      });
    }
  }

  function sendEmailContactForm() {
    var emailContact = document.getElementById('emailContact').value;
    var messageContact = document.getElementById('messageContact').value;
    var nameContact = document.getElementById('nameContact').value;
    var phoneContact = document.getElementById('phoneContact').value || '';
    var currentDate = new Date(); 
    var date = currentDate.getDate() + "." + (currentDate.getMonth()+1) + "." + currentDate.getFullYear()
    + " " + currentDate.getHours() + ":"+ (currentDate.getMinutes()<10?'0':'') + currentDate.getMinutes();

    if((typeof emailContact !== 'undefined') && (typeof messageContact !== 'undefined') && (typeof nameContact !== 'undefined') && (emailContact !== '') && (nameContact !== '') && (messageContact !== '')) {
      emailjs.send("default_service","12",{email: emailContact, message: messageContact, name: nameContact, phone: phoneContact, date: date});
      $("#success-modal").modal('show');
      $("#success-modal-ok").on("click", function(){
        $("#success-modal").modal('hide');
      });
    } else {
      $("#errFields-modal").modal('show');
      $("#errFields-modal-ok").on("click", function(){
        $("#errFields-modal").modal('hide');
      });
    }
  };

  function callBackPhone() {
    $("#callback-modal").modal('show');
  };
 
  var isOpenLaw1 = false;
  $('#btn-law1').click(function(){   
    if(!isOpenLaw1) {
      $('#law1-chevron').removeClass('fa-chevron-down');
      $('#law1-chevron').addClass('fa-chevron-up');
    } else {
      $('#law1-chevron').removeClass('fa-chevron-up');
      $('#law1-chevron').addClass('fa-chevron-down');
    }
    isOpenLaw1 = !isOpenLaw1;
  });

  var isOpenLaw2 = false;
  $('#btn-law2').click(function(){   
    if(!isOpenLaw2) {
      $('#law2-chevron').removeClass('fa-chevron-down');
      $('#law2-chevron').addClass('fa-chevron-up');
    } else {
      $('#law2-chevron').removeClass('fa-chevron-up');
      $('#law2-chevron').addClass('fa-chevron-down');
    }
    isOpenLaw2 = !isOpenLaw2;
  });

  var isOpenLaw3 = false;
  $('#btn-law3').click(function(){   
    if(!isOpenLaw3) {
      $('#law3-chevron').removeClass('fa-chevron-down');
      $('#law3-chevron').addClass('fa-chevron-up');
    } else {
      $('#law3-chevron').removeClass('fa-chevron-up');
      $('#law3-chevron').addClass('fa-chevron-down');
    }
    isOpenLaw3 = !isOpenLaw3;
  });

  var isOpenLaw4 = false;
  $('#btn-law4').click(function(){   
    if(!isOpenLaw4) {
      $('#law4-chevron').removeClass('fa-chevron-down');
      $('#law4-chevron').addClass('fa-chevron-up');
    } else {
      $('#law4-chevron').removeClass('fa-chevron-up');
      $('#law4-chevron').addClass('fa-chevron-down');
    }
    isOpenLaw4 = !isOpenLaw4;
  });

  var isOpenLaw5 = false;
  $('#btn-law5').click(function(){   
    if(!isOpenLaw5) {
      $('#law5-chevron').removeClass('fa-chevron-down');
      $('#law5-chevron').addClass('fa-chevron-up');
    } else {
      $('#law5-chevron').removeClass('fa-chevron-up');
      $('#law5-chevron').addClass('fa-chevron-down');
    }
    isOpenLaw5 = !isOpenLaw5;
  });

  var isOpenLaw6 = false;
  $('#btn-law6').click(function(){   
    if(!isOpenLaw6) {
      $('#law6-chevron').removeClass('fa-chevron-down');
      $('#law6-chevron').addClass('fa-chevron-up');
    } else {
      $('#law6-chevron').removeClass('fa-chevron-up');
      $('#law6-chevron').addClass('fa-chevron-down');
    }
    isOpenLaw6 = !isOpenLaw6;
  });

  var isOpenLaw7 = false;
  $('#btn-law7').click(function(){   
    if(!isOpenLaw7) {
      $('#law7-chevron').removeClass('fa-chevron-down');
      $('#law7-chevron').addClass('fa-chevron-up');
    } else {
      $('#law7-chevron').removeClass('fa-chevron-up');
      $('#law7-chevron').addClass('fa-chevron-down');
    }
    isOpenLaw7 = !isOpenLaw7;
  });

  var isOpenLaw8 = false;
  $('#btn-law8').click(function(){   
    if(!isOpenLaw8) {
      $('#law8-chevron').removeClass('fa-chevron-down');
      $('#law8-chevron').addClass('fa-chevron-up');
    } else {
      $('#law8-chevron').removeClass('fa-chevron-up');
      $('#law8-chevron').addClass('fa-chevron-down');
    }
    isOpenLaw8 = !isOpenLaw8;
  });

  var isOpenLaw9 = false;
  $('#btn-law9').click(function(){   
    if(!isOpenLaw9) {
      $('#law9-chevron').removeClass('fa-chevron-down');
      $('#law9-chevron').addClass('fa-chevron-up');
    } else {
      $('#law9-chevron').removeClass('fa-chevron-up');
      $('#law9-chevron').addClass('fa-chevron-down');
    }
    isOpenLaw9 = !isOpenLaw9;
  });

  var isOpenLaw10 = false;
  $('#btn-law10').click(function(){   
    if(!isOpenLaw10) {
      $('#law10-chevron').removeClass('fa-chevron-down');
      $('#law10-chevron').addClass('fa-chevron-up');
    } else {
      $('#law10-chevron').removeClass('fa-chevron-up');
      $('#law10-chevron').addClass('fa-chevron-down');
    }
    isOpenLaw10 = !isOpenLaw10;
  });

  var isOpenLaw11 = false;
  $('#btn-law11').click(function(){   
    if(!isOpenLaw11) {
      $('#law11-chevron').removeClass('fa-chevron-down');
      $('#law11-chevron').addClass('fa-chevron-up');
    } else {
      $('#law11-chevron').removeClass('fa-chevron-up');
      $('#law11-chevron').addClass('fa-chevron-down');
    }
    isOpenLaw11 = !isOpenLaw11;
  });