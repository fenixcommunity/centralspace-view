import React from 'react'
import poly1 from '../../../../resources/beautypage/images/blog/poly1.jpg';
import poly2 from '../../../../resources/beautypage/images/blog/poly2.jpg';
import ArticleCard from './ArticleCard';

function ArticlesSection(props) {
    return (
        <div className="container">
            <h4>Articles</h4>
            <div className="row">
                <ArticleCard
                    isHoverable={true}
                    handleToastOnClick={props.handleToastOnClick}
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
                    isHoverable={false}
                    handleToastOnClick={props.handleToastOnClick}
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

export default ArticlesSection;
