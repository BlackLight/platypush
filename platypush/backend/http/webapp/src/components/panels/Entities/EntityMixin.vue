<script>
import Utils from "@/Utils"

export default {
  name: "EntityMixin",
  mixins: [Utils],
  emits: ['input', 'loading'],
  props: {
    loading: {
      type: Boolean,
      default: false,
    },

    error: {
      type: Boolean,
      default: false,
    },

    value: {
      type: Object,
      required: true,
    },

    parent: {
      type: Object,
      default: () => {},
    },

    children: {
      type: Object,
      default: () => {},
    },

    allEntities: {
      type: Object,
      default: () => {},
    },

    level: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      modalVisible: false,
      collapsed: true,
    }
  },

  computed: {
    type() {
      let entityType = (this.value.type || '')
      return entityType.split('_').
        map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('')
    },
  },
}
</script>
