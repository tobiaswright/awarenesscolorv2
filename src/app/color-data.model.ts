export interface Data {
    cause: string;
    causeFull: string;
    isSingle: boolean;
    id: number;
    colorData: Color;
  }
  export interface Color {
    htmlcolor: (string)[];
    displayName: string;
    hexCode: (string)[];
  }