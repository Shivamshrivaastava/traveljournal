import React from "react";

export default function Travel(props) {
  return (
    <div className="card">
      <div className="card__image">
        <img
          src={props.imageUrl}
          alt={props.title}
          width={206.25}
          height={277.2}
        />
      </div>
      <div className="card__text">
        <div className="card__header_infos">
          <div className="card__header_infos__location">
            <img src="/location.svg" alt="location icon" />
            <p className="card__location">{props.location.toUpperCase()}</p>
          </div>

          <a href={props.googleMapsUrl} className="card__googlemap">
            View on Google Maps
          </a>
        </div>
        <h1 className="card__title">{props.title}</h1>
        <p className="card__date">{`${props.startDate} - ${props.endDate}`}</p>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  );
}
