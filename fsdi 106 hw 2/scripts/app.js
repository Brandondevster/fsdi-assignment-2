var important = false;
var icon;

function togglePriority() {
    console.log("Clicked");

    if(important == true) {
        // set it as non-important
        icon.removeClass("fas").addClass("far");
        important = false;
    }
    else {
        // set it as important
        icon.removeClass("far").addClass("fas");
        important = true;
    }
}


function init() {
    console.log("Task manager");
    icon = $("#iPriority");

    // hook events
    $("#iPriority").click(togglePriority);

    // load data
}

window.onload = init;