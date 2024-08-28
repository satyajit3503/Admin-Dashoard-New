import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch-page',
  templateUrl: './branch-page.component.html',
  styleUrls: ['./branch-page.component.css']
})
export class BranchPageComponent {
  @ViewChild('sidebar') sidebar!: ElementRef;

  constructor(private router: Router) {}

  toggleNav() {
    const sidebarElement = this.sidebar.nativeElement;
    const mainContentElement = document.getElementById('main-content');

    if (sidebarElement.style.width === "250px") {
      sidebarElement.style.width = "0";
      mainContentElement?.classList.remove('sidebar-open');
    } else {
      sidebarElement.style.width = "250px";
      mainContentElement?.classList.add('sidebar-open');
    }
  }

  navigateToBranch() {
    this.router.navigate(['/branch']);
  }

  navigateToAnotherLink() {
    // Implement navigation logic or other functionality as needed
  }
}
