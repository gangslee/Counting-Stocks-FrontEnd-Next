import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
    
  a{
    text-decoration:none;
    color:inherit;  
  }
  body{
    /* background-color: #17171B; */
    background-color: #f9f9ff;
  }
  
  *{
    box-sizing:border-box;
  }
  @font-face {
    font-family: 'S-CoreDream-5Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-5Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }   
    
  @font-face {
    font-family: 'S-CoreDream-4Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-4Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'S-CoreDream-6Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
      font-family: 'Bareun_hipi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Bareun_hipi.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  body{
    font-family: "S-CoreDream-6Bold", "Lato", 'Noto Sans KR',sans-serif;    
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
  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }
`;

export default GlobalStyle;
