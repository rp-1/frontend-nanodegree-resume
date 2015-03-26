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
        "Copywriting"
    ],
    
    "biopic": "images/biopic.jpg",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        var formattedGitHub = HTMLgithub.replace("%data%", this.contacts.gitHub);
        var formattedLoc = HTMLlocation.replace("%data%", this.contacts.location);
        var formattedBiopic = HTMLbioPic.replace("%data%", this.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        var skillsString = this.skills.join(" ");
        var skills = HTMLskills.replace("%data%", skillsString);

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
            var formattedSkillString = "";
            $("#header").append(HTMLskillsStart);
            for(var skill in this.skills) {
                formattedSkillString += HTMLskills.replace("%data%", this.skills[skill]);
            }
            var formattedList = HTMLskillList.replace("%data%", formattedSkillString);
            $("#header").append(formattedList);
        }
    }
        
};

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3>';
var HTMLskillList = '<ul id="skills">%data%</ul>';
var HTMLskills = '<li><span class="white-text">%data%</span></li>';

var work = {
    "jobs": [
        {
            "employer": "Asheton Freelance",
            "title": "President",
            "location": "Nashville, TN",
            "dates": "2014 - present",
            "description": "Freelance integrated creative director available for concept and " +
            "development projects requiring big ideas and a smart, integrated approach."
        },

        {
            "employer": "Beehive",
            "title": "Executive Creative Director",
            "location": "Nashville, TN",
            "dates": "2013 - 2014",
            "description": "Led creative department for mid-size, full-service advertising agency. " +
            "Played a critical role in increasing agency revenue, generating insights and ideas " +
            "that  helped score multiple new business wins, two of which were major account " +
            "acquisitions for the agency.In less than 6 months with the organization was " +
            "promoted to Senior Vice President, Director of Creative Strategy."
        },
        
        {
            "employer": "LOVED",
            "title": "Executive Creative Director",
            "location": "Birmingham, AL",
            "dates": "2001 - 2013",
            "description": "Established creative vision for all clients. Brought focus and " +
            "consistency to brand messaging across all platforms. Brought both strategic and " +
            "creative vision to large-scale, multi-million dollar projects with many moving " +
            "parts.Managed diverse array of creative partners and vendors.Handled countless " +
            "product launches and major communications initiatives for regional and " +
            "international consumer goods accounts. Created custom branded content and digital " +
            "assets, everything from apps to ebooks to rich media banners to full-blown " +
            "webisode/reality series."
        }
    
    ],
    
    display: function() {
    
        for(var job in this.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
            var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
            var formattedLoc = HTMLworkLocation.replace("%data%", this.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);

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
    
    display: function() {
    
        for(var project in this.projects) {
            var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
            var formattedDates= HTMLprojectDates.replace("%data%", this.projects[project].dates);                         
            var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);

            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription); 


            for(var image in this.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
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

    display: function() {

        for(var school in this.schools) {
            var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
            var formattedLoc = HTMLschoolLocation.replace("%data%", this.schools[school].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLoc);
            $(".education-entry:last").append(formattedMajor);
        }

            $("#education").append(HTMLonlineClasses);

        for(var course in this.onlineCourses) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
            var formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[course].date);
            var formattedUrl = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);

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

$("#mapDiv").append(googleMap);
