import React from 'react'

function Experience() {
  return (
    <section id="experience" className="bg-white p-10 scroll-mt-24 rounded-2xl shadow-md hover:shadow-xl transition">
      <h2 className="text-3xl font-bold text-[#6b0e1d] mb-6 border-b-2 pb-2 inline-block">
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-5 border rounded-xl hover:bg-gray-50 transition">
          <h3 className="font-semibold text-lg">Customer Representative</h3>
          <p className="text-gray-600 text-sm">Nov 2023 - Feb 2024</p>
          <p className="mt-2 text-gray-700 text-sm">
            Assisted customers, handled inquiries, and provided admin support.
          </p>
        </div>

        <div className="p-5 border rounded-xl hover:bg-gray-50 transition">
          <h3 className="font-semibold text-lg">Visual Web Novel</h3>
          <p className="text-gray-600 text-sm">Academic Project</p>
          <p className="mt-2 text-gray-700 text-sm">
           Lead Programmer using Monogatari engine, story board director and art illustrator.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience