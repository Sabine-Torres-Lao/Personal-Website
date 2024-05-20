import React from 'react';

function Projects() {
    return (
        <main class="projects-container">
            <h1 class="projects-title">Projects</h1>

            <div class="project-box">
                <div class="left-side">
                    <h2>CVE Web Scraper</h2>
                    <h3>December 2023</h3>
                    <a href="https://github.com/Sabine-Torres-Lao/CVE-Web-Scraper">
                        <img className = 'git-logo' src="images/github-mark.png" alt="GitHub Logo" />
                    </a>
                    <ul>
                        <li>A CVE Web Scraper created using JavaScript designed to collect the latest information regarding security vulnerabilities from CVEdetails.com</li>
                        <li>Automates the collection and sorting of the latest security vulnerabilities updates</li>
                    </ul>
                </div>
                <div class="right-side">
                    <img className = 'main-img' src="images/cve-icon.png" alt="CVE Web Scraper" />
                </div>
            </div>

            <div class="project-box">
                <div class="left-side">
                    <h2>COVID-19 Locational Tracker</h2>
                    <h3>December 2022</h3>
                    <a href="https://github.com/Sabine-Torres-Lao/COVID-19-Locational-Tracker">
                        <img className = 'git-logo' src="images/github-mark.png" alt="GitHub Logo" />
                    </a>
                    <ul>
                        <li>A COVID-19 locational tracker created using Python, HTML, and CSS</li>
                        <li>COVID-positive users input locations the date and location of places they have visited in the Philippines during their two-week incubation period</li>
                        <li>The database will also keep track of other supplementary information, such as how many individuals have input data into the database</li>
                        <li>Creates a map that displays the frequency of cases in various areas of Metro Manila</li>
                    </ul>
                </div>
                <div class="right-side">
                    <img className = 'main-img' src="images/tracker-img4.png" alt="COVID-19 Locational Tracker" />
                </div>
            </div>
        </main>
    )
};

export default Projects;