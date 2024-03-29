window.addEventListener('DOMContentLoaded', function() {

    // Create a link element
    let link = document.createElement('a');
    link.href = 'https://christinajackson.github.io/downloadtestproject/IAmASuspiciousDownload.pdf';
    link.download = 'IAmASuspiciousDownload.pdf'; // Optional: set the desired filename
    //add link to body and click
    document.body.appendChild(link);
    link.click();
    // remove the link from the document body
    document.body.removeChild(link);
});