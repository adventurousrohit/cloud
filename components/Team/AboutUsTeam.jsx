const AboutUsTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Tanuj Chugh',
      role: 'Owner',
      image: '/Team/Tanuj Chugh.png',
      socialLinks:  'https://www.linkedin.com/in/tanuj-chugh-14828149/',
      animationDelay: 100,
    },
    {
      id: 2,
      name: 'Chandni Jagga',
      role: 'Co-Founder',
      image: '/Team/Chandni Jagga.png',
      socialLinks:  'https://www.linkedin.com/in/chandni-jagga-5a089bb6/',
      animationDelay: 200,
    },
    {
      id: 26,
      name: 'Manish Chugh ',
      role: 'CTO',
      image: '/Team/Manish Chugh (CTO).png',
      socialLinks:  'https://www.linkedin.com/in/manish-chugh-0b0b1b1b1/',
      animationDelay: 200,
    },
    {
      id: 18,
      name: 'Ruchita Shekhawat',
      role: 'Human Resources Executive',
      image: '/Team/Ruchita.jpeg',
      socialLinks:  'https://www.linkedin.com/in/ruchita-shekhawat/',
      animationDelay: 1800,
    },
    {
      id: 13,
      name: 'Komal Sharma',
      role: 'Billing Executive',
      image: '/Team/komal.jpeg',
      socialLinks:  'https://www.linkedin.com/in/komal-sharma-6655b4339/',
      animationDelay: 1300,
    },
    {
      id: 16,
      name: 'Rahul Soni',
      role: 'Accountant Executive',
      image: '/Team/Rahul Soni.png',
      socialLinks:  'https://linkedin.com/in/rahul-soni-852060261/',
      animationDelay: 1600,
    },
    {
      id: 14,
      name: 'Kritika Sharma',
      role: 'Administrator Manager',
      image: '/Team/Kritika Sharma.png',
      socialLinks:  'https://www.linkedin.com/in/𝐊𝐫𝐢𝐭𝐢𝐤𝐚-𝐒𝐡𝐚𝐫𝐦𝐚-aa26b5216/',
      animationDelay: 1400,
    },
    {
      id: 11,
      name: 'Girdhari Singh Rajpurohit',
      role: 'Head of Digital Marketing',
      image: '/Team/Girdhari Singh Rajpurohit.png',
      socialLinks:  'https://www.linkedin.com/in/girdhari-singh/',
      animationDelay: 1100,
    },
    {
      id: 24,
      name: 'Vishakha Jangid',
      role: 'Digital Marketing Executive',
      image: '/Team/Vishakha Jangid.png',
      socialLinks:  'https://www.linkedin.com/in/vishakha-jangid21/',
      animationDelay: 2400,
    },
    {
      id: 19,
      name: 'Sakshi Thadani',
      role: 'Content Writer',
      image: '/Team/sakshi.jpeg',
      socialLinks:  'https://www.linkedin.com/in/sakshi-thadani-551a24209/',
      animationDelay: 1900,
    },
    {
      id: 21,
      name: 'Shreya Manak bohara',
      role: 'Digital Marketing Intern',
      image: '/Team/Shreya Manak Bohara.png',
      socialLinks:  'https://www.linkedin.com/in/shreya-manak-bohara-bb20b922a/',
      animationDelay: 2100,
    },
    {
      id: 22,
      name: 'Varsha Gupta',
      role: 'Sr. Business Development Executive',
      image: '/Team/Varsha Gupta.png',
      socialLinks:  'https://www.linkedin.com/in/varsha-gupta-286025184/',
      animationDelay: 2200,
    },

    {
      id: 12,
      name: 'Himanshu Raj',
      role: 'Director of Sales',
      image: '/Team/Himanshu raj.png',
      socialLinks:  'https://www.linkedin.com/in/himanshu-raj-26251412a',
      animationDelay: 1200,
    },
    {
      id: 3,
      name: 'Aastha Pabuwal',
      role: 'Sr. IT Cloud Consultant',
      image: '/Team/Aastha Pabuwal.png',
      socialLinks:  'https://www.linkedin.com/in/aastha-pabuwal-435787187/',
      animationDelay: 300,
    },
    {
      id: 23,
      name: 'Vikas Swami',
      role: 'Pre-Sales Analyst',
      image: '/Team/Vikas Vaishnv.png',
      socialLinks:  'https://www.linkedin.com/in/vikas-swami-9b5502312',
      animationDelay: 2300,
    },
    {
      id: 6,
      name: 'Aditya Goswami',
      role: 'Business Development- Team Leader',
      image: '/Team/Aditya Goswami.png',
      socialLinks:  'https://www.linkedin.com/in/adityagoswami2302/',
      animationDelay: 600,
    },
    {
      id: 8,
      name: 'Ajay Raghav',
      role: 'Sr. Linux System Admin',
      image: '/Team/Ajay Raghav.png',
      socialLinks:  'https://www.linkedin.com/in/ajay-singh-raghav-812915171/',
      animationDelay: 800,
    },
    {
      id: 15,
      name: 'Pritam Jangid',
      role: 'DevOps Engineer',
      image: '/Team/Pritam jangid.png',
      socialLinks:  'https://www.linkedin.com/in/pritam-kumar/',
      animationDelay: 1500,
    },
    {
      id: 17,
      name: 'Robin Singh',
      role: 'System Admin',
      image: '/Team/Robin Singh.png',
      socialLinks:  'https://www.linkedin.com/in/robin-singh-6b070b291',
      animationDelay: 1700,
    },
    {
      id: 10,
      name: 'Deepak Udai',
      role: 'Team Lead',
      image: '/Team/Deepak Udai.png',
      socialLinks:  'http://linkedin.com/in/deepak-udai-689295a4',
      animationDelay: 1000,
    },
    {
      id: 7,
      name: 'Ajay Jangid',
      role: 'Sr. Cloud Engineer',
      image: '/Team/Ajay Jangid.png',
      socialLinks:  'https://www.linkedin.com/in/ajay-jangid-537b241a5/',
      animationDelay: 700,
    },
    {
      id: 20,
      name: 'Shivlendra Singh Jadoun',
      role: 'Sr. System Admin',
      image: '/Team/shiv.jpeg',
      socialLinks:  'https://www.linkedin.com/in/shivlendra20/',
      animationDelay: 2000,
    },
    {
      id: 5,
      name: 'Aditya Bhatia',
      role: 'Linux System Administrator',
      image: '/Team/Aditya Bhatia.png',
      socialLinks:  'https://www.linkedin.com/in/aditya-bhatia-a153291b9/',
      animationDelay: 500,
    },

    {
      id: 25,
      name: 'Gourav Bhardwaj ',
      role: 'Windows system admin Intern',
      image: '/Team/Gaurav Bhardwaj.png',
      socialLinks:  'https://linkedin.com/in/gourav-bhardwaj-934931272/',
      animationDelay: 2500,
    },
    {
      id: 4,
      name: 'Abhishek Saxena',
      role: 'System Admin',
      image: '/Team/Abhishek saxena.png',
      socialLinks:  'https://www.linkedin.com/in/abhishek-saxena-9a1593229/',
      animationDelay: 400,
    },
  ];

  return (
    <>
      <div className="pt-60 pb-120">
        <div className="pb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <h2 className="mb-4">Our Team</h2>
                  <p className="mb-0 max-text-48 mx-auto">30+ dedicated professionals driven by a shared passion for delivering exceptional work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            {teamMembers?.map((member) => (
              <div key={member.id} className="col-lg-4 col-md-4 col-sm-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay={member.animationDelay} data-sal-easing="ease-in-out-sine">
                <div className="team-wrapper">
                  {/* Image Section */}
                  <div className="image-area">
                    <img src={member.image} alt={`${member.name}'s image`} className="img-fluid w-100" style={{ borderRadius: '10px' }} />
                  </div>
                   

                  <div className=" p-2 p-xl-6">
                  <div className="d-flex align-items-center gap-2">
                    <div className="flex-grow-1">
                      <h6 className="mb-2" style={{ color: '#ee9408' }}> {member.name}</h6>
                      <span className="d-block fs-14" style={{ fontWeight: '500' }}>{member.role}</span>
                    </div>
                    <div className="flex-shrink-0">
                      <a href={member.socialLinks} className="team__social-link" target="_blank" style={{background:"#fff"}}>
                        <i className="lab la-linkedin-in" ></i>
                      </a>
                    </div>
                  </div>
                </div>
                  {/* Content Section */}
                  {/* <div className="content text-center p-3">
                    <div className="row">
                      <div className="col-sm-2">
                        <div className="">                    
                            {member.socialLinks.map((link, index) => (
                    
                                <a href={link.url} className="team__social-link" target="_blank" rel="noopener noreferrer" style={{background:"#fff"}}>
                                  <i className={link.icon}></i>
                                </a>
                            ))}                  
                        </div>
                      </div>
                      <div className="col-sm-10">
                        <h4 className="title" style={{ color: '#ee9408' }}>
                          {member.name}
                        </h4>
                        <p className="desc" style={{ fontWeight: '500' }}>
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsTeam;
