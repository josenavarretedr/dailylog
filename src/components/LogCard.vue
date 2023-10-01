<template>
  <!-- Puede ser faded-icon o filled-icon dependiendo del un valor de un objeto como promps -->

  <div class="timeline-item">
    <span class="timeline-item-icon" :class="record.color">
      <i :class="record.icon"></i>
    </span>
    <div class="timeline-item-description">
      <span>
        {{ record.description }} <br />
        <div class="timeData">10 de Septiembre 2023, 14:00</div>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  // Define props here
  record: {
    type: Object,
    required: true,
  },
});

// Este elemento recibirá un objeto con los datos de la actividad y los mostrará en pantalla
// El objeto debe tener la siguiente estructura:
// {
//   "id": 1,
//   "title": "Comí un sandwich de jamón y queso",
//   "description": "Hoy comí un sandwich de jamón y queso.",
//   "date": "2023-09-10T14:00:00.000Z",
//   "type": "food",
//   "icon": "bi bi-lightning-charge-fill"
// }

// El objeto puede tener los siguientes tipos:
// food, water, exercise, sleep, medicine, mood, weight, bloodPressure, bloodSugar, heartRate, temperature, oxygenSaturation, respiratoryRate, steps, calories, distance, workout, mindfulness, period, sexualActivity, bathroom, symptom, vaccine, appointment, procedure, labResult, allergy, condition, immunization, medication, procedure, surgery, device, note, document, other

// El objeto puede tener los siguientes iconos:
// bi bi-lightning-charge-fill, bi bi-droplet-fill, bi bi-heart-fill, bi bi-moon-fill, bi bi-file-med

// El objeto puede tener los siguientes colores:
// faded-icon, filled-icon
</script>

<style lang="scss" scoped>
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
    & + .timeline-item-description {
      border-color: var(--c-grey-300);
      box-shadow: 0 4px 4px 0 var(--c-grey-100);
    }
  }
}

.timeline-item-description {
  display: flex;
  padding-top: 6px;
  gap: 8px;
  color: var(--c-grey-400);
  border: 1px solid var(--c-grey-200);
  box-shadow: 0 4px 4px 0 var(--c-grey-100);
  border-radius: 6px;
  padding: 16px;
  font-size: 1rem;
  img {
    flex-shrink: 0;
  }
  a {
    color: var(--c-grey-500);
    font-weight: 500;
    text-decoration: none;
    &:hover,
    &:focus {
      outline: 0; // Don't actually do this
      color: var(--c-blue-500);
    }
  }
  .timeData {
    color: var(--c-grey-300);
    font-weight: 500;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
  }
  &:hover {
    border-color: var(--c-grey-300);
    outline: 0; // Don't actually do this
    box-shadow: 0 0 0 4px var(--c-grey-100);
    cursor: pointer;
    // FIX No se puede usar el hover en el componente continuo

    & + .timeline-item-icon {
      border: 1px solid red;
    }
  }
}
</style>
```
