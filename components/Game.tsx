export type TextType = {
  innerContent: string,
  styles?: string,
};

type ContentType = {
  title: Array<TextType>,
  text: Array<TextType>,
  subtext?: Array<TextType>,
};

export type OptionType = {
  text: Array<TextType>,
  styles?: string,
  goto?: number,
};

type GameType = {
  id: number,
  content: ContentType,
  options: Array<OptionType>,
};

const game: Array<GameType> = [
  {
    id: 1,
    content: {
      title: [
        {
          innerContent: 'A CROSSROADS BEFORE YOU',
          styles: 'font-bold text-2xl'
        },
      ],
      text: [
        {
          innerContent: 'There is a',
        },
        {
          innerContent: 'crossroads',
          styles: 'text-lime-300 font-bold',
        },
        {
          innerContent: 'before you. Will you go',
        },
        {
          innerContent: 'Left',
          styles: 'text-cyan-400 font-semibold'
        },
        {
          innerContent: 'or',
        },
        {
          innerContent: 'Right',
          styles: 'text-purple-400 font-semibold'
        },
        {
          innerContent: '?',
        },
      ],
    },
    options: [
      {
        text: [
          {
            innerContent: 'Go',
          },
          {
            innerContent: 'Left',
            styles: 'text-cyan-400 font-semibold'
          },
        ],
        styles: 'border border-cyan-300 px-4 py-2 hover:cursor-pointer',
        goto: 2,
      },
      {
        text: [
          {
            innerContent: 'Go',
          },
          {
            innerContent: 'Right',
            styles: 'text-purple-400 font-semibold'
          },
        ],
        styles: 'border border-purple-300 px-4 py-2 hover:cursor-pointer',
        goto: 3,
      },
    ],
  },
  {
    id: 2,
    content: {
      title: [
        {
          innerContent: 'YOU HAVE GONE LEFT',
          styles: 'font-bold text-2xl'
        },
      ],
      text: [
        {
          innerContent: 'You have gone',
        },
        {
          innerContent: 'Left',
          styles: 'text-cyan-300 font-bold',
        },
        {
          innerContent: '.',
        },
      ],
    },
    options: [
      {
        text: [
          {
            innerContent: 'Go',
          },
          {
            innerContent: 'Back',
          },
        ],
        styles: 'border px-4 py-2 hover:cursor-pointer',
        goto: 1,
      },
    ],
  },
  {
    id: 3,
    content: {
      title: [
        {
          innerContent: 'YOU HAVE GONE RIGHT',
          styles: 'font-bold text-2xl'
        },
      ],
      text: [
        {
          innerContent: 'You have gone',
        },
        {
          innerContent: 'Right',
          styles: 'text-purple-300 font-bold',
        },
        {
          innerContent: '.',
        },
      ],
      subtext: [
        {
            innerContent: 'Bad',
            styles: 'text-red-300',
        },
        {
            innerContent: 'choice...',
        },
      ],
    },
    options: [],
  },
];

export default game;