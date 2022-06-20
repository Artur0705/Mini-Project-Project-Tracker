window.setInterval(function () {
  $('#time-display').html(moment().format('ddd MM/DD/y H:mm:ss'))
}, 1000);