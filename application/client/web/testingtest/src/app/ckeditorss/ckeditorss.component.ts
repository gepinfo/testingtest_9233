import { Component, OnInit } from '@angular/core';
import { CkeditorssService } from './ckeditorss.service';

@Component({
  selector: 'app-ckeditorss',
  templateUrl: './ckeditorss.component.html',
  styleUrls: ['./ckeditorss.component.scss'],
})

export class CkeditorssComponent implements OnInit {
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
        private ckeditorssService: CkeditorssService,
    ) { }

    ngOnInit() {
        this.feat.created_by = sessionStorage.getItem('email') || ''; 
        this.flet.created_by = sessionStorage.getItem('email') || ''; 
    }
}