window.addEventListener('DOMContentLoaded', function() {
    // Create a link element
    var link = document.createElement('a');
    link.href = 'https://christinajackson.github.io/downloadtestproject/IAmASuspiciousDownload.pdf';
    link.download = 'IAmASuspiciousDownload.pdf'; // Optional: set the desired filename
    
    // Append the link to the document body
    document.body.appendChild(link);
    
    // Trigger a click event on the link
    link.click();
    
    // Cleanup: remove the link from the document body
    document.body.removeChild(link);
});