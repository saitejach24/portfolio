import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="skills">
      <h3 className="py-5 ">
        My <span>Skillss</span>* 
      </h3>
      <div className="container my-5 py-5 text-center" id="skillsContainer">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 my-3">
            <div className="row mx-3 align-items-center mb-5">
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="icons/html.png"
                    alt="HTML"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="icons/css.png"
                    alt="CSS"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="icons/bootstrap.png"
                    alt="bootstrap"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="icons/js.png"
                    alt="javascript"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="icons/react.png"
                    alt="react"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="icons/node.png"
                    alt="nodejs"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="icons/express.png"
                    alt="express"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="icons/mongo.png"
                    alt="sql"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <a href="#" className="text-decoration-none">
                  <img
                    src="icons/sql.png"
                    alt="sql"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </a>
              </div>
              
            </div>
            {/* <p className="my-3 mx-3" id="skillsText">
              Embrace growth, each step forward gets you closer transforming
              <span> mastery</span>. <br />
              Build upon your skills, transforming
              <span> 3s into 4s</span>, and <span>4s into 5s</span>, one at a
              time..!!
            </p> */}
            {/* <img
              src="../src/assets/sign.png"
              alt="sisi_tarak"
              className="img-fluid rounded w-50"
              id="sign"
            /> */}
          </div>
          <div className="col-12 col-lg-6 my-3" id="skillImg">
            <img
              src="skill.jpg"
              alt="sai_teja"
              className="img-fluid shadow rounded w-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
