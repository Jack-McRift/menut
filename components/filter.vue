<template>
  <v-container justify-center class="pa-10">
    <v-row>
      <v-spacer />
      <v-icon color="black">
        mdi-filter-outline
      </v-icon>
      <v-text class="text-h6 black--text">
        Filtrar por
      </v-text>
      <v-spacer />
      <v-btn icon color="primary" to="">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <h3 class="primary--text">
        <br><br> Alergenos
      </h3>
      <v-text> No mostrar los alimentos que contengan:</v-text>
      <v-col
        v-for="n in 9"
        :key="n"
        cols="4"
      >
        <v-btn outlined height="80" retain-focus-on-click>
          <v-icon>mdi-jellyfish-outline</v-icon>
        </v-btn>
        <v-card-subtitle class="font-weight-light pa-2">
          Pescado
        </v-card-subtitle>
      </v-col>
    </v-row>
    <v-row>
      <h3 class="primary--text">
        <br> Estilo de vida
      </h3>
      <v-text>Solo mostrar alimentos que sean aptos para:</v-text>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="4"
      >
        <v-btn outlined height="80" retain-focus-on-click>
          <v-icon>mdi-jellyfish-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.inline{
  display: inline;
}
.center{
  text-align: center;
}
.red{
  color:red
}
</style>
