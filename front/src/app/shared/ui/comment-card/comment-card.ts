import { Component, input } from '@angular/core';
import { CommentListItem } from '../../../comments/models/commentListItem';
import { DatePipe } from '@angular/common';
import { timeAgo } from '../../utils/timeAgo';

@Component({
  selector: 'app-comment-card',
  imports: [DatePipe],
  templateUrl: './comment-card.html',
  styleUrl: './comment-card.css',
})
export class CommentCard {

  comment = input.required<CommentListItem>();
  timeAgo = timeAgo;
}
