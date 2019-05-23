// Blur background when button is clicked and modal window pops-up

let modalButton = $(".animation");
let modalWindow = $("fadeIn");

modalButton.click( () => {
  modalWindow.slideUp(4000, function() {
    //Stuff to do *after* the animation takes place
  })
});
