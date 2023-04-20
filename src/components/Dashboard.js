import React, { useState } from "react";
import { Slidebar } from "../components/Slidebar";
import searchIcon from "../image/Search icon.svg";
import alert from "../image/Vector.svg";
import user from "../image/image 1.svg";
import transIcon from "../image/Vector (2).svg";
import revenueIcon from "../image/Vector (1).svg";
import likesIcon from "../image/Vector (3).svg";
import usersIcon from "../image/Vector (4).svg";
import { Data } from "./Data2";
import { LineChart } from "../components/LineChart";
import { PieChart } from "../components/PieChart";
import { Chart as ChartJs } from "chart.js/auto";
import "../App.css";

export const Dashboard = () => {

  const signout = () => {
    localStorage.clear();
    window.location.reload();
   
  };

  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Data 1",
        data: [100, 200, 100, 400, 200],
        fill: false,
        borderColor: "#9BDD7C",
        tension: 0.4,
      },
      {
        label: "Data 2",
        data: [200, 300, 200, 200, 300],
        fill: false,
        borderColor: "#E9A0A0",
        tension: 0.4,
      },
    ],
  };

  

  // Options for the chart
  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: 500, // Set the maximum value on the y-axis to 500
        min: 100, // Set the minimum value on the y-axis to 100
        stepSize: 100,
      },
    },
  };

  const [pieData, setPieData] = useState({
    datasets: [
      {
        label: "User Gained",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
      },
    ],
  });
  return (
    <div className="flex flex-row h-[94vh] justify-center md:justify-end ">
      <Slidebar />

      <div className="w-full lg:w-5/6  ml-0 lg:ml-64  p-4 md:px-16 font-[Montserrat] md:py-5">
        {/*-------- Navbar Section ------- */}
        <div className="w-full flex flex-row items-center justify-between mb-3  py-1">
          <h1 className="font-bold text-xl">Dashboard</h1>
          <div className=" flex flex-row items-center gap-5 md:gap-10">
            <div className="search bg-white rounded-xl p-2.5 md:py-1 md:px-2 flex flex-row items-center font-[Lato] font-normal">
              <input
                className="w-full hidden md:block border-none text-[14px] outline-none"
                type="text"
                placeholder="Search..."
              />
              <img className="h-4 w-4" src={searchIcon} alt="" />
            </div>
            <img className="cursor-pointer" src={alert} alt="Notifications" />
            <img
              className="rounded-full cursor-pointer"
              src={user}
              alt="User"
              onClick={signout}
            />
          </div>
        </div>

        {/*-------- Card Section -------- */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 lg:gap-6 xl:gap-14 2xl:gap-16 font-[Lato] mb-6">
          <div className="w-[221.05px] h-[120px] rounded-xl bg-[#DDEFE0] relative flex flex-col items-start pb-5 pl-6 justify-end cursor-pointer">
            <img
              className=" absolute top-6 right-8"
              src={revenueIcon}
              alt="Revenue Icon"
            />
            <p className="text-[14px]  mb-1 font-medium ">Total Revenues</p>
            <h1 className="font-black">$2,129,430</h1>
          </div>
          <div className="w-[221.05px] h-[120px] rounded-xl bg-[#F4ECDD] relative flex flex-col items-start pb-5 pl-6 justify-end cursor-pointer">
            <img
              className=" absolute top-6 right-8"
              src={transIcon}
              alt="Transaction Icon"
            />
            <p className="text-[14px] font-medium mb-1 ">Total Transactions</p>
            <h1 className="font-black">1,520</h1>
          </div>
          <div className="w-[221.05px] h-[120px] rounded-xl bg-[#EFDADA] relative flex flex-col items-start pb-5 pl-6 justify-end cursor-pointer">
            <img
              className=" absolute top-6 right-8"
              src={likesIcon}
              alt="Likes Icon"
            />
            <p className="text-[14px] font-medium mb-1 ">Total Likes</p>
            <h1 className="font-black">9721</h1>
          </div>
          <div className="w-[221.05px] h-[120px] rounded-xl bg-[#DEE0EF] relative flex flex-col items-start pb-5 pl-6 justify-end cursor-pointer">
            <img
              className=" absolute top-6 right-8"
              src={usersIcon}
              alt="Users Icon"
            />
            <p className="text-[14px] font-medium mb-1 ">Total Users</p>
            <h1 className="font-black">892</h1>
          </div>
        </div>

        {/* ------- Graph Chart ---------- */}
        <div className=" bg-white rounded-3xl mb-6 ">
          <div className="pt-8 h-fit pb-7 mx-4  md:mx-9">
            <div className="flex flex-row items-center justify-between">
              <div>
                <h1 className="text-base md:text-xl ">Activities</h1>
                <p className="text-gray-300  text-xs md:text-sm font-medium">
                  May - June 2021 &#9660;
                </p>
              </div>
              <div className="flex flex-row items-center gap-6 text-sm font-base font-['Lato'] mr-10 ">
                <div className="flex flex-row items-center gap-12">
                  <div className="flex flex-row items-center gap-2">
                    <div className="border-[#E9A0A0] bg-[#E9A0A0] rounded-full border-2 h-[8px] w-[8px]"></div>
                    <p>Guest</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="border-[#9BDD7C] bg-[#9BDD7C] rounded-full border-2 h-[8px] w-[8px]"></div>
                    <p>User</p>
                  </div>
                </div>
              </div>
            </div>
            <LineChart className="" chartData={data} />
          </div>
        </div>

        {/* ------- Footer Section --------*/}
        <div className="flex flex-row items-center justify-between gap-6 flex-wrap lg:flex-nowrap">
          <div className="bg-white w-full lg:w-1/2 h-fit  rounded-3xl pt-3 pl-3 sm:pt-6 sm:pl-7 pb-7">
            <div className="flex flex-row items-start justify-between">
              <h1 className="text-base md:text-xl mb-4">Top products</h1>
              <p className="text-xs md:text-sm font-medium text-gray-400 mr-8 mt-1 ">
                May - June 2021 &#9660;
              </p>
            </div>

            <div className=" flex flex-row items-center gap-1 sm:gap-10  h-1/3 w-1/3    mt-2 md:mt-0">
              <PieChart chartData={pieData} />

              <div className="flex flex-col gap-3 ">
                <div className="w-40">
                  <div className="flex flex-row items-center gap-3">
                    <div className="border-[#98D89E] bg-[#98D89E] rounded-full border-2 h-[8px] w-[8px]"></div>
                    <h1 className="text-sm md:text-base font-base truncate">
                      Basic Trees
                    </h1>
                  </div>
                  <p className="text-gray-400 font-medium text-xs ml-5 font-['Lato']">
                    55%
                  </p>
                </div>

                <div className="w-48">
                  <div className="flex flex-row items-center gap-3">
                    <div className="border-[#F6DC7D] bg-[#F6DC7D] rounded-full border-2 h-[8px] w-[8px]"></div>
                    <h1 className="text-sm md:text-base font-base truncate ">
                      Custom Short Pants
                    </h1>
                  </div>
                  <p className="text-gray-400 font-medium text-xs ml-5 font-['Lato']">
                    31%
                  </p>
                </div>

                <div className="w-48">
                  <div className="flex flex-row items-center gap-3">
                    <div className="border-[#EE8484] bg-[#EE8484] rounded-full border-2 h-[8px] w-[8px]"></div>
                    <h1 className="text-sm md:text-base font-base truncate">
                      Super Hoodies
                    </h1>
                  </div>
                  <p className="text-gray-400 font-medium text-xs ml-5 font-['Lato']">
                    14%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-full lg:w-1/2 h-[256px] rounded-3xl pt-3 pl-3 sm:pt-6 sm:pl-7">
            <div className="flex flex-row items-start justify-between">
              <h1 className=" text-base md:text-xl mb-4">Today's schedule</h1>
              <p className=" text-xs md:text-sm  font-medium text-gray-400 mr-8 mt-1 ">
                See All &gt;
              </p>
            </div>
            <div className="flex flex-col gap-5 flex-wrap">
              <div className="flex flex-row items-center">
                <div className=" h-[65px]  border-[#9BDD7C]  border-4 mr-3"></div>
                <div className=" text-base flex flex-col items-start font-['Lato']  gap-1 ">
                  <h1 className="text-sm md:text-base">
                    Meeting with suppliers from Kuta Bali
                  </h1>
                  <p className="text-xs font-medium font-lato text-gray-400">
                    14.00-15.00
                  </p>
                  <p className=" text-sm md:text-base font-medium text-gray-400">
                    at Sunset Road, Kuta, Bali
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="h-[65px]  border-[#6972C3] mr-3 border-4"></div>
                <div className="flex flex-col items-start text-base gap-1 font-['Lato']">
                  <h1 className="text-sm md:text-base">
                    Check operation at Giga Factory 1
                  </h1>
                  <p className="text-xs font-medium text-gray-400">
                    18.00-20.00
                  </p>
                  <p className=" text-sm md:text-base font-medium text-gray-400">
                    at Central Jakarta{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
