import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BootsrapCardPaul = (props) => {
    const {title, imageUrl, buttonLabel, buttonUrl, description} = props
    return (
      <>
        <div className="card m-6 text-center" style={{ width: "25rem" }}>
          <img
            className="card-img-top"
            src={imageUrl}
            alt="Card"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a
              href={buttonUrl}
              className="btn btn-primary"
            >
              {buttonLabel}
            </a>
          </div>
        </div>
      </>
    );
  }


export default BootsrapCardPaul;
