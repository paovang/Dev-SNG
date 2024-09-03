import { defineStore } from "pinia";
import { reactive } from "vue";

export const userStore = defineStore("user-store", () => {
  const user = reactive<any>({});
  const role = reactive<any>({});
  const form = reactive<any>({});

  async function getUser() {
    user.name = "paovang";
    role.name = "Admin";
  }

  async function addUser() {
    console.log(form);
  }

  return {
    user,
    getUser,
    role,
    addUser,
    form,
  };
});
