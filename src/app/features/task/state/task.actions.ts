export class GetTasks {
  static readonly type = '[Task] Get all task';
  constructor(
    public searchTerms: null,
  ) {}
}
