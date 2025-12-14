# How to Push Your Code to GitHub (Step-by-Step Guide)

Since you are a beginner, here is a simple guide to get your code into your Git account (GitHub, GitLab, etc.).

## Prerequisite: Do you have a Repository?
1. Go to your GitHub account (https://github.com).
2. Click the **+** icon in the top right and select **New repository**.
3. Name it `tender-app` (or whatever you like).
4. **Important:** Do NOT check "Add a README", "Add .gitignore", or "Choose a license" (keep it empty).
5. Click **Create repository**.

## Step 1: Initialize Git locally
Open your terminal (in VS Code, press `Ctrl + J` or `Ctrl + ` ` `) and make sure you are in the `tender-app` folder.

Run these commands one by one:

```powershell
# 1. Initialize Git in your project
git init

# 2. Add all your files to the staging area
git add .

# 3. Commit your files (save them)
git commit -m "Initial commit of TenderAI dashboard"

# 4. Rename the default branch to 'main' (standard practice)
git branch -M main
```

## Step 2: Connect to GitHub
Copy the URL of the repository you created in the "Prerequisite" step. It looks like:
`https://github.com/YOUR_USERNAME/tender-app.git`

Run this command in your terminal (replace the URL with your actual one):

```powershell
# 5. Link your local folder to GitHub
git remote add origin https://github.com/YOUR_USERNAME/tender-app.git
```

## Step 3: Push your code
Now upload your code to GitHub:

```powershell
# 6. Push the code
git push -u origin main
```

---

## Common Issues
- **"Please tell me who you are"**: If you see this, you need to configure your username/email:
  ```powershell
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
  ```
- **"remote origin already exists"**: If you made a mistake adding the URL, you can remove it and try again:
  ```powershell
  git remote remove origin
  ```
