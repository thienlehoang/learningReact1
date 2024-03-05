import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

var skills = [
  {
    skill: "React",
    emoji: "💪",
    color: "blue",
  },
  {
    skill: "HTML+CSS",
    emoji: "💪",
    color: "orange",
  },
  {
    skill: "JavaScript",
    emoji: "💪",
    color: "yellow",
  },
  {
    skill: "Svelte",
    emoji: "👶",
    color: "orangered",
  },
  {
    skill: "Node.js",
    emoji: "💪",
    color: "green",
  },
  {
    skill: "MongoDB",
    emoji: "💪",
    color: "purple",
  },
];

function Card() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="logo512.png" alt="Jonas Schmedtmann" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} emoji={skill.emoji} color={skill.color} />
      ))}
      {/* <Skill
        skill={skills[0].skill}
        emoji={skills[0].emoji}
        color={skills[0].color}
      /> */}
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}
export default Card;