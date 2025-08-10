import React from "react";
import { Check } from "lucide-react";

interface WorkStep {
  title: string;
  description: string;
}

const workSteps: WorkStep[] = [
  {
    title: "Design with Purpose",
    description:
      "We collaborate with artisan communities to co-create thoughtful designs that blend function with cultural heritage.",
  },
  {
    title: "Material Reclamation",
    description:
      "We upcycle premium textile waste into new raw materials—minimizing landfill waste and promoting circularity.",
  },
  {
    title: "Handcrafted Production",
    description:
      "Over 1,000 trained women artisans transform discarded textiles into beautiful, market-ready products.",
  },
  {
    title: "Sustainable Delivery",
    description:
      "Each order is quality-checked, plastic-free packed, and shipped globally—supporting both planet and people.",
  },
];

export default function OurStory() {
  return (
    <div className="bg-white py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="mb-12">
            <p className="text-[#e75415] text-sm font-medium tracking-wider uppercase mb-6">
              OUR STORY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] leading-tight mb-8">
              Empowering Hands. Restoring Materials. Inspiring Change.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              We are a women-led movement transforming discarded textiles into
              handcrafted utility and gifting products. Every creation supports
              artisan livelihoods, reduces landfill waste, and helps brands give
              with purpose.
            </p>
          </div>

          {/* Solutions Card */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-8">
            <h3 className="text-2xl font-bold text-[#333333] mb-4">
              Solutions for a Dynamic Industry
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              From modernizing production lines to developing eco-friendly
              materials and enhancing supply chain efficiency, our initiatives
              are designed to elevate industry standards and meet the evolving
              demands of global markets.
            </p>
          </div>

          {/* Work Steps */}
          <div className="space-y-6">
            {workSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-[#e75415] rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#e75415]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
             <p className="text-[#e75415] text-sm font-medium tracking-wider uppercase mb-6">
  OUR STORY
</p>
<h2 className="text-4xl md:text-5xl font-bold text-[#333333] leading-tight mb-8">
  Empowering Hands. Restoring Materials. Inspiring Change.
</h2>
<p className="text-gray-600 text-base leading-relaxed mb-8">
  We are a women-led movement transforming discarded textiles into handcrafted utility and gifting products. Every creation supports artisan livelihoods, reduces landfill waste, and helps brands give with purpose.
</p>


              {/* Solutions Card */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-[#d1cbc6]">
               <h3 className="text-2xl font-bold text-[#333333] mb-4">
  Circular Solutions with Human Impact
</h3>
<p className="text-gray-600 text-base leading-relaxed">
  From repurposing textile waste to building capacity for grassroots women artisans, our approach combines circular design with deep social responsibility. We create practical, premium products that tell a story of change.
</p>

              </div>
            </div>

            {/* Right Column - Work Steps */}
            <div className="space-y-8">
              {workSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-white border-[1.5px] border-[#e75415] rounded-lg flex items-center justify-center mt-2.5">
                    <Check className="w-7 h-7 text-[#e75415]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#333333] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {step.description}
                    </p>
                    <hr className="h-px my-3 bg-gray-300 border-[1.2px] max-sm:hidden dark:bg-[#303030]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
