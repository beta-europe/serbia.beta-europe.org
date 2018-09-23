function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
}

$(document).ready(function() {
  // Translations
  $(".language__toggle").on("click", function() {
    window.location.href = "http://localhost:4000/translation/";
  });
});
