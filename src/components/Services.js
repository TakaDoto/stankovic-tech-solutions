import React from 'react';
import './Services.scss';

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>At Stankovic Tech Solutions, we offer a range of cutting-edge services designed to help you succeed in the digital world. Our expertise spans across various technologies, enabling us to build modern and scalable applications that meet your unique needs.</p>

      <div className="services-list">
        <div className="service-item">
          <h2>HTML & CSS</h2>
          <p>We create visually appealing and responsive web pages with clean, semantic HTML and modern CSS. Our designs are optimized for performance and accessibility, ensuring a seamless user experience across all devices.</p>
        </div>

        <div className="service-item">
          <h2>SCSS</h2>
          <p>Leverage the power of SCSS to write modular and maintainable stylesheets. We use SCSS to enhance CSS with variables, nested rules, and mixins, providing a more organized approach to styling.</p>
        </div>

        <div className="service-item">
          <h2>Angular</h2>
          <p>Our team specializes in building dynamic and robust single-page applications with Angular. We utilize Angular's powerful features to create scalable and maintainable solutions.</p>
        </div>

        <div className="service-item">
          <h2>JavaScript & Node.js</h2>
          <p>From interactive front-end features to server-side applications, we use JavaScript and Node.js to build high-performance web solutions. Our expertise ensures efficient, real-time communication and seamless user experiences.</p>
        </div>

        <div className="service-item">
          <h2>Python & Django</h2>
          <p>We harness the power of Python and Django to develop secure and scalable web applications. Our Django-based solutions are designed to be efficient, maintainable, and aligned with the latest industry standards.</p>
        </div>

        <div className="service-item">
          <h2>SQLite3 & MongoDB</h2>
          <p>We offer expertise in both relational and NoSQL databases, including SQLite3 and MongoDB. Whether you need a lightweight database for a small project or a scalable solution for complex applications, we've got you covered.</p>
        </div>
      </div>

      <p className="bottom-text-container">And many more stacks for very modern applications. Our team is constantly learning and adapting to the latest technologies to provide you with the best solutions available.</p>
    </div>
  );
}

export default Services;
