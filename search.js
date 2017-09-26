// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    key: 'AIzaSyADDAnPK96vUAIv8F3adfmikp-5uZzKNA4'
  });
  console.log(request);

  request.execute(function(response) {
    console.log(response.result);
    var str = JSON.stringify(response.result.items[0].snippet.thumbnails.medium.url);
    $('#search-container').html('<pre>' + str + '</pre>');
    $('#search-container').html('<img src='+ str + ' onclick= "goToVideo(response)"' + '>' + '</img>');
  });
}

function goToVideo(response){
  var video_id = JSON.stringify(response.result.items[0].id);
  console.log("function works");
}