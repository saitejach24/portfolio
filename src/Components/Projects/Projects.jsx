import React from "react";
import "./Project.css";

const Projects = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="projects">
      <h3 className="py-5 ">
        MY <span id="pro">Projectss</span>
      </h3>
      <div className="container my-5">
        <div class="row">
          <div class="col-12 col-md-6 px-4 py-4">
          <a href="https://restaurant-reservation24.netlify.app/" target="_blank">
            <img
              src="project5.png"
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
             </a>
          </div>
          <div class="col-12 col-md-6 px-4 py-4">
            <a href="https://foodiesfavourite24.netlify.app/" target="_blank">
              <img
                src="project2.png"
                alt="Project 2"
                className="img-fluid shadow rounded projImg"
              />
            </a>
          </div>
          <div class="col-12 col-md-6 px-4 py-4">
            <a href="https://todoslist24.netlify.app/" target="_blank">
              <img
                src="project3.png"
                alt="Project 3"
                className="img-fluid shadow rounded projImg"
              />
            </a>
          </div>
          <div class="col-12 col-md-6 px-4 py-4">
            <a href="https://guessingnumber24.netlify.app/" target="_blank">
              <img
                src="project4.png"
                alt="Project 4"
                className="img-fluid shadow rounded projImg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
