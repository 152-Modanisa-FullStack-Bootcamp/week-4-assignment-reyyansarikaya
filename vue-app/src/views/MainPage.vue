<template>
  <div class="main">
    <div id="video-list-container">
      <Video
          v-for="video in videos"
          :video="video"
          :key="video.id"
      />
    </div>

  </div>
</template>

<script>
import Video from "../components/Video";
import API from "@/api";

export default {
  name: "MainPage",
  data() {
    return {
      videos: [],
    }
  },
  components: {
    Video
  },
  async created() {
    try {
      this.videos = await API.getVideoList()
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1800px;
  margin-top: 30px;
}

#video-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  width: 1800px;
  margin-bottom: 100px;
}
</style>