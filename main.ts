
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeSection = document.querySelector('.resume-container') as HTMLElement;
const formSection = document.querySelector('.form-container') as HTMLElement;

const resumeName = document.getElementById('resume-name') as HTMLHeadingElement;
const resumeAge = document.getElementById('resume-age') as HTMLParagraphElement;
const resumeEmail = document.getElementById('resume-email') as HTMLParagraphElement;
const resumeEducation = document.getElementById('resume-education') as HTMLParagraphElement;
const resumeSkills = document.getElementById('resume-skills') as HTMLParagraphElement;
const resumeCertifications = document.getElementById('resume-certifications') as HTMLParagraphElement;
const resumeLanguages = document.getElementById('resume-languages') as HTMLParagraphElement;
const resumeInterests = document.getElementById('resume-interests') as HTMLParagraphElement;
const resumeProfilePic = document.getElementById('resume-profile-pic') as HTMLImageElement;

const resetButton = document.getElementById('reset-form') as HTMLButtonElement;


function generateResume(event: Event) {
    event.preventDefault();

   
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const age = formData.get('age') as string;
    const email = formData.get('email') as string;
    const education = formData.get('education') as string;
    const skills = formData.get('skills') as string;
    const certifications = formData.get('certifications') as string;
    const languages = formData.get('languages') as string;
    const interests = formData.get('interests') as string;
    const profilePic = formData.get('profile-pic') as File;

    
    resumeName.textContent = name;
    resumeAge.textContent = `Age: ${age}`;
    resumeEmail.textContent = `Email: ${email}`;
    resumeEducation.textContent = education;
    resumeSkills.textContent = skills;
    resumeCertifications.textContent = certifications;
    resumeLanguages.textContent = languages;
    resumeInterests.textContent = interests;

    // Display profile picture
    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function () {
            resumeProfilePic.src = reader.result as string;
        };
        reader.readAsDataURL(profilePic);
    }

    // Show the resume section and hide the form
    formSection.style.display = 'none';
    resumeSection.style.display = 'block';
}


function resetForm() {
    form.reset();
    formSection.style.display = 'block';
    resumeSection.style.display = 'none';
}


form.addEventListener('submit', generateResume);
resetButton.addEventListener('click', resetForm);


