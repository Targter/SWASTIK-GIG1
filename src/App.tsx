import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Phone, RefreshCw, Sparkles } from 'lucide-react';
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
  const services = [
    { name: 'Radhexchange', url: 'https://www.radheexchange.com' },
    { name: 'Saffronexchange', url: 'https://www.saffronexch.com/admin' },
    { name: 'Daimondsmexchange', url: 'https://www.diamondexch99.com' },
    { name: 'Allpanel', url: 'https://www.allpanel777.com/admin' },
    { name: 'Rudra', url: 'https://rudra18.in/m/dashboard' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className='w-full h-[50px] bg-[#fff5e6] fixed top-0 z-10 flex items-center overflow-hidden '>
        <div className='flex items-center w-[60%] justify-between'>
        <img src="logo.png" className='w-14 h-14 font-black text-black ml-11' alt="" />
        <p className='font-semibold text-xl'>SARPANCH EXCHANGE</p>
        </div>
        </div>
   

       
{/*       <section 
        className="relative h-screen bg-cover bg-center"
        style={{
    backgroundImage: 'url("ab.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: 'calc(100vh - 50px)', // Subtract navbar height
          marginTop: '50px', // Push content below navbar
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      > */}
{/*         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <h1 className="md:text-6xl sm:text-4xl text-2xl text-white mb-12">SARPANCH EXCHANGE</h1>
          <p className="text-2xl text-white mb-6">WE OFFER BEST & GENUINE EXPERIENCE</p> */}
          {/* <div className="w-24 h-1 bg-white mb-12"></div> */}

{/*         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"> */}
        

{/*            <a href="https://wa.me/917610276666">
          <button className="bg-yellow-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-700 transition-colors duration-300 mt-4 flex items-center mx-auto">
            WHATSAPP
      // </section>
          </button>
          </a> */}
{/*         </div> */}
  <section 
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("ab.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: 'calc(100vh + 200px)', // Subtract navbar height
          marginTop: '50px', // Push content below navbar
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Add your hero content here if needed */}
      </section>
      {/* About Section */}
      <section className="py-20 bg-[#fff5e6]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">About Sarpanch Exchange</h2>
          <p className="text-lg mb-12 max-w-4xl mx-auto">
            Sarpanch Exchange is your trusted ID provider. We specialize in all types of sports and gaming IDs, offering a seamless experience for online cricket and various gaming platforms. Join our community of over 100k satisfied players.
          </p>
          <a href="https://wa.me/917610276666">
          <button className="bg-yellow-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-700 transition-colors duration-300 mt-12 flex items-center mx-auto">
            WHATSAPP
          </button>
          </a>
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
           <a href="https://wa.me/917610276666">
          <button className="bg-yellow-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-700 transition-colors duration-300 mt-12 flex items-center mx-auto">
            WHATSAPP
          </button>
          </a>
          {/* <div className="flex justify-center mt-12">
            <RefreshCw className="w-12 h-12 text-yellow-600" />
          </div> */}
        </div>
      </section>
    {/* About Section */}
   
      <section className="py-24 px-4 bg-[#fff5e6]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
                What We Provide You
                <div className="absolute -top-6 -right-6">
                  <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
                </div>
              </h1>
            </div>
            <p className="text-gray-600 text-lg mt-4">
              Premium Exchange Services at Your Fingertips
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 mb-16 max-w-3xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.name}

                className="transform transition-all duration-300 hover:scale-[1.02] block"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <ArrowRight className="w-6 h-6 text-green-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Button */}
          <div className="text-center">
            <a
              href="https://wa.me/917610276666"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-[#25D366] text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-[#1ea952] transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-lg hover:shadow-xl">
                <Phone className="w-6 h-6" />
                WHATSAPP
              </button>
            </a>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-8 right-8">
          <a
            href="https://wa.me/917610276666"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <Phone className="w-6 h-6" />
          </a>
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
           <a href="https://t.me/Sarpanchexch">
           <button className="bg-yellow-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-700 transition-colors duration-300 mt-12 flex items-center mx-auto">
        GET YOUR ID NOW
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
