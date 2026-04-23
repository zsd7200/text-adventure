'use client';

import { useState } from "react";
import game, { TextType, OptionType } from "@/components/Game";
import { addSpace } from "@/components/Common";

type LegacyProps = {
  idx?: number,
  updateCallback: Function,
};

export default function Legacy(props: LegacyProps) {
  const [index, setIndex] = useState<number>(props.idx ?? 0);
  const [input, setInput] = useState<string>('');

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value.trim());
  }

  const gotoIndex = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    if (!input || input === '') return;
    if (!game[index].options[+input]) return;

    const goto = game[index].options[+input].goto;
    if (!goto && goto !== 0) return;

    const idx = game.findIndex((obj) => obj.id === goto);
    if (!idx && idx !== 0) return;
    
    setIndex(idx);
    setInput('');
    props.updateCallback(idx);
  };

  const filterStyles = (styles?: string) => {
    if (!styles) return;

    const stylesArr: Array<string> = styles.split(' ');
    const filteredStylesArr: Array<string> = [];
    const tailwindColorPattern = /^text-[a-z]+(?:-[a-z]+)*-(?:[1-9]00)(?:\/\d{1,3})?$/;
    const tailwindWeightPattern = /^font-(?:thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/;

    stylesArr.forEach((style) => {
      if (tailwindColorPattern.test(style)) {
        return filteredStylesArr.push(style);
      }

      if (tailwindWeightPattern.test(style)) {
        return filteredStylesArr.push(style);
      }
    });

    return filteredStylesArr.join(' ');
  }
  
  return (
    <div className="flex flex-col mx-auto justify-center text-left flex-1 font-mono">
      <div className="flex text-left whitespace-pre">
        {game[index].content.title.map((title: TextType, i: number) => {
          return (
            <span 
              className={filterStyles(title.styles)} 
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
      <div className="flex flex-col">
        <div className="flex whitespace-pre">
          {game[index].content.text.map((text: TextType, i: number) => {
            return (
              <span 
                className={filterStyles(text.styles)} 
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
                  className={`${filterStyles(subtext.styles)} text-xs`} 
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
      <div className="flex flex-col gap-x-8 mt-2">
        {game[index].options.map((option: OptionType, i: number) => (
          <div className={`${filterStyles(option.styles)} flex whitespace-pre`} key={`${i}-${option.goto}`}>
            [{i}]: 
            {
              option.text.map((text: TextType) => {
                return (
                  <span 
                    className={filterStyles(text.styles)} 
                    key={`${i}-${text.innerContent.toLowerCase().replace(' ', '')}`}
                  >
                    {addSpace(text.innerContent)}
                  </span>
                )
              })
            }
          </div>
        ))}
      </div>
      {game[index].options.length > 0 &&
        <input 
            type="text" 
            autoFocus={true} 
            className="caret-white mx-1 mt-2 p-1 w-50 not-focus:border rounded-md" value={input} 
            onChange={updateInput} 
            onKeyDown={gotoIndex} 
        />
      }
    </div>
  );
}
