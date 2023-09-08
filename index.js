//update copyright year automatically
const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

//Populate project container with data.json information

const populateProjects = async () => {
    const projectContainer = document.getElementById("project-container");

    try {
        const response = await fetch("data.json");
        const projects = await response.json();

        //loop through project and create elements
        projects.forEach((project) => {
            const projectTile = document.createElement("a");
            projectTile.href = project.url;
            projectTile.target = "_blank";
            projectTile.classList.add("project", "project-tile");

            const projectImg = document.createElement("img");
            projectImg.src = project.imageSrc;
            projectImg.alt = project.name;

            const projectTitle = document.createElement("p");
            projectTitle.classList.add("project-title");
            projectTitle.textContent = project.description;

            projectTile.appendChild(projectImg);
            projectTile.appendChild(projectTitle);

            projectContainer.appendChild(projectTile);
        });
    } catch (error) {
        console.error("Error loading projects:", error);
    }
}

//call function
populateProjects();

