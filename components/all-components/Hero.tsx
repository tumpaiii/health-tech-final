"use client";
import {localizeMarkup} from "@/lib/local-media";

import React from "react";
const markup = "<header class=\"hero\" id=\"home\"><div class=\"video-fallback\"></div><video autoplay=\"\" loop=\"\" muted=\"\" playsinline=\"\" poster=\"https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg\"><source src=\"https://videos.pexels.com/video-files/9430415/9430415-hd_1920_1080_25fps.mp4\" type=\"video/mp4\"/></video><div class=\"hero-copy\"><h1>The people<br/>building what's<br/>next in healthcare.</h1><a class=\"explore\" href=\"#about\">EXPLORE THE MEETUP ↗</a></div></header>";
export default function Hero(){return <div className="section-host" dangerouslySetInnerHTML={{__html:localizeMarkup(markup)}}/>;}
