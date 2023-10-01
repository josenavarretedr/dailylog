<script setup></script>

<template>
  <div class="container">
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-item-content">
          <h2>Fecha del evento</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            repellat veniam iure a accusamus sapiente, inventore, id repellendus
            nemo, possimus eveniet corrupti rerum veritatis velit!
          </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item-content">
          <h2>Fecha del evento</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            repellat veniam iure a accusamus sapiente, inventore, id repellendus
            nemo, possimus eveniet corrupti rerum veritatis velit!
          </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item-content">
          <h2>Fecha del evento</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            repellat veniam iure a accusamus sapiente, inventore, id repellendus
            nemo, possimus eveniet corrupti rerum veritatis velit!
          </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item-content">
          <h2>Fecha del evento</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            repellat veniam iure a accusamus sapiente, inventore, id repellendus
            nemo, possimus eveniet corrupti rerum veritatis velit!
          </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item-content">
          <h2>Fecha del evento</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            repellat veniam iure a accusamus sapiente, inventore, id repellendus
            nemo, possimus eveniet corrupti rerum veritatis velit!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #1e1f22;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline {
  width: 80%;
  max-width: 800px;
  position: relative;
}

.timeline-item {
  padding: 1rem;
  margin-bottom: 2rem;
  position: relative;
  background-color: #1e1f22;
  border-radius: 15px;
  color: #fff;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item-content h2 {
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6;
}

.timeline-item-content p {
  font-size: 0.9rem;
  text-align: justify;
  line-height: 1.6;
}

.timeline-item-content .date {
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  letter-spacing: 1.5px;
}

@media (min-width: 768px) {
  .timeline::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    height: 100%;
    transform: translateX(-50%);
    background-color: #fff;
  }

  .timeline-item {
    width: 50%;
    position: relative;
  }

  .timeline-item:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-1.2rem);
    border-radius: 15px 0px 15px 15px;
  }

  .timeline-item:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(1.2rem);
    border-radius: 0px 15px 15px 15px;
  }

  .timeline-item::after {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0;
    background-color: #fff;

    border-radius: 50%;
  }

  .timeline-item:nth-child(odd)::after {
    right: -2.2rem;
    transform: translate(-50%, -50%);
  }

  .timeline-item:nth-child(even)::after {
    left: -1.2rem;
    transform: translate(-50%, -50%);
  }

  .timeline-item:nth-child(odd):hover:after {
    right: -2.5rem;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  .timeline-item:nth-child(even):hover:after {
    left: -1.2rem;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  .timeline-item:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
  }

  .timeline-item:hover:after {
    background-color: #fff;
    width: 1.2rem;
    height: 1.2rem;
    transition: all 0.3s ease;
  }

  .timeline-item-content .date {
    position: absolute;
    top: -1.2rem;
  }
}
</style>
