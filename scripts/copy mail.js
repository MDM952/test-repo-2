function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field to the clipboard
    navigator.clipboard.writeText(copyText.value);
  
    // Show the toast
    var toast = document.getElementsByClassName("toast")[0];
    var bsToast = new bootstrap.Toast(toast);
    bsToast.show();
  }
  