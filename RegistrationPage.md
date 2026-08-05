# Vite registration page files to be migrated in project directory
# Created by Yazdaan Wali
## HeroSection.jsx
```jsx
import "./HeroSection.css";

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

export default HeroSection;
```
## HeroSection.css
```css
.hero-section{
    flex: 1;
    min-height: 100vh;

    display: flex;
    align-items: center;

    padding: 70px;

    background:
        linear-gradient(
            rgba(0,0,0,0.75),
            rgba(0,0,0,0.80)
        ),
        url("https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80");

    background-size: cover;
    background-position: center;
}

.hero-content{
    max-width: 650px;
}

.hero-content h1{
    font-size: 46px;
    margin-bottom: 10px;
}

.hero-content h1 span{
    color:#EB0028;
}

.hero-tagline{
    color:#EB0028;
    text-transform: uppercase;
    letter-spacing:3px;
    font-size:14px;
    margin-bottom:30px;
    font-weight:600;
}

.hero-content h2{
    font-size:52px;
    line-height:1.15;
    margin-bottom:25px;
}

.hero-description{
    color:#d0d0d0;
    line-height:1.8;
    margin-bottom:40px;
    font-size:17px;
}

.hero-details{
    display:flex;
    flex-direction:column;
    gap:22px;
    margin-bottom:40px;
}

.detail{
    display:flex;
    align-items:flex-start;
    gap:18px;
}

.detail span{
    font-size:28px;
}

.detail h4{
    color:#EB0028;
    margin-bottom:4px;
    font-size:15px;
    text-transform:uppercase;
    letter-spacing:1px;
}

.detail p{
    color:white;
    font-size:17px;
}

.event-status{
    display:inline-block;
    padding:14px 28px;
    background:#EB0028;
    color:white;
    border-radius:30px;
    font-weight:700;
    box-shadow:0 10px 30px rgba(235,0,40,.35);
}
```
## RegistrationForm.jsx
```jsx
import toast from "react-hot-toast";
import { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    
    fullName: "",
    email: "",
    phone: "",
    ticketType: "",
    category: "",
    organization: "",
    industry: "",
    specialRequirements: "",
    referral: "",
  });
const [errors, setErrors] = useState({});
const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
const validateForm = () => {
  let newErrors = {};

  if (!formData.fullName.trim()) {
    newErrors.fullName = "Full name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Enter a valid email address";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(formData.phone)) {
    newErrors.phone = "Phone number must be exactly 10 digits";
  }

  if (!formData.ticketType) {
    newErrors.ticketType = "Please select a ticket type";
  }

  if (!formData.category) {
    newErrors.category = "Please select a category";
  }

  if (!formData.organization.trim()) {
    newErrors.organization = "Organization is required";
  }

  if (!formData.industry) {
    newErrors.industry = "Please select an industry";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
  const handleSubmit = (e) => {
    e.preventDefault();
      if (!validateForm()) {
    return;
  }

    console.log(formData);
    toast.success("Registration Submitted Successfully!");
    setFormData({
  fullName: "",
  email: "",
  phone: "",
  ticketType: "",
  category: "",
  organization: "",
  industry: "",
  specialRequirements: "",
  referral: "",
});

    setSuccess(true);
  };

  return (
    <div className="form-card">
      <h3>Registration Form</h3>
      {success && (
  <div className="success-message">
    ✅ Registration submitted successfully!
  </div>
)}

      <p className="form-note">
        Fields marked with <span className="required">*</span> are required.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}

        <div className="input-group">
          <label>
            Full Name <span className="required">*</span>
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
  <p className="error">{errors.fullName}</p>
)}
        </div>

        {/* Email */}

        <div className="input-group">
          <label>
            Email Address <span className="required">*</span>
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
          {errors.email && (
  <p className="error">{errors.email}</p>
)}

        </div>

        {/* Phone */}

        <div className="input-group">
          <label>
            Phone Number <span className="required">*</span>
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          {errors.phone && (
  <p className="error">{errors.phone}</p>
)}
        </div>

        {/* Ticket Type */}

        <div className="input-group">
          <label>
            Ticket Type <span className="required">*</span>
          </label>

          <select
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
          >
            <option value="">Select Ticket Type</option>
            <option value="General Pass">General Pass</option>
            <option value="VIP Pass">VIP Pass</option>
            <option value="Student Pass">Student Pass</option>
          </select>
          {errors.ticketType && (
  <p className="error">{errors.ticketType}</p>
)}
        </div>

        {/* Category */}

        <div className="input-group">
          <label>
            Category <span className="required">*</span>
          </label>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="category"
                value="Student"
                checked={formData.category === "Student"}
                onChange={handleChange}
              />
              Student
            </label>

            <label>
              <input
                type="radio"
                name="category"
                value="Teacher"
                checked={formData.category === "Teacher"}
                onChange={handleChange}
              />
              Teacher
            </label>

            <label>
              <input
                type="radio"
                name="category"
                value="Professional"
                checked={formData.category === "Professional"}
                onChange={handleChange}
              />
              Professional
            </label>
          </div>
          {errors.category && (
   <p className="error">{errors.category}</p>
)}
        </div>

        {/* Organization */}

        <div className="input-group">
          <label>
            School / University / Company{" "}
            <span className="required">*</span>
          </label>

          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Enter your organization"
          />
          {errors.organization && (
   <p className="error">{errors.organization}</p>
)}
        </div>

        {/* Industry */}

        <div className="input-group">
          <label>
            Industry / Domain <span className="required">*</span>
          </label>

          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          >
            <option value="">Select Industry</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
            <option value="Research">Research</option>
            <option value="Other">Other</option>
          </select>
          {errors.organization && (
   <p className="error">{errors.organization}</p>
)}
        </div>

        {/* Special Requirements */}

        <div className="input-group">
          <label>Special Requirements</label>

          <textarea
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleChange}
            rows="4"
            placeholder="Mention accessibility or any special requirements"
          ></textarea>
        </div>

        {/* Referral */}

        <div className="input-group">
          <label>How did you hear about TEDx?</label>

          <select
            name="referral"
            value={formData.referral}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Google Search">Google Search</option>
            <option value="Friend">Friend</option>
            <option value="University">University</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="register-btn">
          Reserve My Seat
        </button>
      </form>

      <p className="privacy-note">
        Your information will only be used for TEDxIntegralUniversity event
        registration and communication.
      </p>
    </div>
  );
}

export default RegistrationForm;
```
## RegistrationForm.css
```css
.input-group select{
    background:#222;
    color:white;
    border:1px solid #333;
    border-radius:10px;
    padding:14px;
    font-size:16px;
    outline:none;
    transition:.3s;
}
.input-group{
    display:flex;
    flex-direction:column;
    margin-bottom:26px;
}
.radio-group{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:45px;
    margin-top:18px;
    flex-wrap:wrap;
}

.radio-group label{
    display:flex;
    align-items:center;
    gap:10px;

    background:#242424;
    border:1px solid #333;

    padding:14px 22px;

    border-radius:12px;

    cursor:pointer;

    transition:0.3s;
}
.radio-group label:hover{
    border-color:#e62b1e;
    background:#2c2c2c;
    transform:translateY(-2px);
}

.radio-group input{
    accent-color:#e62b1e;
}
.input-group select{
    background:#222;
    color:white;

    border:1px solid #333;

    border-radius:10px;

    padding:14px;

    font-size:16px;

    cursor:pointer;

    transition:.3s;
}
.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus{

    border-color:#EB0028;

    box-shadow:0 0 0 4px rgba(235,0,40,.15);

}
.register-btn{

    width:100%;

    padding:16px;

    border:none;

    border-radius:12px;

    background:#EB0028;

    color:white;

    font-size:18px;

    font-weight:700;

    cursor:pointer;

    transition:.3s;

}
.register-btn:hover{

    transform:translateY(-2px);

    background:#ff173d;

    box-shadow:0 12px 30px rgba(235,0,40,.35);

}

.register-btn:active{
    transform:scale(.98);
}
.required{
    color:#e62b1e;
    margin-left:3px;
}
.form-note{
    text-align:center;
    color:#9a9a9a;
    margin-top:-10px;
    margin-bottom:35px;
    font-size:14px;
}
.privacy-note{
    margin-top:20px;
    text-align:center;
    font-size:13px;
    color:#8d8d8d;
    line-height:1.6;
}
.form-card{
    width:700px;
    max-width:95%;
    margin:auto;
    background:#171717;
    border-radius:18px;
    padding:45px;
    border:1px solid #2d2d2d;
    box-shadow:0 20px 60px rgba(0,0,0,.35);
}
.input-group input:hover,
.input-group select:hover{
    border-color:#555;
}
.input-group input,
.input-group select,
.input-group textarea{

    width:100%;
    padding:15px 16px;

    border-radius:12px;

    border:1px solid #303030;

    background:#232323;

    color:white;

    font-size:15px;

    transition:.25s;

    outline:none;

}

.success-message{
    background:#0f5132;
    color:#d1ffe8;
    border:1px solid #198754;
    padding:14px;
    border-radius:10px;
    margin-bottom:20px;
    text-align:center;
    font-weight:600;
}
.input-group label{
    margin-bottom:10px;
    font-size:15px;
    font-weight:600;
    color:#f2f2f2;
}
input::placeholder,
textarea::placeholder{

    color:#8b8b8b;

}
```
## App.jsx
```jsx
import "./App.css";
import HeroSection from "./components/HeroSection";
import RegistrationForm from "./components/RegistrationForm";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#171717",
            color: "#fff",
            border: "1px solid #EB0028",
          },
        }}
      />

      <div className="app-container">
        <HeroSection />
        <RegistrationForm />
      </div>
    </>
  );
}

export default App;
```
## App.css
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#0d0d0d;
    color:white;
    font-family: 'Inter', sans-serif;
}

