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

## Déploiement

Le workflow GitHub Actions déploie automatiquement `main` sur GitHub Pages. Activez GitHub Pages avec la source « GitHub Actions » dans les réglages du dépôt.
