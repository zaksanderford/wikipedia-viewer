$(document).ready(function() {
  $("#wiki-search").click(function(getData) {
    var wikiApi = "https://en.wikipedia.org/w/api.php?action=query&titles=" + $("#wiki-text").val() + "&indexpageids&prop=images|extracts&imlimit=20&format=json";
    var wikiPageById = "https://en.wikipedia.org/?curid="
    $.ajax({
      method: "GET",
      dataType: "jsonp",
      url: wikiApi,
      success: function(wikiData) {
        $("#wiki-results").html('<a href=' + wikiPageById + wikiData.query.pageids + 'target="_blank">Some Article</a>');
        
      }
    });
  });
});
