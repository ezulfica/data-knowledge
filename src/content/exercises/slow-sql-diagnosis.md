---
title: "Diagnostiquer une requête SQL lente"
description: "Identifiez les informations à demander avant de proposer une optimisation."
domain: analytics-engineering
technology: SQL
tags: [sql, performance, diagnosis]
publishedAt: 2026-10-16
relatedArticles: [sql-join-strategies]
scenario: "Un tableau de bord est passé de deux à quarante secondes après l’ajout d’une jointure. Le développeur demande immédiatement un index. Comment structurez-vous votre diagnostic ?"
expected:
  - "Consulter le plan réel, les volumes, les estimations et les filtres appliqués."
  - "Vérifier la cardinalité de la jointure et les statistiques avant de choisir un index."
  - "Comparer le coût de la jointure aux autres étapes et mesurer le changement après correction."
correction: "Un index peut aider, mais il n’est pas un diagnostic. Commencez par le plan réel : il révèle si le moteur lit trop de lignes, sous-estime une entrée ou choisit une stratégie de jointure inadaptée. La cardinalité est particulièrement importante : une jointure supposée un-à-un qui devient plusieurs-à-plusieurs peut multiplier le volume."
---
