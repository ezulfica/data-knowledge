# Politique de veille

La veille alimente une bibliothèque de connaissances ; elle n’est pas un flux d’actualités exhaustif. Chaque publication doit expliquer le changement, son importance, ses implications techniques et les concepts associés.

## Hiérarchie des sources

### Références primaires

Elles servent à étayer les publications : documentation, notes de version, RFC, articles d’ingénierie des équipes responsables, dépôts officiels, articles scientifiques et benchmarks reproductibles.

Suivre notamment Apache Spark, Flink, Kafka, Iceberg, Hudi, Arrow, Parquet, Delta Lake, DuckDB, ClickHouse, Trino, dbt, SQLMesh, Airflow, Dagster, Prefect, Databricks, Snowflake, BigQuery, Redshift, DataHub, OpenMetadata, OpenLineage, Hugging Face, PyTorch, Ray, MLflow, OpenAI, Anthropic, Google DeepMind, Meta AI, Mistral, vLLM, llama.cpp, Ollama, LangChain, LlamaIndex, DSPy, Qdrant, Weaviate, pgvector et Milvus.

Les blogs et publications d’ingénierie de Netflix, Airbnb, Uber, Cloudflare, Stripe, Shopify, LinkedIn, DoorDash, Discord, Spotify, Pinterest et Canva sont également des références lorsqu’ils décrivent une expérience technique vérifiable.

### Signaux à investiguer

Ces sources permettent de repérer un sujet ; elles ne suffisent pas à justifier une publication : GitHub Trending, dépôts populaires, Hacker News, Lobsters, Reddit, Medium, newsletters et publications sur les réseaux sociaux.

Pour Medium, ne suivre que des publications ou auteurs identifiés (par exemple Airbnb Engineering, Uber Engineering, Spotify Engineering ou LinkedIn Engineering) et remonter au billet original.

### Recherche, standards et conférences

Suivre arXiv (`cs.DB`, `cs.DC`, `cs.LG`, `cs.AI`, `cs.CL`, `cs.IR`), ACM Queue, SIGMOD, VLDB, CIDR, USENIX, OSDI, SOSP, NSDI, MLSys, NeurIPS, ICML, ICLR et KDD. Consulter aussi les évolutions de la CNCF, OpenTelemetry, OpenLineage, Apache et de la Linux Foundation AI & Data.

## Créateurs et communautés

Les créateurs sont des sources de découverte et d’interprétation. Les affirmations techniques doivent être recoupées.

| Domaine | Auteurs, créateurs et canaux |
| --- | --- |
| Data engineering | Joe Reis, Zach Wilson, Benn Stancil, Maxime Beauchemin, Tristan Handy, Data Engineering Podcast, The Data Stack Show |
| Architecture data | Martin Kleppmann, Chris Riccomini, AWS Builders’ Library, Google SRE |
| ML engineering et MLOps | Chip Huyen, Eugene Yan, Shreya Shankar, Rachael Tatman, Full Stack Deep Learning, MLOps Community |
| LLM engineering | Simon Willison, Hamel Husain, Lilian Weng, Harrison Chase, Jerry Liu, Jason Liu, Latent Space |
| Recherche IA accessible | Sebastian Raschka, Jay Alammar, Andrej Karpathy, Jeremy Howard, Yannic Kilcher, The Batch, Import AI |
| Écosystème francophone | DataGen, MLOps Community France, PyData Paris, Paris Data Ladies et les événements dbt, Dataiku et Mistral AI |

## Processus éditorial

1. Collecter un signal avec son URL, sa date et les technologies concernées.
2. Retrouver une ou plusieurs sources primaires.
3. Évaluer l’impact : changement concret, public concerné, compromis et concepts à approfondir.
4. Ignorer les annonces marketing, doublons et changements sans conséquence pratique.
5. Créer une fiche dans `src/content/news/` seulement après validation ; relier la fiche à des articles et exercices existants ou à créer.

Une actualité peut être rejetée. Une journée sans publication est normale.

## Rôle de l’IA et validation

Le workflow de veille est piloté par IA. L’agent peut gérer la collecte, la déduplication, la recherche de sources primaires, la synthèse, la préparation des fichiers MDX, les liens entre contenus et les contrôles de métadonnées. Les contenus restent des fichiers versionnés dans Git ; GitHub Actions se charge du build et du déploiement après intégration sur `main`.

L’automatisation ne doit pas publier de sa propre initiative. Avant chaque intégration, une validation éditoriale vérifie les sources, les affirmations, le périmètre de l’analyse et les relations proposées. Cette validation comprend une relecture contradictoire par un second agent, distinct du rédacteur. Le futur registre de sources sert à produire une boîte de réception de sujets et non un flux de publication automatique.

## Cadence recommandée

- Quotidien : releases des projets prioritaires, blogs fournisseurs, GitHub Trending et Hacker News.
- Hebdomadaire : newsletters, blogs d’équipes et créateurs identifiés.
- Mensuel ou événementiel : conférences, papiers, RFC et versions majeures.

### Cadence de publication

Il n’existe **aucune obligation de publier** par jour ou par semaine. La collecte est continue, mais une publication doit franchir le seuil de qualité défini par cette politique. Publier zéro article est préférable à une fiche faible, redondante ou insuffisamment sourcée.

Les candidats sont arbitrés régulièrement à partir d’un backlog éditorial. Le choix dépend de l’actualité du sujet, de son impact technique, de la qualité des preuves, de l’originalité de l’analyse, de sa lisibilité et de l’équilibre général entre data engineering, analytics engineering, AI engineering et architecture. Cet équilibre est un garde-fou, jamais un quota : un thème peut revenir plusieurs fois lorsqu’il porte les seuls sujets vraiment pertinents.

## Mémoire éditoriale et backlog

La collecte ne publie pas directement. Elle constitue une mémoire intermédiaire structurée :

```text
inbox → sujets regroupés → backlog d’articles → brouillons → publications ou rejets
```

Un élément de backlog conserve son thème, ses sources primaires, la date du signal le plus récent, la question éditoriale, le changement confirmé, le lecteur concerné, les contenus de contexte utiles, son statut et la raison d’une éventuelle décision de rejet. Plusieurs signaux peuvent alimenter un seul article ; un signal isolé peut aussi être archivé sans publication.

## Registre de sources

Le futur registre automatisable devra stocker, pour chaque source : domaine, type, URL, flux RSS ou API lorsque disponible, priorité, fréquence, langue et niveau de validation requis. Il alimentera une boîte de réception ; il ne publiera jamais automatiquement.
