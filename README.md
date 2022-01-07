#  TP - Olympiques Game


API REST avec Node.js, Express et MongoDB

![alt text](https://github.com/MikaPST/TP-OlympiquesGame/blob/main/public/assets/img/olympiqueGame.png?raw=true)

## Commencer

Ce projet fonctionnera sur **NodeJs** en utilisant **MongoDB** comme base de données. 

## Logiciels Requis

- Node.js **8+**
- MongoDB **3.6+** (Recommended **4+**)

## Comment Installer

### Utilisation Git (Conseillé)

1.  Clonez le projet depuis github. Remplacez "myproject" par le nom de votre projet.

```bash
git clone https://github.com/MikaPST/TP-OlympiquesGame.git ./myproject
```

### Télécharger et Installation Manuel

1.  Télécharger l'archive
2.  Décompressez dans le répertoire souhaité

### Installer les dépendances npm après l'installation (Git ou téléchargement manuel)

```bash
cd myproject
npm install
```

### Mise en place d'environnements

1. Vous trouverez un fichier nommé `config.js.exemple` sur le répertoire racine du projet.
2. Créez un nouveau fichier en copiant et en collant le fichier, puis en le renommant simplement « .env »
```bash
cp config.js.exemple config.js
```
3. Le fichier `config.js` est déjà ignoré, vous ne validez donc jamais vos informations d'identification.
4. Modifiez les valeurs du fichier dans votre environnement. Commentaires utiles ajoutés au fichier `config.js.exemple` pour comprendre les constantes.
```bash
host: "mongodb+srv://<utilisateur>:<mot_de_passe>@<name_bdd>.<id_bdd>.mongodb.net/test?retryWrites=true&w=majority"
 ```


## Comment Lancer

### Exécution du serveur API localement

```bash
npm start
```

Vous saurez que le serveur est en cours d'exécution en vérifiant la sortie de la commande `npm start`

```bash
Serveur lancé sur le port 3000 🚀
Connected to the database! ✅

Cliquez sur le lien http://localhost:3000/api/index/

Appuyez sur CTRL + C pour arrêter le processus.
```

Vous pouvez définir une commande personnalisée pour le test dans le fichier `package.json` dans la propriété `scripts`. Vous pouvez également modifier le délai d'attente pour chaque assertion avec le paramètre `--timeout` de la commande mocha.


## Exemple d'appel de l'API REST

Lister les sports :

```shell
curl http://localhost:3000/api/sports -H 'Content-Type: application/json'
```


## License

Ce projet est un logiciel open source sous licence MIT. Voir le fichier LICENSE pour plus d'informations.

