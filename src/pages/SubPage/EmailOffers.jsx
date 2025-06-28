import { useState } from 'react';

const EmailOffers = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-r from-brandGreen to-green-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {isSubscribed ? (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <svg
              className="w-16 h-16 text-brandGreen mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              You've been successfully subscribed to our offers. Check your inbox for exclusive deals!
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="px-6 py-2 bg-brandGreen text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Subscribe Another Email
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-white mb-4">Get Exclusive Travel Offers</h2>
            <p className="text-lg text-green-100 mb-8">
              Subscribe to our newsletter and receive 10% off your first booking plus special deals
              delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brandGreen"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-white text-brandGreen font-medium rounded-md hover:bg-gray-100 transition-colors disabled:opacity-70 flex items-center justify-center min-w-[150px]"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-brandGreen"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Get Offers'
                )}
              </button>
            </form>
            <p className="text-xs text-green-100 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailOffers;