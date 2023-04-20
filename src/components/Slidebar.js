import React from "react";
import pieChart from "../image/dashboard_icon.svg";
import scheduleIcon from "../image/schedule_icon.svg";
import transIcon from "../image/transaction_icon.svg";
import userIcon from "../image/user_icon.svg";
import settingIcon from "../image/setting_icon.svg";

export const Slidebar = () => {
  return (
    <div className="w-[260px] h-[95vh] pb-9 rounded-3xl bg-black text-white  flex-col items-start justify-start pl-10 pr-4 fixed top-4 left-4  hidden lg:flex">
      <h1 className="font-[Montserrat] text-4xl my-12">Board.</h1>
      <ul className="list-none font-light font-[Montserrat] text-[18px] flex flex-col gap-5 mb-56">
        <li className="flex flex-row  cursor-pointer font-bold">
          <img className="mr-4" src={pieChart} alt="Pie Chart Icon" />
          <p>Dashboard</p>
        </li>
        <li className="flex flex-row cursor-pointer ">
          <img className="mr-4" src={transIcon} alt="Transaction Icon" />
          <p>Transactions</p>
        </li>
        <li className="flex flex-row cursor-pointer ">
          <img className="mr-4" src={scheduleIcon} alt="Schedule Icon" />
          <p>Schedules</p>
        </li>
        <li className="flex flex-row cursor-pointer ">
          <img className="mr-4" src={userIcon} alt="User icon" />
          <p>Users</p>
        </li>
        <li className="flex flex-row cursor-pointer ">
          <img className="mr-4" src={settingIcon} alt="Settings icon" />
          <p>Settings</p>
        </li>
      </ul>
      <div className="flex flex-col font-light gap-2  text-[14px]">
        <a href="#">Help</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
};