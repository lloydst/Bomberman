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
    
    
    // makes playerlocation visable
    function playerlocation() {
        $('.path').removeClass("player"); //clears it so only 1 player should be there (doesnt fully work)
        $('.' + yplayer +' .' + xplayer).addClass("player");
        
    }
    angular.element(document).ready(function () {
        xplayer = 5;
        yplayer = 5;
        playerlocation();
        
    });

    function left() {
        if(xplayer == 3){
            if(yplayer == 2){
                console.log("invalid move");
                 return xplayer=3;
            } else if(yplayer == 4){
                console.log("invalid move");
                 return xplayer=3;
            } else if(yplayer == 6){
                console.log("invalid move");
                 return xplayer=3;
            } else if(yplayer == 8){
                console.log("invalid move");
                 return xplayer=3;
            } else if(yplayer == 10){
                console.log("invalid move");
                 return xplayer=3;
            } 
        } else if(xplayer == 5){
            if(yplayer == 2){
                console.log("invalid move");
                 return xplayer=5;
            } else if(yplayer == 4){
                console.log("invalid move");
                 return xplayer=5;
            } else if(yplayer == 6){
                console.log("invalid move");
                 return xplayer=5;
            } else if(yplayer == 8){
                console.log("invalid move");
                 return xplayer=5;
            } else if(yplayer == 10){
                console.log("invalid move");
                 return xplayer=5;
            } 
        } else if(xplayer == 7){
            if(yplayer == 2){
                console.log("invalid move");
                 return xplayer=7;
            } else if(yplayer == 4){
                console.log("invalid move");
                 return xplayer=7;
            } else if(yplayer == 6){
                console.log("invalid move");
                 return xplayer=7;
            } else if(yplayer == 8){
                console.log("invalid move");
                 return xplayer=7;
            } else if(yplayer == 10){
                console.log("invalid move");
                 return xplayer=7;
            } 
        } else if(xplayer == 9){
            if(yplayer == 2){
                console.log("invalid move");
                 return xplayer=9;
            } else if(yplayer == 4){
                console.log("invalid move");
                 return xplayer=9;
            } else if(yplayer == 6){
                console.log("invalid move");
                 return xplayer=9;
            } else if(yplayer == 8){
                console.log("invalid move");
                 return xplayer=9;
            } else if(yplayer == 10){
                console.log("invalid move");
                 return xplayer=9;
            } 
        } else if(xplayer == 11){
            if(yplayer == 2){
                console.log("invalid move");
                 return xplayer=11;
            } else if(yplayer == 4){
                console.log("invalid move");
                 return xplayer=11;
            } else if(yplayer == 6){
                console.log("invalid move");
                 return xplayer=11;
            } else if(yplayer == 8){
                console.log("invalid move");
                 return xplayer=11;
            } else if(yplayer == 10){
                console.log("invalid move");
                 return xplayer=11;
            } 
        }
        
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
        if(xplayer == 1){
            if(yplayer == 2){
                console.log("invalid move");
                 return xplayer=1;
            } else if(yplayer == 4){
                console.log("invalid move");
                 return xplayer=1;
            } else if(yplayer == 6){
                console.log("invalid move");
                 return xplayer=1;
            } else if(yplayer == 8){
                console.log("invalid move");
                 return xplayer=1;
            } else if(yplayer == 10){
                console.log("invalid move");
                 return xplayer=1;
            } 
        } else if(xplayer == 3){
            if(yplayer == 2){
                console.log("invalid move");
                 return xplayer=3;
            } else if(yplayer == 4){
                console.log("invalid move");
                 return xplayer=3;
            } else if(yplayer == 6){
                console.log("invalid move");
                 return xplayer=3;
            } else if(yplayer == 8){
                console.log("invalid move");
                 return xplayer=3;
            } else if(yplayer == 10){
                console.log("invalid move");
                 return xplayer=3;
            } 
        } else if(xplayer == 5){
            if(yplayer == 2){
                console.log("invalid move");
                 return xplayer=5;
            } else if(yplayer == 4){
                console.log("invalid move");
                 return xplayer=5;
            } else if(yplayer == 6){
                console.log("invalid move");
                 return xplayer=5;
            } else if(yplayer == 8){
                console.log("invalid move");
                 return xplayer=5;
            } else if(yplayer == 10){
                console.log("invalid move");
                 return xplayer=5;
            } 
        } if(xplayer == 7){
            if(yplayer == 2){
                console.log("invalid move");
                 return xplayer=7;
            } else if(yplayer == 4){
                console.log("invalid move");
                 return xplayer=7;
            } else if(yplayer == 6){
                console.log("invalid move");
                 return xplayer=7;
            } else if(yplayer == 8){
                console.log("invalid move");
                 return xplayer=7;
            } else if(yplayer == 10){
                console.log("invalid move");
                 return xplayer=7;
            } 
        } else if(xplayer == 9){
            if(yplayer == 2){
                console.log("invalid move");
                 return xplayer=9;
            } else if(yplayer == 4){
                console.log("invalid move");
                 return xplayer=9;
            } else if(yplayer == 6){
                console.log("invalid move");
                 return xplayer=9;
            } else if(yplayer == 8){
                console.log("invalid move");
                 return xplayer=9;
            } else if(yplayer == 10){
                console.log("invalid move");
                 return xplayer=9;
            } 
        } else if(xplayer == 11){
            if(yplayer == 2){
                console.log("invalid move");
                 return xplayer=11;
            } else if(yplayer == 4){
                console.log("invalid move");
                 return xplayer=11;
            } else if(yplayer == 6){
                console.log("invalid move");
                 return xplayer=11;
            } else if(yplayer == 8){
                console.log("invalid move");
                 return xplayer=11;
            } else if(yplayer == 10){
                console.log("invalid move");
                 return xplayer=11;
            } 
        }
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
        if(yplayer == 3){
            if(xplayer == 2){
                console.log("invalid move");
                 return yplayer=3;
            } else if(xplayer == 4){
                console.log("invalid move");
                 return yplayer=3;
            } else if(xplayer == 6){
                console.log("invalid move");
                 return yplayer=3;
            } else if(xplayer == 8){
                console.log("invalid move");
                 return yplayer=3;
            } else if(xplayer == 10){
                console.log("invalid move");
                 return yplayer=3;
            }
        } else if(yplayer == 5){
            if(xplayer == 2){
                console.log("invalid move");
                 return yplayer=5;
            } else if(xplayer == 4){
                console.log("invalid move");
                 return yplayer=5;
            } else if(xplayer == 6){
                console.log("invalid move");
                 return yplayer=5;
            } else if(xplayer == 8){
                console.log("invalid move");
                 return yplayer=5;
            } else if(xplayer == 10){
                console.log("invalid move");
                 return yplayer=5;
            } 
        } else if(yplayer == 7){
            if(xplayer == 2){
                console.log("invalid move");
                 return yplayer=7;
            } else if(xplayer == 4){
                console.log("invalid move");
                 return yplayer=7;
            } else if(xplayer == 6){
                console.log("invalid move");
                 return yplayer=7;
            } else if(xplayer == 8){
                console.log("invalid move");
                 return yplayer=7;
            } else if(xplayer == 10){
                console.log("invalid move");
                 return yplayer=7;
            } 
        } else if(yplayer == 9){
            if(xplayer == 2){
                console.log("invalid move");
                 return yplayer=9;
            } else if(xplayer == 4){
                console.log("invalid move");
                 return yplayer=9;
            } else if(xplayer == 6){
                console.log("invalid move");
                 return yplayer=9;
            } else if(xplayer == 8){
                console.log("invalid move");
                 return yplayer=9;
            } else if(xplayer == 10){
                console.log("invalid move");
                 return yplayer=9;
            } 
        } else if(yplayer == 11){
            if(xplayer == 2){
                console.log("invalid move");
                 return yplayer=11;
            } else if(xplayer == 4){
                console.log("invalid move");
                 return yplayer=11;
            } else if(xplayer == 6){
                console.log("invalid move");
                 return yplayer=11;
            } else if(xplayer == 8){
                console.log("invalid move");
                 return yplayer=11;
            } else if(xplayer == 10){
                console.log("invalid move");
                 return yplayer=11;
            } 
        }
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
        if(yplayer == 1){
            if(xplayer == 2){
                console.log("invalid move");
                 return yplayer=1;
            } else if(xplayer == 4){
                console.log("invalid move");
                 return yplayer=1;
            } else if(xplayer == 6){
                console.log("invalid move");
                 return yplayer=1;
            } else if(xplayer == 8){
                console.log("invalid move");
                 return yplayer=1;
            } else if(xplayer == 10){
                console.log("invalid move");
                 return yplayer=1;
            } 
        } else if(yplayer == 3){
            if(xplayer == 2){
                console.log("invalid move");
                 return yplayer=3;
            } else if(xplayer == 4){
                console.log("invalid move");
                 return yplayer=3;
            } else if(xplayer == 6){
                console.log("invalid move");
                 return yplayer=3;
            } else if(xplayer == 8){
                console.log("invalid move");
                 return yplayer=3;
            } else if(xplayer == 10){
                console.log("invalid move");
                 return yplayer=3;
            } 
        } else if(yplayer == 5){
            if(xplayer == 2){
                console.log("invalid move");
                 return yplayer=5;
            } else if(xplayer == 4){
                console.log("invalid move");
                 return yplayer=5;
            } else if(xplayer == 6){
                console.log("invalid move");
                 return yplayer=5;
            } else if(xplayer == 8){
                console.log("invalid move");
                 return yplayer=5;
            } else if(xplayer == 10){
                console.log("invalid move");
                 return yplayer=5;
            } 
        } else if(yplayer == 7){
            if(xplayer == 2){
                console.log("invalid move");
                 return yplayer=7;
            } else if(xplayer == 4){
                console.log("invalid move");
                 return yplayer=7;
            } else if(xplayer == 6){
                console.log("invalid move");
                 return yplayer=7;
            } else if(xplayer == 8){
                console.log("invalid move");
                 return yplayer=7;
            } else if(xplayer == 10){
                console.log("invalid move");
                 return yplayer=7;
            } 
        } else if(yplayer == 9){
            if(xplayer == 2){
                console.log("invalid move");
                 return yplayer=9;
            } else if(xplayer == 4){
                console.log("invalid move");
                 return yplayer=9;
            } else if(xplayer == 6){
                console.log("invalid move");
                 return yplayer=9;
            } else if(xplayer == 8){
                console.log("invalid move");
                 return yplayer=9;
            } else if(xplayer == 10){
                console.log("invalid move");
                 return yplayer=9;
            } 
        } 

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
        console.log('Boom!')
    }
        //   function   key keyid   type:
        // ''   up      38  up      ArrowKey
        // ''   down    40  down    ArrowKey
        // ''   right   39  right   ArrowKey
        // ''   bomb    32  space   spaceBar
        
        angular.element(document).keydown(function(event) {
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

    
    
});
