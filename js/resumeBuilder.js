/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Nantawat Laothong",
    role: "Web Developer/3D specialist",
    contacts: {
        mobile: "508-598-8589",
        email: "elaothong@gmail.com",
        github: "#####.github.com",
        twitter: "twitter.com",
        location: "8 flamingo drive, Edgartown, MA 02539"
    }, // end object
    welcomeMessage: "Greeting from Boston",
    skill: [
        "Phothoshop", "Autodesk Maya", "Making Cool Websites"
    ],
    biopic: "./images/my-pic.jpg",
    display: function() {
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        $("#topContacts").before(HTMLheaderRole.replace("%data%", bio.role));
        for (var key in bio.contacts) {
            if (bio.contacts.hasOwnProperty(key)) {
                var newHtmlContact = HTMLcontactGeneric.replace("%data%", bio.contacts[key]);
                $("#topContacts").append(newHtmlContact.replace("%contact%", key));
                $("#footerContacts").append(newHtmlContact.replace("%contact%", key));
            } // end if
        } // end for
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLskillsStart);
        bio.skill.forEach(function(item) {
            $("#skills").append(HTMLskills.replace("%data%", item));
        });
    } // end of function
};


var education = {
    schools: [{
        name: "Bunker Hill Community College",
        location: "530 Mystic Ave, Somerville, MA 02145",
        degree: "BS",
        majors: [
            "Computer science"
        ],
        dates: "2015",
        url: ""
    }, {
        name: "Massachusetts College of Art and Design",
        location: "621 Huntington Ave, Boston, MA 02115",
        degree: "BA",
        majors: [
            "3D animation",
        ],
        dates: "2017",
        url: ""
    }], // end of school,
    onlineCourses: [{
        title: "JavaScript Crash Course",
        school: "Udacity",
        dates: "2017",
        url: "https://www.Udacity.com/course/ud804"
    }, {
        title: "Advanced Maya",
        school: "Gnomon",
        dates: "2017",
        url: "https://www.gnomon.edu/"
    }], // end of onlineCourse
    display: function() {
        $("#education").append(HTMLschoolStart);
        $("#education").append(HTMLonlineClasses);
        for (var i = 0; i < education.schools.length; i++) {
            var schoolAndDegree = HTMLschoolName.replace("%data%", education.schools[i].name);
            schoolAndDegree += HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry").append(schoolAndDegree);
            $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
            $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]));
        } // end for
        for (var x = 0; x < education.onlineCourses.length; x++) {
            var onlineCourseTitleAndSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title);
            onlineCourseTitleAndSchool += HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school);
            $("#education").append(HTMLschoolStart);
            $(".education-entry").eq(1).append(onlineCourseTitleAndSchool.replace("#", education.onlineCourses[x].url));
            $(".education-entry").eq(1).append(HTMLonlineDates.replace("%data%", education.onlineCourses[x].dates));
            $(".education-entry").eq(1).append(HTMLonlineURL.replace("%data%", education.onlineCourses[x].url));
        } // end for 
    }
}; // end of education


var work = {
    jobs: [{
        employer: "Bunker Hill Community College",
        title: "Teacher Assistant",
        location: "530 Mystic Ave, Somerville, MA 02145",
        dates: "2014 - now",
        description: "I help students who has difficult times with their maya and photoshop related assignments"
    }, {
        employer: "Myself",
        title: "Game Developer",
        location: "8 flamingo drive, Edgartown, MA 02539",
        dates: "2010 - now",
        description: "I'm doing everything from coding to modeling characters."
    }], // end of jobs
    display: function() {
        $("#workExperience").append(HTMLworkStart);
        for (var i = 0; i < work.jobs.length; i++) {
            var text = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            text += HTMLworkTitle.replace("%data%", work.jobs[i].title);
            $(".work-entry").append(text);
            $(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
            $(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
            $(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
        } // end for 
    } // end function
};

var projects = {
    projects: [{
            title: "Maya-art-shows",
            dates: "2017",
            description: "These are maya projects that I did for school.",
            images: [
                "./images/maya_01.jpg",
                "./images/maya_02.jpg",
                "./images/maya_03.jpg"

            ]
        }, {
            title: "Portfolio-site",
            dates: "2017",
            description: "I created a responsive website that works on all devices using html, css and JavaScript. The project took about a week since I had to learn all the skills I needed to complete the project.",
            images: [
                "./images/udacity_1.png",
                "./images/udacity_2.png",
                "./images/udacity_3.png"
            ]
        }, {
            title: "Magazine-cover for Images",
            dates: "2016",
            description: "The company asked me to create a cover for them. So this is what I came up with. ",
            images: [
                "./images/book-cover.jpg"
            ] // end of images 
        } // end of object
    ], // end of array
    display: function() {
        $("#projects").append(HTMLprojectStart);
        for (var i = 0; i < projects.projects.length; i++) {
            $(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
            $(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
            $(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
            for (var x = 0; x < projects.projects[i].images.length; x++) {
                $(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[x]));
            }
        } // end for 
    }
};


bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

new WOW().init();