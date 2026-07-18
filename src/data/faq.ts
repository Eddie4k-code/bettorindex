export interface FaqItem {
  question: string;
  answer: string;
}

export const propFaq: FaqItem[] = [
  {
    question: 'What does Opportunity mean?',
    answer:
      'Trend and current price both look favorable based on our analytics. This is the strongest of our three reads — not a betting recommendation or guarantee.',
  },
  {
    question: 'What does Worth Watching mean?',
    answer:
      "There's a lean, but trend and price aren't strong enough yet. Keep an eye on it — don't rush.",
  },
  {
    question: 'What does Potential Pass mean?',
    answer:
      'No strong lean, or the price doesn\'t support action. The card suggests this one may not be worth a look right now.',
  },
  {
    question: 'Is this an odds board?',
    answer:
      'No. BettorIndex is a research tool. Each prop card shows one best line and price for the leaned side, sourced from BetMGM, DraftKings, FanDuel, and Fanatics.',
  },
  {
    question: 'What does Books Disagree mean on props?',
    answer:
      'When tracked books post different lines on a prop, the card shows the minimum and maximum line — a Split Market range. It does not change which side trends.',
  },
  {
    question: 'What are Relevant Injuries on props?',
    answer:
      'Injury notes tied to the player or matchup for that prop — not a full league injury report. Shown when we have data.',
  },
];

export const gameLineFaq: FaqItem[] = [
  {
    question: 'What are Game Lines?',
    answer:
      'Team-level research cards for moneyline, spread, and total markets across NBA, MLB, and NFL. Each card shows a lean based on recent venue and head-to-head results, plus best available odds.',
  },
  {
    question: 'How does moneyline research work?',
    answer:
      'We combine each team\'s venue win rate and head-to-head win rate when enough history exists. Cards show records like "Won 6 of last 10 away games." Last-N overall is shown for context but does not drive the lean.',
  },
  {
    question: 'How does spread research work?',
    answer:
      'Same idea as moneyline, but using cover rates instead of wins. Cards show "Covered X of last Y games" and surface the best spread line and price.',
  },
  {
    question: 'How does total research work?',
    answer:
      'We combine home-team, away-team, and head-to-head clear rates for the Over and Under directions. The lean is Over or Under — not a team pick.',
  },
  {
    question: 'What does Split Market mean on game lines?',
    answer:
      'When books post different numbers, the card shows the range. Moneyline: price min ↔ max per team. Spreads and totals: line and price ranges. Split Market does not change the lean.',
  },
  {
    question: 'What does the opposing team section show?',
    answer:
      'When a lean exists, the leaned team\'s stats and best price are up front. Expand the opposing team\'s section (h2h/spread) or the other direction (totals) for full context.',
  },
  {
    question: 'What are Relevant Injuries on game lines?',
    answer:
      'Injury notes for both teams in tonight\'s matchup — not a full league report. Shown when we have data, same idea as props but scoped to the game.',
  },
];

export const sharedFaq: FaqItem[] = [
  {
    question: 'What is BettorIndex?',
    answer:
      'A sports betting research tool for NBA, MLB, and NFL. Research player props and team game lines with trends, leans, and best available odds. A decision aid — not a sportsbook or picks service.',
  },
  {
    question: 'Which sports and books are supported?',
    answer:
      'Prop Markets and Game Lines cover NBA, MLB, and NFL. We track BetMGM, DraftKings, FanDuel, and Fanatics. Not every market will have all four books available at the same time.',
  },
  {
    question: 'How often are lines and odds updated?',
    answer:
      'For matchups starting within the next 4 hours, BettorIndex refreshes Prop Markets and Game Lines every 15 minutes. For matchups within the next 24 hours, we refresh every 2 hours (120 minutes). After a line moves, leans and best prices may take a few extra minutes to appear while our backend processes the update.',
  },
  {
    question: 'How does BettorIndex score research?',
    answer:
      'Props: weighted recent hit rates compared to implied odds, which feeds the Market Read. Game lines: a simple sum of venue rate plus head-to-head rate when enough history exists (totals add both teams\' clear rates per direction). Injuries and split markets are context — they do not change game-line lean direction.',
  },
];

export const allFaqItems: FaqItem[] = [...propFaq, ...gameLineFaq, ...sharedFaq];
