// src/services/apiPublic.js
import axios from "axios";

const API_URL =
  import.meta.env.VITE_NODE_ENV === "production"
    ? `${import.meta.env.VITE_PRODUCTION_URL}/api`
    : `${import.meta.env.VITE_DEVELOPMENT_URL}/api`;

const apiPublic = axios.create({
  baseURL: API_URL,
});

export default apiPublic;
