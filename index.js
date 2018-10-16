function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  var grandChildren = document.querySelectorAll('#grand-node div');
  return grandChildren[grandChildren.length - 1]
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list li');

  for(var i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}
