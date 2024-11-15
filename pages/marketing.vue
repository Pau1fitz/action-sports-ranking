<script setup lang="ts">
import snowboardingImage from "../assets/snowboarding.jpg";
import skateboardingImage from "../assets/skateboarding-3.jpg";
import skateboardingImageTwo from "../assets/skateboarding-2.jpg";
import surfingImage from "../assets/surfing.jpg";
import surfingImageTwo from "../assets/surfing-2.jpeg";
</script>

<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-between py-10 px-5 lg:px-20 gap-10 max-w-7xl mx-auto"
  >
    <div class="flex flex-col lg:w-1/2 space-y-5 self-start self-stretch">
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#001122]">
        Get All The Information You Need
      </h1>
      <p class="text-sm text-muted">
        Whether you're looking for athlete information, missing results, or
        detailed rankings for your organisation, we are here to help. Choose the
        relevant section below to find the right contact or resource for your
        inquiry.
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
    <div class="flex flex-col lg:w-1/4 space-y-5 self-start self-stretch">
      <h2 class="text-4xl font-bold text-[#001122] text-center">
        Find Athlete Info
      </h2>
      <div
        class="w-full bg-cover bg-center h-72 rounded-xl"
        :style="{ backgroundImage: `url('${surfingImage}')` }"
      ></div>
      <p class="text-sm text-muted">
        You need specific athlete details, such as profiles stats or performance
        data? Reach out for more info.
      </p>
      <a
        href="mailto:athlete@wyldata.com"
        class="p-8 bg-[#1EBD70] hover:opacity-90 text-white font-semibold py-2 rounded-md transition duration-200 w-fit shadow-md"
      >
        Get Athlete Info
      </a>
    </div>

    <div class="flex flex-col lg:w-1/4 space-y-5 self-start self-stretch">
      <h2 class="text-4xl font-bold text-[#001122]">FLYP Fantasy</h2>
      <div
        class="w-full bg-cover bg-center h-72 rounded-xl"
        :style="{ backgroundImage: `url('${skateboardingImage}')` }"
      ></div>

      <p class="text-sm text-muted]">
        Fantasy has arrived to Action Sports. Check out FLYP Fantasy to see how
        you can get involved.
      </p>
      <a
        href="https://flypgame.com/app/games"
        class="p-8 bg-[#1EBD70] hover:opacity-90 text-white font-semibold py-2 rounded-md transition duration-200 w-fit shadow-md"
        target="_blank"
      >
        Join FLYP
      </a>
    </div>

    <div class="flex flex-col lg:w-1/4 space-y-5 self-start self-stretch">
      <h2 class="text-4xl font-bold text-[#001122]">Rankings</h2>
      <div
        class="w-full bg-cover bg-center h-72 rounded-xl"
        :style="{ backgroundImage: `url('${snowboardingImage}')` }"
      ></div>
      <p class="text-sm text-muted">
        If you require rankings, statistics, or athlete profiles, get in touch
        with us. We'll provide what you need.
      </p>
      <a
        href="mailto:athlete@wyldata.com"
        class="p-8 bg-[#1EBD70] hover:opacity-90 text-white font-semibold py-2 rounded-md transition duration-200 w-fit shadow-md"
      >
        View Rankings
      </a>
    </div>

    <div class="flex flex-col lg:w-1/4 space-y-5 self-start self-stretch">
      <h2 class="text-4xl font-bold text-[#001122] text-center">
        Missing Results
      </h2>
      <div
        class="w-full bg-cover bg-center h-72 rounded-xl"
        :style="{ backgroundImage: `url('${surfingImageTwo}')` }"
      ></div>
      <p class="text-sm text-muted">
        Don't see the results you're looking for? We'll assist you with getting
        the latest updates and results.
      </p>
      <a
        href="mailto:lorenz@wyldata.com"
        class="p-8 bg-[#1EBD70] hover:opacity-90 text-white font-semibold py-2 rounded-md transition duration-200 w-fit shadow-md"
      >
        Report Results
      </a>
    </div>
  </div>
</template>
