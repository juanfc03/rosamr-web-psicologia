---
description: Analyzes generated changes and performs one or several commits automatically
agent: build
---

Analyze the following changes detected in the repository:

File status:
!`git status -s`

Detail of unstaged changes:
!`git diff`

Detail of staged changes:
!`git diff --cached`

Your sole objective is to review the changes and execute git commands to save progress using Semantic Commits (Conventional Commits). Strictly follow these rules:

1. **Analyze the context**: Review the changes. If you detect new untracked files in 'git status', read their content to understand what they are about.
2. **Group logically**: If there are modifications from different areas, split them into several commits. If they correspond to a single task, group them.
3. **Semantic Format**: Strictly use Conventional Commits (e.g., `feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`).
4. **Language**: The descriptive commit message MUST always be in **SPANISH**.
5. **Action**: Directly execute the necessary `git add <file>` and `git commit -m "<type>: <message in spanish>"` commands. Do not give long explanations, just execute the commands to save progress.
