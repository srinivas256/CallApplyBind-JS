//this always referes to an object.
//this refere to an object which calls the function it contains
/*In the global context this refere to either window object or is 
   undefine if the strict mode is used */
//Bind Example

var car= {
  
  fname:'srinivas',
  lname:'panuganti',
  fullName:function(newName){
   console.log(newName);
  }
  
}

var displayName = car.fullName.bind(car,'srinivas');
displayName();

//apply & call Example

    var bike = {
      name:"fz",
      version:'0.01'
    }
    
    
    function displayBike(ownerName, ownerName2){
      
      console.log(ownerName2+ " "+ this.name + " " + this.version);
    }

      displayBike.apply(bike, ['srinivas','venkat']);
      displayBike.call(bike,'srinivas','venkat');


// apply will take only array as parameter but call wil take both
