import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Logo,
  UpArrow,
  DownArrow,
  Facebook,
  Twitter,
  Linkedin,
  Basket,
} from "../SVG";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const showPages = () => {
    setShow(!show);
  };

  const redirectTo = (param) => {
    window.location.href = `https://www.${param}.com`;
  };

  return (
    <header className=" bg-primary flex items-center h-24">
      <div className="container xl:max-w-screen-xl xl:mx-auto lg:max-x-screen-lg lg:pl-0 lg:pr-0 lg:mx-auto md:max-x-screen-md md:mx-auto md:pl-6 sm:max-x-screen-sm sm:mx-auto">
        <div className="flex xl:justify-center md:justify-between sm:justify-between items-center">
          <div className="xl:w-5/12 lg:w-4/12 md:w-5/12 flex xl:items-center lg:items-start">
            <Link to="/" className="flex items-center ">
              <Logo />
              <p className="text-white text-large font-sans font-bold ml-2 mr-8">
                Pages
              </p>
            </Link>
            <Facebook
              alt="Facebook"
              className="mr-2.5 xl:block lg:block md:block sm:hidden xs:hidden cursor-pointer transform hover:scale-105 transition duration-300 hover:drop-shadow-lg"
              onClick={() => {
                redirectTo("facebook");
              }}
            />
            <Twitter
              alt="Twitter"
              className="mr-2.5  xl:block lg:block md:block sm:hidden xs:hidden cursor-pointer transform hover:scale-105 transition duration-300 hover:drop-shadow-lg"
              onClick={() => {
                redirectTo("twitter");
              }}
            />
            <Linkedin
              alt="LinkedIn"
              className="cursor-pointer  xl:block lg:block md:block sm:hidden xs:hidden transform hover:scale-105 transition duration-300 hover:drop-shadow-lg"
              onClick={() => {
                redirectTo("linkedin");
              }}
            />
          </div>
          <div className="xl:w-7/12 xl:justify-end lg:justify-end lg:w-8/12 md:w-5/12 md:justify-end sm:justify-end flex xl:items-center lg:items-end    ">
            <ul className="flex items-center  ">
              <li className="font-sans font-medium text-white text-small xl:block lg:block xl:mr-12 lg:mr-8 md:hidden sm:hidden">
                <Link
                  to="/"
                  className=" hover:text-secondary transform transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li
                className="group flex items-center xl:block lg:block xl:mr-12 lg:mr-8 md:hidden sm:hidden cursor-pointer hover:text-secondary transform"
                onClick={showPages}
              >
                <p className="font-sans font-medium text-white text-small group-hover:text-secondary transition duration-300">
                  Pages
                </p>
                {show === true ? (
                  <UpArrow className="pl-2 group-hover:fill-secondary transition duration-300" />
                ) : (
                  <DownArrow className="pl-2 group-hover:fill-secondary transition duration-300" />
                )}
                {show === true ? (
                  <ul className="block absolute top-10 bg-neutral w-28 transform transition duration-300">
                    <li
                      className="font-sans font-semibold text-primary text-small p-1 border-solid border-b-2 border-primary hover:text-secondary transform transition duration-300"
                      onClick={() => {
                        navigate("/blog");
                      }}
                    >
                      Blog
                    </li>
                    <li className="font-sans font-semibold text-primary text-small p-1 hover:text-secondary transform transition duration-300">
                      Store
                    </li>
                  </ul>
                ) : (
                  <ul className="hidden absolute top-10 bg-neutral w-28 transform transition duration-300">
                    <li className="font-sans font-semibold text-primary text-small p-2 border-solid border-b-2 border-primary transform transition duration-300">
                      Blog
                    </li>
                    <li className="font-sans font-semibold text-primary text-small p-2 transform transition duration-300">
                      Store
                    </li>
                  </ul>
                )}
              </li>

              <li className="font-sans font-medium text-white text-small xl:block lg:block xl:mr-12 lg:mr-8 md:hidden sm:hidden hover:text-secondary cursor-pointer transform transition duration-300">
                About
              </li>
              <li className="font-sans font-medium text-white text-small xl:block lg:block xl:mr-12 lg:mr-8 md:hidden sm:hidden hover:text-secondary cursor-pointer transform transition duration-300">
                Store
              </li>
              <li className="font-sans font-medium text-white text-small xl:block lg:block xl:mr-6 lg:mr-8 md:hidden sm:hidden hover:text-secondary cursor-pointer transform transition duration-300">
                Contact
              </li>
              <li className="lg:mr-2">
                <Basket
                  onClick=""
                  className="cursor-pointer transform hover:scale-105 transition duration-300 hover:drop-shadow-lg"
                />
              </li>
              <li>
                <Button
                  className="h-50 w-180 bg-secondary text-primary font-serif font-bold text-base ml-6 hover:bg-white hover:text-primary "
                  text="Order Today"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
