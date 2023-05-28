// Get the reference to the style sheet switcher button or element
var styleSwitcher = document.getElementById('style-switcher');

// Get the reference to the link tag that links to the default style sheet
var defaultStyleSheet = document.getElementById('default-stylesheet');

// Get the reference to the link tag that links to the alternative style sheet
var alternativeStyleSheet = document.getElementById('alternative-stylesheet');

// Add an event listener to the style switcher button
styleSwitcher.addEventListener('click', function() {
  // Toggle the style sheets
  defaultStyleSheet.disabled = !defaultStyleSheet.disabled;
  alternativeStyleSheet.disabled = !alternativeStyleSheet.disabled;
});
