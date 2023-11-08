const courseModel = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://assets-global.website-files.com/5b6901669b93d7837e36dc4c/62e03c0734553571f405202d_615e177cd027d456769dd210_React-Native-1-p-500.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 2, // New course ID
    name: "Web Development with React",
    instructor: "Jane Smith",
    description: "Master web development using React.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://www.achieversit.com/management/uploads/course_image/react-img21.png",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic HTML and CSS knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "HTML and CSS Fundamentals",
        content: "Introduction to HTML and CSS.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 201,
        name: "Eva Wilson",
        email: "eva@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 3,
    name: " JavaScript Programming",
    instructor: "Sarah Johnson",
    description: "Take your JavaScript skills to the next level.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://images.theengineeringprojects.com/image/webp/2019/12/Introduction-to-JavaScript-with-complete-Guide-1.jpg.webp?ssl=1",
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Intermediate JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "JavaScript Fundamentals",
        content: "Deep dive into JavaScript core concepts.",
      },
      {
        week: 2,
        topic: "Asynchronous JavaScript",
        content: "Understanding and handling asynchronous code.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 301,
        name: "David Brown",
        email: "david@example.com",
      },
      {
        id: 302,
        name: "Emily Davis",
        email: "emily@example.com",
      },
      // Additional enrolled students...
    ],
  },
];

export default courseModel;
