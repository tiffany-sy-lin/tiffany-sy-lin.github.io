//Define the app
var movieSalesApp = angular.module('movieSalesApp', ['chart.js']);

// Define the controller
movieSalesApp.controller('theController', function ($scope) {

  //Define objects in controller
  $scope.graphLineSeries = ["Movie 1", "Movie 2"];
  $scope.graphLineColors = ["#dcdcdc", "#26b192"];
  $scope.graphLineLabels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.graphLineDataPoints = [
    [65, 59, 40, 51, 36, 25, 40],
    [49, 49, 60, 39, 56, 38, 30]
  ];
  $scope.movieInfo = {
    movie1: {
      movieTitle: 'Movie 1',
      movieTicketPurchases: 2346,
      movieReleaseDate: '15 July 2015',
      percentOfTotal: 35
    },
    movie2: {
      movieTitle: 'Movie 2',
      movieTicketPurchases: 4422,
      movieReleaseDate: '01 August 2015',
      percentOfTotal: 65
    }
  }
});