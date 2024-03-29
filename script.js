document.addEventListener("DOMContentLoaded", function(event) { 
    if (window.location.href.indexOf("autodownload") > -1) {
        setTimeout(function() { 
            window.open("https://example.com/docs/some_file.xlsx");
        }, 3000); // your timeout in milliseconds
    }
});