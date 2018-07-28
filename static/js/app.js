// from data.js
var tableData = data;


// YOUR CODE HERE!
// var dateMatch = tableData.filter


function handleSubmit() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input value from the form
    // Select the input element and get the raw HTML node
    var match;
    var filterForm = d3.select("#datetime").node();
    var dateValue = filterForm.value;

    console.log(dateValue);
    console.log(tableData);

    match = tableData;

    if(dateValue.length > 0) {
        match = tableData.filter(tableData => tableData.datetime === dateValue );
    }

    

    var filterForm = d3.select("#city").node();
    var cityValue = filterForm.value;

    if(cityValue.length > 0) {
        match = match.filter(match => match.city === cityValue);
    }

    var filterForm = d3.select("#state").node();
    var stateValue = filterForm.value;

    if(stateValue.length > 0) {
        match = match.filter(match => match.state === stateValue);
    }

    var filterForm = d3.select("#country").node();
    var countryValue = filterForm.value;

    if(countryValue.length > 0) {
        match = match.filter(match => match.country === countryValue);
    }
    
    var filterForm = d3.select("#shape").node();
    var shapeValue = filterForm.value;

    if(shapeValue.length > 0) {
        match = match.filter(match => match.shape === shapeValue);
    }    


    console.log(match);
    // remove all td's with class = "ufotds"
    d3.selectAll(".ufotds").remove();

    var tbody = d3.select("tbody");
    
    match.forEach(function(element) {
        var tr = tbody.append("tr");
        tr.append("td").attr("class","ufotds").text(element.datetime);
        tr.append("td").attr("class","ufotds").text(titleCase(element.city));
        tr.append("td").attr("class","ufotds").text(element.state);
        tr.append("td").attr("class","ufotds").text(element.country);
        tr.append("td").attr("class","ufotds").text(element.shape);
        tr.append("td").attr("class","ufotds").text(element.durationMinutes);
        tr.append("td").attr("class","ufotds").text(element.comments);


    }, this);


}


function handleClear() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    d3.selectAll(".ufotds").remove();

    displayAll();

    var filterForm = d3.select("#datetime").node();
    filterForm.value = "";

    var filterForm = d3.select("#city").node();
    filterForm.value = "";

    var filterForm = d3.select("#state").node();
    filterForm.value = "";

    var filterForm = d3.select("#country").node();
    filterForm.value = "";

    var filterForm = d3.select("#shape").node();
    filterForm.value = "";



}


function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}
// default display all
displayAll();

// filter button clicked handle the event
d3.select("#filter-btn").on("click",handleSubmit);

// clear button clicked handle the event
d3.select("#clear-btn").on("click",handleClear);


function displayAll() {
    var tbody = d3.select("tbody");

    tableData.forEach(function(element) {
        var tr = tbody.append("tr");
        tr.append("td").attr("class","ufotds").text(element.datetime);
        tr.append("td").attr("class","ufotds").text(titleCase(element.city));
        tr.append("td").attr("class","ufotds").text(element.state);
        tr.append("td").attr("class","ufotds").text(element.country);
        tr.append("td").attr("class","ufotds").text(element.shape);
        tr.append("td").attr("class","ufotds").text(element.durationMinutes);
        tr.append("td").attr("class","ufotds").text(element.comments);


    }, this);

}    