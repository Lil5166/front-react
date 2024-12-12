import React from 'react';

function GoodsCard({ photo, name, price }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={photo} className="card-img-top" alt={name} style={{width: "250px", height: "250px"}}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">${price}</p>
            </div>
        </div>
    );
}

export default GoodsCard;