const axios = require("axios").default;
import CONFIG from "../config";

const baseURL = CONFIG.BASE_URL;

export default class SadeRequest {
  _token = "";
  requestInstance;
  noTokenRequestInstance;
  userId;

  constructor() {
    this.init();
  }

  async init() {
    try {
      const storedUserData = await localStorage.getItem("user_stats");
      const userData = JSON.parse(storedUserData) || {};

      await this._setToken(userData.token);
      this._setRequestInstance();
      this._setUserId(userData._id);
    } catch (e) {
      console.log("local storage may not be available. Check init file");
    }
  }

  async _setToken(token) {
    this._token = token;
  }

  _setUserId(id) {
    this.userId = id;
  }

  _setRequestInstance() {
    this.requestInstance = axios.create({
      baseURL,
      headers: {
        Authorization: `Token ${this._token}`
      }
    });
    this.noTokenRequestInstance = axios.create({
      baseURL
    });
  }

  handleError(err) {
    if (err.response) {
      // error from API
      console.log("LIFE HAPPENS", err.response);
      if (err.response.status === 401) {
        // redirect to login screen
        window.location.href("/login");
      }
      return {
        error: {
          message: err.response.data.message
        }
      };
    }
    if (err.request) {
      // a network error
      console.log("Network Error", err.request);

      const response = err.request.response;
      return {
        error: {
          message: response.message
        }
      };
    }
  }
}
