// Get references to DOM elements
var form = document.getElementById('resume-form');
var resumeSection = document.querySelector('.resume-container');
var formSection = document.querySelector('.form-container');
var resumeName = document.getElementById('resume-name');
var resumeAge = document.getElementById('resume-age');
var resumeEmail = document.getElementById('resume-email');
var resumeEducation = document.getElementById('resume-education');
var resumeSkills = document.getElementById('resume-skills');
var resumeCertifications = document.getElementById('resume-certifications');
var resumeLanguages = document.getElementById('resume-languages');
var resumeInterests = document.getElementById('resume-interests');
var resumeProfilePic = document.getElementById('resume-profile-pic');
var resetButton = document.getElementById('reset-form');
// Function to generate the resume
function generateResume(event) {
    event.preventDefault();
    // Get form data
    var formData = new FormData(form);
    var name = formData.get('name');
    var age = formData.get('age');
    var email = formData.get('email');
    var education = formData.get('education');
    var skills = formData.get('skills');
    var certifications = formData.get('certifications');
    var languages = formData.get('languages');
    var interests = formData.get('interests');
    var profilePic = formData.get('profile-pic');
    // Set resume details
    resumeName.textContent = name;
    resumeAge.textContent = "Age: ".concat(age);
    resumeEmail.textContent = "Email: ".concat(email);
    resumeEducation.textContent = education;
    resumeSkills.textContent = skills;
    resumeCertifications.textContent = certifications;
    resumeLanguages.textContent = languages;
    resumeInterests.textContent = interests;
    // Display profile picture
    if (profilePic) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            resumeProfilePic.src = reader_1.result;
        };
        reader_1.readAsDataURL(profilePic);
    }
    // Show the resume section and hide the form
    formSection.style.display = 'none';
    resumeSection.style.display = 'block';
}
// Function to reset the form
function resetForm() {
    form.reset();
    formSection.style.display = 'block';
    resumeSection.style.display = 'none';
}
// Attach event listeners
form.addEventListener('submit', generateResume);
resetButton.addEventListener('click', resetForm);
