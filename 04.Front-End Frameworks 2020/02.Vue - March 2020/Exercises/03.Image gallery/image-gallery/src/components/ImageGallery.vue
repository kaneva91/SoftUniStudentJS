<template>
  <div class="container">
    <h1>Image Gallery</h1>
    <p>The gallery has {{count}} images!</p>
    {{imageUrl}}
    <form @submit.prevent="addImage($event)">
      <h3>Add image to the galery:</h3>
      <div>
        <label for="img-source">Source:</label>
        <input v-model="imageUrl" id="img-source" type="text" placeholder="Your image source..." />
      </div>
      <div>
        <label for="img-alt">Alt:</label>
        <input v-model="alt" id="img-alt" type="text" placeholder="Your image alt..." />
      </div>
      <div>
        <label for="img-desc">Description:</label>
        <textarea v-model="description" id="img-desc" placeholder="Your image description..."></textarea>
      </div>
      <button class="btn-add">Submit</button>
    </form>

    <div class="gallery" v-for="(item, index) in gallery" v-bind:key="index">
      <img :src="item.imageUrl" :alt="item.alt" width="600" height="400" />
      <div>
        <p v-show="item.isDescShown">{{item.description}}</p>
        <button class="btn-description" @click="descriptionHandle(item, $event)">{{btnText}}</button>
        <button class="btn-remove" @click="removeImage(item)">Remove Image</button>
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
      btnText: "Show Description",
      imageUrl: "",
      alt: "",
      description: ""
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
        imageUrl: this.imageUrl,
        alt: this.alt,
        isDescShown: false,
        description: this.description
      };
      this.gallery = [...this.gallery, newImage];
      this.imageUrl = "";
      this.alt = "";
      this.description = "";
    },
    removeImage(item) {
      this.gallery = [...this.gallery.filter(a => a !== item)];
    }
  }
};
</script>


<style scoped>
div.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
}

form {
  border-bottom: 1px solid black;
}

input {
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

.btn-add {
  padding: 10px 15px;
  background: cornflowerblue;
  font-size: 16px;
}
.btn-add,
form {
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
  background: #008ac2;
}

.btn-remove {
  background: rgb(233, 59, 59);
}

.btn-description,
.btn-remove {
  padding: 6px 16px;
  color: #ccc;
  margin-bottom: 5px;
  outline: none;
  width: 140px;
}
</style>
