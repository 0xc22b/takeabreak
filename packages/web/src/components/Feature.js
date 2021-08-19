import React from 'react';

import imageMain1 from '../images/blog-woman-drinking-hot-tea-in-her-home-office.jpg';
import imageBottom1 from '../images/logo-bbc.svg';
import imageMain2 from '../images/blog-wellbeingthesis.jpg';
import imageBottom2 from '../images/logo-wellbeingthesis.png';
import imageMain3 from '../images/blog-pomodoro.jpg';
import imageBottom3 from '../images/logo-wikipedia.svg';

const Feature = () => {

  return (
    <React.Fragment>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Why it is important to take regular breaks</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Taking frequent breaks is not only beneficial for your physical health, but also for your mental health.</p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={imageMain1} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">Article</p>
                  <a href="https://www.bbc.com/worklife/article/20190312-the-tiny-breaks-that-ease-your-body-and-reboot-your-brain" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">The tiny breaks that ease your body and reboot your brain</p>
                    <p className="mt-3 text-base text-gray-500">If you don't have time for an hour-long break in your workday, a series of 'microbreaks' can also have a powerful effect on your body and your mind.</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="https://www.bbc.com/worklife" className="h-10 flex items-center">
                      <span className="sr-only">BBC Worklife</span>
                      <img className="w-10" src={imageBottom1} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="https://www.bbc.com/worklife" className="hover:underline">BBC Worklife</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2019-03-13">Mar 13, 2019</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={imageMain2} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">Research</p>
                  <a href="https://thewellbeingthesis.org.uk/foundations-for-success/importance-of-taking-breaks-and-having-other-interests" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">The Importance of Taking Breaks</p>
                    <p className="mt-3 text-base text-gray-500">Research has found that taking a break can be very beneficial for you and your work. Micro-breaks, lunchtime breaks and longer breaks, have all been shown to have a positive relationship with wellbeing and productivity.</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="https://thewellbeingthesis.org.uk">
                      <span className="sr-only">The Wellbeing Thesis</span>
                      <img className="h-10 w-10" src={imageBottom2} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="https://thewellbeingthesis.org.uk" className="hover:underline">The Wellbeing Thesis</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2020-01-14">Jan 14, 2020</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>3 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={imageMain3} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">Technique</p>
                  <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">Pomodoro Technique</p>
                    <p className="mt-3 text-base text-gray-500">The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="https://en.wikipedia.org">
                      <span className="sr-only">Wikipedia</span>
                      <img className="h-10 w-10" src={imageBottom3} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="https://en.wikipedia.org" className="hover:underline">Wikipedia</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2021-08-01">Aug 01, 2021</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>2 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-700">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Everything you need</h2>
          <p className="mt-4 max-w-3xl text-lg text-indigo-200">Our timers have all features needed to help remind you to take a break and are fully customizable to suit your perference.</p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            <div>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                      <path d="M21.8968 2.10332C21.4467 1.65339 20.8364 1.40063 20.2 1.40063C19.5636 1.40063 18.9533 1.65339 18.5032 2.10332L9.4 11.2065V14.6001H12.7936L21.8968 5.49692C22.3467 5.04686 22.5995 4.43652 22.5995 3.80012C22.5995 3.16373 22.3467 2.55339 21.8968 2.10332Z" fill="white" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.4 6.20005C3.4 5.56353 3.65286 4.95308 4.10295 4.50299C4.55303 4.05291 5.16348 3.80005 5.8 3.80005H10.6C10.9183 3.80005 11.2235 3.92648 11.4485 4.15152C11.6736 4.37656 11.8 4.68179 11.8 5.00005C11.8 5.31831 11.6736 5.62353 11.4485 5.84858C11.2235 6.07362 10.9183 6.20005 10.6 6.20005H5.8V18.2H17.8V13.4C17.8 13.0818 17.9264 12.7766 18.1515 12.5515C18.3765 12.3265 18.6817 12.2 19 12.2C19.3183 12.2 19.6235 12.3265 19.8485 12.5515C20.0736 12.7766 20.2 13.0818 20.2 13.4V18.2C20.2 18.8366 19.9471 19.447 19.4971 19.8971C19.047 20.3472 18.4365 20.6 17.8 20.6H5.8C5.16348 20.6 4.55303 20.3472 4.10295 19.8971C3.65286 19.447 3.4 18.8366 3.4 18.2V6.20005Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">Reminder message</h3>
                <p className="mt-2 text-base text-indigo-200">Each reminder can display any message. And each reminder message can be specified how long to display on your screen.</p>
              </div>
            </div>
            <div>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.6 3.59991C21.5999 3.42244 21.5604 3.2472 21.4844 3.08683C21.4084 2.92645 21.2978 2.78492 21.1606 2.67244C21.0233 2.55996 20.8628 2.47933 20.6906 2.43635C20.5184 2.39337 20.3388 2.38913 20.1648 2.42391L8.16479 4.82391C7.89286 4.87826 7.64815 5.02512 7.47226 5.23951C7.29637 5.45391 7.20016 5.7226 7.19999 5.99991V16.9367C6.8066 16.845 6.40393 16.7991 5.99999 16.7999C4.01159 16.7999 2.39999 17.8739 2.39999 19.1999C2.39999 20.5259 4.01159 21.5999 5.99999 21.5999C7.98839 21.5999 9.59999 20.5259 9.59999 19.1999V9.38391L19.2 7.46391V14.5367C18.8066 14.445 18.4039 14.3991 18 14.3999C16.0116 14.3999 14.4 15.4739 14.4 16.7999C14.4 18.1259 16.0116 19.1999 18 19.1999C19.9884 19.1999 21.6 18.1259 21.6 16.7999V3.59991Z" fill="white" />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">Reminder sound</h3>
                <p className="mt-2 text-base text-indigo-200">Each reminder can play any sound. And each reminder sound can be specified how many times to be played.</p>
              </div>
            </div>
            <div>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.44844 2.7514C4.22211 2.53282 3.91899 2.41186 3.60435 2.4146C3.28972 2.41733 2.98874 2.54353 2.76625 2.76602C2.54376 2.98851 2.41756 3.28949 2.41483 3.60412C2.41209 3.91876 2.53305 4.22188 2.75164 4.4482L11.0568 12.7546C11.1168 12.829 11.1828 12.8962 11.2584 12.955L19.5504 21.2482C19.6618 21.3597 19.7941 21.4482 19.9397 21.5085C20.0853 21.5689 20.2414 21.6 20.399 21.6C20.5566 21.6001 20.7127 21.5691 20.8584 21.5088C21.004 21.4486 21.1363 21.3602 21.2478 21.2488C21.3593 21.1374 21.4478 21.0051 21.5082 20.8595C21.5685 20.7139 21.5996 20.5578 21.5997 20.4002C21.5997 20.2426 21.5687 20.0865 21.5085 19.9409C21.4482 19.7952 21.3599 19.6629 21.2484 19.5514L20.4384 18.7414C22.0965 16.6656 22.9313 14.0517 22.7834 11.3991C22.6356 8.74659 21.5153 6.2416 19.6368 4.363C19.5261 4.24839 19.3937 4.15697 19.2473 4.09408C19.1009 4.03119 18.9435 3.99809 18.7841 3.9967C18.6248 3.99532 18.4668 4.02568 18.3193 4.08602C18.1718 4.14636 18.0378 4.23546 17.9252 4.34813C17.8125 4.4608 17.7234 4.59478 17.663 4.74226C17.6027 4.88974 17.5724 5.04775 17.5737 5.20709C17.5751 5.36642 17.6082 5.52389 17.6711 5.67029C17.734 5.8167 17.8254 5.94911 17.94 6.05981C19.3684 7.48835 20.2343 9.3837 20.3791 11.3987C20.5239 13.4136 19.9379 15.4133 18.7284 17.0314L17.0064 15.3094C17.769 14.1553 18.1095 12.7733 17.9704 11.397C17.8314 10.0208 17.2212 8.73482 16.2432 7.75661C16.0179 7.53128 15.7123 7.40469 15.3936 7.40469C15.075 7.40469 14.7694 7.53128 14.544 7.75661C14.3187 7.98193 14.1921 8.28754 14.1921 8.60621C14.1921 8.92487 14.3187 9.23048 14.544 9.45581C15.6528 10.5634 15.888 12.2158 15.2484 13.5538L12.858 11.1634C12.8509 11.1561 12.8437 11.1489 12.8364 11.1418L4.44844 2.7526V2.7514ZM3.88564 9.82421C3.96775 9.51661 3.9243 9.18899 3.76486 8.91342C3.60542 8.63786 3.34303 8.43692 3.03544 8.35481C2.72784 8.27269 2.40022 8.31614 2.12465 8.47558C1.84909 8.63503 1.64815 8.89741 1.56604 9.20501C0.606036 12.805 1.53604 16.8082 4.36324 19.6366C4.47473 19.748 4.60707 19.8364 4.75272 19.8966C4.89836 19.9569 5.05444 19.9879 5.21206 19.9878C5.36968 19.9878 5.52574 19.9567 5.67134 19.8963C5.81694 19.836 5.94922 19.7475 6.06064 19.636C6.17205 19.5245 6.26041 19.3922 6.32068 19.2465C6.38094 19.1009 6.41193 18.9448 6.41188 18.7872C6.41182 18.6296 6.38072 18.4735 6.32035 18.3279C6.25998 18.1823 6.17153 18.05 6.06004 17.9386C5.01693 16.8962 4.26678 15.5974 3.88507 14.1729C3.50336 12.7484 3.50356 11.2486 3.88564 9.82421ZM8.88004 13.7998C8.80502 13.6564 8.70177 13.5296 8.57649 13.4272C8.45122 13.3247 8.30651 13.2486 8.15108 13.2036C7.99565 13.1585 7.8327 13.1453 7.67204 13.1648C7.51137 13.1843 7.35632 13.2361 7.2162 13.3171C7.07608 13.3981 6.9538 13.5066 6.8567 13.6361C6.7596 13.7656 6.68969 13.9133 6.65119 14.0705C6.61269 14.2277 6.60638 14.3911 6.63265 14.5508C6.65891 14.7105 6.71721 14.8632 6.80404 14.9998C7.06084 15.445 7.38004 15.8638 7.75804 16.2418C7.98436 16.4604 8.28748 16.5813 8.60212 16.5786C8.91675 16.5759 9.21773 16.4497 9.44022 16.2272C9.66271 16.0047 9.78891 15.7037 9.79165 15.3891C9.79438 15.0745 9.67343 14.7713 9.45484 14.545C9.22564 14.3158 9.03484 14.065 8.88124 13.7986L8.88004 13.7998Z" fill="white" />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">Work offline</h3>
                <p className="mt-2 text-base text-indigo-200">Internet is needed only the first time visiting our website. After that, our website can work without internet.</p>
              </div>
            </div>
            <div>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.3999C10.0904 2.3999 8.2591 3.15847 6.90883 4.50873C5.55857 5.859 4.8 7.69034 4.8 9.5999V13.9031L3.9516 14.7515C3.78383 14.9193 3.66958 15.1331 3.6233 15.3659C3.57702 15.5986 3.60078 15.8398 3.69159 16.0591C3.78239 16.2783 3.93616 16.4657 4.13345 16.5976C4.33074 16.7294 4.5627 16.7999 4.8 16.7999H19.2C19.4373 16.7999 19.6693 16.7294 19.8666 16.5976C20.0638 16.4657 20.2176 16.2783 20.3084 16.0591C20.3992 15.8398 20.423 15.5986 20.3767 15.3659C20.3304 15.1331 20.2162 14.9193 20.0484 14.7515L19.2 13.9031V9.5999C19.2 7.69034 18.4414 5.859 17.0912 4.50873C15.7409 3.15847 13.9096 2.3999 12 2.3999ZM12 21.5999C11.0452 21.5999 10.1295 21.2206 9.45442 20.5455C8.77929 19.8704 8.4 18.9547 8.4 17.9999H15.6C15.6 18.9547 15.2207 19.8704 14.5456 20.5455C13.8705 21.2206 12.9548 21.5999 12 21.5999Z" fill="white" />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">Number of reminders</h3>
                <p className="mt-2 text-base text-indigo-200">Each timer can have any number of reminders. And each reminder can be specified when to remind.</p>
              </div>
            </div>
            <div>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.24839 12.3517C9.1377 12.2371 9.00528 12.1457 8.85888 12.0828C8.71247 12.0199 8.55501 11.9868 8.39568 11.9854C8.23634 11.984 8.07832 12.0144 7.93085 12.0747C7.78337 12.135 7.64939 12.2242 7.53672 12.3368C7.42405 12.4495 7.33494 12.5835 7.27461 12.731C7.21427 12.8784 7.18391 13.0364 7.18529 13.1958C7.18668 13.3551 7.21978 13.5126 7.28267 13.659C7.34556 13.8054 7.43698 13.9378 7.55159 14.0485L11.1516 17.6485C11.3766 17.8735 11.6818 17.9998 12 17.9998C12.3182 17.9998 12.6234 17.8735 12.8484 17.6485L16.4484 14.0485C16.667 13.8222 16.7879 13.5191 16.7852 13.2044C16.7825 12.8898 16.6563 12.5888 16.4338 12.3663C16.2113 12.1438 15.9103 12.0176 15.5957 12.0149C15.281 12.0122 14.9779 12.1331 14.7516 12.3517L13.2 13.9033V7.2001H19.2C19.8365 7.2001 20.447 7.45295 20.8971 7.90304C21.3471 8.35313 21.6 8.96358 21.6 9.6001V18.0001C21.6 18.6366 21.3471 19.2471 20.8971 19.6972C20.447 20.1472 19.8365 20.4001 19.2 20.4001H4.79999C4.16347 20.4001 3.55302 20.1472 3.10294 19.6972C2.65285 19.2471 2.39999 18.6366 2.39999 18.0001V9.6001C2.39999 8.96358 2.65285 8.35313 3.10294 7.90304C3.55302 7.45295 4.16347 7.2001 4.79999 7.2001H10.8V13.9033L9.24839 12.3517ZM10.8 4.8001C10.8 4.48184 10.9264 4.17661 11.1515 3.95157C11.3765 3.72653 11.6817 3.6001 12 3.6001C12.3183 3.6001 12.6235 3.72653 12.8485 3.95157C13.0736 4.17661 13.2 4.48184 13.2 4.8001V7.2001H10.8V4.8001Z" fill="white" />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">Auto saved</h3>
                <p className="mt-2 text-base text-indigo-200">All changes are automatically saved in your web browser and can be exported/imported to/from a text file.</p>
              </div>
            </div>
            <div>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.00002 2.3999C6.31828 2.3999 6.62351 2.52633 6.84855 2.75137C7.0736 2.97642 7.20002 3.28164 7.20002 3.5999V4.7999H8.40002C8.71828 4.7999 9.02351 4.92633 9.24855 5.15137C9.4736 5.37642 9.60002 5.68164 9.60002 5.9999C9.60002 6.31816 9.4736 6.62339 9.24855 6.84843C9.02351 7.07347 8.71828 7.1999 8.40002 7.1999H7.20002V8.3999C7.20002 8.71816 7.0736 9.02339 6.84855 9.24843C6.62351 9.47347 6.31828 9.5999 6.00002 9.5999C5.68176 9.5999 5.37654 9.47347 5.1515 9.24843C4.92645 9.02339 4.80002 8.71816 4.80002 8.3999V7.1999H3.60002C3.28176 7.1999 2.97654 7.07347 2.7515 6.84843C2.52645 6.62339 2.40002 6.31816 2.40002 5.9999C2.40002 5.68164 2.52645 5.37642 2.7515 5.15137C2.97654 4.92633 3.28176 4.7999 3.60002 4.7999H4.80002V3.5999C4.80002 3.28164 4.92645 2.97642 5.1515 2.75137C5.37654 2.52633 5.68176 2.3999 6.00002 2.3999ZM6.00002 14.3999C6.31828 14.3999 6.62351 14.5263 6.84855 14.7514C7.0736 14.9764 7.20002 15.2816 7.20002 15.5999V16.7999H8.40002C8.71828 16.7999 9.02351 16.9263 9.24855 17.1514C9.4736 17.3764 9.60002 17.6816 9.60002 17.9999C9.60002 18.3182 9.4736 18.6234 9.24855 18.8484C9.02351 19.0735 8.71828 19.1999 8.40002 19.1999H7.20002V20.3999C7.20002 20.7182 7.0736 21.0234 6.84855 21.2484C6.62351 21.4735 6.31828 21.5999 6.00002 21.5999C5.68176 21.5999 5.37654 21.4735 5.1515 21.2484C4.92645 21.0234 4.80002 20.7182 4.80002 20.3999V19.1999H3.60002C3.28176 19.1999 2.97654 19.0735 2.7515 18.8484C2.52645 18.6234 2.40002 18.3182 2.40002 17.9999C2.40002 17.6816 2.52645 17.3764 2.7515 17.1514C2.97654 16.9263 3.28176 16.7999 3.60002 16.7999H4.80002V15.5999C4.80002 15.2816 4.92645 14.9764 5.1515 14.7514C5.37654 14.5263 5.68176 14.3999 6.00002 14.3999ZM14.4 2.3999C14.6649 2.39982 14.9223 2.48734 15.1322 2.64883C15.3421 2.81032 15.4926 3.0367 15.5604 3.2927L16.9752 8.6399L21 10.9607C21.1824 11.066 21.3339 11.2175 21.4392 11.3999C21.5445 11.5823 21.6 11.7893 21.6 11.9999C21.6 12.2105 21.5445 12.4175 21.4392 12.5999C21.3339 12.7823 21.1824 12.9338 21 13.0391L16.9752 15.3611L15.5592 20.7071C15.4913 20.9629 15.3408 21.189 15.131 21.3503C14.9212 21.5116 14.664 21.5991 14.3994 21.5991C14.1348 21.5991 13.8776 21.5116 13.6679 21.3503C13.4581 21.189 13.3075 20.9629 13.2396 20.7071L11.8248 15.3599L7.80002 13.0391C7.61762 12.9338 7.46614 12.7823 7.36083 12.5999C7.25552 12.4175 7.20008 12.2105 7.20008 11.9999C7.20008 11.7893 7.25552 11.5823 7.36083 11.3999C7.46614 11.2175 7.61762 11.066 7.80002 10.9607L11.8248 8.6387L13.2408 3.2927C13.3086 3.0369 13.459 2.81066 13.6686 2.64919C13.8783 2.48772 14.1354 2.40008 14.4 2.3999Z" fill="white" />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">No installation, no sign up</h3>
                <p className="mt-2 text-base text-indigo-200">Our timers which in the first part of our website can be used immediately. No installation and no sign up required.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Feature);
