<template>
  <div class="sound">
    <div class="sound-container">
      <audio autoplay preload="none" ref="player" v-if="recording">
        <source :src="`/sound/stream.aac?t=${(new Date()).getTime()}`">
        Your browser does not support audio elements
      </audio>
    </div>

    <div class="controls">
      <button type="button" @click="startRecording" v-if="!recording">
        <i class="fa fa-play"></i>&nbsp; Start streaming audio
      </button>

      <button type="button" @click="stopRecording" v-else>
        <i class="fa fa-stop"></i>&nbsp; Stop streaming audio
      </button>
    </div>
  </div>
</template>

<script>
import Utils from "@/Utils";

export default {
  name: "Sound",
  mixins: [Utils],

  data() {
    return {
      recording: false,
    };
  },

  methods: {
    startRecording() {
      this.recording = true
    },

    async stopRecording() {
      this.recording = false
      await this.request('sound.stop_recording')
    },
  },
}
</script>

<style lang="scss" scoped>
.sound {
  width: 100%;
  height: 90%;
  margin-top: 7%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  .sound-container {
    margin-bottom: 1em;
  }
}
</style>
