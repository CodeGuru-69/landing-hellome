import React, { useState, useEffect } from "react";
import logo from "../../../assets/icons/logo.svg";
import { Categories } from "src/constants/layout";
import CategoryButton from "src/components/categoryButton";
import PrimaryButton from "src/components/primaryButton";
import { ICategory } from "src/interfaces/layout";
interface Props {
  children: React.ReactElement;
}

const HideOnScroll: React.FC<Props> = ({ children }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setIsVisible(lastScrollTop > currentScrollTop || currentScrollTop === 0);
      setLastScrollTop(currentScrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className={`${
        isVisible
          ? "opacity-100"
          : "opacity-0 transition-opacity duration-300 ease-in-out"
      } fixed top-0 left-0 w-full z-50`}
    >
      {children}
    </div>
  );
};

const Header: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>(Categories);
  const onClick = (key: string) => {
    setCategories((prev) =>
      prev.map((category) => ({
        ...category,
        isSelected: category.key === key,
      }))
    );
  };
  return (
    <>
      <HideOnScroll>
        <header className="sticky top-0 z-40 lg:h-20 h-auto w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-black bg-white supports-backdrop-blur:bg-white/95 dark:bg-black text-white py-4 px-6">
          <div className="flex items-center max-w-primary mx-auto flex-wrap gap-4">
            <div className="bg-custom-blue-100 flex items-center rounded-8 pr-2">
              <img src={logo} alt="logo" />
              <p className="font-clash-variable font-medium text-[1.5rem] lg:block hidden">
                HelloMe Money
              </p>
            </div>
            <div className="lg:ml-[76px] flex items-center gap-8">
              {categories.map((category) => (
                <CategoryButton
                  {...category}
                  onClick={() => onClick(category.key)}
                />
              ))}
            </div>
            <div className="flex-grow" />
            <div className="flex items-center gap-4">
              <PrimaryButton className="h-full border border-white text-[0.875rem]">
                Log in
              </PrimaryButton>
              <PrimaryButton className="bg-custom-blue-100 h-full text-[0.875rem]">
                Sign Up
              </PrimaryButton>
            </div>
          </div>
        </header>
      </HideOnScroll>
    </>
  );
};

export default Header;
