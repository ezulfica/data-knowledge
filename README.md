# Data Knowledge

Une bibliothèque personnelle de veille, d’apprentissage et de pratique pour la data et l’IA.

## Démarrer

```bash
npm install
npm run dev
```

Le site est construit statiquement avec Astro. `npm run build` génère le site et l’index Pagefind dans `dist/`.

## Ajouter du contenu

Ajoutez un fichier Markdown ou MDX dans l’une de ces collections :

- `src/content/news/` pour une analyse de veille ;
- `src/content/articles/` pour un article pédagogique ;
- `src/content/exercises/` pour un exercice de raisonnement.

Les métadonnées sont validées au build. Un nouveau contenu apparaît automatiquement dans les sections correspondantes. Les exemples dans le dépôt servent de modèles.

La stratégie de sélection des sources et le processus de publication sont décrits dans [la politique de veille](docs/veille.md).

## Workflow éditorial assisté par IA

Data Knowledge est conçu pour être maintenu par un workflow éditorial piloté par IA : l’agent collecte les signaux, retrouve les sources primaires, élimine les doublons, évalue la pertinence, prépare les contenus MDX et relie les nouveautés aux articles et exercices existants. Le site reste entièrement statique : les contenus validés sont versionnés dans Git puis publiés par GitHub Actions.

Le workflow actuel est volontairement semi-automatique : l’agent prépare les propositions et les fichiers de contenu, puis une validation éditoriale humaine précède le commit sur `main`. Cette étape protège la qualité des sources et empêche la publication automatique de contenus incomplets ou inexacts.

À terme, le registre de sources prévu dans [la politique de veille](docs/veille.md) alimentera une boîte de réception de sujets. Il ne devra pas contourner cette validation éditoriale.

## Collecte automatique de veille

Le registre initial est dans `veille/sources.json`. Le workflow `Collect technology watch signals` s’exécute chaque jour à 06:15 UTC et peut être lancé manuellement depuis GitHub Actions. Il interroge les flux Atom de releases officielles, écrit les nouveaux signaux dans `veille/inbox/` et ouvre ou met à jour la pull request `automation/veille`.

Cette automatisation ne rédige ni ne publie d’articles. Les signaux doivent être regroupés, vérifiés et arbitrés avant de devenir un brouillon éditorial.

## Déploiement

Le workflow GitHub Actions déploie automatiquement `main` sur GitHub Pages. Activez GitHub Pages avec la source « GitHub Actions » dans les réglages du dépôt.
