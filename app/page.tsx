import "./loopwell.css";
import "./pathway.css";
import { Pathway } from "./pathway";

export const metadata = { title: "Loopwell | Keep value in motion", description: "A circular commerce path for reuse, repair, and the next life of good products." };

const moves = [["01", "Give it a second story", "Make the value of pre-loved goods easy to see."], ["02", "Make repair feel natural", "Help people choose care before replacement."], ["03", "Invite the return", "Keep the next useful step close at hand."]];

export default function Page() {
  return <main className="loop-page" id="loop-top">
    <header className="loop-nav"><a href="#loop-top" className="loop-brand"><span className="loop-mark">L<span>↗</span></span>LOOPWELL</a><span className="loop-nav-note">CIRCULAR COMMERCE / FIELD 01</span><a href="#moves" className="loop-nav-link">The reach path <span>↘</span></a></header>
    <section className="loop-hero">
      <div className="loop-hero-copy"><p className="loop-kicker">CIRCULAR RETAIL / THE LOOP</p><h1>Keep value<br />in <i>motion.</i></h1><p>Give every product a next chapter through reuse, repair, and return.</p><a className="loop-hero-cta" href="#moves">Explore the cycle <b>↘</b></a></div>
      <div className="loop-cycle-graphic" role="img" aria-label="Product journey through reuse, repair, and return">
        <div className="cycle-orbit orbit-outer"><span className="cycle-node node-reuse"><b>01</b> REUSE</span><span className="cycle-node node-repair"><b>02</b> REPAIR</span><span className="cycle-node node-return"><b>03</b> RETURN</span></div>
        <div className="cycle-orbit orbit-inner"></div>
        <div className="cycle-center"><svg viewBox="0 0 180 190" aria-hidden="true"><path d="m59 22 29 10 30-10 38 30-27 29-14-14v91H66V67L52 81 25 52z"/><path d="M59 22c5 22 42 25 59 0M66 67l23 19 29-19"/></svg><span>PRODUCT<br/>IN MOTION</span></div>
        <span className="cycle-arrow arrow-one" aria-hidden="true">↻</span><span className="cycle-caption">DESIGNED TO COME AROUND</span>
      </div>
    </section>
    <section className="loop-moves" id="moves"><div className="loop-section-heading"><p className="loop-kicker">ONE PRODUCT / MANY CHAPTERS</p><h2>Keep the cycle<br /><i>moving.</i></h2><p>Each touchpoint makes a longer, more useful life easier to choose.</p></div><div className="loop-move-list">{moves.map(([n,title,copy])=><article key={n} className={`loop-move cycle-step-${n}`}><span>{n}</span><h3>{title}</h3><p>{copy}</p><b aria-hidden="true">{n === "03" ? "↻" : "↗"}</b></article>)}</div></section>
    <section className="loop-invite"><div><p className="loop-kicker">KEEP THE GOOD GOING</p><h2>Make room for<br /><i>another round.</i></h2><p>Choose the next chapter for an item or offer in your circular store.</p></div><Pathway /></section>
    <footer className="loop-footer"><a href="#loop-top" className="loop-brand"><span className="loop-mark">L<span>↗</span></span>LOOPWELL</a><span>Less take. More life.</span><span>© 2026 / LOOPWELL CIRCULAR</span></footer>
  </main>;
}
