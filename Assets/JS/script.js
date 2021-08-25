// Document variables
var currentDay = $('#currentDay')

// Created an array of all the <input> timeblocks so I can loop through and compare to the current hour and apply classes
var timeBlock = [
    {
        "element": $('#timeblock-1'),
        "hour": $('#timeblock-1').attr("data-hour")
    },
    {
        "element": $('#timeblock-2'),
        "hour": $('#timeblock-2').attr("data-hour")
    },
    {
        "element": $('#timeblock-3'),
        "hour": $('#timeblock-3').attr("data-hour")
    },
    {
        "element": $('#timeblock-4'),
        "hour": $('#timeblock-4').attr("data-hour")
    },
    {
        "element": $('#timeblock-5'),
        "hour": $('#timeblock-5').attr("data-hour")
    },
    {
        "element": $('#timeblock-6'),
        "hour": $('#timeblock-6').attr("data-hour")
    },
    {
        "element": $('#timeblock-7'),
        "hour": $('#timeblock-7').attr("data-hour")
    },
    {
        "element": $('#timeblock-8'),
        "hour": $('#timeblock-8').attr("data-hour")
    },
    {
        "element": $('#timeblock-9'),
        "hour": $('#timeblock-9').attr("data-hour")
    }
]


// Global Variables
var today = moment();
var currentHour = moment().format("HH")


// Current day/time shown in the Jumbotron
currentDay.text(today.format("dddd, MMMM Do, YYYY"))


// Function to add dynamic style classes to the timeblocks for past, present, and future times
function addTimeBlockClasses(){
    for(var i=0; i<timeBlock.length; i++){
        if (timeBlock[i].hour<currentHour){
            timeBlock[i].element.addClass("past")
            console.log(timeBlock[i].hour+" is less than "+currentHour)
        } else if(timeBlock[i].hour>currentHour) {
            timeBlock[i].element.addClass("future")
            console.log(timeBlock[i].hour+" is greater than "+currentHour)
        } else {
            timeBlock[i].element.addClass("present")
            console.log(timeBlock[i].hour+" is equal to "+currentHour)
        }
    }
}

addTimeBlockClasses()