"use client";
import {localMedia} from "@/lib/local-media";

import {useEffect} from "react";
import {initPreview} from "@/lib/preview-interactions";
export default function Interactions(){useEffect(()=>{Object.entries(localMedia).forEach(([id,url])=>{if(id!=="video")document.documentElement.style.setProperty("--local-photo-"+id,`url("${url}")`)});initPreview()},[]);return null;}
