var main_num_reviews = parseInt(document.getElementById("acrCustomerReviewText").innerHTML.split(' ')[0].replace(/,/g, ''));
var product_code = window.location.pathname.split('/')[3];
const callApi = `https://reviewmeta.com/api/amazon/${product_code}`

fetch(callApi)
  .then(response => response.json())
  .then(data => {
    alert(data.rating)
    alert(data.count) //do stuff with API data
  })
  .catch(error => {
    console.log('ERROR FETCHING THE API')
    //error getting data, now display blank(greyed out) score
  })
