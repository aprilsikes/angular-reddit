
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
    // var vm = this;

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
      this.toggleCommentForm(post);
      this.toggleComments(post);
      if (this.post.comments.length > 1) {
        this.buttonValue = this.post.comments.length + ' comments';
      } else if (this.post.comments.length == 1) {
        this.buttonValue = this.post.comments.length + ' comment';
      }
    }

    function addPost() {
      var post = {};
      post.message = {
        time: new Date()
      };
      post.image = this.image;
      post.title = this.title;
      post.author = this.author;
      post.description = this.description;
      post.comments = [];
      post.votes = 0;
      this.posts.push(post);
      console.log(this.posts);
      this.showComments = false;
      post.showNew = false;
      this.toggleForm();
      this.toggleComments();
      this.title = null;
      this.author = null;
      this.image = null;
      this.description = null;
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
      this.showNew = !this.showNew;
    }

    function toggleComments(post) {
      this.showComments = !this.showComments;
    }

    function toggleForm() {
      this.showForm = !this.showForm;
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
