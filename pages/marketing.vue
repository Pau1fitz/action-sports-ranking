<script setup lang="ts">
import snowboardingImage from "../assets/snowboarding-2.jpg";
import skateboardingImage from "../assets/skateboarding-5.jpg";
import skateboardingImageTwo from "../assets/skateboarding-4.jpg";
import surfingImage from "../assets/surfing-3.jpg";
import surfingImageTwo from "../assets/surfing-4.jpg";
</script>

<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-between py-10 px-5 lg:px-20 gap-10 max-w-7xl mx-auto"
  >
    <div class="flex flex-col lg:w-1/2 space-y-5 self-start self-stretch">
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#001122]">
        Get All The Information You Need
      </h1>
      <p class="text-sm text-neutral-500">
        At Action Sports Insider (ASI) we are all about providing you with
        unbiased, relevant Action Sports news, stats, results and rankings
        powered by Wyldata. Your one place to stay up to date on the competitive
        side of things! If you are in need of data yourself like athlete bios,
        rankings and stats - choose the relevant section below to find the right
        contact.
      </p>
    </div>
    <div class="lg:w-1/2 w-full">
      <img
        class="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        :src="skateboardingImageTwo"
        alt="Skateboard Image"
      />
    </div>
  </div>

  <div
    class="flex flex-col lg:flex-row items-start justify-between py-10 px-5 lg:px-20 gap-10 max-w-7xl mx-auto"
  >
    <div class="flex flex-col lg:w-1/4 space-y-4 self-start self-stretch">
      <h2 class="text-2xl font-bold text-[#001122]">Athlete Info</h2>
      <div class="w-full bg-white shadow-md rounded-xl overflow-hidden">
        <div
          class="w-full bg-cover bg-center h-48"
          :style="{ backgroundImage: `url('${surfingImageTwo}')` }"
        ></div>

        <div class="p-4">
          <p class="text-sm text-neutral-500 mb-4">
            You need specific athlete details, such as profiles stats or
            performance data? Reach out for more info.
          </p>
          <a
            href="mailto:athlete@wyldata.com"
            class="block bg-[#001122] hover:opacity-90 text-white font-semibold py-2 px-4 rounded-md text-center transition duration-200 w-fit shadow-md"
          >
            Get Athlete Info
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:w-1/4 space-y-4 self-start self-stretch">
      <h2 class="text-2xl font-bold text-[#001122]">FLYP Fantasy</h2>
      <div class="w-full bg-white shadow-md rounded-xl overflow-hidden">
        <div
          class="w-full bg-cover bg-center h-48"
          :style="{ backgroundImage: `url('${skateboardingImage}')` }"
        ></div>

        <div class="p-4">
          <p class="text-sm text-neutral-500 mb-4">
            Fantasy has arrived to Action Sports. Come check out FLYP Fantasy
            now and get involved with the action.
          </p>
          <a
            href="https://flypgame.com/app/games"
            class="block bg-[#001122] hover:opacity-90 text-white font-semibold py-2 px-4 rounded-md text-center transition duration-200 w-fit shadow-md"
            target="_blank"
          >
            Join FLYP
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:w-1/4 space-y-4 self-start self-stretch">
      <h2 class="text-2xl font-bold text-[#001122]">Need Rankings?</h2>
      <div class="w-full bg-white shadow-md rounded-xl overflow-hidden">
        <div
          class="w-full bg-cover bg-center h-48"
          :style="{ backgroundImage: `url('${snowboardingImage}')` }"
        ></div>

        <div class="p-4">
          <p class="text-sm text-neutral-500 mb-4">
            If you require rankings, let us know. We'll provide what you need.
          </p>
          <a
            href="mailto:athlete@wyldata.com"
            class="block bg-[#001122] hover:opacity-90 text-white font-semibold py-2 px-4 rounded-md text-center transition duration-200 w-fit shadow-md"
          >
            Get Rankings
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:w-1/4 space-y-4 self-start self-stretch">
      <h2 class="text-2xl font-bold text-[#001122]">Missing Results</h2>
      <div class="w-full bg-white shadow-md rounded-xl overflow-hidden">
        <div
          class="w-full bg-cover bg-center h-48"
          :style="{ backgroundImage: `url('${surfingImage}')` }"
        ></div>

        <div class="p-4">
          <p class="text-sm text-neutral-500 mb-4">
            Don't see the results you're looking for? We'll assist you with
            getting the latest updates and results.
          </p>
          <a
            href="mailto:lorenz@wyldata.com"
            class="block bg-[#001122] hover:opacity-90 text-white font-semibold py-2 px-4 rounded-md text-center transition duration-200 w-fit shadow-md"
          >
            Report Results
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
