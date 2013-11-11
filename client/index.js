Degree = new Meteor.Collection("degree");
Course = new Meteor.Collection("course");
Plan = new Meteor.Collection("plan");

Template.body.events ({
    'click a.new': function(){
        Session.set('selected', 'new');
    },

    'click a.load': function(){
        Session.set('selected', 'load');
    }
})

Template.course_grid.year = function(){
    var year = parseInt(Session.get('startYear'));
    var data = {
        'one': year,
        'two': year + 1,
        'three': year + 2,
        'four': year + 3,
        'five': year + 4,
        'six': year + 5,
        'seven': year + 6
    }

    return data;
}

Template.Load_State.new = function(){
    var load_state = Session.get('selected');
    if (load_state === 'new')
        return 1;
    else
        return 0;
}

Template.body.selected = function(){
    var current_degree = Session.get('selected')
    if (current_degree == 0)
    {
        return 0;
    }
    else
    {
        return current_degree;
    }
}

Template.new_plan_bar.degree = function() {
    return Degree.find();
}


Template.new_plan_bar.events ({
    'click #createButton': function() {

        // Remove all pre-existing courses and show all rows.
        $('div.course').remove();
        $('tr').show();

        // Disable Create Button (Re-enabled if DDLs change)
        $('#createButton').button({disabled: true});

        // Get Start Year, Degree and Minor from the UI.
        var degree_selected = $('#degreeDDL option:selected').val();

        // Load the selected degree information from the database into the session
        Meteor.call('getDegreeData', degree_selected, function(error, result) {
            Session.set('degree', result);
            var a = result.courses;
            var electives = result.electives;
            var no_of_courses = a.length;
            var no_of_electives = electives.length;

        // Next, load all course information for that degree plan from the database into the session
            Meteor.call('getCourseData', a, function(error, result){
                Session.set('courses', result)
                // Create LI elements for each course.
                $(result).each( function(){

                    var html_obj = "<div id='" +  this.course_id + "'class='" + this.subject +" course core'>" + this.name + "</div>";
                    var id = "#" + this.course_id;

                // Place the course on the planner in the first available slot.
                    $(html_obj).appendTo('#Transfer_Courses');

                // Insert appropriate data for each course
                    $(id).data('corequisite', this.corequisite);
                    $(id).data('prerequisite', this.prerequisite);
                    $(id).data('hours', this.credit_hours);
                    $(id).data('season', this.season);
                    $(id).data('year', this.year)

                });

                // Create LI elements for each elective
                $(electives).each( function() {

                    var count = this.count;

                    for (var i = 0; i < count; i++)
                    {
                        var id = "#" + this.elective_id + i;
                        var html_obj = "<div id='" +  this.elective_id + i + "'class='" + this.subject + " course elective'>" + this.name + "</div>";
                    // Place the course on the planner in the first available slot.
                        $(html_obj).appendTo('#Transfer_Courses');
                    // Insert appropriate data for the course
                        $(id).data('option', this.option);
                    }
                });

        // Get the default plan code from the database for that degree.
                var schedule_code = md5(degree_selected);
                Meteor.call('getPlanCode', schedule_code, function(err, result){
                    var plan_courses = result.courses;
                    $(plan_courses).each( function(){
                        moveCourse(this.id, this.pos);
                    });
                    var plan_electives = result.electives;
                    $(plan_electives).each( function(){
                        moveCourse(this.id, this.pos);
                        selectCourse(this.id, this.selection);
                    })
                // Hide all unused rows
                $('td.link').each( function(){
                    if($(this).children().length === 0)
                    {
                        $(this).parent().hide();
                    }
                // Enable Toggle Hidden button
                    $('.toggleHidden').removeAttr('disabled');
                    Session.set('toggle', 0);
                })
           });

        });

       // END getDegreeData
    })
 },

'change #yearDDL': function() {
    var start_year = $('#yearDDL option:selected').val();
    Session.set('startYear', start_year)
 },

 'click .toggleHidden': function(e){
    console.log(Session.get('toggle'));
     var toggle_button = e.target;
        if (Session.get('toggle') === 0)
        {
            $(toggle_button).html('Hide Empty');
             Session.set('toggle', 1) ;
             $('td.link').each( function(){
                if ($(this).children().length === 0)
                {
                    $(this).parent().show();
                }
         })
        }
        else
        {
            $(toggle_button).html('Show Hidden');
            Session.set('toggle', 0);
            $('td.link').each( function(){
                if ($(this).children().length === 0)
                {
                    $(this).parent().hide();
                }
            })
        }
 }


});

Template.course_grid.course = function(){
    var a = Session.get('courses');
    return a;
};

Template.course_grid.rendered = function() {

    if ($('div.course').length === 0)
    {
        console.log($('div.course').length);
        $('tr').hide();
    }

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


function selectCourse(course, selection){

}


function moveCourse(obj_id, position)
{
    var obj_id = '#' + obj_id;
    var position = '#' + position;
    $(obj_id).appendTo(position);
}

// MD5 Hashing function by Joseph Myers.

function md5cycle(x, k) {
    var a = x[0], b = x[1], c = x[2], d = x[3];

    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17,  606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12,  1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7,  1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7,  1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22,  1236535329);

    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14,  643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9,  38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5,  568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20,  1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14,  1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);

    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16,  1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11,  1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4,  681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23,  76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16,  530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);

    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10,  1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6,  1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6,  1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21,  1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15,  718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);

    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
    txt = '';
    var n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878], i;
    for (i=64; i<=s.length; i+=64) {
        md5cycle(state, md5blk(s.substring(i-64, i)));
    }
    s = s.substring(i-64);
    var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
    for (i=0; i<s.length; i++)
        tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
    tail[i>>2] |= 0x80 << ((i%4) << 3);
    if (i > 55) {
        md5cycle(state, tail);
        for (i=0; i<16; i++) tail[i] = 0;
    }
    tail[14] = n*8;
    md5cycle(state, tail);
    return state;
}

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
function md5blk(s) { /* I figured global was faster.   */
    var md5blks = [], i; /* Andy King said do it this way. */
    for (i=0; i<64; i+=4) {
        md5blks[i>>2] = s.charCodeAt(i)
            + (s.charCodeAt(i+1) << 8)
            + (s.charCodeAt(i+2) << 16)
            + (s.charCodeAt(i+3) << 24);
    }
    return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n)
{
    var s='', j=0;
    for(; j<4; j++)
        s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
            + hex_chr[(n >> (j * 8)) & 0x0F];
    return s;
}

function hex(x) {
    for (var i=0; i<x.length; i++)
        x[i] = rhex(x[i]);
    return x.join('');
}

function md5(s) {
    return hex(md51(s));
}

/* this function is much faster,
 so if possible we use it. Some IEs
 are the only ones I know of that
 need the idiotic second function,
 generated by an if clause.  */

function add32(a, b) {
    return (a + b) & 0xFFFFFFFF;
}

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
    function add32(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
}