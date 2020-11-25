<template>
  <div class="main">
    <h1 class="main__title">Where should I go?</h1>

    <div
      class="main__input"
      :class="{
        'main__input--loading': isLoading,
        'main__input--results': !isLoading && hasResults
        }">
      <Input @search="onSearch" :is-loading="isLoading" />
      <p v-if="hasError" class="main__input-error">
        Oops, something went wrong! Try again with different conditions.
      </p>
    </div>

    <div v-if="!isLoading && hasResults" class="main__wrapper">
      <div v-for="city in cities" :key="city.id">
        <Card :city="city"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Input from '@/components/Input.vue';
import cities from '@/data/cities';
import { getAirportId, getFlights } from '@/services/api';

export default {
  name: 'Main',
  components: {
    Card, Input,
  },
  data() {
    return {
      cities,
      isLoading: false,
      hasResults: false,
      hasError: false,
    };
  },
  methods: {
    async onSearch({ city, date }) {
      this.hasError = false;

      try {
        const airportId = await getAirportId(city);
        this.updateCitiesWithFlights(airportId, date);
      } catch (error) {
        this.hasResults = false;
        this.hasError = true;
      }
    },
    async updateCitiesWithFlights(flyFrom, date) {
      this.isLoading = true;
      this.hasError = false;

      try {
        const flightsPromises = this.cities.map((c) => getFlights(flyFrom, c.id, date));
        const flights = await Promise.all(flightsPromises);

        this.cities = this.cities.map((c, i) => ({ ...c, flights: flights[i].data.data }));
        this.hasResults = true;
      } catch (error) {
        this.hasResults = false;
        this.hasError = true;
      }

      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.main {
  max-width: 1200px;
  margin: auto;

  &__title {
    text-align: left;
  }

  &__input {
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;
    background-color: $light-blue;
    padding: 5vh 0 20vh;
    text-align: center;
    z-index: 0;
    transition: background-color .3s cubic-bezier(0.42, 0, 0.58, 1);

    &--loading {
      background-color: $red;
    }

    &--results {
      background-color: $dark-gray;
    }
  }

  &__input-error {
    color: $white;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;
    margin-top: -100px;
    z-index: 1;
    position: relative;

    @media (min-width: 768px) {
      margin-top: -160px;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>
