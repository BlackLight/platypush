<template>
  <div class="entity switch-container">
    <div class="head" :class="{expanded: expanded}">
      <div class="col-1 icon">
        <EntityIcon
          :icon="this.value.meta?.icon || {}"
          :loading="loading"
          :error="error" />
      </div>

      <div class="col-s-8 col-m-9 label">
        <div class="name" v-text="value.name" />
      </div>

      <div class="col-s-3 col-m-2 buttons pull-right">
        <button @click.stop="expanded = !expanded" v-if="hasValues">
          <i class="fas"
            :class="{'fa-angle-up': expanded, 'fa-angle-down': !expanded}" />
        </button>
        <span class="value"
          v-text="value.value"
          v-if="value?.value != null" />
      </div>
    </div>

    <div class="body" v-if="expanded" @click.stop="prevent">
      <div class="row">
        <div class="input">
          <select @input="setValue" ref="values">
            <option value="" v-if="value.is_write_only" selected>--</option>
            <option :value="v" v-for="v in value.values" :key="v" v-text="v" />
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EntityMixin from "./EntityMixin"
import EntityIcon from "./EntityIcon"

export default {
  name: 'EnumSwitch',
  components: {EntityIcon},
  mixins: [EntityMixin],

  data() {
    return {
      expanded: false,
    }
  },

  computed: {
    hasValues() {
      return !!this?.value?.values?.length
    }
  },

  methods: {
    prevent(event) {
      event.stopPropagation()
      return false
    },

    async setValue(event) {
      if (!event.target.value?.length)
        return

      this.$emit('loading', true)
      if (this.value.is_write_only) {
        const self = this;
        setTimeout(() => {
            self.$refs.values.value = ''
        }, 1000)
      }

      try {
        await this.request('entities.execute', {
          id: this.value.id,
          action: 'set_value',
          data: event.target.value,
        })
      } finally {
        this.$emit('loading', false)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "common";

.switch-container {
  .head {
    .buttons {
      button {
        margin-right: 0.5em;
      }
    }

    .value {
      font-size: 1.1em;
      font-weight: bold;
      opacity: 0.7;
    }
  }

  .body {
    .row {
      display: flex;

      .icon {
        width: 2em;
        text-align: center;
      }

      .input {
        width: calc(100% - 2em);

        select {
          width: 100%;
        }
      }
    }
  }
}
</style>