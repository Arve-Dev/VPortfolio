import React from 'react'

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white text-black p-10 rounded-2xl shadow-md"
    >
      <h2 className="text-3xl font-bold mb-4">Send me a Message:</h2>

      <p className="mb-6 text-gray-600">
        I'd love to hear from you!
      </p>

      {/* TEXTAREA */}
      <textarea
        placeholder="Write your message here..."
        className="w-full h-40 p-4 rounded-lg bg-gray-100 border-2 border-[#6b0e1d] text-black outline-none resize-none focus:ring-2 focus:ring-[#6b0e1d]"
      ></textarea>

      {/* BUTTON ROW */}
      <div className="flex justify-end mt-4">
        <button className="bg-[#6b0e1d] text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-800 transition">
          Send
        </button>
      </div>
    </section>
  );
}

export default Contact;