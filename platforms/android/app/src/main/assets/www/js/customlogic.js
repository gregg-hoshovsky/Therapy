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

function client_loader(params)
{
//  console.log('function-client',app.data.clients);
///  console.log('function-param',params.name);
//  console.log('function-param -id',params.id);
//  app.dialog.alert('Hello World' + params.name);
//  console.log('function-this', this);// Must return an object
//  console.log('function-this', app.data);// Must return an object
  var xx = app.data.clients[params.name].profiles[params.id];
//  console.log('function-xx'+app.data.clients[params.name].profiles[params.id]);
//  console.log('function-'+xx.clientName,xx.memory);
  bListSelect= [];
  bListSelect.push( {"value": "Select one","selected":false});
  for (i = 0; i < app.data.bodyScanList.length; i++) {
    if ( app.data.bodyScanList[i] == xx.bodyScan)
      bListSelect.push( {"value": app.data.bodyScanList[i],"selected":true});
    else
      bListSelect.push( {"value": app.data.bodyScanList[i],"selected":false});
  }
  negativeConList=[];
  negativeConList.push( {"value": "Select one","selected":false});
  for (i = 0; i < app.data.negativeConList.length; i++) {
    if ( app.data.negativeConList[i] == xx.negativeCon)
      negativeConList.push( {"value": app.data.negativeConList[i],"selected":true});
    else
      negativeConList.push( {"value": app.data.negativeConList[i],"selected":false});
  }
  xx['bscan']=bListSelect;
  xx['negativeConList']=negativeConList;

  return xx;

}
