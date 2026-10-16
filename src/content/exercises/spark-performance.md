---
title: "Expliquer une étape Spark déséquilibrée"
description: "Raisonnez sur une tâche lente dans un traitement distribué."
domain: data-engineering
technology: Apache Spark
tags: [spark, shuffle, skew]
publishedAt: 2026-10-16
relatedArticles: [spark-shuffles]
scenario: "Après un groupBy, une seule tâche Spark dure dix fois plus longtemps que les autres. Le volume total tient dans la mémoire du cluster. Quelles causes examinez-vous et quelles options évaluez-vous ?"
expected:
  - "Examiner la distribution des clés, la taille des partitions et les métriques de shuffle."
  - "Identifier une clé dominante avant de modifier arbitrairement le nombre de partitions."
  - "Évaluer des options comme le salage, l’AQE ou un pré-agrégat selon la sémantique."
correction: "Le symptôme évoque un data skew : une partition contient beaucoup plus de données que les autres. Augmenter le parallélisme seul ne découpe pas une clé dominante. Les bonnes réponses dépendent de la requête, de la fréquence du déséquilibre et des garanties attendues ; un salage peut distribuer le travail mais ajoute une étape d’agrégation."
---
