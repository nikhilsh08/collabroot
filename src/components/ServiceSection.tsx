import React from "react";
import {
  Scissors,
  Zap,
  Target,
  Ruler,
  Palette,
  Printer,
  ArrowDown,
} from "lucide-react";
import Image from "next/image";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Fabric Sourcing",
    description:
      "We help you find high-quality fabrics that meet both aesthetic and functional needs. Our network of trusted suppliers ensures sustainable and cost-effective.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Custom Garment Manufacturing",
    description:
      "From design to delivery, we offer end-to-end garment production. Whether you need small batches or large-scale runs, we tailor production to your exact specifications.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Quality Control Inspection",
    description:
      "We implement rigorous quality checks throughout the production cycle. This reduces defects, ensures compliance with standards, and builds customer trust.",
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "Product Development",
    description:
      "We turn your ideas into ready-for-market products. Our development process includes prototyping, pattern making, and material testing.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Textile Dyeing",
    description:
      "Our dyeing process ensures vibrant, consistent colors using eco-friendly techniques. We provide reactive, disperse, and vat dyeing options.",
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Embroidery & Printing",
    description:
      "Enhance your garments with custom embroidery or high-quality screen and digital printing. These services allow for personalized branding.",
  },
];

export default function ServicesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center relative mb-16">
        <div className="flex items-center justify-center mb-8">
          <p className="text-[#e75415] text-sm font-medium tracking-[0.8px] uppercase">
            OUR SERVICES
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl  font-bold text-[#333333] tracking-[0.5px] leading-tight">
          Solutions Tailored for Every Stitch
        </h2>
          <Image
            src="/assets/icons/arrow-1.png"
            width={120}
            height={120}
            alt="Arrow"
            className="absolute top-28 left-[63rem] mr-4 w-[100px] h-auto  -scale-x-100 hidden lg:block rotate-[-100deg] max-lg:hidden"
          />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-lg:mt-32 lg:mt-36 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg border border-[#d1cbc6] hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="text-[#e75415] mb-6">{service.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[#333333] mb-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Read More Link */}
            <button className="text-[#e75415] text-sm font-medium hover:text-orange-600 transition-colors duration-200">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
