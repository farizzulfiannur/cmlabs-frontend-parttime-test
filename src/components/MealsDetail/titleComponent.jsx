import React from "react";

const titleComponent = (props) => {
    const { mealDetail } = props
    return (
    <h1 style={{ fontSize: "50px", fontWeight: "600" }} className="mb-5">
      {mealDetail.strMeal}
    </h1>
  );
};

export default titleComponent;
