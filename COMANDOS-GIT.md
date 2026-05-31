ecommerce-api-git
comandos git
crear rama
````
git checkout -b JIRA-003
````
visualizar status de cambios
````
git status
git status -s

````
incluir al stage
````
git add .
git add archivo_especifico.py
````
comprometer o seleccionar cambios para subir al repositorio remoto
````
git commit -m "feat: new function calcular resta"

````
configuraciones basicas
````
git config --global user.name "Diego Calderon"
git config --global user.email "dmcalderonc97@gmail.com"
git config --global core.editor "code --wait"
git config --global color.ui auto
git config --global init.defaultBranch main
````
consultar configuraciones
````
git config --list
git config user.name


git log --oneline --graph --all
git log --stat
git log -p
git log -S
git log --oneline -10
````
git por fecha
````
git log after="2026-01-01"
git log before="2026-01-01"
git log after="2026-01-01" git log before="2026-01-01"

````
Consultar commit especifico
````
git show -----
git show -----  --name only
git show -----  --stat