.page{
    min-height:100vh;
    padding:60px 20px;
}

.hero{
    text-align:center;
    margin-bottom:60px;
}

.hero h1{
    font-size:55px;
    margin-bottom:15px;
}

.hero span{
    color:#e62b1e;
}

.hero h2{
    font-size:32px;
    margin-bottom:20px;
}

.hero p{
    max-width:650px;
    margin:auto;
    color:#bcbcbc;
    line-height:1.7;
}

.form-card{

    width:700px;

    max-width:95%;

    margin:auto;

    background:#171717;

    border-radius:15px;

    padding:40px;

    border:1px solid #2a2a2a;

}

.form-card h3{

    text-align:center;

    margin-bottom:30px;

    font-size:28px;

}
.input-group{
    display:flex;
    flex-direction:column;
    margin-bottom:22px;
}

.input-group label{
    margin-bottom:8px;
    font-size:15px;
    font-weight:600;
}

.input-group input{

    background:#222;

    color:white;

    border:1px solid #333;

    border-radius:10px;

    padding:14px;

    font-size:16px;

    outline:none;

    transition:.3s;

}

.input-group input:focus{

    border-color:#e62b1e;

    box-shadow:0 0 10px rgba(230,43,30,.3);

}
.progress-container{
    width:700px;
    max-width:95%;
    margin:50px auto;
}

