# DevOps Capstone Project

## 📌 Project Title & Description
A Node.js web application deployed on AWS EC2 using a CI/CD pipeline.  
The pipeline integrates GitHub (source control), Jenkins (automation), Docker (containerization), and AWS EC2 (deployment).  
Monitoring is implemented with Prometheus and Grafana, while cron jobs handle backups and log cleanup.

---

## 🛠 Tech Stack
- Node.js (Application)
- Git + GitHub (Version Control)
- Jenkins (CI/CD)
- Docker + Docker Hub (Containerization & Registry)
- AWS EC2 (Hosting)
- Prometheus + Grafana + Node Exporter + cAdvisor (Monitoring)
- Bash + Cron (Automation)

---

## ⚙️ Setup Instructions (Local Build & Run)
```bash
# Clone the repository
git clone https://github.com/soodappans/Final-project.git
cd Final-project

# Install dependencies
npm install

# Run locally
npm start

# OR build Docker image
docker build -t nodejs-app .

# Run Docker container
docker run -d -p 3000:3000 nodejs-app
