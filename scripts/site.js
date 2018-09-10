
/**
 * This script wrapped in a Immediately-Invoked Function Expression (IIFE) to
 * prevent variables from leaking onto the global scope. For more information
 * on IIFE visit the link below.
 * @see http://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 */



(function() {
  'use strict';

  var nav = document.getElementById("drsimapeter_navigation");
  var dropdownLink = document.getElementById("dropdownLink");
  var dropdown = document.getElementById("subnav");

    document.getElementById("mobile-link").onclick = function() {
      if (nav.className == "site-navigation-list closed") {
        nav.className = "site-navigation-list open";
        dropdownLink.id = "dropdownLink-ready";
        document.getElementById("dropdownLink-ready").onclick = function() {
          if (dropdown.className == "subnav not-touched") {
            dropdown.className = "subnav touched";
            console.log("subnav touched");
          } else if (dropdown.className == "subnav touched") {
            dropdown.className = "subnav not-touched";
            console.log("subnav not-touched");
          } else {
            console.log("dropdown not worked")
          }
        }
      } else if (nav.className == "site-navigation-list open") {
        nav.className = "site-navigation-list closed";
        dropdownLink.id = "dropdownLink";
      } else {
        console.log("sorry not this night")
      }
    }



 // function toggle() {
 //    var x = document.getElementByClassName("site-navigation-list");
 //    if (x.className === "desktop") {
 //        x.className += "mobile";
 //    } else {
 //        x.className = "mobile";
 //    }
 //  }

  // Load all images via Squarespace's Responsive ImageLoader
  function loadAllImages() {
    var images = document.querySelectorAll('img[data-src]' );
    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], {load: true});
    }
  }

  // The event subscription that loads images when the page is ready
  document.addEventListener('DOMContentLoaded', loadAllImages);

  // The event subscription that reloads images on resize
  window.addEventListener('resize', loadAllImages);

}());
