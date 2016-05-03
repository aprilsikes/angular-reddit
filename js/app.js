
(function () {

  'use strict';

  /*==============================
  =            Module            =
  ==============================*/

  angular.module('april', [
    'angularMoment'
  ]);

  /*======================================
  =            Controllers.js            =
  ======================================*/

  angular.module('april')
    .controller('MyController', MyController);

  MyController.$inject = ['$scope'];

  function MyController($scope) {
    /* jshint validthis: true */
    var vm = this;

    angular.extend($scope, {

      addPost: addPost,
      addComment: addComment,
      changeColor: changeColor,
      downVote: downVote,
      upVote: upVote,
      toggleComments: toggleComments,
      toggleCommentForm: toggleCommentForm,
      toggleForm: toggleForm,

      buttonValue: '0 comments',
      orderProp: 'title',
      posts: [],
      showForm: false,
      showNew: false,
      sortReverse: true
    });

    function addComment(post, author, text) {
      var comment = {};
      comment.author = author;
      comment.text = text;
      post.comments.push(comment);
      console.log(post.comments);
      post.showComments = false;
      vm.toggleCommentForm(post);
      vm.toggleComments(post);
      if (vm.post.comments.length > 1) {
        vm.buttonValue = vm.post.comments.length + ' comments';
      } else if (vm.post.comments.length == 1) {
        vm.buttonValue = vm.post.comments.length + ' comment';
      }
    }

    function addPost() {
      var post = {};
      post.message = {
        time: new Date()
      };
      post.image = vm.image;
      post.title = vm.title;
      post.author = vm.author;
      post.description = vm.description;
      post.comments = [];
      post.votes = 0;
      vm.posts.push(post);
      console.log(vm.posts);
      vm.showComments = false;
      post.showNew = false;
      vm.toggleForm();
      vm.toggleComments();
      vm.title = null;
      vm.author = null;
      vm.image = null;
      vm.description = null;
    }

    function changeColor(post) {
      if (post.votes < 0) {
        return 'red';
      } else if (post.votes > 0) {
        return 'green';
      } else {
        return 'black';
      }
    }

    function downVote(post) {
      post.votes--;
    };

    function upVote(post) {
      post.votes++;
    };

    function toggleCommentForm(post) {
      vm.showNew = !vm.showNew;
    }

    function toggleComments(post) {
      vm.showComments = !vm.showComments;
    }

    function toggleForm() {
      vm.showForm = !vm.showForm;
    }

  }

  /*=====================================
  =            Directives.js            =
  =====================================*/



  /*===================================
  =            Services.js            =
  ===================================*/



  /*====================================
  =            Factories.js            =
  ====================================*/



})();
