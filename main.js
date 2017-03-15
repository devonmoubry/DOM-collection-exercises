/****************Farmers Market****************/
//filter each farmers-market object for distance within 10
var filteredMarketNames = farmers.filter(function(current, index, array) {
  return parseFloat(current.marketname.substring(0, current.marketname.indexOf(' '))) < 10;
})

//put titles of filtered markets in li tags
var titles = filteredMarketNames.map(function(current, index, array) {
  return '<li>' + current.marketname.substring(current.marketname.indexOf(' ')+ 1) + '</li>'
})

//output to DOM
titles.forEach(function (item, index, array) {
  var output = document.querySelector('.farmers-markets');
  output.innerHTML += item;
})

/****************Giphy Cats****************/

//figure out which property is a thumbnail size

//access object

//access array

//access object

//access thumbnail property

//output thumbnail img to DOM
