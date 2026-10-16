---
title: "Choisir une stratégie de matérialisation dbt"
description: "Proposez une stratégie pour une table de transactions massive, alimentée chaque jour et corrigée a posteriori."
domain: analytics-engineering
technology: dbt
tags: [dbt, incremental, data-modeling]
publishedAt: 2026-10-16
relatedArticles: [dbt-materializations]
scenario: "Une table contient 80 millions de transactions. Chaque jour, 300 000 nouvelles transactions sont ajoutées. Certaines peuvent être corrigées jusqu’à sept jours après leur création. Le modèle actuel est reconstruit entièrement en 25 minutes. Quelle stratégie proposez-vous et pourquoi ?"
expected:
  - "Une matérialisation incrémentale, avec une clé unique fiable et une stratégie adaptée à l’entrepôt."
  - "Une fenêtre de retraitement d’au moins sept jours pour intégrer les corrections tardives."
  - "Des tests d’unicité et un suivi des temps d’exécution, avec une reconstruction complète planifiée si nécessaire."
correction: "Un modèle incrémental est adapté car les nouvelles lignes sont une faible part de l’historique. La fenêtre de retraitement est essentielle : filtrer seulement sur le dernier chargement ignorerait les corrections. Selon la plateforme, une stratégie MERGE permet de mettre à jour les identifiants existants. Une table complète reste préférable si les corrections sont très fréquentes ou si la logique de déduplication ne peut pas être rendue déterministe."
---
