import React from "react";
import PrimaryButton from "src/components/primaryButton";
import bitcoinImg from "../../assets/images/Bitcoin.png";
import ethereumImg from "../../assets/images/Ethereum Coin.png";
import cardanoImg from "../../assets/images/Cardano Coin.png";
import exchangeImg from "../../assets/images/CryptoExchange.png";
import decoratinLine from "../../assets/images/lines.svg";
import Description from "src/components/descriptions";
import securityIcon from "../../assets/icons/security.svg";
import exchageIcon from "../../assets/icons/exchage.svg";
import MediaCard from "src/components/mediaCard";
import image1 from "../../assets/images/view-hand-holding-bitcoin 1.jpg";
import image2 from "../../assets/images/cardano-blockchain 1.jpg";

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white h-full">
      <div className=" flex flex-col items-center justify-center  mx-auto max-w-primary">
        <PrimaryButton className="font-clash-variable font-medium bg-white text-black mt-[60px] cursor-pointer">
          Crypto Exchange
        </PrimaryButton>
        <div className="relative w-full">
          <div className="z-10 relative max-w-[1064px] mx-auto text-center flex flex-col items-center justify-center text-[40px] font-clash-variable font-medium mt-[60px] mb-5 leading-title">
            <h1>
              Explore the world of cryptocurrency with HelloMe Money's crypto
              exchange.
            </h1>
            <h1>
              Buy, sell, and trade various cryptocurrencies securely, all within
              the{" "}
              <span className="font-semibold text-[3.5rem]">HelloMe Money</span>{" "}
              platform.
            </h1>
            <img
              src={decoratinLine}
              alt="decoration-line"
              className="mb-11 -mt-6"
            />
            <PrimaryButton className="font-poppins font-medium text-[1.25rem] bg-white text-black flex items-center mx-auto mb-[104px]">
              <span>Get Started</span>
              <img src={exchangeImg} alt="exchange-img" />
            </PrimaryButton>
          </div>
          <img
            src={bitcoinImg}
            className="absolute xl:-left-10 xl:z-20 sm:left-0 z-0 top-[25%] lg:w-auto h-auto w-52 left-4"
            alt="bitcoin-img"
          />
          <img
            src={ethereumImg}
            className="absolute right-0 lg:z-20 z-0 lg:bottom-0 lg:w-auto h-auto w-52 bottom-20"
            alt="ethereum-img"
          />
          <img
            src={cardanoImg}
            className="absolute -top-10 z-0 inset-0 mx-auto lg:w-auto h-auto w-52"
            alt="cardano-img"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-[21px] xs:grid-cols-1 w-full">
          <div className="w-full md:max-w-full max-w-[529px] text-justify">
            <Description icon={securityIcon} title="Secure Transactions">
              Explore the world of cryptocurrency with confidence on HelloMe
              Money's secure platform. Buy, sell, and trade various
              cryptocurrencies knowing that your transactions are protected by
              advanced security measures.
            </Description>
          </div>
          <div>
            <MediaCard url={image2} alt="view-hand-holding-bitcoin" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-[21px] grid-cols-1 mt-[97px] xs:items-end mb-10 lg:mb-[101px] w-full justify-end">
          <div>
            <MediaCard url={image1} alt="view-hand-holding-bitcoin" />
          </div>
          <div className="w-full md:max-w-full max-w-[529px] text-justify">
            <Description icon={exchageIcon} title="Convenient Trading">
              Trade cryptocurrencies seamlessly within the HelloMe Money
              platform. Our user-friendly interface and intuitive tools make
              buying, selling, and trading digital assets a hassle-free
              experience.
            </Description>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
