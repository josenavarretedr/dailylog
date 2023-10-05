<template>
  <div class="timeline-item">
    <span class="timeline-item-icon | avatar-icon">
      <i class="avatar">
        <img src="https://assets.codepen.io/285131/hat-man.png" />
      </i>
    </span>
    <div class="new-comment">
      <input
        type="text"
        placeholder="Add a comment..."
        :value="newRecord.description"
        @input="newRecord.description = $event.target.value"
        @keydown.enter.prevent="storeRecords.saveRecord()"
      />
      <button class="buttonSave filled-icon" @click="storeRecords.saveRecord()">
        <i class="bi bi-floppy2-fill"></i> Guardar registro
      </button>
    </div>
    <br />
  </div>
</template>

<script setup>
import { useRecordsStore } from "../store/Records";

import { storeToRefs } from "pinia";

const storeRecords = useRecordsStore();

const { newRecord } = storeToRefs(storeRecords);
</script>

<style lang="scss" scoped>
/* Some basic CSS overrides */

button,
input,
select,
textarea {
  font: inherit;
}

a {
  color: inherit;
}
img {
  display: block;
  max-width: 100%;
}
.timeline-item {
  display: flex;
  gap: 24px;
  & + * {
    margin-top: 24px;
  }
  & + .extra-space {
    margin-top: 48px;
  }
}

.new-comment {
  width: 100%;
  input {
    border: 1px solid var(--c-grey-200);
    border-radius: 6px;
    height: 48px;
    padding: 0 16px;
    width: 100%;
    &::placeholder {
      color: var(--c-grey-300);
    }

    &:focus {
      border-color: var(--c-grey-300);
      outline: 0; // Don't actually do this
      box-shadow: 0 0 0 4px var(--c-grey-100);
    }
  }
}

.timeline-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: -52px;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 0 0 6px #fff;
  svg {
    width: 20px;
    height: 20px;
  }

  &.faded-icon {
    background-color: var(--c-grey-100);
    color: var(--c-grey-400);
  }

  &.filled-icon {
    background-color: var(--c-blue-500);
    color: #fff;
  }
  &:hover {
    border-color: var(--c-grey-300);
    outline: 0; // Don't actually do this
    box-shadow: 0 0 0 4px var(--c-grey-100);
    cursor: pointer;
    // FIX No se puede usar el hover en el componente continuo
  }
}

.buttonSave {
  border: 0;
  padding: 0;
  vertical-align: middle;
  margin-right: 4px;
  margin-top: 12px;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  height: 32px;
  padding: 0 15px;
  gap: 10px;
  background-color: var(--c-blue-500);
  color: #fff;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 99em;
  &:hover {
    border-color: var(--c-grey-300);
    outline: 0; // Don't actually do this
    box-shadow: 0 0 0 4px var(--c-grey-100);
    cursor: pointer;
  }
  > i {
    font-size: 1.1rem;
    padding: 0 8px 0 0;
  }
}
</style>
