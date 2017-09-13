var app = angular.module('bombermanApp',[]);
app.controller('bomberControl', function($scope) {
    $scope.xcord = ['1','2','3','4','5','6','7','8','9','10','11'];
    $scope.ycord = ['1','2','3','4','5','6','7','8','9','10','11'];
    var xcord = $scope.xcord;
    var ycord = $scope.ycord;
    var x = xcord[x];
    var y = ycord[y];
    console.log()
    
    
    if (playerStart= x + '.' +y){
        console.log('triggered')
        x=5;
        y=5

    }
    $scope.player = $('.player')
    var x = xcord[x];
    var y = ycord[y];
    x=2;
    y=2;
    if (0 <= x < 10) {
        console.log('x says: i iz valid!') // if not valid nothing should happen
        if (0 <= y < 10) {
            console.log('y says:i only run when both me and x are valid') // if not valid nothing should happen
        }
    } else if( x = 2 ){
        if(y = 2){
            console.log('i am bedrock')
        }
        
    }
            
        
        
    
});