var app = angular.module('bombermanApp',[]);
app.controller('bomberControl', function($scope) {
    $scope.xcord = ['1','2','3','4','5','6','7','8','9','10','11'];
    $scope.ycord = ['1','2','3','4','5','6','7','8','9','10','11'];
    var xcord = $scope.xcord;
    var ycord = $scope.ycord;
    var x = xcord[x];
    var y = ycord[y];

    var xplayer = (xplayer===undefined) ? 5: xplayer;
    var yplayer = (yplayer===undefined) ? 5: yplayer;
    
    $( document ).ready(function() {
        console.log( "ready!" );
        start();
        

        
        
    });
    // makes playerlocation visable
    function playerlocation() {
        $('cell:not(:contains('+xplayer+'.'+yplayer+'))').removeClass("player"); //clears it so only 1 player should be there (doesnt ully workf)
        
        $('cell:contains('+xplayer+'.'+yplayer+')').addClass("player");
        $('cell:contains('+xplayer+'.'+yplayer+')').removeClass("path");
        }
        function start() {
            xplayer = 5;
            yplayer = 5;
            playerlocation();
            
        }
    
    
    
    function left() {
        console.log('left() called')
        if (xplayer <= 1) {
            console.log('invalid move');
            xplayer = 1;
            
        } else {
            var newPlayer = xplayer - 1;
            xplayer = newPlayer;
            playerlocation()
        }
        
    }
    function right() {
        console.log('right() called')
        if (xplayer >= 11) {
            console.log('invalid move');
            xplayer = 11;
            playerlocation()
        } else {
            var newPlayer = xplayer + 1;
            xplayer = newPlayer;
            playerlocation()
        }
        
    }
    function up() {
        console.log('up() called')
        if (yplayer <= 1) {
            console.log('invalid move');
            yplayer = 1;
            playerlocation()
        } else {
            var newPlayer = yplayer - 1;
            yplayer = newPlayer;
            playerlocation()
        }
        
    }
    function down() {
        console.log('down() called')
        if (yplayer >= 11) {
            console.log('invalid move');
            yplayer = 11;
            playerlocation()
        } else {
            var newPlayer = yplayer + 1;
            yplayer = newPlayer;
            playerlocation()
        }
        
    }

    function bomb(){
        $('cell').hasClass('player')
    }
        //   function   key keyid   type:
        // ''   up      38  up      ArrowKey
        // ''   down    40  down    ArrowKey
        // ''   right   39  right   ArrowKey
        // ''   bomb    32  space   spaceBar
        
        $( document ).keydown(function(event) {
            //alert( "Key: " + event.which );
            if (event.which === 37) {
                left()
                playerlocation()
            } else if (event.which === 38) {
                up()
                playerlocation()
            }else if (event.which === 40) {
                down()
                playerlocation()
            } else if (event.which === 39) {
                right()
                playerlocation()
            } else if (event.which === 32) {
                bomb()
                playerlocation()
            }
          });
    console.log(xplayer,yplayer)
    
});
