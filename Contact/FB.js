function submitFeedback() {
    var rating = document.querySelector('input[name="rating"]:checked');
    var feedback = document.getElementById("feedback").value;
  
    if (!rating) {
      alert("Please select a rating.");
      return;
    }

    localStorage.setItem("rating", rating.value);
    localStorage.setItem("feedback", feedback);
  
    window.location.href = "FD.html";
  }
  