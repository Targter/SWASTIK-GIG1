import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { ClipLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        {/* <ClipLoader color="#FFD700" size={50} /> */}
        <img src="abbb.jpg" alt="" className='w-24 h-24' />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("abc.jpg")', // Correct path for public folder
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          
          <h1 className="text-6xl text-white mb-12">SWASTIK ONLINE BOOK</h1>
          <p className="text-2xl text-white mb-12">WE OFFER BEST & GENUINE EXPERIENCE</p>
          {/* <div className="w-24 h-1 bg-white mb-12"></div> */}

          <a href="https://t.me/Sarpanchexch">
          <button className="bg-yellow-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-700 transition-colors duration-300 flex items-center">
            GET YOUR ID NOW
          </button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#fff5e6]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">About Sarpanch Exchange</h2>
          <p className="text-lg mb-12 max-w-4xl mx-auto">
            Sarpanch Exchange is your trusted ID provider. We specialize in all types of sports and gaming IDs, offering a seamless experience for online cricket and various gaming platforms. Join our community of over 100k satisfied players.
          </p>
          <a href="https://t.me/Sarpanchexch"><button className="bg-yellow-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-700 transition-colors duration-300 flex items-center mx-auto">
            GET YOUR ID NOW
          </button></a>
          {/* <div className="flex justify-center mt-12"> */}
            {/* <RefreshCw className="w-12 h-12 text-yellow-600" /> */}
          {/* </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">FEATURES AND BENEFITS</h2>
          <p className="text-lg mb-12">
            We provide premium gaming IDs to players who want to showcase their skills.
          </p>
          <div className="flex flex-col items-center space-y-4 mb-12">
            <div className="flex items-center">
              <span className="text-lg">✓ Premium Gaming ID Provider</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg">✓ Lightning Fast Service</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg">✓ Maximum Security</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg">✓ 100% Trusted Platform</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg">✓ Established Brand</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg">✓ 24/7 Customer Support</span>
            </div>
          </div>
          <a href="https://t.me/Sarpanchexch">
          <button className="bg-yellow-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-700 transition-colors duration-300 flex items-center mx-auto">
            GET YOUR ID NOW
          </button>
          </a>
          {/* <div className="flex justify-center mt-12">
            <RefreshCw className="w-12 h-12 text-yellow-600" />
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/abc2.jpeg')", // Correct path for public folder
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Get In Touch With Sarpanch Exchange</h2>
          <p className="text-xl mb-12">
            For Any Queries, Emergencies, Feedback or Complaints. We Are Here To Help You 24/7 With Our Online Services.
          </p>
          <a href="https://wa.me/918740881801">
          <button className="bg-yellow-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-700 transition-colors duration-300 mt-12 flex items-center mx-auto">
            WHATSAPP
          </button>
          </a>

        </div>
      </section>

      {/* Disclaimer */}
      <footer className="bg-[#1a1f36] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Disclaimer:- This Website is only for 18+ users. If you are from Telangana, Orissa, Assam, Sikkim, and Nagaland Please leave the website immediately. Be aware of fraudsters, we only deal via WhatsApp. We Only Promote Fantasy Sports. No Real Money Involvement.
          </p>
          <p className="text-sm">Copyright © 2025 Sarpanch Exchange</p>
         
        </div>
      </footer>
    </div>
  );
}

export default App;
