"use client";
import {localMedia} from "@/lib/local-media";

import React from "react";
const steps = [
 {num:"01",title:"Arrival & Introductions",desc:"Settle in, meet the room and start conversations.",image:localMedia["3184418"]},
 {num:"02",title:"Founder Conversations",desc:"Hear from people navigating the realities of building in healthcare.",image:localMedia["3184291"]},
 {num:"03",title:"HealthTech Perspectives",desc:"Explore the ideas, challenges and opportunities shaping the field.",image:localMedia["3184465"]},
 {num:"04",title:"Networking & Collaboration",desc:"Make connections and continue the conversation.",image:localMedia["3184432"]}
];
export default function Agenda(){return <section className="section agenda agenda-zigzag" id="agenda"><div className="wrap"><p className="eyebrow reveal">06 / THE FLOW OF THE DAY</p><h2 className="section-title reveal agenda-heading">The agenda.</h2><div className="agenda-zigzag-grid">{steps.map((s,i)=><div className={`agenda-step agenda-step-${i+1} reveal`} key={s.num}><div className="agenda-step-text"><span className="agenda-step-label">THE MEETUP EXPERIENCE</span><h3>{s.title}</h3><p>{s.desc}</p><strong>{s.num}</strong></div><div className="agenda-step-image"><img loading="lazy" src={s.image} alt={s.title}/></div></div>)}</div></div></section>}
