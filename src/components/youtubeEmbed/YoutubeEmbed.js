import React from "react";
import "./youtubeembed.css";

const YoutubeEmbed = () => (
  <div className="video-responsive">
    <iframe
      // width="100%"
      // height="100%"
      src={`https://www.youtube.com/embed/IrAfDr7w-SM}`}
    //   frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;