import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService, State } from '../state.service';
import { MyhttpService } from './../../myhttp.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  private _status:string='fetching';

  constructor(route: ActivatedRoute, stateService:StateService, myhttpService:MyhttpService) {
    if(route.snapshot.data.continue)
    {
       /* stateService.state.turn ="PLAYER0";
        stateService.state.values= [
            ["X","X","-"],
            ["X","0","-"],
            ["0","0","-"]
          ];*/
          myhttpService.getSavedGame().subscribe((state:State)=> {
            stateService.state.turn=state.turn;
            stateService.state.values=state.values;
          });
          this._status='success';
    }
    else
    {
        stateService.reset();
        this._status='success';
    }

  }

  ngOnInit() {
  }

}
