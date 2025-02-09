import React, { useState } from 'react';

const SubmitTestimony = () => {
  const [useLinkedInPicture, setUseLinkedInPicture] = useState(false);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Submit Your Testimony</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Share your experience with our data and AI solutions
          </p>
        </div>
        <form 
          name="submit-testimony" 
          method="POST" 
          data-netlify="true"
          className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md"
        >
          <input type="hidden" name="form-name" value="submit-testimony" />
          <div className="mb-4">
            <label className="block text-slate-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full px-4 py-2 border rounded-lg text-slate-700 focus:outline-none focus:border-primary" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-slate-700 font-semibold mb-2" htmlFor="role">
              Role
            </label>
            <input 
              type="text" 
              id="role" 
              name="role" 
              className="w-full px-4 py-2 border rounded-lg text-slate-700 focus:outline-none focus:border-primary" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-slate-700 font-semibold mb-2" htmlFor="content">
              Testimony
            </label>
            <textarea 
              id="content" 
              name="content" 
              rows="4" 
              className="w-full px-4 py-2 border rounded-lg text-slate-700 focus:outline-none focus:border-primary" 
              required 
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-slate-700 font-semibold mb-2" htmlFor="image">
              Upload Picture (optional)
            </label>
            <input 
              type="file" 
              id="image" 
              name="image" 
              className="w-full px-4 py-2 border rounded-lg text-slate-700 focus:outline-none focus:border-primary" 
            />
          </div>
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input 
                type="checkbox" 
                name="useLinkedInPicture" 
                checked={useLinkedInPicture} 
                onChange={(e) => setUseLinkedInPicture(e.target.checked)} 
                className="form-checkbox text-primary"
              />
              <span className="ml-2 text-slate-700">I consent to use my LinkedIn picture if no picture is uploaded</span>
            </label>
          </div>
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
            >
              Submit Testimony
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubmitTestimony;
