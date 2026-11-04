import Navbar from "@/components/all-components/Navbar";
import Hero from "@/components/all-components/Hero";
import About from "@/components/all-components/About";
import InsideMeetup from "@/components/all-components/InsideMeetup";
import Experience from "@/components/all-components/Experience";
import Speakers from "@/components/all-components/Speakers";
import Agenda from "@/components/all-components/Agenda";
import Venue from "@/components/all-components/Venue";
import Partners from "@/components/all-components/Partners";
import RegistrationFAQ from "@/components/all-components/RegistrationFAQ";
import Footer from "@/components/all-components/Footer";
import Interactions from "@/components/all-components/Interactions";
export default function Home(){return <><Navbar/><Hero/><main><About/><InsideMeetup/><Experience/><Speakers/><Agenda/><Venue/><Partners/><RegistrationFAQ/></main><Footer/><button id="back-top" className="top-link" aria-label="Back to top">↑</button><Interactions/></>}
