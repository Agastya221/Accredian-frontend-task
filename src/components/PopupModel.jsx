import { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Set the app element for accessibility
Modal.setAppElement('#root');

const ReferralForm = ({ modalIsOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    referralName: '',
    referralEmail: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/referral', formData);
      console.log('Referral submitted:', response.data);
      setFormData({
        userName: '',
        userEmail: '',
        referralName: '',
        referralEmail: ''
      });
      setSuccessMessage('Referral has been sent successfully!');
      setErrorMessage('');
      setTimeout(() => {
        setSuccessMessage('');
        closeModal();
      }, 3000);
    } catch (error) {
      console.error('Error submitting referral:', error);
      setErrorMessage('Failed to send referral. Please try again later.');
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false} // Disable closing on overlay click
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(4px)'
        },
        content: {
          color: '#000',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '500px',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          backgroundColor: '#ffffff'
        }
      }}
    >
      <button
        onClick={closeModal}
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: '#f0f0f0',
          border: 'none',
          borderRadius: '50%',
          padding: '8px',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e0e0e0')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
      >
        <FontAwesomeIcon icon={faTimes} size="lg" color="#007bff" />
      </button>
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Refer Someone</h2>
      {successMessage && <p className="text-green-500 mb-4 text-center text-lg">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 mb-4 text-center text-lg">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Your Name</label>
          <input
            type="text"
            name="userName"
            value={formData.referName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Your Email</label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Referral Name</label>
          <input
            type="text"
            name="referralName"
            value={formData.referralName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder="Enter the referral's name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Referral Email</label>
          <input
            type="email"
            name="referralEmail"
            value={formData.referralEmail}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder="Enter the referral's email"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

ReferralForm.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default ReferralForm;
