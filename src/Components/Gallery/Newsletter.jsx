import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-[#0f110f] w-full px-6 md:px-14 py-24 pb-32">
      <div className="max-w-4xl mx-auto border border-white/5 bg-[#141614] p-12 md:p-20 flex flex-col items-center text-center shadow-2xl">
        
        <h2 className="font-['Cormorant_Garamond'] text-[2.5rem] md:text-[3rem] italic text-[#b8965a] mb-6 drop-shadow-md">
            Join the Inner Circle
        </h2>
        
        <p className="font-['Raleway'] font-light text-[11px] md:text-[13px] text-white/70 leading-[1.8] max-w-lg mb-10">
            Receive exclusive first looks at our upcoming editorial series and limited print releases.
        </p>

        <form className="w-full max-w-xl flex flex-col md:flex-row gap-4 justify-center items-stretch" onSubmit={(e) => e.preventDefault()}>
            <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-transparent border border-white/20 text-white font-['Raleway'] font-light text-[11px] px-6 py-4 outline-none focus:border-[#b8965a] transition-colors rounded-sm"
                required
            />
            <button 
                type="submit"
                className="bg-[#b8965a] text-[#0f110f] font-['Raleway'] text-[10px] uppercase font-bold tracking-[0.2em] px-10 py-4 hover:bg-white transition-colors duration-300 rounded-sm"
            >
                SUBSCRIBE
            </button>
        </form>

      </div>
    </section>
  );
};

export default Newsletter;
