'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("You clicked me! HOORAY!!!")
		$(".jumbotron p").addClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$('#submitBTN').click(submitBTN);
}

function projectClick(e) { 
	console.log("Project clicked");
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#7fff00");
 

    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       description.fadeOut();
   }
}

function submitBTN(e) {
	console.log("Submit clicked");
	console.log($('#project').val() );
	var selectedProject = $('#project').val();
	$(selectedProject).width($('#width').val());

    var description = $(selectedProject).find(".project-description");
    if (description.length == 0) { 
    	$(selectedProject).append("<div class='project-description'><p>" + $('#description').val() + "</p></div>"); 
 	} else {
 		description.html("<p>" + $('#description').val() + "</p>");
 	}
}