var app = angular.module('april', ['angularMoment']);

app.controller('MyController', function ($scope) {
  $scope.posts = [];
  $scope.showForm = false;
  $scope.showNew = false;
  $scope.buttonValue = '0 comments';
  $scope.orderProp = 'title';
  $scope.sortReverse  = false;
  // $scope.showNew = {};
  console.log($scope);

  $scope.upVote = function(post){
    post.votes++;
    post.votes.push(this.vote);
  };
  $scope.downVote = function(post){
    post.votes--;
    post.votes.push(this.vote);
  };

  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  }

  $scope.toggleComments = function (post) {
    this.showComments = !this.showComments;
  }

  $scope.toggleCommentForm = function (post) {
    this.showNew = !this.showNew;
  }

  $scope.addPost = function () {
    var post = {};
    post.message = {
      time: new Date()
    };
    post.image = $scope.image;
    post.title = $scope.title;
    post.author = $scope.author;
    post.description = $scope.description;
    post.comments = [];
    post.votes = 0;
    if (post.votes > 0) {
      color: green;
    } else if (post.votes < 0) {
      color: red;
    }
    $scope.posts.push(post);
    console.log($scope.posts);
    this.showComments = false;
    post.showNew = false;
    $scope.toggleForm();
    $scope.toggleComments();
    $scope.title = null;
    $scope.author = null;
    $scope.image = null;
    $scope.description = null;
  }

  $scope.addComment = function (post, author, text) {
    var comment = {};
    post.comments.author = this.author;
    post.comments.text = this.text;
    post.comments.push(this.comment);
    console.log(post.comments);
    this.showComments = false;
    this.toggleCommentForm();
    this.toggleComments();
    // $scope.author = null;
    // $scope.text = null;
    // this.comment = {};
    if (post.comments.length > 1) {
      this.buttonValue = post.comments.length+ ' comments';
    } else if (post.comments.length == 1) {
      this.buttonValue = post.comments.length+ ' comment';
    }
  }



})

// NOTES:
// use "this" to control scope (access the specific posts and comments you want)
// in forms, use dot notation to create your post and comment objects on the scope



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
