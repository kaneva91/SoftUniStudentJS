<template>
  <div class="container">
    <h1>Image Gallery</h1>
    <p>The gallery has {{count}} images!</p>
    <form @submit.prevent="addImage($event)">
      <h3>Add image to the galery:</h3>
      <div>
        <label for="img-source">Source:</label>
        <input ref="image_url" type="text" placeholder="Your image source..." />
      </div>
      <div>
        <label for="img-alt">Alt:</label>
        <input ref="image_alt" type="text" placeholder="Your image alt..." />
      </div>
      <div>
        <label for="img-desc">Description:</label>
        <textarea ref="image_description" placeholder="Your image description..."></textarea>
      </div>
      <button class="btn-add">Submit</button>
    </form>

    <div class="gallery" v-for="(item, index) in gallery" v-bind:key="index">
      <img :src="item.imageUrl" :alt="item.alt" width="600" height="400" />
      <div>
        <p v-show="item.isDescShown">{{item.description}}</p>
        <button class="btn-description" @click="descriptionHandle(item, $event)">{{btnText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageGallery",
  data: function() {
    return {
      gallery: [
        {
          imageUrl: "imgs/img_5terre.jpg",
          alt: "Cinque Terre",
          isDescShown: false,
          description: "Cinque Terre"
        },
        {
          imageUrl: "imgs/img_forest.jpg",
          alt: "Forest",
          isDescShown: false,
          description: "Forest"
        },
        {
          imageUrl: "imgs/img_lights.jpg",
          alt: "Northern Lights",
          isDescShown: false,
          description: "Northern Lights"
        },
        {
          imageUrl: "imgs/img_mountains.jpg",
          alt: "Mountains",
          isDescShown: false,
          description: "Mountains"
        }
      ],
      btnText: "Show Description"
    };
  },
  computed: {
    count() {
      return this.gallery.length;
    }
  },
  methods: {
    descriptionHandle(item, event) {
      if (event.target.textContent === "Show Description") {
        item.isDescShown = true;
        event.target.textContent = "Hide Description";
      } else {
        item.isDescShown = false;
        event.target.textContent = "Show Description";
      }
    },
    addImage() {
      const newImage = {
        imageUrl: this.$refs.image_url.value,
        alt: this.$refs.image_alt.value,
        isDescShown: false,
        description: this.$refs.image_description.value
      };
      this.gallery = [...this.gallery, newImage];
      this.$refs.image_url.value = "";
      this.$refs.image_alt.value = "";
      this.$refs.description.value = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
}

form {
  border-bottom: 1px solid black;
}

input{
   width: 30%;
}

textarea {
  width: 50%;
  height: 60px;
}

input,
textarea {
  display: block;
  margin: 8px auto;
}

.btn-add{
  padding: 10px 15px;
  background: cornflowerblue;
  font-size: 16px;
 
}
.btn-add, form{
   margin-bottom: 30px;
}

div.gallery {
  margin: 5px;
  border: 1px solid #ccc;

  width: 180px;
  -webkit-box-shadow: 3px 3px 5px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 3px 3px 5px -2px rgba(0, 0, 0, 0.58);
  box-shadow: 3px 3px 5px -2px rgba(0, 0, 0, 0.58);
  float: left;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
  background: darkblue;
}

.btn-description {
  padding: 6px 16px;
  background: #008ac2;
  color: #ccc;
  margin-bottom: 5px;
  outline: none;
}
</style>
