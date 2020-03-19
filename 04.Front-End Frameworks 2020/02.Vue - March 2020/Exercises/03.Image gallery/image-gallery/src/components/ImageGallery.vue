<template>

  <div class="container">
     <form >
      <label for="img-source">Source:</label>
      <input  type="text" id="img-source" placeholder="Your image source..." />

      <label for="img-alt">Alt:</label>
      <input type="text" id="img-alt" placeholder="Your image alt..." />

      <label for="img-desc">Description:</label>
      <textarea type="text" id="img-desc" placeholder="Your description..."></textarea>

      <input class="btn-add" type="submit" value="Submit" />
    </form>
    <div class="gallery" v-for="(item, index) in gallery" v-bind:key="index">
      <img :src="item.imageUrl" :alt="item.alt" width="600" height="400" />
     <div> 
        <p v-show="item.isDescShown">{{item.description}}</p>
       <button class="btn-description" @click="descriptionHandle(item, $event)">{{btnText}}</button></div>
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
          description: "Add a description of the image here"
        },
        {
          imageUrl: "imgs/img_forest.jpg",
          alt: "Forest",
          isDescShown: false,
          description: "Add a description of the image here"
        },
        {
          imageUrl: "imgs/img_lights.jpg",
          alt: "Northern Lights",
          isDescShown: false,
          description: "Add a description of the image here"
        },
        {
          imageUrl: "imgs/img_mountains.jpg",
          alt: "Mountains",
          isDescShown: false,
          description: "Add a description of the image here"
        }
      ],
      btnText: "Show More"
    };
  },
  methods: {
    descriptionHandle(item, event) {
      if (event.target.textContent === "Show More") {
        item.isDescShown = true;
        event.target.textContent = "Show less";
      } else {
        item.isDescShown = false;
        event.target.textContent = "Show More";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  /*   display : flex;
  justify-content: center; */
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px; /* 3 */
  padding-left: 10px; /* 3 */
}

div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
  -webkit-box-shadow: 3px 3px 5px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 3px 3px 5px -2px rgba(0, 0, 0, 0.58);
  box-shadow: 3px 3px 5px -2px rgba(0, 0, 0, 0.58);
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
  background: #008AC2;
  color: #ccc;
  margin-bottom: 5px;
  outline: none;
}
</style>
