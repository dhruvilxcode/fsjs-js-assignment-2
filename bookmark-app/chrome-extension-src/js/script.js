const input = document.getElementById("bookmarkURLInput");

const btnAddBookmark = document.getElementById("btnAddBookmark");

const bookmarkList = document.querySelector(".bookmark-list");

let bookmarks = [];

// function to get all bookmarks
function getBookmarks() {
    const bookmarksJSONStr = localStorage.getItem("bookmarks");

    bookmarkList.innerHTML = "";

    if(bookmarksJSONStr !== null) {
        bookmarks = JSON.parse(bookmarksJSONStr);

        bookmarks.forEach((url, index)=>{
            const listItem = document.createElement("div");
            listItem.className = "w-full flex justify-between";

            const listURLContainer = document.createElement("div");
            listURLContainer.className = "flex items-center gap-2";

            const burl = document.createElement("a");
            burl.setAttribute("href", url);
            burl.setAttribute("target", "_blank");
            burl.innerText = url;

            listURLContainer.appendChild(burl);

            const newTabIcon = document.createElement("span");
            newTabIcon.innerText = "open_in_new";
            newTabIcon.className = "material-symbols-outlined";

            listURLContainer.appendChild(newTabIcon);

            listItem.appendChild(listURLContainer);

            const removeButton = document.createElement("button");
            removeButton.className = "btn btn-outline btn-error btn-square";

            removeButton.innerHTML = `
            <span class="material-symbols-outlined">
                delete
            </span>
            `;

            removeButton.addEventListener('click', function(){
                removeBookmark(url);
            });

            listItem.appendChild(removeButton);

            bookmarkList.appendChild(listItem);

            const divider = document.createElement("div");
            divider.className = "divider";

            bookmarkList.appendChild(divider);
        });
    }
}
getBookmarks();


// event listener for adding bookmark
btnAddBookmark.addEventListener("click", function(){
    addBookmark();
});


// function to add bookmark
function addBookmark() {
    const inputValue = input.value;

    if(inputValue === "") {
        showAlert();
        return;
    }

    // add
    bookmarks = [
        inputValue,
        ...bookmarks
    ];

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    input.value = "";

    getBookmarks();
}

// function to remove bookmark
function removeBookmark(bookmark) {
    // filter out bookmark
    bookmarks = bookmarks.filter((v) => v !== bookmark);

    // set to localstorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    getBookmarks();
}


// show alert
function showAlert() {
    const alertWarning = document.querySelector(".alert-warning");

    alertWarning.classList.remove("hidden");
    alertWarning.classList.add("block");

    setTimeout(()=>{
        alertWarning.classList.remove("block");
        alertWarning.classList.add("hidden");
    }, 3000);
}


// get current tab's URL
getCurrentTabURL();
function getCurrentTabURL() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        input.value = tabs[0].url;
        console.log(tabs[0].url);
    });
}