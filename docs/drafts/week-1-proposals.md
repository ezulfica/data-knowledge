# Propositions éditoriales — semaine 1

Ce document est une boîte de réception éditoriale. Ces propositions ne sont pas publiées sur le site et ne remplacent pas la lecture complète des notes de version avant rédaction.

## Lundi — Data engineering

### Apache Iceberg 1.12.0 : comment évaluer une mise à jour de format de table

- **Signal primaire :** [release `apache-iceberg-1.12.0`](https://github.com/apache/iceberg/releases/tag/apache-iceberg-1.12.0).
- **Question Discover :** quelles évolutions de la release changent réellement le comportement d’une table, les opérations de maintenance ou la compatibilité d’un moteur ?
- **Angle :** une release de format de table ne se résume pas à sa liste de fonctionnalités. L’article expliquera comment distinguer les changements de format, d’API, de connecteurs et d’opérations, puis établir une procédure d’upgrade : compatibilité des moteurs, tests sur une table représentative, stratégie de rollback et observation des fichiers de métadonnées.
- **Learn associé :** *Comprendre les table formats ouverts : snapshots, manifests et commits atomiques*.
- **Practice :** décider si une plateforme multi-moteurs peut adopter une nouvelle version Iceberg avant que tous ses moteurs soient certifiés.
- **Statut :** à rédiger après lecture complète des notes de version et des guides d’upgrade ; ne pas attribuer d’impact précis avant cette vérification.

## Mardi — Analytics engineering

### dbt Core v2.0.8 : une version majeure est-elle automatiquement une priorité de migration ?

- **Signal primaire :** [release `v2.0.8`](https://github.com/dbt-labs/dbt-core/releases/tag/v2.0.8).
- **Question Discover :** comment évaluer la valeur et le risque d’une mise à jour dbt pour un projet qui contient des modèles, des macros, des packages et un environnement de CI ?
- **Angle :** le sujet n’est pas « installer la dernière version ». Il s’agit de cartographier les contrats : compatibilité des adapters, dépréciations, changements de compilation, versions des packages, artefacts de CI et différence entre un build qui passe et un résultat métier correct.
- **Learn associé :** compléter *Comprendre les matérialisations dbt* avec une section sur les contrats d’exécution et les tests de régression.
- **Practice :** proposer un plan de migration pour un projet dbt qui utilise des packages internes et des modèles incrémentaux critiques.
- **Statut :** bon candidat si les notes de version signalent un changement observable ou une migration utile ; sinon, conserver comme contenu Learn et ne pas publier comme actualité.

## Mercredi — AI engineering

### vLLM v0.31.0 : mettre à jour un serveur d’inférence sans confondre vitesse et capacité

- **Signal primaire :** [release `v0.31.0`](https://github.com/vllm-project/vllm/releases/tag/v0.31.0).
- **Question Discover :** quelles vérifications séparent une amélioration annoncée d’un gain réel pour une API de génération en production ?
- **Angle :** l’article évaluera les dimensions qui comptent lors d’une mise à jour d’un runtime d’inférence : modèles et matériels supportés, stabilité de l’API, utilisation mémoire, débit, latence de bout en bout, comportement en charge et métriques d’observabilité. Il ne reprendra aucun benchmark sans configuration reproductible.
- **Learn associé :** *Servir un LLM : préremplissage, décodage, batching continu et KV cache*.
- **Practice :** choisir un protocole de validation pour un service vLLM qui doit mettre à jour son runtime sans dégrader le p95 ni le taux d’erreur.
- **Statut :** candidat prioritaire, sous réserve d’extraire les changements documentés de la release.

## Jeudi — Architecture et fiabilité

### OpenTelemetry Collector 1.69.0 / 0.163.0 : stabiliser une chaîne d’observabilité qui évolue

- **Signal primaire :** [release du Collector](https://github.com/open-telemetry/opentelemetry-collector/releases/tag/v1.69.0/v0.163.0).
- **Question Discover :** pourquoi une mise à jour d’un collecteur peut modifier la fiabilité et le coût d’une plateforme, même si les applications n’ont pas changé ?
- **Angle :** le Collector est une chaîne de réception, traitement et export. La fiche décrira les risques d’une mise à jour : compatibilité des composants, sémantique des données, backpressure, files d’attente persistantes, échantillonnage, perte de télémétrie et coût d’ingestion. Les impacts précis seront limités à ceux documentés par la release.
- **Learn associé :** *Concevoir un pipeline de télémétrie fiable*.
- **Practice :** diagnostiquer des pertes de traces lors d’un pic de trafic et choisir entre scaling, batching et file persistante.
- **Statut :** candidat prioritaire : il étend le site vers l’architecture sans abandonner l’angle data/AI.

## Vendredi — Open source et exigence éditoriale

### DuckDB v1.5.6 : pourquoi une release de correctifs ne mérite pas toujours un article

- **Signal primaire :** [release `DuckDB v1.5.6 Bugfix Release`](https://github.com/duckdb/duckdb/releases/tag/v1.5.6).
- **Question Discover :** quel seuil rend une release de correctifs importante pour les utilisateurs d’un moteur analytique ?
- **Angle :** la release se présente comme une release de correctifs après v1.5.5. La proposition n’est pas de la transformer artificiellement en nouveauté majeure. Elle sert à établir le filtre : publier seulement si un correctif affecte la sécurité, la justesse des résultats, la corruption de données, la compatibilité ou une charge de travail importante ; autrement, l’enregistrer dans la veille interne sans fiche publique.
- **Learn associé :** aucun contenu obligatoire ; cette décision protège la qualité du flux Discover.
- **Practice :** aucune, sauf si un correctif révèle un mécanisme pédagogique utile.
- **Statut :** candidat probablement rejeté pour publication ; conserver comme test de la politique « zéro article est acceptable ».

## Décision attendue

La semaine de test ne vise pas cinq publications à tout prix. Iceberg et vLLM sont les meilleures candidates initiales. dbt dépend de la substance de la release. DuckDB est volontairement conservé comme cas de rejet potentiel afin de vérifier que le workflow privilégie l’impact à la cadence.

## Revue critique indépendante

Une revue éditoriale a challengé les propositions après leur sélection.

| Proposition | Décision révisée | Motif |
| --- | --- | --- |
| Iceberg 1.12.0 | Retravailler puis publier si justifié | Très bon angle lakehouse, mais les changements précis, leur date et leur compatibilité doivent être confirmés dans les notes de version avant de leur attribuer un impact. |
| dbt Core v2.0.8 | Retravailler fortement | Le numéro de version ne constitue pas à lui seul une actualité. Sans changement substantiel confirmé, le sujet doit devenir un article Learn sur la méthode d’upgrade dbt. |
| vLLM v0.31.0 | Publier après recherche | L’angle production est solide. Toute promesse de performance ou de compatibilité doit être accompagnée de la configuration reproductible correspondante. |
| OpenTelemetry Collector | Rejeter et remplacer | La référence de release doit être vérifiée et l’angle actuel est trop générique pour une actualité établie. Le sujet peut devenir un article Learn sur la fiabilité de la télémétrie. |
| DuckDB v1.5.6 | Rejeter pour publication | C’est un bon exemple de release de correctifs à archiver dans la veille interne, sans en faire artificiellement une fiche Discover. |

La sélection de départ est donc réduite à deux candidats Discover : Iceberg et vLLM, après vérification détaillée de leurs notes de version. Cette réduction est un résultat attendu du processus de qualité.
