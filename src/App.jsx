import Header from "./components/Header";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Footer from "./components/Footer/Footer";
import FaqContainer from "./components/FAQ/FaqContainer";
import AstContainer from "./components/AstContainer";
import OnboardingSteps from "./components/OnboardingSteps";
import TopBanner from "./components/TopBanner";
import LogoCarousel from "./components/LogoCarousel";
import TestimonialCarousel from "./components/TestimonialCarousel";
import SecurityFeatures from "./components/SecurityFeatures";
import RoutingConstraints from "./components/RoutingConstraints";
import Integrations from "./components/Integrations";
import CaseStudies from "./components/CaseStudies";
import Ratings from "./components/Ratings";
import RouteOptimization from "./components/RouteOptimization";
import RoutingDispatchApp from "./components/RoutingDispatchApp";
import Partners from "./components/Partners";

function App() {
  return (
    <Theme>
      <>
        <Header />
        <TopBanner />
        <LogoCarousel />
        <RoutingConstraints />
        <TestimonialCarousel />
        <RouteOptimization />
        <RoutingDispatchApp />
        <Partners />
        <Ratings /> 
        <OnboardingSteps />
        <CaseStudies />
        <Integrations />
        <SecurityFeatures />
        <FaqContainer />
        <AstContainer />
        <Footer />
      </>
    </Theme>
  );
}

export default App;
