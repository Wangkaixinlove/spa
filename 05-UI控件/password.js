var PasswordTextbox = function(config) {
    var $pwd = $('<input type="password">'),
      $pwdText = $('<input type="text">'),
      $eye = $('<div></div>'),
      $div = $('<div class="wd-password">密码：</div>');
  
    $div.append($pwd);
    $div.append($eye);
    $div.append($pwdText);
    $(config.container).append($div);
  
    $pwd.on('input', function(){
      $pwdText.val($pwd.val());
    });
  
    $eye.mouseover(function(){
      $pwdText.css('z-index', '10');
    });
  
    $eye.mouseout(function(){
      $pwdText.css('z-index', '-10');
    });
  
    this.getPwd = function() {
      return $pwdText.val();
    };
  };
  
$(function(){
    var $btnAddPwd = $('#add-password'),
      $btnGetPwd = $('#get-password'),
      pwdTextboxs = [];
  
    $btnAddPwd.click(function(){
      var pwd = new PasswordTextbox({'container': 'div.main'});
      pwdTextboxs.push(pwd);
      $btnGetPwd.removeAttr('disabled');
    });
  
    $btnGetPwd.click(function() {
      pwdTextboxs.forEach(function(pwd) {
        alert(pwd.getPwd());
      });
    });
  });
  