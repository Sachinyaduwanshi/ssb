import { Component, OnInit } from '@angular/core';
import {DataTable} from 'primeng/primeng';
@Component({
  moduleId: module.id,
  selector: 'media-lib',
  templateUrl: 'media.component.html'
})
export class MediaComponent implements OnInit {
   
    allMediaLibrary: any[];
    cols: any[];
    constructor() { 
     
    }  
  
    
    ngOnInit() {
      this.allMediaLibrary = [
        {type: 'video', category: 'bhajan', name: 'Saraswati bhajan', url: 'https://www.youtube.com'},
        {type: 'video', category: 'bhajan', name: 'Shiv bhajan', url: 'https://www.youtube.com'},
        {type: 'video', category: 'bhajan', name: 'sai bhajan', url: 'https://www.youtube.com'},
        {type: 'video', category: 'performance', name: '2017 Annual Performance', url: 'https://www.youtube.com'},
        {type: 'audio', category: 'bhajan', name: 'sai 1', url: 'https://www.youtube.com'},
        {type: 'audio', category: 'bhajan', name: 'sai 2', url: 'https://www.youtube.com'},
        {type: 'audio', category: 'lecture', name: 'sai 3', url: 'https://www.youtube.com'},
        {type: 'audio', category: 'study circle', name: 'sai 4', url: 'https://www.youtube.com'},
        {type: 'audio', category: 'lecture', name: 'sai 5', url: 'https://www.youtube.com'},
        {type: 'pdf', category: 'bhajan', name: 'sai 6', url: 'https://www.youtube.com'},
        {type: 'pdf', category: 'bhajan', name: 'sai 7', url: 'https://www.youtube.com'},
        {type: 'pdf', category: 'bhajan', name: 'sai 8', url: 'https://www.youtube.com'},
        {type: 'pdf', category: 'lecture', name: 'sai 9', url: 'https://www.youtube.com'}
      ];

      this.cols = [
        {field: 'type', header: 'Type'},
        {field: 'category', header: 'Category'},
        {field: 'name', header: 'Name'},
        {field: 'url', header: 'URL'}
    ];

     }
}