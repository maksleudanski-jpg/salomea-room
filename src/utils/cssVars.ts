import type { CSSProperties } from "react";

type CssVariables = CSSProperties & Record<`--${string}`, string | number>;

export function backgroundImage(src: string): CssVariables {
  return { "--image": `url(${src})` };
}

export function sequenceBeatStyle(opacity: number, offset: number, blur: number): CssVariables {
  return {
    "--beat-opacity": opacity,
    "--beat-y": `${offset * (1 - opacity)}px`,
    "--beat-blur": `${blur * (1 - opacity)}px`,
  };
}
