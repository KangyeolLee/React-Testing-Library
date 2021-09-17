import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    color: {
      background: string;
    };
  }
}
