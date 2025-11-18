import { useState } from "react";
import { Award, Building, Calendar, ArrowRight } from "lucide-react";

export default function Certifications() {
  // ✅ Your Google Drive certificate IDs
  const certifications = [
    { id: 1, title: "HTML", issuer: "Spoken Tutorials, IIT Bombay", date: "2024", driveId: "1-7PrnZG-xM6BnRWNTL4AQYkA24jexCJ-" },
    { id: 2, title: "Java", issuer: "Spoken Tutorials, IIT Bombay", date: "2024", driveId: "1-My3gI9x6s6K5q4jKvUn94SZ5rGna1I2" },
    { id: 3, title: "Cpp", issuer: "Spoken Tutorials, IIT Bombay", date: "2024", driveId: "11rVNxDCQoFyDQFfiioVMJT2XunAT-bAA" },
    { id: 4, title: "CSS", issuer: "Spoken Tutorials, IIT Bombay", date: "2024", driveId: "126WT2jypX9i9-_1oAfFdtWKWd_sU0ddQ" },
    { id: 5, title: "Learn to Design your Solar System", issuer: "Swaraj Foundation", date: "2024", driveId: "140dKjVRuiC_rcgqRT-H_4fH8yRj23lMs" },
    { id: 6, title: "R Programming", issuer: "Spoken Tutorials, IIT Bombay", date: "2024", driveId: "14kjf5TYKTzcgzX6stkLu4f_LerHTlYJR" },
    { id: 7, title: "Machine Learning", issuer: "Great Learning", date: "2024", driveId: "15oAgcdqjEWRzZ3yTFP00_0iiqtYHV1Q3" },
    { id: 8, title: "Data Visualization with PowerBI", issuer: "Great Learning", date: "2024", driveId: "19t2lYZb4_HIN0J2qWSbcstKcYE5moC-d" },
    { id: 9, title: "Python for Data Science", issuer: "Cognitive Class.ai", date: "2024", driveId: "1BYeFlbMM9WYwvuhNwjeMqgH5jFU83tGM" },
    { id: 14, title: "River cleaning campaign", issuer: "Wings For Dream", date: "2024", driveId: "1HDp624DTcnSPwL0Qj9v5ec96X64vgkKG" },
    { id: 15, title: "Github", issuer: "Prepinsta", date: "2024", driveId: "1I0u1qRszTpMjm3s9GYVXLDg2ycXo1FuT" },
    { id: 16, title: "Linux AWK", issuer: "Spoken Tutorials, IIT Bombay", date: "2024", driveId: "1QCmxR7h1O-wcXrY54Z3fKaBVRAPdgi-I" },
    { id: 21, title: "Spring", issuer: "Great Learning", date: "2024", driveId: "1cBitqzh6-am_sOBjYLBeoHiN1fXT9tKF" },
    { id: 23, title: "Cognitive Exchange Basic Speech Program", issuer: "Cognitive Exchange, Falcon, USA", date: "2024", driveId: "1dWl7hKty04PWGGk41LrymiIPM6lInFVB" },
    { id: 25, title: "Deep Learning with Python", issuer: "Great Learning", date: "2024", driveId: "1f7rCQsJbXw8jC0qd2dAjxdoqpz32X_Tx" },
    { id: 26, title: "Hibernate Framework - Basics", issuer: "Google Drive", date: "2024", driveId: "1h919OdyDcQHDuyI-bt8Vy5ezdCgXDv4U" },
    { id: 27, title: "Javascript", issuer: "Spoken Tutorials, IIT Bombay", date: "2024", driveId: "1hkM7YgYMm7m5uMWLd58iE1zVRXesArr4" },
    { id: 28, title: "NodeJs", issuer: "Great Learning", date: "2024", driveId: "1lfRi8B8Z8EejU565TRPzL93MgCr-X_hY" },
    { id: 29, title: "Bootstrap", issuer: "Spoken Tutorials, IIT Bombay", date: "2024", driveId: "1pK58NYSVRLkUoWIsl1-jAWShW1EBNLdv" },
    { id: 30, title: "Fundamentals of Network Security", issuer: "Udemy", date: "2024", driveId: "1pXdZDiO0WXNqtwWB8xqCoyenJxW5CvTF" },
    { id: 34, title: "Java Spring Framework", issuer: "SimpliLearn Skillpu", date: "2024", driveId: "1uysTh5ncis4DKU9adtB_J5QEHF5F8G5_" },
    { id: 36, title: "The Bits and Bytes of Networking", issuer: "Coursera", date: "2024", driveId: "1vToLZ3c-Y3bPjDW1lGXOse9SE5mNVzYZ" },
    { id: 38, title: "Arduino", issuer: "Spoken Tutorials, IIT Bombay", date: "2024", driveId: "1xWCGtBAm31PSenAsB3bXjP7hB19hDH3e" },
  ];

  // ✅ Modal State
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-16 sm:py-24 px-4 relative">

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 
          bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),
          linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
          bg-[size:40px_40px]">
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-emerald-500 mb-4">
            <Award className="h-5 w-5" />
            <span className="font-mono text-sm">/home/swapnil/certifications</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-gray-100">Professional</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400">
              Certifications
            </span>
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            All my verified certificates with Google Drive preview.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
           <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer group bg-slate-800/30 backdrop-blur 
                border border-slate-700/50 rounded-lg p-4
                hover:scale-105 transition-all duration-300 
                hover:shadow-lg hover:shadow-purple-500/20
                opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 120}ms`, animationFillMode: "forwards" }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100 
                group-hover:text-transparent group-hover:bg-clip-text 
                group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 
                transition-all duration-300">
                {cert.title}
              </h3>
            
              <p className="text-sm text-gray-400 mb-3 font-mono flex items-center gap-2">
                <Building className="h-4 w-4 text-purple-400" /> {cert.issuer}
              </p>
            
              <div className="relative w-full h-40 rounded-md overflow-hidden border border-slate-700/50">
                <iframe
                  src={`https://drive.google.com/file/d/${cert.driveId}/preview`}
                  className="w-full h-full pointer-events-none"
                  style={{ transform: "scale(1.1)", transformOrigin: "top left" }}
                ></iframe>
              </div>
            
              <div className="flex items-center gap-1 text-gray-500 mt-3">
                <Calendar className="h-3 w-3" />
                <span className="text-xs font-mono">{cert.date}</span>
              </div>
            </div>

          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-[90%] max-w-4xl p-6 relative animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
                onClick={() => setSelectedCert(null)}
              >
                ✕
              </button>

              <h3 className="text-xl font-bold text-gray-100 mb-4">
                {selectedCert.title}
              </h3>

              {/* Drive Preview */}
              <iframe
                src={`https://drive.google.com/file/d/${selectedCert.driveId}/preview`}
                className="w-full h-[70vh] rounded-lg border border-slate-700"
                allow="autoplay"
                title={selectedCert.title}
              />

              <div className="mt-4 text-right">
                <a
                  href={`https://drive.google.com/file/d/${selectedCert.driveId}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-mono text-sm hover:underline"
                >
                  Open in Google Drive →
                </a>
              </div>
            </div>

            <style jsx>{`
              @keyframes scale-in {
                from { transform: scale(0.92); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
              }
              .animate-scale-in {
                animation: scale-in 0.25s ease-out forwards;
              }
            `}</style>
          </div>
        )}

      </div>
    </section>
  );
}
