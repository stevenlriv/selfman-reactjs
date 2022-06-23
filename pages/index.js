import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <title>Self Management App</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Manage your daily task, workouts and meal plans with an app that easily tracks your progress!" />
    <meta name="author" content="Steven Rivera" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Prata&family=Readex+Pro:wght@300;400;500;600;700&display=swap" />
    <div className> 
      <section className="pt-24 md:pt-32 overflow-hidden"><div className="container px-4 mx-auto">
          <div className="flex items-center mb-24 sm:mb-40">
            <span className="font-heading text-xl">01</span>
            <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
            <span className="font-heading text-xl">selfman was shutdown in 2022</span>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl">Self Management App</h1>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 pb-24 xl:h-192">
          <div className="w-full xl:w-1/3 px-4 mb-16 xl:mb-0 relative">
          </div>
          <div className="w-full xl:w-1/3 px-4 mb-16 xl:mb-0 pb-52 relative">
            <div className="container px-4 mx-auto">
              <div className="max-w-xl mx-auto">
                <div className="flex mb-8">
                  <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-white border border-gray-200">
                    <div className="flex items-center justify-center w-18 h-18 rounded-full bg-gray-100">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-white">1</div>
                    </div>
                  </div>
                  <div className="mt-6 ml-6">
                    <h6 className="text-2xl mb-4">Tasks</h6>
                    <p className="font-light">Manage your daily task</p>
                  </div>
                </div>
                <div className="flex mb-8">
                  <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-white border border-gray-200">
                    <div className="flex items-center justify-center w-18 h-18 rounded-full bg-gray-100">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-white">2</div>
                    </div>
                  </div>
                  <div className="mt-6 ml-6">
                    <h6 className="text-2xl mb-4">Workouts &amp; Meals</h6>
                    <p className="font-light">Manage your workouts and meal plans</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-white border border-gray-200">
                    <div className="flex items-center justify-center w-18 h-18 rounded-full bg-gray-100">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-white">3</div>
                    </div>
                  </div>
                  <div className="mt-6 ml-6">
                    <h6 className="text-2xl mb-4">Accountability!</h6>
                    <p className="font-light">Easily track your progress and receive daily reports!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/3 px-4 pb-24 relative">
            <img className="block px-4 w-full max-w-lg mx-auto" src="wrexa-assets/images/app-elements.png" alt="" /></div>
        </div>
      </section>
      <section className="relative pb-24 md:pb-40 bg-gray-900 overflow-hidden"><div className="bg-white h-16 mb-56">
          <div className="absolute top-0 left-1/2">
            <div className="w-px h-16 bg-gray-900" />
            <div className="w-px h-24 bg-white" />
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-32">
            <h2 className="font-heading text-5xl sm:text-6xl text-white">Our stats</h2>
          </div>
          <div className="flex flex-wrap -mx-4 mb-32">
            <div className="w-full lg:w-1/2 3xl:w-1/4 px-4 border-b lg:border-b-0 lg:border-r border-gray-800">
              <div className="sm:flex max-w-xs mx-auto 3xl:px-10 py-10 items-start">
                <img className="block mb-6 sm:mb-0 sm:mr-8" src="wrexa-assets/elements/stats-icon2.svg" alt="" /><div>
                  <span className="text-sm text-gray-400">Notifications sent</span>
                  <h4 className="font-heading text-3xl text-white mt-2 mb-7">100K+</h4>
                  <span className="text-xs text-gray-400 font-light">To our users for their daily tasks</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 3xl:w-1/4 px-4 border-b lg:border-b-0 3xl:border-r border-gray-800">
              <div className="sm:flex max-w-xs mx-auto 3xl:px-10 py-10 items-start">
                <img className="block mb-6 sm:mb-0 sm:mr-8" src="wrexa-assets/elements/stats-icon1.svg" alt="" /><div>
                  <span className="text-sm text-gray-400">Performance increase</span>
                  <h4 className="font-heading text-3xl text-white mt-2 mb-7">20%</h4>
                  <span className="text-xs text-gray-400 font-light">Our users did better with their daily tasks</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 3xl:w-1/4 px-4">
            </div>
          </div>
          <div className="text-center"><a className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250" href="http://riverasteven.com/">Learn more about Steven</a></div>
        </div>
      </section>
    </div>
  </div>
  )
}
