import React from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import dashbod from '../../public/assets/dashbod.jpg';
import { AnimateOnScroll, VerticalOnScroll } from './AnimateOnScroll';

// import { Link } from "react-router-dom";
// import peace from "../assets/peace.jpg";

const AccordionTrigger = React.forwardRef((prop, forwardedRef) => {
  const { children, className, ...props } = prop;
  return (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames('AccordionTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  );
});

const AccordionContent = React.forwardRef((prop, forwardedRef) => {
  const { children, className, ...props } = prop;
  return (
    <Accordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  );
});

export default function HomePage() {
  // console.log("in the homepage");
  const navigate = useNavigate();
  return (
    <div className="homepage  relative  gap-4">
      {/* about to place the spendwise and login, signup  flex flex-row justify-start gap-2 px-5  */}
      <div className="flex flex-row  gap-2 fixed top-0 left-0 z-50   fix-element lg:top-0 lg:left-1/2  lg:-translate-x-1/2 z-3 backdrop-blur-md h-50 w-full lg:w-full px-20 items-center justify-between transition-[background,color] duration-500 ease-expo-out  text-white">
        <p className="text-2xl ">FinTrack</p>
        <div className="flex flex-row justify-end gap-2 items-center py-3">
          <div className=" text-white px-3 py-1 rounded-3xl hover:scale-105   hover:bg-black cursor-pointer">
            <button onClick={() => navigate('/login')} type="button">
              Login
            </button>
          </div>
          <div className="hover:scale-105 text-white px-3 py-1  rounded-3xl hover:bg-black cursor-pointer">
            <button onClick={() => navigate('/signup')} type="button">
              {' '}
              Signup
            </button>
          </div>
        </div>
      </div>
      <div className="text-6xl mt-7 leading-10 border-2 flex flex-col justify-center items-center flex-wrap">
        {/* text-6xl was helpful in the animation do not touch */}
        <div className=" flex flex-row gap-2 justify-center items-center p-5">
          <div className="my-20 basis-1/2 p-5">
            <AnimateOnScroll>
              <p className=" introText text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight lg:font-bold ">
                Effortless Expense Tracking for Financial Success
              </p>
              <br />
              <p className="text-2xl  ">
                Fintrack allows you to easily track finance and make budgets
              </p>
              <br />
            </AnimateOnScroll>
            <div className="flex flex-row ">
              <button type="button" onClick={() => navigate('/signup')}>
                <div className="gs-button ml-5 mt-5 text-sm flex flex-row bg-black hover:bg-white hover:text-black text-white rounded-3xl pr-5 cursor-pointer  hover:border-2 border-black hover:fill-black fill-white">
                  <span className="rounded-2xl p-4 pt-4 text-lg">Get Started </span>
                  <span className=" pt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 -960 960 960"
                      width="24"
                      className="inline"
                    >
                      <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </div>
          {/* This will hold the image */}
          <div className="basis-1/2 rounded-2xl">
            <img src={dashbod} className="rounded-lg" alt="dashboard" />
          </div>
        </div>
      </div>

      <div className="h-screen border-b-2">
        <div className="flex flex-col items-center justify-center h-1/4">
          <p className="text-center px-10 text-5xl mt-10">
            The best platform to manage all financial transactions.
          </p>
          <p className="text-center px-10 text-3xl pt-5">
            Join Millions as you explore and use our platform.
          </p>
        </div>
        <VerticalOnScroll>
          <div className="flex flex-row justify-center items-center gap-4 px-10 h-full">
            {/* handling the track your balance part */}

            <div className="flex flex-row gap-5 p-4 py-20 border-2 rounded-2xl">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                </svg>
              </div>
              <div>
                <h6 className="text-2xl">Manage Expense</h6>
                <p className="text-lg p-2">
                  Simplify your expense management with our user-friendly tools. Track, categorize,
                  and stay in control of your spending effortlessly.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 p-4 py-20 border-2 rounded-2xl">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-160-60q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Z" />
                </svg>
              </div>
              <div>
                <h6 className="text-2xl">Track Balance</h6>
                <p className="text-lg p-2">
                  Effortlessly manage your financial balance and gain better control over your
                  spending with our intuitive tracking tools.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 p-4 py-20 border-2 rounded-2xl ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z" />
                </svg>
              </div>
              <div>
                <h6 className="text-2xl">Make Budget</h6>
                <p className="text-lg p-2">
                  Create and maintain budgets with ease. Our platform simplifies the budgeting
                  process, helping you stay on top of your financial goals.
                </p>
              </div>
            </div>
          </div>
        </VerticalOnScroll>
      </div>
      <div className="h-screen pt-20">
        <div className="flex flex-col justify-center items-center p-7 mb-7">
          <p className="mb-5 text-4xl">FAQS</p>
          <Accordion.Root
            className="AccordionRoot w-1/2 leading-4 border-blue border-2 text-lg"
            type="single"
            defaultValue="item-1"
            collapsible
          >
            <Accordion.Item className="AccordionItem " value="item-1">
              <AccordionTrigger className="p-4 text-blue">
                What is FinnTrackr about?
              </AccordionTrigger>
              <AccordionContent className="p-4">
                FinnTrackr allows you to easily track your finance and make budget
              </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem" value="item-2">
              <AccordionTrigger className="p-4">Do you access my data?</AccordionTrigger>
              <AccordionContent className="p-4">No, we do not access your data.</AccordionContent>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>
      {/* <div>
        <p className="text-center">
          Made with ❤️ by
          <span>
            <a className="text-blue-700"> @adel_wale </a>
          </span>
          and{" "}
          <span>
            <a className="text-blue-700">@akinbyte </a>
          </span>
        </p>
        <p className="text-center">©2023</p>
      </div> */}
    </div>
  );
}
