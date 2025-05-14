import { Fragment } from "react/jsx-runtime";
import "./card.css";

interface CardProps {
    imageUrl: string;
    nombre: string;
    species: string;
    location: string;
    status?: 'Alive' | 'Dead' | 'unknown'; 
};

export const Card = ({imageUrl,nombre,species,location,status }: CardProps) => {
  return (
    <>
    <div className="card-container">
      <div className="card-image-wrapper">
        <img 
          src={imageUrl} 
          alt={`Imagen de ${nombre}`} 
          className="card-image"
          role="img"
        />
      </div>
      
      <div className="card-content">
        <h2 className="card-title">{nombre}</h2>
        <div className="card-meta">
          <p className="card-species">{species}</p>
          <p className="card-location">{location}</p>
          <p className="card-status">{status}</p>
        </div>
      </div>
    </div>
    </>
  );
}

