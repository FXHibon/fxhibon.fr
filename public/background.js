/**
 * Created by fhibon on 07/03/2016.
 */

var techs = ['Javascript', 'Java', 'Mobile', 'Android', 'Framework', 'css', 'html', 'responsive', 'Architecture', 'tests', 'DDD', 'Javascript', 'Java', 'Mobile', 'Android', 'Framework', 'css', 'html', 'responsive', 'Architecture', 'tests', 'DDD', 'Javascript', 'Java', 'Mobile', 'Android', 'Framework', 'css', 'html', 'responsive', 'Architecture', 'tests', 'DDD', 'Javascript', 'Java', 'Mobile', 'Android', 'Framework', 'css', 'html', 'responsive', 'Architecture', 'tests', 'DDD'];

var tmpl = '<div class="animated white-text">{{tech}}</div>';
var container = $('#top-container');

function templated(tech) {
    console.log('templated(', tech, ') called');
    var tmp = tmpl.replace('{{tech}}', tech);
    return tmp;
}


techs.forEach(function (tech) {
    console.log(tech);
    container.append(templated(tech));
});
