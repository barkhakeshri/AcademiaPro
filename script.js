// Get the modal element
let modal = document.getElementById("modal");
let modalStudentReg = document.getElementById("modal-student-register");
let studentLogin = document.getElementById("student-login");
let studentRegister = document.getElementById("student-register");

studentLogin.addEventListener("click", () => {
    console.log("clicked");
    modal.style.display = "block"
})

studentRegister.addEventListener("click", () => {
    modalStudentReg.style.display = "block"
    modal.style.display = "none"
})

// Function to open the modal
// function openModal() {
//     modal.style.display = "block";
// }

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    modalStudentReg.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }

    if (event.target == modalStudentReg) {
        closeModal();
    }
}