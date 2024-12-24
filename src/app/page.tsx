"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Theme from "../Theme/Theme";
import TaskListContainer from "../ToDoList/TaskListContainer";

const Page: React.FC = () => {
  return (
    <Theme>
      <Navbar />
      <div className="flex w-full justify-center">
        <TaskListContainer />
      </div>
    </Theme>
  );
};

export default Page;