import { useState } from "react";
import { TabList, Tabs,Tab, TabPanel } from "react-tabs";

 const gameCard1 = [
    {
      id: 1,
      image: '/img/game-card-1.png',
      label: 'Trending',
      title: 'Palworld',
      price: '$32.00/month',
      trending: true,
    },
    {
      id: 2,
      image: '/img/game-card-2.png',
      label: '',
      title: 'Palworld',
      price: '$32.00/month',
      trending: false,
    },
    {
      id: 3,
      image: '/img/game-card-3.png',
      label: '',
      title: 'Palworld',
      price: '$32.00/month',
      trending: false,
    },
    {
      id: 4,
      image: '/img/game-card-4.png',
      label: '',
      title: 'Palworld',
      price: '$32.00/month',
      trending: false,
    },
    {
      id: 5,
      image: '/img/game-card-5.png',
      label: '',
      title: 'Palworld',
      price: '$32.00/month',
      trending: false,
    },
    {
      id: 6,
      image: '/img/game-card-6.png',
      label: '',
      title: 'Palworld',
      price: '$32.00/month',
      trending: false,
    },
    {
      id: 7,
      image: '/img/game-card-7.png',
      label: 'Trending',
      title: 'Palworld',
      price: '$32.00/month',
      trending: true,
    },
    {
      id: 8,
      image: '/img/game-card-1.png',
      label: 'Trending',
      title: 'Palworld',
      price: '$32.00/month',
      trending: true,
    },
  ];
  const gameCard2 = [

    {
      image: "/img/game-card-2.png",
      label: "Trending",
      title: "Palworld",
      price: "$32.00/month",
      arrowIcon: "/img/shape/icon-arrow.png"
    },
    
    {
      image: "/img/game-card-6.png",
      label: "Trending",
      title: "Palworld",
      price: "$32.00/month",
      arrowIcon: "/img/shape/icon-arrow.png"
    },
    {
      image: "/img/game-card-7.png",
      label: "Trending",
      title: "Palworld",
      price: "$32.00/month",
      arrowIcon: "/img/shape/icon-arrow.png"
    },
    {
      image: "/img/game-card-1.png",
      label: "Trending",
      title: "Palworld",
      price: "$32.00/month",
      arrowIcon: "/img/shape/icon-arrow.png"
    },
    {
        image: "/img/game-card-3.png",
        label: "Trending",
        title: "Palworld",
        price: "$32.00/month",
        arrowIcon: "/img/shape/icon-arrow.png"
      },
      {
        image: "/img/game-card-4.png",
        label: "Trending",
        title: "Palworld",
        price: "$32.00/month",
        arrowIcon: "/img/shape/icon-arrow.png"
      },
      {
        image: "/img/game-card-5.png",
        label: "Trending",
        title: "Palworld",
        price: "$32.00/month",
        arrowIcon: "/img/shape/icon-arrow.png"
      },
      {
        image: "/img/game-card-1.png",
        label: "Trending",
        title: "Palworld",
        price: "$32.00/month",
        arrowIcon: "/img/shape/icon-arrow.png"
      },
  ];
  
  
const GameHostingHostingard = () => {
    const [activeTab,setActiveTab]=useState("trending")

  return (
    <>
       <section className="pt-60 pb-60">
        <div className="pb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="h3 text-white mb-3">Hostingard Game Servers</h2>
                            <p className="text-white mb-0 max-text-56 mx-auto text-opacity-75">Whether it’s for a competitive
                                match, or just a
                                casual game server with
                                friends.Streamline-Servers has the perfect game server. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Tabs className="container">
            <div className="row g-4">
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <div className="pricing-nav-pills d-inline-block mx-auto">
                            <TabList className="nav nav-pills" role="tablist">
                                <Tab onClick={()=>setActiveTab("trending")} className="nav-item" role="presentation">
                                    <a type="button" className={`partner-tab-nev d-inline-block text-decoration-none text-white fw-bold px-3 pb-2 ${activeTab==="trending"?"active":""}`}>
                                        Trending Games
                                    </a>
                                </Tab>
                                <Tab onClick={()=>setActiveTab("latest")}  className="nav-item" role="presentation">
                                <a type="button" className={`partner-tab-nev d-inline-block text-decoration-none text-white fw-bold px-3 pb-2 ${activeTab==="latest"?"active":""}`}>
                                        Latest Games
                                    </a>
                                </Tab>
                            </TabList>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="tab-content" >
                        <TabPanel className={`tab-pane fade ${activeTab==="trending"?"active show":""}`}>
                            <div className="row g-4">
                                {
                                    gameCard1.map((game,i)=><div key={i} className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="game-card px-6">
                                        <div className="position-relative z-1 rounded-3 overflow-hidden">
                                            <img src={game.image} alt="image" className="img-fluid w-100"/>
                                            <span
                                                className="game-card__label position-absolute z-1 fs-14 bg-success text-white py-1 px-15">Trending</span>
                                        </div>
                                        <div className="py-4">
                                            <h5>
                                                <a href="#" className="d-inline-block text-decoration-none transition text-white hover:text-primary">
                                                    Palworld
                                                </a>
                                            </h5>
                                            <span className="d-block fs-14 fw-semibold text-white">
                                                Starting at <span className="text-warning">{game.price}</span>
                                            </span>
                                            <div className="text-end mt-3">
                                                <a href="#" className="game-card__btn d-grid place-content-center w-10 h-10 ms-auto rounded-circle bg-primary text-white">
                                                    <img src="/img/shape/icon-arrow.png" alt="image" className="img-fluid"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                                }
                                
                            </div>
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${activeTab==="latest"?"active show":""}`}>
                        <div className="row g-4">
                                {
                                    gameCard2.map((game,i)=><div key={i} className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="game-card px-6">
                                        <div className="position-relative z-1 rounded-3 overflow-hidden">
                                            <img src={game.image} alt="image" className="img-fluid w-100"/>
                                            <span
                                                className="game-card__label position-absolute z-1 fs-14 bg-success text-white py-1 px-15">Trending</span>
                                        </div>
                                        <div className="py-4">
                                            <h5>
                                                <a href="#" className="d-inline-block text-decoration-none transition text-white hover:text-primary">
                                                    Palworld
                                                </a>
                                            </h5>
                                            <span className="d-block fs-14 fw-semibold text-white">
                                                Starting at <span className="text-warning">{game.price}</span>
                                            </span>
                                            <div className="text-end mt-3">
                                                <a href="#" className="game-card__btn d-grid place-content-center w-10 h-10 ms-auto rounded-circle bg-primary text-white">
                                                    <img src="/img/shape/icon-arrow.png" alt="image" className="img-fluid"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                                }
                                
                            </div>
                        </TabPanel>
                    </div>
                </div>
            </div>
        </Tabs>
    </section>
    </>
  )
};

export default GameHostingHostingard
