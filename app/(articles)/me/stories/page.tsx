import SideBarFeed from "@/components/Articles/SideBarFeed";
import Navbar from "@/components/Navbar/Navbar";
import AuthorStories from "@/pages/Stories/AuthorStories";
import React, { Suspense } from "react";

async function Stories() {
  return (
    <>
      <Navbar buttonText="Write" status="navbar" />
      <main className="w-full grid grid-cols-3 max-w-6xl mx-auto">
        <div className="col-span-3 md:col-span-2 mt-1 p-5">
          <Suspense
            fallback={
              <p className="bg-red-300 flex justify-center items-center w-full h-[100vh]">
                Loading...
              </p>
            }
          >
            <AuthorStories />
          </Suspense>
        </div>
        <div className="hidden md:flex col-span-1">
          <SideBarFeed />
        </div>
      </main>
    </>
  );
}

export default Stories;
