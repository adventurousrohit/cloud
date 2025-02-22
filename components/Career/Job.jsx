import React from "react";

const JobOpenings = () => {
  const jobs = [
    {
      postName: "Tender Executive ",
      vacancies: 2,
      experience: "2 Years",
      skills: "Procurement knowledgeDocumentation expertiseStrong communicationNegotiation skills MS Office & ERP proficiency",
    },
    {
      postName: "Windows System Admin",
      vacancies: 2,
      experience: "6 Months – 2 Years",
      skills: "Active Directory management Windows Server configuration Group Policy administratio PowerShell scripting Network troubleshooting Patch management",
    },
    {
      postName: "ANDROID DEVELOPER",
      vacancies: 2,
      experience: "1–3 Years",
      skills: "Android SDK, REST and JSON",
    },
    {
      postName: "IOS DEVELOPER",
      vacancies: 2,
      experience: "0–2 Years",
      skills: "iOS, Xcode, Good Knowledge of Objective C, Swift",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mt-10 mb-10">Current Openings</h2>
      <table className="table table-bordered text-center align-middle">
        <thead className="bg-primary text-white">
          <tr>
            <th className="mt-2 mb-2" scope="col" style={{backgroundColor:"#080f2c",color:"white"}}>Post Name</th>
            <th scope="col" style={{backgroundColor:"#080f2c",color:"white"}}>Vacancies</th>
            <th scope="col" style={{backgroundColor:"#080f2c",color:"white"}}>Skills</th>
            <th scope="col" style={{backgroundColor:"#080f2c",color:"white"}}>Apply</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>
                <strong>{job.postName}</strong>
                <br />
                <small>Required experience – {job.experience}</small>
              </td>
              <td>
                <span className="text-primary">
                  Vacancies: {job.vacancies}
                </span>
              </td>
              <td>{job.skills}</td>
              <td>
              <a 
  href="mailto:hr@cloudminister.com" 
  className="link btn btn-sm btn-primary hover:bg-dark hover:border-dark fw-medium rounded-1"
>
  APPLY &nbsp; <i className="bi bi-arrow-right"></i>
</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobOpenings;
