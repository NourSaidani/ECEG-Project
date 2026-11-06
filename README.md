# 🚌 ECEG (Easy Come Easy Go) - Backend API

Projet de backend pour l'application de transport interurbain et de réservation **ECEG**.

## 🚀 Fonctionnalités implémentées

- **Réservation Client** (`POST /api/reservations/create`) : Permet de réserver un trajet et génère automatiquement un QR Code au format Data URL.
- **Validation Chauffeur** (`POST /api/reservations/validate-ticket`) : Permet au chauffeur de vérifier un billet et empêche la réutilisation d'un billet déjà scanné.

## 🛠️ Technologies utilisées

- **Node.js** & **Express**
- **qrcode** (Génération de QR codes)
- **cors**

## 💻 Instructions d'installation et de lancement

1. Installer les dépendances :
   ```bash
   npm install
Le fichier **`README.md`** doit être créé et collé **directement dans VS Code**, dans le même dossier où se trouvent vos autres fichiers (`server.js`, `db.js`, etc.).

Voici exactement où et comment le mettre en 3 étapes rapides :

---

### Étape 1 : Créer le fichier dans VS Code

1. Regardez le panneau de gauche dans **VS Code** (là où vous voyez `server.js`, `db.js`, `test.http`).
2. Cliquez sur l'icône **Nouveau fichier** (la petite feuille avec un **`+`** tout en haut à côté de `ECEG-app`).
3. Tapez exactement le nom : `README.md` et appuyez sur **Entrée**.

---

### Étape 2 : Coller le texte propre

Cliquez dans le grand espace noir à droite qui vient de s'ouvrir pour `README.md`, puis copiez-collez ce texte propre :

```markdown
# 🚌 ECEG (Easy Come Easy Go) - Backend API

Projet de backend pour l'application de transport interurbain et de réservation **ECEG**.

## 🚀 Fonctionnalités implémentées

- **Réservation Client** (`POST /api/reservations/create`) : Permet de réserver un trajet et génère automatiquement un QR Code au format Data URL.
- **Validation Chauffeur** (`POST /api/reservations/validate-ticket`) : Permet au chauffeur de vérifier un billet et empêche la réutilisation d'un billet déjà scanné.

## 🛠️ Technologies utilisées

- **Node.js** & **Express**
- **qrcode** (Génération de QR codes)
- **cors**

## 💻 Instructions d'installation et de lancement

1. Installer les dépendances :
   ```bash
   npm install

```

2. Démarrer le serveur :
```bash
node server.js

```


Le serveur sera accessible sur `http://localhost:3000`.

## 🧪 Tests des API

Les tests des endpoints peuvent être exécutés directement dans VS Code via l'extension **REST Client** en utilisant le fichier `test.http`.

```

> **Sauvegardez le fichier** en appuyant sur `Ctrl + S`.

---

### Étape 3 : Envoyer sur GitHub depuis le terminal VS Code

Dans le terminal en bas de VS Code, tapez ces **3 commandes une par une** (en appuyant sur Entrée après chacune) :

1. `git add .`
2. `git commit -m "Ajout README"`
3. `git push origin main`

---

Une fois ces 3 commandes exécutées, votre page GitHub affichera automatiquement une magnifique présentation de votre projet juste sous vos fichiers !

```