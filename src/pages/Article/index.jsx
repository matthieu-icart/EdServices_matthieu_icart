// IMPORT REACT
import React from 'react';
import { useState } from 'react';

// IMPORT DATAS
import ArticleDatas from '../../datas/articles';

// IMPORT STYLE
import '../../css/style.css';

// RETURN ARTICLE
function Article() {
  // HOOK USESTATE & GET DATAS
  const [isOpen, setOpen] = useState('0000001');
  const articles = ArticleDatas;
  let articleFind = articles.find((article) => article.id === isOpen);

  return (
    <main className="article">
      {/* BUTTONS */}
      <div className="article_buttons">
        {articles.map((article) => (
          <button
            key={article.id}
            className="article_button"
            onClick={() => setOpen(article.id)}
          >
            <h3>{article.title}</h3>
          </button>
        ))}
      </div>

      {/* ARTICLE */}
      <article>
        <h2>{articleFind.title}</h2>
        <div className="text">
          <p>{articleFind.paragraphe1}</p>
          <p>{articleFind.paragraphe2}</p>
        </div>
      </article>
    </main>
  );
}

export default Article;
