import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rickroll',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rickroll.component.html',
  styleUrls: ['./rickroll.component.css'],
})
export class RickrollComponent {
  showVideo = false;
  userName = '';
  videoError = false;

  constructor(private cdr: ChangeDetectorRef) {}

  onNameSubmit(name: string) {
    if (name.trim()) {
      console.log('Setting userName to:', name.trim());
      this.userName = name.trim();
      this.cdr.detectChanges();
      console.log('userName set, showVideo is:', this.showVideo);
      setTimeout(() => {
        console.log('Setting showVideo to true');
        this.showVideo = true;
        console.log('showVideo is now:', this.showVideo);
        this.cdr.detectChanges();
        this.loadVideo();
      }, 2000);
    }
  }

  loadVideo() {
    // Try to load the video and handle any errors
    setTimeout(() => {
      const iframe = document.querySelector('.video-iframe') as HTMLIFrameElement;
      console.log(iframe);
      if (iframe) {
        iframe.onload = () => {
          console.log('Video loaded successfully');
        };
        iframe.onerror = () => {
          this.videoError = true;
        };
      }
    }, 100);
  }

  openYouTube() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  }
}
