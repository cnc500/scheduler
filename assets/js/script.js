$('#timer');

function displayCureentDayTime() {
var currentDateTime = moment().format("dddd, MMMM Do, YYYY  hh:mm:ss");
console.log(currentDateTime);
$('#currentDayTime').text(currentDateTime);
}

setInterval(displayCureentDayTime, 1000);

function changeTextareaColor() {
    $('textArea').each(function(){
//    currentHour = currentDateTime."hh"
    var currentHour = moment().hour();
    console.log(currentHour);
    var timeBlockHour = $(this).parent().attr('id');
    console.log(timeBlockHour);
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

$('.saveBtn').on('click',function(){
    var parentId = $(this).parent().attr('id');
    console.log(parentId);
    var input = textArea.val();
    localStorage.setItem(parentId,input);
})

localStorage.getItem(parentId,input);