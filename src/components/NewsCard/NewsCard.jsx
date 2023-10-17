import React, { useState, useEffect } from "react";
import "./NewsCard.css";
const NewsCard = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const apiKey = "0da022124fd441b995f0a45e5ee56c20";
    const apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const articles = data.articles;
        const randomIndex = Math.floor(Math.random() * articles.length);
        const randomArticle = articles[randomIndex];
        setNews(randomArticle);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);
  return (
    <div className="newscard">
      {news ? (
        <div>
          <div
            className="news"
            style={{
              backgroundImage: `url(${
                news
                  ? news.urlToImage
                  : "https://www.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"
              })`,
              width: "320px",
              height: "320px",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="newshead">
              <div className="news-title">
                {news.title ? news.title.slice(0, 45) : "Breakink News"}...
              </div>
              <div className="publish-time">{news.publishedAt}</div>
            </div>
          </div>
          <div className="news-description" id="style1">
            <div className="news-text">{news.content}</div>
          </div>
        </div>
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
};

export default NewsCard;
