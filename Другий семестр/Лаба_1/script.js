// Клас Resume (без змін)
class Resume {
    constructor(name, email, phone, education, experience, skills) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.education = education;
        this.experience = experience;
        this.skills = skills;
    }

    display() {
        return `
            <div class="resume-item">
                <h2>${this.name}</h2>
                <p><strong>Email:</strong> ${this.email}</p>
                <p><strong>Телефон:</strong> ${this.phone}</p>
                <p><strong>Освіта:</strong> ${this.education}</p>
                <p><strong>Досвід:</strong> ${this.experience}</p>
                <p><strong>Навички:</strong> ${this.skills}</p>
            </div>
        `;
    }
}

// Отримати резюме з форми (без змін)
function getResumeFromForm() {
    return new Resume(
        document.getElementById("name").value,
        document.getElementById("email").value,
        document.getElementById("phone").value,
        document.getElementById("education").value,
        document.getElementById("experience").value,
        document.getElementById("skills").value
    );
}

// Обробка форми
document.getElementById("resumeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const resume = getResumeFromForm();
    const resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = resume.display();
    resumeOutput.classList.add('show-resume'); // Додаємо клас для анімації

    localStorage.setItem("resume", JSON.stringify(resume));

    document.getElementById("editResume").style.display = "inline";
    document.getElementById("loadResume").style.display = "inline";
});

// Редагування (без змін)
document.getElementById("editResume").addEventListener("click", function () {
    const saved = JSON.parse(localStorage.getItem("resume"));
    if (saved) {
        document.getElementById("name").value = saved.name;
        document.getElementById("email").value = saved.email;
        document.getElementById("phone").value = saved.phone;
        document.getElementById("education").value = saved.education;
        document.getElementById("experience").value = saved.experience;
        document.getElementById("skills").value = saved.skills;
    }
});

// Завантажити збережене резюме (без змін)
document.getElementById("loadResume").addEventListener("click", function () {
    const saved = JSON.parse(localStorage.getItem("resume"));
    if (saved) {
        const resume = new Resume(
            saved.name,
            saved.email,
            saved.phone,
            saved.education,
            saved.experience,
            saved.skills
        );
        document.getElementById("resumeOutput").innerHTML = resume.display();
        document.getElementById("editResume").style.display = "inline";
    } else {
        alert("Збережене резюме не знайдено.");
    }
});