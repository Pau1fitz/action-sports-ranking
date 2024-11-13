<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  company: "",
  message: "",
});

function handleSubmit() {
  console.log({ form });
}
</script>

<template>
  <div
    class="flex flex-col lg:flex-row items-start justify-between py-10 px-5 lg:px-20 gap-10 max-w-7xl mx-auto"
  >
    <div class="flex flex-col lg:w-1/2 space-y-5 self-start self-stretch">
      <h2 class="text-4xl font-bold text-gray-800">Get in Touch</h2>
      <p class="text-gray-600">
        From inquiries about our services to exploring collaboration
        possibilities or simply seeking clarity on how we might be able to help
        you, our team is ready to assist. Fill out the form, and we'll respond
        at the earliest. If you have requests or concerns regarding specific
        rankings, kindly reach out to us.
      </p>
      <img
        class="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        src="../assets/skateboarding.jpg"
      />
    </div>

    <div
      class="bg-white shadow-md self-stretch rounded-lg p-6 lg:w-1/2 w-full self-start flex flex-col justify-evenly"
    >
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="form.name"
            class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div class="mb-4">
          <label for="company" class="block text-sm font-medium text-gray-700"
            >Company</label
          >
          <input
            type="text"
            id="company"
            v-model="form.company"
            class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        <div class="mb-6">
          <label for="message" class="block text-sm font-medium text-gray-700"
            >Message</label
          >
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="p-8 bg-[#1EBD70] hover:opacity-90 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>
