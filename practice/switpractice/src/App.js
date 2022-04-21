import React from "react";
import Article from "./Articles";
import "./App.css";
import logo from "./assets/logo.png";
import mainImg from "./assets/main-img.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 header-line">
              <h1 class="logo">
                <a href="#!">
                  <img src={logo} alt="SWIT" />
                </a>
              </h1>
              <nav>
                <h1>SWIT</h1>
                <div class="header-btn">
                  <a href="#!">
                    <button class="non-border-btn non-show-btn">
                      스터디 모집하기
                    </button>
                  </a>
                  <a href="#!">
                    <button class="non-border-btn">로그인</button>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div class="container">
          <div class="row main">
            <div class="col-12 col-md-5 col-sm-12 main-title">
              <h1>
                SWIT에서
                <br />
                같이 공부할
                <br />
                팀원을 찾아보세요
              </h1>
              <p>SWIT은 Study With의 약자입니다.</p>
            </div>
            <div class="col-12 col-md-7 col-sm-12 main-img">
              <img src={mainImg} alt="swit 이미지" />
            </div>
          </div>
        </div>
      </section>
      <section class="category section">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="category-btn-group">
                <button class="category-btn">개발</button>
                <button class="category-btn">취업</button>
                <button class="category-btn">면접</button>
                <button class="category-btn">공부</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="filter section">
        <div class="container">
          <div class="row">
            <div class="col-12 filter-btn-group">
              <div>
                <button class="non-border-btn">최신</button>
                <button class="non-border-btn">인기</button>
              </div>
              <button class="non-border-btn non-show-btn filter-team">
                팀원 찾는 글만 보기
              </button>
            </div>
          </div>
        </div>
      </section>
      <Article />;
    </div>
  );
}

export default App;
