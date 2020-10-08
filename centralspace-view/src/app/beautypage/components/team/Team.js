import React from "react";
import VideoYoutube from "../other/VideoYoutube";
import TeamSection from "./TeamSection";

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const Team = ({}) => {
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
