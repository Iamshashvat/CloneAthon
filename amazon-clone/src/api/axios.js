import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-challenge-4b2b2.cloudfunctions.net/api"
});

export default instance;
