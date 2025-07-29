export interface PokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}
export interface Result {
  name: string;
  url: string;
}
