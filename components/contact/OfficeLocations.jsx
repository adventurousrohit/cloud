import React from "react";

const OfficeLocations = () => {
  const offices = [
    {
      id: 1,
      title: "Head Office - Jaipur",
      name: "CloudMinister Pvt Ltd",
      address:
        "Plot no. 2, 5th Floor, Ganga tower, Roop Nagar Colony, Ajmer Road, Chitrakoot Marg, Tagore Nagar, Jaipur, Rajasthan 302021",
      contact: "+91-8447755312",
      email: "sales@cloudminister.com",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2812288300593!2d75.73698651436536!3d26.894568467346943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b5a91e0341b%3A0xf9d7b60152aae68c!2sCloudminister%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1657176483105!5m2!1sen!2sin",
    },
    {
      id: 2,
      title: "Branch Office - Noida",
      name: "CloudMinister Pvt Ltd",
      address:
        "B 23, Ground Floor, Sector 63 Rd, B Block, Sector 63, Noida, Uttar Pradesh 201301",
      contact: "+91-8447755312",
      email: "sales@cloudminister.com",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.377653790581!2d77.37336977927919!3d28.618441422014516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e9aae6f1bb%3A0xa94e9f36415d9e82!2sCloudMinister%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1737712725331!5m2!1sen!2sin",
    },
  ];

  return (
    <div className="container py-4">
      <div className="row">
        {offices.map((office, index) => (
          <div className="col-12 mb-4" key={office.id}>
            <div className="card h-100 p-3">
              <div className={`card-body d-flex flex-column flex-md-row align-items-center`}>
                {index % 2 === 0 ? (
                  <>
                    {/* Map on the left, details on the right */}
                    <div className="map-container w-100 w-md-50">
                      <iframe
                        src={office.mapEmbedUrl}
                        title={office.title}
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="office-details text-center text-md-start w-100 w-md-50 px-3 pt-2 pb-2">
                      <h3 style={{ color: "#085390" }}>{office.title}</h3>
                      <p className="mt-2 mb-2" style={{ fontSize: "20px", color: "#ee9408" }}>
                        <strong>{office.name}</strong>
                      </p>
                      <p className="max-text-30" style={{ lineHeight: "30px" }}>
                        {office.address}
                      </p>
                      <p className="mt-3">
                        <strong>Contact:</strong> {office.contact}
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${office.email}`}>{office.email}</a>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Details on the left, map on the right */}
                    <div className="office-details text-center text-md-start w-100 w-md-50 px-3 pt-2 pb-2">
                      <h3 style={{ color: "#085390" }}>{office.title}</h3>
                      <p className="mt-2 mb-2" style={{ fontSize: "20px", color: "#ee9408" }}>
                        <strong>{office.name}</strong>
                      </p>
                      <p className="max-text-30" style={{ lineHeight: "30px" }}>
                        {office.address}
                      </p>
                      <p className="mt-3">
                        <strong>Contact:</strong> {office.contact}
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${office.email}`}>{office.email}</a>
                      </p>
                    </div>
                    <div className="map-container w-100 w-md-50">
                      <iframe
                        src={office.mapEmbedUrl}
                        title={office.title}
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeLocations;
