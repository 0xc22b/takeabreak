import React, { useRef } from 'react';

import { updatePopupUrlHash } from '../actions';
import { TOP_BAR_MENU_POPUP } from '../types/const';

import TimerList from './TimerList';

import logoShort from '../images/logo-short.svg';

const Hero = () => {

  const menuBtn = useRef(null);

  const onMenuBtnClick = () => {
    updatePopupUrlHash(
      TOP_BAR_MENU_POPUP, true, menuBtn.current.getBoundingClientRect()
    );
  };

  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div className="relative h-full">
            <svg className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full" width="404" height="784" fill="none" viewBox="0 0 404 784">
              <defs>
                <pattern id="e229dbec-10e9-49ee-8ec3-0286ca089edf" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
            </svg>
            <svg className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
              <defs>
                <pattern id="d2a68204-c383-44b1-b99f-42ccff4e5365" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
            </svg>
          </div>
        </div>
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between" aria-label="Global">
              <div>
                <span className="sr-only">Take a Break</span>
                <img className="h-8 w-auto sm:h-10" src={logoShort} alt="" />
              </div>
              <div className="-mr-2 flex items-center">
                <button ref={menuBtn} onClick={onMenuBtnClick} type="button" className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Timers to help you</span>
                <span className="block text-indigo-600">Take a Break</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Our timers help remind you to take a break because regular breaks are good for you. Get started by clicking ‘Start’ button below.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1"></div>
            <div className="flex-1 w-full bg-gray-800"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <TimerList />
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">Everything you need</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-1 flex justify-start sm:justify-center">
              <div className="w-auto sm:w-60 lg:w-auto">
                <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4.79998C6 4.48172 5.87357 4.17649 5.64853 3.95145C5.42349 3.7264 5.11826 3.59998 4.8 3.59998C4.48174 3.59998 4.17652 3.7264 3.95147 3.95145C3.72643 4.17649 3.6 4.48172 3.6 4.79998V13.5216C3.23519 13.7322 2.93224 14.0352 2.72162 14.4C2.51099 14.7649 2.40011 15.1787 2.40011 15.6C2.40011 16.0212 2.51099 16.4351 2.72162 16.7999C2.93224 17.1648 3.23519 17.4677 3.6 17.6784V19.2C3.6 19.5182 3.72643 19.8235 3.95147 20.0485C4.17652 20.2735 4.48174 20.4 4.8 20.4C5.11826 20.4 5.42349 20.2735 5.64853 20.0485C5.87357 19.8235 6 19.5182 6 19.2V17.6784C6.36482 17.4677 6.66776 17.1648 6.87839 16.7999C7.08901 16.4351 7.1999 16.0212 7.1999 15.6C7.1999 15.1787 7.08901 14.7649 6.87839 14.4C6.66776 14.0352 6.36482 13.7322 6 13.5216V4.79998ZM13.2 4.79998C13.2 4.48172 13.0736 4.17649 12.8485 3.95145C12.6235 3.7264 12.3183 3.59998 12 3.59998C11.6817 3.59998 11.3765 3.7264 11.1515 3.95145C10.9264 4.17649 10.8 4.48172 10.8 4.79998V6.32158C10.4352 6.53223 10.1322 6.83519 9.92162 7.20003C9.71099 7.56486 9.60011 7.97871 9.60011 8.39998C9.60011 8.82124 9.71099 9.23509 9.92162 9.59992C10.1322 9.96476 10.4352 10.2677 10.8 10.4784V19.2C10.8 19.5182 10.9264 19.8235 11.1515 20.0485C11.3765 20.2735 11.6817 20.4 12 20.4C12.3183 20.4 12.6235 20.2735 12.8485 20.0485C13.0736 19.8235 13.2 19.5182 13.2 19.2V10.4784C13.5648 10.2677 13.8678 9.96476 14.0784 9.59992C14.289 9.23509 14.3999 8.82124 14.3999 8.39998C14.3999 7.97871 14.289 7.56486 14.0784 7.20003C13.8678 6.83519 13.5648 6.53223 13.2 6.32158V4.79998ZM19.2 3.59998C19.5183 3.59998 19.8235 3.7264 20.0485 3.95145C20.2736 4.17649 20.4 4.48172 20.4 4.79998V13.5216C20.7648 13.7322 21.0678 14.0352 21.2784 14.4C21.489 14.7649 21.5999 15.1787 21.5999 15.6C21.5999 16.0212 21.489 16.4351 21.2784 16.7999C21.0678 17.1648 20.7648 17.4677 20.4 17.6784V19.2C20.4 19.5182 20.2736 19.8235 20.0485 20.0485C19.8235 20.2735 19.5183 20.4 19.2 20.4C18.8817 20.4 18.5765 20.2735 18.3515 20.0485C18.1264 19.8235 18 19.5182 18 19.2V17.6784C17.6352 17.4677 17.3322 17.1648 17.1216 16.7999C16.911 16.4351 16.8001 16.0212 16.8001 15.6C16.8001 15.1787 16.911 14.7649 17.1216 14.4C17.3322 14.0352 17.6352 13.7322 18 13.5216V4.79998C18 4.48172 18.1264 4.17649 18.3515 3.95145C18.5765 3.7264 18.8817 3.59998 19.2 3.59998Z" />
                </svg>
                <p className="text-sm text-gray-400 font-medium mt-1">Timers are fully customizable</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-start sm:justify-center">
              <div className="w-auto sm:w-60 lg:w-auto">
                <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.24839 12.3516C9.1377 12.237 9.00528 12.1455 8.85888 12.0827C8.71247 12.0198 8.55501 11.9867 8.39568 11.9853C8.23634 11.9839 8.07832 12.0143 7.93085 12.0746C7.78337 12.1349 7.64939 12.224 7.53672 12.3367C7.42405 12.4494 7.33494 12.5834 7.27461 12.7308C7.21427 12.8783 7.18391 13.0363 7.18529 13.1957C7.18668 13.355 7.21978 13.5125 7.28267 13.6589C7.34556 13.8053 7.43698 13.9377 7.55159 14.0484L11.1516 17.6484C11.3766 17.8733 11.6818 17.9997 12 17.9997C12.3182 17.9997 12.6234 17.8733 12.8484 17.6484L16.4484 14.0484C16.667 13.8221 16.7879 13.5189 16.7852 13.2043C16.7825 12.8897 16.6563 12.5887 16.4338 12.3662C16.2113 12.1437 15.9103 12.0175 15.5957 12.0148C15.281 12.012 14.9779 12.133 14.7516 12.3516L13.2 13.9032V7.19998H19.2C19.8365 7.19998 20.447 7.45283 20.8971 7.90292C21.3471 8.35301 21.6 8.96346 21.6 9.59998V18C21.6 18.6365 21.3471 19.2469 20.8971 19.697C20.447 20.1471 19.8365 20.4 19.2 20.4H4.79999C4.16347 20.4 3.55302 20.1471 3.10294 19.697C2.65285 19.2469 2.39999 18.6365 2.39999 18V9.59998C2.39999 8.96346 2.65285 8.35301 3.10294 7.90292C3.55302 7.45283 4.16347 7.19998 4.79999 7.19998H10.8V13.9032L9.24839 12.3516ZM10.8 4.79998C10.8 4.48172 10.9264 4.17649 11.1515 3.95145C11.3765 3.7264 11.6817 3.59998 12 3.59998C12.3183 3.59998 12.6235 3.7264 12.8485 3.95145C13.0736 4.17649 13.2 4.48172 13.2 4.79998V7.19998H10.8V4.79998Z" />
                </svg>
                <p className="text-sm text-gray-400 font-medium mt-1">All changes are automatically saved</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-start sm:justify-center">
              <div className="w-auto sm:w-60 lg:w-auto">
                <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.44844 2.75159C4.22211 2.533 3.91899 2.41205 3.60435 2.41478C3.28972 2.41751 2.98874 2.54372 2.76625 2.76621C2.54376 2.9887 2.41756 3.28967 2.41483 3.60431C2.41209 3.91894 2.53305 4.22207 2.75164 4.44839L11.0568 12.7548C11.1168 12.8292 11.1828 12.8964 11.2584 12.9552L19.5504 21.2484C19.6618 21.3599 19.7941 21.4483 19.9397 21.5087C20.0853 21.5691 20.2414 21.6002 20.399 21.6002C20.5566 21.6003 20.7127 21.5693 20.8584 21.509C21.004 21.4488 21.1363 21.3604 21.2478 21.249C21.3593 21.1376 21.4478 21.0053 21.5082 20.8597C21.5685 20.7141 21.5996 20.558 21.5997 20.4004C21.5997 20.2428 21.5687 20.0867 21.5085 19.9411C21.4482 19.7954 21.3599 19.6631 21.2484 19.5516L20.4384 18.7416C22.0965 16.6658 22.9313 14.0518 22.7834 11.3993C22.6356 8.74678 21.5153 6.24178 19.6368 4.36319C19.5261 4.24858 19.3937 4.15716 19.2473 4.09427C19.1009 4.03138 18.9435 3.99827 18.7841 3.99689C18.6248 3.9955 18.4668 4.02586 18.3193 4.0862C18.1718 4.14654 18.0378 4.23564 17.9252 4.34831C17.8125 4.46099 17.7234 4.59497 17.663 4.74244C17.6027 4.88992 17.5724 5.04793 17.5737 5.20727C17.5751 5.36661 17.6082 5.52407 17.6711 5.67047C17.734 5.81688 17.8254 5.94929 17.94 6.05999C19.3684 7.48853 20.2343 9.38388 20.3791 11.3988C20.5239 13.4138 19.9379 15.4135 18.7284 17.0316L17.0064 15.3096C17.769 14.1555 18.1095 12.7735 17.9704 11.3972C17.8314 10.021 17.2212 8.735 16.2432 7.75679C16.0179 7.53146 15.7123 7.40487 15.3936 7.40487C15.075 7.40487 14.7694 7.53146 14.544 7.75679C14.3187 7.98212 14.1921 8.28773 14.1921 8.60639C14.1921 8.92505 14.3187 9.23066 14.544 9.45599C15.6528 10.5636 15.888 12.216 15.2484 13.554L12.858 11.1636C12.8509 11.1563 12.8437 11.1491 12.8364 11.142L4.44844 2.75279V2.75159ZM3.88564 9.82439C3.96775 9.51679 3.9243 9.18917 3.76486 8.91361C3.60542 8.63804 3.34303 8.4371 3.03544 8.35499C2.72784 8.27288 2.40022 8.31632 2.12465 8.47577C1.84909 8.63521 1.64815 8.89759 1.56604 9.20519C0.606036 12.8052 1.53604 16.8084 4.36324 19.6368C4.47473 19.7482 4.60707 19.8366 4.75272 19.8968C4.89836 19.9571 5.05444 19.9881 5.21206 19.988C5.36968 19.988 5.52574 19.9569 5.67134 19.8965C5.81694 19.8361 5.94922 19.7477 6.06064 19.6362C6.17205 19.5247 6.26041 19.3924 6.32068 19.2467C6.38094 19.1011 6.41193 18.945 6.41188 18.7874C6.41182 18.6297 6.38072 18.4737 6.32035 18.3281C6.25998 18.1825 6.17153 18.0502 6.06004 17.9388C5.01693 16.8963 4.26678 15.5975 3.88507 14.1731C3.50336 12.7486 3.50356 11.2487 3.88564 9.82439ZM8.88004 13.8C8.80502 13.6566 8.70177 13.5298 8.57649 13.4274C8.45122 13.3249 8.30651 13.2488 8.15108 13.2037C7.99565 13.1586 7.8327 13.1455 7.67204 13.165C7.51137 13.1845 7.35632 13.2363 7.2162 13.3173C7.07608 13.3983 6.9538 13.5068 6.8567 13.6363C6.7596 13.7657 6.68969 13.9135 6.65119 14.0707C6.61269 14.2279 6.60638 14.3913 6.63265 14.551C6.65891 14.7107 6.71721 14.8634 6.80404 15C7.06084 15.4452 7.38004 15.864 7.75804 16.242C7.98436 16.4606 8.28748 16.5815 8.60212 16.5788C8.91675 16.5761 9.21773 16.4499 9.44022 16.2274C9.66271 16.0049 9.78891 15.7039 9.79165 15.3893C9.79438 15.0746 9.67343 14.7715 9.45484 14.5452C9.22564 14.316 9.03484 14.0652 8.88124 13.7988L8.88004 13.8Z" />
                </svg>
                <p className="text-sm text-gray-400 font-medium mt-1">Work offline, no internet needed</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-start sm:justify-center">
              <div className="w-auto sm:w-60 lg:w-auto">
                <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.59922 5.99876C6.07339 5.95556 9.4138 4.65292 12 2.33276C14.5861 4.65335 17.9265 5.95643 21.4008 5.99996C21.5328 6.77996 21.6 7.58396 21.6 8.40116C21.6 14.6712 17.592 20.0052 12 21.9816C6.40802 20.004 2.40002 14.67 2.40002 8.39996C2.40002 7.58156 2.46842 6.77996 2.59922 5.99876ZM16.4484 10.4484C16.667 10.222 16.788 9.91892 16.7852 9.60428C16.7825 9.28965 16.6563 8.98867 16.4338 8.76618C16.2113 8.54369 15.9103 8.41749 15.5957 8.41476C15.2811 8.41202 14.9779 8.53297 14.7516 8.75156L10.8 12.7032L9.24842 11.1516C9.0221 10.933 8.71898 10.812 8.40434 10.8148C8.08971 10.8175 7.78873 10.9437 7.56624 11.1662C7.34375 11.3887 7.21755 11.6896 7.21482 12.0043C7.21208 12.3189 7.33303 12.622 7.55162 12.8484L9.95162 15.2484C10.1767 15.4733 10.4818 15.5997 10.8 15.5997C11.1182 15.5997 11.4234 15.4733 11.6484 15.2484L16.4484 10.4484Z" />
                </svg>
                <p className="text-sm text-gray-400 font-medium mt-1">No installation, no sign up required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default React.memo(Hero);
