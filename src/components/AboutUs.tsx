import { PhoneCall } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const AboutUs = () => {
  return (
    <div id='about-us' className="min-h-screen relative max-md:mt-2 ">
      {/* About Section */}
      <section className="lg:py-24 max-md:text-start  ">
        <div className="max-w-7xl mx-auto max-md:px-2 max-md:w-full px-4">
          <div className="grid lg:grid-cols-2 gap-12  items-center">
            {/* Left - Video/Image */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-4 max-md:p-2 shadow-lg">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3h7rztfldswowj7o9zbq.webp"
                    alt="Professional sewing machine with fabric patterns"
                    className="w-full h-80 lg:h-[641.323px]  object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className='order-1 lg:order-2 max-sm:mx-2 '>
              <p className="text-orange-500 text-sm max-md:text-start max-md:mt-14 font-semibold tracking-wider uppercase mb-6">
                ABOUT US
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Crafting Quality, Stitch by Stitch
              </h2>
              <p className="text-[#333333] text-lg mb-8 leading-relaxed">
                Apparelix is a forward-thinking name in the textile and garment industry, dedicated to 
                precision, quality, and timeless style. With a deep-rooted commitment to innovation and 
                sustainability, we strive to bring you apparel that feels as good as it looks.
              </p>

              {/* Stats */}
              <div className="bg-white rounded-2xl border border-[#d1cbc6] p-8 mb-8 shadow-sm">
                <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 text-center">
                  <div>
                    <p className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">1,500+</p>
                    <p className="text-[#333333] text-sm font-medium">Monthly Production</p>
                  </div>
                  <div>
                    <p className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">30+</p>
                    <p className="text-[#333333] text-sm font-medium">Years of Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">98%</p>
                    <p className="text-[#333333] text-sm font-medium">Satisfaction Rate</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center max-md:items-center gap-6">
                <Button className="bg-[#e75415] hover:bg-[#282421] w-[150px] max-md:w-full h-[55.322px] text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Learn More
                </Button>
                <div className="flex items-center max-md:text-center max-md:items-center max-md:justify-center space-x-4">
                  <div className="w-14 h-14 border-2 bg-[#e75415] rounded-full flex items-center justify-center  hover:bg-[#282421]  hover:text-white transition-all duration-300 cursor-pointer">
                    <PhoneCall className="w-7 h-7  text-white hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#333333] font-medium">Call Center 24/7</div>
                    <div className="font-bold text-gray-900 text-lg">+1 (212)-578-5758</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default AboutUs