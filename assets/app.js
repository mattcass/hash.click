;(function(w, doc) {
  // Enable strict mode
  'use strict'
  var button = document.getElementById('button')
  var box = document.getElementsByClassName('box')[0]

  function changeBG() {
    box.style.backgroundColor = 'tomato'
  }

  button.addEventListener('click', changeBG)
})(this, this.document)
