(function(){
'use strict';

// Declare app level module which depends on views, and components
var a=angular.module('readingList', [])
.controller('ReadingListController', function(){
    this.books=books;
    this.genres=genres;
})

  .directive('bookGenre', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/book-genre.html',
      scope: {
        genres: '='
      }
    }
})

.directive('bookCover', function(){
   return{
       restrict:'E',
       templateUrl:'partials/book-cover.html',
       replace:true
   } 
})
.directive('reviewForm', function(){
   return{
       restrict:'E',
       templateUrl:'partials/review-form.html',
       replace:true,
       controller: function(){
           this.showForm=false;
           this.book={genres:{}};
           
           this.addReview= function(form){
           books.push(this.book);
           this.book={genres:{}};
            form.$setPristine();
               
           }
       },
       controllerAs:'reviewFormCtrl',
       scope:{
       books:'=',
       genres:'='
   }
   } 
});
    
    
    
    
var genres = [ 'fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humor', 'legend', 'metafiction', 'mystery', 'mythology', 'non-fiction', 'poetry' ];

  var books = [
    {
      title: 'A Game of Thrones: A Song of Ice and Fire',
      author: 'George R.R. Martin',
      isbn: '0553593714',
      review: 'The most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. I loved this book!',
      rating: 4,
      genres: { 'non-fiction': true, fantasy: true }
    },{
      title: 'Harry Potter and the Cursed Child',
      author: 'John, Jake, J.K Rowling',
      isbn: '1338099132',
      review: "Great book!",
      rating: 5,
      genres: { fiction: true, fantasy: true }
    },{
      title: 'Magnus Chase',
      author: 'Brandon J Hansen',
      isbn: '1423160924',
      review: 'First of all, let \'s start with the cool part - Magnus Chase is a cousin of Annabeth. Yes, Annabeth from the Percy Jackson books. Small world. And probably something that will play a part in the later books.',
      rating: 4,
      genres: { fantasy: true }
    },{
      title: 'The Dragon Reborn',
      author: 'Robert Jordan',
      isbn: '0812513711',
      review: 'The Wheel weaves as the Wheel wills, and we are only the thread of the Pattern. Moiraine',
      rating: 4,
      genres: { 'non-fiction': true, fantasy: true }
    }
];
})();
