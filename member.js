function skillsMember() {
	var member = document.getElementById("member");
	var memberSkills = document.getElementById("memberSkills");
	var memberProjects = document.getElementById("memberProjects");
	var memberContact = document.getElementById("memberContact");
	var memberAbout = document.getElementById("memberAbout");
	var memberResume = document.getElementById("memberResume");
	var memberSkillsContent = document.getElementById("memberSkillsContent");
	var memberProjectsContent = document.getElementById("memberProjectsContent");
	var memberContactContent = document.getElementById("memberContactContent");
	var memberAboutContent = document.getElementById("memberAboutContent");
	var memberResumeContent = document.getElementById("memberResumeContent");
	memberSkills.style.backgroundColor = "#f4f4f4";
	memberProjects.style.backgroundColor = "#fff";
	memberContact.style.backgroundColor = "#fff";
	memberAbout.style.backgroundColor = "#fff";
	memberResume.style.backgroundColor = "#fff";
	memberSkillsContent.style.display = "block";
	memberProjectsContent.style.display = "none";
	memberContactContent.style.display = "none";
	memberAboutContent.style.display = "none";
	memberResumeContent.style.display = "none";
}