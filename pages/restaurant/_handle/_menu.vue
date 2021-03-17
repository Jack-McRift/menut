<template>
  <v-app>
    <!-- app-bar -->
    <v-app-bar
      ref="box"
      fixed
      app
      light
      shrink-on-scroll
      prominent
      src="https://www.bizzbeginnings.com/wp-content/uploads/2017/08/chairs-2179044_960_720.jpg"
      fade-img-on-scroll
      height="130"
      elevation="1"
    >
      <v-btn icon to="/">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-app-bar-title>
        Menuit
      </v-app-bar-title>
      <v-spacer />

      <language-select />
    </v-app-bar>
    <!-- filter -->
    <v-dialog
      v-model="filter"
      scrollable
      fullscreen
      persistent
      transition="dialog-bottom-transition"
    >
      <div class="overlay-container">
        <v-container justify-center class="pa-10 background">
          <v-row>
            <v-spacer />
            <v-icon color="black">
              mdi-filter-outline
            </v-icon>
            <div class="text-h6 black--text font-weight-light">
              Filtrar por
            </div>
            <v-spacer />
            <v-btn icon color="primary" @click="filter = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-row>
          <v-row>
            <h3 class="primary--text">
              <br><br> Alergenos
            </h3>
            <v-text> No mostrar los alimentos que contengan:</v-text>
            <v-col
              v-for="n in 11"
              :key="n"
              cols="3"
              class="less-height"
            >
              <filterTile />
            </v-col>
          </v-row>
          <v-row class="less-height">
            <h3 class="primary--text">
              <br> Estilo de vida
            </h3>
            <v-text>Solo mostrar alimentos que sean aptos para:</v-text>
            <v-col
              v-for="n in 3"
              :key="n"
              cols="3"
            >
              <filterTile />
            </v-col>
            <v-btn class="px-16 py-6  font-weight-light" dark>
              Aplicar Filtros
            </v-btn>
          </v-row>
        </v-container>
      </div>
    </v-dialog>
    <!-- content -->
    <main class="d-flex justify-center">
      <v-list light class="top-space">
        <v-list-item v-for="(list, index) in menuData" :key="index">
          <v-container>
            <v-row>
              <v-list-item-title class="text-h6 font-weight-black work-sans">
                {{ list.categoryName }}
              </v-list-item-title>
            </v-row>
            <v-row>
              <v-list class="block">
                <v-list-item
                  v-for="(item, i) in list.items"
                  :key="i"
                  three-line
                >
                  <v-list-item-content>
                    <v-list-item-title class="text-body-1 font-weight-bold space-between-items">
                      {{ i+1 }}.{{
                        item.name
                      }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="font-weight-light space-between-items">
                      {{ item.description }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="space-between-items">
                      <svg xmlns="http://www.w3.org/2000/svg" width="9.699" height="10.063" viewBox="0 0 9.699 10.063">
                        <g id="Group_4_Copy" data-name="Group 4 Copy" transform="translate(-0.122 -0.105)">
                          <g id="Triangle" transform="translate(10.18 10.306) rotate(180)" fill="#d0021b" stroke-miterlimit="10">
                            <path d="M 1.531743288040161 8.110586166381836 C 1.51300323009491 8.110586166381836 1.49427318572998 8.110245704650879 1.475413203239441 8.109556198120117 C 1.223173260688782 8.100296020507812 0.995843231678009 7.976135730743408 0.8517232537269592 7.76891565322876 C 0.7075932025909424 7.561685562133789 0.6703032255172729 7.305365562438965 0.7493932247161865 7.065655708312988 L 2.411787509918213 2.027687788009644 L 8.674723625183105 0.7569445967674255 L 3.834303140640259 3.936375856399536 L 3.718913316726685 4.012175559997559 L 3.686333179473877 4.146335601806641 L 3.005253314971924 6.951465606689453 C 2.839553117752075 7.633935928344727 2.233623266220093 8.110586166381836 1.531743288040161 8.110586166381836 Z" stroke="none" />
                            <path d="M 6.965549468994141 1.460864067077637 L 2.680506706237793 2.330294609069824 L 1.081772804260254 7.175335884094238 C 1.021142959594727 7.359075546264648 1.091643333435059 7.500885963439941 1.139053344726562 7.569065570831299 C 1.18647289276123 7.637245655059814 1.294902801513672 7.752685546875 1.488253593444824 7.759785652160645 C 1.502822875976562 7.760325908660889 1.51727294921875 7.760585784912109 1.531743049621582 7.760585784912109 C 2.071602821350098 7.760585784912109 2.537663459777832 7.393905639648438 2.665132999420166 6.86888599395752 L 3.346213340759277 4.063755512237549 L 3.411363124847412 3.795435905456543 L 3.642143249511719 3.643845558166504 L 6.965549468994141 1.460864067077637 M 9.975374221801758 0.1377506256103516 C 10.05390357971191 0.1377506256103516 10.09167194366455 0.2449703216552734 10.01979351043701 0.2921857833862305 L 4.026453018188477 4.228915691375732 L 3.345373153686523 7.034045696258545 C 3.141541004180908 7.873576164245605 2.389703273773193 8.460585594177246 1.531742095947266 8.460585594177246 C 1.508728981018066 8.460585594177246 1.48574161529541 8.460165977478027 1.462583541870117 8.459315299987793 C 0.7004432678222656 8.43134593963623 0.1780433654785156 7.680235862731934 0.4170236587524414 6.955986022949219 L 2.143083572387695 1.725075721740723 L 9.956973075866699 0.1396455764770508 C 9.963316917419434 0.1383590698242188 9.969462394714355 0.1377506256103516 9.975374221801758 0.1377506256103516 Z" stroke="none" fill="#d0021b" />
                          </g>
                          <path
                            id="Path_14"
                            data-name="Path 14"
                            d="M.267,1.678a7.794,7.794,0,0,0,.141-1A2.321,2.321,0,0,0,.267,0"
                            transform="translate(8.593 0.557)"
                            fill="none"
                            stroke="#d0021b"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            stroke-width="0.7"
                          />
                        </g>
                      </svg> <svg id="veg" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                        <g id="veg-2" data-name="veg" transform="translate(0.496 0.065)">
                          <g id="Group_6_Copy_3" data-name="Group 6 Copy 3">
                            <g id="Triangle" transform="matrix(0.719, 0.695, -0.695, 0.719, 7.84, 0)" fill="#417505" stroke-miterlimit="10">
                              <path d="M 3.569178342819214 10.93561267852783 C 3.261258125305176 10.93561267852783 2.62047815322876 10.51926326751709 2.263828277587891 10.22362327575684 L 2.257738351821899 10.21857261657715 L 2.251288175582886 10.2136926651001 C 2.230234622955322 10.19768333435059 0.1277819275856018 8.567685127258301 0.3699109852313995 6.140771865844727 L 3.998991250991821 0.7419998049736023 L 5.250948429107666 5.204432964324951 L 5.265758037567139 5.257213115692139 L 5.295988082885742 5.302923202514648 C 7.089898109436035 8.016133308410645 5.15526819229126 9.771122932434082 5.072038173675537 9.844503402709961 L 5.063638210296631 9.851913452148438 L 5.054718017578125 9.860733032226562 C 4.564638137817383 10.35194301605225 3.866618156433105 10.90208339691162 3.59345817565918 10.93432331085205 C 3.586238145828247 10.93518257141113 3.578078269958496 10.93561267852783 3.569178342819214 10.93561267852783 Z" stroke="none" />
                              <path d="M 3.866700887680054 1.566180229187012 L 0.7106900215148926 6.261194705963135 C 0.5464320182800293 8.43902587890625 2.444423198699951 9.920746803283691 2.462258338928223 9.934423446655273 L 2.475158214569092 9.944212913513184 L 2.487038135528564 9.954043388366699 C 2.859509944915771 10.26209545135498 3.369756937026978 10.56163692474365 3.555617570877075 10.58441543579102 C 3.77075719833374 10.5180606842041 4.356275081634521 10.06479072570801 4.806757926940918 9.613713264465332 L 4.820278167724609 9.599002838134766 L 4.841458320617676 9.581134796142578 C 4.874153137207031 9.551005363464355 5.317281723022461 9.133472442626953 5.55473804473877 8.446502685546875 C 5.873698234558105 7.52375316619873 5.688408374786377 6.531053066253662 5.0040283203125 5.495963096618652 L 4.943568229675293 5.404522895812988 L 4.913958549499512 5.298983097076416 L 3.866700887680054 1.566180229187012 M 4.10808277130127 -9.5367431640625e-07 C 4.133536338806152 -9.5367431640625e-07 4.158722877502441 0.01566791534423828 4.16675853729248 0.04430294036865234 L 5.58793830871582 5.109892845153809 C 7.58244800567627 8.126482963562012 5.302548408508301 10.10787296295166 5.302548408508301 10.10787296295166 C 5.302548408508301 10.10787296295166 4.198748588562012 11.21530342102051 3.634488344192505 11.2819128036499 C 3.613376379013062 11.28440475463867 3.591514825820923 11.28561019897461 3.569177627563477 11.28561019897461 C 2.994495868682861 11.28561019897461 2.040318012237549 10.49296283721924 2.040318012237549 10.49296283721924 C 2.040318012237549 10.49296283721924 -0.2960715293884277 8.727943420410156 0.0314784049987793 6.016862869262695 L 4.057998180389404 0.02684307098388672 C 4.070270538330078 0.008584022521972656 4.089251518249512 -9.5367431640625e-07 4.10808277130127 -9.5367431640625e-07 Z" stroke="none" fill="#417505" />
                            </g>
                            <path
                              id="Path_15"
                              data-name="Path 15"
                              d="M0,1.31A8.984,8.984,0,0,1,.363.453C.506.192.631,0,.631,0"
                              transform="translate(2.104 10.378)"
                              fill="none"
                              stroke="#417505"
                              stroke-linecap="round"
                              stroke-miterlimit="10"
                              stroke-width="0.7"
                            />
                          </g>
                        </g>
                      </svg>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="space-between-item font-weight-bold">
                      {{ item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <NuxtLink :to="`/itemView/${item.id}`" class="noLine">
                    <v-img :src="item.imgUrl" class="item-image" />
                  </NuxtLink>
                </v-list-item>
                <v-divider />
              </v-list>
            </v-row>
          </v-container>
        </v-list-item>
      </v-list>
    </main>
  </v-app>
</template>

<script>
import filterTile from '~/components/filterTile.vue'
export default {
  components: {
    filterTile
  },
  data: () => ({
    absolute: true,
    overlay: false,
    dialog: false,
    search: '',
    filter: false,
    lastScrollPosition: 0,
    btnState: false,
    carList: [],
    tabBtn: false,
    headers: [
      { text: 'Imagen', value: 'imgUrl' },
      { text: 'Nombre', value: 'title' },
      { text: 'Precio', value: 'price' },
      { text: 'Ver item', value: 'itemView' }
    ],
    menuData: []
  }),
  async mounted () {
    this.menuData = await this.$axios.$get(`https://localhost:5001/api/menuitems/r/${this.$route.params.menu}`)
  },
  methods: {
    orderSubtotal () {
      let subtotal = 0
      for (let i = 0; i < this.carList.length; i++) {
        subtotal += this.carList[i].price * this.carList[i].quantity
      }
      return subtotal
    },
    add (item) {
      item.quantity += 1
      if (!item.isInCar) {
        this.carList.push(item)
        item.isInCar = true
      }
    },
    subtract (item) {
      if (item.quantity > 0) { item.quantity -= 1 }
      if (item.quantity === 0) {
        this.carList = this.carList.filter(i => i.id !== item.id)
        item.isInCar = false
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
.noLine{
  text-decoration: none;
}
.v-toolbar__extension{
  background: rgb(245, 245, 245);
}
.image{
  height: 5rem;
  padding-top: .5rem;
}
.fix-btn{
  bottom: 1rem;
  right: 1rem;
}
/* .bottom{
  position: absolute;
  bottom: 1rem;
} */
.inline{
  display: inline;
}
.center{
  text-align: center;
}
.background{
  background: white;
  width: 375px;
  height: 100%;
}
.v-list-item{
  padding: 0 0 10px 10px;
}
.not-show{
  display: none;
}
.container{
  padding: 5px 5px 30px;
}
.item-image{
  position: relative;
  width: 5.4rem;
  right: 1.5rem;
  top: 20px;
}
.space-between-items{
  padding: 4px 0px 4px 4px;
  font-family: 'Work Sans', sans-serif;
}
.work-sans{
  font-family: 'Work Sans', sans-serif;
}
.text-h6{
  padding-left: 15px;
}
.top-space{
  margin-top: 30px;
}
.size{
  width: 2rem;
}
.tabs{
  position: relative;
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
  padding-bottom: 6px;
}
.less-height{
  height: 85px;
}
.py-6{
  width: 80%;
  position: fixed;
  left: 10vw;
  bottom: 10vw;
}
.overlay-container{
  width: 100vw;
  background: white;
}
</style>
