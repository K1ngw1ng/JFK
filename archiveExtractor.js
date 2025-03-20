// ==UserScript==
// @name         Extract JFK Release Links
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Extracts All Links To TXT
// @match        https://www.archives.gov/research/jfk/release-2025
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const baseURL = "https://www.archives.gov";

    function downloadFile(content, filename) {
        const blob = new Blob([content], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    function extractLinks() {
        console.log("Extracting links...");
        const links = document.querySelectorAll("td a");
        let linkList = "";

        links.forEach(link => {
            let href = link.getAttribute("href");
            if (!href.startsWith("http")) {
                href = baseURL + href;
            }
            console.log("Found link:", href);
            linkList += href + "\n";
        });

        downloadFile(linkList, "JFK_Release_Links.txt");
        console.log("Download initiated.");
    }

    // Create a start button
    const startButton = document.createElement("button");
    startButton.textContent = "Start Script";
    startButton.style.position = "fixed";
    startButton.style.top = "10px";
    startButton.style.right = "10px";
    startButton.style.zIndex = "1000";
    document.body.appendChild(startButton);

    startButton.addEventListener("click", function() {
        console.log("Script started.");

        // Add a button to trigger the extraction
        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download Links";
        downloadButton.style.position = "fixed";
        downloadButton.style.top = "40px";
        downloadButton.style.right = "10px";
        downloadButton.style.zIndex = "1000";
        downloadButton.addEventListener("click", extractLinks);

        document.body.appendChild(downloadButton);
        startButton.remove(); // Remove start button after activation
    });
})();
