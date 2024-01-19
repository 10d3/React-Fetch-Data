import React, { useState, useEffect } from "react";

export default function Article() {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);
  const [cate, setCate] = useState("");
  const [bull, setBull] = useState("");

  let isCleared;
  if (cate === "" && bull === "") {
    isCleared = false;
  } else {
    isCleared = true;
  }

  const changeCate = (e) => {
    setCate(e.target.value);
  };

  const changeBull = (e) => {
    setBull(e.target.value);
  };

  useEffect(() => {
    fetch(`https://api.waifu.pics/${cate}/${bull}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [cate, bull, index]);

  const handleClick = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  const post = posts;
  console.log(post);

  function formF(e) {
    e.preventDefault();
  }

  return (
    <div className="article-div">
      <form onSubmit={formF}>
        <div>
          <label for="category">Category: </label>
          <select id="category" name="category" onClick={changeCate}>
            <option value="">--</option>
            <option value="sfw">SFW</option>
            <option value="nsfw">NSFW</option>
          </select>
        </div>
        <div>
          <label for="type">Type: </label>
          <select id="type" name="type" onClick={changeBull}>
            <option value="">--</option>
            <option value="waifu">WAIFU</option>
            <option value="neko">NEKO</option>
          </select>
        </div>
      </form>
      <h1 className="arti">
        {bull} {cate} pics
      </h1>
      {post && (
        <div className="article-div-">
          {isCleared && (
            <img className="article-img" src={post.url} alt="Waifu" />
          )}
        </div>
      )}
      <button
        className=" btn btn-primary btn-md article-btn"
        onClick={handleClick}
      >
        {isCleared ? "Next" : "Show"}
      </button>
    </div>
  );
}
