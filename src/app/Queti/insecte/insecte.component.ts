// import { Component, OnInit,Input } from '@angular/core';
// import { Insecte } from '../../models/insecte';
// import { RouterLinkActive } from '@angular/router';
// import { Route, Router, RouterLink } from '@angular/router';
// import { AuthService } from '../../Services/auth.service';

// @Component({
//   selector: 'app-insecte',
//   standalone: true,
//   imports: [RouterLink, RouterLinkActive],
//   templateUrl: './insecte.component.html',
//   styleUrl: './insecte.component.css'
// })
// export class InsecteComponent {

//   likedInsects: Set<number> = new Set(); // Store liked insect IDs

//   constructor(protected authService: AuthService) { }

//   @Input() insecte!: Insecte;
//   @Input() insectId!: number;
//   isLiked = false;

//   ngOnInit() {
//     this.authService.getUserLikedInsect().subscribe((likedInsects) => {
//       this.likedInsects = likedInsects;
//       this.isLiked = likedInsects.has(this.insectId);
//     });
//   }

//   toggleLike(insectId: number): void {
//     if (this.likedInsects.has(insectId)) {
//       // Unlike the insect
//       this.authService.userUnlikeInsect(insectId).subscribe({
//         next: () => {
//           this.likedInsects.delete(insectId); // Update local state
//           console.log(Insect ${insectId} unliked successfully.);
//         },
//         error: (err) => {
//           console.error(Failed to unlike insect ${insectId}:, err);
//         },
//       });
//     } else {
//       // Like the insect
//       this.authService.userLikeInsect(insectId).subscribe({
//         next: () => {
//           this.likedInsects.add(insectId); // Update local state
//           console.log(Insect ${insectId} liked successfully.);
//         },
//         error: (err) => {
//           console.error(Failed to like insect ${insectId}:, err);
//         },
//       });
//     }
//   }



// }