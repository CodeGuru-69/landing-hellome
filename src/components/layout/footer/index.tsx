import React from "react";
import footerPatterImg from "../../../assets/images/footer-pattern.png";
const Footer: React.FC = () => {
  return (
    <div
      className="w-full bg-repeat bg-custom-gray-200 text-white lg:pt-[67px] px-6 xs: pt-4 pb-1"
      style={{ backgroundImage: `url(${footerPatterImg})` }}
    >
      <div className="flex justify-between mb-[74px] max-w-primary mx-auto">
        <div>
          <p className="font-clash-semibold text-badge  mb-8">Who we are</p>
          <div className="flex flex-col gap-6 font-clash-medium text-button">
            <p className="cursor-pointer" onClick={() => {}}>
              About us
            </p>
            <p className="cursor-pointer" onClick={() => {}}>
              Code of Couduct
            </p>
            <p className="cursor-pointer" onClick={() => {}}>
              Partner with us
            </p>
          </div>
        </div>
        <div>
          <p className="font-clash-semibold text-badge  mb-8">Legal</p>
          <div className="flex flex-col gap-6 font-clash-medium text-button">
            <p className="cursor-pointer" onClick={() => {}}>
              Terms & conditions
            </p>
            <p className="cursor-pointer" onClick={() => {}}>
              Privacy Policy
            </p>
          </div>
        </div>
        <div className="max-w-[256px]">
          <p className="font-clash-semibold text-badge  mb-8">Contact us</p>
          <div className="flex flex-col gap-6 font-clash-medium text-button">
            <p>
              <p className="font-clash-regular">United Kingdom Office:</p>
              2nd Floor, 30 Churchill Pl, London E14 5EU United Kingdom
            </p>
            <p>
              <p className="font-clash-regular">Canada Office:</p>
              44322 YALE RD UNIT 3B #203 CHILLIWACK, BC, CANADA V2R4H1
            </p>
          </div>
        </div>
      </div>
      <p className="font-clash-medium text-button mx-auto mb-1 text-center">
        Copyright © 2024 HelloMe Money. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
