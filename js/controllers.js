app.controller('MyController', function ($scope) {
  $scope.posts = [];
  $scope.showDir = true;
  $scope.showForm = false;
  $scope.showNew = false;
  $scope.buttonValue = '0 comments';
  $scope.orderProp = 'title';
  $scope.sortReverse  = true;
  // $scope.showNew = {};
  console.log($scope);

  $scope.upVote = function(post){
    post.votes++;
  };
  $scope.downVote = function(post){
    post.votes--;
  };

  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
    // $scope.showDir = !$scope.showDir;
  }

  $scope.toggleComments = function (post) {
    this.showComments = !this.showComments;
  }

  $scope.toggleCommentForm = function (post) {
    this.showNew = !this.showNew;
  }

  $scope.changeColor = function (post) {
    if (post.votes < 0) {
      return 'red';
    } else if (post.votes > 0) {
      return 'green';
    } else {
      return 'black';
    }
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
    comment.author = author;
    comment.text = text;
    post.comments.push(comment);
    console.log(post.comments);
    post.showComments = false;
    this.toggleCommentForm(post);
    this.toggleComments(post);
    // $scope.author = null;
    // $scope.text = null;
    // this.comment = {};
    if (this.post.comments.length > 1) {
      this.buttonValue = this.post.comments.length+ ' comments';
    } else if (this.post.comments.length == 1) {
      this.buttonValue = this.post.comments.length+ ' comment';
    }
  }



})
