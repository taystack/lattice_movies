import Base from "./Base";


export default class Backend extends Base {
  static popular(query = {}) {
    return Base.get("/popular", query);
  }

  static movies(filter) {
    return Base.get(`/search_movies/${filter}`);
  }

  static movie(movieId) {
    return Base.get(`/movie/${movieId}`);
  }

  static credits(movieId) {
    return Base.get(`/movie/${movieId}/credits`);
  }

  static similarMovies(movieId) {
    return Base.get(`/movie/${movieId}/similar`);
  }

  static person(personId) {
    return Base.get(`/person/${personId}`);
  }

  static checkIn() {
    return Base.get("/check_in");
  }

  static setApiKey(key) {
    return Base.post("/check_in", { key });
  }
}
