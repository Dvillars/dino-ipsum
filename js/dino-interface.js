var Dino = require("./../js/dino.js").dinoModule;

$(document).ready(function() {
  var currentDino = new Dino();
  $('#dino-form').submit(function() {
    event.preventDefault();
    var words = parseInt($('#dino-words').val());
    var paragraphs = parseInt($('#dino-paragraphs').val());
    currentDino.getDino(words, paragraphs);
  });
});
