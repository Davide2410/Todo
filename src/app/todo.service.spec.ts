import { TestBed } from '@angular/core/testing';

import { Todo } from './models/todo';

describe('Todo', () => {
  let service: Todo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(Todo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
