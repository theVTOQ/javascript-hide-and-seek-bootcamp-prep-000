function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  var grandChildren = document.querySelectorAll('#grand-node ' div);
  return grandChildren[grandChildren.length - 1]
}

function increaseRankBy(n){
  
}