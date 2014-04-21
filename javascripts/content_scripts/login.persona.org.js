/**
 * @fileOverview This content script waits for the login window found at
 * https://login.persona.org/sign_in
 * to close. When the window is closing, a stringified version of
 * localStorage is sent to the background script persona_bridge.js.
 */

/**
 * Send the persona_bridge.js content script the state of localStorage when
 * the login.persona.org window closes.
 */
function closing() {
  var ls = localStorage;
  var ls_string = JSON.stringify(ls);
  chrome.runtime.sendMessage(
    {persona_bridge: {localStorage: ls_string}}, function(response) {}
  );
}

// Capture local storage regardless of how the window is closed
window.unload = closing;
window.onunload = closing;
window.onbeforeunload = closing;
