<template>
  <div class="input" :class="{'input--loading': isLoading}">
    <label for="origin" class="input__label">Origin</label>
    <input
      id="origin"
      name="origin"
      class="input__field"
      type="text"
      v-model.lazy="city">

    <label for="departure" class="input__label">Departure</label>
    <input
      id="departure"
      name="departure"
      class="input__field"
      v-model.lazy="date"
      type="date">

    <button
      class="input__field input__field--button"
      @click="onSearch"
      :disabled="isLoading || !isValid">
        <span v-if="isLoading">Searching...</span>
        <span v-else>Search</span>
    </button>
  </div>
</template>

<script>

export default {
  name: 'Input',
  props: {
    isLoading: Boolean,
  },
  data() {
    return {
      city: '',
      date: '',
    };
  },
  computed: {
    isValid() {
      return !!(this.city && this.date);
    },
  },
  methods: {
    onSearch() {
      const formattedDate = this.formatDate(this.date);
      this.$emit('search', { city: this.city, date: formattedDate });
    },
    formatDate(date) {
      const dateObject = new Date(date);
      return `${dateObject.getDate()}/${(dateObject.getMonth() + 1)}/${dateObject.getFullYear()}`;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.input {
  &__label {
    color: $white;
  }

  &__field {
    font-size: 16px;
    margin: 12px auto;
    background-color: $white;
    line-height: 1.2;
    position: relative;
    display: block;
    height: 62px;
    border: 2px solid transparent;
    border-radius: 30px;
    padding: 0 35px;
    transition: all .4s;

    &:focus {
      outline: none;
      border: 2px solid $red;
    }

    &--button {
      color: $white;
      background-color: $red;
      margin-top: 24px;

      &:focus {
        border: 2px solid $light-gray;
      }

      &:hover:not([disabled]) {
        cursor: pointer;
        border: 2px solid $light-gray;
      }
    }
  }
}
</style>
