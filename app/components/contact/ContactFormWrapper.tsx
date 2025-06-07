'use client';

import { useState } from 'react';

export default function ContactFormWrapper() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Tutaj normalnie byłaby integracja z API do wysyłania maila
    // Na potrzeby prezentacji symulujemy opóźnienie
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      {submitSuccess ? (
        <div className="bg-green-100 border border-green-200 text-green-800 rounded-md p-4 mb-6">
          <p className="font-medium">Dziękujemy za wiadomość!</p>
          <p>Skontaktujemy się z Tobą najszybciej jak to możliwe.</p>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
            Imię i nazwisko <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00CAFF] focus:outline-none"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00CAFF] focus:outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block font-medium text-gray-700 mb-1">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00CAFF] focus:outline-none"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block font-medium text-gray-700 mb-1">
            Temat <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00CAFF] focus:outline-none"
          >
            <option value="" disabled>Wybierz temat</option>
            <option value="wycena">Prośba o wycenę</option>
            <option value="pergola">Pergola</option>
            <option value="taras">Taras</option>
            <option value="zadaszenie">Zadaszenie</option>
            <option value="inne">Inne</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
            Wiadomość <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00CAFF] focus:outline-none"
          ></textarea>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#00CAFF] hover:bg-[#0099CC] text-white py-3 rounded-md font-medium transition-colors ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
          </button>
        </div>
      </form>
    </>
  );
} 