/*
*! Auto HashClick
* Copyright 2016 Matt Casserly
* Licensed under MIT
* Repo: https://github.com/mattcass/hash.click
*/

;(function(w, doc) {
  // Enable strict mode
  'use strict'
  // if there is a hash in the url, find a corresponding
  // href, data-href or aria-controls
  // and programmatically click it.
  ;(function hashClick() {
    // wait for everything to be loaded
    w.onload = function() {
      // is there a #hash in the url?
      if (w.location.hash) {
        var hashValue = w.location.hash
        var el

        // does the #hash match an attribute on the page?
        var link = doc.querySelector("a[href='" + hashValue + "']")
        var data = doc.querySelector("[data-href='" + hashValue + "']")
        var aria = doc.querySelector(
          "[aria-controls='" + hashValue.split('#')[1] + "']"
        )

        // set el to the appropriate element
        if (link != null) {
          el = link
        }
        if (data != null) {
          el = data
        }
        if (aria != null) {
          el = aria
        }

        el.click()
      } // End if
    } // End window.onload
  })()
})(this, this.document)
