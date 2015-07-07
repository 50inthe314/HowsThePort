(function(){
	angular.module('howsThePort', [])
	.controller('MainCtrl', ['$scope', function($scope){ 

		$scope.game = null;

		$scope.games = [{
			id: 1,
			title: "Batman: Arkham Knight",
			releaseDate: "June 23, 2015",
			developer: "Rocksteady Studios",
			publisher: "Warner Bros. Interactive",
			rating: "4.3",
			boxart: "images/ak.jpg",
			tags:{
				performance: [
				{ tagName: '30 FPS cap', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates', upvotes: 29, goodQuality: false}],
				customization: [
				{ tagName: '30 FPS cap2', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing2', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound2', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support2', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates2', upvotes: 29, goodQuality: false}],
				features: [
				{ tagName: '30 FPS cap3', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing3', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound3', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support3', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates3', upvotes: 29, goodQuality: false}]
			}			
		},
		{
			id: 2,
			title: "DmC: Devil May Cry",
			releaseDate: "January 25, 2013",
			developer: "Ninja Theory",
			publisher: "Capcom",
			rating: "9.2",
			boxart: "images/dmc.jpg",
			tags:{
				performance: [
				{ tagName: 'Unlimited FPS', upvotes: 112, goodQuality: true}, 
				{ tagName: 'No Crashing', upvotes: 51, goodQuality: true}, 
				{ tagName: '7.1 Surround Sound', upvotes: 39, goodQuality: true}, 
				{ tagName: 'Dual Monitor Support', upvotes: 38, goodQuality: true}, 
				{ tagName: 'Smooth Framerates', upvotes: 35, goodQuality: true}],
				customization: [
				{ tagName: '30 FPS cap2', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing2', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound2', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support2', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates2', upvotes: 29, goodQuality: false}],
				features: [
				{ tagName: '30 FPS cap3', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing3', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound3', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support3', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates3', upvotes: 29, goodQuality: false}]
			}
		},
		{
			id: 3,
			title: "Singularity",
			releaseDate: "January 25, 2013",
			developer: "Ninja Theory",
			publisher: "Capcom",
			rating: "9.2",
			boxart: "images/singularity.jpg",
			tags:{
				performance: [
				{ tagName: 'Unlimited FPS', upvotes: 112, goodQuality: true}, 
				{ tagName: 'No Crashing', upvotes: 51, goodQuality: true}, 
				{ tagName: '7.1 Surround Sound', upvotes: 39, goodQuality: true}, 
				{ tagName: 'Dual Monitor Support', upvotes: 38, goodQuality: true}, 
				{ tagName: 'Smooth Framerates', upvotes: 35, goodQuality: true}],
				customization: [
				{ tagName: '30 FPS cap2', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing2', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound2', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support2', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates2', upvotes: 29, goodQuality: false}],
				features: [
				{ tagName: '30 FPS cap3', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing3', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound3', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support3', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates3', upvotes: 29, goodQuality: false}]
			}
		},
		{
			id: 4,
			title: "The Elder Scrolls III: Morrowind",
			releaseDate: "January 25, 2013",
			developer: "Ninja Theory",
			publisher: "Capcom",
			rating: "9.2",
			boxart: "images/morrowind.jpg",
			tags:{
				performance: [
				{ tagName: 'Unlimited FPS', upvotes: 112, goodQuality: true}, 
				{ tagName: 'No Crashing', upvotes: 51, goodQuality: true}, 
				{ tagName: '7.1 Surround Sound', upvotes: 39, goodQuality: true}, 
				{ tagName: 'Dual Monitor Support', upvotes: 38, goodQuality: true}, 
				{ tagName: 'Smooth Framerates', upvotes: 35, goodQuality: true}],
				customization: [
				{ tagName: '30 FPS cap2', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing2', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound2', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support2', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates2', upvotes: 29, goodQuality: false}],
				features: [
				{ tagName: '30 FPS cap3', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing3', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound3', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support3', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates3', upvotes: 29, goodQuality: false}]
			}
		},
		{
			id: 5,
			title: "The Elder Scrolls IV: Oblivion",
			releaseDate: "March 20, 2006",
			developer: "Bethesda Game Studios",
			publisher: "2K Games",
			rating: "9.2",
			boxart: "images/oblivion.jpg",
			tags:{
				performance: [
				{ tagName: 'Unlimited FPS', upvotes: 112, goodQuality: true}, 
				{ tagName: 'No Crashing', upvotes: 51, goodQuality: true}, 
				{ tagName: '7.1 Surround Sound', upvotes: 39, goodQuality: true}, 
				{ tagName: 'Dual Monitor Support', upvotes: 38, goodQuality: true}, 
				{ tagName: 'Smooth Framerates', upvotes: 35, goodQuality: true}],
				customization: [
				{ tagName: '30 FPS cap2', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing2', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound2', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support2', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates2', upvotes: 29, goodQuality: false}],
				features: [
				{ tagName: '30 FPS cap3', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing3', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound3', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support3', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates3', upvotes: 29, goodQuality: false}]
			}
		},
		{
			id: 6,
			title: "The Elder Scrolls V: Skyrim",
			releaseDate: "January 25, 2013",
			developer: "Ninja Theory",
			publisher: "Capcom",
			rating: "9.2",
			boxart: "images/skyrim.png",
			tags:{
				performance: [
				{ tagName: 'Unlimited FPS', upvotes: 112, goodQuality: true}, 
				{ tagName: 'No Crashing', upvotes: 51, goodQuality: true}, 
				{ tagName: '7.1 Surround Sound', upvotes: 39, goodQuality: true}, 
				{ tagName: 'Dual Monitor Support', upvotes: 38, goodQuality: true}, 
				{ tagName: 'Smooth Framerates', upvotes: 35, goodQuality: true}],
				customization: [
				{ tagName: '30 FPS cap4', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing4', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound4', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support4', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates4', upvotes: 29, goodQuality: false}],
				features: [
				{ tagName: '30 FPS cap5', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing5', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound5', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support5', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates5', upvotes: 29, goodQuality: false}]
			}
		},{
			id: 7,
			title: "SEGA Bass Fishing",
			releaseDate: "January 25, 2013",
			developer: "Ninja Theory",
			publisher: "Capcom",
			rating: "9.2",
			boxart: "images/bass.png",
			tags:{
				performance: [
				{ tagName: 'Unlimited FPS', upvotes: 112, goodQuality: true}, 
				{ tagName: 'No Crashing', upvotes: 51, goodQuality: true}, 
				{ tagName: '7.1 Surround Sound', upvotes: 39, goodQuality: true}, 
				{ tagName: 'Dual Monitor Support', upvotes: 38, goodQuality: true}, 
				{ tagName: 'Smooth Framerates', upvotes: 35, goodQuality: true}],
				customization: [
				{ tagName: '30 FPS cap2', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing2', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound2', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support2', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates2', upvotes: 29, goodQuality: false}],
				features: [
				{ tagName: '30 FPS cap3', upvotes: 56, goodQuality: false}, 
				{ tagName: 'Consistent Crashing3', upvotes: 51, goodQuality: false}, 
				{ tagName: '5.1 Surround Sound3', upvotes: 38, goodQuality: true}, 
				{ tagName: 'No Dual Monitor Support3', upvotes: 37, goodQuality: false}, 
				{ tagName: 'Unstable Framerates3', upvotes: 29, goodQuality: false}]
			}
		}];

		$scope.changeGame = function(id){
			$scope.game = $.grep($scope.games, function(e){ return e.id == id})[0];
		};

		$scope.addUpvote = function(tag){
			tag.upvotes += 1;
		};

		$scope.format = function(game){
			var $game = $("<img src='" + game.boxart + "' class='thumbnail' />" + game.title);
			return $game;
		}

		$scope.select2Config = {
				formatSelection: $scope.format
  			};

		$scope.changeGame(1);
	}])}
)();