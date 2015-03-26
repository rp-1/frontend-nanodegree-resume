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
    "welcomeMessage": "Hi, I'm a creative director, writer, strategist, developer and overall " +
    "brand missionary who touches all stages of the marketing process to engineer creative " +
    "solutions that help businesses solve problems and reach goals.",    
    "skills": [
        "Creative Direction",
        "Concept Development",
        "Web development",
        "Programming",
        "Copywriting"
    ],
    
    "biopic": "images/biopic.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        var formattedGitHub = HTMLgithub.replace("%data%", this.contacts.gitHub);
        var formattedLoc = HTMLlocation.replace("%data%", this.contacts.location);
        var formattedBiopic = HTMLbioPic.replace("%data%", this.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        /* skills */
        var skills_string = this.skills.join(" ");
        var skills = HTMLskills.replace("%data%", skills_string);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        
        var formattedContacts = 
            formattedMobile +
            formattedEmail +
            formattedTwitter +
            formattedGitHub +
            formattedLoc;
        $('#topContacts').append(formattedContacts);
        $('#footerContacts').append(formattedContacts);

        $("#header").append(formattedBiopic);
        $("#header").append(formattedWelcomeMessage);

        if(this.skills.length !== 0) {
            $("#header").append(HTMLskillsStart);
            
            for(var i = 0; i < this.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
                $("#header").append(formattedSkill);
            }
        }
    }
        
};

var work = {
    "jobs": [
        {
            "employer": "Asheton Freelance",
            "title": "President",
            "location": "Nashville, TN",
            "dates": "2014 - present",
            "description": "Freelance integrated creative director available for concept and " +                    "development projects requiring big ideas and a smart, integrated approach."
        },

        {
            "employer": "Beehive",
            "title": "Executive Creative Director",
            "location": "Nashville, TN",
            "dates": "2013 - 2014",
            "description": "Led creative department for mid-size, full-service advertising agency. " +              "Played a critical role in increasing agency revenue, generating insights and ideas " +                 "that  helped score multiple new business wins, two of which were major account " +                     "acquisitions for the agency.In less than 6 months with the organization was " + 
            "promoted to Senior Vice President, Director of Creative Strategy."
        },
        
        {
            "employer": "LOVED",
            "title": "Executive Creative Director",
            "location": "Birmingham, AL",
            "dates": "2001 - 2013",
            "description": "Established creative vision for all clients. Brought focus and " +
            "consistency to brand messaging across all platforms. Brought both strategic and " +                    "creative vision to large-scale, multi-million dollar projects with many moving " +                     "parts.Managed diverse array of creative partners and vendors.Handled countless " +                     "product launches and major communications initiatives for regional and " +
            "international consumer goods accounts. Created custom branded content and digital " +
            "assets, everything from apps to ebooks to rich media banners to full-blown " +                         "webisode/reality series."
        }
    
    ],
    
    "display": function() {
    
        for(var i = 0; i < this.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
            var formattedDates = HTMLworkDates.replace("%data%", this.jobs[i].dates);
            var formattedLoc = HTMLworkLocation.replace("%data%", this.jobs[i].location);
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
            "description": "Programmed (Objective-C) and designed meme-style app that let you " +
            "insert your own photos into dozens of predesigned billboards. Thousands of downloads " +
            "in App Store.",
            "images": [
                "images/bullboard_default.jpg",
                "images/bullboard_pregnant.jpg",
                "images/bullboard_meth.jpg"
            ]
        },
        
        {
            "title": "Stockscape",
            "dates": "2012",
            "description": "Created engaging stock app that visualized stocks as hot-air " +
            "balloons, rising and falling with their stock price, in real-time. Currently " +
            "available for iPad in the App Store.",
            "images": [
                "images/stockscape_cap1.jpg",
                "images/stockscape_cap2.jpg",
                "images/stockscape_cap3.jpg"
            ]
        }
    ],
    
    "display": function() {
    
        for(var i = 0; i < this.projects.length; i++) {
            var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
            var formattedDates= HTMLprojectDates.replace("%data%", this.projects[i].dates);                         
            var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[i].description);

            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription); 


            for(var j = 0; j < this.projects[i].images.length; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", this.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }

};


var education = {
    "schools": [
        {
            "name": "University of Georgia",
            "location": "Athens, Gerogia",
            "degree": "B.A. English",
            "majors": ["English"],
            "dates": "1991-1995",
            "url": "http://uga.edu"
        },

        {
            "name": "Portfolio Center",
            "location": "Atlanta, Gerogia",
            "degree": "Advertising Arts",
            "majors": ["Advertising"],
            "dates": "1996-1997",
            "url": "http://portfoliocenter.com"
        }
    ],

    "onlineCourses": [
        {
            "title": "Front End Developer Nano Degree Program",
            "school": "Udacity",
            "date": "2015",
            "url": "http://www.udacity.com/"
        },

        {
            "title": "Managerial Accounting",
            "school": "University of Washington",
            "date": "2006",
            "url": "http://www.uwa.edu/"
        }
    ],

    "display": function() {

        /* -- TRADITIONAL SCHOOLS -- */
        for(var i = 0; i < education.schools.length; i++) {
            var formattedName = HTMLschoolName.replace("%data%", this.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", this.schools[i].dates);
            var formattedLoc = HTMLschoolLocation.replace("%data%", this.schools[i].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[i].majors);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLoc);
            $(".education-entry:last").append(formattedMajor);
        }

            $("#education").append(HTMLonlineClasses);

        /* -- ONLINE CLASSES -- */
        for(var i = 0; i < education.onlineCourses.length; i++) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school);
            var formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[i].date);
            var formattedUrl = HTMLonlineURL.replace("%data%", this.onlineCourses[i].url);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedTitle + formattedSchool);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedUrl);
        }
    }
};

/*
Add formatted html to page
*/
bio.display();
work.display();
projects.display();
education.display();
   
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


/*
Takes name string (first last) as input. Returns international format, e.g First LAST
*/
function inName(name) {
    var first_last = name.trim().split(" ");
    var first = first_last[0].toLowerCase();
    first = first.slice(0,1).toUpperCase() + first.slice(1);
    var last = first_last[1].toUpperCase();
    
    return first + " " + last;
}