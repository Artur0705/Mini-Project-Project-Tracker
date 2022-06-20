//Task 2: Capture Form Data

//Select and save references to every DOM element we will interact with to a variable (i.e., below so that we can use these elements later.
var projectFormEl = $("#project-form");

$( ".selector" ).button({
    create: function( event, ui ) {}
});
  
$(".selector").on("buttoncreate", function (event, ui) { });

// $( "button" ).button();


var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);
