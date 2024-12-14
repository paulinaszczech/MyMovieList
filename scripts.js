function addMovie() {
    alert("New movie!");
    var movieTitle = document.getElementById("inputTitle").value;
    var movieYear = document.getElementById("inputYear").value;
    var movieActors = document.getElementById("inputActors").value;
    
    //verify required field
    if (movieTitle =="" || movieYear=="" || movieActors==""){
        alert("Nie wszystkie pola są wypełnione")
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = "<input type='checkbox'> " + movieTitle + ", " + movieYear + ", " + movieActors;
    document.getElementById("movieList").appendChild(li);
    }   
    // add clear input after adding new movie

function deleteMovie() {
    alert("Delete movie!");
    var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked")
    // var checkedBoxes = document.getElementById
    for (var i = 0; i<checkedBoxes.length; i++){
        document.getElementById("movieList").removeChild(checkedBoxes[i].parentNode)
    }
}