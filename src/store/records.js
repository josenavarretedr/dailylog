
import { ref, computed } from 'vue'

import { defineStore } from 'pinia'

import { bootstrapicons } from '../utils/boostrapIcons'

export const useRecordsStore = defineStore('records', () => {

  const recordsByDate = computed(() => {
    return records.value.sort((a, b) => new Date(Date.parse(b.date)) - new Date(Date.parse(a.date)));
  });

  const records = ref([
    {
      description: "Hoy comí un sandwich de jamón y queso.",
      date: "2023-02-10T14:00:00.000Z",
      icon: "bi bi-lightning-charge-fill",
      color: "faded-icon",
    },
    {
      description: "Aprendí a usar GitHub Copilot hoy.",
      date: "2023-01-11T10:00:00.000Z",
      icon: "bi bi-book",
      color: "filled-icon",
    },
    {
      description: "Hoy fui al gimnasio y levanté 100kg.",
      date: "2023-04-12T18:00:00.000Z",
      icon: "bi bi-balloon-heart",
      color: "faded-icon",
    },
    {
      description: "Hoy vi una película de terror y no pude dormir.",
      date: "2023-04-14T22:00:00.000Z",
      icon: "bi bi-film",
      color: "filled-icon",
    },
    {
      description: "Hoy cociné una cena deliciosa para mi familia.",
      date: "2023-06-14T19:00:00.000Z",
      icon: "bi bi-egg-fried",
      color: "filled-icon",
    },
  ]);

  const newRecord = ref({
    description: "",
    date: null,
    icon: "bi",
    color: "faded-icon",
  });

  function resetNewLog() {
    newRecord.value = {
      description: "",
      date: null,
      icon: "bi ",
      color: "faded-icon",
    }
  }

  function saveRecord() {
    let today = new Date();
    newRecord.value.date = today;

    if (newRecord.value.description === "") {
      newRecord.value.description = "No description";
    }

    let randomIcon = bootstrapicons[Math.floor(Math.random() * bootstrapicons.length)];

    newRecord.value.icon += ' bi-' + randomIcon;

    records.value.push(newRecord.value);
    resetNewLog();
  }

  return {
    records,
    recordsByDate,
    newRecord, resetNewLog, saveRecord
  };

});
