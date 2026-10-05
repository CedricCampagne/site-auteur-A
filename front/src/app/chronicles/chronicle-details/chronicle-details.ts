import { Component, inject } from '@angular/core';
import { ChronicleService } from '../services/chronicle.service';
import { ActivatedRoute } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { DatePipe } from '@angular/common';
import { CommentCard } from '../../shared/ui/comment-card/comment-card';


@Component({
  selector: 'app-chronicle-details',
  standalone: true,
  imports: [DatePipe,CommentCard],
  templateUrl: './chronicle-details.html',
  styleUrl: './chronicle-details.css',
})
export class ChronicleDetails {
  router = inject(ActivatedRoute);
  chronicleService = inject(ChronicleService);

  routerId = toSignal(
    this.router.paramMap.pipe(
      map(params => {
        const id = params.get('id');
        return id ? Number(id) : null;
      })
    ),
    { initialValue: null}
  );
  
  chronicle = toSignal(
    toObservable(this.routerId).pipe(
      switchMap(id => this.chronicleService.getChronicle(id))
    ),
    { initialValue: null}
  );

  comments = toSignal(
    toObservable(this.routerId).pipe(
      switchMap(id => this.chronicleService.getChronicleComments(id))
    ),
    { initialValue: []}
  );


}
