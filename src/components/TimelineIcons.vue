<script setup>
import LogCard from "./LogCard.vue";
import NewLog from "./NewLog.vue";

import { useRecordsStore } from "../store/Records";

import { storeToRefs } from "pinia";

const storeRecords = useRecordsStore();

const { recordsByDate } = storeToRefs(storeRecords);
</script>

<template>
  <div>
    <ol class="timeline">
      <NewLog></NewLog>
      <LogCard v-for="record in recordsByDate" :record="record"></LogCard>
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
