import React from 'react';

function Resume() {
    return (
        <main className="resume-content">
            <h1>Resume</h1>
            <div className="buttons-container">
                <a href="downloads/CV - Sabine Lao.pdf" download className="cv-button">Resume</a>
                <a href="downloads/Academic Transcript - Sabine Lao.pdf" download className="transcript-button">Transcript</a>
            </div>
            <div className="education-section">
                <h2>Education</h2>
                <div className="bordered-container">
                    <div>
                        <h3>Bachelor of Science (Computer Science)</h3>
                        <h4>University of New South Wales</h4>
                        <h4>August 2023 - Present</h4>
                    </div>
                    <ul>
                        <li>Major in Security Engineering</li>
                        <li>Distinction WAM</li>
                        <li>Invited to be a student representative on the Academic Program Review (APR) of the UNSW Diploma in Computer Science</li>
                        <li>Received the UNSW International Student Award, providing a 15% reduction on tuition fees</li>
                    </ul>
                </div>
                <div className="bordered-container">
                    <div>
                        <h3>High School Diploma</h3>
                        <h4>La Salle Green Hills</h4>
                        <h4>August 2021 - June 2023</h4>
                    </div>
                    <ul>
                        <li>Specialized in STEM</li>
                        <li>Graduated with Highest Honours in high school batch of over 400 students</li>
                        <li>Granted a full-ride scholarship in Year 12 for ranking first among all students</li>
                    </ul>
                </div>
            </div>
            <div className="experience-section">
                <h2>Experience</h2>
                <div className="bordered-container">
                    <div>
                        <h3>Web Design and Development Intern</h3>
                        <h4>QuickSite Guru</h4>
                        <h4>May 2024 - Present</h4>
                    </div>
                    <ul>
                        <li>Created websites using React.js and JavaScript, focusing on design, content, and functionality</li>
                        <li>Utilized research and AI coding techniques to create functional website templates adhering to quality standards</li>
                        <li>Received and implemented feedback to refine website templates for optimal user experience</li>
                    </ul>
                </div>

                <div className="bordered-container">
                    <div>
                        <h3>Mentor</h3>
                        <h4>Tinkertank</h4>
                        <h4>June 2023 - Present</h4>
                    </div>
                    <ul>
                        <li>Provided personalized tutoring to up to 40 students at a time in STEM-related subjects, including robotics and programming skills</li>
                        <li>Monitored students’ progress through constructive feedback and assessments</li>
                        <li>Managed off-site excursions while supervising a range of students</li>
                        <li>Organized equipment and supplies using an inventory notification system</li>
                    </ul>
                </div>

                <div className="bordered-container">
                    <div>
                        <h3>Online Research & Data Entry Assistant</h3>
                        <h4>Study.com</h4>
                        <h4>June 2023 - September 2023</h4>
                    </div>
                    <ul>
                        <li>Evaluated up to 40 websites per day for Study.com outreach while adhering to professional standards and criteria</li>
                        <li>Conducted research to compile contact information for key individuals in approved sites</li>
                        <li>Maintained a consistent work pace to meet contract expectations while working remotely</li>
                    </ul>
                </div>
            </div>

            <div className="skills-section">
                <h2>Skills</h2>
                <div className="skills-list">
                    <div className="column">
                        <h3>Technical Skills</h3>
                        <ul>
                            <li>
                                <p><strong>Proficient in various programming languages:</strong></p>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>C</li>
                                    <li>TypeScript</li>
                                </ul>
                            </li>
                            <li>
                                <p><strong>Proficient in Front-end Development:</strong></p>
                                <ul>
                                    <li>Bootstrap</li>
                                    <li>React.js</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </li>
                            <li>
                                <p><strong>Proficient in Back-end Development:</strong></p>
                                <ul>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>Jest</li>
                                </ul>
                            </li>
                            <li>Version Control using Git</li>
                            <li>Extensive experience with Microsoft Office, including Word, PowerPoint, and Excel</li>
                            <li>Data Analysis</li>
                            <li>Graphic Design and Creativity</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3 className = 'academic-skills'>Academic Skills</h3>
                        <ul>
                            <li>Research and Analysis</li>
                            <li>Academic Writing</li>
                        </ul>
                        <h3>Leadership Skills</h3>
                        <ul>
                            <li>Team Collaboration</li>
                            <li>Project Management</li>
                            <li>Communication and Public Speaking</li>
                        </ul>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Resume;
