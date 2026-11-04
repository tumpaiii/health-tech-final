import doctor1 from "@/src/assets/images/speaker-doctor-1.jpg";
import doctor2 from "@/src/assets/images/speaker-doctor-2.jpg";
import doctor3 from "@/src/assets/images/speaker-doctor-3.jpg";
import doctor4 from "@/src/assets/images/speaker-doctor-4.jpg";
import doctor5 from "@/src/assets/images/speaker-doctor-5.jpg";
import asset2182970 from "@/src/assets/images/pexels-2182970.jpg";
import asset2379004 from "@/src/assets/images/pexels-2379004.jpg";
import asset2381069 from "@/src/assets/images/pexels-2381069.jpg";
import asset290386 from "@/src/assets/images/pexels-290386.jpg";
import asset3184291 from "@/src/assets/images/pexels-3184291.jpg";
import asset3184292 from "@/src/assets/images/pexels-3184292.jpg";
import asset3184338 from "@/src/assets/images/pexels-3184338.jpg";
import asset3184418 from "@/src/assets/images/pexels-3184418.jpg";
import asset3184423 from "@/src/assets/images/pexels-3184423.jpg";
import asset3184432 from "@/src/assets/images/pexels-3184432.jpg";
import asset3184465 from "@/src/assets/images/pexels-3184465.jpg";
import asset3760263 from "@/src/assets/images/pexels-3760263.jpg";
import asset378570 from "@/src/assets/images/pexels-378570.jpg";
import asset3861969 from "@/src/assets/images/pexels-3861969.jpg";
import asset4226122 from "@/src/assets/images/pexels-4226122.jpg";
import asset466685 from "@/src/assets/images/pexels-466685.jpg";
import asset802024 from "@/src/assets/images/pexels-802024.jpg";
import assetVideo from "@/src/assets/videos/healthtech-hero.mp4";
export const localMedia: Record<string,string> = {
  "doctor1": doctor1.src,
  "doctor2": doctor2.src,
  "doctor3": doctor3.src,
  "doctor4": doctor4.src,
  "doctor5": doctor5.src,

  "2182970": asset2182970.src,
  "2379004": asset2379004.src,
  "2381069": asset2381069.src,
  "290386": asset290386.src,
  "3184291": asset3184291.src,
  "3184292": asset3184292.src,
  "3184338": asset3184338.src,
  "3184418": asset3184418.src,
  "3184423": asset3184423.src,
  "3184432": asset3184432.src,
  "3184465": asset3184465.src,
  "3760263": asset3760263.src,
  "378570": asset378570.src,
  "3861969": asset3861969.src,
  "4226122": asset4226122.src,
  "466685": asset466685.src,
  "802024": asset802024.src,
  "video": assetVideo,
};
export function localizeMarkup(markup:string):string {
  return markup.replace(/https:\/\/(?:images|videos)\.pexels\.com\/[^"\\\s<>]+/g, (url) => {
    const id = url.match(/pexels-photo-(\d+)|photos\/(\d+)|video-files\/(\d+)/);
    const key = id ? (id[1] || id[2] || (id[3] ? "video" : "")) : "";
    return localMedia[key] || url;
  });
}
