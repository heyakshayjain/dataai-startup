import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('Sending...'); // Optional: Show sending status
    
    try {
      // You only need this if you want to perform custom API logic. Otherwise, Netlify will handle the form
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form
        name="contact" // This is the name Netlify uses to identify the form
        method="POST"
        data-netlify="true" // Required for Netlify form handling
        onSubmit={handleSubmit}
      >
        {/* Hidden input for Netlify form identification */}
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {/* Display form submission status */}
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
