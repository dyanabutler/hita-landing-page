
import { ArrowDownCircle, BarChart, Zap, DollarSign, Fish, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Montserrat, Merriweather } from 'next/font/google';
import Image from "next/image";
import { AnimatedSection, AnimatedStaggerSection } from './components/AnimatedSections';
import { AnimatedHeroSection } from "./components/AnimatedHeroSection";

const montserrat = Montserrat({ subsets: ['latin'] });
const merriweather = Merriweather({ weight: ['300', '400', '700'], subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-gray-50 text-gray-900 ${montserrat.className}`}>
    
     <AnimatedHeroSection merriweather={""} />
     

      {/* Fixed Background Section */}
      <section className="fixed inset-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-gray-900 z-0">
    
        <div className="relative z-10 text-center px-4">
          <Image
            src="Colorlogo-nobackground.svg"
            alt="HITA Logo"
            width={1200}
            height={1200}
            className="mr-2 rounded"
          />
         
          <p className={`text-xl mb-8 text-green-100 ${merriweather.className}`}>
            Revolutionizing heat recycling…beginning at the EDGE
          </p>
         
        </div>
        
        <ArrowDownCircle className="absolute bottom-8 animate-bounce text-white w-8 h-8" />
      </section>

      {/* Main Content */}
      <div className="relative z-10 mt-[100vh]">
        {/* Section 1 */}
       
        <AnimatedSection className="py-20 bg-white w-screen">
          <div className="mb-12 px-4 md:px-0 max-w-3xl mx-auto">
            <h3 className={`text-left ${merriweather.className}`}>
              <span className="text-6xl font-bold block mb-2 bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">Why</span>
              <span className="text-4xl block mb-2">waste edge server heat</span>
              <span className="text-5xl font-bold block my-2 bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">when it could</span>
              <span className="text-7xl font-bold block mb-2 bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">efficiently heat</span>
              <span className="text-5xl block mb-2">homes and businesses</span>
              <span className="text-6xl block mt-2 bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">. . .</span>
            </h3>
          </div>
          <div className="container mx-auto px-4">
            <h2 className={`text-4xl font-bold mb-12 text-center ${merriweather.className}`}>
              The Problem
            </h2>
            <h3 className={`text-3xl font-bold mb-8 text-center text-green-700 ${merriweather.className}`}>
              Edge Compute Heat: An Untapped Resource
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              2% of global electricity is consumed by data centers today, expanding by 12% annually. By 2026, data centers are expected to consume 1,000 TWh globally. The energy used for cooling servers alone could power 50% of US homes for a year. Yet, most of this heat is treated as waste.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className={`text-2xl font-bold mb-4 text-green-700 ${merriweather.className}`}>Environmental Impact</h4>
                <p>Data center cooling energy contributes 5.6 million tons of CO2e emissions annually. Globally, heating contributes 40% of CO2e. Additionally, the average data center uses 300,000 gallons of water each day – the same as 100,000 US homes.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className={`text-2xl font-bold mb-4 text-green-700 ${merriweather.className}`}>Impactful Statistic</h4>
                <p>The average data center uses 300,000 gallons of water daily just to cool servers – enough to provide heating solutions for countless communities.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        

        {/* Section 2 */}
        <AnimatedStaggerSection className="py-20 bg-gray-100">
        
          <div className="container mx-auto px-4">
            <h2 className={`text-4xl font-bold mb-12 text-center ${merriweather.className}`}>
              The HITA Solution
            </h2>
            <h3 className={`text-3xl font-bold mb-8 text-center text-green-700 ${merriweather.className}`}>
              Innovative Digital Heating Technology
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
            Hita&apos;s groundbreaking digital heating technology is transforming the way edge server heat is recycled. With advanced algorithms and sensors, we optimize heat transfer and energy efficiency, reducing costs for edge locations.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-12">
              <h4 className={`text-2xl font-bold mb-4 text-green-700 ${merriweather.className}`}>Proof of Concept</h4>
              <p>HITA PT1 heated a 2,000 sq. ft. home at 98% efficiency through a Northeast winter, brought a 500-gallon tank to jacuzzi temperatures, and served numerous applications in ultra-cold environments.</p>
            </div>

            <h3 className={`text-3xl font-bold text-center mb-8 ${merriweather.className}`}>Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Zap className="w-8 h-8 text-green-600 mb-4" />
                <h4 className={`text-xl font-bold mb-2 text-green-700 ${merriweather.className}`}>Energy Efficiency</h4>
                <p>Reusing server waste heat to heat spaces, significantly cutting energy usage.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <DollarSign className="w-8 h-8 text-green-600 mb-4" />
                <h4 className={`text-xl font-bold mb-2 text-green-700 ${merriweather.className}`}>Cost Savings</h4>
                <p>Less energy consumption means reduced heating costs while meeting ESG goals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <BarChart className="w-8 h-8 text-green-600 mb-4" />
                <h4 className={`text-xl font-bold mb-2 text-green-700 ${merriweather.className}`}>Environmental Impact</h4>
                <p>Our technology supports a greener future by minimizing carbon emissions and promoting sustainability.</p>
              </div>
            </div>
            <div className="bg-green-700 text-white p-8 rounded-lg shadow-lg mb-12">
              <p className={`text-2xl font-semibold text-center ${merriweather.className}`}>
                With a 10% edge market share, HITA could offset the CO2e emissions produced by all homes in NY and CA for an entire year, transforming waste heat into a valuable resource.
              </p>
            </div>
          </div>
          
        </AnimatedStaggerSection>
       

        {/* Section 3 */}
        
        <AnimatedSection className="py-20 bg-white">
        
          <div className="container mx-auto px-4">
            <h2 className={`text-4xl font-bold mb-12 text-center ${merriweather.className}`}>
              Market Potential
            </h2>
            <h3 className={`text-3xl font-bold mb-8 text-center text-green-700 ${merriweather.className}`}>
              Growing Demand for Edge Servers
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              AI, gaming, and video processing have driven a surge in demand for edge servers. These servers reduce latency and improve data processing times for critical, real-time applications.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg max-w-3xl mx-auto mb-12">
              <h4 className={`text-2xl font-bold mb-4 text-green-700 ${merriweather.className}`}>Market Size</h4>
              <div className={`text-3xl font-bold mb-2 ${merriweather.className}`}>
                The global edge market is projected to reach{" "}
                <Badge variant="outline" className="bg-green-100 text-green-800 text-2xl border-green-300">
                  ~$220 billion by 2032
                </Badge>
              </div>
              <p className="text-xl">Growing at a CAGR of 33.6%</p>
            </div>

            <h3 className={`text-3xl font-bold text-center mb-8 ${merriweather.className}`}>HITA Technology</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className={`text-xl font-bold mb-2 text-green-700 ${merriweather.className}`}>Immersed Servers</h4>
                <p>Full immersion maximizes heat transfer to water-based heating systems while minimizing server hot spots and extending GPU life.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className={`text-xl font-bold mb-2 text-green-700 ${merriweather.className}`}>Machine Learning Optimization</h4>
                <p>Proprietary software manages facility water, immersion fluid, and server temperatures for peak performance.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className={`text-xl font-bold mb-2 text-green-700 ${merriweather.className}`}>Remote Control</h4>
                <p>Our remotely controllable heaters provide unparalleled management of the heating system.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className={`text-xl font-bold mb-2 text-green-700 ${merriweather.className}`}>Overclocking Capability</h4>
                <p>Overclocking allows for increased compute capacity and additional revenue opportunities.</p>
              </div>
            </div>
          </div>
         
       </AnimatedSection>

        {/* Section 4 */}
    
        <AnimatedStaggerSection className="py-20 bg-gray-100">
        
          <div className="container mx-auto px-4">
            <h2 className={`text-4xl font-bold mb-12 text-center ${merriweather.className}`}>
              Customer Interest
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Fish className="w-8 h-8 text-green-600 mb-4" />
                <h4 className={`text-xl font-bold mb-2 text-green-700 ${merriweather.className}`}>Aquaculture</h4>
                <p>A facility in Maine, currently relying on dirty fuel, is interested in HITA for consistent 78°F water temps.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Building2 className="w-8 h-8 text-green-600 mb-4" />
                <h4 className={`text-xl font-bold mb-2 text-green-700 ${merriweather.className}`}>Commercial Real Estate</h4>
                <p>A commercial real estate owner is eager to install HITA&apos;s P2a, with the potential to save over $100,000 annually in fuel costs.</p>
              </div>
            </div>
          </div>
          
       </AnimatedStaggerSection>
       
      </div>
    </div>
  );
}
