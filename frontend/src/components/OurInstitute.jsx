import { Link } from "react-router-dom";
import Csit from "../assets/csitlogo.png";
import Csip from "../assets/csip.png";

export default function InstitutesSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 md:mb-12">
        Our Institutes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {/* CSIT Card */}
        <Link
          to="https://csit-website.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition duration-300 hover:scale-105"
        >
          <div className="bg-[#0d173b] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#1e2e69]/50 border border-[#101c3d] h-full">
            <div className="p-6 sm:p-8 flex flex-col items-center text-center space-y-3 sm:space-y-4 h-full">
              <img
                src={Csit}
                alt="CSIT Logo"
                className="w-28 sm:w-36 h-auto object-contain"
              />
              <h3 className="text-lg sm:text-2xl font-semibold text-white">
                Chhatrapati Shivaji Institute of Technology
              </h3>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Leading technical education institute in Chhattisgarh, offering
                top-notch courses in various engineering streams.
              </p>
            </div>
          </div>
        </Link>
        <Link
          to="http://csipdurg.in/index.php"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition duration-300 hover:scale-105"
        >
          <div className="bg-[#00a859] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#1e2e69]/50 border border-[#101c3d] h-full">
            <div className="p-6 sm:p-8 flex flex-col items-center text-center space-y-3 sm:space-y-4 h-full">
              <img
                src={Csit}
                alt="CSIP Logo"
                className="w-28 sm:w-36 h-auto object-contain"
              />
              <h3 className="text-lg sm:text-2xl font-semibold text-white">
                {" "}
                Chhatrapati Shivaji Institute of Pharmacy{" "}
              </h3>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Premier pharmacy institute in Chhattisgarh, specializing in
                pharmacy education and research.
              </p>
            </div>
          </div>
        </Link>
        {/* CSIP Card */}
      </div>
    </div>
  );
}
