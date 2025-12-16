/*
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
*/

function toggleForm() {
    const popup = document.getElementById('myForm');
    if (popup.style.display === "block") {
        popup.style.display = "none"; // hide if visible
    } else {
        popup.style.display = "block"; // show if hidden
    }
}