import React, {useState, useEffect} from "react";
import { AppWrap } from "../../wrapper";
import { ServicesCard } from "../../components";
import { client } from "../../client";

import "./Services.scss";


function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query)
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <>
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>

      <div className="container grid services__container">
        {services.map((service, i) => (
          <ServicesCard
            key={i}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default AppWrap(Services, "services");
