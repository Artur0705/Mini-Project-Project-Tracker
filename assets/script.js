window.setInterval(function () {
  $('#time-display').html(moment().format('ddd DD/MM/y H:mm:ss'))
}, 1000);