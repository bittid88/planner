
Meteor.methods({
    /*
     * Method getDegreeData
     * Argument 1: String representing a degree_id PK in the database
     * Return Value: JSON object that has the degree data within.
     *
     * Usage: Used to get degree information from the database to be stored in
     *        the session.
     */
    getDegreeData: function(degree_selected) {
        var degree_data = Degree.findOne({degree_id:degree_selected})
        return degree_data;
    },

    /*
     * Method getCourseData
     * Argument 1: An array of strings that are the course_id's of all of the courses for a given
     *              degree. From Degree.courses
     * Return Value: Array of JSON objects, each containing the information for a specific
     *               course in the degree plan
     *
     * Usage: Used to get all of the courses and their information from the database to be
     *         stored in the session.
     *
     */
    getCourseData: function(courses_selected){
        var course_data = []

        for (var i = 0; i < courses_selected.length; i++)
        {
            course_data[i] = Course.findOne({'course_id': courses_selected[i]});
        }

        return course_data;
    }

})
