<template>
  <div class="video-container">
    <img class="image" @click="goToWatch"
         @mouseover="isHover=true" @mouseleave="isHover=false" :alt="video.title"
         :src="isHover ? video.hoverImage : video.coverImage"/>
    <div class="info">
      <img id="owner-image" :src="video.ownerImage" alt="ownerImage">
      <div class="text-area">
        <span id="title">{{ video.title }}</span>
        <span id="owner-name">{{ video.ownerName }}</span>
        <div class="count-date">
          <span id="view-count">{{ video.viewCount }}</span>
          <span id="date">{{ video.publishDateInMonth }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: {
    video: Object
  },
  data() {
    return {
      isHover: false
    }
  },
  methods: {
    goToWatch() {
      this.$router.push({name: "watch", query: {id: this.video.id}})
    },
    isItFavoritePage: function () {
      this.videoStyle = "video-container-favorite"
      const url = this.$route.params.bootcamp
      return url === "bootcamp";
    },

  },
  mounted() {
    console.log(this.$route.params.bootcamp)
  }
}
</script>

<style scoped>
.video-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;

}

.image {
  margin-top: 50px;
  width: 360px;
  height: 200px;
}

.image:hover {
  background: red;
}

.info {
  margin-top: 10px;
  width: 360px;
  display: flex;
  justify-content: space-around;

}

.text-area {
  width: 280px;
  display: flex;
  flex-direction: column;
}


.count-date {
  margin-top: 10px;
  width: 10px;
  display: flex;
  justify-content: flex-start;
  color: #7a7a7a;
  font-size: 15px;
}

#owner-image {
  border-radius: 50%;
  width: 36px;
  height: 36px;
}


#title {
  padding-top: 3px;
  width: 310px;
  height: 40px;
  margin-right: 20px;
  font-weight: bold;
  font-family: sans-serif-bold, sans-serif;
  font-size: 16px;
}

#owner-name {
  color: #7a7a7a;
  font-size: 15px;
}

#view-count, #date {
  margin-right: 30px;
  margin-top: 10px;
}

</style>