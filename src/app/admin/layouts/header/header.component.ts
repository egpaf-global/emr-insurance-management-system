import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Images } from 'src/assets/data/images';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public userOne: string = Images.users.userOne;
  
  isOpen: boolean = false;
  profileState: boolean = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  onClickProfile = () => {
    let state = this.profileState ? 'false' : 'true';
    this.profileState = !this.profileState
    
    const profileDropdownList = this.element.nativeElement.querySelector(
      '.profile-dropdown-list'
    );
    this.renderer.setAttribute(profileDropdownList, 'aria-expanded', state);
  };
}
