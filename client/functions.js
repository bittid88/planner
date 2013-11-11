/**
 * Created by ian on 11/8/13.
 */

function moveCourse(object, position)
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

