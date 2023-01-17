import '@emotion/react';

type themeId = 'disabled' | 'darkgray' | 'border' | 'white' | 'whitesmoke' | 'black';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      [key in themeId]: string;
    }
  }
}