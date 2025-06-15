var bookmarkNameInput = document.getElementById("bookmarkName");
var bookmarkUrlInput = document.getElementById("bookmarkUrl");
var tableBody = document.getElementById("tableContent");

var bookmarkList = [];

function addBookmark() {
  var bookmark = {
    name: bookmarkNameInput.value,
    url: bookmarkUrlInput.value
  };

  bookmarkList.push(bookmark);
  displayBookmarks(bookmarkList);
  clearForm();
};

function displayBookmarks(list) {
  var tableRows = "";

  for (var i = 0; i < list.length; i++) {
    tableRows += `
      <tr>
        <td>${i + 1}</td>
        <td>${list[i].name}</td>
        <td><a href="${list[i].url}" target="_blank" class="btn btn-success btn-sm">Visit</a></td>
        <td><button onclick="deleteBookmark(${i})" class="btn btn-danger btn-sm">Delete</button></td>
      </tr>
    `;
  }

  tableBody.innerHTML = tableRows;
};

function deleteBookmark(index) {
  bookmarkList.splice(index, 1); 
  displayBookmarks(bookmarkList);
};

function clearForm() {
  bookmarkNameInput.value = "";
  bookmarkUrlInput.value = "";
};



