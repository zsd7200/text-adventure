'use client';

import { useState } from "react";
import game, { TextType, OptionType } from "@/components/Game";

type ModernProps = {
  idx?: number,
  updateCallback: Function,
};

export default function Modern(props: ModernProps) {
  const [index, setIndex] = useState<number>(props.idx ?? 0);

  const gotoIndex = (goto?: number) => {
    if (!goto && goto !== 0) return;

    const idx = game.findIndex((obj) => obj.id === goto);
    if (!idx && idx !== 0) return;
    
    setIndex(idx);
    props.updateCallback(idx);
  };
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <div className="flex gap-x-1">
        {game[index].content.title.map((text: TextType, i: number) => {
          return <span className={text.styles} key={`${i}-${text.innerContent.toLowerCase().replace(' ', '')}`}>{text.innerContent}</span>
        })}
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-x-1">
          {game[index].content.text.map((text: TextType, i: number) => {
            return <span className={text.styles} key={`${i}-${text.innerContent.toLowerCase().replace(' ', '')}`}>{text.innerContent}</span>
          })}
        </div>
        <div className="flex gap-x-1">
          {game[index].content.subtext && 
            game[index].content.subtext.map((subtext: TextType, i: number) => {
              return <span className={`${subtext.styles} text-xs`} key={`${i}-${subtext.innerContent.toLowerCase().replace(' ', '')}`}>{subtext.innerContent}</span>
            })
          }
        </div>
      </div>
      <div className="flex gap-x-8 mt-2">
        {game[index].options.map((option: OptionType, i: number) => (
          <button className={`${option.styles} flex gap-x-1`} onClick={() => gotoIndex(option.goto)} key={`${i}-${option.goto}`}>
            {
              option.text.map((text) => {
                return <span className={text.styles} key={`${i}-${text.innerContent.toLowerCase().replace(' ', '')}`}>{text.innerContent}</span>
              })
            }
          </button>
        ))}
      </div>
    </div>
  );
}
