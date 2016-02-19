var app = angular.module('april', []);

app.controller('MyController', function ($scope) {
  $scope.posts = [];
  // $scope.rate = 100;
  $scope.showForm = false;
  // $scope.buttonValue = 'Add a contractor';

  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  }
  $scope.addPost = function () {
    var post = {};
    post.title = $scope.title;
    post.author = $scope.author;
    post.image = $scope.image;
    post.description = $scope.description;
    $scope.posts.push(post);
    console.log($scope.posts);
    $scope.toggleForm();
    $scope.title = null;
    $scope.author = null;
    $scope.image = null;
    $scope.description = null;

    // if ($scope.contractors.length > 3) {
    //   $scope.buttonValue = 'Really???';
    // } else if ($scope.contractors.length > 0) {
    //   $scope.buttonValue = 'Add another contractor';
    // }

  }

})

// angular.module('timeApp', ['angularMoment']);
//
// // create an angular controller
// .controller('mainController', function() {
//
//   // bind the controller to vm (view-model)
//   var vm = this;
//
//   // create a new time variable with the current date
//   vm.time = new Date();
//
// });


// Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
