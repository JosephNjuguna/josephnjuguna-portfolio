let skills = ["HTML", "CSS", "Javascript"]

let projects = [
    {
        title: "calculator",
        description: "that stores all the calculation with reason why the calculation was done and time it was done.",
        tech: "html, css , Javascript"
    },

    {
        title: "Weather App",
        description: "a weather app that checked weather in addition to showing when the sun would rise and set",
        tech: "html, css , Javascript"
    },

    {
        title: "Expenses/Goals tracker",
        description: "an app to store all my receipts, etract info and store them by date, location and calculate total",
        tech: "html, css , Javascript"
    }
]

const skillsContainer = document.getElementById("skills-container");
skills.forEach(skill => {
    const card = document.createElement("div");
    card.className = "skills-card";
    card.innerHTML = `
        <h3 class="skills-header">${skill}</h3>
        <hr>
        <p class="skills-brief">Proficient in ${skill} development and application.</p>
    `;
    skillsContainer.appendChild(card);
});

const projectsContainer = document.getElementById("projects-container");
projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "projects-card";
    card.innerHTML = `
        <h3 class="projects-header">${project.title}</h3>
        <p class="projects-brief">${project.description}</p>
        <p class="projects-tech">${project.tech}</p>
    `;
    projectsContainer.appendChild(card);
});
