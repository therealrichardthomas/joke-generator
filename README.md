# Joke Generator

A simple single-page application (SPA) built with React and TypeScript for searching for dad jokes using a public API.

## Features

* **Joke Search**: Search for dad jokes by term using the `icanhazdadjoke` API.
* **Results Display**: Displays a list of jokes matching the search query on a dedicated results page.
* **No Results Handling**: Displays a "No jokes found" message if the search term yields no results.
* **Route Protection**: Automatically redirects to the landing page if a user tries to access the results page without search data.

## Tech Stack

* **Framework**: [React](https://reactjs.org/)
* **Bundler**: [Vite](https://vitejs.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Routing**: [React Router DOM](https://reactrouter.com/web/guides/quick-start)
* **HTTP Client**: [Axios](https://axios-http.com/)
* **API**: [icanhazdadjoke API](https://icanhazdadjoke.com/)

## Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd joke-generator
    ```

2.  **Install dependencies:**
    ```bash
    npm install 
    # or
    # yarn install
    ```

## Available Scripts

In the project directory, you can run:

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Builds the app for production to the `dist` folder. |
| `npm run lint` | Runs the linter (ESLint) for code quality checks. |
| `npm run preview` | Serves the production build locally for testing. |

## Usage

1.  Run the development server using `npm run dev`.
2.  Navigate to the landing page in your browser (usually `http://localhost:5173`).
3.  Enter a search term (e.g., "dog," "taco") into the input field and click the **Search** button.
4.  You will be redirected to the results page displaying the jokes found for your search term.
