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
            <div class="col-lg-4 col-md-1 col-sm-6 col-2 mb-5 mt-9">
              <div class="inforide">
                <div class="row">
                  <div class="col-lg-3 col-md-4 col-sm-4 col-4 rideone">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="currentColor"
                      class="bi bi-person-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      <path
                        fill-rule="evenodd"
                        d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                  </div>
                  <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                    <h4>Registered Employees</h4>
                    <h4>{number}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-5 col-sm-2 col-1 mb-2 mt-9">
            <div class="inforide">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-4 col-4 ridethree">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="70"
                    fill="currentColor"
                    class="bi bi-shop-window"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
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
