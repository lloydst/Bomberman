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
        
        console.log(xplayer,yplayer);

        // makes playerlocation visable
        if ($('cell:contains('+xplayer+'.'+yplayer+')')) {
            console.log(xplayer + '.' + yplayer + ' i am player location');
            $('cell:contains('+xplayer+'.'+yplayer+')').removeClass("path").addClass('player');
        } 
    });
    function start() {
        xplayer = 5;
        yplayer = 5;
        console.log(xplayer,yplayer)
    }
    function playerlocation(params) {
        if ($('cell:not(:contains('+xplayer+'.'+yplayer+'))')) {
            $('cell:not(:contains('+xplayer+'.'+yplayer+'))').removeClass("player")
            console.log(xplayer + '.' + yplayer + ' i am the new player location')
            $('cell:contains('+xplayer+'.'+yplayer+')').addClass("player");
        }
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
