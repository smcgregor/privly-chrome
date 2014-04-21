/**
 * @fileOverview Whenever the user logs into a site using Persona, 
 * this background script will receive a complete copy of the localStorage
 * object from https://login.persona.org/sign_in.
 * This object can then be used to sign identities for the forthcoming
 * Persona-based public key cryptography scheme.
 */

/**
 * Receive the localStorage object from login.persona.org.
 * This is sent as a message from the login.persona.org.js
 * content script. The "persona-bridge" key in chrome
 * context localStorage will be assigned to a strin
 */
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (typeof request.persona_bridge === "object") {
      localStorage["persona-bridge"] = request.persona_bridge.localStorage;
    }
});
