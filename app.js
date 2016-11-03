var movies = angular.module('ImdbMovies', ['ionic']);

movies.controller('MovieController', function($scope, $http, Movies)
{
    $scope.searchmovie = 'no';
    $scope.showloader = "no";
    $scope.search = function()
    {
        $scope.showloader = "yes";
        //console.log('clicked');
        Movies.get($scope.movieTitle)
       .success(function(data) {
           console.log(data);
            
            $scope.searchmovie = 'yes';

            $scope.title = data['Title'];
            $scope.year = data['Year'];
            $scope.runtime = data['Runtime'];
            $scope.genre = data['Genre'];
            $scope.imdbRating = data['imdbRating'];
            $scope.director = data['Director'];
            $scope.actors = data['Actors'];
            $scope.language = data['Language'];
            $scope.country = data['Country'];
            $scope.awards = data['Awards'];
            $scope.writer = data['Writer'];
            $scope.plot = data['Plot'];
            $scope.poster = data['Poster'];
            $scope.response = data['Response'];
            $scope.votes = data['imdbVotes'];   

            if(data['Response'] == 'False')
            {   
                $scope.error = data['Error'];
            }
            
            $scope.showloader = "no";
       }); 
    }
});

movies.factory('Movies', function($http) {
    return {
        get: function(title) {
            return $http({
                url: "http://www.omdbapi.com?t="+title+"&y=&plot=full&r=json",
                method: "GET"
            }); 
        }
    }
});
