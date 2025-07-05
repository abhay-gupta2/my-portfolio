'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.send(
        'service_fxliz7n',       // Your service ID
        'template_s179izk',      // Your template ID
        {
          name: formData.name,       // must match template variable {{name}}
          email: formData.email,     // must match template variable {{email}}
          message: formData.message, // must match template variable {{message}}
          title: 'Contact Message',  // optional, if your template has {{title}}
        },
        '8YRHU0uiuo0jfDCl0'       // Your public key (user ID)
      );

      console.log('EmailJS success:', result);

      // Optional check – EmailJS typically returns result.text = "OK"
      if (result.text === 'OK') {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error: any) {
      console.error('EmailJS error:', error);
      alert(`Error sending message: ${error?.text || error?.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };


  return (
    <main className="bg-black text-white py-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#ffdb07] text-center mb-4">Contact Me</h1>
        <p className="text-gray-300 text-center mb-10">
          I'd love to hear from you — whether it's a project, job opportunity, or just a question.
        </p>

        {/* Contact Info */}
        <div className="text-center mb-12 space-y-2 text-lg text-gray-400">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:akgupta128125@gmail.com" className="text-[#ffdb07] hover:underline">
              akgupta128125@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+9779806816192" className="text-[#ffdb07] hover:underline">
              +977-9806816192
            </a>
          </p>
          <p>
            <strong>Location:</strong> New-Baneshwor, Kathmandu, Nepal
          </p>
        </div>

        {/* Contact Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                required
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:border-[#ffdb07]"
              />
            </div>

            <div>
              <label className="block mb-2">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:border-[#ffdb07]"
              />
            </div>

            <div>
              <label className="block mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:border-[#ffdb07]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#ffdb07] text-black font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        ) : (
          <div className="text-center text-green-400 font-semibold text-lg">
            ✅ Your message has been sent!
          </div>
        )}
      </div>
    </main>
  );
}
