
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
    },

    /*
     * Method getPlanPath
     * Argument 1: A hash of the user-entered schedule code, looks into the database to see if anything matches it
     *
     * Return Value: A path to a file on the server containing the correct plan information
     *
     */

    getPlanCode: function(schedule_code){
       //schedule_code.toString();
       var plan = Plan.findOne({'plan_id' : schedule_code});

       return plan;
    },

    /*
     * Method writeFile
     * Argument 1: A string that represents a partial path on the server file system that will
     *             provide the location of a data file.
     * Argument 2: A string representing the data to write to the opened file.
     *
     * Return Value: None.
     *
     * Usage:      Creates a file on the server file system (or overwrites if one already exists) the
     *             file for the given path. The information in the second argument, data, is then written to that
     *             file, and then the file is closed.
     */
    writeFile: function(path, data) {

        var fs = Npm.require('fs');

        var full_path = './plan_data/' + path + '.txt';

        var fd = fs.openSync('.txt', 'w+');

        var buffer = data;

        fs.writeSync(fd, buffer)

        fs.closeSync(fd);

    },

    /*
     * Method readFile
     * Argument 1: A partial path that represents the location of a file on the server's file system
     *
     * Return value: The data contained within the specified value, or nothing if the file does not exist.
     *
     * Usage: Reads the data from a file on the server and returns it. This data should represent the plan code.
     *
     */
    readFile: function(path) {

        var fs = Npm.require('fs');

        var full_path = './plan_data/' + path + '.txt';

        var fd = fs.openSync(full_path, 'r');

        var result = "";

        fs.readSync(fd, result, 0, 9999, 0);

        return result;

    }

})
