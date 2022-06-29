// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          I’m a full stack web developer specializing in WordPress. Before I started freelancing, I worked as a full-time developer for a marketing and web design company with hundreds of clients. This gave me experience building and maintaining a wide variety of websites, ranging from personal blogs to online stores to large corporate sites.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                <h1 className="title-font text-lg font-medium text-white mb-3">
                    {skill.titlename}
                  </h1>
                  <p className="leading-relaxed">{skill.descriptiontext}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}