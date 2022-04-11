function displayCureentDayTime() {
var currentDateTime = moment().format("dddd, MMMM Do, YYYY  hh:mm:ss");
$('#currentDayTime').text(currentDateTime);
}
// calls display displayCureentDayTime every second to display current
// time every second
setInterval(displayCureentDayTime, 1000);

function changeTextareaColor() {
    $('textarea').each(function(){
    var currentHour = moment().hour();
    var timeBlockHour = $(this).parent().attr('id');
    // Compares current hour with id of parent of textarea.
    // Parent of textarea are each appropriately named by the
    // hour they represent.  If they are the same, that textarea
    // is in the present and then styles with a red background.
    // If current hour is greater than the time block on the 
    // calendar, than it is in the past and will style with a gray
    // background.  If it is neither the past or the present, it is 
    // future and the text area will have a green background.
    if (currentHour===parseInt(timeBlockHour)){
        $(this).addClass("present");
    } else if (currentHour>parseInt(timeBlockHour)){
        $(this).addClass("past");
    } else {
        $(this).addClass("future");
    }
    })
}
// calls changeTextareaColor evry second to make sure it updates
// colors every at the second the hour changes
setInterval(changeTextareaColor, 1000); 

$('.saveBtn').on('click', function(){
    var parentId = $(this).parent().attr('id');
    var input = $(this).siblings('.description').val();
    localStorage.setItem(parentId,input);
})

// calls retrievedStoredText after page is loaded
window.addEventListener('load',retrieveStoredText());

function retrieveStoredText() {
    // iterates through all 9 elements containing textarea 
    for (var parentId=9;parentId < 18;parentId++) {
        input = localStorage.getItem(parentId);
        localStorage.getItem(parentId);
        // texts stored input back into textarea     
        $('#' + parentId).children('.description').text(input);
    }
}