var mocha = require('mocha');
var should = require('should');
var _ = require('lodash');
var jacknjill = require('../index.js').jacknjill;

var arrayCompare = function(array1, array2, comparator) {
  if (array1.length != array2.length) {
    return false;
  }
  comparator = comparator || function(a, b) { return a === b; }
  return _.chain(array1)
    .map(function(element, index) {
      return comparator(element, array2[index]);
    })
    .all(function(el) { return !!el; })
    .value();
};


it('verifies the arrayCompare', function() {
  var sameness = arrayCompare(["hello", "world"], ["hello", "world"]);
  sameness.should.equal(true);
  var sameness1 = arrayCompare(["hello", "world"], ["hello", " world"]);
  sameness1.should.equal(false);

})

// example 1: input = ['bob', 'jill', 'jack', 'amanda'], output ['jack', 'jill', 'bob', 'amanda']
// example 2: input = ['bob', 'jill', 'amanda'], output ['jill', 'bob', 'amanda']
// example 3: input = ['bob', 'jack', 'jill', 'jack', 'amanda'], output ['jack', 'jack', 'jill', 'bob', 'amanda']


it('passes the first test case', function() {
  arrayCompare(
    jacknjill(['bob', 'jill', 'jack', 'amanda']),
              ['jack', 'jill', 'bob', 'amanda'])
              .should.equal(true);
});

it('passes the second test case', function() {
  arrayCompare(
    jacknjill(['bob', 'jill', 'amanda']),
              ['jill', 'bob', 'amanda'])
              .should.equal(true);
});

it('passes the third test case', function() {
  arrayCompare(
    jacknjill(['bob', 'jack', 'jill', 'jack', 'amanda']),
              ['jack', 'jack', 'jill', 'bob', 'amanda'])
              .should.equal(true);
});
