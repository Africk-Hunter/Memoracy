# Spaced Repetition Learning App

This project is a spaced repetition learning app that helps users master new skills through smart practice. Users can create custom decks, each containing exercise cards, and the app schedules exercises based on a spaced repetition algorithm. Built with React, Firebase, and SASS, the app allows users to log in, create decks, add images, and rate completed exercises to adjust their learning schedule dynamically. The goal is to provide an intuitive, lightweight tool for effective long-term learning without unnecessary complexity.

## Building and Running the Project Locally

To build and run the project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/spaced-repetition.git
    cd spaced-repetition
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Firebase configuration:
    ```env
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id
    ```

4. Start the development server:
    ```sh
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.