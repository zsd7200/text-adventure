# Text Adventure
A wrapper for creating a text-based adventure game that can be interacted with in two ways--Modern, with choices given as buttons, and Legacy, with choices given as text inputs.

Text entered in `components/Game.tsx` is joined together as `<span>` elements which can each have their own independent [Tailwind](https://tailwindcss.com/) styles.

All styles barring any text colors or font weights are ignored when viewing in Legacy mode in an attempt to keep the style reminiscent of a game one might play on a terminal, while still allowing for some flavor.

This has no implementation for any sort of inventory or health systems--it is simply a way to enjoy an interactive story.

## Running

1. Edit `components/Game.tsx` to your liking.
2. Run the development server with `npm run dev`.
3. Access the game at `http://localhost:3000`.