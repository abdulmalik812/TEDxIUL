"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import auditorium from '../assets/auditorium.png';
import './RegistrationForm.css';

function HeroSection() {
  return (
    <section className="registration-hero">
      <img src={auditorium.src} alt="Auditorium background" className="hero-bg-image" />
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="brand-logo">
          <span className="brand-red">TEDx</span>
          <span className="brand-white">IntegralUniversity</span>
        </div>
        <p className="hero-tagline">IDEAS WORTH SPREADING</p>
        <h1>Register</h1>
        <p className="hero-copy">
          Join innovators, researchers, entrepreneurs and creators for an inspiring TEDx experience.
        </p>
        <div className="hero-meta">
          <div className="meta-item">
            <span className="meta-label">VENUE</span>
            <span className="meta-value">Integral University</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">DATE</span>
            <span className="meta-value">26th September 2026</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">THEME</span>
            <span className="meta-value">TESSELLATION</span>
          </div>
        </div>
        <button className="hero-cta">Reserve Your Seat</button>
      </div>
    </section>
  );
}

export default function RegistrationForm() {
  const searchParams = useSearchParams();
  const passParam = searchParams.get('pass');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    ticketType: passParam || '',
    category: '',
    organization: '',
    industry: '',
    specialRequirements: '',
    referral: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (passParam) {
      setFormData((prev) => ({ ...prev, ticketType: passParam }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategory = (value) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be exactly 10 digits';
    if (!formData.ticketType) newErrors.ticketType = 'Please select a ticket type';
    if (!formData.category) newErrors.category = 'Please select a category';
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    if (!formData.industry) newErrors.industry = 'Please select an industry';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log('registration payload', formData);
    toast.success('Registration Submitted Successfully!');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      ticketType: '',
      category: '',
      organization: '',
      industry: '',
      specialRequirements: '',
      referral: '',
    });
    setSuccess(true);
  };

  return (
    <div className="registration-page">
      <HeroSection />
      <main className="registration-form-panel">
        <div className="form-shell">
          <div className="form-header">
            <p className="form-subtitle">Secure your seat</p>
            <h2>Registration Form</h2>
            <p className="form-description">
              Complete the details below to confirm your TEDxIntegralUniversity pass.
            </p>
          </div>

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#121212',
                color: '#fff',
                border: '1px solid #E62B1E',
              },
            }}
          />

          {success && <div className="success-message">✅ Registration submitted successfully!</div>}

          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Full Name <span className="required">*</span>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </label>
              {errors.fullName && <span className="field-error">{errors.fullName}</span>}
            </div>

            <div className="form-row">
              <label>
                Email Address <span className="required">*</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </label>
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="form-row">
              <label>
                Phone Number <span className="required">*</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </label>
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>

            <div className="form-row">
              <label>
                Ticket Type <span className="required">*</span>
                <select name="ticketType" value={formData.ticketType} onChange={handleChange}>
                  <option value="">Select Ticket Type</option>
                  <option value="general">General Pass</option>
                  <option value="early">VIP Pass</option>
                  <option value="student">Student Pass</option>
                </select>
              </label>
              {errors.ticketType && <span className="field-error">{errors.ticketType}</span>}
            </div>

            <div className="form-row">
              <div className="field-label-row">
                <span>Category</span>
                <span className="required">*</span>
              </div>
              <div className="category-pills">
                {['Student', 'Teacher', 'Professional'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`pill ${formData.category === option ? 'active' : ''}`}
                    onClick={() => handleCategory(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.category && <span className="field-error">{errors.category}</span>}
            </div>

            <div className="form-row">
              <label>
                School / University / Company <span className="required">*</span>
                <input
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Enter your organization"
                />
              </label>
              {errors.organization && <span className="field-error">{errors.organization}</span>}
            </div>

            <div className="form-row">
              <label>
                Industry / Domain <span className="required">*</span>
                <select name="industry" value={formData.industry} onChange={handleChange}>
                  <option value="">Select Industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Business">Business</option>
                  <option value="Research">Research</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              {errors.industry && <span className="field-error">{errors.industry}</span>}
            </div>

            <div className="form-row">
              <label>
                Special Requirements
                <textarea
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Mention accessibility or any special requirements"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                How did you hear about TEDx?
                <select name="referral" value={formData.referral} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Instagram">Instagram</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Friend">Friend</option>
                  <option value="University">University</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>

            <button type="submit" className="register-btn">Reserve My Seat</button>
          </form>

          <p className="privacy-note">
            Your information will only be used for TEDxIntegralUniversity event registration and communication.
          </p>
        </div>
      </main>
    </div>
  );
}
