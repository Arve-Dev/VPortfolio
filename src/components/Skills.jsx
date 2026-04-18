import React from "react";

function SkillBar({ label, percent }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{label}</span>
        <span>{percent}%</span>
      </div>

      <div className="w-full bg-gray-300 dark:bg-gray rounded-full h-4">
        <div
          className="bg-[#6b0e1d] h-4 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-white scroll-mt-24 p-10 rounded-2xl shadow-md hover:shadow-xl transition">
      <h2 className="text-3xl text-[#6b0e1d] font-bold mb-6 border-b-2 pb-2 inline-block">Skills</h2>

      <SkillBar label="Clip Studio Paint" percent={60} />
      <SkillBar label="JavaScript" percent={20} />
      <SkillBar label="Java" percent={40} />
    </section>
  );
}

export default Skills;