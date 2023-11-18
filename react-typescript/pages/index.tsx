import type { NextPage } from "next";
import Head from "next/head";
import { LazyImage } from "../components/RandomFox";
import { useState } from "react";
import type { MouseEventHandler } from "react";

const Home: NextPage = () => {
  let random = (): number => Math.floor(Math.random() * 123) + 1;
  let image = `https://randomfox.ca/images/${random()}.jpg`;

  const uniqueId = () => Math.random().toString(36).substr(2, 4);

  const [images, setImages] = useState<ImageItem[]>([]);

  const addNewfox: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.target;
    const newFox: ImageItem = {
      id: uniqueId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages([...images, newFox]);
  };

  return (
    <div>
      <Head>
        <title>Curso de React + Typescript</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="  font-bold">Curso de React</h1>
        <button
          onClick={(e) => {
            addNewfox(e);
          }}
        >
          Add new fox
        </button>
        {images.map(({ id, url }) => {
          return (
            <LazyImage
              key={id}
              src={url}
              alt="fox"
              onClick={() => {
                console.log("hey");
              }}
              className="w-80 h-auto rounded rounded-lg m-4 bg-gray-300"
            />
          );
        })}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
