const stMixin = {
  data() {
    return {
      students: [],
    };
  },
  methods: {
    async getStudents() {
      await fetch("https://course-backend.onrender.com/")
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
  },
  async mounted() {
    await this.getStudents();
  },
};

export default stMixin;
