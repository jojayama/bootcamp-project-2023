import style from '@/app/components/general.module.css'

export default function Home() {
    return (<main>
        <h1 className={style.title}>Resume</h1>
        <a href="resume.pdf" className="resume-btn" role="button">Download Resume</a>
        <div className="resume">
            <section className="section">
                <h2 className="section-title">Education</h2>
                <div className="entry">
                    <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
                    <p className="entry-info">California Polytechnic State University, San Luis Obispo | Expected Graduation June 2026</p>
                </div>
            </section>
            <section className="section">
                <h2 className="section-title">Experience</h2>
                <div className="entry">
                    <h3 className="entry-title">Tutor</h3>
                    <p className="entry-info">Personal Tutor | 2018-2022</p>
                    <p className="entry-description">
                        <ul>
                            <li>Planned lessions for allotted time to strengthen weak subjects and build skills.</li>
                            <li>Collaborated with students to complete homework assignments, identify lagging skills and correct weaknesses.</li>
                            <li>Integrated technology into sessions to further enhance student learning.</li>
                            <li>Tutored struggling, average and advanced students in Japanese and Math course materials.</li>
                        </ul>
                    </p>
                    <h3 className="entry-title"> Homelessness in Hawaii Club</h3>
                    <p className="entry-info">Club Co-founder | 2019-2022</p>
                    <p className="entry-description">
                        <ul>
                            <li>Head of Homelessness in Hawaii Club</li>
                            <li>Organized group event at Step Up Shelter -- served food to the homeless.</li>
                            <li>Organized group event at the Pantry -- put together food and toiletry orders.</li>
                            <li>Coordinated "I Support the Girls" donation drive -- accepted female hygiene/menstruation products.</li>
                        </ul>
                    </p>
                    <h3 className="entry-title">Teacher's Assistant</h3>
                    <p className="entry-info">Elemental Minds | 2022-2023</p>
                    <p className="entry-description">
                        <ul>
                            <li>Individually taught small groups of under-proficient students.</li>
                            <li>Aided teacher in keeping a clean classNameroom and an encouraging learning environment.</li>
                            <li>Independently supervised groups of 20-30 students during P.E., breakfast and lunch.</li>
                            <li>Assisted students with using Google Chromebook and Google classNameroom.</li>
                            <li>Assisted studnets in creating engineering projects (i.e. marble launchers, foam launchers, tension-powered vehicles).</li>
                        </ul>
                    </p>
                    <h3 className="entry-title">Leadership Mentor</h3>
                    <p className="entry-info">Ka'i Program | June-July 2023</p>
                    <p className="entry-description">
                        <ul>
                            <li>Taught leadership skills and working outside of their comfort zones.</li>
                            <li>Aided in creating activities surrounding important current events and news.</li>
                            <li>Worked with students on how to write engaging emails and talk to adults/interviewers.</li>
                        </ul>
                    </p>
                </div>
            </section>
            <section className="section">
                <h2 className="section-title">Projects</h2>
                <div className="entry">
                    <h3 className="entry-title">Personal Website</h3>
                    <p className="entry-info">Used HTML and CSS to create and design a personal website.</p>
                    <p className="entry-description">
                        <ul>
                            <li>Built and designed various pages using HTML</li>
                            <li>Pushed and committed to GitHub</li>
                            <li>Implemented and focused on semantic HTML design</li>
                        </ul>
                    </p>
                </div>
            </section>
            <section className="section">
                <h2 className="section-title">Coursework</h2>
                <ul className="course-list">
                    <li>CSC 101. Fundamentals of Computer Science</li>
                    <li>CSC 202. Data Structures</li>
                    <li>CSC 203. Project-Based Object-Oriented Programming Design</li>
                    <li>CSC 225. Introduction to Computer Organization</li>
                    <li>CSC 248. Discrete Structures -- currently enrolled</li>
                    <li>CSC 357. Systems Programming -- currently enrolled</li>
                    <li>Hack4Impact: HTML, CSS, & Git Starter Pack</li>
                </ul>
            </section>
            <section className="section">
                <h2 className="list-title">Programming Languages</h2>
                <ul className="programming-languages-list">
                    <li>Python</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>RISC-V</li>
                    <li>Linux</li>
                </ul>
                <h2 className="section-title">Skills</h2>
                <ul className="skill-list">
                    <li>Efficient</li>
                    <li>Leadership</li>
                    <li>Problem Solving</li>
                    <li>Flexible/adaptable</li>
                    <li>Organized</li>
                    <li>Solid Communication</li>
                </ul>
            </section>
        </div>
        
    </main>
    )
  }