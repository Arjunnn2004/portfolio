import React from "react";

function Profile3D({ imageSrc, name = "Arjun Chawla" }) {
  return (
    <div className="portrait-stage">
      <div className="portrait-frame tilt-hover">
        <div className="portrait-glow" />
        <div className="portrait-inner">
          <img
            className="portrait-img"
            src={imageSrc}
            alt={name}
            loading="lazy"
          />
        </div>
        <div className="portrait-ring" />
      </div>
      <div className="portrait-caption">{name}</div>
    </div>
  );
}

export default Profile3D;
