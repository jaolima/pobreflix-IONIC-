import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoovieService} from '../moovie.service';

@Component({
    selector: 'app-casts-information',
    templateUrl: './casts-information.page.html',
    styleUrls: ['./casts-information.page.scss'],
})
export class CastsInformationPage implements OnInit {
    cast_profile = [];

    constructor(
        private router: ActivatedRoute,
        private movieservice: MoovieService
    ) {
    }

    ngOnInit() {
        const id = this.router.snapshot.paramMap.get('id');
        this.movieservice.getCastsInformation(id).subscribe(
            (data: any) =>
                // this.cast_profile = data
                console.log(data)
        );

    }
}
