'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  //moving one piece to another postion/array
  let moveStack = stacks[startStack]
  let twoStack = stacks[endStack]
  let piece = moveStack.pop(); // piece equals the last index of the choosen array
  twoStack.push(piece); // twoStack is pushing the piece to the array that was choosen  
  //twoStack.push(moveStack.pop())
  console.log(piece)
}

function isLegal(startStack, endStack) {
  // Your code here
  let moveStack = stacks[startStack] // stacks a
  let twoStack = stacks[endStack] //stack b
  let moveStackPiece = moveStack[moveStack.length - 1] // stack at "a" will be the last index
  let twoStackPiece = twoStack[twoStack.length -1]  // stack at "b" will be the last index
  console.log(twoStackPiece,"twostackpiece")
  //When moving a piece to a postion that is blank the computer does know no less the postion is undefined
  if(moveStackPiece < twoStackPiece || twoStackPiece == undefined){
    return true
  }
  else{
    return false
  }

}

function checkForWin() {
  // Your code here
  if(stacks.b.length === 4){
    return true;
  }
  else{
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (isLegal(startStack, endStack)){
    movePiece(startStack, endStack);
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
