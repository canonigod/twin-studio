let nav = document.getElementById("nav");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.classList.add("fixed-top");
  } else {
    nav.classList.remove("fixed-top");
  }
}

$(function() {
  // $(document).ready shorthand
  $(".monster").fadeIn("slow");
});
