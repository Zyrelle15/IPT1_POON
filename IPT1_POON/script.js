<script>
  // Wait for the document to fully load before applying the fade-in effect
  document.addEventListener{("DOMContentLoaded", function() {

    const textBox = document.querySelector(".text-box");
    
    setTimeout(() => {
      textBox.classList.add("fade-in");
    }, 100);
  )};
</script>