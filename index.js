function addingEventListener() {
    // Get the input element by its ID
    const input = document.getElementById('button');
  
    // Define the clickAlert function
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add the event listener for the 'click' event
    input.addEventListener('click', clickAlert);
  }
  