Meteor.startup(function() {

    Degree = new Meteor.Collection("degree");
    Course = new Meteor.Collection("course");
    Plan = new Meteor.Collection("plan");

	if (Degree.find().count() === 0) {
		var data = [{
			degree_id: 'CS_BS_2013',
			degree_name: 'BS Computer Science 2013',
			year: 	'2013',
			department_id: 'CSCI',
			courses: [ 'CS_1093','CS_2114','CS_2124','CS_3113', 'CS_3123', 'CS_3233',
						'CS_4113','CS_4143','CS_4543','CS_4713', 'ENG_1003',
						'ENG_1013','SCOM_1203','MATH_2204','MATH_2183','MATH_2214',
						'MATH_3243','STAT_3233','CHEM_1013', 'CHEM_1011', 'ECON_2333',
						'EE_3333','ENG_3043','PHIL_3723'],
			electives: [
                { elective_id: "CS_ELEC", count: 4, name: "CS Elective", subject: "CS",
                    option: ["CS_4233", "CS_482V", "CS_4723", "CS_4313", "CS_4413", "MATH_4533", "CS_4133", "CS_4433" ] },
                { elective_id: "GOV_ELEC", count: 1, name: "US His/Gov Elective", subject: "SS",
                    option: ["CS_4143"] },
                { elective_id: "UGI_ELEC", count: 1, name: "Understanding Glob. Issues Elective", subject: "SS",
                    option: ["CS_4143"] },
                { elective_id: "HUM_ELEC", count: 1, name: "Humanities Elective", subject: "SS",
                    option: ["CS_4143"] },
                { elective_id: "LIF_SCI", count: 1, name: "Life Science Elective", subject: "SCI",
                    option: ['BIO_1103'] },
                { elective_id: "LIF_LAB", count: 1, name: "Life Science Lab Elective", subject: "SCI",
                    option: ["BIO_1101"] },
                { elective_id: 'PHY_SCI', count: 1, name: "Physical Science Elective", subject: "SCI",
                    option: ["PHY_2014"] },
                { elective_id: 'PHY_SCI2', count: 1, name: "Physical Science 2 Elective", subject: "SCI",
                    option: ['PHY_2024'] },
                { elective_id: 'FINE_ART', count: 1, name: "Fine Art Elective", subject: "ART",
                    option: ['ART_2034'] },
                { elective_id: 'FOR_LAN', count: 2, name: "Foreign Language Elective", subject: 'SS',
                    option: ['GER_1101'] },
                { elective_id: 'FREE_ELEC', count: 4, name: "Free Elective", subject: 'GEN',
                    option: ['ART_2034'] }
			]
		},
		
		{
			degree_id: 'CS_BA_2013',
			degree_name: 'BA Computer Science 2013',
			year: 	'2013',
			department_id: 'CSCI',
			courses: ['CS_1093', 'ENG_1003', 'ENG_1013', 'SCOM_1203', 'MATH_1023', 'CS_1114', 'CS_2114', 'CS_2124', 'CS_3113',
					   'CS_3233', 'CS_4113', 'CS_4143', 'CS_4313', 'CS_4543', 'CS_4713', 'MATH_2183', 'MATH_2143', 'MATH_2204', 
					   'MATH_3243', 'STAT_3233' ]
		}
		
		]
		for (var i = 0; i < data.length; i++)
		{
			Degree.insert(data[i]);
		}
	}
		
	if (Course.find().count() === 0) {
			var data = [{"course_id":"CS_1093","name":"Making Connection CS","subject":"CS","credit_hours":3,"category":"FYE","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"UC_1013","name":"Making Connection","subject":"UC","credit_hours":3,"category":"FYE","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ENG_1003","name":"Composition I","subject":"ENG","credit_hours":3,"category":"Communication","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ENG_1013","name":"Composition II","subject":"ENG","credit_hours":3,"category":"Communication","corequisite":null,"prerequisite":"ENG_1003","season":"Spring, Fall, Summer","year":""},
{"course_id":"SCOM_1203","name":"Oral Communication","subject":"ENG","credit_hours":3,"category":"Communication","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"MATH_2204","name":"Calculus I","subject":"MATH","credit_hours":4,"category":"Math","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ART_2503","name":"Fine Arts_Visual","subject":"ART","credit_hours":3,"category":"Fine Arts","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"MUS_2503","name":"Fine Arts_Music","subject":"ART","credit_hours":3,"category":"Fine Arts","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"THEA_2503","name":"Fine Arts_Theater","subject":"ART","credit_hours":3,"category":"Fine Arts","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ENG_2003","name":"Intro Literature I","subject":"ENG","credit_hours":3,"category":"Humanities","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ENG_2013","name":"Intro Literature II","subject":"ENG","credit_hours":3,"category":"Humanities","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"PHIL_1103","name":"Intro to Philosophy","subject":"PHIL","credit_hours":3,"category":"Humanities","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ECON_2333","name":"Economic Issues & Concept","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ANTH_2233","name":"Intro to Antropology","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"GEOG_2613","name":"Intro to Geography","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"HIST_1013","name":"World Civilization To 1660","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"HIST_1023","name":"World Civilization Since 1660","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"JOUR_1003","name":"Mass Communication","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"POSC_1003","name":"Intro to Politics","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"PSY_2013","name":"Intro to Psychology","subject":"SCI","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"HIST_2763","name":"The US To 1876","subject":"SS","credit_hours":3,"category":"U.S","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"HIST_2773","name":"The US Since 1876","subject":"SS","credit_hours":3,"category":"U.S","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"POSC_2103","name":"Intro to US Govt","subject":"SS","credit_hours":3,"category":"U.S","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"BIOL_1003","name":"Biological Sciene","subject":"SCI","credit_hours":3,"category":"Life Sciences","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"BIOL_1033","name":"Biology of Sex","subject":"SCI","credit_hours":3,"category":"Life Sciences","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"BIOL_1043","name":"Plants and People","subject":"SCI","credit_hours":3,"category":"Life Sciences","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"BIOL_1001","name":"Biological Science Lab","subject":"SCI","credit_hours":1,"category":"Life Sciences","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"PHYS_2034","name":"University Physics I","subject":"SCI","credit_hours":4,"category":"Physical Sciences","corequisite": 'MATH_2204',"prerequisite":"","season":"Spring, Fall","year":""},
{"course_id":"PHYS_2073","name":"Fundamental Physics I","subject":"SCI","credit_hours":3,"category":"Physical Sciences","corequisite":'MATH_2204',"prerequisite":"","season":"","year":"Demand"},
{"course_id":"PHYS_2071","name":"Fundamental Physics I Lab","subject":"SCI","credit_hours":1,"category":"Physical Sciences","corequisite":null,"prerequisite":"","season":"","year":"Demand"},
{"course_id":"CS_1114","name":"Concept of Programming","subject":"CS","credit_hours":4,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring, Fall","year":""},
{"course_id":"CS_2114","name":"Structured Programming","subject":"CS","credit_hours":4,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring, Fall","year":""},
{"course_id":"CS_2124","name":"OOP & Fundamental Data Structures","subject":"CS","credit_hours":4,"category":"Core","corequisite":null,"prerequisite":"CS_2114","season":"Spring, Fall","year":""},
{"course_id":"CS_3113","name":"Algorithms & Adv Data Structures","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"MATH_2204, CS_2124","season":"Spring, Fall","year":""},
{"course_id":"CS_3123","name":"Programming Languages","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_2124","season":"Spring","year":""},
{"course_id":"CS_3223","name":"Computer Organization","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"MATH_2204, CS_2124","season":"Fall","year":""},
{"course_id":"CS_3233","name":"Operating System","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_3113","season":"Spring","year":""},
{"course_id":"CS_4113","name":"Software Engineering","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_3113","season":"Fall","year":""},
{"course_id":"CS_4143","name":"Java and Application Development","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_3123, CS_3223, CS_3233","season":"Spring","year":""},
{"course_id":"CS_4543","name":"Database Systems","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_3113","season":"Fall","year":""},
{"course_id":"CS_4713","name":"Analysis of Algorithms","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_3113, MATH_2204","season":"Fall","year":""},
{"course_id":"MATH_2183","name":"Discrete Structures","subject":"MATH","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring, Fall","year":""},
{"course_id":"MATH_2214","name":"Calculus II","subject":"MATH","credit_hours":4,"category":"Core","corequisite":null,"prerequisite":"MATH_2204","season":"Spring, Fall, Summer","year":""},
{"course_id":"MATH_3243","name":"Linear Algebra","subject":"MATH","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"MATH_2214","season":"Spring, Summer","year":""},
{"course_id":"STAT_3233","name":"Applied Statistics I","subject":"MATH","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"CHEM_1013","name":"General Chemistry I","subject":"SCI","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"CHEM_1011","name":"General Chemistry I Lab","subject":"SCI","credit_hours":1,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"PHYS_2044","name":"University Physics II","subject":"SCI","credit_hours":4,"category":"Core","corequisite":'MATH_2214',"prerequisite":"","season":"Spring, Fall","year":""},
{"course_id":"PHYS_2083","name":"Fundamental Physics II","subject":"SCI","credit_hours":3,"category":"Core","corequisite":'MATH_2214',"prerequisite":"","season":"","year":"Demand"},
{"course_id":"PHYS_2081","name":"Fundamental Physics II Lab","subject":"SCI","credit_hours":1,"category":"Core","corequisite":'MATH_2214',"prerequisite":"","season":"","year":"Demand"},
{"course_id":"EE_3333","name":"Digital Electronics I","subject":"SCI","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_2114","season":"Fall","year":""},
{"course_id":"ENG_3043","name":"Technical Writing","subject":"ENG","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring","year":"Odd"},
{"course_id":"PHIL_3723","name":"Computers, Ethics & Society","subject":"SS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring","year":"Even"},
{"course_id":"CS_4133","name":"Compilers","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"Fall","year":"Even"},
{"course_id":"CS_4223","name":"UNIX Systems Programming","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"Fall","year":""},
{"course_id":"CS_4213","name":"Distributed Computing","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"Fall","year":"Demand"},
{"course_id":"CS_4313","name":"Computer Networking","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3233","season":"Spring","year":""},
{"course_id":"CS_4433","name":"Artificial Intelligence","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"Spring","year":"Odd"},
{"course_id":"CS_4413","name":"Computer Graphics I","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"Spring","year":""},
{"course_id":"CS_4423","name":"Computer Graphics II","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_4413","season":"","year":"Demand"},
{"course_id":"CS_4723","name":"Automata Theory","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"Fall","year":"Odd"},
{"course_id":"CS_4823","name":"Scripting Languages","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"","year":"Demand"},
{"course_id":"CS_4811","name":"Computer Science Seminar","subject":"CS","credit_hours":1,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"","year":"Demand"},
{"course_id":"CS_482V","name":"Special Problems","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"","year":"Demand"},
{"course_id":"CS_483V","name":"Internship","subject":"CS","credit_hours":15,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"","year":"Demand"},
{"course_id":"MATH_4533","name":"Numerical Method","subject":"MATH","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"MATH_2214, CS_2114","season":"Fall","year":"Odd"},
{"course_id":"MATH_3254","name":"Calculus III","subject":"MATH","credit_hours":4,"category":"CS_Elective","corequisite":null,"prerequisite":"MATH_2214","season":"Spring, Fall, Summer","year":""}]
		for (var i = 0; i < data.length; i++)
		{
			Course.insert(data[i]);
		}
	}

    if (Plan.find().count() === 0){
        var data = {
            plan_id: '4a780c6bc7ea6c944dd155a44c1d5f18',
            degree_id: 'BS_CS_2013',
            start_year: '2013',
            timestamp: '',
            courses: [
                {id: "CS_1093", pos: 'Fall1_Courses'},
                {id: "MATH_2204", pos: 'Fall1_Courses'},
                {id: "ENG_1003", pos: 'Fall1_Courses'},

                {id: "CS_2114", pos: 'Spring1_Courses'},
                {id: "MATH_2214", pos: 'Spring1_Courses'},
                {id: "ENG_1013", pos: 'Spring1_Courses'},

                {id: "CS_2124", pos: 'Fall2_Courses'},
                {id: "MATH_2183", pos: 'Fall2_Courses'},
                {id: "SCOM_1203", pos: 'Fall2_Courses'},

                {id: "CS_3113", pos: 'Spring2_Courses'},
                {id: "STAT_3233", pos: 'Spring2_Courses'},
                {id: "ECON_2333", pos: 'Spring2_Courses'},
                {id: "CHEM_1013", pos: 'Spring2_Courses'},
                {id: "CHEM_1011", pos: 'Spring2_Courses'},

                {id: "MATH_3243", pos: 'Fall3_Courses'},
                {id: "EE_3333", pos: 'Fall3_Courses'},
                {id: "CS_3223", pos: 'Fall3_Courses'},

                {id: "CS_3233", pos: 'Spring3_Courses'},
                {id: "CS_3123", pos: 'Spring3_Courses'},

                {id: "CS_4113", pos: 'Fall4_Courses'},
                {id: "CS_4713", pos: 'Fall4_Courses'},
                {id: "CS_4543", pos: 'Fall4_Courses'},
                {id: "ENG_3043", pos: 'Fall4_Courses'},

                {id: "CS_4143", pos: 'Spring4_Courses'},
                {id: "PHIL_3723", pos: 'Spring3_Courses'}
            ],
            electives: [
                {id: "FINE_ART0", pos: 'Fall1_Courses', selection: ''},
                {id: "GOV_ELEC0", pos: 'Fall1_Courses', selection: ''},

                {id: "LIF_SCI0", pos: 'Spring1_Courses', selection: ''},
                {id: "LIF_LAB0", pos: 'Spring1_Courses', selection: ''},

                {id: "HUM_ELEC0", pos: 'Fall2_Courses', selection: ''},
                {id: "FOR_LAN0", pos: 'Fall2_Courses', selection: ''},

                {id: "FOR_LAN1", pos: 'Spring2_Courses', selection: ''},

                {id: "CS_ELEC0", pos: 'Fall3_Courses', selection: ''},
                {id: "PHY_SCI0", pos: 'Fall3_Courses', selection: ''},

                {id: "PHY_SCI20", pos: 'Spring3_Courses', selection: ''},
                {id: "UGI_ELEC0", pos: 'Spring3_Courses', selection: ''},
                {id: "CS_ELEC1", pos: 'Spring3_Courses', selection: ''},

                {id: "FREE_ELEC0", pos: 'Fall4_Courses', selection: ''},

                {id: "CS_ELEC2", pos: 'Spring4_Courses', selection: ''},
                {id: "CS_ELEC3", pos: 'Spring4_Courses', selection: ''},
            ]
        }
        Plan.insert(data);
    }

})
