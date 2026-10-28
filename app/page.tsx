import "./loopwell.css";
import "./pathway.css";
import { Pathway } from "./pathway";

export const metadata = { title: "Loopwell | Keep value in motion", description: "A circular commerce path for reuse, repair, and the next life of good products." };

const moves = [["01", "Give it a second story", "Make the value of pre-loved goods easy to see."], ["02", "Make repair feel natural", "Help people choose care before replacement."], ["03", "Invite the return", "Keep the next useful step close at hand."]];

export default function Page() {
  return <main className="loop-page" id="loop-top">
    <header className="loop-nav"><a href="#loop-top" className="loop-brand"><span className="loop-mark">L<span>↗</span></span>LOOPWELL</a><span className="loop-nav-note">CIRCULAR COMMERCE / FIELD 01</span><a href="#moves" className="loop-nav-link">The reach path <span>↘</span></a></header>
    <section className="loop-hero">
      <div className="loop-hero-copy"><p className="loop-kicker">THE SECOND LIFE STARTS HERE</p><h1>Keep value<br />in <i>motion.</i></h1><p>Build the kind of commerce people come back to - through reuse, repair, and products with more than one good chapter.</p><a className="loop-hero-cta" href="#moves">Build the reach path <b>↗</b></a><div className="loop-counter"><strong>01</strong><span>REUSE</span><i/><span>REPAIR</span><i/><span>RETURN</span></div></div>
      <div className="loop-visual"><div className="visual-label">IN CIRCULATION / SINCE ALWAYS</div><div className="fabric-panel"><svg viewBox="0 0 500 520" role="img" aria-label="Abstract garment label for circular goods"><path className="garment" d="M170 70 245 95 324 70l95 74-68 70-33-33v248H177V181l-35 34-65-70z"/><path className="garment-detail" d="M170 70c8 50 121 52 154 0M177 182l55 45m77-45-55 45M180 370h140"/><path className="thread" d="M92 435c75-67 163-84 228-48s88 21 130-17"/><circle className="thread-dot" cx="92" cy="435" r="6"/></svg><div className="fabric-tag"><span>GOOD THINGS</span><b>DESERVE<br/>ANOTHER ROUND</b><i>LOOPWELL / 001</i></div></div><span className="loop-side-caption">REPAIR IS A LOVE LANGUAGE.</span><span className="loop-star star-a">✳</span><span className="loop-star star-b">✳</span></div>
    </section>
    <div className="loop-ticker" aria-label="Reuse, repair, return"><div className="loop-ticker-track"><span>REUSE</span><b>↗</b><span>REPAIR</span><b>↗</b><span>RETURN</span><b>↗</b><span>REUSE</span><b>↗</b><span>REPAIR</span><b>↗</b><span>RETURN</span><b>↗</b></div></div>
    <section className="loop-moves" id="moves"><div className="loop-section-heading"><p className="loop-kicker">A ROUTE THAT COMES FULL CIRCLE</p><h2>Make the next<br />life <i>obvious.</i></h2><p>Turn interest into a reason to return, with a useful step at every point in the product's life.</p></div><div className="loop-move-list">{moves.map(([n,title,copy])=><article key={n} className="loop-move"><span>{n}</span><h3>{title}</h3><p>{copy}</p><b aria-hidden="true">↗</b></article>)}</div></section>
    <section className="loop-invite"><div><p className="loop-kicker">KEEP THE GOOD GOING</p><h2>Make room for<br /><i>another round.</i></h2><p>Choose the next chapter for an item or offer in your circular store.</p></div><Pathway /></section>
    <footer className="loop-footer"><a href="#loop-top" className="loop-brand"><span className="loop-mark">L<span>↗</span></span>LOOPWELL</a><span>Less take. More life.</span><span>© 2026 / LOOPWELL CIRCULAR</span></footer>
  </main>;
}
