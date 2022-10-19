const EXPERIENCE_URL = "https://zany-skitter-caper.glitch.me/experiences";

const SKILLS_URL = "https://zany-skitter-caper.glitch.me/skills";

async function getExperienceData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
}

async function getExperienceFromUrl(url) {
  const data = await getExperienceData(url);
  fillExperience(data);
  console.log(data);
}

async function getSkillsFromUrl(url) {
  const data = await getExperienceData(url);
  fillSkills(data);
  console.log(data);
}

function fillExperience(data) {
  const experienceSection = document.getElementById("experience-section");

  data.forEach((dataItem) => {
    const experienceDescription = document.createElement("div");
    experienceDescription.className = "experience-description";

    const experienceYears = document.createElement("div");
    experienceYears.className = "experience-years";

    const years = document.createElement("h4");
    years.textContent = dataItem.startYear + " - " + dataItem.finishYear;

    const companyName = document.createElement("p");
    companyName.textContent = dataItem.companyName;
    companyName.className = "employer";

    const jobExperience = document.createElement("div");
    jobExperience.className = "job-experience";

    const position = document.createElement("h4");
    position.textContent = dataItem.position;

    const description = document.createElement("p");
    description.textContent = dataItem.description;

    experienceYears.append(years, companyName);
    jobExperience.append(position, description);

    experienceDescription.append(experienceYears, jobExperience);
    experienceSection.append(experienceDescription);
  });
}

function fillSkills(data) {
  const skillsSection = document.getElementById("skills-section");

  data.forEach((dataItem) => {
    const skillBarName = document.createElement("div");
    skillBarName.className = "skill-bar-name";

    const skillTitle = document.createElement("div");
    skillTitle.textContent = dataItem.title;
    skillTitle.className = "skill-title";

    const percentage = document.createElement("div");
    percentage.textContent = dataItem.level + "%";
    percentage.className = "percentage";

    skillBarName.append(skillTitle, percentage);

    const skillBarLevel = document.createElement("div");
    skillBarLevel.className = "skill-bar-level";

    const skillBarBorder = document.createElement("div");
    skillBarBorder.className = "skill-bar-border";

    const skillBarInner = document.createElement("div");
    skillBarInner.className = "skill-bar-inner";
    skillBarInner.style.width = dataItem.level + "%";

    skillBarBorder.append(skillBarInner);
    skillBarLevel.append(skillBarBorder);

    skillsSection.append(skillBarName, skillBarLevel);
  });
}

getExperienceFromUrl(EXPERIENCE_URL);
getSkillsFromUrl(SKILLS_URL);
