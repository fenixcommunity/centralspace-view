import React from 'react';
import poly1 from '../../../../resources/beautypage/images/blog/poly1.jpg';
import poly2 from '../../../../resources/beautypage/images/blog/poly2.jpg';
import poly3 from '../../../../resources/beautypage/images/blog/poly3.jpg';
import poly4 from '../../../../resources/beautypage/images/blog/poly4.jpg';
import poly5 from '../../../../resources/beautypage/images/blog/poly5.jpg';
import poly6 from '../../../../resources/beautypage/images/blog/poly6.jpg';
import PhonePreviewItem from './PhonePreviewItem';

const propTypes = {}

const PhoneWallImages = () => {
  //todo loop
  return (
    <div className="col s12 m10 offset-m1 column-wrapper">
      <div className="column-two">
        <PhonePreviewItem backgroundImageUrl={poly1} />
        <PhonePreviewItem backgroundImageUrl={poly2} />
        <PhonePreviewItem backgroundImageUrl={poly3} />
      </div>
      <div className="column-one">
        <PhonePreviewItem backgroundImageUrl={poly4} />
        <PhonePreviewItem backgroundImageUrl={poly5} />
        <PhonePreviewItem backgroundImageUrl={poly6} />
      </div>
      <div className="column-two">
        <PhonePreviewItem backgroundImageUrl={poly1} />
        <PhonePreviewItem backgroundImageUrl={poly2} />
        <PhonePreviewItem backgroundImageUrl={poly3} />
      </div>
      <div className="column-one">
        <PhonePreviewItem backgroundImageUrl={poly4} />
        <PhonePreviewItem backgroundImageUrl={poly5} />
        <PhonePreviewItem backgroundImageUrl={poly6} />
      </div>
      <div className="column-two">
        <PhonePreviewItem backgroundImageUrl={poly1} />
        <PhonePreviewItem backgroundImageUrl={poly2} />
        <PhonePreviewItem backgroundImageUrl={poly3} />
      </div>
      <div className="column-one">
        <PhonePreviewItem backgroundImageUrl={poly4} />
        <PhonePreviewItem backgroundImageUrl={poly5} />
        <PhonePreviewItem backgroundImageUrl={poly6} />
      </div>
      <div className="column-two">
        <PhonePreviewItem backgroundImageUrl={poly1} />
        <PhonePreviewItem backgroundImageUrl={poly2} />
        <PhonePreviewItem backgroundImageUrl={poly3} />
      </div>
    </div>
  )
}

PhoneWallImages.propTypes = propTypes;

export default PhoneWallImages
