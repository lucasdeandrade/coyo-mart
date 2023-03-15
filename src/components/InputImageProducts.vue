<template>
  teste
  <!-- <input type="file" ref="fileInput" @change="onFileChange" /> -->
</template>



<!-- <script>
import fs from 'fs'

export default {
  data() {
    return {
      imageUrl: null
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.imageUrl = reader.result
        this.saveImage(file)
      }
    },
    saveImage(file) {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onload = () => {
        const arrayBuffer = reader.result
        const uint8Array = new Uint8Array(arrayBuffer)
        const path = './assets/' + file.name
        fs.writeFile(path, uint8Array, (err) => {
          if (err) throw err
          console.log('Image saved.')
        })
      }
    }
  }
}
</script>
 -->
