<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        title="Who am I?"
      >
        I'm a backend developer born in Kediri, East Java, who have been working as Software Engineer since 2013.<br>
        I'm interested and skilled in different topics of Information Technology including programming, web development, and computer and network security.
      </content-section>
      <content-section
        v-if="prouds"
        title="What am I proud of?"
      >
        <v-layout
          v-for="(proud, i) in prouds"
          :key="i"
        >
          <v-flex
            md1
            xs3
          >
            <v-icon right>
              {{ proud.icon }}
            </v-icon>
          </v-flex>
          <v-flex
            md11
            xs9
          >
            <p>
              <strong>{{ proud.text }}</strong><br>
              <small>{{ proud.source }}</small>
            </p>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="educations"
        title="Education"
      >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md4>
            {{ education.from }} - {{ education.to }}
          </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="skills"
        id="to-timeline"
        title="Skills"
      >
        <v-layout wrap>
          <template
            v-for="(skill, i) in skills"
          >
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
              xs12
            >
              <div
                class="mr-2 ml-2"
              >
                <div class="align-center">
                  <v-icon
                    small
                  >
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                {{ skill.text }}
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    prouds: [
      {
        icon  : 'mdi-brain',
        text  : 'Analytical',
        source: '(Analytical skills)',
      },
      {
        icon  : 'mdi-heart',
        text  : 'Enjoy',
        source: '(I enjoy software development)',
      },
      {
        icon  : 'mdi-speedometer',
        text  : 'Engagement',
        source: '(I work in full engagement)',
      },
      {
        icon  : 'mdi-account-multiple',
        text  : 'Player',
        source: '(I could work either solo or being team player)',
      },
      {
        icon  : 'mdi-account-heart',
        text  : 'Reliable and trusted by clients.',
        source: '(Whilst some freelancers go AWOL when things gets tough, I always work it through to the end)',
      },
      {
        icon  : 'mdi-star',
        text  : '5-star Support',
        source: '(Sometimes delivering the job is half the work, I\'m always around to provide ongoing support)',
      },
    ],
    educations: [
      {
        from       : '2009',
        to         : '2015',
        title      : 'Bachelor\'s degree, System Information',
        location   : 'University of Gajayana Malang',
        description: 'Became a member of University Academic Association of Computer Science',
      },
    ],
    skills: [
      {
        title: 'PHP',
        icon : 'mdi-language-php',
        // value: 80,
        text : 'Experienced with Laravel, Yii2 and Code Igniter framework',
      },
      {
        title: 'NodeJS',
        icon : 'mdi-nodejs',
        // value: 75,
        text : 'Experienced with Express and NestJS framework',
      },
      {
        title: 'Golang',
        icon : 'mdi-language-go',
        // value: 70,
      },
      {
        title: 'Docker / Containerization',
        icon : 'mdi-docker',
        // value: 83,
      },
      { divider: true },
      {
        title: 'SQL',
        icon : 'mdi-database',
        // value: 75,
        text : 'Experienced with MySQL, Postgre, Oracle',
      },
      {
        title: 'NoSQL',
        icon : 'mdi-database',
        // value: 75,
        text : 'Experienced with MongoDB and Redis',
      },
      {
        title: 'Git',
        icon : 'mdi-git',
        // value: 80,
      },
      {
        title: 'CI/CD',
        icon : 'mdi-truck-fast',
        // value: 52,
      },
      { divider: true },
      {
        title: 'Traditional Server',
        icon : 'mdi-ubuntu',
        // value: 65,
        text : 'Experienced with Ubuntu and Centos Server',
      },
      {
        title: 'Cloud Server',
        icon : 'mdi-cloud-outline',
        // value: 70,
        text : 'Experienced with GCP and AWS',
      },
      {
        title: 'Web Application Security',
        icon : 'mdi-shield-lock',
        // value: 63,
      },
      {
        title: 'Test Driven Development',
        icon : 'mdi-test-tube',
        // value: 46,
      },
      { divider: true },
    ],
  }),
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>
