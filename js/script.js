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


let testimonials = [
    {
        title: "Project: Calculator",
        testimonials: "This isn’t your average basic calculator. Being able to log calculations with a reason and a timestamp has completely streamlined how I keep track of my quick estimates and everyday math. It’s clean, intuitive, and the HTML/CSS/JS implementation is buttery smooth!",
        client: "A Satisfied User"
    },

    {
        title: "Weather App",
        testimonials: "A brilliant weather tool! Beyond just giving me the current conditions, knowing the exact sunrise and sunset times has made it my go-to app for planning my outdoor runs and daily schedule. The interface is gorgeous and lightning-fast.",
        client: "Daily Weather Checker"
    },

    {
        title: "Expenses/Goals tracker",
        testimonials: "This tracker has been a game-changer for my budgeting. Being able to store receipts, automatically pull out key info, and neatly organize everything by date and location—while effortlessly calculating totals—saved me hours of manual bookkeeping. Incredible work for a frontend project!",
        client: "Small Business Owner / Freelancer"
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

const testimonialsContainer = document.getElementById("testimonials-container");
testimonials.forEach(testimonials => {
    const card = document.createElement("div");
    card.className = "testimonials-card";
    card.innerHTML = `
        <h3 class="testimonials-header">${testimonials.title}</h3>
        <hr/>
        <p class="testimonials-brief">${testimonials.testimonials}</p>
        <p class="testimonials-client">${testimonials.client}</p>
    `;
    testimonialsContainer.appendChild(card);
});

