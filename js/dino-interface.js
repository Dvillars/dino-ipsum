$(document).ready(function() {
  $('#dino-form').click(function(event) {
    event.preventDefault();

    var words = parseInt($('#dino-words').val());
    var paragraphs = parseInt($('#dino-paragraphs').val());

    $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=' + words + '&words=' + paragraphs)
    .then(function(json) {
        $('#display-result').text(json);
    })
    .fail(function() {
        console.log('Where did all the dinosaurs go?');
    });
  });
});
