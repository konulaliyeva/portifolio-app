import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const resume = () => {
  return (
    <>
      <Head>
        <title>Konul | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <Link href="/">
          <p className="underline cursor-pointer">Back</p>
        </Link>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Konul Aliyeva</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/konul-aliyeva-3418aa190"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/konulaliyeva"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-medium  tracking-wider"></div>
        <p>
          Analytical, innovative, and motivated entry-level Front-End
          Development professional who have worked on multiple projects in Agile
          environment. Eager to be challenged in order to grow and further
          improve the programming skills through job opportunities.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            {" "}
            Digital Skills
          </h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Redux Toolkit
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>Material UI
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RESTAPI
          </p>
          <p className="py-2">
            <span className="font-bold">Tools</span>
            <span className="px-2">|</span>JIRA
            <span className="px-2">|</span>Trello
            <span className="px-2">|</span>Visual Studio
            <span className="px-2">|</span>Figma
            <span className="px-2">|</span>Postman
          </p>
          <p className="py-2">
            <span className="font-bold">Version Control Systems</span>
            <span className="px-2">|</span>Git
            <span className="px-2">|</span>Github
            <span className="px-2">|</span>Git Lab
            <span className="px-2">|</span>Git Bash
          </p>
        </div>
        <h5 className="text-center underline text-[18px] py-2">
          {" "}
          Language Skills
        </h5>
        <p className="py-2 flex items-center">
          <span className="px-2">
            <FaCheckCircle />
          </span>
          Azerbaijani (native)
        </p>
        <p className="py-2 flex items-center">
          <span className="px-2">
            <FaCheckCircle />
          </span>{" "}
          English (professional working profeciency)
        </p>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Scrum Master – ATL Tech</span>
            <span className="px-2">|</span>Baku
          </p>
          <p className="py-1 italic">(08/16/2021 - 06/07/2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Facilitating Scrum events</li>
            <li>
              Making sure everyone on the team understands the project’s goals
              and scope
            </li>
            <li>Coaching the development team in self-organization</li>
            <li>Helping to remove obstacles to the developers’ progress</li>
            <li>Helping to remove obstacles to the developers’ progress</li>
            <li>
              Encouraging the organization to adopt the Scrum methodology in
              their workflow
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Application Consultant (internship) – Caspian Innovation Center
              (SOCAR& IBM)
            </span>
            <span className="px-2">|</span>Baku
          </p>
          <p className="py-1 italic">(03/01/2021 - 06/01/2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Building and modifying OpenText Content Server workflows, forms,
              and reports according to specifications and expanding upon
              existing applications to meet ongoing needs{" "}
            </li>
            <li>Assisting with code build and development process </li>
            <li>
              Creating change requests and apply approved change requests to
              system functionality and configuration
            </li>
          </ul>
        </div>
        <h5 className="text-center underline text-[18px] py-4">
          Academic Background
        </h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Front-End Development - ATL Academy
            </span>
            <span className="px-2">|</span>Baku
          </p>
          <p className="py-1 italic">(03/01/2022 – 08/20/2022 )</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed"></ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Computer Engineering – ADA University
            </span>
            <span className="px-2">|</span>Baku
          </p>
          <p className="py-1 italic">(09/01/2016 – 05/31/2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed"></ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Personal Projects
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Expense List App</span>
          </p>
          <p className="py-1 italic">
            <a
              href="https://github.com/konulaliyeva/expense-list-app"
              style={{ color: "#0000ff", textDecoration: "underline" }}
            >
              source,{" "}
            </a>
            <a
              href="https://expense-list-program-reactjs.vercel.app/"
              style={{ color: "#0000ff", textDecoration: "underline" }}
            >
              demo
            </a>
          </p>
          <p className="py-1 italic">
            <span style={{ fontWeight: "500" }}>Description: </span>
            Expense List App was created with React, and targeted for using in
            all kinds of electronic gadgets. To make it responsive only CSS
            codes were applied. The app basically creates an opportunity for
            users to list all their expenses together with marked date and
            costs. Withe the help of chart, they can easily oversee the
            approximate amount of costs spent for a month. Additionally, app
            offers users to sort out costs according to years
          </p>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Currency Convertor</span>
          </p>
          <p className="py-1 italic">
            <a
              href="https://github.com/konulaliyeva/currency-exchange-app"
              style={{ color: "#0000ff", textDecoration: "underline" }}
            >
              source,{" "}
            </a>
            <a
              href="https://currency-exchange-app-react.vercel.app/"
              style={{ color: "#0000ff", textDecoration: "underline" }}
            >
              demo
            </a>
          </p>
          <p className="py-1 italic">
            <span style={{ fontWeight: "500" }}>Description: </span>
            Currency convertor application helps us exchanging currencies of
            desired amount. It was programmed based on React JS and Material UI
            design. This app follows the clean code principles, as well as clear
            clear, reusable components structure
          </p>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Rest Countries Website</span>
          </p>
          <p className="py-1 italic">
            <a
              href="https://github.com/konulaliyeva/rest-countries-app"
              style={{ color: "#0000ff", textDecoration: "underline" }}
            >
              source,{" "}
            </a>
            <a
              href="https://rest-countries-purejs.vercel.app/"
              style={{ color: "#0000ff", textDecoration: "underline" }}
            >
              demo
            </a>
          </p>
          <p className="py-1 italic">
            <span style={{ fontWeight: "500" }}>Description: </span>
            Rest Countries is a desktop application created in JavaScript and
            with the help of Rest API. The app has dark/light mode, searching
            for a country and filtering by regions functionalities. Furthermore,
            since each country box is clickable, users are able to get specific
            detailed information such as border, capital, language and etc.
          </p>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Mini E-commerce Website</span>
          </p>
          <p className="py-1 italic">
            <a
              href="https://github.com/konulaliyeva/shopping"
              style={{ color: "#0000ff", textDecoration: "underline" }}
            >
              source,{" "}
            </a>
            <a
              href="https://shopping-app-with-react.vercel.app/"
              style={{ color: "#0000ff", textDecoration: "underline" }}
            >
              demo
            </a>
          </p>
          <p className="py-1 italic">
            <span style={{ fontWeight: "500" }}>Description: </span>
            Mini E-commerce App is desktop/mobile/tablet application and created
            with React. CSS media queries and some Bootstrap components were
            applied for responsiveness. For creating this application, I applied
            dummy json API to fetch all products (axios) and created my own
            pagination component. The users are able to select multiple products
            which appear in the basket box. There is an opportunity increase the
            number of desired products, remove product item from the basket or
            search for new specific products.
          </p>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">To Do List App</span>
          </p>
          <p className="py-1 italic">
            <a
              href="https://github.com/konulaliyeva/to-do-list-app"
              style={{ color: "#0000ff", textDecoration: "underline" }}
            >
              source,{" "}
            </a>
            <a
              href="https://to-do-list-app-vanilla-js.netlify.app/"
              style={{ color: "#0000ff", textDecoration: "underline" }}
            >
              demo
            </a>
          </p>
          <p className="py-1 italic">
            <span style={{ fontWeight: "500" }}>Description: </span>
            To Do App was created based on JavaScript, HTML, and CSS. It is a kind of desktop app that generally used to maintain our day-to-day tasks or list everything that we have to do. We can add more tasks at any time and delete from the list. Within this app, there is completed and active categories which enable us to add or relocate list items corresponding to its status. Left items category shows us how many items waiting for completed. Also, when the user clicks clear completed section, all completed items are removed from the list. The applications implements dark/light mode functionality which makes it easier for anyone to use a device in a low-light environment

          </p>
        </div>
        
      </div>
    </>
  );
};

export default resume;
