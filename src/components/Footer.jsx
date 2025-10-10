import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#06114c] to-[#02051a] text-white py-6 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-sm md:text-base text-gray-200 space-x-2 mb-3">
          <a href="#" className="hover:text-yellow-400 transition">
            Contact Us
          </a>
          |
          <a href="#" className="hover:text-yellow-400 transition">
            Privacy Policy
          </a>
          |
          <a href="#" className="hover:text-yellow-400 transition">
            Refund & Cancellation Policy
          </a>
          |
          <a href="#" className="hover:text-yellow-400 transition">
            Terms & Conditions
          </a>
          |
          <a href="#" className="hover:text-yellow-400 transition">
            Shipping Policy
          </a>
        </div>

        {/* ✅ Copyright */}
        <div className="text-gray-100 text-xs md:text-sm mb-4">
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">Nilkanth Rathod</span>{" "}
          | All Rights Reserved
        </div>

        {/* ✅ Disclaimer */}
        <p className="text-[12px] md:text-sm text-gray-500 leading-relaxed max-w-3xl mx-auto">
          This site is not a part of the Facebook website / Google Ads /
          Facebook Inc / Google Inc. Additionally, this site is NOT endorsed by
          Facebook / Google in any way. FACEBOOK is a trademark of FACEBOOK,
          Inc. Google Ads is a trademark of Google Inc.
        </p>
      </div>
    </footer>
  );
}
