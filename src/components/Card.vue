<template>
  <div class="card">
    <img class="card__img" :src="require(`@/assets/images/${city.imgUrl}`)" :alt="city.name">

    <div class="card__content">
      <h2 class="card__title">{{ city.name }}, {{ city.country }}</h2>

      <div v-if="cheapestFlight">
        <div class="card__available-seats">
          {{ cheapestFlight.availability.seats }} available
        </div>
        <div class="card__price">€ {{ cheapestFlight.price }}</div>
        <a class="card__link" :href="cheapestFlight.deep_link">
          Buy ticket <i class="card__chevron-right"></i>
        </a>
      </div>

      <div class="card__no-flight" v-else>No available flights with this search conditions.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    city: Object,
  },
  computed: {
    cheapestFlight() {
      return this.city.flights
        .filter((f) => f.availability.seats)
        .find((f) => Math.min(f.price));
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.card {
  position: relative;
  background-color: $white;
  border-radius: 8px;
  height: 100%;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1) , 0px 2px 4px -1px rgba(0, 0, 0, 0.06);

  &__img {
    width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &__title {
    margin-top: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    padding: 18px;
  }

  &__available-seats {
    position: absolute;
    top: 0;
    right: 0;
    background-color: $light-blue;
    color: $white;
    padding: 6px 10px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    font-size: 12px;
  }

  &__price {
    font-family: 'Castoro', serif;
    font-size: 36px;
  }

  &__no-flight {
    font-style: italic;
    margin-top: 12px;
  }

  &__link {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    font-weight: 500;
    color: $light-blue;
    margin-top: 18px;
    transition: color .15s ease-in-out;

    &:focus,
    &:hover {
      cursor: pointer;
      outline: none;
      color: $red;
    }
  }

  &__chevron-right {
    position: relative;
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px;

    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid;
      border-right: 2px solid;
      transform: rotate(-45deg);
      right: 6px;
      top: 4px
    }
  }
}
</style>
