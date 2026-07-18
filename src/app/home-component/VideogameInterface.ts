export interface VideogamePreview {
  readonly id: number;
  title: string;
  src: string;
  description: string;
  iconsData: IconData[];
  fav: boolean;
  like: boolean;
  isInLibrary: boolean;
}

export interface IconData {
  readonly id: number;
  number?: number;
}
