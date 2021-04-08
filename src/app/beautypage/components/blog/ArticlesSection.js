import React from 'react';
import PropTypes from 'prop-types';
import poly1 from '../../../../resources/beautypage/images/blog/poly1.jpg';
import poly2 from '../../../../resources/beautypage/images/blog/poly2.jpg';
import ArticleCard from './ArticleCard';

const propTypes = {
    handleToastOnClick: PropTypes.func
}

const ArticlesSection = ({ handleToastOnClick }) => {
    return (
        <div className="container">
            <h4>Articles</h4>
            <div className="row">
                <ArticleCard
                    id={1}
                    isHoverable={true}
                    handleToastOnClick={handleToastOnClick}
                    articleImg={poly1}
                    articleTitle="Mango & Chickpea Curry"
                    articleContent={
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci. Orci
                            varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    }
                    finalQuote={<blockquote> This is an example quotation that uses the blockquote tag.</blockquote>}
                    cardAction={[{ "title": "More details", "ref": "/" }, { "title": "Find similar", "ref": "/" }]} />
                <ArticleCard
                    id={2}
                    isHoverable={false}
                    handleToastOnClick={handleToastOnClick}
                    articleImg={poly2}
                    articleTitle="Rainbow Pasta Salad"
                    articleContent={
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci. Orci
                            varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    }
                    finalQuote={<blockquote> This is an example quotation that uses the blockquote tag.</blockquote>}
                    cardAction={[{ "title": "More details", "ref": "/" }, { "title": "Find similar", "ref": "/" }]} />
            </div>
        </div>
    )
}

ArticlesSection.propTypes = propTypes;

export default ArticlesSection;
