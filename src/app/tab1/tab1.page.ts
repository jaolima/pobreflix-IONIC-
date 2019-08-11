import {Component, OnInit} from '@angular/core';
import {MoovieService} from '../moovie.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss', ]
})

export class Tab1Page implements OnInit {
    populares = [];
    movie_rated = [];
    movie_cine = [];
    movie_coming = [];
    busca = [];

    constructor(
        //instanciando a variável para usar a service
        private movieService: MoovieService,
    ) {
    }

    ngOnInit() {
        // @ts-ignore
        this.movieService.getPopularMovie().subscribe(
            (data: any) =>
                this.populares = data.results
        );

        this.movieService.getRated().subscribe(
            (data: any) =>
                this.movie_rated = data.results
        );

        this.movieService.getCineMovies().subscribe(
            (data: any) =>
                this.movie_cine = data.results
        );

        this.movieService.getUpComing().subscribe(
            (data: any) =>
                this.movie_coming = data.results
        );

        this.movieService.searchMovie(this.busca).subscribe(
            (data: any) =>
                // this.nome = data
                console.log(this.busca)
        );

    }

    buscarFilme() {

    }

}
