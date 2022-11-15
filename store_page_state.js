$(function(){
  
  // this line isn't really necessary here but you have to append this attribute to the element you want the html stored of.
  $("#wrapper").attr("contenteditable", "true")

  var content = document.getElementById('wrapper');

  // save the page's state after you're done with editing and clicked outside the content
  $(content).blur(function() {
    localStorage.setItem('page_html', this.innerHTML);
  });

  // pretty logical, getItem retrieves your local storage data
  if (localStorage.getItem('page_html')) {
    content.innerHTML = localStorage.getItem('page_html');
  }

});

// this function resets the localstorage and thus resets the page back to it's original state.
function reset(){
 localStorage.clear();
 window.location = window.location;
}
