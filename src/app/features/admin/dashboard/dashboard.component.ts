import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UserService } from '@api/services/user.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit() {
    // TEST
    this.userService.pokemonTest().subscribe((data) => console.log(data));
  }
}
