/*
 * Moved controller.js into app.js so we can more easily see how it can be dissected.
 * 
 * The important demonstration here is how to move away from ngController and $scope.
 * Among the many reasons for this is the ultimate goal of writing code that translates more easily to
 * * Angular 2 (where there are no Controllers or $scope) and
 * * TypeScript (where Classes and getter/setters are built in)
 *
 * I won't always point it out, but most of what I'll be going over relates back to John Papa's Angular 1 Style Guide.
 * https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
 *
 * I'll leave old, larger chunks of changed code commented out above the newer examples for reference.
 */

// Use the function expression wrapper to encapsulate and immediately-invoke all the codes
(function () {

  /*
   * A relative new-comer to JavaScript, 'use strict' is a built in sort of spell-checker
   *     that helps identify blatant code errors.
   * It's also a best-practice must
   */
  'use strict';

  /*==============================
  =            Module            =
  ==============================*/

  /*
   * Since our components get split into multiple files, it's not expressive enough to use a variable that was globally declared somewhere else. Also, with the use of the encapsulating function expression, that global variable will be unavailable to other JS files.
   */

  angular.module('april', [
    'angularMoment'
  ]);

  /*======================================
  =            Controllers.js            =
  ======================================*/

  angular.module('april')
    .controller('MyController', MyController); // use named functions for these declarations

  /*
   * Manually inject dependencies.
   * This annotation step prevents reserved name-space variables from being minified and thus ruined.
   */
  MyController.$inject = ['$scope'];

  function MyController($scope) {

    /*
     * There are lots of built in Angular tools to help reduce code duplication. This is a great example of how to utilize Angular.extend() to make mass variable declarations more readable by removing the parent Object's namespace and more effectively showing which property is actually being defined.
     *
     * This is just as important with variable properties as it is with methods. Angular.extend() will give you a sort of table of contents for everything that you're making publically available. In addition to this, write them out alphabetically, these types of declaration blocks have a habit of becoming ginormous.
     */
    // $scope.posts = [];
    // $scope.showForm = false;
    // $scope.showNew = false;
    // $scope.buttonValue = '0 comments';
    // $scope.orderProp = 'title';
    // $scope.sortReverse = true;

    angular.extend($scope, {
      // declare methods first
      // leave methods declared without their parenthesis,
      // this makes them invokable later instead of being immediately invoked
      // addPost: addPost(), <- $scope.addPost now equals the return value of the addPost() function
      addPost: addPost, // <- $scope.addPost now equals the addPost() function
      addComment: addComment,
      changeColor: changeColor,
      downVote: downVote,
      upVote: upVote,
      toggleComments: toggleComments,
      toggleCommentForm: toggleCommentForm,
      toggleForm: toggleForm,

      // properties
      buttonValue: '0 comments',
      orderProp: 'title',
      posts: [],
      showForm: false,
      showNew: false,
      sortReverse: true
    });

    /*
     * Now we've hoisted all the important, public info about this Controller up to the top. If all we needed was a quick overview of what is available on $scope, we wouldn't have to scroll at all.
     *
     * Like the public declarations above, the actual functions have a habit of becoming very long, so try to keep them alphabetized as well. Sometimes it makes sense to keep them grouped by category though as demonstrated by downVote() and upVote() but even that can be unintuitive to a team member that needs to find and fix a function quickly.
     */

    function addComment(post, author, text) {
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
      $scope.showForm = !$scope.showForm;
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