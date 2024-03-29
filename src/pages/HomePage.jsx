import { Helmet } from "react-helmet";

import heroImg from "/hero.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useSnapshot } from "valtio";
import state from "../store";

const HomePage = () => {
  const snap = useSnapshot(state);

  return (
    <>
      {state.page === "home" && (
        <div>
          <div>
            {/* <Helmet>
              <script src="/assets/js/vendor.bundle.js"></script>
              <script src="/assets/js/theme.bundle.js"></script>
            </Helmet> */}
          </div>

          {/* Navbar */}
          <Navbar />
          {/* / Navbar*/}

          {/* Main Section*/}
          <main className="mt-0 "
          style={{
            backgroundImage: `url(${'bg.png'})`,
            
          }}
          >
            {/* Page Content Goes Here */}
            {/* Hero Content*/}
            <div className="container pt-4 pt-md-6 pt-lg-8 pb-8 pb-lg-10 position-relative"
            
            >
              <div className="row gx-10 align-items-center">
                {/* Hero Text*/}
                <div
                  className="col-12 col-lg-6 position-relative z-index-20 text-center text-lg-start"
                  data-aos="fade-in"
                >
                  <h1 className="head-text">
                    LET'S <br className="xl:block hidden" /> DO IT.
                  </h1>
                  <h2 className="fs-5 text-muted fw-light lh-base">
                    Elevate your style game with TeeChroma for the Morocco World
                    Cup 2030! Personalize your jersey in 3D and let your
                    creativity run wild.
                  </h2>
                  <a
                    className="text-decoration-none text-primary fw-bolder d-flex fs-7 justify-content-center justify-content-lg-start"
                    data-bs-toggle="modal"
                    data-bs-target="#videoIframeModal"
                    data-pixr-video-iframe="https://player.vimeo.com/video/307721664?autoplay=1&loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media"
                    role="button"
                  >
                    <i className="ri-play-circle-line align-bottom me-1" /> How
                    it works
                  </a>
                  <div className="mt-4 pt-1 d-flex flex-column flex-md-row justify-content-center justify-content-lg-start">
                    <a
                      className="btn btn-success"
                      role="button"
                      onClick={() => (state.page = "customizer")}
                    >
                      Start Customizing
                    </a>
                  </div>
                  <ul className="list-unstyled d-none d-md-flex align-items-center small text-muted mt-3 pt-1 fw-medium fs-9 justify-content-center justify-content-lg-start">
                    <li className="me-4 d-flex align-items-center">
                      <i className="ri-checkbox-circle-fill text-success ri-lg me-1" />{" "}
                      Create your own jersey
                    </li>
                    <li className="me-4 d-flex align-items-center">
                      <i className="ri-checkbox-circle-fill text-success ri-lg me-1" />{" "}
                      Change anytime
                    </li>
                    <li className="me-4 d-flex align-items-center">
                      <i className="ri-checkbox-circle-fill text-success ri-lg me-1" />{" "}
                      Try It Risk-Free
                    </li>
                  </ul>
                </div>
                {/* / Hero Text*/}
                {/* Hero Graphic*/}
                <div
                  className="col-12 col-lg-6 mt-5 mt-lg-0 align-self-stretch position-relative z-index-20"
                  data-aos="fade-in"
                >
                  <div className="hero_img">
                    <img src={heroImg} alt="" />
                  </div>
                </div>
                {/* / Hero Graphic*/}
              </div>
              {/* Bottom left shapes*/}
              <div className="position-absolute top-0 end-0 start-0 bottom-0 z-index-0 d-none d-lg-block">
                <div className="d-block f-w-6  position-absolute bottom-7 start-5 rotate-n45 origin-center">
                  <span className="d-block animation-float-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 37.51 89.72"
                    >
                      <path
                        className="text-body"
                        d="M14.75,46.11C14.75,53,2.5,51.83,2.5,60.64"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={5}
                      />
                      <path
                        className="text-body"
                        d="M14.75,17C14.75,24,2.5,22.75,2.5,31.57"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={5}
                      />
                      <path
                        className="text-body"
                        d="M14.75,46.11c0-6.91-12.25-5.72-12.25-14.54"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={5}
                      />
                      <path
                        className="text-body"
                        d="M14.75,17C14.75,10.13,2.5,11.32,2.5,2.5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={5}
                      />
                      <path
                        className="text-secondary"
                        d="M37,75.18c0,6.91-12.25,5.72-12.25,14.54"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                      />
                      <path
                        className="text-secondary"
                        d="M37,46.11C37,53,24.76,51.83,24.76,60.64"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                      />
                      <path
                        className="text-secondary"
                        d="M37,75.18c0-6.91-12.25-5.72-12.25-14.54"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                      />
                      <path
                        className="text-secondary"
                        d="M37,46.11c0-6.91-12.25-5.72-12.25-14.54"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                      />
                    </svg>{" "}
                  </span>
                </div>
                <div className="d-block f-w-6  position-absolute bottom-35 start-n3">
                  <span className="d-block animation-float-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 55.95 50.74"
                    >
                      <path
                        className="text-secondary"
                        d="M55.45,34.33A15.92,15.92,0,1,1,39.54,18.41,15.91,15.91,0,0,1,55.45,34.33Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                      />
                      <path
                        className="text-body"
                        d="M34.33,18.41A15.92,15.92,0,1,1,18.41,2.5,15.92,15.92,0,0,1,34.33,18.41Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={5}
                      />
                    </svg>{" "}
                  </span>
                </div>
                <div className="d-block f-w-6  position-absolute bottom-20 start-n2">
                  <span className="d-block animation-float">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 62.66 58.68"
                    >
                      <polygon
                        className="text-body"
                        points="20.69 33.95 38.85 23.45 20.68 12.98 2.5 2.5 2.52 23.47 2.53 44.45 20.69 33.95"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={5}
                      />
                      <polygon
                        className="text-secondary"
                        points="43.5 47.31 61.66 36.81 43.49 26.34 25.32 15.86 25.33 36.83 25.34 57.81 43.5 47.31"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                      />
                    </svg>{" "}
                  </span>
                </div>
              </div>
              {/* / Bottom left shapes*/}
            </div>
            {/* /hero Content*/}
            {/* Logo Showcase*/}
            <div className="bg-primary py-8" data-aos="fade-in">
              <p className="mb-0 text-center small fw-bolder tracking-wider text-uppercase text-white opacity-75">
                Trusted by thousands of companies worldwide
              </p>
              <div className="mt-5">
                <section className="marquee marquee-hover-pause">
                  <div className="marquee-body">
                    <div className="marquee-section animation-marquee-90">
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Bosch"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-1.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Smeg"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-2.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Sony"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-3.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Siemens"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-4.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Coca Cola"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-5.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Philips"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-6.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Samsung"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-7.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Netflix"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-8.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                    </div>
                    <div className="marquee-section animation-marquee-90">
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Bosch"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-1.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Smeg"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-2.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Sony"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-3.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Siemens"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-4.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Coca Cola"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-5.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Philips"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-6.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Samsung"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-7.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="mx-5 f-w-24">
                        <a
                          className="d-block"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Netflix"
                        >
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-8.svg"
                              alt
                            />
                          </picture>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* Logo Showcase*/}
            {/* Integrations*/}
            <div className="bg-dark py-8" data-aos="fade-in">
              <div className="container py-4">
                <p className="mb-0 text-center small fw-bolder tracking-wider text-uppercase text-orange">
                  TEECHROMA COLLABORATIONS
                </p>
                <h3 className="text-white text-center mt-3 fs-1 mb-3 fw-bold">
                  Team Up with Your Favorites
                </h3>
                <p className="text-white opacity-50 text-center">
                  Join forces and elevate your Teechroma football jersey
                  customization with collaborations from the industry's best.
                </p>
                <div className="row gx-10 gy-7 mt-4">
                  {/* Integration*/}
                  <div
                    className="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center justify-content-center"
                    data-aos="fade-in"
                    data-aos-duration={500}
                  >
                    <picture className="d-block f-h-10">
                      <img
                        className="h-100 w-auto"
                        src="../assets/images/logos/FIFA.svg"
                        alt
                      />
                    </picture>
                    <p className="text-white fs-4 fw-medium mb-2 mt-3">FIFA</p>
                    <p className="text-white opacity-75 text-center fs-7">
                      From pitch to pavement, TeeChroma lets fans rock their
                      team colors in style! Kudos for showcasing creativity and
                      bringing the fan experience beyond the stadium.
                    </p>
                  </div>
                  {/* /Integration*/}
                  {/* Integration*/}
                  <div
                    className="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center justify-content-center"
                    data-aos="fade-in"
                    data-aos-duration={500}
                    data-aos-delay={100}
                  >
                    <picture className="d-block f-h-10">
                      <img
                        className="h-100 w-auto"
                        src="../assets/images/logos/EA_Sports.svg"
                        alt
                      />
                    </picture>
                    <p className="text-white fs-4 fw-medium mb-2 mt-3">
                      EA Sports
                    </p>
                    <p className="text-white opacity-75 text-center fs-7">
                      TeeChroma's customization features are next-level! It's
                      like building your own dream team kit, and that opens up
                      endless possibilities for creativity and self-expression.
                    </p>
                  </div>
                  {/* /Integration*/}
                  {/* Integration*/}
                  <div
                    className="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center justify-content-center"
                    data-aos="fade-in"
                    data-aos-duration={500}
                    data-aos-delay={200}
                  >
                    <picture className="d-block f-h-10">
                      <img
                        className="h-100 w-auto"
                        src="../assets/images/logos/CAF.png"
                        alt
                      />
                    </picture>
                    <p className="text-white fs-4 fw-medium mb-2 mt-3">CAF</p>
                    <p className="text-white opacity-75 text-center fs-7">
                      TeeChroma champions the spirit of African football! We
                      love how it lets fans wear their hearts on their sleeves,
                      showcasing their team colors and cultural heritage with
                      pride.
                    </p>
                  </div>
                  {/* /Integration*/}
                  {/* Integration*/}
                </div>
                <a
                  role="button"
                  className="btn btn-white d-table mx-auto mt-7 w-100 w-md-auto"
                >
                  More about our collaborations →
                </a>
              </div>
            </div>
            {/* / Integrations*/}
            {/* Product Highlights*/}
            <div className="py-5 py-lg-10">
              {/* Highlight One*/}
              <div className="container py-5 py-lg-8">
                <div className="row g-5 g-lg-10 d-flex align-items-center">
                  {/* Highlight One Image Section*/}
                  <div
                    className="col-12 col-md-6 col-xl-5 offset-xl-1 position-relative"
                    data-aos="fade-in"
                  >
                    <picture className="position-relative z-index-20">
                      <img
                        className="img-fluid rounded-5"
                        src="../assets/images/feature-1.jpeg"
                        alt="HTML Bootstrap Template by Pixel Rocket"
                      />
                    </picture>
                    <div className="position-absolute bottom-5 end-0 z-index-30 d-none d-lg-block">
                      <div
                        className="p-3 bg-white shadow-lg rounded-3 f-w-60 mb-3 d-flex align-items-center me-0 ms-auto"
                        data-aos="fade-right"
                        data-aos-duration={400}
                        data-aos-delay={450}
                      >
                        <div className="position-relative me-4">
                          <picture className="position-relative z-index-0">
                            <img
                              className="f-w-12 rounded-circle"
                              src="../assets/images/profile-small-2.jpeg"
                              alt="HTML Bootstrap Template by Pixel Rocket"
                            />
                          </picture>
                          <span className="position-absolute z-index-20 d-block f-w-3 f-h-3 border border-3 border-white bg-success rounded-circle bottom-0 end-8" />
                        </div>
                        <div className="lh-sm">
                          <small className="align-self-center fs-8">
                            
                          TeeChroma blew my mind!  Design playground, insane quality 👍 {" "}
                          </small>
                          <span className="fs-9 text-muted fw-medium mt-1 d-block">
                            12 mins ago
                          </span>
                        </div>
                      </div>
                      <div
                        className="p-3 bg-white shadow-lg rounded-3 f-w-56 mb-3 d-flex align-items-center me-0 ms-auto"
                        data-aos="fade-left"
                        data-aos-duration={400}
                        data-aos-delay={1500}
                      >
                        <div className="position-relative me-4">
                          <picture className="position-relative z-index-0">
                            <img
                              className="f-w-12 rounded-circle"
                              src="../assets/images/profile-small-3.jpeg"
                              alt="HTML Bootstrap Template by Pixel Rocket"
                            />
                          </picture>
                          <span className="position-absolute z-index-20 d-block f-w-3 f-h-3 border border-3 border-white bg-danger rounded-circle bottom-0 end-8" />
                        </div>
                        <div className="lh-1">
                          <small className="align-self-center fs-8 lh-sm">
                          Quality + Creativity explosion = TeeChroma.
                          </small>
                          <span className="fs-9 text-muted fw-medium mt-1 d-block">
                            5 mins ago
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Hightlight One SVG Shape*/}
                    <div className="d-none d-xl-block f-w-60 position-absolute top-n13 start-n3 opacity-75">
                      <span className="d-block" data-aos="fade-in">
                        <svg
                          className="w-100"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 411.39 411.39"
                        >
                          <circle cx="355.89" cy="255.89" r="2.5" fill="none" />
                          <circle cx="355.89" cy="55.89" r="2.5" fill="none" />
                          <circle cx="305.89" cy="105.89" r="2.5" fill="none" />
                          <circle cx="255.89" cy="155.89" r="2.5" fill="none" />
                          <circle cx="305.89" cy="205.89" r="2.5" fill="none" />
                          <circle cx="305.89" cy="405.89" r="2.5" fill="none" />
                          <circle cx="405.89" cy="5.89" r="2.5" fill="none" />
                          <circle cx="305.89" cy="305.89" r="2.5" fill="none" />
                          <circle cx="205.89" cy="105.89" r="2.5" fill="none" />
                          <circle cx="255.89" cy="255.89" r="2.5" fill="none" />
                          <circle cx="205.89" cy="205.89" r="2.5" fill="none" />
                          <circle cx="305.89" cy="5.89" r="2.5" fill="none" />
                          <circle cx="355.89" cy="355.89" r="2.5" fill="none" />
                          <circle cx="205.89" cy="405.89" r="2.5" fill="none" />
                          <circle cx="205.89" cy="305.89" r="2.5" fill="none" />
                          <circle cx="355.89" cy="155.89" r="2.5" fill="none" />
                          <circle cx="405.89" cy="405.89" r="2.5" fill="none" />
                          <circle cx="405.89" cy="205.89" r="2.5" fill="none" />
                          <circle cx="405.89" cy="305.89" r="2.5" fill="none" />
                          <circle cx="405.89" cy="105.89" r="2.5" fill="none" />
                          <circle cx="5.89" cy="305.89" r="2.5" fill="none" />
                          <circle cx="5.89" cy="5.89" r="2.5" fill="none" />
                          <circle cx="55.89" cy="55.89" r="2.5" fill="none" />
                          <circle cx="55.89" cy="155.89" r="2.5" fill="none" />
                          <circle cx="55.89" cy="355.89" r="2.5" fill="none" />
                          <circle cx="55.89" cy="255.89" r="2.5" fill="none" />
                          <circle cx="155.89" cy="55.89" r="2.5" fill="none" />
                          <circle cx="105.89" cy="305.89" r="2.5" fill="none" />
                          <circle cx="105.89" cy="205.89" r="2.5" fill="none" />
                          <circle cx="105.89" cy="105.89" r="2.5" fill="none" />
                          <circle cx="205.89" cy="5.89" r="2.5" fill="none" />
                          <circle cx="255.89" cy="355.89" r="2.5" fill="none" />
                          <circle cx="105.89" cy="405.89" r="2.5" fill="none" />
                          <circle cx="255.89" cy="55.89" r="2.5" fill="none" />
                          <circle cx="105.89" cy="5.89" r="2.5" fill="none" />
                          <circle cx="5.89" cy="205.89" r="2.5" fill="none" />
                          <circle cx="5.89" cy="405.89" r="2.5" fill="none" />
                          <circle cx="155.89" cy="355.89" r="2.5" fill="none" />
                          <circle cx="155.89" cy="255.89" r="2.5" fill="none" />
                          <circle cx="155.89" cy="155.89" r="2.5" fill="none" />
                          <circle cx="5.89" cy="105.89" r="2.5" fill="none" />
                          <path
                            d="M5.89,11.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,5.89,11.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,5.89,3.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M55.89,50.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,55.89,50.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,55.89,58.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M155.89,61.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,155.89,61.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,155.89,53.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M255.89,50.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,255.89,50.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,255.89,58.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M355.89,50.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,355.89,50.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,355.89,58.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M55.89,150.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,55.89,150.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,55.89,158.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M155.89,161.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,155.89,161.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,155.89,153.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M255.89,150.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,255.89,150.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,255.89,158.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M355.89,150.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,355.89,150.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,355.89,158.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M55.89,250.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,55.89,250.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,55.89,258.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M155.89,261.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,155.89,261.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,155.89,253.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M255.89,250.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,255.89,250.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,255.89,258.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M355.89,250.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,355.89,250.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,355.89,258.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M55.89,350.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,55.89,350.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,55.89,358.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M155.89,361.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,155.89,361.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,155.89,353.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M255.89,350.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,255.89,350.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,255.89,358.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M355.89,350.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,355.89,350.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,355.89,358.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M105.89,11.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,105.89,11.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,105.89,3.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M205.89,11.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,205.89,11.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,205.89,3.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M305.89,11.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,305.89,11.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,305.89,3.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M405.89,11.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,405.89,11.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,405.89,3.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M5.89,100.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,5.89,100.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,5.89,108.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M105.89,100.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,105.89,100.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,105.89,108.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M205.89,100.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,205.89,100.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,205.89,108.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M305.89,100.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,305.89,100.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,305.89,108.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M405.89,100.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,405.89,100.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,405.89,108.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M5.89,200.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,5.89,200.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,5.89,208.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M105.89,200.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,105.89,200.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,105.89,208.39Z"
                            fill="#bcbcbc"
                          />
                          <path d="M205.89,200.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,205.89,200.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,205.89,208.39Z" />
                          <path
                            d="M305.89,200.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,305.89,200.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,305.89,208.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M405.89,200.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,405.89,200.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,405.89,208.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M5.89,300.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,5.89,300.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,5.89,308.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M105.89,300.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,105.89,300.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,105.89,308.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M205.89,300.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,205.89,300.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,205.89,308.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M305.89,300.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,305.89,300.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,305.89,308.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M405.89,300.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,405.89,300.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,405.89,308.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M5.89,400.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,5.89,400.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,5.89,408.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M105.89,400.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,105.89,400.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,105.89,408.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M205.89,400.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,205.89,400.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,205.89,408.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M305.89,400.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,305.89,400.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,305.89,408.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M405.89,400.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,405.89,400.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,405.89,408.39Z"
                            fill="#bcbcbc"
                          />
                          <rect
                            x="152.24"
                            y="100.37"
                            width={3}
                            height="4.75"
                            transform="translate(-27.62 138.8) rotate(-45)"
                          />
                          <rect
                            x="157.72"
                            y="105.84"
                            width={3}
                            height="4.75"
                            transform="translate(-29.89 144.28) rotate(-45)"
                          />
                          <rect
                            x="151.37"
                            y="106.72"
                            width="4.75"
                            height={3}
                            transform="translate(-31.49 140.41) rotate(-45)"
                          />
                          <rect
                            x="156.84"
                            y="101.24"
                            width="4.75"
                            height={3}
                            transform="translate(-26.02 142.67) rotate(-45)"
                          />
                          <rect
                            x="154.98"
                            y="103.98"
                            width={3}
                            height={3}
                            transform="translate(-28.75 141.54) rotate(-45)"
                          />
                          <rect
                            x="256.72"
                            y="105.84"
                            width={3}
                            height="4.75"
                            transform="translate(-0.89 214.28) rotate(-45)"
                          />
                          <rect
                            x="251.24"
                            y="100.37"
                            width={3}
                            height="4.75"
                            transform="translate(1.38 208.8) rotate(-45)"
                          />
                          <rect
                            x="255.84"
                            y="101.24"
                            width="4.75"
                            height={3}
                            transform="translate(2.98 212.68) rotate(-45)"
                          />
                          <rect
                            x="250.37"
                            y="106.72"
                            width="4.75"
                            height={3}
                            transform="translate(-2.5 210.4) rotate(-45)"
                          />
                          <rect
                            x="253.98"
                            y="103.98"
                            width={3}
                            height={3}
                            transform="translate(0.25 211.55) rotate(-45)"
                          />
                          <rect
                            x="355.72"
                            y="105.84"
                            width={3}
                            height="4.75"
                            transform="translate(28.11 284.29) rotate(-45)"
                          />
                          <rect
                            x="350.24"
                            y="100.37"
                            width={3}
                            height="4.75"
                            transform="translate(30.37 278.81) rotate(-45)"
                          />
                          <rect
                            x="354.84"
                            y="101.24"
                            width="4.75"
                            height={3}
                            transform="translate(31.98 282.68) rotate(-45)"
                          />
                          <rect
                            x="349.37"
                            y="106.72"
                            width="4.75"
                            height={3}
                            transform="translate(26.5 280.4) rotate(-45)"
                          />
                          <rect
                            x="352.98"
                            y="103.98"
                            width={3}
                            height={3}
                            transform="translate(29.24 281.55) rotate(-45)"
                          />
                          <rect
                            x="51.24"
                            y="100.37"
                            width={3}
                            height="4.75"
                            transform="translate(-57.2 67.38) rotate(-45)"
                          />
                          <rect
                            x="56.72"
                            y="105.84"
                            width={3}
                            height="4.75"
                            transform="translate(-59.47 72.86) rotate(-45)"
                          />
                          <rect
                            x="55.84"
                            y="101.24"
                            width="4.75"
                            height={3}
                            transform="translate(-55.6 71.26) rotate(-45)"
                          />
                          <rect
                            x="50.37"
                            y="106.72"
                            width="4.75"
                            height={3}
                            transform="translate(-61.07 68.98) rotate(-45)"
                          />
                          <rect
                            x="53.98"
                            y="103.98"
                            width={3}
                            height={3}
                            transform="translate(-58.34 70.12) rotate(-45)"
                          />
                          <rect
                            x="152.24"
                            y="0.37"
                            width={3}
                            height="4.75"
                            transform="translate(43.09 109.51) rotate(-45)"
                          />
                          <rect
                            x="157.72"
                            y="5.84"
                            width={3}
                            height="4.75"
                            transform="translate(40.82 114.99) rotate(-45)"
                          />
                          <rect
                            x="156.84"
                            y="1.24"
                            width="4.75"
                            height={3}
                            transform="translate(44.7 113.38) rotate(-45)"
                          />
                          <rect
                            x="151.37"
                            y="6.72"
                            width="4.75"
                            height={3}
                            transform="translate(39.22 111.11) rotate(-45)"
                          />
                          <rect
                            x="154.98"
                            y="3.98"
                            width={3}
                            height={3}
                            transform="translate(41.96 112.25) rotate(-45)"
                          />
                          <rect
                            x="251.24"
                            y="0.37"
                            width={3}
                            height="4.75"
                            transform="translate(72.09 179.52) rotate(-45)"
                          />
                          <rect
                            x="256.72"
                            y="5.84"
                            width={3}
                            height="4.75"
                            transform="translate(69.82 184.99) rotate(-45)"
                          />
                          <rect
                            x="250.37"
                            y="6.72"
                            width="4.75"
                            height={3}
                            transform="translate(68.21 181.11) rotate(-45)"
                          />
                          <rect
                            x="255.84"
                            y="1.24"
                            width="4.75"
                            height={3}
                            transform="translate(73.69 183.39) rotate(-45)"
                          />
                          <rect
                            x="253.98"
                            y="3.98"
                            width={3}
                            height={3}
                            transform="translate(70.96 182.26) rotate(-45)"
                          />
                          <rect
                            x="350.24"
                            y="0.37"
                            width={3}
                            height="4.75"
                            transform="translate(101.09 249.52) rotate(-45)"
                          />
                          <rect
                            x="355.72"
                            y="5.84"
                            width={3}
                            height="4.75"
                            transform="translate(98.82 255) rotate(-45)"
                          />
                          <rect
                            x="349.37"
                            y="6.72"
                            width="4.75"
                            height={3}
                            transform="translate(97.21 251.12) rotate(-45)"
                          />
                          <rect
                            x="354.84"
                            y="1.24"
                            width="4.75"
                            height={3}
                            transform="translate(102.69 253.39) rotate(-45)"
                          />
                          <rect
                            x="352.98"
                            y="3.98"
                            width={3}
                            height={3}
                            transform="translate(99.96 252.26) rotate(-45)"
                          />
                          <rect
                            x="1.24"
                            y="50.37"
                            width={3}
                            height="4.75"
                            transform="translate(-36.49 17.38) rotate(-45)"
                          />
                          <rect
                            x="6.72"
                            y="55.84"
                            width={3}
                            height="4.75"
                            transform="translate(-38.76 22.86) rotate(-45)"
                          />
                          <rect
                            x="0.37"
                            y="56.72"
                            width="4.75"
                            height={3}
                            transform="translate(-40.36 18.99) rotate(-45)"
                          />
                          <rect
                            x="5.84"
                            y="51.24"
                            width="4.75"
                            height={3}
                            transform="translate(-34.89 21.26) rotate(-45)"
                          />
                          <rect
                            x="3.98"
                            y="53.98"
                            width={3}
                            height={3}
                            transform="translate(-37.62 20.12) rotate(-45)"
                          />
                          <rect
                            x="101.24"
                            y="50.37"
                            width={3}
                            height="4.75"
                            transform="translate(-7.2 88.09) rotate(-45)"
                          />
                          <rect
                            x="106.72"
                            y="55.84"
                            width={3}
                            height="4.75"
                            transform="translate(-9.47 93.57) rotate(-45)"
                          />
                          <rect
                            x="105.84"
                            y="51.24"
                            width="4.75"
                            height={3}
                            transform="translate(-5.6 91.97) rotate(-45)"
                          />
                          <rect
                            x="100.37"
                            y="56.72"
                            width="4.75"
                            height={3}
                            transform="translate(-11.07 89.69) rotate(-45)"
                          />
                          <rect
                            x="103.98"
                            y="53.98"
                            width={3}
                            height={3}
                            transform="translate(-8.33 90.84) rotate(-45)"
                          />
                          <rect
                            x="206.72"
                            y="55.84"
                            width={3}
                            height="4.75"
                            transform="translate(19.82 164.28) rotate(-45)"
                          />
                          <rect
                            x="201.24"
                            y="50.37"
                            width={3}
                            height="4.75"
                            transform="translate(22.09 158.8) rotate(-45)"
                          />
                          <rect
                            x="200.37"
                            y="56.72"
                            width="4.75"
                            height={3}
                            transform="translate(18.21 160.4) rotate(-45)"
                          />
                          <rect
                            x="205.84"
                            y="51.24"
                            width="4.75"
                            height={3}
                            transform="translate(23.69 162.68) rotate(-45)"
                          />
                          <rect
                            x="203.98"
                            y="53.98"
                            width={3}
                            height={3}
                            transform="translate(20.96 161.55) rotate(-45)"
                          />
                          <rect
                            x="301.24"
                            y="50.37"
                            width={3}
                            height="4.75"
                            transform="translate(51.38 229.52) rotate(-45)"
                          />
                          <rect
                            x="306.72"
                            y="55.84"
                            width={3}
                            height="4.75"
                            transform="translate(49.11 234.99) rotate(-45)"
                          />
                          <rect
                            x="300.37"
                            y="56.72"
                            width="4.75"
                            height={3}
                            transform="translate(47.5 231.11) rotate(-45)"
                          />
                          <rect
                            x="305.84"
                            y="51.24"
                            width="4.75"
                            height={3}
                            transform="translate(52.98 233.39) rotate(-45)"
                          />
                          <rect
                            x="303.98"
                            y="53.98"
                            width={3}
                            height={3}
                            transform="translate(50.25 232.26) rotate(-45)"
                          />
                          <rect
                            x="406.72"
                            y="55.84"
                            width={3}
                            height="4.75"
                            transform="translate(78.4 305.7) rotate(-45)"
                          />
                          <rect
                            x="401.24"
                            y="50.37"
                            width={3}
                            height="4.75"
                            transform="translate(80.67 300.23) rotate(-45)"
                          />
                          <rect
                            x="400.37"
                            y="56.72"
                            width="4.75"
                            height={3}
                            transform="translate(76.79 301.82) rotate(-45)"
                          />
                          <rect
                            x="405.84"
                            y="51.24"
                            width="4.75"
                            height={3}
                            transform="translate(82.27 304.1) rotate(-45)"
                          />
                          <rect
                            x="403.98"
                            y="53.98"
                            width={3}
                            height={3}
                            transform="translate(79.54 302.97) rotate(-45)"
                          />
                          <rect
                            x="1.24"
                            y="150.37"
                            width={3}
                            height="4.75"
                            transform="translate(-107.2 46.67) rotate(-45)"
                          />
                          <rect
                            x="6.72"
                            y="155.84"
                            width={3}
                            height="4.75"
                            transform="translate(-109.47 52.15) rotate(-45)"
                          />
                          <rect
                            x="0.37"
                            y="156.72"
                            width="4.75"
                            height={3}
                            transform="translate(-111.07 48.27) rotate(-45)"
                          />
                          <rect
                            x="5.84"
                            y="151.24"
                            width="4.75"
                            height={3}
                            transform="translate(-105.6 50.55) rotate(-45)"
                          />
                          <rect
                            x="3.98"
                            y="153.98"
                            width={3}
                            height={3}
                            transform="translate(-108.34 49.41) rotate(-45)"
                          />
                          <rect
                            x="101.24"
                            y="150.37"
                            width={3}
                            height="4.75"
                            transform="translate(-77.91 117.38) rotate(-45)"
                          />
                          <rect
                            x="106.72"
                            y="155.84"
                            width={3}
                            height="4.75"
                            transform="translate(-80.18 122.86) rotate(-45)"
                          />
                          <rect
                            x="100.37"
                            y="156.72"
                            width="4.75"
                            height={3}
                            transform="translate(-81.78 118.98) rotate(-45)"
                          />
                          <rect
                            x="105.84"
                            y="151.24"
                            width="4.75"
                            height={3}
                            transform="translate(-76.31 121.26) rotate(-45)"
                          />
                          <rect
                            x="103.98"
                            y="153.98"
                            width={3}
                            height={3}
                            transform="translate(-79.05 120.13) rotate(-45)"
                          />
                          <rect
                            x="206.72"
                            y="155.84"
                            width={3}
                            height="4.75"
                            transform="translate(-50.89 193.57) rotate(-45)"
                          />
                          <rect
                            x="201.24"
                            y="150.37"
                            width={3}
                            height="4.75"
                            transform="translate(-48.62 188.09) rotate(-45)"
                          />
                          <rect
                            x="200.37"
                            y="156.72"
                            width="4.75"
                            height={3}
                            transform="translate(-52.5 189.69) rotate(-45)"
                          />
                          <rect
                            x="205.84"
                            y="151.24"
                            width="4.75"
                            height={3}
                            transform="translate(-47.02 191.97) rotate(-45)"
                          />
                          <rect
                            x="203.98"
                            y="153.98"
                            width={3}
                            height={3}
                            transform="translate(-49.76 190.84) rotate(-45)"
                          />
                          <rect
                            x="306.72"
                            y="155.84"
                            width={3}
                            height="4.75"
                            transform="translate(-21.6 264.28) rotate(-45)"
                          />
                          <rect
                            x="301.24"
                            y="150.37"
                            width={3}
                            height="4.75"
                            transform="translate(-19.33 258.8) rotate(-45)"
                          />
                          <rect
                            x="305.84"
                            y="151.24"
                            width="4.75"
                            height={3}
                            transform="translate(-17.73 262.68) rotate(-45)"
                          />
                          <rect
                            x="300.37"
                            y="156.72"
                            width="4.75"
                            height={3}
                            transform="translate(-23.21 260.4) rotate(-45)"
                          />
                          <rect
                            x="303.98"
                            y="153.98"
                            width={3}
                            height={3}
                            transform="translate(-20.46 261.55) rotate(-45)"
                          />
                          <rect
                            x="406.72"
                            y="155.84"
                            width={3}
                            height="4.75"
                            transform="translate(7.69 334.99) rotate(-45)"
                          />
                          <rect
                            x="401.24"
                            y="150.37"
                            width={3}
                            height="4.75"
                            transform="translate(9.96 329.52) rotate(-45)"
                          />
                          <rect
                            x="400.37"
                            y="156.72"
                            width="4.75"
                            height={3}
                            transform="translate(6.08 331.11) rotate(-45)"
                          />
                          <rect
                            x="405.84"
                            y="151.24"
                            width="4.75"
                            height={3}
                            transform="translate(11.56 333.39) rotate(-45)"
                          />
                          <rect
                            x="403.98"
                            y="153.98"
                            width={3}
                            height={3}
                            transform="translate(8.83 332.26) rotate(-45)"
                          />
                          <rect
                            x="1.24"
                            y="250.37"
                            width={3}
                            height="4.75"
                            transform="translate(-177.91 75.96) rotate(-45)"
                          />
                          <rect
                            x="6.72"
                            y="255.84"
                            width={3}
                            height="4.75"
                            transform="translate(-180.18 81.44) rotate(-45)"
                          />
                          <rect
                            x="5.84"
                            y="251.24"
                            width="4.75"
                            height={3}
                            transform="translate(-176.31 79.83) rotate(-45)"
                          />
                          <rect
                            x="0.37"
                            y="256.72"
                            width="4.75"
                            height={3}
                            transform="translate(-181.78 77.56) rotate(-45)"
                          />
                          <rect
                            x="3.98"
                            y="253.98"
                            width={3}
                            height={3}
                            transform="translate(-179.05 78.7) rotate(-45)"
                          />
                          <rect
                            x="101.24"
                            y="250.37"
                            width={3}
                            height="4.75"
                            transform="translate(-148.62 146.67) rotate(-45)"
                          />
                          <rect
                            x="106.72"
                            y="255.84"
                            width={3}
                            height="4.75"
                            transform="translate(-150.89 152.15) rotate(-45)"
                          />
                          <rect
                            x="105.84"
                            y="251.24"
                            width="4.75"
                            height={3}
                            transform="translate(-147.02 150.55) rotate(-45)"
                          />
                          <rect
                            x="100.37"
                            y="256.72"
                            width="4.75"
                            height={3}
                            transform="translate(-152.49 148.27) rotate(-45)"
                          />
                          <rect
                            x="103.98"
                            y="253.98"
                            width={3}
                            height={3}
                            transform="translate(-149.76 149.42) rotate(-45)"
                          />
                          <rect
                            x="201.24"
                            y="250.37"
                            width={3}
                            height="4.75"
                            transform="translate(-119.33 217.38) rotate(-45)"
                          />
                          <rect
                            x="206.72"
                            y="255.84"
                            width={3}
                            height="4.75"
                            transform="translate(-121.6 222.86) rotate(-45)"
                          />
                          <rect
                            x="200.37"
                            y="256.72"
                            width="4.75"
                            height={3}
                            transform="translate(-123.2 218.98) rotate(-45)"
                          />
                          <rect
                            x="205.84"
                            y="251.24"
                            width="4.75"
                            height={3}
                            transform="translate(-117.73 221.26) rotate(-45)"
                          />
                          <rect
                            x="203.98"
                            y="253.98"
                            width={3}
                            height={3}
                            transform="translate(-120.47 220.13) rotate(-45)"
                          />
                          <rect
                            x="301.24"
                            y="250.37"
                            width={3}
                            height="4.75"
                            transform="translate(-90.04 288.09) rotate(-45)"
                          />
                          <rect
                            x="306.72"
                            y="255.84"
                            width={3}
                            height="4.75"
                            transform="translate(-92.31 293.57) rotate(-45)"
                          />
                          <rect
                            x="305.84"
                            y="251.24"
                            width="4.75"
                            height={3}
                            transform="translate(-88.44 291.97) rotate(-45)"
                          />
                          <rect
                            x="300.37"
                            y="256.72"
                            width="4.75"
                            height={3}
                            transform="translate(-93.92 289.69) rotate(-45)"
                          />
                          <rect
                            x="303.98"
                            y="253.98"
                            width={3}
                            height={3}
                            transform="translate(-91.18 290.84) rotate(-45)"
                          />
                          <rect
                            x="401.24"
                            y="250.37"
                            width={3}
                            height="4.75"
                            transform="translate(-60.75 358.8) rotate(-45)"
                          />
                          <rect
                            x="406.72"
                            y="255.84"
                            width={3}
                            height="4.75"
                            transform="translate(-63.02 364.28) rotate(-45)"
                          />
                          <rect
                            x="400.37"
                            y="256.72"
                            width="4.75"
                            height={3}
                            transform="translate(-64.63 360.39) rotate(-45)"
                          />
                          <rect
                            x="405.84"
                            y="251.24"
                            width="4.75"
                            height={3}
                            transform="translate(-59.15 362.68) rotate(-45)"
                          />
                          <rect
                            x="403.98"
                            y="253.98"
                            width={3}
                            height={3}
                            transform="translate(-61.89 361.55) rotate(-45)"
                          />
                          <rect
                            x="6.72"
                            y="355.84"
                            width={3}
                            height="4.75"
                            transform="translate(-250.89 110.73) rotate(-45)"
                          />
                          <rect
                            x="1.24"
                            y="350.37"
                            width={3}
                            height="4.75"
                            transform="translate(-248.62 105.25) rotate(-45)"
                          />
                          <rect
                            x="0.37"
                            y="356.72"
                            width="4.75"
                            height={3}
                            transform="translate(-252.49 106.85) rotate(-45)"
                          />
                          <rect
                            x="5.84"
                            y="351.24"
                            width="4.75"
                            height={3}
                            transform="translate(-247.02 109.12) rotate(-45)"
                          />
                          <rect
                            x="3.98"
                            y="353.98"
                            width={3}
                            height={3}
                            transform="translate(-249.76 108) rotate(-45)"
                          />
                          <rect
                            x="106.72"
                            y="355.84"
                            width={3}
                            height="4.75"
                            transform="translate(-221.6 181.44) rotate(-45)"
                          />
                          <rect
                            x="101.24"
                            y="350.37"
                            width={3}
                            height="4.75"
                            transform="translate(-219.33 175.96) rotate(-45)"
                          />
                          <rect
                            x="100.37"
                            y="356.72"
                            width="4.75"
                            height={3}
                            transform="translate(-223.2 177.56) rotate(-45)"
                          />
                          <rect
                            x="105.84"
                            y="351.24"
                            width="4.75"
                            height={3}
                            transform="translate(-217.73 179.83) rotate(-45)"
                          />
                          <rect
                            x="103.98"
                            y="353.98"
                            width={3}
                            height={3}
                            transform="translate(-220.47 178.71) rotate(-45)"
                          />
                          <rect
                            x="206.72"
                            y="355.84"
                            width={3}
                            height="4.75"
                            transform="translate(-192.31 252.15) rotate(-45)"
                          />
                          <rect
                            x="201.24"
                            y="350.37"
                            width={3}
                            height="4.75"
                            transform="translate(-190.04 246.67) rotate(-45)"
                          />
                          <rect
                            x="205.84"
                            y="351.24"
                            width="4.75"
                            height={3}
                            transform="translate(-188.44 250.55) rotate(-45)"
                          />
                          <rect
                            x="200.37"
                            y="356.72"
                            width="4.75"
                            height={3}
                            transform="translate(-193.91 248.26) rotate(-45)"
                          />
                          <rect
                            x="203.98"
                            y="353.98"
                            width={3}
                            height={3}
                            transform="translate(-191.18 249.42) rotate(-45)"
                          />
                          <rect
                            x="301.24"
                            y="350.37"
                            width={3}
                            height="4.75"
                            transform="translate(-160.75 317.38) rotate(-45)"
                          />
                          <rect
                            x="306.72"
                            y="355.84"
                            width={3}
                            height="4.75"
                            transform="translate(-163.02 322.86) rotate(-45)"
                          />
                          <rect
                            x="300.37"
                            y="356.72"
                            width="4.75"
                            height={3}
                            transform="translate(-164.63 318.97) rotate(-45)"
                          />
                          <rect
                            x="305.84"
                            y="351.24"
                            width="4.75"
                            height={3}
                            transform="translate(-159.15 321.26) rotate(-45)"
                          />
                          <rect
                            x="303.98"
                            y="353.98"
                            width={3}
                            height={3}
                            transform="translate(-161.89 320.13) rotate(-45)"
                          />
                          <rect
                            x="406.72"
                            y="355.84"
                            width={3}
                            height="4.75"
                            transform="translate(-133.73 393.57) rotate(-45)"
                          />
                          <rect
                            x="401.24"
                            y="350.37"
                            width={3}
                            height="4.75"
                            transform="translate(-131.46 388.09) rotate(-45)"
                          />
                          <rect
                            x="405.84"
                            y="351.24"
                            width="4.75"
                            height={3}
                            transform="translate(-129.86 391.97) rotate(-45)"
                          />
                          <rect
                            x="400.37"
                            y="356.72"
                            width="4.75"
                            height={3}
                            transform="translate(-135.34 389.68) rotate(-45)"
                          />
                          <rect
                            x="403.98"
                            y="353.98"
                            width={3}
                            height={3}
                            transform="translate(-132.6 390.85) rotate(-45)"
                          />
                          <rect
                            x="51.24"
                            y="0.37"
                            width={3}
                            height="4.75"
                            transform="translate(13.51 38.09) rotate(-45)"
                          />
                          <rect
                            x="56.72"
                            y="5.84"
                            width={3}
                            height="4.75"
                            transform="translate(11.24 43.57) rotate(-45)"
                          />
                          <rect
                            x="55.84"
                            y="1.24"
                            width="4.75"
                            height={3}
                            transform="translate(15.11 41.97) rotate(-45)"
                          />
                          <rect
                            x="50.37"
                            y="6.72"
                            width="4.75"
                            height={3}
                            transform="translate(9.64 39.7) rotate(-45)"
                          />
                          <rect
                            x="53.98"
                            y="3.98"
                            width={3}
                            height={3}
                            transform="translate(12.38 40.83) rotate(-45)"
                          />
                          <rect
                            x="152.24"
                            y="200.37"
                            width={3}
                            height="4.75"
                            transform="translate(-98.33 168.09) rotate(-45)"
                          />
                          <rect
                            x="157.72"
                            y="205.84"
                            width={3}
                            height="4.75"
                            transform="translate(-100.6 173.57) rotate(-45)"
                          />
                          <rect
                            x="151.37"
                            y="206.72"
                            width="4.75"
                            height={3}
                            transform="translate(-102.2 169.69) rotate(-45)"
                          />
                          <rect
                            x="156.84"
                            y="201.24"
                            width="4.75"
                            height={3}
                            transform="translate(-96.72 171.95) rotate(-45)"
                          />
                          <rect
                            x="154.98"
                            y="203.98"
                            width={3}
                            height={3}
                            transform="translate(-99.46 170.83) rotate(-45)"
                          />
                          <rect
                            x="256.72"
                            y="205.84"
                            width={3}
                            height="4.75"
                            transform="translate(-71.6 243.57) rotate(-45)"
                          />
                          <rect
                            x="251.24"
                            y="200.37"
                            width={3}
                            height="4.75"
                            transform="translate(-69.33 238.09) rotate(-45)"
                          />
                          <rect
                            x="250.37"
                            y="206.72"
                            width="4.75"
                            height={3}
                            transform="translate(-73.21 239.69) rotate(-45)"
                          />
                          <rect
                            x="255.84"
                            y="201.24"
                            width="4.75"
                            height={3}
                            transform="translate(-67.73 241.97) rotate(-45)"
                          />
                          <rect
                            x="253.98"
                            y="203.98"
                            width={3}
                            height={3}
                            transform="translate(-70.47 240.84) rotate(-45)"
                          />
                          <rect
                            x="350.24"
                            y="200.37"
                            width={3}
                            height="4.75"
                            transform="translate(-40.34 308.1) rotate(-45)"
                          />
                          <rect
                            x="355.72"
                            y="205.84"
                            width={3}
                            height="4.75"
                            transform="translate(-42.6 313.57) rotate(-45)"
                          />
                          <rect
                            x="354.84"
                            y="201.24"
                            width="4.75"
                            height={3}
                            transform="translate(-38.73 311.97) rotate(-45)"
                          />
                          <rect
                            x="349.37"
                            y="206.72"
                            width="4.75"
                            height={3}
                            transform="translate(-44.21 309.69) rotate(-45)"
                          />
                          <rect
                            x="352.98"
                            y="203.98"
                            width={3}
                            height={3}
                            transform="translate(-41.47 310.85) rotate(-45)"
                          />
                          <rect
                            x="51.24"
                            y="200.37"
                            width={3}
                            height="4.75"
                            transform="translate(-127.91 96.67) rotate(-45)"
                          />
                          <rect
                            x="56.72"
                            y="205.84"
                            width={3}
                            height="4.75"
                            transform="translate(-130.18 102.15) rotate(-45)"
                          />
                          <rect
                            x="50.37"
                            y="206.72"
                            width="4.75"
                            height={3}
                            transform="translate(-131.78 98.27) rotate(-45)"
                          />
                          <rect
                            x="55.84"
                            y="201.24"
                            width="4.75"
                            height={3}
                            transform="translate(-126.31 100.55) rotate(-45)"
                          />
                          <rect
                            x="53.98"
                            y="203.98"
                            width={3}
                            height={3}
                            transform="translate(-129.05 99.42) rotate(-45)"
                          />
                          <rect
                            x="152.24"
                            y="300.37"
                            width={3}
                            height="4.75"
                            transform="translate(-169.04 197.38) rotate(-45)"
                          />
                          <rect
                            x="157.72"
                            y="305.84"
                            width={3}
                            height="4.75"
                            transform="translate(-171.31 202.86) rotate(-45)"
                          />
                          <rect
                            x="156.84"
                            y="301.24"
                            width="4.75"
                            height={3}
                            transform="translate(-167.43 201.24) rotate(-45)"
                          />
                          <rect
                            x="151.37"
                            y="306.72"
                            width="4.75"
                            height={3}
                            transform="translate(-172.91 198.98) rotate(-45)"
                          />
                          <rect
                            x="154.98"
                            y="303.98"
                            width={3}
                            height={3}
                            transform="translate(-170.17 200.12) rotate(-45)"
                          />
                          <rect
                            x="256.72"
                            y="305.84"
                            width={3}
                            height="4.75"
                            transform="translate(-142.31 272.86) rotate(-45)"
                          />
                          <rect
                            x="251.24"
                            y="300.37"
                            width={3}
                            height="4.75"
                            transform="translate(-140.04 267.38) rotate(-45)"
                          />
                          <rect
                            x="250.37"
                            y="306.72"
                            width="4.75"
                            height={3}
                            transform="translate(-143.91 268.98) rotate(-45)"
                          />
                          <rect
                            x="255.84"
                            y="301.24"
                            width="4.75"
                            height={3}
                            transform="translate(-138.44 271.26) rotate(-45)"
                          />
                          <rect
                            x="253.98"
                            y="303.98"
                            width={3}
                            height={3}
                            transform="translate(-141.18 270.13) rotate(-45)"
                          />
                          <rect
                            x="355.72"
                            y="305.84"
                            width={3}
                            height="4.75"
                            transform="translate(-113.32 342.86) rotate(-45)"
                          />
                          <rect
                            x="350.24"
                            y="300.37"
                            width={3}
                            height="4.75"
                            transform="translate(-111.05 337.39) rotate(-45)"
                          />
                          <rect
                            x="349.37"
                            y="306.72"
                            width="4.75"
                            height={3}
                            transform="translate(-114.92 338.98) rotate(-45)"
                          />
                          <rect
                            x="354.84"
                            y="301.24"
                            width="4.75"
                            height={3}
                            transform="translate(-109.44 341.26) rotate(-45)"
                          />
                          <rect
                            x="352.98"
                            y="303.98"
                            width={3}
                            height={3}
                            transform="translate(-112.18 340.14) rotate(-45)"
                          />
                          <rect
                            x="56.72"
                            y="305.84"
                            width={3}
                            height="4.75"
                            transform="translate(-200.89 131.44) rotate(-45)"
                          />
                          <rect
                            x="51.24"
                            y="300.37"
                            width={3}
                            height="4.75"
                            transform="translate(-198.62 125.96) rotate(-45)"
                          />
                          <rect
                            x="55.84"
                            y="301.24"
                            width="4.75"
                            height={3}
                            transform="translate(-197.02 129.83) rotate(-45)"
                          />
                          <rect
                            x="50.37"
                            y="306.72"
                            width="4.75"
                            height={3}
                            transform="translate(-202.49 127.56) rotate(-45)"
                          />
                          <rect
                            x="53.98"
                            y="303.98"
                            width={3}
                            height={3}
                            transform="translate(-199.76 128.71) rotate(-45)"
                          />
                          <rect
                            x="157.72"
                            y="405.84"
                            width={3}
                            height="4.75"
                            transform="translate(-242.02 232.15) rotate(-45)"
                          />
                          <rect
                            x="152.24"
                            y="400.37"
                            width={3}
                            height="4.75"
                            transform="translate(-239.75 226.67) rotate(-45)"
                          />
                          <rect
                            x="151.37"
                            y="406.72"
                            width="4.75"
                            height={3}
                            transform="translate(-243.62 228.27) rotate(-45)"
                          />
                          <rect
                            x="156.84"
                            y="401.24"
                            width="4.75"
                            height={3}
                            transform="translate(-238.14 230.52) rotate(-45)"
                          />
                          <rect
                            x="154.98"
                            y="403.98"
                            width={3}
                            height={3}
                            transform="translate(-240.88 229.41) rotate(-45)"
                          />
                          <rect
                            x="256.72"
                            y="405.84"
                            width={3}
                            height="4.75"
                            transform="translate(-213.02 302.15) rotate(-45)"
                          />
                          <rect
                            x="251.24"
                            y="400.37"
                            width={3}
                            height="4.75"
                            transform="translate(-210.75 296.67) rotate(-45)"
                          />
                          <rect
                            x="250.37"
                            y="406.72"
                            width="4.75"
                            height={3}
                            transform="translate(-214.62 298.26) rotate(-45)"
                          />
                          <rect
                            x="255.84"
                            y="401.24"
                            width="4.75"
                            height={3}
                            transform="translate(-209.15 300.55) rotate(-45)"
                          />
                          <rect
                            x="253.98"
                            y="403.98"
                            width={3}
                            height={3}
                            transform="translate(-211.89 299.42) rotate(-45)"
                          />
                          <rect
                            x="350.24"
                            y="400.37"
                            width={3}
                            height="4.75"
                            transform="translate(-181.76 366.68) rotate(-45)"
                          />
                          <rect
                            x="355.72"
                            y="405.84"
                            width={3}
                            height="4.75"
                            transform="translate(-184.03 372.15) rotate(-45)"
                          />
                          <rect
                            x="349.37"
                            y="406.72"
                            width="4.75"
                            height={3}
                            transform="translate(-185.63 368.26) rotate(-45)"
                          />
                          <rect
                            x="354.84"
                            y="401.24"
                            width="4.75"
                            height={3}
                            transform="translate(-180.15 370.55) rotate(-45)"
                          />
                          <rect
                            x="352.98"
                            y="403.98"
                            width={3}
                            height={3}
                            transform="translate(-182.89 369.43) rotate(-45)"
                          />
                          <rect
                            x="51.24"
                            y="400.37"
                            width={3}
                            height="4.75"
                            transform="translate(-269.33 155.25) rotate(-45)"
                          />
                          <rect
                            x="56.72"
                            y="405.84"
                            width={3}
                            height="4.75"
                            transform="translate(-271.6 160.73) rotate(-45)"
                          />
                          <rect
                            x="50.37"
                            y="406.72"
                            width="4.75"
                            height={3}
                            transform="translate(-273.2 156.85) rotate(-45)"
                          />
                          <rect
                            x="55.84"
                            y="401.24"
                            width="4.75"
                            height={3}
                            transform="translate(-267.73 159.12) rotate(-45)"
                          />
                          <rect
                            x="53.98"
                            y="403.98"
                            width={3}
                            height={3}
                            transform="translate(-270.47 158) rotate(-45)"
                          />
                        </svg>{" "}
                      </span>
                    </div>
                    {/* /Hightlight One SVG Shape*/}
                  </div>
                  {/* /Highlight One Image Section*/}
                  {/* Highlight One Text Section*/}
                  <div
                    className="col-12 col-md-6 col-xl-5 offset-xl-1 position-relative"
                    data-aos="fade-in"
                  >
                    <div className="position-relative z-index-20">
                      <p className="mb-0 small fw-bolder tracking-wider text-uppercase text-primary">
                      Design Together
                      </p>
                      <h4 className="fs-1 fw-bold mb-4 mt-3">
                      Build something amazing together.
                      </h4>
                      <p className="text-muted">
                      No Design Skills Needed. Create a Masterpiece in Minutes.
                      </p>
                      <a
                        role="button"
                        className="btn btn-link px-0 me-3 fw-medium text-decoration-none mt-4"
                        onClick={() => (state.page = "customizer")}
                      >
                        Let's get started →
                      </a>
                    </div>
                  </div>
                  {/* /Highlight One Text Section*/}
                </div>
              </div>
              {/* /Hightlight One*/}
              {/* Highlight Two*/}
              <div className="container py-5 py-lg-8">
                <div className="row g-5 g-lg-10 d-flex align-items-center flex-row-reverse">
                  {/* Highlight Two Image Section*/}
                  <div
                    className="col-12 col-md-6 col-xl-5 offset-xl-1 position-relative"
                    data-aos="fade-in"
                  >
                    <picture className="position-relative z-index-20">
                      <img
                        className="img-fluid rounded-5"
                        src="../assets/images/cover.png"
                        alt="HTML Bootstrap Template by Pixel Rocket"
                      />
                    </picture>
                    {/* Hightlight Two SVG Shape*/}
                    <div className="d-none d-xl-block f-w-60 position-absolute top-n13 end-n3 opacity-75">
                      <span className="d-block">
                        <svg
                          className="w-100"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 411.39 411.39"
                        >
                          <circle cx="355.89" cy="255.89" r="2.5" fill="none" />
                          <circle cx="355.89" cy="55.89" r="2.5" fill="none" />
                          <circle cx="305.89" cy="105.89" r="2.5" fill="none" />
                          <circle cx="255.89" cy="155.89" r="2.5" fill="none" />
                          <circle cx="305.89" cy="205.89" r="2.5" fill="none" />
                          <circle cx="305.89" cy="405.89" r="2.5" fill="none" />
                          <circle cx="405.89" cy="5.89" r="2.5" fill="none" />
                          <circle cx="305.89" cy="305.89" r="2.5" fill="none" />
                          <circle cx="205.89" cy="105.89" r="2.5" fill="none" />
                          <circle cx="255.89" cy="255.89" r="2.5" fill="none" />
                          <circle cx="205.89" cy="205.89" r="2.5" fill="none" />
                          <circle cx="305.89" cy="5.89" r="2.5" fill="none" />
                          <circle cx="355.89" cy="355.89" r="2.5" fill="none" />
                          <circle cx="205.89" cy="405.89" r="2.5" fill="none" />
                          <circle cx="205.89" cy="305.89" r="2.5" fill="none" />
                          <circle cx="355.89" cy="155.89" r="2.5" fill="none" />
                          <circle cx="405.89" cy="405.89" r="2.5" fill="none" />
                          <circle cx="405.89" cy="205.89" r="2.5" fill="none" />
                          <circle cx="405.89" cy="305.89" r="2.5" fill="none" />
                          <circle cx="405.89" cy="105.89" r="2.5" fill="none" />
                          <circle cx="5.89" cy="305.89" r="2.5" fill="none" />
                          <circle cx="5.89" cy="5.89" r="2.5" fill="none" />
                          <circle cx="55.89" cy="55.89" r="2.5" fill="none" />
                          <circle cx="55.89" cy="155.89" r="2.5" fill="none" />
                          <circle cx="55.89" cy="355.89" r="2.5" fill="none" />
                          <circle cx="55.89" cy="255.89" r="2.5" fill="none" />
                          <circle cx="155.89" cy="55.89" r="2.5" fill="none" />
                          <circle cx="105.89" cy="305.89" r="2.5" fill="none" />
                          <circle cx="105.89" cy="205.89" r="2.5" fill="none" />
                          <circle cx="105.89" cy="105.89" r="2.5" fill="none" />
                          <circle cx="205.89" cy="5.89" r="2.5" fill="none" />
                          <circle cx="255.89" cy="355.89" r="2.5" fill="none" />
                          <circle cx="105.89" cy="405.89" r="2.5" fill="none" />
                          <circle cx="255.89" cy="55.89" r="2.5" fill="none" />
                          <circle cx="105.89" cy="5.89" r="2.5" fill="none" />
                          <circle cx="5.89" cy="205.89" r="2.5" fill="none" />
                          <circle cx="5.89" cy="405.89" r="2.5" fill="none" />
                          <circle cx="155.89" cy="355.89" r="2.5" fill="none" />
                          <circle cx="155.89" cy="255.89" r="2.5" fill="none" />
                          <circle cx="155.89" cy="155.89" r="2.5" fill="none" />
                          <circle cx="5.89" cy="105.89" r="2.5" fill="none" />
                          <path
                            d="M5.89,11.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,5.89,11.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,5.89,3.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M55.89,50.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,55.89,50.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,55.89,58.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M155.89,61.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,155.89,61.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,155.89,53.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M255.89,50.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,255.89,50.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,255.89,58.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M355.89,50.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,355.89,50.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,355.89,58.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M55.89,150.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,55.89,150.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,55.89,158.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M155.89,161.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,155.89,161.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,155.89,153.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M255.89,150.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,255.89,150.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,255.89,158.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M355.89,150.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,355.89,150.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,355.89,158.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M55.89,250.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,55.89,250.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,55.89,258.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M155.89,261.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,155.89,261.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,155.89,253.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M255.89,250.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,255.89,250.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,255.89,258.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M355.89,250.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,355.89,250.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,355.89,258.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M55.89,350.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,55.89,350.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,55.89,358.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M155.89,361.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,155.89,361.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,155.89,353.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M255.89,350.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,255.89,350.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,255.89,358.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M355.89,350.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,355.89,350.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,355.89,358.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M105.89,11.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,105.89,11.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,105.89,3.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M205.89,11.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,205.89,11.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,205.89,3.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M305.89,11.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,305.89,11.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,305.89,3.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M405.89,11.39a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,405.89,11.39Zm0-8a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,405.89,3.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M5.89,100.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,5.89,100.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,5.89,108.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M105.89,100.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,105.89,100.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,105.89,108.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M205.89,100.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,205.89,100.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,205.89,108.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M305.89,100.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,305.89,100.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,305.89,108.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M405.89,100.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,405.89,100.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,405.89,108.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M5.89,200.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,5.89,200.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,5.89,208.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M105.89,200.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,105.89,200.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,105.89,208.39Z"
                            fill="#bcbcbc"
                          />
                          <path d="M205.89,200.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,205.89,200.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,205.89,208.39Z" />
                          <path
                            d="M305.89,200.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,305.89,200.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,305.89,208.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M405.89,200.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,405.89,200.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,405.89,208.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M5.89,300.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,5.89,300.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,5.89,308.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M105.89,300.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,105.89,300.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,105.89,308.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M205.89,300.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,205.89,300.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,205.89,308.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M305.89,300.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,305.89,300.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,305.89,308.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M405.89,300.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,405.89,300.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,405.89,308.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M5.89,400.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,5.89,400.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,5.89,408.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M105.89,400.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,105.89,400.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,105.89,408.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M205.89,400.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,205.89,400.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,205.89,408.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M305.89,400.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,305.89,400.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,305.89,408.39Z"
                            fill="#bcbcbc"
                          />
                          <path
                            d="M405.89,400.39a5.5,5.5,0,1,0,5.5,5.5A5.51,5.51,0,0,0,405.89,400.39Zm0,8a2.5,2.5,0,1,1,2.5-2.5A2.51,2.51,0,0,1,405.89,408.39Z"
                            fill="#bcbcbc"
                          />
                          <rect
                            x="152.24"
                            y="100.37"
                            width={3}
                            height="4.75"
                            transform="translate(-27.62 138.8) rotate(-45)"
                          />
                          <rect
                            x="157.72"
                            y="105.84"
                            width={3}
                            height="4.75"
                            transform="translate(-29.89 144.28) rotate(-45)"
                          />
                          <rect
                            x="151.37"
                            y="106.72"
                            width="4.75"
                            height={3}
                            transform="translate(-31.49 140.41) rotate(-45)"
                          />
                          <rect
                            x="156.84"
                            y="101.24"
                            width="4.75"
                            height={3}
                            transform="translate(-26.02 142.67) rotate(-45)"
                          />
                          <rect
                            x="154.98"
                            y="103.98"
                            width={3}
                            height={3}
                            transform="translate(-28.75 141.54) rotate(-45)"
                          />
                          <rect
                            x="256.72"
                            y="105.84"
                            width={3}
                            height="4.75"
                            transform="translate(-0.89 214.28) rotate(-45)"
                          />
                          <rect
                            x="251.24"
                            y="100.37"
                            width={3}
                            height="4.75"
                            transform="translate(1.38 208.8) rotate(-45)"
                          />
                          <rect
                            x="255.84"
                            y="101.24"
                            width="4.75"
                            height={3}
                            transform="translate(2.98 212.68) rotate(-45)"
                          />
                          <rect
                            x="250.37"
                            y="106.72"
                            width="4.75"
                            height={3}
                            transform="translate(-2.5 210.4) rotate(-45)"
                          />
                          <rect
                            x="253.98"
                            y="103.98"
                            width={3}
                            height={3}
                            transform="translate(0.25 211.55) rotate(-45)"
                          />
                          <rect
                            x="355.72"
                            y="105.84"
                            width={3}
                            height="4.75"
                            transform="translate(28.11 284.29) rotate(-45)"
                          />
                          <rect
                            x="350.24"
                            y="100.37"
                            width={3}
                            height="4.75"
                            transform="translate(30.37 278.81) rotate(-45)"
                          />
                          <rect
                            x="354.84"
                            y="101.24"
                            width="4.75"
                            height={3}
                            transform="translate(31.98 282.68) rotate(-45)"
                          />
                          <rect
                            x="349.37"
                            y="106.72"
                            width="4.75"
                            height={3}
                            transform="translate(26.5 280.4) rotate(-45)"
                          />
                          <rect
                            x="352.98"
                            y="103.98"
                            width={3}
                            height={3}
                            transform="translate(29.24 281.55) rotate(-45)"
                          />
                          <rect
                            x="51.24"
                            y="100.37"
                            width={3}
                            height="4.75"
                            transform="translate(-57.2 67.38) rotate(-45)"
                          />
                          <rect
                            x="56.72"
                            y="105.84"
                            width={3}
                            height="4.75"
                            transform="translate(-59.47 72.86) rotate(-45)"
                          />
                          <rect
                            x="55.84"
                            y="101.24"
                            width="4.75"
                            height={3}
                            transform="translate(-55.6 71.26) rotate(-45)"
                          />
                          <rect
                            x="50.37"
                            y="106.72"
                            width="4.75"
                            height={3}
                            transform="translate(-61.07 68.98) rotate(-45)"
                          />
                          <rect
                            x="53.98"
                            y="103.98"
                            width={3}
                            height={3}
                            transform="translate(-58.34 70.12) rotate(-45)"
                          />
                          <rect
                            x="152.24"
                            y="0.37"
                            width={3}
                            height="4.75"
                            transform="translate(43.09 109.51) rotate(-45)"
                          />
                          <rect
                            x="157.72"
                            y="5.84"
                            width={3}
                            height="4.75"
                            transform="translate(40.82 114.99) rotate(-45)"
                          />
                          <rect
                            x="156.84"
                            y="1.24"
                            width="4.75"
                            height={3}
                            transform="translate(44.7 113.38) rotate(-45)"
                          />
                          <rect
                            x="151.37"
                            y="6.72"
                            width="4.75"
                            height={3}
                            transform="translate(39.22 111.11) rotate(-45)"
                          />
                          <rect
                            x="154.98"
                            y="3.98"
                            width={3}
                            height={3}
                            transform="translate(41.96 112.25) rotate(-45)"
                          />
                          <rect
                            x="251.24"
                            y="0.37"
                            width={3}
                            height="4.75"
                            transform="translate(72.09 179.52) rotate(-45)"
                          />
                          <rect
                            x="256.72"
                            y="5.84"
                            width={3}
                            height="4.75"
                            transform="translate(69.82 184.99) rotate(-45)"
                          />
                          <rect
                            x="250.37"
                            y="6.72"
                            width="4.75"
                            height={3}
                            transform="translate(68.21 181.11) rotate(-45)"
                          />
                          <rect
                            x="255.84"
                            y="1.24"
                            width="4.75"
                            height={3}
                            transform="translate(73.69 183.39) rotate(-45)"
                          />
                          <rect
                            x="253.98"
                            y="3.98"
                            width={3}
                            height={3}
                            transform="translate(70.96 182.26) rotate(-45)"
                          />
                          <rect
                            x="350.24"
                            y="0.37"
                            width={3}
                            height="4.75"
                            transform="translate(101.09 249.52) rotate(-45)"
                          />
                          <rect
                            x="355.72"
                            y="5.84"
                            width={3}
                            height="4.75"
                            transform="translate(98.82 255) rotate(-45)"
                          />
                          <rect
                            x="349.37"
                            y="6.72"
                            width="4.75"
                            height={3}
                            transform="translate(97.21 251.12) rotate(-45)"
                          />
                          <rect
                            x="354.84"
                            y="1.24"
                            width="4.75"
                            height={3}
                            transform="translate(102.69 253.39) rotate(-45)"
                          />
                          <rect
                            x="352.98"
                            y="3.98"
                            width={3}
                            height={3}
                            transform="translate(99.96 252.26) rotate(-45)"
                          />
                          <rect
                            x="1.24"
                            y="50.37"
                            width={3}
                            height="4.75"
                            transform="translate(-36.49 17.38) rotate(-45)"
                          />
                          <rect
                            x="6.72"
                            y="55.84"
                            width={3}
                            height="4.75"
                            transform="translate(-38.76 22.86) rotate(-45)"
                          />
                          <rect
                            x="0.37"
                            y="56.72"
                            width="4.75"
                            height={3}
                            transform="translate(-40.36 18.99) rotate(-45)"
                          />
                          <rect
                            x="5.84"
                            y="51.24"
                            width="4.75"
                            height={3}
                            transform="translate(-34.89 21.26) rotate(-45)"
                          />
                          <rect
                            x="3.98"
                            y="53.98"
                            width={3}
                            height={3}
                            transform="translate(-37.62 20.12) rotate(-45)"
                          />
                          <rect
                            x="101.24"
                            y="50.37"
                            width={3}
                            height="4.75"
                            transform="translate(-7.2 88.09) rotate(-45)"
                          />
                          <rect
                            x="106.72"
                            y="55.84"
                            width={3}
                            height="4.75"
                            transform="translate(-9.47 93.57) rotate(-45)"
                          />
                          <rect
                            x="105.84"
                            y="51.24"
                            width="4.75"
                            height={3}
                            transform="translate(-5.6 91.97) rotate(-45)"
                          />
                          <rect
                            x="100.37"
                            y="56.72"
                            width="4.75"
                            height={3}
                            transform="translate(-11.07 89.69) rotate(-45)"
                          />
                          <rect
                            x="103.98"
                            y="53.98"
                            width={3}
                            height={3}
                            transform="translate(-8.33 90.84) rotate(-45)"
                          />
                          <rect
                            x="206.72"
                            y="55.84"
                            width={3}
                            height="4.75"
                            transform="translate(19.82 164.28) rotate(-45)"
                          />
                          <rect
                            x="201.24"
                            y="50.37"
                            width={3}
                            height="4.75"
                            transform="translate(22.09 158.8) rotate(-45)"
                          />
                          <rect
                            x="200.37"
                            y="56.72"
                            width="4.75"
                            height={3}
                            transform="translate(18.21 160.4) rotate(-45)"
                          />
                          <rect
                            x="205.84"
                            y="51.24"
                            width="4.75"
                            height={3}
                            transform="translate(23.69 162.68) rotate(-45)"
                          />
                          <rect
                            x="203.98"
                            y="53.98"
                            width={3}
                            height={3}
                            transform="translate(20.96 161.55) rotate(-45)"
                          />
                          <rect
                            x="301.24"
                            y="50.37"
                            width={3}
                            height="4.75"
                            transform="translate(51.38 229.52) rotate(-45)"
                          />
                          <rect
                            x="306.72"
                            y="55.84"
                            width={3}
                            height="4.75"
                            transform="translate(49.11 234.99) rotate(-45)"
                          />
                          <rect
                            x="300.37"
                            y="56.72"
                            width="4.75"
                            height={3}
                            transform="translate(47.5 231.11) rotate(-45)"
                          />
                          <rect
                            x="305.84"
                            y="51.24"
                            width="4.75"
                            height={3}
                            transform="translate(52.98 233.39) rotate(-45)"
                          />
                          <rect
                            x="303.98"
                            y="53.98"
                            width={3}
                            height={3}
                            transform="translate(50.25 232.26) rotate(-45)"
                          />
                          <rect
                            x="406.72"
                            y="55.84"
                            width={3}
                            height="4.75"
                            transform="translate(78.4 305.7) rotate(-45)"
                          />
                          <rect
                            x="401.24"
                            y="50.37"
                            width={3}
                            height="4.75"
                            transform="translate(80.67 300.23) rotate(-45)"
                          />
                          <rect
                            x="400.37"
                            y="56.72"
                            width="4.75"
                            height={3}
                            transform="translate(76.79 301.82) rotate(-45)"
                          />
                          <rect
                            x="405.84"
                            y="51.24"
                            width="4.75"
                            height={3}
                            transform="translate(82.27 304.1) rotate(-45)"
                          />
                          <rect
                            x="403.98"
                            y="53.98"
                            width={3}
                            height={3}
                            transform="translate(79.54 302.97) rotate(-45)"
                          />
                          <rect
                            x="1.24"
                            y="150.37"
                            width={3}
                            height="4.75"
                            transform="translate(-107.2 46.67) rotate(-45)"
                          />
                          <rect
                            x="6.72"
                            y="155.84"
                            width={3}
                            height="4.75"
                            transform="translate(-109.47 52.15) rotate(-45)"
                          />
                          <rect
                            x="0.37"
                            y="156.72"
                            width="4.75"
                            height={3}
                            transform="translate(-111.07 48.27) rotate(-45)"
                          />
                          <rect
                            x="5.84"
                            y="151.24"
                            width="4.75"
                            height={3}
                            transform="translate(-105.6 50.55) rotate(-45)"
                          />
                          <rect
                            x="3.98"
                            y="153.98"
                            width={3}
                            height={3}
                            transform="translate(-108.34 49.41) rotate(-45)"
                          />
                          <rect
                            x="101.24"
                            y="150.37"
                            width={3}
                            height="4.75"
                            transform="translate(-77.91 117.38) rotate(-45)"
                          />
                          <rect
                            x="106.72"
                            y="155.84"
                            width={3}
                            height="4.75"
                            transform="translate(-80.18 122.86) rotate(-45)"
                          />
                          <rect
                            x="100.37"
                            y="156.72"
                            width="4.75"
                            height={3}
                            transform="translate(-81.78 118.98) rotate(-45)"
                          />
                          <rect
                            x="105.84"
                            y="151.24"
                            width="4.75"
                            height={3}
                            transform="translate(-76.31 121.26) rotate(-45)"
                          />
                          <rect
                            x="103.98"
                            y="153.98"
                            width={3}
                            height={3}
                            transform="translate(-79.05 120.13) rotate(-45)"
                          />
                          <rect
                            x="206.72"
                            y="155.84"
                            width={3}
                            height="4.75"
                            transform="translate(-50.89 193.57) rotate(-45)"
                          />
                          <rect
                            x="201.24"
                            y="150.37"
                            width={3}
                            height="4.75"
                            transform="translate(-48.62 188.09) rotate(-45)"
                          />
                          <rect
                            x="200.37"
                            y="156.72"
                            width="4.75"
                            height={3}
                            transform="translate(-52.5 189.69) rotate(-45)"
                          />
                          <rect
                            x="205.84"
                            y="151.24"
                            width="4.75"
                            height={3}
                            transform="translate(-47.02 191.97) rotate(-45)"
                          />
                          <rect
                            x="203.98"
                            y="153.98"
                            width={3}
                            height={3}
                            transform="translate(-49.76 190.84) rotate(-45)"
                          />
                          <rect
                            x="306.72"
                            y="155.84"
                            width={3}
                            height="4.75"
                            transform="translate(-21.6 264.28) rotate(-45)"
                          />
                          <rect
                            x="301.24"
                            y="150.37"
                            width={3}
                            height="4.75"
                            transform="translate(-19.33 258.8) rotate(-45)"
                          />
                          <rect
                            x="305.84"
                            y="151.24"
                            width="4.75"
                            height={3}
                            transform="translate(-17.73 262.68) rotate(-45)"
                          />
                          <rect
                            x="300.37"
                            y="156.72"
                            width="4.75"
                            height={3}
                            transform="translate(-23.21 260.4) rotate(-45)"
                          />
                          <rect
                            x="303.98"
                            y="153.98"
                            width={3}
                            height={3}
                            transform="translate(-20.46 261.55) rotate(-45)"
                          />
                          <rect
                            x="406.72"
                            y="155.84"
                            width={3}
                            height="4.75"
                            transform="translate(7.69 334.99) rotate(-45)"
                          />
                          <rect
                            x="401.24"
                            y="150.37"
                            width={3}
                            height="4.75"
                            transform="translate(9.96 329.52) rotate(-45)"
                          />
                          <rect
                            x="400.37"
                            y="156.72"
                            width="4.75"
                            height={3}
                            transform="translate(6.08 331.11) rotate(-45)"
                          />
                          <rect
                            x="405.84"
                            y="151.24"
                            width="4.75"
                            height={3}
                            transform="translate(11.56 333.39) rotate(-45)"
                          />
                          <rect
                            x="403.98"
                            y="153.98"
                            width={3}
                            height={3}
                            transform="translate(8.83 332.26) rotate(-45)"
                          />
                          <rect
                            x="1.24"
                            y="250.37"
                            width={3}
                            height="4.75"
                            transform="translate(-177.91 75.96) rotate(-45)"
                          />
                          <rect
                            x="6.72"
                            y="255.84"
                            width={3}
                            height="4.75"
                            transform="translate(-180.18 81.44) rotate(-45)"
                          />
                          <rect
                            x="5.84"
                            y="251.24"
                            width="4.75"
                            height={3}
                            transform="translate(-176.31 79.83) rotate(-45)"
                          />
                          <rect
                            x="0.37"
                            y="256.72"
                            width="4.75"
                            height={3}
                            transform="translate(-181.78 77.56) rotate(-45)"
                          />
                          <rect
                            x="3.98"
                            y="253.98"
                            width={3}
                            height={3}
                            transform="translate(-179.05 78.7) rotate(-45)"
                          />
                          <rect
                            x="101.24"
                            y="250.37"
                            width={3}
                            height="4.75"
                            transform="translate(-148.62 146.67) rotate(-45)"
                          />
                          <rect
                            x="106.72"
                            y="255.84"
                            width={3}
                            height="4.75"
                            transform="translate(-150.89 152.15) rotate(-45)"
                          />
                          <rect
                            x="105.84"
                            y="251.24"
                            width="4.75"
                            height={3}
                            transform="translate(-147.02 150.55) rotate(-45)"
                          />
                          <rect
                            x="100.37"
                            y="256.72"
                            width="4.75"
                            height={3}
                            transform="translate(-152.49 148.27) rotate(-45)"
                          />
                          <rect
                            x="103.98"
                            y="253.98"
                            width={3}
                            height={3}
                            transform="translate(-149.76 149.42) rotate(-45)"
                          />
                          <rect
                            x="201.24"
                            y="250.37"
                            width={3}
                            height="4.75"
                            transform="translate(-119.33 217.38) rotate(-45)"
                          />
                          <rect
                            x="206.72"
                            y="255.84"
                            width={3}
                            height="4.75"
                            transform="translate(-121.6 222.86) rotate(-45)"
                          />
                          <rect
                            x="200.37"
                            y="256.72"
                            width="4.75"
                            height={3}
                            transform="translate(-123.2 218.98) rotate(-45)"
                          />
                          <rect
                            x="205.84"
                            y="251.24"
                            width="4.75"
                            height={3}
                            transform="translate(-117.73 221.26) rotate(-45)"
                          />
                          <rect
                            x="203.98"
                            y="253.98"
                            width={3}
                            height={3}
                            transform="translate(-120.47 220.13) rotate(-45)"
                          />
                          <rect
                            x="301.24"
                            y="250.37"
                            width={3}
                            height="4.75"
                            transform="translate(-90.04 288.09) rotate(-45)"
                          />
                          <rect
                            x="306.72"
                            y="255.84"
                            width={3}
                            height="4.75"
                            transform="translate(-92.31 293.57) rotate(-45)"
                          />
                          <rect
                            x="305.84"
                            y="251.24"
                            width="4.75"
                            height={3}
                            transform="translate(-88.44 291.97) rotate(-45)"
                          />
                          <rect
                            x="300.37"
                            y="256.72"
                            width="4.75"
                            height={3}
                            transform="translate(-93.92 289.69) rotate(-45)"
                          />
                          <rect
                            x="303.98"
                            y="253.98"
                            width={3}
                            height={3}
                            transform="translate(-91.18 290.84) rotate(-45)"
                          />
                          <rect
                            x="401.24"
                            y="250.37"
                            width={3}
                            height="4.75"
                            transform="translate(-60.75 358.8) rotate(-45)"
                          />
                          <rect
                            x="406.72"
                            y="255.84"
                            width={3}
                            height="4.75"
                            transform="translate(-63.02 364.28) rotate(-45)"
                          />
                          <rect
                            x="400.37"
                            y="256.72"
                            width="4.75"
                            height={3}
                            transform="translate(-64.63 360.39) rotate(-45)"
                          />
                          <rect
                            x="405.84"
                            y="251.24"
                            width="4.75"
                            height={3}
                            transform="translate(-59.15 362.68) rotate(-45)"
                          />
                          <rect
                            x="403.98"
                            y="253.98"
                            width={3}
                            height={3}
                            transform="translate(-61.89 361.55) rotate(-45)"
                          />
                          <rect
                            x="6.72"
                            y="355.84"
                            width={3}
                            height="4.75"
                            transform="translate(-250.89 110.73) rotate(-45)"
                          />
                          <rect
                            x="1.24"
                            y="350.37"
                            width={3}
                            height="4.75"
                            transform="translate(-248.62 105.25) rotate(-45)"
                          />
                          <rect
                            x="0.37"
                            y="356.72"
                            width="4.75"
                            height={3}
                            transform="translate(-252.49 106.85) rotate(-45)"
                          />
                          <rect
                            x="5.84"
                            y="351.24"
                            width="4.75"
                            height={3}
                            transform="translate(-247.02 109.12) rotate(-45)"
                          />
                          <rect
                            x="3.98"
                            y="353.98"
                            width={3}
                            height={3}
                            transform="translate(-249.76 108) rotate(-45)"
                          />
                          <rect
                            x="106.72"
                            y="355.84"
                            width={3}
                            height="4.75"
                            transform="translate(-221.6 181.44) rotate(-45)"
                          />
                          <rect
                            x="101.24"
                            y="350.37"
                            width={3}
                            height="4.75"
                            transform="translate(-219.33 175.96) rotate(-45)"
                          />
                          <rect
                            x="100.37"
                            y="356.72"
                            width="4.75"
                            height={3}
                            transform="translate(-223.2 177.56) rotate(-45)"
                          />
                          <rect
                            x="105.84"
                            y="351.24"
                            width="4.75"
                            height={3}
                            transform="translate(-217.73 179.83) rotate(-45)"
                          />
                          <rect
                            x="103.98"
                            y="353.98"
                            width={3}
                            height={3}
                            transform="translate(-220.47 178.71) rotate(-45)"
                          />
                          <rect
                            x="206.72"
                            y="355.84"
                            width={3}
                            height="4.75"
                            transform="translate(-192.31 252.15) rotate(-45)"
                          />
                          <rect
                            x="201.24"
                            y="350.37"
                            width={3}
                            height="4.75"
                            transform="translate(-190.04 246.67) rotate(-45)"
                          />
                          <rect
                            x="205.84"
                            y="351.24"
                            width="4.75"
                            height={3}
                            transform="translate(-188.44 250.55) rotate(-45)"
                          />
                          <rect
                            x="200.37"
                            y="356.72"
                            width="4.75"
                            height={3}
                            transform="translate(-193.91 248.26) rotate(-45)"
                          />
                          <rect
                            x="203.98"
                            y="353.98"
                            width={3}
                            height={3}
                            transform="translate(-191.18 249.42) rotate(-45)"
                          />
                          <rect
                            x="301.24"
                            y="350.37"
                            width={3}
                            height="4.75"
                            transform="translate(-160.75 317.38) rotate(-45)"
                          />
                          <rect
                            x="306.72"
                            y="355.84"
                            width={3}
                            height="4.75"
                            transform="translate(-163.02 322.86) rotate(-45)"
                          />
                          <rect
                            x="300.37"
                            y="356.72"
                            width="4.75"
                            height={3}
                            transform="translate(-164.63 318.97) rotate(-45)"
                          />
                          <rect
                            x="305.84"
                            y="351.24"
                            width="4.75"
                            height={3}
                            transform="translate(-159.15 321.26) rotate(-45)"
                          />
                          <rect
                            x="303.98"
                            y="353.98"
                            width={3}
                            height={3}
                            transform="translate(-161.89 320.13) rotate(-45)"
                          />
                          <rect
                            x="406.72"
                            y="355.84"
                            width={3}
                            height="4.75"
                            transform="translate(-133.73 393.57) rotate(-45)"
                          />
                          <rect
                            x="401.24"
                            y="350.37"
                            width={3}
                            height="4.75"
                            transform="translate(-131.46 388.09) rotate(-45)"
                          />
                          <rect
                            x="405.84"
                            y="351.24"
                            width="4.75"
                            height={3}
                            transform="translate(-129.86 391.97) rotate(-45)"
                          />
                          <rect
                            x="400.37"
                            y="356.72"
                            width="4.75"
                            height={3}
                            transform="translate(-135.34 389.68) rotate(-45)"
                          />
                          <rect
                            x="403.98"
                            y="353.98"
                            width={3}
                            height={3}
                            transform="translate(-132.6 390.85) rotate(-45)"
                          />
                          <rect
                            x="51.24"
                            y="0.37"
                            width={3}
                            height="4.75"
                            transform="translate(13.51 38.09) rotate(-45)"
                          />
                          <rect
                            x="56.72"
                            y="5.84"
                            width={3}
                            height="4.75"
                            transform="translate(11.24 43.57) rotate(-45)"
                          />
                          <rect
                            x="55.84"
                            y="1.24"
                            width="4.75"
                            height={3}
                            transform="translate(15.11 41.97) rotate(-45)"
                          />
                          <rect
                            x="50.37"
                            y="6.72"
                            width="4.75"
                            height={3}
                            transform="translate(9.64 39.7) rotate(-45)"
                          />
                          <rect
                            x="53.98"
                            y="3.98"
                            width={3}
                            height={3}
                            transform="translate(12.38 40.83) rotate(-45)"
                          />
                          <rect
                            x="152.24"
                            y="200.37"
                            width={3}
                            height="4.75"
                            transform="translate(-98.33 168.09) rotate(-45)"
                          />
                          <rect
                            x="157.72"
                            y="205.84"
                            width={3}
                            height="4.75"
                            transform="translate(-100.6 173.57) rotate(-45)"
                          />
                          <rect
                            x="151.37"
                            y="206.72"
                            width="4.75"
                            height={3}
                            transform="translate(-102.2 169.69) rotate(-45)"
                          />
                          <rect
                            x="156.84"
                            y="201.24"
                            width="4.75"
                            height={3}
                            transform="translate(-96.72 171.95) rotate(-45)"
                          />
                          <rect
                            x="154.98"
                            y="203.98"
                            width={3}
                            height={3}
                            transform="translate(-99.46 170.83) rotate(-45)"
                          />
                          <rect
                            x="256.72"
                            y="205.84"
                            width={3}
                            height="4.75"
                            transform="translate(-71.6 243.57) rotate(-45)"
                          />
                          <rect
                            x="251.24"
                            y="200.37"
                            width={3}
                            height="4.75"
                            transform="translate(-69.33 238.09) rotate(-45)"
                          />
                          <rect
                            x="250.37"
                            y="206.72"
                            width="4.75"
                            height={3}
                            transform="translate(-73.21 239.69) rotate(-45)"
                          />
                          <rect
                            x="255.84"
                            y="201.24"
                            width="4.75"
                            height={3}
                            transform="translate(-67.73 241.97) rotate(-45)"
                          />
                          <rect
                            x="253.98"
                            y="203.98"
                            width={3}
                            height={3}
                            transform="translate(-70.47 240.84) rotate(-45)"
                          />
                          <rect
                            x="350.24"
                            y="200.37"
                            width={3}
                            height="4.75"
                            transform="translate(-40.34 308.1) rotate(-45)"
                          />
                          <rect
                            x="355.72"
                            y="205.84"
                            width={3}
                            height="4.75"
                            transform="translate(-42.6 313.57) rotate(-45)"
                          />
                          <rect
                            x="354.84"
                            y="201.24"
                            width="4.75"
                            height={3}
                            transform="translate(-38.73 311.97) rotate(-45)"
                          />
                          <rect
                            x="349.37"
                            y="206.72"
                            width="4.75"
                            height={3}
                            transform="translate(-44.21 309.69) rotate(-45)"
                          />
                          <rect
                            x="352.98"
                            y="203.98"
                            width={3}
                            height={3}
                            transform="translate(-41.47 310.85) rotate(-45)"
                          />
                          <rect
                            x="51.24"
                            y="200.37"
                            width={3}
                            height="4.75"
                            transform="translate(-127.91 96.67) rotate(-45)"
                          />
                          <rect
                            x="56.72"
                            y="205.84"
                            width={3}
                            height="4.75"
                            transform="translate(-130.18 102.15) rotate(-45)"
                          />
                          <rect
                            x="50.37"
                            y="206.72"
                            width="4.75"
                            height={3}
                            transform="translate(-131.78 98.27) rotate(-45)"
                          />
                          <rect
                            x="55.84"
                            y="201.24"
                            width="4.75"
                            height={3}
                            transform="translate(-126.31 100.55) rotate(-45)"
                          />
                          <rect
                            x="53.98"
                            y="203.98"
                            width={3}
                            height={3}
                            transform="translate(-129.05 99.42) rotate(-45)"
                          />
                          <rect
                            x="152.24"
                            y="300.37"
                            width={3}
                            height="4.75"
                            transform="translate(-169.04 197.38) rotate(-45)"
                          />
                          <rect
                            x="157.72"
                            y="305.84"
                            width={3}
                            height="4.75"
                            transform="translate(-171.31 202.86) rotate(-45)"
                          />
                          <rect
                            x="156.84"
                            y="301.24"
                            width="4.75"
                            height={3}
                            transform="translate(-167.43 201.24) rotate(-45)"
                          />
                          <rect
                            x="151.37"
                            y="306.72"
                            width="4.75"
                            height={3}
                            transform="translate(-172.91 198.98) rotate(-45)"
                          />
                          <rect
                            x="154.98"
                            y="303.98"
                            width={3}
                            height={3}
                            transform="translate(-170.17 200.12) rotate(-45)"
                          />
                          <rect
                            x="256.72"
                            y="305.84"
                            width={3}
                            height="4.75"
                            transform="translate(-142.31 272.86) rotate(-45)"
                          />
                          <rect
                            x="251.24"
                            y="300.37"
                            width={3}
                            height="4.75"
                            transform="translate(-140.04 267.38) rotate(-45)"
                          />
                          <rect
                            x="250.37"
                            y="306.72"
                            width="4.75"
                            height={3}
                            transform="translate(-143.91 268.98) rotate(-45)"
                          />
                          <rect
                            x="255.84"
                            y="301.24"
                            width="4.75"
                            height={3}
                            transform="translate(-138.44 271.26) rotate(-45)"
                          />
                          <rect
                            x="253.98"
                            y="303.98"
                            width={3}
                            height={3}
                            transform="translate(-141.18 270.13) rotate(-45)"
                          />
                          <rect
                            x="355.72"
                            y="305.84"
                            width={3}
                            height="4.75"
                            transform="translate(-113.32 342.86) rotate(-45)"
                          />
                          <rect
                            x="350.24"
                            y="300.37"
                            width={3}
                            height="4.75"
                            transform="translate(-111.05 337.39) rotate(-45)"
                          />
                          <rect
                            x="349.37"
                            y="306.72"
                            width="4.75"
                            height={3}
                            transform="translate(-114.92 338.98) rotate(-45)"
                          />
                          <rect
                            x="354.84"
                            y="301.24"
                            width="4.75"
                            height={3}
                            transform="translate(-109.44 341.26) rotate(-45)"
                          />
                          <rect
                            x="352.98"
                            y="303.98"
                            width={3}
                            height={3}
                            transform="translate(-112.18 340.14) rotate(-45)"
                          />
                          <rect
                            x="56.72"
                            y="305.84"
                            width={3}
                            height="4.75"
                            transform="translate(-200.89 131.44) rotate(-45)"
                          />
                          <rect
                            x="51.24"
                            y="300.37"
                            width={3}
                            height="4.75"
                            transform="translate(-198.62 125.96) rotate(-45)"
                          />
                          <rect
                            x="55.84"
                            y="301.24"
                            width="4.75"
                            height={3}
                            transform="translate(-197.02 129.83) rotate(-45)"
                          />
                          <rect
                            x="50.37"
                            y="306.72"
                            width="4.75"
                            height={3}
                            transform="translate(-202.49 127.56) rotate(-45)"
                          />
                          <rect
                            x="53.98"
                            y="303.98"
                            width={3}
                            height={3}
                            transform="translate(-199.76 128.71) rotate(-45)"
                          />
                          <rect
                            x="157.72"
                            y="405.84"
                            width={3}
                            height="4.75"
                            transform="translate(-242.02 232.15) rotate(-45)"
                          />
                          <rect
                            x="152.24"
                            y="400.37"
                            width={3}
                            height="4.75"
                            transform="translate(-239.75 226.67) rotate(-45)"
                          />
                          <rect
                            x="151.37"
                            y="406.72"
                            width="4.75"
                            height={3}
                            transform="translate(-243.62 228.27) rotate(-45)"
                          />
                          <rect
                            x="156.84"
                            y="401.24"
                            width="4.75"
                            height={3}
                            transform="translate(-238.14 230.52) rotate(-45)"
                          />
                          <rect
                            x="154.98"
                            y="403.98"
                            width={3}
                            height={3}
                            transform="translate(-240.88 229.41) rotate(-45)"
                          />
                          <rect
                            x="256.72"
                            y="405.84"
                            width={3}
                            height="4.75"
                            transform="translate(-213.02 302.15) rotate(-45)"
                          />
                          <rect
                            x="251.24"
                            y="400.37"
                            width={3}
                            height="4.75"
                            transform="translate(-210.75 296.67) rotate(-45)"
                          />
                          <rect
                            x="250.37"
                            y="406.72"
                            width="4.75"
                            height={3}
                            transform="translate(-214.62 298.26) rotate(-45)"
                          />
                          <rect
                            x="255.84"
                            y="401.24"
                            width="4.75"
                            height={3}
                            transform="translate(-209.15 300.55) rotate(-45)"
                          />
                          <rect
                            x="253.98"
                            y="403.98"
                            width={3}
                            height={3}
                            transform="translate(-211.89 299.42) rotate(-45)"
                          />
                          <rect
                            x="350.24"
                            y="400.37"
                            width={3}
                            height="4.75"
                            transform="translate(-181.76 366.68) rotate(-45)"
                          />
                          <rect
                            x="355.72"
                            y="405.84"
                            width={3}
                            height="4.75"
                            transform="translate(-184.03 372.15) rotate(-45)"
                          />
                          <rect
                            x="349.37"
                            y="406.72"
                            width="4.75"
                            height={3}
                            transform="translate(-185.63 368.26) rotate(-45)"
                          />
                          <rect
                            x="354.84"
                            y="401.24"
                            width="4.75"
                            height={3}
                            transform="translate(-180.15 370.55) rotate(-45)"
                          />
                          <rect
                            x="352.98"
                            y="403.98"
                            width={3}
                            height={3}
                            transform="translate(-182.89 369.43) rotate(-45)"
                          />
                          <rect
                            x="51.24"
                            y="400.37"
                            width={3}
                            height="4.75"
                            transform="translate(-269.33 155.25) rotate(-45)"
                          />
                          <rect
                            x="56.72"
                            y="405.84"
                            width={3}
                            height="4.75"
                            transform="translate(-271.6 160.73) rotate(-45)"
                          />
                          <rect
                            x="50.37"
                            y="406.72"
                            width="4.75"
                            height={3}
                            transform="translate(-273.2 156.85) rotate(-45)"
                          />
                          <rect
                            x="55.84"
                            y="401.24"
                            width="4.75"
                            height={3}
                            transform="translate(-267.73 159.12) rotate(-45)"
                          />
                          <rect
                            x="53.98"
                            y="403.98"
                            width={3}
                            height={3}
                            transform="translate(-270.47 158) rotate(-45)"
                          />
                        </svg>{" "}
                      </span>
                    </div>
                    {/* /Hightlight Two SVG Shape*/}
                    <div
                      className="position-absolute bottom-3 start-5 z-index-30 d-none d-lg-block"
                      data-aos="fade-in"
                      data-aos-duration={350}
                      data-aos-delay={200}
                    >
                      <div className="p-3 bg-white shadow-lg rounded-3 f-w-16 mb-3">
                        <picture className="position-relative z-index-0">
                          <img
                            className="img-fluid"
                            src="../assets/images/colour.png"
                            alt="HTML Bootstrap Template by Pixel Rocket"
                          />
                        </picture>
                      </div>
                      <div className="p-3 bg-white shadow-lg rounded-3 f-w-16 mb-3">
                        <picture className="position-relative z-index-0">
                          <img
                            className="img-fluid"
                            src="../assets/images/upload.png"	
                            alt="HTML Bootstrap Template by Pixel Rocket"
                          />
                        </picture>
                      </div>
                      <div className="p-3 bg-white shadow-lg rounded-3 f-w-16 mb-3">
                        <picture className="position-relative z-index-0">
                          <img
                            className="img-fluid"
                            src="../assets/images/ai.png"
                            alt="HTML Bootstrap Template by Pixel Rocket"
                          />
                        </picture>
                      </div>
                      <div className="px-3 py-2 bg-primary shadow-lg rounded-3 f-w-16 mb-3">
                        <span className="fs-3">👍</span>
                      </div>
                    </div>
                  </div>
                  {/* /Highlight Two Image Section*/}
                  {/* Highlight Two Text Section*/}
                  <div
                    className="col-12 col-md-6 col-xl-5 offset-xl-1 position-relative"
                    data-aos="fade-in"
                  >
                    <div className="text-start text-lg-end">
                      <p className="mb-0 small fw-bolder tracking-wider text-uppercase text-orange">
                        Build faster
                      </p>
                      <h4 className="fs-1 fw-bold mb-4 mt-3">
                      Get your TeeChroma creation in a flash!
                      </h4>
                      <p className="text-muted">
                      Design and launch your dream tee faster than a speeding click! TeeChroma puts you in the creative driver's seat
                      </p>
                      <a
                        role="button"
                        className="btn btn-link px-0 me-3 fw-medium text-orange text-decoration-none mt-4"
                        onClick={() => (state.page = "customizer")}
                      >
                        Start your free trial →
                      </a>
                    </div>
                  </div>
                  {/* /Highlight Two Text Section*/}
                </div>
              </div>
              {/* /Hightlight Two*/}
            </div>
            {/* /Product Highlights*/}
            {/* Customer Reviews*/}
            <div className="pb-10">
              <div className="container">
                <p className="mb-3 small fw-bolder tracking-wider text-uppercase text-primary text-center">
                  Our Feedback
                </p>
                <h4 className="fs-1 fw-bold mb-6 text-center col-12 col-sm-6 col-md-5 col-lg-6 col-xl-4 mx-auto">
                  What our customers are saying about us
                </h4>
                <div className="mt-3 d-flex justify-content-center flex-column flex-md-row">
                  <a role="button" className="btn btn-primary mb-2 mb-md-0"
                  onClick={() => (state.page = "customizer")}
                  >
                    Ready to get started ?
                  </a>
                </div>
              </div>
              <div className="mt-5">
                <section className="marquee marquee-hover-pause">
                  <div className="marquee-body">
                    <div className="marquee-section animation-marquee-200 py-3">
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Just amazed at how easy to use TeeChroma is. Really
                          saved us a heap of time.
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-2.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Joe Smithy
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-15.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Teechroma is a game-changer! Spent hours customizing
                          my football jersey, and the result was beyond my
                          expectations. The attention to detail is fantastic!
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-3.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Patrick Johnson
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-16.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Spent a lot of time using TeeChroma the past few
                          weeks...love it!
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-4.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Sally Klein
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-17.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Teechroma is more than just a customization platform;
                          it's a celebration of football passion. I've never had
                          so much fun designing my own jersey!
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-5.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Rohit Sharma
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-18.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Still amazed at how easy to use TeeChroma is...just
                          great.
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-6.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Jeff Waite
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-19.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Teechroma brings football jersey design to life.
                          Simple, fun, and the results are top-notch!
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-7.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Kinsta Troy
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-20.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Designed my jersey effortlessly - highly recommend!
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-2.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Fred Couples
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-21.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Hooked. Can't live without it now!
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Sam Nelson
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-22.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                    <div className="marquee-section animation-marquee-200 py-3">
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Just amazed at how easy to use TeeChroma is. Really
                          saved us a heap of time.
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-2.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Joe Smithy
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-15.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Spent quality time customizing my football jersey, and
                          the result is pure awesomeness!
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-3.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Patrick Johnson
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-16.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Spent a lot of time using TeeChroma the past few
                          weeks...love it!
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-4.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Sally Klein
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-17.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          This is great value for money when you factor in the
                          time saved
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-5.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Rohit Sharma
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-18.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Still amazed at how easy to use TeeChroma is...just
                          great.
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-6.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Jeff Waite
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-19.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Impressed with the seamless integration of 3D modeling
                          and AI on Teechroma.5 stars!
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-7.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Kinsta Troy
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-20.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          The one-click integration with our hosting company is
                          a life-saver
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small-2.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Fred Couples
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-21.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="rounded shadow-sm border f-w-76 d-flex flex-wrap flex-column px-5 pb-5 pt-7 mx-4 text-wrap position-relative h-100">
                        <i className="ri-double-quotes-l position-absolute top-n1 start-2 ri-2x opacity-10" />
                        <p className="mb-2 fw-medium fs-6">
                          Hooked. Can't live without it now!
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <picture>
                            <img
                              className="f-w-10 rounded-circle"
                              src="../assets/images/profile-small.jpeg"
                              alt
                            />
                          </picture>
                          <span className="d-block text-muted fs-7 ms-3">
                            Sam Nelson
                          </span>
                        </div>
                        <div className="mt-4 f-w-20">
                          <picture>
                            <img
                              className="img-fluid d-table mx-auto"
                              src="../assets/images/logos/logo-22.svg"
                              alt
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* /Customer Reviews*/}
            {/* Latest Blog Posts*/}
            <div className="bg-primary py-10">
              <div className="container">
                <h4 className="fs-1 fw-bold mb-6 text-white text-center">
                  Our latest articles
                </h4>
                <div className="row g-5">
                  {/* Blog Post*/}
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="d-flex h-100 bg-white rounded card overflow-hidden shadow-lg position-relative hover-lift">
                      <picture>
                        <img
                          className="img-fluid"
                          src="../assets/images/blog1.jpg"
                          alt
                        />
                      </picture>
                      <div className="card-body p-4 p-lg-5">
                        <p className="card-title fw-medium mb-4">
                          Marcus Rashford's Philanthropic Triumphs Reach New Heights
                        </p>
                        <a
                          role="button"
                          className="fw-medium fs-7 text-decoration-none link-cover"
                        >
                          Read more →
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* / Blog Post*/}
                  {/* Blog Post*/}
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="d-flex h-100 bg-white rounded card overflow-hidden shadow-lg position-relative hover-lift">
                      <picture>
                        <img
                          className="img-fluid"
                          src="../assets/images/blog2.jpg"
                          alt
                        />
                      </picture>
                      <div className="card-body p-4 p-lg-5">
                        <p className="card-title fw-medium mb-4">
                          Darwin Nunez Emerges as Football's Rising Star
                        </p>
                        <a
                          role="button"
                          className="fw-medium fs-7 text-decoration-none link-cover"
                        >
                          Read more →
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* / Blog Post*/}
                  {/* Blog Post*/}
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="d-flex h-100 bg-white rounded card overflow-hidden shadow-lg position-relative hover-lift">
                      <picture>
                        <img
                          className="img-fluid"
                          src="../assets/images/blog3.jpg"
                          alt
                        />
                      </picture>
                      <div className="card-body p-4 p-lg-5">
                        <p className="card-title fw-medium mb-4">
                          France vs Argentina: Football Giants Clash in Riveting Showdown
                        </p>
                        <a
                          role="button"
                          className="fw-medium fs-7 text-decoration-none link-cover"
                        >
                          Read more →
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* / Blog Post*/}
                </div>
                <a
                  role="button"
                  className="btn btn-white mx-auto mt-7 d-table fw-medium w-100 w-md-auto"
                >
                  More articles →
                </a>
              </div>
            </div>
            {/* / Latest Blog Posts*/}
            {/* Product Features summary*/}
            <div className="py-10">
              <div className="container">
                <h4 className="fs-1 fw-bold mb-3 text-center">
                  Explore our features
                </h4>
                <p className="text-muted text-center">
                Unleash your creativity.
                </p>
                <div className="row gx-10 gy-7 mt-4">
                  {/* Feature*/}
                  <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-start">
                    <span className="f-w-8 d-block text-primary">
                      <img src="/assets/images/colour.png" alt="" />
                    </span>
                    <p className="fw-medium mb-1 mt-3 fs-5">Color Patterns</p>
                    <span className="text-muted fs-7">
                    Find Your Perfect Palette: Choose from vibrant color combinations or create your own unique blend.
                    </span>
                  </div>
                  {/* / Feature*/}
                  {/* Feature*/}
                  <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-start">
                    <span className="f-w-8 d-block text-primary">
                    <img src="/assets/images/upload.png" alt="" />
                    </span>
                    <p className="fw-medium mb-1 mt-3 fs-5">
                    Image-Based Designs
                    </p>
                    <span className="text-muted fs-7">
                    Upload Your Inspiration: Transform your favorite images into one-of-a-kind t-shirt designs.
                    </span>
                  </div>
                  {/* / Feature*/}
                  {/* Feature*/}
                  <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-start">
                    <span className="f-w-8 d-block text-primary">
                    <img src="/assets/images/ai.png" alt="" />
                    </span>
                    <p className="fw-medium mb-1 mt-3 fs-5">AI-Generated Designs</p>
                    <span className="text-muted fs-7">
                    Let AI Be Your Muse: Generate unique designs with the help of our innovative AI.
                    </span>
                  </div>
                  {/* / Feature*/}
                  
                </div>
                <a
                  role="button"
                  className="btn btn-primary d-table mx-auto mt-5 w-100 w-md-auto mt-lg-8 mb-3"
                  onClick={() => (state.page = "customizer")}
                >
                  Start your trial
                </a>
                <ul className="list-unstyled d-none d-md-flex align-items-center justify-content-center small text-muted mt-3 pt-1 fw-medium fs-9">
                  <li className="me-4 d-flex align-items-center">
                    <i className="ri-checkbox-circle-fill text-primary ri-lg me-1" />{" "}
                    No credit card required
                  </li>
                  <li className="me-4 d-flex align-items-center">
                    <i className="ri-checkbox-circle-fill text-primary ri-lg me-1" />{" "}
                    Cancel anytime
                  </li>
                  <li className="me-4 d-flex align-items-center">
                    <i className="ri-checkbox-circle-fill text-primary ri-lg me-1" />{" "}
                    30 day free trial
                  </li>
                </ul>
              </div>
            </div>
            {/* Product Features summary*/}
            {/* About Us*/}
            <div className="pt-10 bg-light">
              <div className="container">
                <div className="col-12 mx-auto col-sm-10 col-md-8 col-lg-6 text-center">
                  <h4 className="fs-1 fw-bold mb-4">Who we are</h4>
                  {/* Stats*/}
                  <div className="my-5 d-none d-md-flex align-items-start justify-content-between">
                    <div>
                      <span className="display-3 fw-bold text-primary d-block">
                        10
                      </span>
                      <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                      Countries
                      </span>
                    </div>
                    <div>
                      <span className="display-3 fw-bold text-primary d-block">
                        80K
                      </span>
                      <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                        Customers
                      </span>
                    </div>
                    <div>
                      <span className="display-3 fw-bold text-primary d-block">
                        200
                      </span>
                      <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                        Staff
                      </span>
                    </div>
                  </div>{" "}
                  {/* / Stats*/}
                  <p>
                    At Teecroma, we're not just a platform; we're the creators of personalized football passion, born from the fusion of 3D modeling and artificial intelligence. Our mission is to redefine how fans connect with their favorite sport through a seamless and interactive space for designing and customizing football jerseys.
                  </p>
                  <a role="button" className="btn btn-success mt-4"
                  onClick={() => (state.page = "about")}
                  >
                    Find out more
                  </a>
                </div>
              </div>
              <div className="position-relative mt-10">
                <picture className="d-table mx-auto mt-5 col-12 col-sm-10 position-relative z-index-20">
                  <img
                    className="img-fluid d-table mx-auto"
                    src="../assets/images/team-photo1.png"
                    alt="HTML Bootstrap Template by Pixel Rocket"
                  />
                </picture>
                {/* SVG shapes*/}
                <div className="position-absolute top-0 end-0 start-0 bottom-0 z-index-0 d-none d-lg-block">
                  <div className="d-block f-w-6 position-absolute top-n13 end-50">
                    <span className="d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 55.95 50.74"
                      >
                        <path
                          className="text-secondary"
                          d="M55.45,34.33A15.92,15.92,0,1,1,39.54,18.41,15.91,15.91,0,0,1,55.45,34.33Z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                        />
                        <path
                          className="text-body"
                          d="M34.33,18.41A15.92,15.92,0,1,1,18.41,2.5,15.92,15.92,0,0,1,34.33,18.41Z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={5}
                        />
                      </svg>{" "}
                    </span>
                  </div>
                  <div className="d-block f-w-6  position-absolute bottom-15 end-3 rotate-n45 origin-center">
                    <span className="d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 37.51 89.72"
                      >
                        <path
                          className="text-body"
                          d="M14.75,46.11C14.75,53,2.5,51.83,2.5,60.64"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={5}
                        />
                        <path
                          className="text-body"
                          d="M14.75,17C14.75,24,2.5,22.75,2.5,31.57"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={5}
                        />
                        <path
                          className="text-body"
                          d="M14.75,46.11c0-6.91-12.25-5.72-12.25-14.54"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={5}
                        />
                        <path
                          className="text-body"
                          d="M14.75,17C14.75,10.13,2.5,11.32,2.5,2.5"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={5}
                        />
                        <path
                          className="text-secondary"
                          d="M37,75.18c0,6.91-12.25,5.72-12.25,14.54"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                        />
                        <path
                          className="text-secondary"
                          d="M37,46.11C37,53,24.76,51.83,24.76,60.64"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                        />
                        <path
                          className="text-secondary"
                          d="M37,75.18c0-6.91-12.25-5.72-12.25-14.54"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                        />
                        <path
                          className="text-secondary"
                          d="M37,46.11c0-6.91-12.25-5.72-12.25-14.54"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                        />
                      </svg>{" "}
                    </span>
                  </div>
                  <div className="d-block f-w-4  position-absolute bottom-50 start-3">
                    <span className="d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20.25 20.25"
                      >
                        <line
                          className="text-body"
                          x1="17.75"
                          y1="17.28"
                          x2="2.5"
                          y2="2.97"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={5}
                        />
                        <line
                          className="text-body"
                          x1="2.97"
                          y1="17.75"
                          x2="17.28"
                          y2="2.5"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={5}
                        />
                      </svg>{" "}
                    </span>
                  </div>
                  <div className="d-block f-w-6  position-absolute top-n3 start-30">
                    <span className="d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 62.66 58.68"
                      >
                        <polygon
                          className="text-body"
                          points="20.69 33.95 38.85 23.45 20.68 12.98 2.5 2.5 2.52 23.47 2.53 44.45 20.69 33.95"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={5}
                        />
                        <polygon
                          className="text-secondary"
                          points="43.5 47.31 61.66 36.81 43.49 26.34 25.32 15.86 25.33 36.83 25.34 57.81 43.5 47.31"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                        />
                      </svg>{" "}
                    </span>
                  </div>
                  <div className="d-block f-w-6  position-absolute top-20 end-5">
                    <span className="d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 57.47 48.01"
                      >
                        <rect
                          className="text-body"
                          x="2.5"
                          y="2.5"
                          width="31.65"
                          height="31.65"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={5}
                        />
                        <rect
                          className="text-secondary"
                          x="25.32"
                          y="15.86"
                          width="31.65"
                          height="31.65"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                        />
                      </svg>{" "}
                    </span>
                  </div>
                  <div className="d-block f-w-6  position-absolute top-n13 end-25">
                    <span className="d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 41.23 48.04"
                      >
                        <path
                          className="text-body"
                          d="M18.41,34.18a15.84,15.84,0,1,1,0-31.68"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={5}
                        />
                        <path
                          className="text-secondary"
                          d="M41.23,47.54a15.84,15.84,0,1,1,0-31.68"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                        />
                      </svg>{" "}
                    </span>
                  </div>
                  <div className="d-block f-w-4 position-absolute top-n13 start-20">
                    <span className="d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.53 17.53"
                      >
                        <path
                          className="text-body"
                          d="M12.11,14.07a6.27,6.27,0,1,1,2-8.64A6.28,6.28,0,0,1,12.11,14.07Z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={5}
                        />
                      </svg>{" "}
                    </span>
                  </div>
                </div>
                {/* / SVG shapes*/}
              </div>
            </div>
            {/* / About Us*/}
            {/* /Page Content */}
          </main>
          {/* / Main Section*/}

          {/* Footer*/}
          <Footer />
          {/* / Footer*/}

          {/* Additional imports (modals, offcanvas)*/}
          {/* Modal Imports*/}
          {/* Video Modal Iframe*/}
          {/* Start Video Modal*/}
        </div>
      )}
    </>
  );
};

export default HomePage;
