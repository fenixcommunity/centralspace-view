import React, { useState, useEffect } from "react";
import '../../../../resources/beautypage/css/modal.css';
import '../../../../resources/beautypage/css/pulse.css';
import '../../../../resources/beautypage/css/flowtext.css';
import M from 'materialize-css/dist/js/materialize.js';
import avatar1 from '../../../../resources/beautypage/images/people/avatar1.jpg';
import avatar2 from '../../../../resources/beautypage/images/people/avatar2.jpg';
import avatar3 from '../../../../resources/beautypage/images/people/avatar3.jpg';
import BlogSectionItem from "./BlogSectionItem";
import Divider from "../helper/Divider";
import BlogSectionFooter from "./BlogSectionFooter";
import ProposedArticle from "./ProposedArticle";
import Modal from "../helper/Modal";
import CommentsSection from "./CommentsSection";
import ActiclesSection from "./ArticlesSection";

function Blog() {
  const [articles, setArticles] = useState([]);
  const [authorOfArticles, setAuthorOfArticles] = useState([]);

  useEffect(() => {
    const blogArticlesRecordJson = require("../../../../resources/json/blog_articles.json");
    setArticles(blogArticlesRecordJson.articles);
    setAuthorOfArticles(blogArticlesRecordJson.authorOfArticles);
  }, []);

  const handleToastOnClick = () => {
    M.toast({
      html: '<span> Thanks dude! <3 </span>',
      classes: 'z-depth-5 white-color-text',
      completeCallback: () => {
        alert('Your toast was dismissed');
      }
    })
    // M.Toast.dismissAll();
  }

  return (
    <div className="section white full-height">
      <div className="row valign">
        <div id="flow-text-section" className="col s8 offset-s2 m6 offset-m3 blog-body">
          {articles && articles.map(article => {
            return (
              <>
                <BlogSectionItem
                  sectionHeader={article.header}
                  paragraphs={article.paragraphs}
                  hasZoom={article.hasZoom} />
                {article.withDivider && <Divider />}
              </>
            )
          })}
        </div>
        {authorOfArticles && <BlogSectionFooter authorOfArticles={authorOfArticles} />}

        <div className="col s8 offset-s2 m6 offset-m3 blog-related">
          <h4>Related Articles</h4>
          <ul>
            <ProposedArticle authorAvatar={avatar1} articleTitle="The Greatest Blog Article" date="12 / 23 / 2015" />
            <ProposedArticle authorAvatar={avatar3} articleTitle="Interesting New Technology" date="10 / 4 / 2015" />
            <ProposedArticle authorAvatar={avatar2} articleTitle="Just a Quick Update" date="8 / 14 / 2015" />
            <ProposedArticle authorAvatar={avatar3} articleTitle="First Blog Post!" date="6 / 9 / 2015" />
          </ul>
        </div>
      </div>

      <ActiclesSection handleToastOnClick={handleToastOnClick} />
      <CommentsSection />
      <Modal
        title="Terms & Conditions"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae finibus mi, egestas dignissim metus. Fusce tempus elementum metus. Donec eu nibh fringilla, dignissim arcu eu, ultrices ante. Cras consectetur risus id mi condimentum aliquam."
        agreeAction={{ title: "Agree", ref: "#!" }} />
    </div>
  );
}

export default Blog;
