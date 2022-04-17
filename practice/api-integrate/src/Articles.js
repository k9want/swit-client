import React, { useState, useEffect } from "react";
import axios from "axios";

function Articles() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setArticles(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          "https://dev.studywith.site/articles/kind/1/recent"
        );
        setArticles(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!articles) return null;
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          {articles.result.map(a => (
            // <li key={article.articleId}> ({article.title})</li>

            <a href="#!" className="article" key={a.articleId}>
              <p>{a.title}</p>
              <div className="article-info-group">
                <div className="article-info">
                  <img src="./assets/like.png" alt="좋아요" />
                  <p>{a.likeCount}</p>
                </div>
                <div className="article-info">
                  <img src="./assets/eye.png" alt="조회수" />
                  <p>{a.viewCount}</p>
                </div>
                <div className="article-info">
                  <img src="./assets/comment.png" alt="댓글" />
                  <p>{a.commentCount}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