.progress-top{
    display:flex;
    align-items:center;
}

.circle{
    width:50px;
    height:50px;

    border-radius:50%;

    display:flex;
    justify-content:center;
    align-items:center;

    background:#333;
    color:white;

    font-size:22px;
    font-weight:700;
}

.circle.active{
    background:#e62b1e;
}

.line{
    flex:1;
    height:2px;
    background:#444;
    margin:0 12px;
}

.progress-bottom{
    display:flex;
    justify-content:space-between;
    margin-top:15px;
    color:#bfbfbf;
    font-size:15px;
}
.app-container{
    display:flex;
    min-height:100vh;
}

@media(max-width:950px){

    .app-container{

        flex-direction:column;

    }

}
.event-status{
    display:inline-block;
    margin-top:30px;
    padding:12px 24px;
    border-radius:40px;
    background:#ff2b2b;
    color:white;
    font-weight:700;
    box-shadow:0 10px 30px rgba(255,43,43,.3);
}
.left-panel{
    position: relative;
    overflow: hidden;

    background-image: url("./assets/your-image.jpg");
    background-size: cover;
    background-position: center;
}
.left-panel::before{
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(
        rgba(0,0,0,.75),
        rgba(0,0,0,.75)
    );

    z-index: 1;
}
.left-content{
    position: relative;
    z-index: 2;
}
```
## index.css
```css
:root {
  --text: #6b6375;
  --text-h: #08060d;
  --bg: #fff;
  --border: #e5e4e7;
  --code-bg: #f4f3ec;
  --accent: #aa3bff;
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
  --social-bg: rgba(244, 243, 236, 0.5);
  --shadow:
    rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
  --mono: ui-monospace, Consolas, monospace;

  font: 18px/145% var(--sans);
  letter-spacing: 0.18px;
  color-scheme: light dark;
  color: var(--text);
  background: var(--bg);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --text-h: #f3f4f6;
    --bg: #16171d;
    --border: #2e303a;
    --code-bg: #1f2028;
    --accent: #c084fc;
    --accent-bg: rgba(192, 132, 252, 0.15);
    --accent-border: rgba(192, 132, 252, 0.5);
    --social-bg: rgba(47, 48, 58, 0.5);
    --shadow:
      rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
  }

  #social .button-icon {
    filter: invert(1) brightness(2);
  }
}

body {
  margin: 0;
}

#root {
  width: 1126px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  border-inline: 1px solid var(--border);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

h1,
h2 {
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
}

h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    margin: 20px 0;
  }
}
h2 {
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  margin: 0 0 8px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
p {
  margin: 0;
}

code,
.counter {
  font-family: var(--mono);
  display: inline-flex;
  border-radius: 4px;
  color: var(--text-h);
}

code {
  font-size: 15px;
  line-height: 135%;
  padding: 4px 8px;
  background: var(--code-bg);
}
```
## main.jsx
```jsx
import { Toaster } from "react-hot-toast";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
  <Toaster
    position="top-right"
    toastOptions={{
      duration: 3000,
      style: {
        background: "#181818",
        color: "#fff",
        border: "1px solid #EB0028",
      },
    }}
  />
  <App />
</>
  </StrictMode>,
)
```
