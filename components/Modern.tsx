'use client';

import { useState } from "react";
import game, { TextType, OptionType } from "@/components/Game";
import { addSpace } from "@/components/Common";

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
      <div className="flex whitespace-pre">
        {game[index].content.title.map((title: TextType, i: number) => {
          return (
            <span 
              className={title.styles} 
              key={`${i}-${title.innerContent.toLowerCase().replace(' ', '')}`}
            >
              {(i == 0) 
                ? title.innerContent 
                : addSpace(title.innerContent)
              }
            </span>
          )
        })}
      </div>
      <div className="flex flex-col items-center">
        <div className="flex whitespace-pre">
          {game[index].content.text.map((text: TextType, i: number) => {
            return (
              <span 
                className={text.styles} 
                key={`${i}-${text.innerContent.toLowerCase().replace(' ', '')}`}
              >
                {(i == 0) 
                  ? text.innerContent 
                  : addSpace(text.innerContent)
                }
              </span>
            )
          })}
        </div>
        <div className="flex whitespace-pre">
          {game[index].content.subtext && 
            game[index].content.subtext.map((subtext: TextType, i: number) => {
              return (
                <span 
                  className={`${subtext.styles} text-xs`} 
                  key={`${i}-${subtext.innerContent.toLowerCase().replace(' ', '')}`}
                >
                  {(i == 0) 
                    ? subtext.innerContent 
                    : addSpace(subtext.innerContent)
                  }
                </span>
              )
            })
          }
        </div>
      </div>
      <div className="flex gap-x-8 mt-2">
        {game[index].options.map((option: OptionType, i: number) => (
          <button className={`${option.styles} flex whitespace-pre`} onClick={() => gotoIndex(option.goto)} key={`${i}-${option.goto}`}>
            {
              option.text.map((text: TextType, j: number) => {
                return (
                  <span
                    className={text.styles}
                    key={`${i}-${text.innerContent.toLowerCase().replace(' ', '')}`}
                  >
                    {(j == 0) 
                      ? text.innerContent 
                      : addSpace(text.innerContent)
                    }
                  </span>
                )
              })
            }
          </button>
        ))}
      </div>
    </div>
  );
}
