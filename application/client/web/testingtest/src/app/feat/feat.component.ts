import { Component, OnInit } from '@angular/core';
import { FeatService } from './feat.service';

@Component({
  selector: 'app-feat',
  templateUrl: './feat.component.html',
  styleUrls: ['./feat.component.scss'],
})

export class FeatComponent implements OnInit {
    public feat:any = {
        created_date_at: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date_at: '',
        name: '',
        email: '',
    }
    public flet:any = {
        created_date_at: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date_at: '',
        datas: '',
    }

    constructor (
        private featService: FeatService,
    ) { }

    ngOnInit() {
        this.feat.created_by = sessionStorage.getItem('email') || ''; 
        this.flet.created_by = sessionStorage.getItem('email') || ''; 
    }
}