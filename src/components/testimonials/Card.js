import React from 'react';


function Card() {
  const data = [
    {
      title: "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations",
      icon: "https://framerusercontent.com/images/dgHsIQVrsxRxtadpghDWppPujE.jpg",
      name: "Emily",
      position:"Art Director"
    },
    {
      title: "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
      icon: "https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg",
      name: "Alex",
      position:"IT Manager"
    },
    {
      title: "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
      icon: "https://framerusercontent.com/images/mIAsKrgLvd7WbLFFsh6f6YobhSc.jpg",
      name: "David",
      position:"Freelancer"
    },
    {
      title: "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
      icon: "https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg",
      name: "Sarah",
      position:"Project Manager"
    }
  ];



  return (
    <div className="card-container">

      {data.map((value, i) => (
        <div key={i} className="card">
          <p>{value?.title}</p>
          <div style={{ display: "flex", gap: "4px", alignItems: "center", justifyContent: "center" }}>
            <img src={value?.icon} alt="" style={{ width: "40px", height: "40px" }} />
            <div style={{ display: "flex", gap: "4px", justifyContent: "center",flexDirection:"column",textAlign:"start" }}>
              <h4 style={{margin:"0%"}}>{value?.name}</h4>
              <h6 style={{margin:"0%"}}>{value?.position}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
