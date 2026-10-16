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

## Cadence recommandée

- Quotidien : releases des projets prioritaires, blogs fournisseurs, GitHub Trending et Hacker News.
- Hebdomadaire : newsletters, blogs d’équipes et créateurs identifiés.
- Mensuel ou événementiel : conférences, papiers, RFC et versions majeures.

## Registre de sources

Le futur registre automatisable devra stocker, pour chaque source : domaine, type, URL, flux RSS ou API lorsque disponible, priorité, fréquence, langue et niveau de validation requis. Il alimentera une boîte de réception ; il ne publiera jamais automatiquement.
