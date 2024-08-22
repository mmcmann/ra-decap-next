'use client';

import { useEffect, useState } from 'react';

type Region = {
  id: number;
  title: string;
  body: string;
};

export default function Index() {
  const [regions, setRegions] = useState<Region[]>([]);

  useEffect(() => {
    fetch('http://localhost:6800/regions')
      .then((response) => response.json())
      .then((data) => setRegions(data));
  }, []);

  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome my-nextjs-netlify-cms 👋
            </h1>
          </div>
          <div>
            <h1>Welcome to My Site</h1>
            {regions.map((region) => (
              <section key={region.id}>
                <h2>{region.title}</h2>
                <p>{region.body}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
