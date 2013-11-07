Degree = new Meteor.Collection("degree");
Course = new Meteor.Collection("course");


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

        // First Load the selected degree information from the database into the session

        var degree_selected = $('#degreeDDL option:selected').val();
        Meteor.call('getDegreeData', degree_selected, function(error, result) {
            Session.set('degree', result);
            var a = result.courses;

        // Next, load all course information for that degree plan from the database into the session

            Meteor.call('getCourseData', a, function(error, result){
                Session.set('courses', result)
                console.log(result);

        // Create LI elements for each course.
                $(result).each( function(){

                    var html_obj = "";
                    html_obj = "<li><div id='" +  this.course_id + "'class='" + this.subject +" course core'>" + this.name + "</div></li>"
                    // Switch - Case
                    $(html_obj).appendTo('#Fall1_Courses');

                });
                //$('hidden_courses').hide();

        // Next, move the courses to their proper position in the document based on their plan code.
        // This will eventually come from the database.


        })
    })
  }
});

Template.course_grid.course = function(){
    var a = Session.get('courses');
    return a;
}

Template.course_grid.rendered = function() {
    $('#TransferRow').hide();
    $('.summerrow').hide();
}