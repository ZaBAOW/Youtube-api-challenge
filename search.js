// Example 1: Use method-specific function
var request = gapi.client.youtube.channels.list({'part': 'snippet', 'mine': 'true'});

// Execute the API request.
request.execute(function(response) {
  console.log(response);
});


// Example 2: Use gapi.client.request(args) function
var request = gapi.client.request({
  'method': 'GET',
  'path': "https://www.googleapis.com/youtube/v3/search",
  'params': {'part': 'snippet', 'mine': 'true'}
});
// Execute the API request.
request.execute(function(response) {
  console.log(response);
});

function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search(YT_SEARCH_URL) {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}