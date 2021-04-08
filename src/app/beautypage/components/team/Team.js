import React from "react";
import VideoYoutube from "../other/VideoYoutube";
import TeamSection from "./TeamSection";

const propTypes = {}

const Team = () => {
  return (
    <>
      <VideoYoutube src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
        width="853"
        height="480" />
      {/* <video className="responsive-video" controls>
              <source src="movie.mp4" type="video/mp4" />
            </video> */}
      <TeamSection />
    </>
  );
}

Team.propTypes = propTypes;

export default Team;
