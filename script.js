function checkPassword() {
    const input = document.getElementById("password").value.toLowerCase();
    const correctPassword = "ironboobs"; // change this to your actual memory!
  
    if (input === correctPassword) {
      window.location.href = "home.html";
    } else {
      alert("Nope! Try again cutie.");
    }
  }
  