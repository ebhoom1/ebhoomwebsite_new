import React from "react";

const Careers = () => {
  return (
    <>
      <div className="py-10"></div>

      <div className="relative h-[450px] flex items-center bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-10 transform -translate-x-1/2 -translate-y-16 z-0 ">
          <div className="w-[300px] h-[300px] bg-indigo-200 rounded-full opacity-50"></div>
        </div>
        <div className="absolute top-0 left-20 transform -translate-x-1/2 -translate-y-16 z-0 animate-goofywobble">
          <div className="w-[300px] h-[300px] bg-indigo-100 rounded-full opacity-50"></div>
        </div>
        <div className="absolute top-80 left-60 transform -translate-x-1/2 -translate-y-16 z-0 animate-goofywobble">
          <div className="w-[50px] h-[50px] bg-indigo-200 rounded-full opacity-50"></div>
        </div>
        <div className="absolute top-60 right-10 z-0 transform -translate-x-1/2 -translate-y-16 animate-goofybounce">
          <div className="w-[100px] h-[100px] bg-green-300 rounded-full opacity-30"></div>
        </div>
        <div className="absolute top-30 right-60 transform -translate-x-1/2 -translate-y-16 z-0">
          <div className="w-[150px] h-[150px] bg-blue-200 rounded-full opacity-30"></div>
        </div>
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-gray-600">
          <h3 className="text-4xl lg:text-6xl font-bold mb-4" data-aos="zoom-in-down">
            Join Our Team at EBHOOM
          </h3>
          <p className="text-lg lg:text-xl mb-6">
            Be part of the mission to transform our planet into a cleaner,
            greener place. Together, let's make a difference.
          </p>
          <a
            href="#career-openings"
            className="text-white bg-indigo-300 hover:bg-indigo-600 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Explore Opportunities
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="py-10"></div>

      {/* Career Openings Section */}
      <div id="career-openings" className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Left Side: Career Card */}
          <div className="col-span-1" data-aos="zoom-in">
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <h4 className="text-green-500 font-semibold">
                <span className="badge bg-green-500 text-white">NOW HIRING</span>
              </h4>
              <h1 className="text-2xl font-bold text-gray-800">
                Software Developer
              </h1>
              <p className="mb-4">
                No. of positions:{" "}
                <span className="badge bg-light text-dark">1</span>
              </p>

              <h5 className="font-semibold text-gray-700">Description</h5>
              <p className="text-gray-600">
                <strong>Job Summary:</strong>
                <br />
                As a MERN STACK developer, you will be responsible for
                developing and maintaining our water treatment management
                software. You will work in our software department and handle
                all the aspects of front-end and back-end development. You will
                also collaborate with the hardware engineer and the founders to
                ensure that our software meets the needs of our clients and
                users.
              </p>

              <h5 className="font-semibold text-gray-700">
                Job Duties and Responsibilities
              </h5>
              <ul className="list-disc pl-6 text-gray-600">
                <li>
                  Design, develop, test, deploy, and maintain our web-based
                  water treatment management software using React.js, Node.js,
                  MySQL, and Python.
                </li>
                <li>
                  Implement user interface components and features using HTML,
                  CSS, JavaScript, and React.js.
                </li>
                <li>
                  Build and integrate APIs and services using Node.js,
                  Express.js, and Python.
                </li>
                <li>Manage and optimize databases using MySQL and other tools.</li>
                <li>
                  Ensure the performance, security, scalability, and reliability
                  of our software.
                </li>
                <li>
                  Troubleshoot, debug, and fix bugs and issues in the software.
                </li>
                <li>
                  Write clean, readable, and maintainable code following best
                  practices and standards.
                </li>
                <li>Write technical documentation and user manuals.</li>
                <li>
                  Research and learn new technologies and frameworks to improve
                  the software.
                </li>
                <li>
                  Provide technical support and assistance to clients and users.
                </li>
              </ul>

              <h5 className="font-semibold text-gray-700">
                Job Qualifications and Requirements
              </h5>
              <ul className="list-disc pl-6 text-gray-600">
                <li>
                  Proven experience as a Mainstream Developer or similar role.
                </li>
                <li>
                  Strong knowledge of front-end technologies such as HTML, CSS,
                  JavaScript, and React.js.
                </li>
                <li>
                  Strong knowledge of back-end technologies such as Node.js,
                  Express.js, Python, and MySQL.
                </li>
                <li>
                  Experience with web development tools such as Webpack, Babel,
                  npm, Git, etc.
                </li>
                <li>
                  Experience with web application security, authentication,
                  authorization, encryption, etc.
                </li>
                <li>
                  Experience with web application testing tools such as Jest,
                  Mocha, Chai, Selenium, etc.
                </li>
                <li>
                  Experience with web application deployment tools such as AWS,
                  Heroku, Docker, etc.
                </li>
                <li>
                  Experience with water treatment management software or similar
                  domain is a plus.
                </li>
                <li>Excellent problem-solving and analytical skills.</li>
                <li>Excellent communication and collaboration skills.</li>
                <li>Ability to work independently and manage multiple tasks.</li>
                <li>
                  Bachelor's degree in computer science or related field or
                  equivalent work experience.
                </li>
              </ul>

              <h5 className="font-semibold text-gray-700">Job Expectations</h5>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Work hours: Monday to Friday from 9 am to 5 pm (flexible).</li>
                <li>
                  Work location: Our office is located in Kanayannur, Kerala.
                  Remote work is possible depending on the situation.
                </li>
                <li>Salary: Negotiable based on experience and qualifications.</li>
              </ul>

              <h5 className="font-semibold text-gray-700">How to Apply</h5>
              <p className="text-gray-600">
                If you are interested in applying for this position, please send
                your resume and portfolio to our email address:
                hello@ebhoom.com. Please include "Mainstream Developer
                Application" in the subject line. We will review your
                application and contact you for an interview if you meet our
                requirements. Thank you for your interest in working with us!
              </p>

              <h5 className="font-semibold text-gray-700">Internship Location</h5>
              <p className="text-gray-600">Ernakulam</p>

              <h5 className="font-semibold text-gray-700">Internship Nature</h5>
              <p className="text-gray-600">Hybrid</p>

              <h5 className="font-semibold text-gray-700">Last date to apply</h5>
              <p className="text-gray-600">31/11/2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="py-5"></div>
    </>
  );
};

export default Careers;
