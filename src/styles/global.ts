import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #fff;

    --input-background: #e7e9ee;
    --input-border: #d7d7d7;

    --button-border: #969cb2;

    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    --white: #fff;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    padding: 3rem;

    background-color: var(--background);
    position: relative;

    display: flex;
    flex-direction: column;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    border: none;
    background: transparent;

    transform: filter .2s;

    &:hover {
      filter: brightness(0.8)
    }
  }
`;

export { GlobalStyle };
