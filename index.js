function addingEventListener() {
  const input = document.getElementById('input');
  //go into html code and for a element with id input do something
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });  
}
