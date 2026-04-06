import React, { useState } from 'react';
import { Download } from 'lucide-react';
import jsPDF from 'jspdf';

const MeasurementsForm = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFillColor(5, 28, 18);
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(197, 160, 89);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('MEHDI HASAN TAILOR', 105, 20, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Bespoke Measurement Profile', 105, 30, { align: 'center' });
    
    // Reset text color for body
    doc.setTextColor(0, 0, 0);
    let yPos = 50;
    
    // Personal Details
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(197, 160, 89);
    doc.text('PERSONAL DETAILS', 20, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    
    const personalFields = ['Full Name', 'Email', 'Phone Number', 'Height', 'Weight', 'Shipping Address'];
    personalFields.forEach(field => {
      if (formData[field]) {
        doc.text(`${field}: ${formData[field]}`, 20, yPos);
        yPos += 7;
      }
    });
    
    yPos += 5;
    
    // Upper Body Measurements
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(197, 160, 89);
    doc.text('UPPER BODY MEASUREMENTS', 20, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    
    const upperBodyFields = ['Neck', 'Chest', 'Shoulder Width', 'Sleeve Length', 'Bicep', 'Wrist', 'Waist (Natural)', 'Front Jacket Length'];
    upperBodyFields.forEach(field => {
      if (formData[field]) {
        doc.text(`${field}: ${formData[field]} cm`, 20, yPos);
        yPos += 7;
      }
    });
    
    yPos += 5;
    
    // Lower Body Measurements
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(197, 160, 89);
    doc.text('LOWER BODY MEASUREMENTS', 20, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    
    const lowerBodyFields = ['Trouser Waist', 'Hips', 'Thigh', 'Inseam', 'Outseam', 'Knee', 'Ankle Opening', 'Rise'];
    lowerBodyFields.forEach(field => {
      if (formData[field]) {
        doc.text(`${field}: ${formData[field]} cm`, 20, yPos);
        yPos += 7;
      }
    });
    
    yPos += 5;
    
    // Fit Preferences
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(197, 160, 89);
    doc.text('FIT PREFERENCES', 20, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    
    if (formData['Preferred Fit']) {
      doc.text(`Preferred Fit: ${formData['Preferred Fit']}`, 20, yPos);
      yPos += 7;
    }
    if (formData['Special Requirements']) {
      doc.text(`Special Requirements: ${formData['Special Requirements']}`, 20, yPos);
      yPos += 7;
    }
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text('Generated from www.mehdihasantailors.com', 105, 285, { align: 'center' });
    
    // Save PDF
    const fileName = formData['Full Name'] ? `${formData['Full Name'].replace(/\s+/g, '_')}_Measurements.pdf` : 'Measurements_Profile.pdf';
    doc.save(fileName);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("Submitting Profile...");
    
    const formDataToSubmit = new FormData(event.target);
    formDataToSubmit.append("access_key", "f86b81e9-e78e-4c7d-abaf-1386c2e5bba4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit
      });
      const data = await response.json();

      if (data.success) {
        setStatus("Profile Submitted Successfully! We will contact you shortly.");
        event.target.reset();
      } else {
        setStatus(data.message || "Failed to submit. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong! Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = "w-full bg-white/95 h-12 px-6 font-['Raleway'] text-[12px] text-black tracking-widest placeholder:text-black/30 placeholder:text-[10px] uppercase outline-none focus:ring-1 focus:ring-[#b8965a] transition-all duration-300 rounded-[2px]";
  const labelStyles = "font-['Raleway'] text-[10px] text-[#b8965a] tracking-[0.2em] font-semibold uppercase block group-focus-within:text-white transition-colors duration-500 mb-2";

  return (
    <section className="bg-green-900 py-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 space-y-4">
          <h3 className="font-['Cormorant_Garamond'] text-[3.5rem] text-white font-light tracking-wide italic">Bespoke Profile</h3>
          <div className="h-[1px] w-12 bg-[#b8965a] mx-auto"></div>
          <p className="font-['Raleway'] text-[10px] text-white/50 tracking-[0.3em] uppercase">Tailoring & Measurements</p>
        </div>

        <form onSubmit={onSubmit} className="w-full space-y-16">
          
          {/* Section 1: Personal Details */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="group">
                <label className={labelStyles}>Full Name</label>
                <input type="text" name="Full Name" required placeholder="AS IT APPEARS ON ID" className={inputStyles} onChange={handleInputChange} />
              </div>
              <div className="group">
                <label className={labelStyles}>Email Address</label>
                <input type="email" name="Email" required placeholder="FOR ATELIER CORRESPONDENCE" className={inputStyles} onChange={handleInputChange} />
              </div>
              <div className="group">
                <label className={labelStyles}>Phone No.</label>
                <input type="tel" name="Phone Number" required placeholder="+00 000 000 0000" className={inputStyles} onChange={handleInputChange} />
              </div>
              <div className="flex gap-4">
                <div className="group flex-1">
                  <label className={labelStyles}>Height</label>
                  <input type="text" name="Height" placeholder="CM" className={inputStyles} onChange={handleInputChange} />
                </div>
                <div className="group flex-1">
                  <label className={labelStyles}>Weight</label>
                  <input type="text" name="Weight" placeholder="KG" className={inputStyles} onChange={handleInputChange} />
                </div>
              </div>
            </div>

            <div className="group">
              <label className={labelStyles}>Primary Residence / Shipping Address</label>
              <input type="text" name="Shipping Address" required placeholder="FULL SHIPPING DETAILS FOR GARMENT DELIVERY" className={inputStyles} onChange={handleInputChange} />
            </div>
          </div>

          {/* Section 2: Upper Body (Anatomical) */}
          <div className="pt-8 border-t border-white/10">
            <h4 className="font-['Raleway'] text-[12px] text-white tracking-[0.4em] uppercase mb-8 opacity-80">I. Upper Body Measurements</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
              {['Neck', 'Chest', 'Shoulder Width', 'Sleeve Length', 'Bicep', 'Wrist', 'Waist (Natural)', 'Front Jacket Length'].map((item) => (
                <div key={item} className="group">
                  <label className={labelStyles}>{item}</label>
                  <input type="text" name={item} placeholder="CM" className={inputStyles} onChange={handleInputChange} />
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Lower Body */}
          <div className="pt-8 border-t border-white/10">
            <h4 className="font-['Raleway'] text-[12px] text-white tracking-[0.4em] uppercase mb-8 opacity-80">II. Lower Body Measurements</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
              {['Trouser Waist', 'Hips', 'Thigh', 'Inseam', 'Outseam', 'Knee', 'Ankle Opening', 'Rise'].map((item) => (
                <div key={item} className="group">
                  <label className={labelStyles}>{item}</label>
                  <input type="text" name={item} placeholder="CM" className={inputStyles} onChange={handleInputChange} />
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Fit & Posture Notes */}
          <div className="pt-8 border-t border-white/10">
            <h4 className="font-['Raleway'] text-[12px] text-white tracking-[0.4em] uppercase mb-8 opacity-80">III. Fit Preferences</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className={labelStyles}>Preferred Fit</label>
                <select name="Preferred Fit" className={`${inputStyles} appearance-none cursor-pointer`} onChange={handleInputChange}>
                  <option className="text-black">SLIM FIT - TAPERED TO SILHOUETTE</option>
                  <option className="text-black">CLASSIC FIT - TRADITIONAL & COMFORTABLE</option>
                  <option className="text-black">RELAXED - MODERN & FLOWING</option>
                </select>
              </div>
              <div className="group">
                <label className={labelStyles}>Special Requirements / Posture Notes</label>
                <input type="text" name="Special Requirements" placeholder="E.G. DROPPED SHOULDER, WATCH CLEARANCE, ETC." className={inputStyles} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center pt-12">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`px-16 py-4 bg-[#b8965a] text-black font-['Raleway'] text-[11px] font-bold tracking-[0.3em] uppercase transition-colors duration-500 rounded-[2px] ${
                  isSubmitting ? "opacity-70 cursor-wait bg-white" : "hover:bg-white cursor-pointer"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit Profile"}
              </button>
              
              <button 
                type="button"
                onClick={generatePDF}
                className="px-16 py-4 border-2 border-[#b8965a] text-[#b8965a] font-['Raleway'] text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[#b8965a] hover:text-black rounded-[2px] flex items-center justify-center gap-3"
              >
                <Download size={16} />
                Download PDF
              </button>
            </div>
            {status && <p className="mt-6 font-['Raleway'] text-[#b8965a] text-[11px] font-bold tracking-widest uppercase">{status}</p>}
          </div>

        </form>
      </div>
    </section>
  );
};

export default MeasurementsForm;