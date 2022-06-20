//Task 2: Capture Form Data

//Select and save references to every DOM element we will interact with to a variable (i.e., below so that we can use these elements later.
var projectFormEl = $("#project-form");
var projectNameEl = $('#project-name');
var projectTypeEl = $('#project-type');
var hourlyRateEl = $('#hourly-rate');
var dueDateEl = $('#due-date');
var daysUntilEl = $('#days-until');

var printSkills = function (name, type, rate, date, until) {
    var listEl = $('<li>');
    var listDetail = name.concat(type, rate, date, until);
    listEl.addClass('list-group-item').text(listDetail);
    listEl.appendTo(projectFormEl);
  };

var handleFormSubmit = function (event) {
  event.preventDefault();

    var nameInput = nameInputEl.val();
    var dateInput = typeInputEl.val();
    var nameInput = rateInputEl.val();
    var dateInput = dateInputEl.val();
    var dateInput = untilInputEl.val();

  if (!nameInput || !typeInput || !rateInput || !dateInput || !untilInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(name, type, rate, date, until);

  nameInputEl.val('');
    typeInputEl.val('');
    dateInput.val('');
    dateInput.val('');
    untilInputEl.val('');
};

formEl.on('submit', handleFormSubmit);
