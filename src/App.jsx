import React, { useState } from 'react';


function App() {
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [email, setEmail] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      setReviews([...reviews, review]);
      setReview('');
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-gray-900 to-black text-white p-6 sticky top-0 z-50 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            E-notzz
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition duration-300 font-medium">About</a>
            <a href="#offers" className="hover:text-blue-400 transition duration-300 font-medium">Offers</a>
            <a href="#reviews" className="hover:text-blue-400 transition duration-300 font-medium">Reviews</a>
            <a href="#contact" className="hover:text-blue-400 transition duration-300 font-medium">Contact</a>
          </div>
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 mix-blend-overlay"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">E-notzz</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Smart Tech. Real Results. No Fluff.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#offers" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Products
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              About Us
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-600"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              E-notzz is revolutionizing digital interaction with cutting-edge technology solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                We envision a world where technology seamlessly enhances human potential without unnecessary complexity.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                To create sleek, smart, and scalable tools that empower creators and businesses to achieve more with less effort.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl h-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-md transform transition hover:scale-105">
                    <div className="text-blue-500 text-3xl mb-3">🚀</div>
                    <h4 className="font-bold mb-2">Innovation</h4>
                    <p className="text-sm text-gray-600">Pushing boundaries with every release</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md transform transition hover:scale-105">
                    <div className="text-purple-500 text-3xl mb-3">💡</div>
                    <h4 className="font-bold mb-2">Simplicity</h4>
                    <p className="text-sm text-gray-600">Complex tech made accessible</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md transform transition hover:scale-105">
                    <div className="text-blue-500 text-3xl mb-3">🛡️</div>
                    <h4 className="font-bold mb-2">Security</h4>
                    <p className="text-sm text-gray-600">Your data is always protected</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md transform transition hover:scale-105">
                    <div className="text-purple-500 text-3xl mb-3">🌐</div>
                    <h4 className="font-bold mb-2">Global</h4>
                    <p className="text-sm text-gray-600">Solutions for everyone, everywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful solutions designed to transform your digital experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl border-t-4 border-blue-500">
              <div className="text-blue-500 text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">Smart Automation</h3>
              <p className="text-gray-600 mb-6">
                Streamline your workflows with our intelligent automation tools that learn and adapt to your needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span> Task automation
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span> Workflow optimization
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span> AI-powered suggestions
                </li>
              </ul>
              <button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100 py-2 rounded-lg font-medium transition">
                Learn More
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl border-t-4 border-purple-500">
              <div className="text-purple-500 text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">AI Productivity</h3>
              <p className="text-gray-600 mb-6">
                Enhance your productivity with our suite of AI-powered applications that work smarter, not harder.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">✓</span> Smart scheduling
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">✓</span> Content generation
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">✓</span> Data analysis
                </li>
              </ul>
              <button className="w-full bg-purple-50 text-purple-600 hover:bg-purple-100 py-2 rounded-lg font-medium transition">
                Learn More
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl border-t-4 border-indigo-500">
              <div className="text-indigo-500 text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
              <p className="text-gray-600 mb-6">
                Tailored technology solutions designed specifically for your business needs and growth.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">✓</span> Bespoke development
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">✓</span> Scalable architecture
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">✓</span> Ongoing support
                </li>
              </ul>
              <button className="w-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 py-2 rounded-lg font-medium transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">10K+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">50+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our community
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <form onSubmit={handleReviewSubmit} className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Share Your Experience</h3>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="How has E-notzz helped you?..."
                className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="4"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Submit Review
              </button>
            </form>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.length > 0 ? (
              reviews.map((r, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {r.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-3">
                      <div className="font-bold">Anonymous User</div>
                      <div className="text-gray-500 text-sm">Just now</div>
                    </div>
                  </div>
                  <p className="text-gray-700">"{r}"</p>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <div className="text-gray-400 mb-4">No reviews yet. Be the first to share your thoughts!</div>
              </div>
            )}
            
            {/* Sample reviews for demo purposes */}
            {reviews.length === 0 && (
              <>
                <div className="bg-gray-50 p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">S</div>
                    <div className="ml-3">
                      <div className="font-bold">Sarah K.</div>
                      <div className="text-gray-500 text-sm">2 days ago</div>
                    </div>
                  </div>
                  <p className="text-gray-700">"E-notzz has completely transformed how I manage my projects. The automation tools save me hours every week!"</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 text-indigo-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">M</div>
                    <div className="ml-3">
                      <div className="font-bold">Michael T.</div>
                      <div className="text-gray-500 text-sm">1 week ago</div>
                    </div>
                  </div>
                  <p className="text-gray-700">"The AI features are incredibly accurate and have helped our team make better data-driven decisions."</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">A</div>
                    <div className="ml-3">
                      <div className="font-bold">Aisha L.</div>
                      <div className="text-gray-500 text-sm">3 weeks ago</div>
                    </div>
                  </div>
                  <p className="text-gray-700">"Customer support is exceptional. They helped us customize the solution to our exact needs."</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest product updates, news, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions? We're here to help!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-400 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-400 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-gray-400">support@e-notzz.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-400 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Office</h4>
                    <p className="text-gray-400">123 Tech Street, Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form
                action="https://formspree.io/f/xzzgbkzz"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    required 
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="How can we help you?" 
                    rows="4" 
                    required 
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">E-notzz</h3>
              <p className="text-gray-400">
                Smart Tech. Real Results. No Fluff.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#offers" className="text-gray-400 hover:text-white transition">Our Products</a></li>
                <li><a href="#reviews" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition text-2xl">
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition text-2xl">
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition text-2xl">
                  <span className="sr-only">Instagram</span>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition text-2xl">
                  <span className="sr-only">LinkedIn</span>
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            &copy; {new Date().getFullYear()} E-notzz. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;