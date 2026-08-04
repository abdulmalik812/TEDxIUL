"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import './RegistrationForm.css';

function HeroSection() {
    return (

        <section className="hero-section">

            <div className="hero-content">

  <h1>
  <span>TEDx</span>IntegralUniversity
</h1>

<p className="hero-tagline">
  IDEAS WORTH SPREADING
</p>

<h2>
  Register for
  <br />
  TEDxIntegralUniversity
</h2>

<p className="hero-description">
  Join innovators, researchers, entrepreneurs and creators for an inspiring TEDx experience.
</p>

<div className="hero-details">

  <div className="detail">
    <div>
      <h4>Venue</h4>
      <p>Integral University</p>
    </div>
  </div>

  <div className="detail">
    <div>
      <h4>Date</h4>
      <p>Coming Soon</p>
    </div>
  </div>

  <div className="detail">
    <div>
      <h4>Theme</h4>
      <p>TESSELLATION</p>
    </div>
  </div>

</div>

  <div className="event-status">
    Reserve Your Seat
  </div>
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
    ticketType: passParam ? passParam : '',
    category: '',
    organization: '',
    industry: '',
    specialRequirements: '',
    referral: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // If search param changes, keep ticketType in sync
    if (passParam) setFormData((p) => ({ ...p, ticketType: passParam }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
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
    <div>
      <HeroSection />
      <div style={{ padding: '48px 24px' }}>
      <div className="form-card">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#171717',
            color: '#fff',
            border: '1px solid #EB0028',
          },
        }}
      />

      <h3>Registration Form</h3>
      {success && <div className="success-message">✅ Registration submitted successfully!</div>}

      <p className="form-note">Fields marked with <span className="required">*</span> are required.</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Full Name <span className="required">*</span></label>
          <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="input-group">
          <label>Email Address <span className="required">*</span></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label>Phone Number <span className="required">*</span></label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="input-group">
          <label>Ticket Type <span className="required">*</span></label>
          <select name="ticketType" value={formData.ticketType} onChange={handleChange}>
            <option value="">Select Ticket Type</option>
            <option value="general">General Pass</option>
            <option value="early">VIP / Early Pass</option>
            <option value="student">Student Pass</option>
          </select>
          {errors.ticketType && <p className="error">{errors.ticketType}</p>}
        </div>

        <div className="input-group">
          <label>Category <span className="required">*</span></label>
          <div className="radio-group">
            <label><input type="radio" name="category" value="Student" checked={formData.category === 'Student'} onChange={handleChange} /> Student</label>
            <label><input type="radio" name="category" value="Teacher" checked={formData.category === 'Teacher'} onChange={handleChange} /> Teacher</label>
            <label><input type="radio" name="category" value="Professional" checked={formData.category === 'Professional'} onChange={handleChange} /> Professional</label>
          </div>
          {errors.category && <p className="error">{errors.category}</p>}
        </div>

        <div className="input-group">
          <label>School / University / Company <span className="required">*</span></label>
          <input name="organization" value={formData.organization} onChange={handleChange} placeholder="Enter your organization" />
          {errors.organization && <p className="error">{errors.organization}</p>}
        </div>

        <div className="input-group">
          <label>Industry / Domain <span className="required">*</span></label>
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
          {errors.industry && <p className="error">{errors.industry}</p>}
        </div>

        <div className="input-group">
          <label>Special Requirements</label>
          <textarea name="specialRequirements" value={formData.specialRequirements} onChange={handleChange} rows={4} placeholder="Mention accessibility or any special requirements" />
        </div>

        <div className="input-group">
          <label>How did you hear about TEDx?</label>
          <select name="referral" value={formData.referral} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Google Search">Google Search</option>
            <option value="Friend">Friend</option>
            <option value="University">University</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="register-btn">Reserve My Seat</button>
      </form>

      <p className="privacy-note">Your information will only be used for TEDxIntegralUniversity event registration and communication.</p>
      </div>
      </div>
    </div>
  );
}
