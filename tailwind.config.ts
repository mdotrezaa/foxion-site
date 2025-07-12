import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: [
    './pages/**/*.{vue,html,js,ts}',
    './components/**/*.{vue,html,js,ts}',
  ],
  theme: {
  },
  plugins: [],
};
