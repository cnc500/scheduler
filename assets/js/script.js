$('#timer');

function displayCureentDayTime() {
var currentDateTime = moment().format("dddd, MMMM Do, YYYY  hh:mm:ss");
$('#currentDayTime').text(currentDateTime);
}

setInterval(displayCureentDayTime, 1000);

function changeTextareaColor() {
    $('textArea').each(function(){
//    currentHour = currentDateTime."hh"
    var currentHour = moment().hour();
    var timeBlockHour = $(this).parent().attr('id');
    if (currentHour===parseInt(timeBlockHour)){
        $(this).addClass("present");
    } else if (currentHour>parseInt(timeBlockHour)){
        $(this).addClass("past");
    } else {
        $(this).addClass("future");
    }
    })
}

setInterval(changeTextareaColor, 1000); 

$('.saveBtn').on('click', function(){
    var parentId = $(this).parent().attr('id');
    console.log(parentId);
    var input = $(this).siblings('.description').val();
    console.log(input);
    localStorage.setItem(parentId,input);
})

// localStorage.getItem(parentId,input);
for (var parentId=9;parentId < 18;parentId++) {
    var input = [String];
    console.log(input);
    localStorage.getItem(parentId,input);
    if (localStorage.getItem(parentId,input)) {
        $('#parentId').children('.desription').text(input);
    }
} 