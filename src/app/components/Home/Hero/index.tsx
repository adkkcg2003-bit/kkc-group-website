import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-red-50 overflow-hidden">
      {/* Subtle background decoration matching logo colors */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.08)_0%,transparent_60%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8 md:mb-12">
          <img
            src="/images/logo/kkc-logo.png"  // ← your logo file path (change if name is different)
            alt="KKC Group of Institutions Logo"
            className="h-20 md:h-28 lg:h-36 w-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-950 mb-6 leading-tight tracking-tight">
          KKC Group of Institutions
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-10 max-w-5xl mx-auto leading-relaxed">
          Excellence in <span className="font-semibold text-blue-700">Nursing • Physiotherapy • MBA • MCA • Law • B.Ed • Homoeopathy</span>
          <br className="hidden md:block" />
          <span className="text-lg md:text-xl mt-3 block text-gray-600 font-medium">
            Since 2003 | Approved by INC, AICTE, Dr. NTR UHS, SV University & More
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
          <a
            href="#institutions"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl text-lg md:text-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 min-w-[220px]"
          >
            Explore Our Institutions
          </a>

          <a
            href="#contact"
            className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-xl text-lg md:text-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 min-w-[220px]"
          >
            Apply Now
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16 max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-2">20+</div>
            <div className="text-base md:text-lg text-gray-600 font-medium">Years of Excellence</div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl md:text-5xl font-extrabold text-green-700 mb-2">6+</div>
            <div className="text-base md:text-lg text-gray-600 font-medium">Institutions</div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-2">1000+</div>
            <div className="text-base md:text-lg text-gray-600 font-medium">Students Trained</div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2">95%+</div>
            <div className="text-base md:text-lg text-gray-600 font-medium">Placement Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;