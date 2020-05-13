function Circle(radius){
    this.radius = radius;

    this.defaultLocation = {x:0,y:0};

    this.computeOptimumLocation= function(){
        //.....
    }

    this.draw = function () {
        this.computeOptimumLocation();
        console.log('draw');
    }
}


const circle = new Circle(10);

circle.computeOptimumLocation(); //if this function can be called only from draw, this function
//could put this object in bad state, and following function draw could get an error
circle.draw(); 


//we can use abstraction, hide details of the implementation
//we should hide property defaultLocation and function coputeOptimumLocation


function Circle2(radius){
    this.radius = radius;

    let defaultLocation = {x:0,y:0};

    let  computeOptimumLocation= function(){
        //.....
    }

    this.draw = function () {
        computeOptimumLocation();
        console.log('draw');
    }
}


//if i want read private value or private function
function Circle3(radius){
    this.radius = radius;

    let defaultLocation = {x:0,y:0};

    this.getDefaultLocation = function(){
        return defaultLocation;
    }; 
    let  computeOptimumLocation= function(){
        //.....
    }

    this.draw = function () {
        computeOptimumLocation();
        console.log('draw');
    };
}


function Circle4(radius){
    this.radius = radius;

    let defaultLocation = {x:0,y:0};

    let  computeOptimumLocation= function(){
        //.....
    }

    this.draw = function () {
        computeOptimumLocation();
        console.log('draw');
    }


    Object.defineProperty(this,'defaultLocation',{
        get : function(){
            return defaultLocation;
        },
        set:function(value){
            if(!value.x || !value.y)
                throw new Error('invalid location');
            defaultLocation(value)
        }
    });  
}