function Dino() {
}

Dino.prototype.getDino = function(words, paragraphs) {
  console.log(words + "<->" + paragraphs);
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=' + words + '&words=' + paragraphs).then(function(response) {
    console.log(response + "<>" + response[0][0]);
    $('#display-result').text("this is your dino ipsum -> " + response);
  }).fail(function(error) {
    $("#display-result").text(error.responseJSON.message);
  });
};

exports.dinoModule = Dino;
