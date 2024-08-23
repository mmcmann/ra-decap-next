'use client';

import { useEffect, useState } from 'react';

type Region = {
  id: number;
  title: string;
  body: string;
};

export default function Index() {
  const [alerts, setAlerts] = useState<Region[]>([]);

  useEffect(() => {
    fetch('http://localhost:6800/alerts')
      .then((response) => response.json())
      .then((data) => setAlerts(data));
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className="wrapper">
          <div className="container">
            <div id="welcome">
              <h1 className="mb-8 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                <span> Hello there, </span>
                Welcome Nextjs/React Admin/Decamp (Netlify) CMS Starter
              </h1>
            </div>
            <div>
              {alerts.map((region) => (
                <section key={region.id} className="mt-4 text-left">
                  <div className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                    <svg
                      className="flex-shrink-0 inline w-4 h-4 me-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {region.title}
                      </h5>
                      <p
                        className="font-normal text-gray-700 dark:text-gray-400"
                        dangerouslySetInnerHTML={{ __html: region.body }}
                      ></p>
                      <a href={`/admin#/alerts/${region.id}`} className="block mt-2 text-blue-700 underline dark:text-blue-400">
                        Edit
                      </a>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
