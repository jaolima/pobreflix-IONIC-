import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoovieService} from '../moovie.service';

// @ts-ignore
@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {
    populares = [];

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
    }
}
