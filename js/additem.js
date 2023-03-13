

var coursesApi='https://localhost:7026/api/v1/accounts';


function start(){
getCourses(renderCourses);
}

start();

function getCourses(callback){
    fetch(function(response){
        return response.json();

    })
    .then(callback);
}


function renderCourses(courses){
    var listCoursesBlock= 
    document.querySelector('#list-courses');
    var htmls= courses.map(function(course){
        return `
        <li> 
        <h4>${course.username}</h4>
        <p>${course.address}</p>
        
        
        </li>
        `
    });
}