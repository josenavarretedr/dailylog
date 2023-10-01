<script setup>
import { ref } from "vue";
import LogCard from "./LogCard.vue";
import NewLog from "./NewLog.vue";

const records = ref([
  {
    description: "Hoy comí un sandwich de jamón y queso.",
    date: "2023-09-10T14:00:00.000Z",
    icon: "bi bi-lightning-charge-fill",
    color: "faded-icon",
  },
  {
    description: "Aprendí a usar GitHub Copilot hoy.",
    date: "2023-09-11T10:00:00.000Z",
    icon: "bi bi-book",
    color: "filled-icon",
  },
  {
    description: "Hoy fui al gimnasio y levanté 100kg.",
    date: "2023-09-12T18:00:00.000Z",
    icon: "bi bi-balloon-heart",
    color: "faded-icon",
  },
  {
    description: "Hoy vi una película de terror y no pude dormir.",
    date: "2023-09-13T22:00:00.000Z",
    icon: "bi bi-film",
    color: "filled-icon",
  },
  {
    description: "Hoy cociné una cena deliciosa para mi familia.",
    date: "2023-09-14T19:00:00.000Z",
    icon: "bi bi-egg-fried",
    color: "filled-icon",
  },
]);
</script>

<template>
  <div>
    <ol class="timeline">
      <NewLog></NewLog>
      <LogCard v-for="record in records" :record="record"></LogCard>
      <!-- <li class="timeline-item | extra-space">
        <span class="timeline-item-icon | faded-icon">
          <i class="bi bi-lightning-charge-fill"></i>
        </span>
        <div class="timeline-item-wrapper">
          <div class="timeline-item-description">
            <span
              ><a href="#">Yoan Almedia</a> commented on
              <time datetime="20-01-2021">Jan 20, 2021</time></span
            >
          </div>
        </div>
      </li> -->
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.timeline {
  width: 85%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 32px 0 32px 32px;
  border-left: 2px solid var(--c-grey-200);
  font-size: 1.125rem;
}
</style>
