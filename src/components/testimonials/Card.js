import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Card() {
  const data = [
    {
      title: "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations",
      icon: "",
      name: "Emily"
    },
    {
      title: "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
      icon: "",
      name: "Alex"
    },
    {
      title: "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
      icon: "",
      name: "David"
    },
    {
      title: "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
      icon: "",
      name: "Sarah"
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="card-container">
      <Carousel
        className="owl-carousel owl-theme"
        responsive={responsive}
        infinite={true}
        autoPlay
        autoPlaySpeed={2000}
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {data.map((value, i) => (
          <div key={i} className="card">
            <p>{value?.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Card;
