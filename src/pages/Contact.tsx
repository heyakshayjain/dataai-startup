
import Header from "@/components/Header";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-primary mb-4">Get in Touch</h1>
                <p className="text-text/80 text-lg">
                  Ready to transform your business with AI and data analytics? We're here to help you get started.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-text">Email</h3>
                    <p className="text-text/80">contact@dalphoai.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-text">Phone</h3>
                    <p className="text-text/80">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-text">Location</h3>
                    <p className="text-text/80">123 Innovation Drive<br />Tech Valley, CA 94043</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
                <h3 className="font-semibold text-lg text-text mb-2">Office Hours</h3>
                <div className="space-y-2 text-text/80">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Static Contact Form */}
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />


                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition duration-200"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition duration-200 resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
