🚀 HackSpire 2025: Neural Knights Project

Welcome to the Neural Knights project for HackSpire 2025! This guide will help you get up and running with our cutting-edge development environment.

🧰 Prerequisites
Before diving in, make sure you have:

- Python 3.x (3.8+ recommended)
- Node.js (LTS version 18+ recommended)
- npm (included with Node.js)
- Git (for version control)

## Getting Started

### Python Environment Setup

1. **Create a Virtual Environment**

   Navigate to your project directory and create a new virtual environment:

   ```bash
   python -m venv venv
   ```

2. **Activate the Virtual Environment**

   Choose the appropriate command for your operating system:

   **Windows:**
   ```bash
   .\venv\Scripts\activate
   ```

   **macOS/Linux:**
   ```bash
   source venv/bin/activate
   ```

   You should see `(venv)` appear at the beginning of your command prompt, indicating the virtual environment is active.

3. **Install Python Dependencies**

   With the virtual environment activated, install the required packages:

   ```bash
   pip install -r server/flaskserver/requirements.txt
   ```

### Node.js Server Setup

1. **Navigate to Node Server Directory**

   ```bash
   cd server/nodeserver
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
neural-knights/
├── server/
│   ├── flaskserver/       # Python backend
│   │   └── requirements.txt
│   └── nodeserver/        # Node.js frontend
│       ├── package.json
│       └── ...
├── models/                # ML models
├── data/                  # Datasets
└── docs/   
```

## 🖥️ Development Workflow
- Flask Server: Handles ML model inference, data processing, and API endpoints
- Node.js Server: Provides the user interface and frontend logic
- Integration: Both servers communicate via RESTful API calls



## ⚠️Troubleshooting 

- Port conflicts: Ensure ports 3000 (Node) and 5000 (Flask) are available
- Dependency errors: Verify your Python/Node versions match requirements
- Path issues: Check relative paths for different operating systems
- Virtual env problems: Ensure activation before installing packages

## Contributing

Please read our contributing guidelines before submitting pull requests to the project.

## 🙏 Acknowledgments
- HackSpire 2025 organizers
- Neural Knights team members

Built with ❤️ by Neural Knights for HackSpire 2025