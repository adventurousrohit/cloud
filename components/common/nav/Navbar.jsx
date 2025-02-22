"use client";

import { useEffect, useRef, useState, useContext } from "react";
import { debounce } from "../others/Scroller";
import {
  domainServices,
  hostingServices,
  servers,
  email,
  CloudHosting,
} from "../../../utils/data";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CurrencyContext } from "../../currencyconversion/Currencyconversion";
import Select from "react-select";

const Navbar = () => {
  const router = useRouter();
  const path = router.pathname;
  const navbarRef = useRef(null);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [submenuActive, setSubmenuActive] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { currency, setCurrency } = useContext(CurrencyContext);
  const currencyOptions = [
    { value: "INR", label: "₹ INR" },
    { value: "USD", label: "$ USD" },
  ];

  useEffect(() => {
    // Reset the menuActive state when the path changes
    setMenuActive("");
  }, [path]);

  useEffect(() => {
    // Collapse the navbar on route change
    const collapseNavbar = () => {
      if (navbarRef.current) {
        navbarRef.current.classList.remove("show");
      }
    };
    collapseNavbar();
  }, [router.pathname]); // Run when route changes

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [menuActive, setMenuActive] = useState(""); // Initial empty state

  const toggleMenu = (menuName) => {
    console.log("menuName", menuName);
    setMenuActive((prev) => (prev === menuName ? "" : menuName));
  };
  // console.log('menuName12',menuActive)
  const toggleSubmenu = (submenuName) => {
    console.log(submenuName);
    setSubmenuActive((prev) => (prev === submenuName ? "" : submenuName));
  };
  // Ensure submenu remains active as long as the main menu item is hovered
  const handleMouseLeave = () => setSubmenuActive("");

  const handleScroll = debounce(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down and passed 50px - hide navbar
      setIsNavbarVisible(false);
    } else {
      // Scrolling up - show navbar
      setIsNavbarVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, 100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activePaths = [
    "/server-management/",
    "/cpanel-servers",
    "/plesk-servers",
    "/rackspace",
    "/linode-support/",
    "/webmin-servers/",
    "/directadmin-server/",
    "/solusvm-server/",
    "/virtualizor-server/",
    "/hyper-v-server/",
    "/aws-support/",
    "/digital-ocean/",
    "/ispconfig-server/",
    "/google-cloud/",
    "/azure/",
  ];
  const activePathsHosting = [
    "/vps-hosting/",
    "/linux-vps-server/",
    "/windows-vps-server/",
    "/cloud-hosting/",
    "/shared-hosting/",
    "/linux-shared-hosting/",
    "/windows-shared-hosting/",
    "/reseller-hosting/",
    "/windows-reseller-hosting/",
    "/linux-reseller-hosting/",
    "/gpu-server/",
    "/linux-gpu-server/",
    "/windows-gpu-server/",
    "/dedicated-server/",
    "/linux-dedicated-server/",
    "/windows-dedicated-server/",
    "/amazon-cloud-hosting/",
    "/microsoft-azure-cloud/",
    "/google-cloud/",
    "/akami-cloud",
  ];

  return (
    <div className="">
      <div className={`navbar-overlay`}>
        {isNavbarVisible && (
          <nav
            className={`navbar navbar-light bg-light py-2 ${
              isNavbarVisible ? "slide-down" : "slide-up"
            }`}
          >
            <div className="container">
              {/* Contact Information */}
              <div className="row w-100">
                {/* First Column: Contact Info */}
                <div
                  className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center mb-2 mb-md-0"
                  style={{ fontSize: "small" }}
                >
                  <a
                    href="tel:+918447755312"
                    className="text-decoration-none me-3 text-dark"
                    style={{ color: "#49495F" }}
                  >
                    <i className="las la-phone"></i> +91-8447755312
                  </a>
                  <a
                    href="mailto:sales@cloudminister.com"
                    className="text-decoration-none text-dark"
                    style={{ color: "#49495F" }}
                  >
                    <i className="las la-envelope"></i> sales@cloudminister.com
                  </a>
                </div>

                {/* Second Column: Links and Social Icons */}
                <div
                  className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center gap-2"
                  style={{ fontSize: "small" }}
                >
                  <a
                    href="https://manage.cloudminister.com/register.php"
                    className="text-decoration-none me-3 text-dark"
                    target="_blank"
                  >
                    <i className="la la-lock"></i> Register
                  </a>
                  <a
                    href="https://manage.cloudminister.com/login"
                    className="text-decoration-none me-3 text-dark"
                    target="_blank"
                  >
                    <i className="la la-key"></i> Login
                  </a>
                  <a
                    href="https://www.instagram.com/cloudminister/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border"
                  >
                    <span className="text-body">
                      <i className="lab la-instagram"></i>
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/Cloudminitech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border"
                  >
                    <span className="text-body">
                      <i className="lab la-facebook-f"></i>
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/cloudminitech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border"
                  >
                    <span className="text-body">
                      <i className="lab la-linkedin"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        )}

        <nav className="navbar navbar-expand-lg py-5 py-lg-0 navbar-box bg-body">
          <div className="container">
            <Link className="navbar-brand logo" href="/">
              <img
                src="/img/logo-light.webp"
                alt="image"
                className="logo__img"
              />
              <img
                src="/img/logo-light.webp"
                alt="image"
                className="logo__img logo__sticky"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#primaryMenu"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="primaryMenu"
              ref={navbarRef}
            >
              <ul className="navbar-nav align-items-lg-center gap-lg-3 ms-auto ">
                <li className="nav-item contain-sub-1 contain-sub-1">
                  <Link
                    href={"/"}
                    className={`nav-link fw-medium no-arrow ${
                      path === "/" ? "active" : ""
                    }`}
                    style={{ contain: "none" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item contain-sub-1">
                  <a
                    onClick={() => toggleMenu("domain")}
                    className={`nav-link fw-medium ${
                      path === "/domain-page" ||
                      path === "/domain-registration" ||
                      path === "/transfer-domain" ||
                      path === "/transfer-domain-search"
                        ? "active"
                        : ""
                    }`}
                    href="#"
                  >
                    Domain
                  </a>
                  <ul
                    className={`contain-sub-1__content list-unstyled ${
                      menuActive === "domain" && isMobile ? "d-block" : ""
                    }`}
                  >
                    {domainServices?.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className="contain-sub-1__link text-decoration-none d-flex align-items-start gap-2"
                        >
                          <span className="contain-sub-1__img">
                            <img
                              src={item.imgSrc}
                              alt="image"
                              className="img-fluid"
                            />
                          </span>
                          <span className="flex-grow-1">
                            <span className="contain-sub-1__title d-flex">
                              {item.title}
                            </span>
                            {/* {item.badge && <span className="badge bg-primary-subtle text-primary-emphasis fw-bold py-1">{item.badge}</span>} */}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item contain-sub-1">
                  <a
                    onClick={() => toggleMenu("hosting")}
                    className={`nav-link fw-medium ${
                      activePathsHosting.includes(path) ? "active" : ""
                    }`}
                  >
                    Hosting
                  </a>

                  <ul
                    className={`contain-sub-1__content list-unstyled ${
                      menuActive === "hosting" ? "d-block" : ""
                    }`}
                  >
                    {hostingServices?.map((item, i) => (
                      <li key={i} className="position-relative">
                        <Link
                          href={item.href}
                          className="contain-sub-1__link text-decoration-none d-flex align-items-start gap-2"
                          onMouseEnter={() => toggleSubmenu(item.title)}
                        >
                          <span className="contain-sub-1__img">
                            <img
                              src={item.imgSrc}
                              alt={item.imgAlt}
                              className="img-fluid"
                            />
                          </span>
                          <span className="flex-grow-1">
                            <span className="contain-sub-1__title d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-block">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="badge bg-primary-subtle text-primary-emphasis fw-bold py-1">
                                  {item.badge}
                                </span>
                              )}
                              {item.subServices && (
                                <i
                                  className="las la-arrow-right"
                                  style={{ fontSize: "20px" }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    toggleSubmenu(item.title);
                                  }}
                                ></i>
                              )}
                            </span>
                          </span>
                        </Link>

                        {item.subServices && (
                          <ul
                            className={`contain-sub-2__content list-unstyled ${
                              submenuActive === item.title
                                ? "d-block"
                                : "d-none"
                            }`}
                            onMouseLeave={handleMouseLeave}
                          >
                            {item.subServices.map((subItem, subIndex) => (
                              <li
                                key={subIndex}
                                className="submenu-item mt-3 mb-3"
                              >
                                <Link
                                  href={subItem.href}
                                  className="contain-sub-1__link text-decoration-none"
                                  onClick={() => setSubmenuActive("")}
                                >
                                  <span className="contain-sub-1__title text-center">
                                    <span className=" d-inline-block">
                                      {subItem.title}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="nav-item contain-sub-1">
                  <a
                    onClick={() => toggleMenu("cloud")}
                    className={`nav-link fw-medium ${
                      path === "" ? "active" : ""
                    }`}
                    href="#"
                  >
                    Cloud Hosting
                  </a>
                  <ul
                    className={`contain-sub-1__content contain-sub-1__content-xl list-unstyled ${
                      menuActive === "cloud" && isMobile ? "d-block" : ""
                    }`}
                  >
                    {CloudHosting?.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className="contain-sub-1__link text-decoration-none d-flex align-items-start gap-2"
                        >
                          <span className="contain-sub-1__img">
                            <img
                              src={item.imgSrc}
                              alt="image"
                              className="img-fluid"
                            />
                          </span>
                          <span className="flex-grow-1">
                            <span className="contain-sub-1__title d-flex">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="badge bg-primary-subtle text-primary-emphasis fw-bold py-1">
                                {item.badge}
                              </span>
                            )}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="nav-item contain-sub-1">
                  <a
                    onClick={() => toggleMenu("email")}
                    className={`nav-link fw-medium ${
                      path === "/microsoft-office365/" ? "active" : ""
                    }`}
                    href="#"
                  >
                    Email & Productivity
                  </a>
                  <ul
                    className={`contain-sub-1__content contain-sub-1__content-xl list-unstyled  ${
                      menuActive === "email" && isMobile ? "d-block" : ""
                    }`}
                  >
                    {email.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className="contain-sub-1__link text-decoration-none d-flex align-items-start gap-2"
                        >
                          <span className="contain-sub-1__img">
                            <img
                              src={item.imgSrc}
                              alt="image"
                              className="img-fluid"
                            />
                          </span>
                          <span className="flex-grow-1">
                            <span className="contain-sub-1__title d-flex">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="badge bg-primary-subtle text-primary-emphasis fw-bold py-1">
                                {item.badge}
                              </span>
                            )}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="nav-item contain-sub-1">
                  <Link
                    href={"/server-management/"}
                    onClick={() => toggleMenu("servers")}
                    className={`nav-link fw-medium ${
                      activePaths.includes(path) ? "active" : ""
                    }`}
                  >
                    Server Management
                  </Link>
                  <ul
                    className={`contain-sub-1__content contain-sub-1__content-xxl list-unstyled servers ${
                      menuActive === "servers" && isMobile ? "d-block" : ""
                    }`}
                  >
                    {servers?.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className="contain-sub-1__link text-decoration-none d-flex align-items-start gap-2"
                        >
                          <span className="contain-sub-1__img">
                            <img
                              src={item.imgSrc}
                              alt="image"
                              className="img-fluid"
                            />
                          </span>
                          <span className="flex-grow-1">
                            <span className="contain-sub-1__title d-flex">
                              {item.title}
                            </span>
                            <span className="contain-sub-1__description">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Select
                    options={currencyOptions}
                    value={currencyOptions.find(
                      (opt) => opt.value === currency
                    )}
                    onChange={(selected) => setCurrency(selected.value)}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        padding: "2px",
                        fontSize: "14px",
                        borderRadius: "8px",
                        border: "2px solid #ee9408",
                      }),
                      menu: (provided) => ({
                        ...provided,
                        zIndex: 9999, // Ensure dropdown appears above other elements
                      }),
                    }}
                    // menuPortalTarget={document.body} // Moves dropdown outside parent container
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
