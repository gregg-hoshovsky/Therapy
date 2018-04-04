// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: '', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
});

// Init/Create left panel view


// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {

  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();
  var passwordLength = password.length;
  if(passwordLength > 8)
  {
var data = executeAjax('https://www.eksanalytics.com/therapy/index.php',{ username:username, password: password });
//app.dialog.alert(data.firstName);

console.log(data);
console.log(data.clients);
        // Close login screen
        app.loginScreen.close('#my-login-screen');
        //mainView.router.navigate('/clientSelect/');
        mainView.router.navigate('/selectClient/');
   } else
   {
     // Alert username and password
   app.dialog.alert('Username: ' + username + '<br>Password: ' + password + '<br>passwordLength:' + passwordLength);

  }


});
/*
function executeAjax(urlIn,dataIn)
{
  // Router instance
  var router = this;
  // App instance
  var app = router.app;
  // Show Preloader
  //var userId = routeTo_params_userId;
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
*/
