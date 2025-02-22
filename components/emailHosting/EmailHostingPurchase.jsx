const emailFeatures = [
    {
      id: 1,
      imgSrc: "/img/icon-email-1.png",
      title: "User Friendly Management",
      description:
        "Hostinger Email comes with an intuitive control panel. It includes everything you need to manage your email accounts – from device configuration to DNS settings. You can also try our easy-to-use webmail client to send emails.",
      animation: {
        sal: "slide-up",
        duration: 500,
        delay: 300,
        easing: "ease-in-out-sine",
      },
    },
    {
      id: 2,
      imgSrc: "/img/icon-email-2.png",
      title: "Auto Configuration",
      description:
        "Our email servers support IMAP, POP3, and SMTP by default, so you can configure your email hosting with third-party mail clients, such as Apple Mail, Outlook, Thunderbird, or any other email app on your desktop or mobile device.",
      animation: {
        sal: "slide-up",
        duration: 500,
        delay: 400,
        easing: "ease-in-out-sine",
      },
    },
    {
      id: 3,
      imgSrc: "/img/icon-email-3.png",
      title: "Automatic Email Functions",
      description:
        "Make email communications simpler with automation. If you often receive emails outside of office hours, set up auto-replies to let clients know when you’ll return. Redirect incoming messages to multiple accounts using email forwarding.",
      animation: {
        sal: "slide-up",
        duration: 500,
        delay: 500,
        easing: "ease-in-out-sine",
      },
    },
    {
      id: 4,
      imgSrc: "/img/icon-email-4.png",
      title: "Advanced Email Messaging Security",
      description:
        "Our email platform supports DKIM, DMARC, and SPF to prevent malicious parties from abusing your outbound email traffic. We also implement carrier-grade content filters against.",
      animation: {
        sal: "slide-up",
        duration: 1000,
        delay: 300,
        easing: "ease-in-out-sine",
      },
    },
    {
      id: 5,
      imgSrc: "/img/icon-email-5.png",
      title: "Integration with Other Tools",
      description:
        "The Access and Action Logs in hPanel let you track what happens in your email accounts and monitor them for suspicious activities. Get information about when and where accounts were accessed.",
      animation: {
        sal: "slide-up",
        duration: 1000,
        delay: 400,
        easing: "ease-in-out-sine",
      },
    },
    {
      id: 6,
      imgSrc: "/img/icon-email-1.png",
      title: "Advanced Email Features",
      description:
        "Finally, create a business email account based on your own domain name, set up the DNS settings, and sync your email to other devices. That’s it – you can start sending your emails.",
      animation: {
        sal: "slide-up",
        duration: 1000,
        delay: 500,
        easing: "ease-in-out-sine",
      },
    },
  ];
const EmailHostingPurchase = () => {
  return (
    <>
       <div className="pt-120 pb-120">
        <div className="pb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <h2 className="text-center mb-0" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            Purchase Your Business Email Plan
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4">
               {
                emailFeatures.map((f,i)=> <div key={i} className="col-md-6 col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-md-6 p-xl-8">
                        <div className="mb-8">
                            <img src={f.imgSrc} alt="image" className="img-fluid"/>
                        </div>
                        <h6 className="mb-4">
                            {f.title}
                        </h6>
                        <p className="mb-0">
                           {
                            f.description
                           }
                        </p>
                    </div>
                </div>
            </div>)
               }
               
            </div>
        </div>
    </div>
    </>
  )
};

export default EmailHostingPurchase
