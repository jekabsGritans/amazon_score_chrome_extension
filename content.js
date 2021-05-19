var main_num_reviews = parseInt(document.getElementById("acrCustomerReviewText").innerHTML.split(' ')[0].replace(/,/g, ''));
var product_code = window.location.pathname.split('/')[3];
const callApi = `https://reviewmeta.com/api/amazon/${product_code}`;
var revMEnabled = true;
var popSpan = document.getElementById("averageCustomerReviews");
var letSpace = popSpan.getElementsByClassName("a-letter-space")[1];



var newRate = document.createElement("span");
newRate.setAttribute('id', 'scoreDisplay');
newRate.setAttribute('style', 'color:white');
newRate.innerHTML = '[.]';

var rateIcon = document.createElement("span");
rateIcon.appendChild(newRate);
rateIcon.setAttribute('style','border-radius: 5px; background: #FFA41C; padding: 3px; width: 25px; height: 15px')


popSpan.insertBefore(rateIcon, letSpace);

function setScore(rating, num) {
  document.getElementById("scoreDisplay").innerHTML = rating * 2
}

fetch(callApi)
  .then(response => response.json())
  .then(data => {
    if (revMEnabled) {
      setScore(data.rating, data.num)
    } else {
      //
    }

  })
  .catch(error => {
    console.log(error)
  })

//on load and on message from popup click => adjust rating for num of review and display in a colored circle/ if reviewmeta enabled but api fetch failed => display unfiltered review score but add (couldn't access reviewmeta......)
