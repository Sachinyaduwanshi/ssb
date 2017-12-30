import { Component, OnInit } from '@angular/core';
import {DataTable, Header} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'media-lib',
  templateUrl: 'media.component.html',
  styleUrls: ['media.component.css']
})
export class MediaComponent implements OnInit {
   
    allMediaLibrary: any[];
    cols: any[];
    constructor() { 
     
    }  
  
    
    ngOnInit() {
      this.allMediaLibrary = [
        {type: 'video', category: 'bhajan', subCategory: 'bhajan', eventDate: '12/24/2016', name: 'Saraswati bhajan', description: 'Saraswati bhajan', url: 'https://www.youtube.com/watch?v=kJgve9ptXtQ'},
        {type: 'video', category: 'bhajan', subCategory: 'bhajan', eventDate: '06/10/2015', name: 'Shiv bhajan', description: 'Saraswati bhajan', url: 'https://www.youtube.com/watch?v=-1yr9zw989M&t=2923s'},
        {type: 'video', category: 'bhajan', subCategory: 'bhajan', eventDate: '10/04/2015', name: 'sai bhajan', description: 'Saraswati bhajan', url: 'https://www.youtube.com'},
        {type: 'video', category: 'performance', subCategory: 'bhajan', eventDate: '04/02/2014', name: '2017 Annual Performance', description: 'Saraswati bhajan', url: 'https://www.youtube.com/watch?v=UCVe7D7kkq0&list=PL90468CD6B7FB9790'},
        {type: 'audio', category: 'bhajan', subCategory: 'bhajan', eventDate: '04/02/2014', name: 'sai 1', description: 'Saraswati bhajan', url: 'https://www.youtube.com/watch?v=5CT0Ty3iBT8&list=PL90468CD6B7FB9790&index=2'},
        {type: 'audio', category: 'bhajan', subCategory: 'bhajan', eventDate: '12/09/2014', name: 'sai 2', description: 'Saraswati bhajan', url: 'https://www.youtube.com/watch?v=PEN75yBGlNs&index=24&list=PL90468CD6B7FB9790'},
        {type: 'audio', category: 'lecture', subCategory: 'bhajan', eventDate: '04/08/2017', name: 'sai 3', description: 'Saraswati bhajan', url: 'https://www.youtube.com/watch?v=tYsV0MqmwOI'},
        {type: 'audio', category: 'study circle', subCategory: 'bhajan', eventDate: '08/20/2013', name: 'sai 4', description: 'Saraswati bhajan', url: 'https://www.youtube.com/watch?v=adyjwFgXRNY'},
        {type: 'audio', category: 'lecture', subCategory: 'bhajan', eventDate: '04/08/2017', name: 'sai 5', description: 'Saraswati bhajan', url: 'https://www.youtube.com/watch?v=QvUF4LkmwKo'},
        {type: 'pdf', category: 'bhajan', subCategory: 'bhajan', eventDate: '11/30/2013', name: 'sai 6', description: 'Saraswati bhajan', url: 'http://www.sadhuram.net/download/Canti%20dei%20Maestri.pdf'},
        {type: 'pdf', category: 'bhajan', subCategory: 'bhajan', eventDate: '04/06/2012', name: 'sai 7', description: 'Saraswati bhajan', url: 'http://www.region7saicenters.org/devotion/docs/DevotionalSongsGuidebook108.pdf'},
        {type: 'pdf', category: 'bhajan', subCategory: 'bhajan', eventDate: '09/02/2014', name: 'sai 8', description: 'Saraswati bhajan', url: 'http://www.sathyasai.ee/wp-content/uploads/BhajanBook2.pdf'},
        {type: 'pdf', category: 'lecture', subCategory: 'bhajan', eventDate: '07/05/2010', name: 'sai 9', description: 'Saraswati bhajan', url: 'http://www.saibabaofindia.com/Bhajanavali.pdf'}
      ];

      this.cols = [
        {field: 'type', header: 'Type'},
        {field: 'category', header: 'Category'},
        {field: 'name', header: 'Name'},
        {field: 'url', header: 'URL'}
    ];

     }
}