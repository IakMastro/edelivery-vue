<template>
  <div class="row row-cols-3">
    <div class="col" v-for="(market, index) in markets" :key="index">
      <b-card
        v-bind:title="market.name"
        v-bind:img-src="market.image_source"
        v-bind:img-alt="market.name"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Το μαγαζί βρίσκετε {{ market.distance }} μετρά μακρυά από το σπίτι σας!
        </b-card-text>

        <b-button href="#" variant="primary">Επιλογή {{ market.name }}</b-button>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Market from '@/lib/market'

export default defineComponent({
  data() {
    return {
      markets: [] as Market[]
    }
  },

  methods: {

  },

  setup() {
    document.title = "E-Delivery - Επιλογή καταστήματος"
  },

  created() {
    // Dummy data, expecting JSON format from REST api
    let MARKETS = [
      {
        '_id': '12345',
        'name': 'Σκλαβενίτης',
        'img_src': 'https://external-content.duckduckgo.com/iu/?u=http%3a%2f%2fonesalonica.com%2fmedia%2f219548%2fskl-onesalonica-vector-1.jpg%3fanchor%3dcenter%26mode%3dcrop%26width%3d1440%26height%3d720%26rnd%3d131370648980000000&f=1&nofb=',
        'distance': 150
      },
      {
        '_id': '12346',
        'name': 'Lidl',
        'img_src': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F12%2FLidl-Emblem.png&f=1&nofb=1',
        'distance': 300
      },
      {
        '_id': '12347',
        'name': 'ΑΒ Μαρινόπουλος',
        'img_src': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fflashnews.gr%2Fstorage%2Fphotos%2Fw_800px%2F201610%2Fab-basilopoylos-logo.png&f=1&nofb=1',
        'distance': 450
      }
    ]

    // Parsing data
    MARKETS.forEach(market => {
      this.markets.push({
        name: market.name,
        image_source: market.img_src,
        distance: market.distance
      })
    });
  }
})
</script>
