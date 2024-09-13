export interface Data {
    cause: string;
    causeFull: string;
    isSingle: boolean;
    id: number;
    colorData: Color;
  }
  export interface Color {
    displayName: string;
    hexCode: (string)[];
  }