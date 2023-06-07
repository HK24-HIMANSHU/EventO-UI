import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Space } from 'src/app/model/space';
import { SpaceService } from 'src/app/service/space.service';

@Component({
  selector: 'app-space-details',
  templateUrl: './space-details.component.html',
  styleUrls: ['./space-details.component.css'],
})
export class SpaceDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private spService: SpaceService,
    private router: Router
  ) {}
  space: Space = {} as Space;
  id: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((parameters: ParamMap) => {
      this.id = parameters.get('id');
      this.spService.getSpaceById(parseInt(this.id)).subscribe((data) => {
        this.space = data;
      });
    });
  }

  onDeleteSpace(id: number) {
    //this.spService.deleteSpace(id).
  }
}
