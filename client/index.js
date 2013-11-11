Degree = new Meteor.Collection("degree");
Course = new Meteor.Collection("course");
Plans = new Meteor.Collection("plans");


Template.body.degree = function(){
    var current_degree = Session.get('degree')
    if (current_degree == 0)
    {
        return 0;
    }
    else
    {
        return current_degree;
    }
}

Template.menu_bar.degree = function() {
    return Degree.find();
}

Template.course_grid.rendered = function(){

}

Template.menu_bar.events ({
    'click #loadButton': function() {

        // Remove all pre-existing courses.
        $('div.course').remove();

        // Load the selected degree information from the database into the session

        var degree_selected = $('#degreeDDL option:selected').val();
        Meteor.call('getDegreeData', degree_selected, function(error, result) {
            Session.set('degree', result);
            var a = result.courses;
            var electives = result.electives;
            console.log(electives);

        // Next, load all course information for that degree plan from the database into the session

            Meteor.call('getCourseData', a, function(error, result){
                Session.set('courses', result)
                console.log(result);


        // Get the plan code text file path from the server.
        // If the user provided a schedule code, use that first.
                var schedule_code = $('#codebox').val();

                Meteor.call('getPlanPath', schedule_code);
                var plan_code = "123456789123456789123456789123456789"
                var i = 0;
        // Otherwise, locate the default schedule plan for that degree

        // Create LI elements for each course.

                $(result).each( function(){

                    var html_obj = "<li><div id='" +  this.course_id + "'class='" + this.subject +" course core'>" + this.name + "</div></li>";
                    var id = "#" + this.course_id;

                    // Place the course on the planner according to the plan code text file
                    moveCourse(html_obj, plan_code[i]);
                    i++;

                    // Insert appropriate data for each course
                    $(id).data('corequisite', this.corequisite);
                    $(id).data('prerequisite', this.prerequisite);
                    $(id).data('hours', this.credit_hours);
                    $(id).data('season', this.season);
                    $(id).data('year', this.year)

                });

            // END getCourseData
                console.log(electives);
                $(electives).each( function() {

                    var count = this.count;

                    for (var i = 0; i < count; i++)
                    {
                        var id = "#" + this.elective_id + i;

                        var html_obj = "<li><div id='" +  this.elective_id + i + "'class='" + this.subject + " course elective'>" + this.name + "</div></li>";

                        $(html_obj).appendTo('#Transfer_Courses');

                        $(id).data('option', this.option);
                    }
                });
        });

       // END getDegreeData
    })
  }
});

Template.course_grid.course = function(){
    var a = Session.get('courses');
    return a;
};

Template.course_grid.rendered = function() {
    $('#Transfer_Courses, #Fall1_Courses, #Spring1_Courses, #Summer1_Courses, #Fall2_Courses, #Spring2_Courses, #Summer2_Courses, #Fall3_Courses, #Spring3_Courses, #Summer3_Courses, #Fall4_Courses, #Spring4_Courses, #Summer4_Courses, #Fall5_Courses, #Spring5_Courses, #Summer5_Courses, #Fall6_Courses, #Spring6_Courses, #Summer6_Courses').sortable(
        {   connectWith: ".link",
            dropOnEmpty: true,
            tolerance: "pointer",
            cursorAt: { top: 22, left: 50 }
        }).disableSelection();

};

Template.course_grid.events ({

    'dblclick .elective': function(e) {

        var elective = e.target;
        var stuff = $(elective).data('option');

        console.log(stuff);
    }

});


function moveCourse(html_obj, position)
{
    switch (position)
    {
        case '0':
            $(html_obj).appendTo('#Transfer_Courses');
            break;
        case '1':
            $(html_obj).appendTo('#Fall1_Courses');
            break;
        case '2':
            $(html_obj).appendTo('#Spring1_Courses');
            break;
        case '3':
            $(html_obj).appendTo('#Summer1_Courses');
            break;
        case '4':
            $(html_obj).appendTo('#Fall2_Courses');
            break;
        case '5':
            $(html_obj).appendTo('#Spring2_Courses');
            break;
        case '6':
            $(html_obj).appendTo('#Summer2_Courses');
            break;
        case '7':
            $(html_obj).appendTo('#Fall3_Courses');
            break
        case '8':
            $(html_obj).appendTo('#Spring3_Courses');
            break;
        case '9':
            $(html_obj).appendTo('#Summer3_Courses');
            break;
        case 'a':
            $(html_obj).appendTo('#Fall4_Courses');
            break;
        case 'b':
            $(html_obj).appendTo('#Spring4_Courses');
            break;
        case 'c':
            $(html_obj).appendTo('#Summer4_Courses');
            break;
        case 'd':
            $(html_obj).appendTo('#Fall5_Courses');
            break;
        case 'e':
            $(html_obj).appendTo('#Spring5_Courses');
            break;
        case 'g':
            $(html_obj).appendTo('#Summer5_Courses');
            break;
        case 'h':
            $(html_obj).appendTo('#Fall6_Courses');
            break;
        case 'i':
            $(html_obj).appendTo('#Spring6_Courses');
            break;
        case 'j':
            $(html_obj).appendTo('#Summer6_Courses');
            break;
    }
}