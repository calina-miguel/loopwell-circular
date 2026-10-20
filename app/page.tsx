import { FunnelLanding } from "./funnel-landing";

export const metadata = { title: "Loopwell", description: "Build a growth path around reuse, repair, and the value already in circulation." };

export default function Page(){ return <FunnelLanding config={{ name: "Loopwell", monogram: "LO", eyebrow: "THE SECOND LIFE STARTS HERE", title: "Build a growth path around reuse, repair, and the value already in circulation.", body: "Circular resale & repair", accent: "#1f6b52", soft: "#e5f3e9", steps: ["Define your circular promise","Reach the right lookalikes","Invite the next return"], cta: "Build the reach path", outcome: "Circular reach" }} />; }

