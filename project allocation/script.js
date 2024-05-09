let teamMemberCount = 0;

function addTeamMember() {
  teamMemberCount++;
  const teamMembersDiv = document.getElementById('teamMembers');
  const memberDiv = document.createElement('div');
  memberDiv.classList.add('team-member');
  memberDiv.innerHTML = `
    <h3>Team Member ${teamMemberCount}</h3>
    <label for="name${teamMemberCount}">Name:</label>
    <input type="text" id="name${teamMemberCount}" required><br>
    <label for="skills${teamMemberCount}">Skills:</label>
    <input type="text" id="skills${teamMemberCount}" required><br>
    <label for="role${teamMemberCount}">Role:</label>
    <input type="text" id="role${teamMemberCount}" required><br>
    <label for="area${teamMemberCount}">Area of Work:</label>
    <input type="text" id="area${teamMemberCount}" required><br>
  `;
  teamMembersDiv.appendChild(memberDiv);
}

document.getElementById('projectForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const title = document.getElementById('title').value;
  const details = document.getElementById('details').value;
  const teamCount = parseInt(document.getElementById('teamCount').value);
  
  const teamMembers = [];
  for (let i = 1; i <= teamCount; i++) {
    const memberName = document.getElementById(`name${i}`).value;
    const memberSkills = document.getElementById(`skills${i}`).value;
    const memberRole = document.getElementById(`role${i}`).value;
    const memberArea = document.getElementById(`area${i}`).value;
    teamMembers.push({ name: memberName, skills: memberSkills, role: memberRole, area: memberArea });
  }
  
  console.log('Project Title:', title);
  console.log('Project Details:', details);
  console.log('Team Members Count:', teamCount);
  console.log('Team Members:', teamMembers);
});
