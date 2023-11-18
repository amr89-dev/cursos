//import type { FunctionComponent, FC } from "react";

import Image from "next/image";
import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";

/* export const RandomFox = () => {
  return <img />;
}; */
type LazyImageProp = {
  src: string;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProp & ImageNative;

export const LazyImage = ({ src, ...ImgProps }: Props): JSX.Element => {
  const [srcCurrent, setSrcCurrent] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  const node = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrcCurrent(src);
        }
      });
    });

    if (node.current) {
      observer.observe(node.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return <img ref={node} src={srcCurrent} {...ImgProps} />;
};

/* export const LazyImage: FunctionComponent = () => {
  return <img />;
}; */
/* export const LazyImage: FC = () => {
  return <img />;
}; */
