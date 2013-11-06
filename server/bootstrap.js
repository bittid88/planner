Meteor.startup(function() {

    Degree = new Meteor.Collection("degree");
    Course = new Meteor.Collection("course");

	if (Degree.find().count() === 0) {
		var data = [{
			degree_id: 'CS_BS_2013',
			degree_name: 'BS Computer Science 2013',
			year: 	'2013',
			department_id: 'CSCI',
			minor_id: '',
			catagories: [ { name: 'Computer Science', id: 'CS' }, { name: 'Mathematics', id: 'Math' }, 
						{ name: 'Science', id: 'Sci' }, { name: 'English', id: 'Eng' }, { name: 'Other', id: 'Other' }],
			courses: [ 'CS_1093','CS_2114','CS_2124','CS_3113', 'CS_3233',
						'CS_4113','CS_4143','CS_4543','CS_4713', 'ENG_1003',
						'ENG_1013','SCOM_1203','MATH_2204','MATH_2183','MATH_2214',
						'MATH_3243','STAT_3233','CHEM_1013', 'CHEM_1011', 'ECON_2333',
						'EE_3333','ENG_3043','PHIL_3723'],
			electives: [
				{ elective_id: 'CS_ELEC1', name: 'CS Elective (Choose 4)', option: ['CS_4043'] },
				{ elective_id: 'CS_ELEC2', name: 'CS Elective (Choose 4)', option: ['CS_4143'] },
				{ elective_id: 'CS_ELEC3', name: 'CS Elective (Choose 4)', option: ['CS_4243'] },
				{ elective_id: 'CS_ELEC4', name: 'CS Elective (Choose 4)', option: ['CS_4343'] },
				{ elective_id: 'LIF_SCI',  name: 'Life Science (Choose 1)', option: ['BIO_1103'] },
				{ elective_id: 'LIF_SCI_LAB', name: 'Life Science Lab (Choose 1)', option: ['BIO_1101'] },
				{ elective_id: 'PHYS_SCI', name: 'Physical Science I', option: ['CS_4043'] },
				{ elective_id: 'PHYS_SCI2', name: 'Physical Science II', option: ['CS_4043'] },
				{ elective_id: 'FINE_ART', name: 'Fine Arts (Choose 1)', option: ['CS_4043'] },
				{ elective_id: 'GBL_ISS', name: 'Global Issues (Choose 1)', option: ['CS_4043'] },
				{ elective_id: 'HIS_GOV', name: 'History/Government (Choose 1)', option: ['CS_4043'] },
				{ elective_id: 'FOR_LAN1', name: 'Foreign Language (Choose 2)', option: ['CS_4043'] },
				{ elective_id: 'FOR_LAN2', name: 'Foreign Language (Choose 2)', option: ['CS_4043'] },
				{ elective_id: 'FREE_ELEC1', name: 'Free Elective', option: ['CS_4043'] },
				{ elective_id: 'FREE_ELEC2', name: 'Free Elective', option: ['CS_4043'] },
				{ elective_id: 'FREE_ELEC3', name: 'Free Elective', option: ['CS_4043'] },
				{ elective_id: 'FREE_ELEC4', name: 'Free Elective', option: ['CS_4043'] }
			]
		},
		
		{
			degree_id: 'CS_BA_2013',
			degree_name: 'BA Computer Science 2013',
			year: 	'2013',
			department_id: 'CSCI',
			minor_id: '',
			catagories: [ { name: 'Computer Science', id: 'CS' }, { name: 'Mathematics', id: 'Math' }, 
						{ name: 'Science', id: 'Sci' }, { name: 'English', id: 'Eng' }, { name: 'Other', id: 'Other' }],
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
			var data = [{"Course ID":"CS_1093","Name":"Making Connection CS","Subject":"CS","Credit Hours":3,"Category":"FYE","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"UC_1013","Name":"Making Connection","Subject":"UC","Credit Hours":3,"Category":"FYE","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"ENG_1003","Name":"Composition I","Subject":"ENG","Credit Hours":3,"Category":"Communication","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"ENG_1013","Name":"Composition II","Subject":"ENG","Credit Hours":3,"Category":"Communication","Corequisite":null,"Prerequisite":"ENG_1003","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"SCOM_1203","Name":"Oral Communication","Subject":"ENG","Credit Hours":3,"Category":"Communication","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"MATH_2204","Name":"Calculus I","Subject":"MATH","Credit Hours":4,"Category":"Math","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"ART_2503","Name":"Fine Arts_Visual","Subject":"ART","Credit Hours":3,"Category":"Fine Arts","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"MUS_2503","Name":"Fine Arts_Music","Subject":"ART","Credit Hours":3,"Category":"Fine Arts","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"THEA_2503","Name":"Fine Arts_Theater","Subject":"ART","Credit Hours":3,"Category":"Fine Arts","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"ENG_2003","Name":"Intro Literature I","Subject":"ENG","Credit Hours":3,"Category":"Humanities","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"ENG_2013","Name":"Intro Literature II","Subject":"ENG","Credit Hours":3,"Category":"Humanities","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"PHIL_1103","Name":"Intro to Philosophy","Subject":"PHIL","Credit Hours":3,"Category":"Humanities","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"ECON_2333","Name":"Economic Issues & Concept","Subject":"SS","Credit Hours":3,"Category":"Global Issues","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"ANTH_2233","Name":"Intro to Antropology","Subject":"SS","Credit Hours":3,"Category":"Global Issues","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"GEOG_2613","Name":"Intro to Geography","Subject":"SS","Credit Hours":3,"Category":"Global Issues","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"HIST_1013","Name":"World Civilization To 1660","Subject":"SS","Credit Hours":3,"Category":"Global Issues","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"HIST_1023","Name":"World Civilization Since 1660","Subject":"SS","Credit Hours":3,"Category":"Global Issues","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"JOUR_1003","Name":"Mass Communication","Subject":"SS","Credit Hours":3,"Category":"Global Issues","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"POSC_1003","Name":"Intro to Politics","Subject":"SS","Credit Hours":3,"Category":"Global Issues","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"PSY_2013","Name":"Intro to Psychology","Subject":"SCI","Credit Hours":3,"Category":"Global Issues","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"HIST_2763","Name":"The US To 1876","Subject":"SS","Credit Hours":3,"Category":"U.S","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"HIST_2773","Name":"The US Since 1876","Subject":"SS","Credit Hours":3,"Category":"U.S","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"POSC_2103","Name":"Intro to US Govt","Subject":"SS","Credit Hours":3,"Category":"U.S","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"BIOL_1003","Name":"Biological Sciene","Subject":"SCI","Credit Hours":3,"Category":"Life Sciences","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"BIOL_1033","Name":"Biology of Sex","Subject":"SCI","Credit Hours":3,"Category":"Life Sciences","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"BIOL_1043","Name":"Plants and People","Subject":"SCI","Credit Hours":3,"Category":"Life Sciences","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"BIOL_1001","Name":"Biological Science Lab","Subject":"SCI","Credit Hours":1,"Category":"Life Sciences","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"PHYS_2034","Name":"University Physics I","Subject":"SCI","Credit Hours":4,"Category":"Physical Sciences","Corequisite": 'MATH_2204',"Prerequisite":"","Season":"Spring, Fall","Year":""},
{"Course ID":"PHYS_2073","Name":"Fundamental Physics I","Subject":"SCI","Credit Hours":3,"Category":"Physical Sciences","Corequisite":'MATH_2204',"Prerequisite":"","Season":"","Year":"Demand"},
{"Course ID":"PHYS_2071","Name":"Fundamental Physics I Lab","Subject":"SCI","Credit Hours":1,"Category":"Physical Sciences","Corequisite":null,"Prerequisite":"","Season":"","Year":"Demand"},
{"Course ID":"CS_1114","Name":"Concept of Programming","Subject":"CS","Credit Hours":4,"Category":"Core","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall","Year":""},
{"Course ID":"CS_2114","Name":"Structured Programming","Subject":"CS","Credit Hours":4,"Category":"Core","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall","Year":""},
{"Course ID":"CS_2124","Name":"OOP & Fundamental Data Structures","Subject":"CS","Credit Hours":4,"Category":"Core","Corequisite":null,"Prerequisite":"CS_2114","Season":"Spring, Fall","Year":""},
{"Course ID":"CS_3113","Name":"Algorithms & Adv Data Structures","Subject":"CS","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"MATH_2204, CS_2124","Season":"Spring, Fall","Year":""},
{"Course ID":"CS_3123","Name":"Programming Languages","Subject":"CS","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"CS_2124","Season":"Spring","Year":""},
{"Course ID":"CS_3223","Name":"Computer Organization","Subject":"CS","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"MATH_2204, CS_2124","Season":"Fall","Year":""},
{"Course ID":"CS_3233","Name":"Operating System","Subject":"CS","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"CS_3113","Season":"Spring","Year":""},
{"Course ID":"CS_4113","Name":"Software Engineering","Subject":"CS","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"CS_3113","Season":"Fall","Year":""},
{"Course ID":"CS_4143","Name":"Java and Application Development","Subject":"CS","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"CS_3123, CS_3223, CS_3233","Season":"Spring","Year":""},
{"Course ID":"CS_4543","Name":"Database Systems","Subject":"CS","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"CS_3113","Season":"Fall","Year":""},
{"Course ID":"CS_4713","Name":"Analysis of Algorithms","Subject":"CS","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"CS_3113, MATH_2204","Season":"Fall","Year":""},
{"Course ID":"MATH_2183","Name":"Discrete Structures","Subject":"MATH","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall","Year":""},
{"Course ID":"MATH_2214","Name":"Calculus II","Subject":"MATH","Credit Hours":4,"Category":"Core","Corequisite":null,"Prerequisite":"MATH_2204","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"MATH_3243","Name":"Linear Algebra","Subject":"MATH","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"MATH_2214","Season":"Spring, Summer","Year":""},
{"Course ID":"STAT_3233","Name":"Applied Statistics_I","Subject":"MATH","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"CHEM_1013","Name":"General Chemistry I","Subject":"SCI","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"CHEM_1011","Name":"General Chemistry I Lab","Subject":"SCI","Credit Hours":1,"Category":"Core","Corequisite":null,"Prerequisite":"","Season":"Spring, Fall, Summer","Year":""},
{"Course ID":"PHYS_2044","Name":"University Physics II","Subject":"SCI","Credit Hours":4,"Category":"Core","Corequisite":'MATH_2214',"Prerequisite":"","Season":"Spring, Fall","Year":""},
{"Course ID":"PHYS_2083","Name":"Fundamental Physics II","Subject":"SCI","Credit Hours":3,"Category":"Core","Corequisite":'MATH_2214',"Prerequisite":"","Season":"","Year":"Demand"},
{"Course ID":"PHYS_2081","Name":"Fundamental Physics II Lab","Subject":"SCI","Credit Hours":1,"Category":"Core","Corequisite":'MATH_2214',"Prerequisite":"","Season":"","Year":"Demand"},
{"Course ID":"EE_3333","Name":"Digital Electronics I","Subject":"SCI","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"CS_2114","Season":"Fall","Year":""},
{"Course ID":"ENG_3043","Name":"Technical Writing","Subject":"ENG","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"","Season":"Spring","Year":"Odd"},
{"Course ID":"PHIL_3723","Name":"Computers, Ethics & Society","Subject":"SS","Credit Hours":3,"Category":"Core","Corequisite":null,"Prerequisite":"","Season":"Spring","Year":"Even"},
{"Course ID":"CS_4133","Name":"Compilers","Subject":"CS","Credit Hours":3,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"CS_3113","Season":"Fall","Year":"Even"},
{"Course ID":"CS_4223","Name":"UNIX Systems Programming","Subject":"CS","Credit Hours":3,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"CS_3113","Season":"Fall","Year":""},
{"Course ID":"CS_4213","Name":"Distributed Computing","Subject":"CS","Credit Hours":3,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"CS_3113","Season":"Fall","Year":"Demand"},
{"Course ID":"CS_4313","Name":"Computer Networking","Subject":"CS","Credit Hours":3,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"CS_3233","Season":"Spring","Year":""},
{"Course ID":"CS_4433","Name":"Artificial Intelligence","Subject":"CS","Credit Hours":3,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"CS_3113","Season":"Spring","Year":"Odd"},
{"Course ID":"CS_4413","Name":"Computer Graphics I","Subject":"CS","Credit Hours":3,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"CS_3113","Season":"Spring","Year":""},
{"Course ID":"CS_4423","Name":"Computer Graphics II","Subject":"CS","Credit Hours":3,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"CS_4413","Season":"","Year":"Demand"},
{"Course ID":"CS_4723","Name":"Automata Theory","Subject":"CS","Credit Hours":3,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"CS_3113","Season":"Fall","Year":"Odd"},
{"Course ID":"CS_4823","Name":"Scripting Languages","Subject":"CS","Credit Hours":3,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"CS_3113","Season":"","Year":"Demand"},
{"Course ID":"CS_4811","Name":"Computer Science Seminar","Subject":"CS","Credit Hours":1,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"CS_3113","Season":"","Year":"Demand"},
{"Course ID":"CS_482V","Name":"Special Problems","Subject":"CS","Credit Hours":3,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"CS_3113","Season":"","Year":"Demand"},
{"Course ID":"CS_483V","Name":"Internship","Subject":"CS","Credit Hours":15,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"CS_3113","Season":"","Year":"Demand"},
{"Course ID":"MATH_4533","Name":"Numerical Method","Subject":"MATH","Credit Hours":3,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"MATH_2214, CS_2114","Season":"Fall","Year":"Odd"},
{"Course ID":"MATH_3254","Name":"Calculus III","Subject":"MATH","Credit Hours":4,"Category":"CS_Elective","Corequisite":null,"Prerequisite":"MATH_2214","Season":"Spring, Fall, Summer","Year":""}]
		for (var i = 0; i < data.length; i++)
		{
			Course.insert(data[i]);
		}
			
	}
})
