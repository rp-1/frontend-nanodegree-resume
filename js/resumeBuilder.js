var bio = {
    "name": "Richard Asheton",
    "role": "Integrated Creative Director",
    "contacts": {
        "mobile": "615-555-1212",
        "email": "dev@upideas.net",
        "twitter": "@upideas",
        "gitHub": "http://www.github.com/rp-1",
        "location": "Nashville, TN"
    },
    "welcome_msg": "Hi, I'm areative director, writer, strategist, developer and overall brand missionary who touches all stages of the marketing process to engineer creative solutions that help businesses solve problems and reach goals.",    
    "skills": ["Creative Direction", "Concept Development", "Web development", "Programming", "Copywriting"],
    "pic_url": "http://placehold.it/200x200"
        
};

var work = {
    "jobs": [
        {
            "employer": "Asheton Freelance",
            "title": "President",
            "dates": "2014 - present",
            "loc": "Nashville, TN",
            "description": "Freelance integrated creative director available for concept and development projects requiring big ideas and a smart, integrated approach."
        },

        {
            "employer": "Beehive",
            "title": "Executive Creative Director",
            "dates": "2013 - 2014",
            "loc": "Nashville, TN",
            "description": "Led creative department for mid-size, full-service advertising agency. Played a critical role in increasing agency revenue, generating insights and ideas that helped score multiple new business wins, two of which were major account acquisitions for the agency.In less than 6 months with the organization was promoted to Senior Vice President, Director of Creative Strategy."
        },
        
        {
            "employer": "LOVED",
            "title": "Executive Creative Director",
            "dates": "2001 - 2013",
            "loc": "Birmingham, AL",
            "description": "Established creative vision for all clients. Brought focus and consistency to brand messaging across all platforms. Brought both strategic and creative vision to large-scale, multi-million dollar projects with many moving parts.Managed diverse array of creative partners and vendors. Handled countless product launches and major communications initiatives for regional and international consumer goods accounts. Created custom branded content and digital assets, everything from apps to ebooks to rich media banners to full-blown webisode/reality series."
        }
    
    ],
    
    "displayWork": function() {
    
        for(var i = 0; i < this.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
            var formattedDates = HTMLworkDates.replace("%data%", this.jobs[i].dates);
            var formattedLoc = HTMLworkLocation.replace("%data%", this.jobs[i].loc);
            var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[i].description);

            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        }

    }
};

var projects = {
    "projects": [
        {
            "title": "Bullboard App",
            "dates": "2011-2012",
            "description": "Programmed (Objective-C) and designed meme-style app. Thousands of downloads in App Store",
            "images": [
                {
                    "thumb": "http://placehold.it/200x100",
                    "largerImage": "http://placehold.it/600x300"
                },
                {
                     "thumb": "http://placehold.it/200x100",
                    "largerImage": "http://placehold.it/600x300"
                }
            ]
        },
        
        {
            "title": "Stockscape",
            "dates": "2012",
            "description": "Created engaging stock app that visualized stocks as hot-air balloons, rising and falling with their stock price, in real-time.",
            "images": [
                {
                    "thumb": "http://placehold.it/200x100",
                    "largerImage": "http://placehold.it/600x300"
                },
                {
                     "thumb": "http://placehold.it/200x100",
                    "largerImage": "http://placehold.it/600x300"
                }
            ]
        }
    ],
    
    "displayProjects": function() {
    
        for(var i = 0; i < this.projects.length; i++) {
            var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
            var formattedDates= HTMLprojectDates.replace("%data%", this.projects[i].dates);                         
            var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[i].description);

            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription); 


            for(var j = 0; j < this.projects[i].images.length; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", this.projects[i].images[j].thumb);
                formattedImage = formattedImage.replace("%link%", this.projects[i].images[j].largerImage);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }

};


var education = {
    "schools": [
        {
            "name": "University of Georgia",
            "degree": "B.A. English",
            "dates": "1991-1995",
            "loc": "Athens, Gerogia",
            "major": "English"
        },

        {
            "name": "Portfolio Center",
            "degree": "Advertising Arts",
            "dates": "1996-1997",
            "loc": "Atlanta, Gerogia",
            "major": "Advertising"
        }
    ],

    "onlineCourses": [
        {
            "title": "Front End Developer Nano Degree Program",
            "school": "Udacity",
            "dates": "2015",
            "url": "http://www.udacity.com/"
        },

        {
            "title": "Managerial Accounting",
            "school": "University of Washington",
            "dates": "2006",
            "url": "http://www.uwa.edu/"
        }
    ],

    "displayEducation": function() {

        /* -- TRADITIONAL SCHOOLS -- */
        for(var i = 0; i < education.schools.length; i++) {
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[i].loc);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLoc);
            $(".education-entry:last").append(formattedMajor);
        }


        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
        }

        /* -- ONLINE CLASSES -- */
        for(var i = 0; i < education.onlineCourses.length; i++) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

            $("#education").append(HTMLonlineClassesStart);
            $(".education-entry:last").append(formattedTitle);
            $(".education-entry:last").append(formattedSchool);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedUrl);
        }
    }
};

    

/* -- MAIN INFO -- */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var gitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);

var loc = HTMLlocation.replace("%data%", bio.contacts.location);

var pic = HTMLbioPic.replace("%data%", bio.pic_url);
var welcome = HTMLWelcomeMsg.replace("%data%", bio.welcome_msg);

/* skills */
var skills_string = bio.skills.join(" ");
var skills = HTMLskills.replace("%data%", skills_string);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(mobile);
$("#topContacts").append(email);
$("#topContacts").append(twitter);
$("#topContacts").append(gitHub);
$("#topContacts").append(loc);

$("#header").append(pic);
$("#header").append(welcome);

if(bio.skills.length !== 0) {
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++) {
        var new_skill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(new_skill);
    }
}

work.displayWork();

projects.displayProjects();

education.displayEducation();

    
$("#main").append(internationalizeButton);

function inName(name) {
    var first_last = name.trim().split(" ");
    var first = first_last[0].toLowerCase();
    first = first.slice(0,1).toUpperCase() + first.slice(1);
    var last = first_last[1].toUpperCase();
    
    return first + " " + last;
}

$("#mapDiv").append(googleMap);