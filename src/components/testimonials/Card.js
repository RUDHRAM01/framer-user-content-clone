import React from 'react';


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

  return (
    <div className="card-container">
      {data.map((value, i) => (
        <div key={i} className="card">
          <p>{value?.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
