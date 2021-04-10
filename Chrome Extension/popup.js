// Get zen state
chrome.storage.local.get("zen_mode", function(data) {
    if (data.zen_mode != undefined) {
        if (data.zen_mode == 1) {
            // Add apply zen button
            document.getElementById("button").innerHTML = "<button id=\"exit\" style=\"width: 100%; height: 110px;\">Exit Zen Mode</button>";

            // Update popup
            document.getElementById("state").innerHTML = "<b style=\"color: green; font-size: 20px;\">Zen mode is activated!</b>";

            // Add event handler for on click event to remove zen mode
            document.getElementById("exit").onclick = function() {
                // Inform user of change
                window.alert("Zen mode has been de-activated! :(");

                // Set zen mode to true
                chrome.storage.local.set({zen_mode: 0});
            }
        } else {
            // Add remove zen button
            document.getElementById("button").innerHTML = "<button id=\"enter\" style=\"width: 100%; height: 110px;\">Apply Zen Mode</button>";

            // Update popup
            document.getElementById("state").innerHTML = "<b style=\"color: red; font-size: 20px;\">Zen mode is not activated!</b>";

            // Add event handler for on click event to apply zen mode
            document.getElementById("enter").onclick = function() {
                // Inform user of change
                window.alert("Zen mode has been activated! Enjoy your shopping experience on Amazon!");

                // Set zen mode to true
                chrome.storage.local.set({zen_mode: 1});
            }
        }
    } else {
        // Set default flag
        chrome.storage.local.set({zen_mode: 0});
    }
});