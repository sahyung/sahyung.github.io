<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Andhi <span class="light-blue--text text--lighten-3">Arifin</span>
        </h1>
        <span>
          A challenge-loving backend developer
        </span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />

      <sidebar-section :options="sections.languages">
        <template v-slot:items="{items}">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template
                v-for="(item, i) in items"
              >
                <v-flex
                  :key="i"
                  md3
                  sm4
                  xs6
                >
                  <a
                    v-if="item.link"
                    class="grey--text"
                    :href="item.link"
                    target="_blank"
                  >
                    <v-progress-circular
                      rotate="360"
                      size="65"
                      width="2"
                      :value="item.value"
                      color="white"
                      class="ma-2"
                    >
                      {{ item.text }}
                    </v-progress-circular>
                  </a>
                  <span
                    v-else
                  >
                  <v-progress-circular
                    rotate="360"
                    size="65"
                    width="2"
                    :value="item.value"
                    color="white"
                    class="ma-2"
                  >
                    {{ item.text }}
                  </v-progress-circular>
                  </span>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{item}">
          <v-chip>
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: 'Phone',
              icon: 'mdi-whatsapp',
              text: '+62 8990431219',
              link: 'https://wa.me/628990431219',
            },
            {
              name: 'Email',
              icon: 'mdi-email',
              text: 'ende.astro@gmail.com',
              link: 'mailto:ende.astro@gmail.com',
            },
            {
              name: 'Habitation',
              icon: 'mdi-map-marker',
              text: 'Yogyakarta, Indonesia',
              link: 'https://s.id/sendowo-A7',
            },
          ],
        },
        socials: {
          title: 'SOCIALS',
          items: [
            {
              icon: 'mdi-github',
              text: 'github.com/sahyung',
              link: 'https://github.com/sahyung',
            },
            {
              icon: 'mdi-linkedin',
              text: 'linkedin.com/in/sahyung',
              link: 'https://linkedin.com/in/sahyung',
            },
            {
              icon: 'mdi-telegram',
              text: 'telegram.com/sahyung',
              link: 'https://t.me/sahyung',
            },
          ],
        },
        hobbies: {
          title: 'HOBBIES',
          items: [
            {
              icon: 'mdi-bullseye',
              text: 'Getting out of Safe Zone',
            },
            {
              icon: 'mdi-biohazard',
              text: 'Challenges',
            },
            {
              icon: 'mdi-bike',
              text: 'Cycling',
            },
            {
              icon: 'mdi-image-filter-hdr',
              text: 'Nature',
            },
            {
              icon: 'mdi-auto-fix',
              text: 'Hacking Stuffs',
            },
            {
              icon: 'mdi-karate',
              text: 'Sports',
            },
            {
              icon: 'mdi-music',
              text: 'Music',
            },
            {
              icon: 'mdi-book-open-page-variant',
              text: 'Books',
            },
            {
              icon: 'mdi-android-debug-bridge',
              text: 'Tickling Bugs!',
            },
          ],
        },
        languages: {
          title: 'LANGUAGES',
          items: [
            {
              text : 'English',
              value: 88,
              link : 'https://www.efset.org/cert/3HDw5q',
            },
            {
              text : 'Indonesia',
              value: 100,
            },
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.sidebar{
    background: #2e2e2e;
}
</style>
