const { createApp } = Vue;

createApp({
    data() {
        return {
            studentName: "Zeinab",

           

            courses: [
                {
                    name: "Vue 3",
                    completed: false
                },
                {
                    name: "JavaScript",
                    completed: false
                },
                {
                    name: "TypeScript",
                    completed: false
                }
            ]
        };
    },
    computed: {
        totalCourses() {
            return this.courses.length;
        },
    
        completedCourses() {
            return this.courses.filter(course => course.completed).length;
        }
    },
    methods: {
        changeName() {
            this.studentName = "Vue Student";
        },

        toggleCourse(course) {
            course.completed = !course.completed;
        },
       
       
    }
}).mount("#app");