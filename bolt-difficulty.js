// OHANA-626 adjustable relationship puzzles. Correct-answer keys stay private in Supabase.
import { EASY_BOLTS } from './easy-bolts.js';
export const BOLT_LEVELS = [
 {id:'very_easy',label:'Very Easy',detail:'Two friendly choices, ideal for a relaxed story.'},
 {id:'easy',label:'Easy',detail:'Three choices, like the original personal questions.'},
 {id:'medium',label:'Medium',detail:'Four choices with an additional distraction.'},
 {id:'hard',label:'Hard',detail:'No choices; Bella recalls and types her answer.'},
 {id:'extreme',label:'Extreme',detail:'Type the relationship answer backwards through Stitch’s mirror.'},
 {id:'impossible',label:'Impossible',detail:'Solve the memory, then a Warden cipher and checksum. Difficult, but solvable.'}
];
const OMIT_WRONG = {"1":[0,1,0],"2":[0,0,1],"3":[1,0,0],"4":[0,1,0],"5":[0,0,1],"6":[1,0,0],"7":[0,1,0],"8":[0,0,1],"9":[1,0,0],"10":[0,1,0],"11":[0,0,1],"12":[1,0,0],"13":[0,1,0],"14":[0,0,1],"15":[1,0,0],"16":[0,1,0],"17":[0,0,1],"18":[1,0,0],"19":[0,1,0],"20":[0,0,1]};
const MEDIUM_EXTRA = [["Lilo","Captain Gantu","Friendship"],["Experiment 627","Turquoise","Portal Keys"],["Sweetheart","Husky","Stitch"],["Wyatt","Hello","A Magic Ticket"],["In the Cafeteria","Mrs. Henson","Walking to Class"],["Prom","The School Dance","Photographs"],["A Camera Flash","Smiles","Remember the Joke"],["Tetris","Solving Clues","Wyatt"],["Fox","Wolf","Trust"],["Red Bull","Lime","Wyatt"],["The Jungle Book","Two Lions","Friendship"],["Valentine's Day","A Costume Party","Wyatt"],["Vanilla Ice Cream","Wyatt's Laugh","A Candy Bracelet"],["Pizza","Rice","Stitch"],["Stitch","Watching the Movie","Photos"],["She Blushes","Wyatt's Smile","Adventure"],["Courage","Wyatt","Trust"],["September 12","Our First Date","Bella and Stitch"],["November 25","At School","Making Memories"],["Wyatt","Every World","Stitch and Bella"]];
export function makeBolt(day,gate,level='easy') {
 const base=EASY_BOLTS[day]?.[gate-1]; if(!base) return null;
 const copy={...base};
 if(level==='very_easy'){
   copy.options=base.options.filter((_,i)=>i!==OMIT_WRONG[day][gate-1]);
   copy.format='CHOOSE FROM TWO PORTALS ♡';
   copy.instructions='Stitch makes it easier: only two answer portals remain.';
 } else if(level==='medium'){
   const choices=[...base.options,MEDIUM_EXTRA[day-1][gate-1]];
   const roll=(day+gate*3)%choices.length;
   copy.options=[...choices.slice(roll),...choices.slice(0,roll)];
   copy.format='CHOOSE ONE OF FOUR ANSWERS';
   copy.instructions='More possibilities! Think back to your memories.';
 } else if(level==='hard'){
   copy.options=null; copy.format='TYPE YOUR ANSWER (SPACES OPTIONAL)';
   copy.placeholder='Remember the answer…';
   copy.instructions='Your choices are hidden. Recall the relationship memory and type it.';
 } else if(level==='extreme'){
   copy.options=null; copy.format='STITCH’S MIRROR CHALLENGE';
   copy.placeholder='Type the mirrored answer…';
   copy.instructions='Recall the answer. Remove spaces and punctuation, then enter it BACKWARDS. Example: MAGIC becomes CIGAM. Reverse numbers too.';
 } else if(level==='impossible'){
   copy.options=null; copy.format='THE WARDEN’S IMPOSSIBLE CIPHER';
   copy.placeholder='Enter your coded answer and digit…';
   copy.instructions='Find the answer. Remove spaces and punctuation. Shift every LETTER forward 3 (A→D, X→A), leaving numbers unchanged. Reverse the entire result. Append the LAST DIGIT of (chapter number + seal number + 6). Example: MAGIC becomes FLJDP before the final digit.';
 } else { copy.options=[...base.options]; copy.format='CHOOSE ONE ANSWER ♡'; copy.instructions=''; }
 return copy;
}
