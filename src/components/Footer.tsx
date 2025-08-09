"use client";
import React from 'react';
import { Phone, Mail, Twitter, Facebook, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="bg-[#2d3142] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Contact Information Column */}
          <div className="space-y-8 ">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 mt-1.5 h-12 border-2 border-gray-500 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-gray-300" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Phone</h3>
                <Link 
                  href="tel:+12125785758" 
                  className="text-orange-500 hover:text-orange-400 transition-colors duration-200"
                >
                  +1 (212)-578-5758
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 border-2 border-gray-500 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-gray-300" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                <Link 
                  href="mailto: nikhil@collabroot.com" 
                  className="text-orange-500 hover:text-orange-400 transition-colors duration-200"
                >
                   nikhil@collabroot.com
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <Link 
                href="#" 
                className="w-10 h-10 border border-gray-500 rounded-lg flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 border border-gray-500 rounded-lg flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 border border-gray-500 rounded-lg flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 border border-gray-500 rounded-lg flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Menu Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Menu</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Fabric Sourcing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Custom Garment Manufacturing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Quality Control & Inspection
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Product Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Textile Dyeing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Embroidery & Printing
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Join Our Newsletter</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Subscribe to get the latest news, updates, and offers straight to your inbox.
            </p>
            
            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 bg-[#3a3f54] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors duration-200"
              />
              <Button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 whitespace-nowrap">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm opacity-80"></div>
              </div>
              <span className="text-xl font-bold text-white">Collabroot</span>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>Copyright 2025 © All Rights Reserved. Collabroot.</p>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}