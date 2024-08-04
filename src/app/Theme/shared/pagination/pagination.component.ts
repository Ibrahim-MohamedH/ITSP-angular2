import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  Provider,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export interface PageChangedEvent {
  itemsPerPage: number;
  page: number;
}
export const PAGINATION_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PaginationComponent),
  multi: true,
};
@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [PAGINATION_CONTROL_VALUE_ACCESSOR],
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  navigateTo(page: number): void {
    this.pageChange.emit(page);
    this.scrollToTop();
  }
  scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  // to show a portion of a pages
  calculatePages(): number[] {
    const pages: number[] = [];
    const maxPagesToShow = 5; // Adjust this value based on how many pages you want to show

    if (this.totalPages <= maxPagesToShow) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage: number;
      let endPage: number;

      if (this.currentPage <= Math.floor(maxPagesToShow / 2)) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (
        this.currentPage + Math.floor(maxPagesToShow / 2) >=
        this.totalPages
      ) {
        startPage = this.totalPages - maxPagesToShow + 1;
        endPage = this.totalPages;
      } else {
        startPage = this.currentPage - Math.floor(maxPagesToShow / 2);
        endPage = this.currentPage + Math.floor(maxPagesToShow / 2);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }

    return pages;
  }
}
