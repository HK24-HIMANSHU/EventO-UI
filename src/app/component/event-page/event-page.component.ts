import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EventDto } from 'src/app/model/event-dto';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
})
export class EventPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private evService: EventService
  ) {}
  event: EventDto = {} as EventDto;
  id: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((parameters: ParamMap) => {
      this.id = parameters.get('id');
      this.evService.getEventById(parseInt(this.id)).subscribe((data)=>{
        console.log(data);
      })
    });

  }
}
