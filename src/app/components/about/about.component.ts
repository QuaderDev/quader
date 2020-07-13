import {Component} from "@angular/core";

@Component({
    selector: 'app-about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss']
})

export class AboutComponent {
    headerImgUrl: string = 'assets/images/about/about-header.png';
    interiorImgUrl: string = 'assets/images/about/about-interior.png';
    archImgUrl: string = 'assets/images/about/about-architecture.png';
    aboutFaceImgUrl: string = 'assets/images/about/about-face.png';

}
