import React from "react";
// import "../images/bg.png"
// const bg = new URL("./src/components/bg.png");

function Home({ emp }) {
  const number = emp.length;

  // <h3 key={emp.id}>{emp.length}</h3>));

  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
       
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav2 ml-auto">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              Welcome to EMS
            </a>
          </li>
        </ul>
      </div>
      <div class="content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-2 col-md-1 col-sm-6 col-2 mb-5 mt-9">
              <div class="inforide">
                <div class="row">
                  <div class="col-lg-3 col-md-4 col-sm-4 col-4 rideone">
                    <img src="https://vignette.wikia.nocookie.net/nationstates/images/2/29/WS_Logo.png/revision/latest?cb=20080507063620" />
                  </div>
                  <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                    <h4>Registered Employees</h4>
                    <h4>{number}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-2 mt-4">
            <div class="inforide">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-4 col-2 ridethree">
                  <img src="https://vignette.wikia.nocookie.net/nationstates/images/2/29/WS_Logo.png/revision/latest?cb=20080507063620" />
                </div>
                <div class="col-lg-9 col-md-8 col-sm-8 col-1 fontsty">
                  <h4>Departments</h4>
                  <h2>5</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Home;
