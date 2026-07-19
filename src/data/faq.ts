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
      'Team-level research cards for moneyline, spread, and total markets across NBA, MLB, and NFL. Each card shows a matchup trend based on recent venue and head-to-head results, plus the best available price (and line when applicable) on each side or direction.',
  },
  {
    question: 'What does Trend Favors mean on a Game Lines card?',
    answer:
      'Trend Favors {Outcome} means venue and head-to-head signals clearly agree and are well above a coin flip — for example, strong home/away records plus a solid head-to-head split. Cards show records like "Won 7 of last 10 home games" rather than internal scoring percentages.',
  },
  {
    question: 'What does Trend Supports mean?',
    answer:
      'Trend Supports {Outcome} means venue and head-to-head trends point the same way, but recent records are not strong enough for a clear favor. The card still names the supported side, but keeps both sides visible in the market summary.',
  },
  {
    question: 'What does Mixed Signals mean?',
    answer:
      'Mixed Signals means venue or team-context trends and head-to-head history disagree — for example, strong home results but a losing record against tonight\'s opponent. The card does not pick a side; it explains that recent trends do not clearly favor either outcome.',
  },
  {
    question: 'What does No Clear Trend mean?',
    answer:
      'No Clear Trend means recent records are too close to even to favor either side or direction. This also appears when scoring ties between both outcomes.',
  },
  {
    question: 'How does moneyline research work?',
    answer:
      'Moneyline cards compare each team\'s recent venue win rate and, when enough history exists, head-to-head results against tonight\'s opponent. Last-N overall record is shown for context but does not drive the trend.',
  },
  {
    question: 'How does spread research work?',
    answer:
      'Spread cards compare each team\'s recent venue cover rate and, when enough history exists, head-to-head cover results against tonight\'s opponent. Cards show records like "Covered 6 of last 10 away games" and surface the best spread line and price on each side.',
  },
  {
    question: 'How does total research work?',
    answer:
      'Totals cards compare how often Over or Under cleared in recent home-team games, away-team games, and head-to-head matchups. Cards show clear-rate records in plain language, the best total line and price on each direction, and an expandable section for the opposing direction when a strong trend exists.',
  },
  {
    question: 'What does Split Market mean on game lines?',
    answer:
      'When books post different numbers, the card shows the range. Moneyline: price min ↔ max per team. Spreads and totals: line and price ranges. Split Market does not change the trend status.',
  },
  {
    question: 'What does the opposing team section show?',
    answer:
      'When a strong trend exists, the favored team\'s stats and best price are shown up front. Expand the opposing team\'s section to see their recent records, best odds or spread, and any book disagreement on that side.',
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
      'Prop Markets and Game Lines cover NBA, MLB, and NFL. We track BetMGM, DraftKings, FanDuel, and Fanatics. Not every market will have all four books available at the same time. College football (CFB) is coming soon, targeted for the start of the 2026–27 season.',
  },
  {
    question: 'When is CFB coming to BettorIndex?',
    answer:
      'CFB is coming soon — expected at the beginning of the 2026–27 college football season. It will use the same research-card approach as NFL props and game lines when it launches.',
  },
  {
    question: 'How often are lines and odds updated?',
    answer:
      'For matchups starting within the next 4 hours, BettorIndex refreshes Prop Markets and Game Lines every 15 minutes. For matchups within the next 24 hours, we refresh every 2 hours (120 minutes). After a line moves, trends and best prices may take a few extra minutes to appear while our backend processes the update.',
  },
  {
    question: 'How does BettorIndex score research?',
    answer:
      'Props: weighted recent hit rates compared to implied odds, which feeds the Market Read. Game lines: a simple sum of venue rate plus head-to-head rate when enough history exists (totals add both teams\' clear rates per direction). Cards then classify into Trend Favors, Trend Supports, Mixed Signals, or No Clear Trend based on signal agreement and strength. Injuries and split markets are context — they do not change the trend status.',
  },
];

export const allFaqItems: FaqItem[] = [...propFaq, ...gameLineFaq, ...sharedFaq];
