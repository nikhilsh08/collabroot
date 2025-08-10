import Image from 'next/image';
import React from 'react';

interface ProjectCard {
  image: string;
  title: string;
  description: string;
}

const projects: ProjectCard[] = [
  {
    image: "https://plus.unsplash.com/premium_photo-1736818206680-64bf4ded0927?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Eco Packaging Solutions",
    description: "Tote bags, potli bags, and fabric baskets handcrafted from textile waste — reusable, elegant, and brandable."
  },
  {
    image: "https://images.unsplash.com/photo-1544884576-92fe6c8b154d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Gifting & Utility Products",
    description: "From napkins to toys and coasters, these hand-finished essentials are perfect for conscious gifting and daily use."
  },
  {
    image: "https://media.gettyimages.com/id/157729355/photo/food-and-drink-made-in-cornwall-devon.jpg?s=612x612&w=0&k=20&c=_BSepXvTLAfMwFgGZ1LLkvBBvUKWaI6W--WXY9Fj7X0=",
    title: "Corporate Hampers",
    description: "Curated diaries, folders, and embroidered calendars — customized for events, clients, and festive campaigns."
  },
  {
    image: "https://images.unsplash.com/photo-1541377182189-74e4a4ea12e5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Pouches & Accessories",
    description: "Stylish pouches, wallets, and spectacle covers with lifestyle photography — all handmade by rural women artisans."
  },
  {
    image: "https://media.gettyimages.com/id/1392016982/photo/mixed-group-of-business-people-sitting-around-a-table-and-talking.jpg?s=612x612&w=0&k=20&c=d7mWQhdzKrowHYTWXXcCrNn02uyfLYQYB78M75G8lKg=",
    title: "Event Solutions",
    description: "Eco lanyards, handcrafted signage, and banner alternatives that replace plastic at conferences and summits."
  },
  {
    image: "https://media.gettyimages.com/id/1446980106/photo/woman-preparing-a-package-for-shipment.jpg?s=612x612&w=0&k=20&c=2HBOKZSU-0V8myrRr5FE3Jd6AFOU1TtVi22q9dXcmEo=",
    title: "Customized Exports",
    description: "Handmade, bulk-ready gifts for international markets — shipped globally with low MOQs and fast lead times."
  }
];


export default function ProductSection() {
  return (
    <div id='products' className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="flex-1 mb-8 lg:mb-0">
            <p className="text-[#e75415] text-sm font-medium tracking-wider uppercase mb-6">
              OUR Products
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-2xl">
              Handcrafted Utility Rooted in Empowerment
            </h2>
          </div>
          
          <div className="flex-shrink-0 lg:ml-8">
            <div className="max-w-md mb-8">
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Discover how handcrafted design and upcycled textiles are redefining fashion and lifestyle accessories. Each creation reflects sustainable craftsmanship, ethical production, and the power of women transforming waste into purposeful beauty.
              </p>
            </div>
            <button className="bg-[#e75415] text-white px-8 py-3 rounded-full font-medium hover:bg-[#282421] transition-colors duration-300">
              More Products
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#d1cbc6] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  width={640}
                  height={480}
                />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <button className="text-[#e75415] text-sm font-medium hover:text-[#282421] transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}