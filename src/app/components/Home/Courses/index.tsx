import React from 'react';

const Institutions = () => {
  const colleges = [
    {
      name: "KKC College of Nursing",
      description: "B.Sc Nursing • PB B.Sc Nursing • Approved by INC & Dr. NTR UHS",
      icon: "🏥",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "KKC College of Physiotherapy",
      description: "Bachelor of Physiotherapy (BPT) • Modern Labs & Clinical Training",
      icon: "🩺",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "KKC Institute of PG Studies",
      description: "MBA • MCA • Affiliated to SV University • Industry Focused",
      icon: "📚",
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "KKC College of Education",
      description: "B.Ed • D.El.Ed • M.Ed • NCTE Approved Teacher Training",
      icon: "🎓",
      color: "bg-orange-100 text-orange-800",
    },
    {
      name: "KKC College of Law",
      description: "LLB • Legal Education • Experienced Faculty & Moot Courts",
      icon: "⚖️",
      color: "bg-red-100 text-red-800",
    },
    {
      name: "KKC Homoeopathic Medical College",
      description: "BHMS • Homoeopathic Hospital • Holistic Healthcare Training",
      icon: "🌿",
      color: "bg-teal-100 text-teal-800",
    },
  ];

  return (
    <section id="institutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Our Institutions
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Specialized colleges offering quality education in health sciences, management, law, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.map((college, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${college.color}`}
            >
              <div className="text-5xl mb-4">{college.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{college.name}</h3>
              <p className="text-gray-700">{college.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Institutions;