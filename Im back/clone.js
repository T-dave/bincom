
 var slideIndex = 0;
 var modal = document.getElementById("myModal");
 // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var slides = document.getElementsByClassName("mySlides");
var slides = document.getElementsByClassName("mySlides");
var dot = document.getElementsByClassName("dot");




      showSlides();
      function plusSlides(num){
      	jump = slideIndex + num;
      	var i;
        
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dot[i].style.backgroundColor = "#999999";
        }
        if(jump > slides.length) {
          jump = 1;
        }
         if(jump < 1) {
          jump = 11;
        }
      	
      	 slides[jump - 1].style.display = "block";
      	 dot[jump - 1].style.backgroundColor = "#111111";
      	console.log('prev');
      }
      
      function currentSlide(num){
      	 var i;
        
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dot[i].style.backgroundColor = "#999999";
        }
      	slideIndex = num;
      	 slides[slideIndex - 1].style.display = "block";
      	 dot[slideIndex - 1].style.backgroundColor = "#111111";
      }
      function showSlides() {
        var i;
        
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dot[i].style.backgroundColor = "#999999";
        }
        slideIndex++;
        if(slideIndex > slides.length) {
          slideIndex = 1
        }
       
        slides[slideIndex - 1].style.display = "block";
        dot[slideIndex - 1].style.backgroundColor = "#111111";
        setTimeout(showSlides, 2500); // Change image every 2.5 seconds
      }




img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
modal.onclick = function() { 
  modal.style.display = "none";
}