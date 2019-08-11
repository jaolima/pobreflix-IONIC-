import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoovieService {

 private baseApiPath = 'https://api.themoviedb.org/3/';
 private language = '&language=pt-br';

  constructor(public http: HttpClient) {
    // console.log('Moovie');
  }

  getMovie(id) {
    return this.http.get(this.baseApiPath + `movie/${id}?api_key=6b387b5841e8ab7f6c5b864588346773` + this.language);
  }

  getPopularMovie() {
    return this.http.get(this.baseApiPath + 'movie/popular?api_key=6b387b5841e8ab7f6c5b864588346773' + this.language);
  }

  searchMovie(busca) {
    return this.http.get(this.baseApiPath + 'search/movie?query=' + encodeURI(busca) + this.language + '&api_key=6b387b5841e8ab7f6c5b864588346773');
    // return this.http.get(this.baseApiPath + 'search/movie?query=marve' + this.language + '&api_key=6b387b5841e8ab7f6c5b864588346773');
  }

  getRated() {
    return this.http.get(this.baseApiPath + `movie/top_rated?api_key=6b387b5841e8ab7f6c5b864588346773` + this.language);
  }

  getCineMovies() {
    return this.http.get(this.baseApiPath + `movie/now_playing?api_key=6b387b5841e8ab7f6c5b864588346773` + this.language);
  }

  getUpComing() {
    return this.http.get(this.baseApiPath + `movie/upcoming?api_key=6b387b5841e8ab7f6c5b864588346773` + this.language);
  }

  getCasts(id) {
    return this.http.get(this.baseApiPath + `movie/${id}/credits?api_key=6b387b5841e8ab7f6c5b864588346773` + this.language);
  }

  getCastsInformation(id) {
        return this.http.get(this.baseApiPath + `credit/${id}?api_key=6b387b5841e8ab7f6c5b864588346773`);
    }

  getVideoMovie(id) {
    return this.http.get(this.baseApiPath + `movie/${id}/videos?api_key=6b387b5841e8ab7f6c5b864588346773` + this.language);
  }

  //fazer os videos retornarem por genero
  getGenre(id) {
    return this.http.get(this.baseApiPath + `genre/movie/list?api_key=6b387b5841e8ab7f6c5b864588346773`);
  }
}
