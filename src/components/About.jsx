import * as React from "react";
import './About.css';

const sections = [
    {
        list: false,
        title: 'Overview',
        content: 'Hi, I’m Justin Storm, a student and aspiring software developer with two years of experience building both web and mobile applications. My projects range from responsive websites to full-stack mobile apps built with React, React Native, and Appwrite.\nI enjoy creating user-friendly, visually appealing, and functional applications that solve real problems. Over the past two years, I’ve consistently updated my portfolio with new projects, each one pushing my skills further.\nI’m excited to continue developing my expertise in computer science, whether that’s through contributing to professional projects, collaborating with clients, or pursuing my studies in college.'
    },
    {
        list: true,
        title: 'Skills',
        lists: [
            {
                title: 'Fontend',
                items: [
                    'React',
                    'React Native',
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'TypeScript'
                ]
            },
            {
                title: 'Backend',
                items: [
                    'Appwrite',
                    'Python',
                    'Java'
                ]
            },
            {
                title: 'Tools',
                items: [
                    'Git',
                    'GitHub',
                    'VS Code',
                    'Figma',
                    'Photoshop',
                    'Illustrator'
                ]
            },
            {
                title: 'Soft Skills',
                items: [
                    'Problem-solving',
                    'Teamwork',
                    'Creativity',
                    'Communication',
                ]
            }
        ],
    },
]

export default function About() {
    return (
        <section id='about'>
            <h2>About Me</h2>
            <hr />
            <div className="sections">
                {sections.map((section, index) => (
                    <div key={index} className="section">
                        <h3>{section.title}</h3>
                        <br />
                        {section.list === false ? (
                            section.content.split("\n").map((para, i) => (
                                <React.Fragment key={i}>
                                    <p>{para}</p>
                                    {i < section.content.split("\n").length - 1 && <br />}
                                </React.Fragment>
                            ))
                        ) : (
                            <div className="lists">
                                {section.lists.map((list, index) => (
                                    <div className="list">
                                        <p>
                                            <strong>{list.title}:</strong>
                                        </p>
                                        <ul key={index}>
                                            {list.items.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}