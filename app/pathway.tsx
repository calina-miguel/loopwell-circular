"use client";

import { useState } from "react";

const stages = [
  { title: "What kind of second life fits?", choices: ["Repair what I own", "Pass it on", "Return it through a take-back route"] },
  { title: "What would make it easier?", choices: ["A trusted local option", "A clear product story", "A simple way to return"] },
  { title: "Where are you in the loop?", choices: ["Ready to act", "Still exploring", "Coming back again"] },
];
const paths = [
  ["Repair / Keep the story going", "Start by describing the item and the repair you need. Compare repair options and check care instructions before considering replacement."],
  ["Resell / Give it another home", "Gather condition notes, original details, and clear photos. A useful listing makes it easier for the next person to choose well."],
  ["Return / Close the loop", "Check whether the maker or retailer offers a take-back route, then review what is accepted and how the item should be prepared."],
];

export function Pathway() {
  const [stage, setStage] = useState(0); const [answers, setAnswers] = useState<number[]>([]); const [complete, setComplete] = useState(false);
  const choose = (i: number) => setAnswers((old) => { const next = old.slice(0, stage); next[stage] = i; return next; });
  return <div className="pathway pathway--loop" id="loop-pathway" aria-live="polite">
    <div className="pathway__orbit"><span>REUSE</span><i/><span>REPAIR</span><i/><span>RETURN</span></div>
    {complete ? <div className="pathway__result"><span className="pathway__loop-stamp">LOOP / 0{(answers[0] ?? 0) + 1}</span><h3>{paths[answers[0] ?? 0][0]}</h3><p>{paths[answers[0] ?? 0][1]}</p><p className="pathway__muted">Your next step is ready here. Email follow-up is paused until sender-domain setup is complete.</p><button onClick={() => { setComplete(false); setStage(0); setAnswers([]); }}>Take another turn ↺</button></div> : <>
      <p className="pathway__label">CIRCULAR SIGNAL / 0{stage + 1}</p><h3>{stages[stage].title}</h3><div className="pathway__track">{stages.map((item, i) => <span key={item.title} className={i <= stage ? "active" : ""}/>)}</div>
      <div className="pathway__choices">{stages[stage].choices.map((item, i) => <button key={item} onClick={() => choose(i)} className={answers[stage] === i ? "selected" : ""} aria-pressed={answers[stage] === i}><span>0{i + 1}</span>{item}<b>↗</b></button>)}</div>
      <div className="pathway__actions"><button onClick={() => setStage(Math.max(0, stage - 1))} disabled={!stage}>Previous</button><button onClick={() => stage < 2 ? setStage(stage + 1) : setComplete(true)} disabled={answers[stage] === undefined}>{stage === 2 ? "Find my next turn" : "Keep it moving"}<span>↗</span></button></div>
    </>}
  </div>;
}
