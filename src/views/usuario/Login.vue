<template>
    <v-container style="max-width: 500px">
      <v-text-field
        v-model="task"
        label="What are you working on?"
        solo
        @keydown.enter="create"
      >
        <v-fade-transition v-slot:append>
          <v-icon
            v-if="task"
            @click="create"
          >
            add_circle
          </v-icon>
        </v-fade-transition>
      </v-text-field>
  

  
    
  

  
    
        <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
   
  
  
  
      <v-card v-if="tasks.length > 0">
        <v-slide-y-transition class="py-0" group tag="v-list">
          <template v-for="(task, i) in tasks">
            
  
            <v-list-item :key="`${i}-${task.text}`">
              
              <v-list-item-action> 
                  <v-text-field v-model="task.done" color="info darken-3"> 
            </v-text-field> </v-list-item-action>
  
             
  
              <v-scroll-x-transition>

                <v-icon v-if="task.done" color="success">
                  check
                </v-icon>
                
              </v-scroll-x-transition>
              
            </v-list-item>
            
          </template>
        </v-slide-y-transition>
      </v-card>
    </v-container>
</template>
<script>
  export default {
    data: () => ({
      tasks: [
        {
          done: false,
          text: 'Foobar',
        },
        {
          done: false,
          text: 'Fizzbuzz',
        },
      ],
      task: null,
    }),

    computed: {
      completedTasks () {
        return this.tasks.filter(task => task.done).length
      },
      progress () {
        return this.completedTasks / this.tasks.length * 100
      },
      remainingTasks () {
        return this.tasks.length - this.completedTasks
      },
    },

    methods: {
      create () {
        this.tasks.push({
          done: false,
          text: this.task,
        })

        this.task = null
      },
    },
  }
</script>