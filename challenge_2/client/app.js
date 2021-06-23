var fileData = function(e) {
  e.preventDefault();
  var textArea = document.getElementById('text').value;
  var fileData = document.getElementById('fileData').files[0];
  // var keyword = document.getElementById('keyword').value;

  var formData = new FormData();
  formData.append('textArea', textArea);
  formData.append('fileData', fileData);
  // formData.append('keyword', keyword);

  sendFile(formData);
}

var display = function(data) {
  var result = document.getElementById('result');
  result.innerHTML = '';
  result.append(data);
}

var failMessage = function() {
  var result = document.getElementById('result');
  result.innerHTML = '';
  result.append('failed to send file');
}

var sendFile = function(file) {
  $.ajax({
    url: '/convert',
    type: 'POST',
    contentType: 'text/plain',
    data: file
  })
    .done((data) => {
      console.log('send file success')
      display(data);
    })
    .fail(() => {
      console.log('fail to send file');
      failMessage();
    })
}

var form = document.getElementById('form');
form.addEventListener('submit', getFileData);