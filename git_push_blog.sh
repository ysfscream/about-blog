#git 命令自动 push 或 rebase
#!/bin/bash
read -p "push or rebase: " oper
if [ $oper == "push" ]
then
  git add -A
  git status
  read -p "Check that the files changes are correct. [y/n]: " variable
  if [ $variable == "y" ]
  then
    git commit -m "docs: Add the document"
    git push origin master
  else
    echo "It's not pushed"
  fi
else
  git add -A
  git commit -m "rebase"
  git rebase -i HEAD~2
  read -p "Modified to complete. [y/n]: " variable
  if [ $variable == "y" ]
  then
    git push origin master -f
  else
    echo "It's not rebase"
  fi
fi