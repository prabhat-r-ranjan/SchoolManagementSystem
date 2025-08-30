import Header from '../app/components/Header/Header';
import HeroSection from '../app/components/Main/HeroSection';
import VisionSection from '../app/components/Main/VisionSection';
import FacilitiesSection from '../app/components/Main/FacilitiesSection';
import LeadershipSection from '../app/components/Main/LeadershipSection'; 
import AcademicProgram from '../app/components/Main/AcademicProgram';
import BeyondAcademics from '../app/components/Main/BeyondAcademics'; 
import AdmissionCTA from './components/Main/AdmissionsCTA';
import SavitriFooter from './components/Footer/SavitriFooter';  
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <VisionSection />
      <FacilitiesSection />
      <LeadershipSection/>
      <AcademicProgram/>
      <BeyondAcademics/> 
      <AdmissionCTA/>
      <SavitriFooter/>
    </div>
  );
}