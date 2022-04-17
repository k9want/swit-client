import kakaoButton from "./kakaoButton.png";
import "./App.css";

function App() {
  const REST_API_KEY = "ac7e9b44dce14e93f3f3a0fe64e2dcec";
  const REDIRECT_URI = "http://localhost:3000/kakao-login";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  return (
    <div className="App">
      <a href={KAKAO_AUTH_URL}>
        <img src={kakaoButton} alt="카카오로그인" />
      </a>
    </div>
  );
}

export default App;
