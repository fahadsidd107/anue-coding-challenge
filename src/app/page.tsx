"use client";

import React from "react";
import dynamic from "next/dynamic";

import Theme from "../Theme/Theme";
import TaskListContainer from "../ToDoList/TaskListContainer";
import ToastContainerWrapper from "../components/Toast/ToastContainerWrapper";

const Navbar = dynamic(
  () => import('../components/Navbar/Navbar'),
  { ssr: false }
);

const Page: React.FC = () => {
  return (
    <Theme>
      <Navbar />
      <div className="flex w-full justify-center">
        <TaskListContainer />
        <ToastContainerWrapper />
      </div>
    </Theme>
  );
};

export default Page;