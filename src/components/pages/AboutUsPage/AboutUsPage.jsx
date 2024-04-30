import React from "react";
import "./AboutUsPage.css";
import Header from "./../../../common/Header/Header";
import Button from "./../../../common/Button/Button";
import Footer from "./../../../common/Footer/Footer";
function AboutUsPage() {
  return (
    <>
      <div className="">
        <Header />
        <div className="about z-10 py-20 text-center text-black text-white">
          <div className="title ml-auto mr-auto mt-20 text-black">About us</div>
          <div className="mx-auto mt-20 flex w-4/5 justify-between">
            <div className="flex shrink grow basis-2/5 flex-col justify-center text-left">
              <div className="title text-sm text-black">about us</div>
              <h2 className="mt-6 text-black">Quality and Tradition</h2>
              <span className="mt-6 text-black">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content gfshere
                making look like readable English. Many desktop publishing
                packages.
              </span>
              <img
                src="./assets/signature.png"
                className="mt-6 h-64 w-64 object-contain"
              ></img>
              <Button className="btnOrder w-fit">See more</Button>
            </div>
            <div className="shrink grow basis-3/5">
              <img src="./assets/about1.png"></img>
            </div>
          </div>
        </div>
        <div className="flex h-[500px] w-full flex-col items-center justify-center bg-[url('/public/assets/about2.jpg')] text-white">
          <div className="flex h-4/5 w-4/5 items-center">
            <div className="flex shrink grow basis-1/4 flex-col items-center">
              <img
                className="h-[77px] w-[77px] object-cover"
                src="/assets/icons/Icon.svg"
                alt="Fresh Product"
              />
              <h2 className="mt-5 text-center text-[20px]">Fresh Product</h2>
              <div className=" mt-5 text-center">
                Professional consider everyone probls small niche friendly.
              </div>
              <Button className="btnOrder mt-5">See more</Button>
            </div>
            <div className="flex shrink grow basis-1/4 flex-col items-center">
              <img src="/assets/icons/Icon (1).svg" alt="Skills Chefs" />
              <h2 className="mt-5 text-center text-[20px]">Skills Chefs</h2>
              <div className=" mt-5 text-center">
                Professional consider everyone probls small niche friendly.
              </div>
              <Button className="btnOrder mt-5">See more</Button>
            </div>
            <div className="flex shrink grow basis-1/4 flex-col items-center">
              <img src="/assets/icons/Icon (2).svg" alt="FDrinks & Juices" />
              <h2 className="mt-5 text-center text-[20px]">Drinks & Juices</h2>
              <div className=" mt-5 text-center">
                Professional consider everyone probls small niche friendly.
              </div>
              <Button className="btnOrder mt-5">See more</Button>
            </div>
            <div className="flex shrink grow basis-1/4 flex-col items-center">
              <img src="/assets/icons/Icon (3).svg" alt="Vegan Cuisine" />
              <h2 className="mt-5 text-center text-[20px]">Vegan Cuisine</h2>
              <div className=" mt-5 text-center">
                Professional consider everyone probls small niche friendly.
              </div>
              <Button className="btnOrder mt-5">See more</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center py-20 text-center">
          <div className="title ml-auto mr-auto mt-20 text-black">TEAM</div>
          <h1 className="mt-5 w-fit text-[20px] font-bold">
            Meet Our Professional Chefs
          </h1>
          <div className="mt-5 flex w-4/5">
            <div className="flex shrink grow basis-1/4 flex-col items-center px-5">
              <div className=" rounded-[5px] border-[1px] border-solid border-transparent bg-[#A0AEAF]">
                <img src="./assets/about3.png" className="object-cover "></img>
              </div>
              <h1 className="mt-10 text-[18px] font-extrabold">Avroko</h1>
              <span className="text-[14px] font-semibold text-[#555555]">
                Master Chef
              </span>
            </div>
            <div className="flex shrink grow basis-1/4 flex-col items-center px-5">
              <div className=" rounded-[5px] border-[1px] border-solid border-transparent bg-[#A0AEAF]">
                <img src="./assets/about4.png" className="object-cover"></img>
              </div>
              <h1 className="mt-10 text-[18px] font-extrabold">Avroko</h1>
              <span className="text-[14px] font-semibold text-[#555555]">
                Master Chef
              </span>
            </div>
            <div className="flex shrink grow basis-1/4 flex-col items-center px-5">
              <div className=" rounded-[5px] border-[1px] border-solid border-transparent bg-[#A0AEAF]">
                <img src="./assets/about5.png" className="object-cover"></img>
              </div>
              <h1 className="mt-10 text-[18px] font-extrabold">Avroko</h1>
              <span className="text-[14px] font-semibold text-[#555555]">
                Master Chef
              </span>
            </div>
            <div className="flex shrink grow basis-1/4 flex-col items-center px-5">
              <div className=" rounded-[5px] border-[1px] border-solid border-transparent bg-[#A0AEAF]">
                <img src="./assets/about6.png" className="object-cover"></img>
              </div>
              <h1 className="mt-10 text-[18px] font-extrabold">Avroko</h1>
              <span className="text-[14px] font-semibold text-[#555555]">
                Master Chef
              </span>
            </div>
          </div>
        </div>
        
      </div>
      <Footer></Footer>
    </>
  );
}

export default AboutUsPage;
