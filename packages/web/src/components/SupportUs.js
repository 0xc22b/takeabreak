import React from 'react';

import imageRight from '../images/grayscale-photo-of-man-lifting-stretching-sitting-on-chair-in-front-of-computer-set.jpg';
import creator from '../images/creator.jpg';

const SupportUs = () => {

  const onGetStartedBtnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Support us</h2>
            <p className="mt-4 text-lg text-gray-500">Take a Break is totally free. If our timers are useful, please support us. We’re committed to maintain, fix bugs, and add more features. Please help us make this website sustainable by supporting us on <a href="https://www.buymeacoffee.com/wit.th" className="text-gray-900 font-medium underline">Buy me a coffee</a>. Thank you.</p>
            <div className="mt-8">
              <div className="flex items-center justify-start">
                <div className="flex-shrink-0">
                  <img className="mx-auto h-10 w-10 rounded-full" src={creator} alt="" />
                </div>
                <div className="text-center ml-4 flex items-center">
                  <div className="text-base font-medium text-gray-900">Wit T.</div>
                  <svg className="mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-gray-500">Creator</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <img className="sm:mx-auto sm:max-w-sm" src={imageRight} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Convinced to take a break regularly?</span>
            <span className="block text-indigo-600">Start using our timers now.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button onClick={onGetStartedBtnClick} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(SupportUs);
