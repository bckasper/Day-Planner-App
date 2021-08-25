// Document variables
var currentDay = $('#currentDay')
var saveBtns = $('button')

// Created an array of all the <input> timeblocks so I can loop through and compare to the current hour and apply classes
var timeBlock = [
    {
        "element": $('#timeblock-1'),
        "hour": $('#timeblock-1').attr("data-hour"),
        "value": $('#timeblock-1').text()
    },
    {
        "element": $('#timeblock-2'),
        "hour": $('#timeblock-2').attr("data-hour"),
        "value": $('#timeblock-2').val()
    },
    {
        "element": $('#timeblock-3'),
        "hour": $('#timeblock-3').attr("data-hour"),
        "value": $('#timeblock-3').val()
    },
    {
        "element": $('#timeblock-4'),
        "hour": $('#timeblock-4').attr("data-hour"),
        "value": $('#timeblock-4').val()
    },
    {
        "element": $('#timeblock-5'),
        "hour": $('#timeblock-5').attr("data-hour"),
        "value": $('#timeblock-5').val()
    },
    {
        "element": $('#timeblock-6'),
        "hour": $('#timeblock-6').attr("data-hour"),
        "value": $('#timeblock-6').val()
    },
    {
        "element": $('#timeblock-7'),
        "hour": $('#timeblock-7').attr("data-hour"),
        "value": $('#timeblock-7').val()
    },
    {
        "element": $('#timeblock-8'),
        "hour": $('#timeblock-8').attr("data-hour"),
        "value": $('#timeblock-8').val()
    },
    {
        "element": $('#timeblock-9'),
        "hour": $('#timeblock-9').attr("data-hour"),
        "value": $('#timeblock-9').val()
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

        // Will keep whatever input the user saved into local storage for each timeblock
        var localCache = localStorage.getItem(timeBlock[i].element.attr("id"))
        timeBlock[i].innerHTML = localCache
        console.log(localCache)
    }
}

addTimeBlockClasses()

// // Below is the code that will add functionality to the save buttons
$(document).ready(function(){
    saveBtns.click(function(event){
        event.preventDefault();

        var inputItem = $(this).siblings("input").val()
        var itemHour = $(this).siblings("input").attr("id")
        console.log(inputItem)
        
        localStorage.setItem(itemHour, inputItem)
    })
})