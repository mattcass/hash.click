/*
*! Auto HashClick
* Copyright 2016 Matt Casserly
* Licensed under MIT
* Repo: https://github.com/mattcass/hash.click
*/

;(function ( $, w, doc ) {

  // Enable strict mode
  'use strict';

  // if there is a hash in the url, find a corresponding
  // href, data-href or aria-controls
  // and programmatically click it.
  ( function hashClick() {

    // wait for everything to be loaded
    window.onload = function() {

      // is there a #hash in the url?
      if ( window.location.hash ) {

        // what is the #hash
        var hashValue = window.location.hash;
        var $el;

        // does the #hash match an attribute on the page?

        var $element = $("a[href='" + hashValue + "']"),
            $data    = $("[data-href='" + hashValue.split('#')[1] + "']"),
            $ariaControls = $("[aria-controls='" + hashValue.split('#')[1] + "']");

        if ( $element != null ) {
          $el = $element;
        }
        if ( $data != null ) {
          $el = $data;
        }
        if ( $ariaControls != null ) {
          $el = $ariaControls;
        }

        $el.click();

      }// End if

    } // End window.onload

  })();

})( jQuery, this, this.document );
