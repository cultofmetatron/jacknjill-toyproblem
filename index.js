
/*
 * Developer Test Question
# A bunch of kids are about to roll down a hill and they are deciding what order to roll in.
# Write a function that takes an array of names and modifies the array such that "jack"
# is always first, and "jill" is always second (because she came tumbling after).
 
# Show your (hopefully robust) test cases and state your assumptions
# Use any language - but bonus points for using coffee-script
 
# example 1: input = ['bob', 'jill', 'jack', 'amanda'], output ['jack', 'jill', 'bob', 'amanda']
# example 2: input = ['bob', 'jill', 'amanda'], output ['jill', 'bob', 'amanda']
# example 3: input = ['bob', 'jack', 'jill', 'jack', 'amanda'], output ['jack', 'jack', 'jill', 'bob', 'amanda']

*/


var jacknjill = function(array) {
  //make a copy of the array so that we aren't messing with the original
  var workspace = array.slice();
  var stub = []; //for jack n jill
  var remains = []; //for everything else
  while (workspace.length != 0) {
    var el = workspace.shift();
    if ((el === 'jack') || (el === 'jill')) {
      stub.unshift(el);
    } else {
      remains.push(el);
    }
  }
  //since lexographical order is the default, we don't need a comparison operator
  var result = stub.sort().concat(remains);
  console.log(array, result);
  return result;

};

module.exports.jacknjill = jacknjill;



