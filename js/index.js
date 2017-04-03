
var search = $('.search');

var result = $('.articles');



search.keyup(function() {
  if (search.val() === '') {
    result.html('');
    exit;
  }

  $.ajax({
    url: '//en.wikipedia.org/w/api.php',
    data: { action: 'query', list: 'search', srsearch: search.val(), format: 'json' },
    dataType: 'jsonp',
    
    
    
    success: function (a) {
      var html='';
      
      
      html += '<div class="row row-centered">';

      a.query.search.map(function(b) {
        
        html += '    <div class="centered panel-text-fixed" style="width:100%;">';
        html += '      <a href="https://en.wikipedia.org/wiki/' + b.title + '" target="_blank">';
        html += '        <div style="border-radius:0"; class="panel panel-default">';
        html += '          <div class="panel-heading">';
        html += '            <h3 class="panel-title">' + b.title + '</h3>';
        html += '          </div>';
        html += '          <div class="panel-body">';
        html += '            ' + b.snippet;
        html += '          </div>';
        html += '        </div>';
        html += '      </a>';
        html += '    </div>';
      });

      html += '  </div>';

      result.html(html);
    }
  });
});