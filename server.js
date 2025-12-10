const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const courses = [
  { id: 1, name: "DevOps Course", img: "/images/devops.jpg", desc: "Learn CI/CD, Jenkins, Docker, Kubernetes, AWS." },
  { id: 2, name: "Cloud Engineer", img: "/images/cloud.jpg", desc: "Master cloud architecture, networking, automation." },
  { id: 3, name: "AWS Advanced", img: "/images/aws.jpg", desc: "Deep dive into EC2, S3, IAM, Lambda, AWS DevOps." }
];

app.get("/", (req, res) => res.render("index", { courses }));

app.get("/course/:id", (req, res) => {
  const course = courses.find(c => c.id == req.params.id);
  res.render("course", { course });
});

app.get("/register/:courseId", (req, res) => {
  const course = courses.find(c => c.id == req.params.courseId);
  res.render("register", { course });
});

app.post("/register", (req, res) => {
  res.send("<script>alert('Thanks! We will get back to you soon.'); window.location.href='/'</script>");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
