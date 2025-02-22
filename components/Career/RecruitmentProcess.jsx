import React from "react";

const RecruitmentProcess = () => {
  return (
    <div className="container-fluid py-5 bg-dark text-white  mt-20">
      <div className="container">
        <div className="text-center mt-5 mb-5">
          <h2 className="fw-bold text-white">The Recruitment Process</h2>
          <p className="text-muted mt-5 mb-5">
          Step into a dynamic environment where ideas thrive, skills flourish, and dreams take shape. Let’s grow together and create a meaningful impact on the world.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <ul className="timeline">
              <li className="timeline-item">
                <div className="timeline-icon bg-primary text-white">01</div>
                <div className="timeline-content">
                  <h5 className="fw-bold text-white">CV Screening</h5>
                  <p className="text-muted">
                  Behind every great journey is a really careful assessment of the candidate's potential. Our team looks at the skill sets, experiences, and alignment with our company values carefully through each CV they review. This provides room only for the most suitable profiles to take meaningful discussions.
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-icon bg-primary text-white">02</div>
                <div className="timeline-content">
                  <h5 className="fw-bold text-white">Interview</h5>
                  <p className="text-muted">
                  We then communicate with the applicants through an exciting interview. At this stage, we move away from credentials, and instead seek to understand the aspirations, solving abilities, and fit with our culture. It is, therefore, an opportunity for learning from each other and setting a tone for a future collaboration.
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-icon bg-primary text-white">03</div>
                <div className="timeline-content">
                  <h5 className="fw-bold text-white">Technical Round</h5>
                  <p className="text-muted">
                  Shortlisted candidates are technically evaluated to ensure excellence in the role. This practical round tests their skills and expertise in solving real-world challenges. It is a moment to shine and showcase their unique capabilities.
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-icon bg-primary text-white">04</div>
                <div className="timeline-content">
                  <h5 className="fw-bold text-white">Final HR Discussion</h5>
                  <p className="text-muted">
                  The final step is a conversation with our HR team to align expectations and discuss future goals. Here, we focus on personal growth, company values, and how we can work together to achieve mutual success.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
         .timeline {
    list-style: none;
    padding: 0;
    position: relative;
  }

  .timeline:before {
    content: "";
    position: absolute;
    left: 23px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #555;
    height:82%
  }

        .timeline-item {
          position: relative;
          margin-bottom: 1rem;
          padding-left: 80px;
        }

        .timeline-icon {
          position: absolute;
          left: 0;
          top: 0;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .timeline-end {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .timeline-end-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 1.5rem;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .timeline-content {
          padding: 1rem;
        }

        .text-muted {
          color: #aaa !important;
        }

        @media (max-width: 768px) {
            .timeline:before {
    height:82%;
    left: 20px;
  }
          .timeline-item {
            padding-left: 60px;
          }

          .timeline-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }

          .timeline-end-icon {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }
        }

        @media (max-width: 576px) {
          .timeline-item {
            padding-left: 50px;
          }

          .timeline:before {
    height:80%;
    left: 18px;
  }
          .timeline-icon {
            width: 35px;
            height: 35px;
            font-size: 0.9rem;
          }

          .timeline-end-icon {
            width: 45px;
            height: 45px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RecruitmentProcess;