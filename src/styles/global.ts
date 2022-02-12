import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //Colors
        --red-700: #870207;
        --red-400: #FF000A;

        --light: #ffffff;

        --gradient: linear-gradient(to right, var(--red-700), var(--red-400));
        --blue-dark: #0a0f19;


        //Fonts
        --font-family-title: 'Roboto', sans-serif;
        --font-family-text: 'Poppins', sans-serif;

        //Others
        --border-r: 0.25rem;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        border: none;
    }

    body {
        background-color: var(--blue-dark);
    }

    textarea, button, select, input, span, a, h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-family-title);
    }

    p {
        font-family: var(--font-family-text);
    }

    a {
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        cursor: not-allowed;
    }

    .container {
        max-width: 1140px;
        width: 100%;

        margin: 0 auto;
        padding: 0 2rem;
    }
`;
