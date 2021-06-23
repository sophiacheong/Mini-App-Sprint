var fileData = function(e) {
  e.preventDefault();
  var textArea = document.getElementById('text').value;
  var fileData = document.getElementById('fileData').files[0];
  var keyword = document.getElementById('keyword').value;

  var formData = new FormData();
  formData.append('textArea', textArea);
  formData.append('fileData', fileData);
  formData.append('keyword', keyword);

  sendFile(formData);
}

