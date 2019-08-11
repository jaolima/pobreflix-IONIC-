import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoovieService} from '../moovie.service';

@Component({
    selector: 'app-desc',
    templateUrl: './desc.page.html',
    styleUrls: ['./desc.page.scss'],
})

export class DescPage implements OnInit {
    filme_desc = [];
    movie_casts = [];

    constructor(
        private router: ActivatedRoute,
        private movieservice: MoovieService
    ) {
    }


    ngOnInit() {
        const id = this.router.snapshot.paramMap.get('id');
        this.movieservice.getMovie(id).subscribe(
            (data: any) =>
                this.filme_desc = data
        );

        this.movieservice.getCasts(id).subscribe(
            (data: any) =>
                this.movie_casts = data.cast
        );

    }

}
