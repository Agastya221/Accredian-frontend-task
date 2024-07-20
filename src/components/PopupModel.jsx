import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons'; 
import debounce from 'lodash.debounce';

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
  const [isModalVisible, setIsModalVisible] = useState(modalIsOpen);
  const [isSubmitting, setIsSubmitting] = useState(false);  

  useEffect(() => {
    if (modalIsOpen) {
      setIsModalVisible(true);
    } else {
    
      const timer = setTimeout(() => setIsModalVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [modalIsOpen]);

  useEffect(() => {
    if (modalIsOpen) {
      setFormData({
        userName: '',
        userEmail: '',
        referralName: '',
        referralEmail: ''
      });
      setSuccessMessage('');
      setErrorMessage('');
    }
  }, [modalIsOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Debounced function
  const submitReferral = debounce(async (formData) => {
    setIsSubmitting(true);  
    try {
      await axios.post('http://localhost:3000/api/referral', formData);
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
    } finally {
      setIsSubmitting(false);  
    }
  }, 2000, [closeModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitReferral(formData);
  };

  return (
    <Modal
      isOpen={isModalVisible} 
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      className={`fixed inset-0 flex items-center justify-center p-4 bg-opacity-50 bg-gray-300 backdrop-blur transition-opacity duration-300 ${modalIsOpen ? 'animate-modalFadeIn' : 'animate-modalFadeOut'}`}
      overlayClassName={`fixed inset-0 bg-transparent transition-opacity duration-300 ${modalIsOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full p-6 mx-4 md:mx-auto transform scale-95 transition-transform duration-300 ease-in-out">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 rounded-full p-2 transition duration-300"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" color="#007bff" />
        </button>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-600">Refer Someone</h2>
        {successMessage && <p className="text-green-500 mb-4 text-center text-lg">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mb-4 text-center text-lg">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Your Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3  border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out "  
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out "
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out "
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out "  
              placeholder="Enter the referral's email"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting} 
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
          >
            {isSubmitting ? (
              <FontAwesomeIcon icon={faSpinner} spin size="lg" className="mr-2" />  
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </Modal>
  );
};

ReferralForm.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default ReferralForm;
