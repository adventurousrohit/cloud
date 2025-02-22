import { companyLinks, demoItems, domainServices, features, hostingServices, servers } from "../../utils/data"
import Link from "next/link";
const TransferDomainSearchNav = () => {

  return (
   
     <div className="navbar-overlays position-sticky top-0 bg-dark z-3">
      
      <div className="navbar-top py-1 border-bottom border-light border-opacity-10">
          <div className="container">
              <div className="row g-1">
                  <div className="col-md-6">
                      <small className="d-block fw-medium text-center text-md-start text-light">
                          🔥 Don't miss save now: <a href="#" className="text-decoration-none">Claim Deal Now</a>
                      </small>
                  </div>
                  <div className="col-md-6">
                      <ul className="navbar-nav flex-row align-items-center justify-content-center justify-content-md-end gap-2">
                          <li className="nav-item">
                              <a className="nav-link text-light p-1 fs-14 fw-medium" href="#">
                                  My Accounts
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link text-light p-1 fs-14 fw-medium" href="#">
                                  Live Chat
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
   
      <nav className="navbar navbar-1 navbar-expand-lg">
          <div className="container">
              <Link className="navbar-brand logo" href="/">
                  <img src="/img/logo-light.png" alt="image" className="logo__img"/>
                  <img src="/img/logo-dark.png" alt="image" className="logo__img logo__sticky"/>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primaryMenu" aria-expanded="false">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="primaryMenu">
                  <ul className="navbar-nav align-items-lg-center gap-lg-3 ms-auto">
                      <li className="nav-item contain-sub-1 contain-sub-1--alter">
                          <a className="nav-link fw-medium active" aria-current="page" href="#">Home</a>
                          <ul className="contain-sub-1__content contain-sub-1__content-xl list-unstyled">
                              {
                                  demoItems.map((item,i)=><li key={i}>
                                  <Link href={item.href} className="contain-sub-1__link text-decoration-none d-flex align-items-start gap-2">
                                      <span className="contain-sub-1__img">
                                          <img src={item.imgSrc} alt={item.alt}
                                              className="img-fluid"/>
                                      </span>
                                      <span className="flex-grow-1">
                                          <span className="contain-sub-1__title d-flex">{item.title}</span>
                                      <span className="contain-sub-1__description">{item.description}
                                          </span>
                                      </span>
                                  </Link>
                              </li>)
                              }
                             
                          </ul>
                      </li>
                      <li className="nav-item contain-sub-1">
                          <a className="nav-link fw-medium" href="#">
                              Hosting
                          </a>
                          <ul className="contain-sub-1__content contain-sub-1__content-xl list-unstyled">
                            {
                              hostingServices.map((item,i)=>  <li key={i}>
                              <Link href={item.href} className="contain-sub-1__link text-decoration-none d-flex align-items-start gap-2">
                                  <span className="contain-sub-1__img">
                                      <img src={item.imgSrc} alt="image"
                                          className="img-fluid"/>
                                  </span>
                                  <span className="flex-grow-1">
                                      <span
                                          className="contain-sub-1__title d-flex align-items-center justify-content-between gap-2">
                                          <span className="d-inline-block">
                                              {item.title}
                                          </span>
                                {
                                  item.badge &&   <span
                                  className="flex-shrink-0 badge bg-primary-subtle text-primary-emphasis fw-bold py-1">
                                  New
                              </span>
                                }
                                  </span>
                                  <span className="contain-sub-1__description">
                                          {item.description}
                                      </span>
                                  </span>
                              </Link>
                          </li>)
                            }
                             
                          </ul>
                      </li>
                      <li className="nav-item contain-sub-1">
                          <a className="nav-link fw-medium" href="#">
                              Servers
                          </a>
                          <ul className="contain-sub-1__content list-unstyled">
                             {
                              servers.map((item,i)=> <li key={i}>
                              <Link href={item.href} className="contain-sub-1__link text-decoration-none d-flex align-items-start gap-2">
                                  <span className="contain-sub-1__img">
                                      <img src={item.imgSrc} alt="image"
                                          className="img-fluid"/>
                                  </span>
                                  <span className="flex-grow-1">
                                      <span className="contain-sub-1__title d-flex">{item.title}</span>
                                  <span className="contain-sub-1__description">
                                          {item.description}
                                      </span>
                                  </span>
                              </Link>
                          </li>)
                             }
                             
                          </ul>
                      </li>
                      <li className="nav-item contain-mega-menu">
                          <a className="nav-link fw-medium" href="#">
                              Domain
                          </a>
                          <div className="contain-mega-menu__content">
                              <div className="container p-0">
                                  <div className="row g-0 align-items-center">
                                      <div className="col-xl-7">
                                          <div className="h-100 pt-32 pb-32 px-6">
                                              <span className="h6 d-block fs-18">Domain</span>
                                              <div className="row g-0 gx-md-5">
                                                  <div className="col-md-6">
                                                      <ul className="contain-mega-menu__list list-unstyled">
                                                         
                                                          {
                                                              domainServices.slice(0,2).map((item,i)=><li key={i}>
                                                              <Link href={item.href} className="contain-mega-menu__link text-decoration-none d-flex align-items-start gap-2">
                                                                  <span className="contain-mega-menu__img">
                                                                      <img src="/img/icon-menu-transfer-domain.png"
                                                                          alt="image" className="img-fluid"/>
                                                                  </span>
                                                                  <span className="flex-grow-1">
                                                                      <span
                                                                          className="contain-mega-menu__title d-flex align-items-center justify-content-between gap-2">
                                                                          <span className="d-inline-block">
                                                                              {item.title}
                                                                          </span>
                                                                  {
                                                                      item.badge && <span
                                                                      className="flex-shrink-0 badge bg-danger-subtle text-danger-emphasis fw-bold py-1">
                                                                      Hot
                                                                  </span>
                                                                  }
                                                                  </span>
                                                                  <span className="contain-mega-menu__description">
                                                                          {item.description}
                                                                      </span>
                                                                  </span>
                                                              </Link>
                                                          </li>)
                                                          }
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-6">
                                                  <ul className="contain-mega-menu__list list-unstyled">
                                                         
                                                         {
                                                             domainServices.slice(2,4).map((item,i)=><li key={i}>
                                                             <Link href={item.href} className="contain-mega-menu__link text-decoration-none d-flex align-items-start gap-2">
                                                                 <span className="contain-mega-menu__img">
                                                                     <img src="/img/icon-menu-transfer-domain.png"
                                                                         alt="image" className="img-fluid"/>
                                                                 </span>
                                                                 <span className="flex-grow-1">
                                                                     <span
                                                                         className="contain-mega-menu__title d-flex align-items-center justify-content-between gap-2">
                                                                         <span className="d-inline-block">
                                                                             {item.title}
                                                                         </span>
                                                                 {
                                                                     item.badge && <span
                                                                     className="flex-shrink-0 badge bg-danger-subtle text-danger-emphasis fw-bold py-1">
                                                                     Hot
                                                                 </span>
                                                                 }
                                                                 </span>
                                                                 <span className="contain-mega-menu__description">
                                                                         {item.description}
                                                                     </span>
                                                                 </span>
                                                             </Link>
                                                         </li>)
                                                         }
                                                     </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xl-5">
                                          <div className="h-100 p-6">
                                              <div className="row g-2 bg-primary bg-opacity-5 p-4 p-xl-8 rounded">
                                                  <div className="col-xl-6">
                                                      <span className="d-block h5 mb-4">
                                                          Buy a Domain
                                                          You Want
                                                      </span>
                                                      <div className="d-flex align-items-center gap-2 mb-4">
                                                          <div className="w-4 h-4 bg-success flex-shrink-0 bg-opacity-75 rounded-circle fs-10 lh-1 text-white d-flex align-items-center justify-content-center">
                                                              <i className="las la-check"></i>
                                                          </div>
                                                          <small className="fw-medium">Up to 32 Cores</small>
                                                      </div>
                                                      <Link href="domain-registration" className="btn btn-sm btn-primary">
                                                          Explore Now
                                                      </Link>
                                                  </div>
                                                  <div className="col-xl-6 d-none d-xl-block">
                                                      <img src="/img/mega-menu-img-1.png" alt="image" className="img-fluid"/>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </li>
                      <li className="nav-item contain-sub-1">
                          <a className="nav-link fw-medium" href="#">
                              Company
                          </a>
                          <ul className="contain-sub-1__content list-unstyled">
    {companyLinks.map((link, index) => (
      <li key={index}>
        <Link href={link.href} className="contain-sub-1__link text-decoration-none d-flex align-items-start gap-2">
          <span className="contain-sub-1__img">
            <img src={link.imgSrc} alt={link.imgAlt} className="img-fluid" />
          </span>
          <span className="flex-grow-1">
            <span className="contain-sub-1__title d-flex">
              {link.title}
            </span>
            <span className="contain-sub-1__description">
              {link.description}
            </span>
          </span>
        </Link>
      </li>
    ))}
  </ul>
                      </li>
                      <li className="nav-item contain-mega-menu">
                          <a className="nav-link fw-medium" href="#">
                              Feature
                          </a>
                          <div className="contain-mega-menu__content">
                              <div className="container p-0">
                                  <div className="row g-0 align-items-center">
                                      <div className="col-xl-7">
                                          <div className="h-100 pt-32 pb-32 px-6">
                                              <span className="h6 d-block fs-18">Feature</span>
                                              <div className="row g-0 gx-md-5">
    {features.map((section, sectionIndex) => (
      <div className="col-md-6" key={sectionIndex}>
        <ul className="contain-mega-menu__list list-unstyled">
          {section.items.map((item, itemIndex) => (
            <li key={itemIndex}>
              <Link href={item.href} className="contain-mega-menu__link text-decoration-none d-flex align-items-start gap-2">
                <span className="contain-mega-menu__img">
                  <img src={item.imgSrc} alt={item.imgAlt} className="img-fluid" />
                </span>
                <span className="flex-grow-1">
                  <span className="contain-mega-menu__title d-flex">
                    {item.title}
                  </span>
                  <span className="contain-mega-menu__description">
                    {item.description}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
                                          </div>
                                      </div>
                                      <div className="col-xl-5">
                                          <div className="h-100 p-6">
                                              <div className="row g-2 bg-primary bg-opacity-5 p-4 p-xl-8 rounded">
                                                  <div className="col-xl-6">
                                                      <span className="d-block h5 mb-4">
                                                          Buy a Domain
                                                          You Want
                                                      </span>
                                                      <div className="d-flex align-items-center gap-2 mb-4">
                                                          <div className="w-4 h-4 bg-success flex-shrink-0 bg-opacity-75 rounded-circle fs-10 lh-1 text-white d-flex align-items-center justify-content-center">
                                                              <i className="las la-check"></i>
                                                          </div>
                                                          <small className="fw-medium">Up to 32 Cores</small>
                                                      </div>
                                                      <Link href="domain-registration" className="btn btn-sm btn-primary">
                                                          Explore Now
                                                      </Link>
                                                  </div>
                                                  <div className="col-xl-6 d-none d-xl-block">
                                                      <img src="/img/mega-menu-img-1.png" alt="image" className="img-fluid"/>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link fw-medium" href="/price">
                              Pricing
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link href="/contact/" className="link btn btn-sm btn-primary hover:bg-dark hover:border-dark fw-medium rounded-1">
                              Get Started
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
     
  </div>
  
    
  )
};

export default TransferDomainSearchNav
