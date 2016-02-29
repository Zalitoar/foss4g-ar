'use strict';

$(function() {
  $.getJSON('/programme.json')
    .done(function(data) {
      var source = $('#programme-template').html();
      var template = Handlebars.compile(source);
      $.each(data, function(dayIndex, day) {
        $('#programme').append(template(day));
      });
    })
    .fail(function(error) {
      console.log(error);
    });
});

Handlebars.registerHelper('columnSize', function(content) {
  return Math.round(10 / content.rooms.length);
});
