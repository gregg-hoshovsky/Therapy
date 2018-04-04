function executeAjax(urlIn,dataIn,routeTo_params_userId)
{
  // Router instance
  var router = this;
  // App instance
  var app = router.app;
  // Show Preloader
  var userId = routeTo_params_userId;
  //app.dialog.alert('userId ! '+userId);
  app.preloader.show();
  var user ;
  var parameters = {
    url: urlIn,
    method: 'POST',
    data:  dataIn,
    async: false,
    dataType: 'json',
    success: function(data, status, xhr){
      app.data=data;
      user=data;
    },
    complete: function(xhr, textStatus) {
    } ,
    error: function(xhr, status) {
      app.dialog.alert('error ! '+status);
    }
  };

  Framework7.request(parameters);
  app.preloader.hide();
  return user;

}
