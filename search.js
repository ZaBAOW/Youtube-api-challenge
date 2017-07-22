function showResponse(response){
  var responesString = JSON.stringify(response, '', 2);
  document.getElementById('response').innerHTML +=responseString;
}

function onClientLoad() {
  gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
  gapi.client.setApiKey('AIzaSyADDAnPK96vUAIv8F3adfmikp-5uZzKNA4');
  search();
}

function search() {
  var request = gapi.client.youtube.search.list({
    part: 'snippet',
    q: 'cats'
  });
  request.execute(onSearchResponse);
}

function onSearchResponse(response){
  showResponse(response);
}

