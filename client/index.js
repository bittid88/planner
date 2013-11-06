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

Template.menu_bar.events ({
    'click #loadButton': function() {
        var degree_selected = $('#degreeDDL option:selected').val();
        Meteor.call('getDegreeData', degree_selected, function(error, result) {
            Session.set('degree', result);
            var a = result.courses;

            Meteor.call('getCourseData', a, function(error, result){
                Session.set('courses', result);
                var a = result;
                console.log(a);
                Meteor.render(Template.body);
            })
        })

    }
})

Template.course_grid.course = function(){
    var a = Session.get('courses');
    return a;
}

Template.course_grid.rendered = function() {
    $('#TransferRow').hide();
    $('.summerrow').hide();
}