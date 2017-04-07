<html ng-app="App">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Simple SPA app for DPD">
    <base href="/dpd-task-frontend/">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-route.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-cookies.js"></script>
    <script type="text/javascript" src="route.js"></script>

    <script src="controllers/user-controller.js" type="text/javascript"> </script>
    <script src="controllers/post-controller.js" type="text/javascript"> </script>
    <script src="controllers/comment-controller.js" type="text/javascript"> </script>


    <title> DPD user SPA </title>
  </head>

  <body>
    <div ng-view> </div>
  </body>
  </html>
