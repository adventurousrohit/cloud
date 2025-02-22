"use client";
import { useState } from "react";
import VideoModal from "../common/others/VideoModal";
import DataCenterBrands from "./DataCenterBrands";
import Link from "next/link";

const features = [
  {
    title: "Microsoft Azure",
    description:
      "Our crew of experts is ready to tackle the issues of deploying scaled apps and instances on the Azure cloud platform.",
    imgSrc: "/img/azure.png",
    delay: 400,
    url: "/microsoft-azure-cloud",
  },
  {
    title: "AWS Support",
    description:
      "Our experts will take care of your daily operations, providing business-level management and service for the AWS instances.",
    imgSrc: "/img/AwsSmall.png",
    delay: 300,
    url: "/amazon-cloud-hosting",
  },

  {
    title: "Akamai",
    description:
      "Akamai provides advanced cloud services, enhancing website performance, cybersecurity, and content delivery for seamless, secure, and fast digital experiences globally.",
    imgSrc: "/img/New_Project__41_-removebg-preview.png",
    delay: 700,
    url: "/akamai-cloud",
  },

  // {
  //   title: 'Microsoft 365',
  //   description: 'Microsoft 365 offers Word, Excel, PowerPoint, Outlook, Publisher, and OneDrive, accessible online for viewing, editing, and sharing anytime.',
  //   imgSrc: '/img/Office_365-Logo.png',
  //   delay: 800,
  // },

  // {
  //   title: 'Linode Support',
  //   description: 'The Linode server maintenance plans that we offer are made focusing on data security. You need not fear the data getting lost at any point in time or any intrusion.',
  //   imgSrc: '/img/linod.png',
  //   delay: 500,
  // },
  // {
  //   title: 'Google Workspace',
  //   description: 'Google Workspace offers powerful tools for collaboration, communication, productivity, and secure cloud storage, streamlining workflows for teams and businesses.',
  //   imgSrc: '/img/googlework.png',
  //   delay: 600,
  // },
];
const DataCenterFeature = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <VideoModal isOpen={isOpen} setOpen={setOpen} />

      <section className="domain-container position-relative z-1 overflow-hidden mb-10">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-xl-12">
              <div className="card rounded-4">
                <DataCenterBrands />
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="card rounded-4">
                <div className="card-body pt-5 pb-60">
                  <div className="row justify-content-center">
                    <div className="row g-4 align-items-center justify-content-xl-between">
                      <div
                        className="col-lg-6"
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-delay="300"
                        data-sal-easing="ease-in-out-sine"
                      >
                        <small className="d-inline-block mb-2 fw-bold bg-success-subtle text-success-emphasis border border-success-subtle px-3 py-1 rounded">
                          <span className="d-inline-block w-2 h-2 bg-success rounded-circle me-1"></span>
                          Multi-Cloud Hosting Simplified
                        </small>
                        <h2 className="mb-4">
                          CloudMinister – Your Trusted Multi-Cloud Hosting
                          Partner
                        </h2>
                        <p className="max-text-60 mb-0 ">
                          Empower your business with the best cloud hosting
                          solutions from Microsoft Azure, Akamai, AWS, and
                          Google Cloud —all under one roof. At CloudMinister, we
                          provide seamless, scalable, and secure cloud hosting
                          services tailored to your needs.
                        </p>
                      </div>
                      <div
                        className="col-lg-6 col-xl-5"
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-delay="400"
                        data-sal-easing="ease-in-out-sine"
                      >
                        <div className="card">
                          <div className="card-body">
                            <div className="features-video position-relative z-1">
                              <img
                                src="/img/coverImg.jpeg"
                                alt="image"
                                className="img-fluid w-100"
                              />
                              <a
                                type="submit"
                                onClick={() => setOpen(true)}
                                className="btn gradient-bg w-15 h-15 d-grid place-content-center rounded-circle position-absolute top-50 start-50 translate-middle fs-24 text-white popup-init"
                              >
                                <i className="las la-play"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row g-4 g-md-0 feature-list">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="col-sm-6 col-md-4 feature-list__item"
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-delay={feature.delay}
                        data-sal-easing="ease-in-out-sine"
                      >
                        <div className="feature-list__card border text-center">
                          <div className="mb-8">
                            <img
                              src={feature.imgSrc}
                              alt={feature.title}
                              className="img-fluid"
                            />
                          </div>
                          <h6 className="mb-5">{feature.title}</h6>
                          <p className="mt-auto ">{feature.description}</p>
                          <div
                            className="mt-auto"
                            data-sal="fade"
                            data-sal-duration="500"
                            data-sal-delay="200"
                            data-sal-easing="ease-in-out-sine"
                          >
                            <Link
                              class="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded"
                              href={feature.url}
                            >
                              <span class="btn-arrow__text">
                                Read More
                                <span class="btn-arrow__icon">
                                  <i class="las la-arrow-right"></i>
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataCenterFeature;
