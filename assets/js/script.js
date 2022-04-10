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

$('.saveBtn').on('click',function(){
    var parentId = $(this).parent().attr('id');
    console.log(parentId);
    var input = parentId.textarea.val();
    console.log(input);
    localStorage.setItem(parentId,input);
})

/* localStorage.getItem(parentId,input);
for (parentId=9;parentId < 18;parentId++) {
    if (localStorage.getItem(parentId,input)) {
        $('#parentId').textarea.text(input);
    }
} */