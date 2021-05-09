//var revs = document.getElementById("priceblock_ourprice");
var main_num_reviews = parseInt(document.getElementById("acrCustomerReviewText").innerHTML.split(' ')[0].replace(/,/g, ''));
var product_code = window.location.pathname.split('/')[3];
const callApi = `https://reviewmeta.com/api/amazon/${product_code}`



fetch(callApi)
    .then(response => response.json())
    .then(data => {
      window.adj_rating = data.rating;
      window.adj_num = data.count;
      //got data, now run function(display score)
      alert(adj_rating)
    })
    .catch(error => {
        console.log('ERROR FETCHING THE API')
        //error getting data, now display blank(greyed out) score
    })





//alert(callApi)
//<span id="seller-rating-count-{iter}" class="a-size-small a-color-base">

//<span>(468 ratings)<br>96% positive over last 12 months</span>


//</span>
