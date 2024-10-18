import React from 'react'
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { FaGavel, FaEdit, FaUserShield, FaLock, FaExclamationTriangle, FaGlobe, FaEnvelope } from 'react-icons/fa';



const TnC = () => {
  const navigate = useNavigate();
  function handleBack() {
    navigate('/');
  }

  return (
    <div className=" p-12 bg-[radial-gradient(100%_80%_at_top,#00365d_0%,#080b16_30%)]">
      <div className='flex justify-end'>
      <button onClick={handleBack} className='text-white px-5 font-bold'>
      <IoClose fontSize="1.725rem" fontWeight={700}  />
        </button>
      </div>
      <h1 className="text-4xl font-bold text-center text-white mb-6">Terms and Conditions</h1>
      <p className="text-sm text-gray-200 text-center mb-8">Last updated: October 17, 2024</p>
      

      <div class="max-w-4xl mx-auto p-8 shadow-lg mt-10">

        <section className="mb-10">
          <div className="flex items-center mb-4">
            <FaGavel className="text-xl text-white mr-2" />
            <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
          </div>
          <p className="text-lg text-gray-200">
            By accessing and using our website, you accept and agree to be bound by the terms and conditions of this
            agreement. If you do not agree with any part of these terms, you must not use our services.
          </p>
        </section>

        <section className="mb-10">
          <div className="flex items-center mb-4">
            <FaEdit className="text-xl text-white mr-2" />
            <h2 className="text-2xl font-semibold text-white">2. Modifications to Terms</h2>
          </div>
          <p className="text-lg text-gray-200">
            We reserve the right to modify these terms at any time. Any changes will be effective immediately upon
            posting to our website. It is your responsibility to review these terms periodically.
          </p>
        </section>

        <section className="mb-10">
          <div className="flex items-center mb-4">
            <FaUserShield className="text-xl text-white mr-2" />
            <h2 className="text-2xl font-semibold text-white">3. User Responsibilities</h2>
          </div>
          <p className="text-lg text-gray-200">
            You agree to use our website and services only for lawful purposes and in a manner that does not infringe the
            rights of, restrict, or inhibit the use and enjoyment of the website by any third party.
          </p>
        </section>

        <section className="mb-10">
          <div className="flex items-center mb-4">
            <FaLock className="text-xl text-white mr-2" />
            <h2 className="text-2xl font-semibold text-white">4. Privacy Policy</h2>
          </div>
          <p className="text-lg text-gray-200">
            Your privacy is important to us. Please review our{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{' '}
            for information on how we collect, use, and share your personal data.
          </p>
        </section>

        <section className="mb-10">
          <div className="flex items-center mb-4">
            <FaExclamationTriangle className="text-xl text-white mr-2" />
            <h2 className="text-2xl font-semibold text-white">5. Limitation of Liability</h2>
          </div>
          <p className="text-lg text-gray-200">
            We are not responsible for any direct, indirect, incidental, or consequential damages arising from your use of
            our website or services. Your use is at your own risk.
          </p>
        </section>

        <section className="mb-10">
          <div className="flex items-center mb-4">
            <FaGlobe className="text-xl text-white mr-2" />
            <h2 className="text-2xl font-semibold text-white">6. Governing Law</h2>
          </div>
          <p className="text-lg text-gray-200">
            These terms and conditions are governed by and construed in accordance with the laws of [Your Country], and
            you agree to submit to the exclusive jurisdiction of the courts located within [Your Country].
          </p>
        </section>

        <section className="mb-10">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-xl text-white mr-2" />
            <h2 className="text-2xl font-semibold text-white">7. Contact Us</h2>
          </div>
          <p className="text-lg text-gray-200">
            If you have any questions about these Terms and Conditions, please contact us at{' '}
            <a href="mailto:support@gmail.com" className="text-blue-600 hover:underline">
              support@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TnC;