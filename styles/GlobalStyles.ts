import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "S-CoreDream-5Medium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-5Medium.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }   
    
  @font-face {
    font-family: "S-CoreDream-4Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-4Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "S-CoreDream-6Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  *{
    box-sizing:border-box;

  }
  body{
    /* background-color: #17171B; */
    background-color: #f6f6f6;
    -webkit-tap-highlight-color: transparent;
    font-family: "S-CoreDream-6Bold", "S-CoreDream-5Medium", "S-CoreDream-4Regular", "S-CoreDream-5Regular", "Spoqa Han Sans Neo", "Noto Sans KR", "sans-serif";
  }
  a{
    text-decoration:none;
    color:inherit;  
  }
  input{
    border: none;
  }
  input:focus{
    outline: none;
  }
  button{
    border:none;
      :focus{
        outline:none;
    }
  }

`;

export default GlobalStyle;
