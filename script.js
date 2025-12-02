// Mock AI Career Coach Logic
document.getElementById('career-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const academic = document.getElementById('academic-performance').value;
    const skills = document.getElementById('skills').value;
    const extracurricular = document.getElementById('extracurricular').value;
    const interests = document.getElementById('interests').value;
    const resume = document.getElementById('resume').files[0];

    // Generate recommendations based on input
    let recommendations = generateRecommendations(academic, skills, extracurricular, interests);
    let resumeFeedback = '';
    if (resume) {
        resumeFeedback = analyzeResume(resume);
    }
    let upskilling = suggestUpskilling(skills, recommendations);

    // Display results
    document.getElementById('recommendations').innerHTML = recommendations;
    document.getElementById('resume-feedback').innerHTML = resumeFeedback;
    document.getElementById('upskilling').innerHTML = upskilling;
    document.getElementById('results-section').style.display = 'block';
});

function generateRecommendations(academic, skills, extracurricular, interests) {
    // Simple logic to generate recommendations
    let fields = [];
    let roles = [];

    if (academic.toLowerCase().includes('computer science') || skills.toLowerCase().includes('programming')) {
        fields.push('Software Development');
        roles.push('Software Engineer', 'Full-Stack Developer');
    }
    if (extracurricular.toLowerCase().includes('leadership') || extracurricular.toLowerCase().includes('club')) {
        fields.push('Management');
        roles.push('Project Manager', 'Team Lead');
    }
    if (interests.toLowerCase().includes('data') || skills.toLowerCase().includes('analytics')) {
        fields.push('Data Science');
        roles.push('Data Analyst', 'Data Scientist');
    }
    if (interests.toLowerCase().includes('design') || skills.toLowerCase().includes('ui/ux')) {
        fields.push('Design');
        roles.push('UI/UX Designer', 'Graphic Designer');
    }

    if (fields.length === 0) {
        fields.push('General Business');
        roles.push('Business Analyst', 'Consultant');
    }

    return `<h3>Suitable Fields:</h3><ul>${fields.map(f => `<li>${f}</li>`).join('')}</ul><h3>Specific Job Roles:</h3><ul>${roles.map(r => `<li>${r}</li>`).join('')}</ul>`;
}

function analyzeResume(resume) {
    // Mock resume analysis
    return `<h3>Resume Feedback:</h3><p>Your resume looks good, but consider adding more quantifiable achievements. For job matching, tailor it to highlight skills relevant to ${resume.name}.</p>`;
}

function suggestUpskilling(skills, recommendations) {
    let suggestions = [];
    if (!skills.toLowerCase().includes('python')) {
        suggestions.push('Python Programming Course');
    }
    if (!skills.toLowerCase().includes('leadership')) {
        suggestions.push('Leadership and Management Course');
    }
    if (recommendations.includes('Data Science')) {
        suggestions.push('Data Science Specialization on Coursera');
    }

    return `<h3>Upskilling Pathways:</h3><ul>${suggestions.map(s => `<li>${s}</li>`).join('')}</ul>`;
}
