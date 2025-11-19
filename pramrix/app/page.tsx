// app/page.tsx - CORRECTED VERSION

import HeroSection from './components/Main/PramrixHeroSection';
import Header from './components/Header/PramrixHeader';
import Partnership from './components/Main/PramrixStrategicServices';
import AboutUs from './components/Main/AboutUs';
import HowWeWork from './components/Main/HomepageHowWeWork';
import Footer from './components/Footer/Footer';
export default function Home() {
  // 🚨 REMOVE THESE LINES COMPLETELY 🚨
  // const { isDark } = useTheme(); // DELETE THIS LINE
  // import { useTheme } from '../app/context/ThemeContext'; // DELETE THIS LINE TOO

  return (
    <div> 
      {/* 🚨 REMOVE the style prop too 🚨 */}
      <Header/>
      <HeroSection />
      <AboutUs/>
      <Partnership/>
      <HowWeWork/>
      <Footer/>
    </div>
  );
}