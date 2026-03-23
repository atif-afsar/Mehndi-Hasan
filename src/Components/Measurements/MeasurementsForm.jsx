import React from 'react';

const MeasurementsForm = () => {
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

        <form className="w-full space-y-16">
          
          {/* Section 1: Personal Details */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="group">
                <label className={labelStyles}>Full Name</label>
                <input type="text" placeholder="AS IT APPEARS ON ID" className={inputStyles} />
              </div>
              <div className="group">
                <label className={labelStyles}>Email Address</label>
                <input type="email" placeholder="FOR ATELIER CORRESPONDENCE" className={inputStyles} />
              </div>
              <div className="group">
                <label className={labelStyles}>Phone No.</label>
                <input type="tel" placeholder="+00 000 000 0000" className={inputStyles} />
              </div>
              <div className="flex gap-4">
                <div className="group flex-1">
                  <label className={labelStyles}>Height</label>
                  <input type="text" placeholder="CM" className={inputStyles} />
                </div>
                <div className="group flex-1">
                  <label className={labelStyles}>Weight</label>
                  <input type="text" placeholder="KG" className={inputStyles} />
                </div>
              </div>
            </div>

            <div className="group">
              <label className={labelStyles}>Primary Residence / Shipping Address</label>
              <input type="text" placeholder="FULL SHIPPING DETAILS FOR GARMENT DELIVERY" className={inputStyles} />
            </div>
          </div>

          {/* Section 2: Upper Body (Anatomical) */}
          <div className="pt-8 border-t border-white/10">
            <h4 className="font-['Raleway'] text-[12px] text-white tracking-[0.4em] uppercase mb-8 opacity-80">I. Upper Body Measurements</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
              {['Neck', 'Chest', 'Shoulder Width', 'Sleeve Length', 'Bicep', 'Wrist', 'Waist (Natural)', 'Front Jacket Length'].map((item) => (
                <div key={item} className="group">
                  <label className={labelStyles}>{item}</label>
                  <input type="text" placeholder="CM" className={inputStyles} />
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
                  <input type="text" placeholder="CM" className={inputStyles} />
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
                <select className={`${inputStyles} appearance-none cursor-pointer`}>
                  <option className="text-black">SLIM FIT - TAPERED TO SILHOUETTE</option>
                  <option className="text-black">CLASSIC FIT - TRADITIONAL & COMFORTABLE</option>
                  <option className="text-black">RELAXED - MODERN & FLOWING</option>
                </select>
              </div>
              <div className="group">
                <label className={labelStyles}>Special Requirements / Posture Notes</label>
                <input type="text" placeholder="E.G. DROPPED SHOULDER, WATCH CLEARANCE, ETC." className={inputStyles} />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-12">
            <button className="px-16 py-4 bg-[#b8965a] text-black font-['Raleway'] text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-colors duration-500 rounded-[2px]">
              Submit Profile
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default MeasurementsForm;