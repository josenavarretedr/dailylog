<template>
  <div class="timeline-item">
    <span class="timeline-item-icon" :class="record.color">
      <i :class="record.icon"></i>
    </span>
    <div class="timeline-item-description">
      <span>
        {{ record.description }} <br />
        <div class="timeData">
          <!-- Aquí debería de ir un span con la fecha larga en español tomando como fecha el record.date -->
          <time :datetime="record.date">{{ fechaEnEspañol }}</time>
        </div>
      </span>
      <br />
      <div class="timeline-item-delete">
        <button
          class="buttonDelete faded-icon"
          @click="storeRecords.deleteRecord(record.id)"
        >
          <i class="bi bi-trash-fill"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useRecordsStore } from "../store/Records";

const storeRecords = useRecordsStore();

const props = defineProps({
  // Define props here
  record: {
    type: Object,
    required: true,
  },
});

const fechaEnEspañol = computed(() => {
  const diasSemana = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const fecha = new Date(props.record.date);
  let diaSemana = diasSemana[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let año = fecha.getFullYear();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();

  if (hora < 10) {
    hora = "0" + hora;
  }

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  return `${diaSemana}. ${dia} de ${mes}. de ${año}, ${hora}:${minutos}:${segundos}`;
});
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
  flex-direction: column;
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
    // cursor: pointer;
    // FIX No se puede usar el hover en el componente continuo

    & + .timeline-item-icon {
      border: 1px solid red;
    }
  }
}

.timeline-item-delete {
  display: flex;
  justify-content: flex-end;
}

.buttonDelete {
  border: 0;
  padding: 0.6rem;
  margin-right: 4px;
  font-size: 0.9rem;
  border-radius: 50%;
  color: #fff;
  background-color: #db5151;
  cursor: pointer;
  &:hover {
    background-color: #c23b3b;
  }
}
</style>
```
