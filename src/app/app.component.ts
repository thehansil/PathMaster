import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pathmaster';
  /* Set the width of the side navigation to 250px and the right margin of the page content to 400px */
  private navOpen = false;
  public openCloseNav() {
    // x.classList.toggle('change');
    if (!this.navOpen) {
        document.getElementById('mySidenav').style.width = '400px';
        // document.getElementById('main').style.marginRight = '400px';
        this.navOpen = true;
    } else {
        document.getElementById('mySidenav').style.width = '0';
        // document.getElementById('main').style.marginRight = '0';
        this.navOpen = false;
    }
  }

  public iconAnim(x) {
    x.classList.toggle('change');
  }
}
