import React from 'react';

const Mentor = () => {
  const mentors = [
    {
      name: 'Mr. K Kuppaiah Chetty',
      role: 'Chairman',
      image: '/images/mentor/Mr. K Kuppaiah Chetty.png',
      description: 'Visionary Founder & Chairman of KKC Group — a pioneer in quality education with unwavering commitment to student success, institutional excellence, and holistic development since 2003.',
    },
    {
      name: 'Mr. Suresh Babu Mitta',
      role: 'Executive Chairman',
      image: '/images/mentor/Mr. Suresh Babu Mitta.png',
      description: 'Dynamic Executive Chairman providing strategic leadership, operational excellence, and forward-thinking guidance across all KKC institutions.',
    },
    {
      name: 'Mr. K Narasimha Rao',
      role: 'Vice Chairman',
      image: '/images/mentor/Mr. K Narasimha Rao.png',
      description: 'Dedicated Vice Chairman focused on academic growth, innovation, quality assurance, and upholding the high standards of education.',
    },
    {
      name: 'Mr. K Ravi Sekhar',
      role: 'Vice Chairman',
      image: '/images/mentor/Mr. K Ravi Sekhar.png',
      description: 'Respected Vice Chairman contributing to governance, development, strategic planning, and the continued progress of KKC Group of Institutions.',
    },
  ];

  return (
    <section id="mentors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          Our Leadership Team
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Dedicated leaders guiding KKC Group toward excellence in education and student success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Photo container - taller + contain to show full face */}
              <div className="relative h-80 overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-auto max-h-full object-contain"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{mentor.name}</h3>
                <p className="text-lg font-semibold text-blue-700 mb-3">{mentor.role}</p>
                <p className="text-gray-600 text-sm">{mentor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentor;