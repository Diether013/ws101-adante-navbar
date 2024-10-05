import React from 'react';
import './convert.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Landing</h1>
      </header>
      <main>
        <section>
          <h2>laptop App Hero</h2>
          <img src="image.jpg" alt="Image description" />
        </section>
        <section>
          <h2>next</h2>
          <button>Sign up now!</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Converted Landing Page</p>
      </footer>
    </div>
  );
};

export default LandingPage;