import React from 'react'

function Education() {
  return (
    <section id="education" className="scroll-mt-24 bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition">
      <h2 className="text-3xl font-bold text-[#6b0e1d] mb-6 border-b-2 pb-2 inline-block">
        Education
      </h2>

      <div className="space-y-4">
        <div className="border-l-4 border-[#6b0e1d] pl-4">
          <h3 className="font-semibold text-lg">BS in Information Technology | Web Development </h3>
          <p className="text-gray-600">University of Cordilleras</p>
          <span className="text-sm text-gray-400">2024 - Present</span>
        </div>

        <div className="border-l-4 border-gray-300 pl-4">
          <h3 className="font-semibold text-lg">Information Technology in Web and Mobile Application</h3>
          <p className="text-gray-600">STI College Baguio </p>
          <span className="text-sm text-gray-400">2018 - 2020</span>
        </div>
      </div>
    </section>
  );
}

export default Education