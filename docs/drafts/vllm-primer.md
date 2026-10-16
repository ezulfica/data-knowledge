# Brouillon visible — Comprendre vLLM avant de lire une release

**Type envisagé :** Learn, primer intermédiaire  
**État :** brouillon de travail, non publié  
**Lecteur :** data/AI engineer qui sait ce qu’est un LLM, mais n’a jamais déployé de serveur d’inférence.  
**Question :** que fait un moteur comme vLLM, et quels concepts faut-il connaître avant d’interpréter une release ?

## Corpus lu avant rédaction

1. **README officiel de vLLM** — définit le projet comme une bibliothèque d’inférence et de serving de LLM, et répertorie le continuous batching, le prefix caching, PagedAttention et le serveur compatible OpenAI. [Lire la source](https://github.com/vllm-project/vllm/blob/main/README.md)
2. **Papier vLLM / PagedAttention** — présente le problème de gestion mémoire du KV cache et le mécanisme PagedAttention. [Lire la source](https://arxiv.org/abs/2309.06180)
3. **Release v0.31.0** — sera l’unique fondement des affirmations portant sur cette version ; elle doit être lue et annotée avant la fiche Discover. [Lire la source](https://github.com/vllm-project/vllm/releases/tag/v0.31.0)

## Registre d’affirmations

| Affirmation | Statut | Source / traitement |
| --- | --- | --- |
| vLLM est une bibliothèque de serving et d’inférence de LLM. | Documentée | README officiel. |
| Le projet propose notamment le continuous batching, le prefix caching et PagedAttention. | Documentée | README officiel ; PagedAttention est détaillé par l’article associé. |
| vLLM possède un serveur compatible avec l’API OpenAI. | Documentée | README officiel. |
| La release 0.31.0 améliore le débit ou la mémoire. | À vérifier | Ne pas écrire cette affirmation sans relire ses notes de version et son contexte de benchmark. |
| vLLM est le meilleur runtime pour toute charge de travail. | Rejetée | Conclusion non démontrable et contraire à l’objectif pédagogique. |

## Plan pédagogique retenu

1. Pourquoi appeler un LLM n’est pas la même chose que le servir.
2. Ce qui se passe entre l’arrivée d’une requête et l’émission des tokens.
3. Pourquoi la mémoire du cache de clés et valeurs devient un enjeu.
4. Comment le batching continu améliore l’utilisation d’un GPU.
5. Ce qu’une équipe doit mesurer avant de choisir ou mettre à jour un runtime.
6. Les prérequis pour lire une release vLLM.

## Extrait de rédaction

### vLLM, en une phrase

vLLM est un logiciel qui aide à exposer un modèle de langage comme un service : une application envoie une requête, le serveur exécute le modèle sur le matériel disponible et renvoie progressivement les tokens générés. Le projet se présente comme une bibliothèque d’inférence et de serving de LLM ; il fournit notamment un serveur compatible avec l’API OpenAI. [Source : README officiel de vLLM](https://github.com/vllm-project/vllm/blob/main/README.md)

Cette définition est plus utile que « vLLM rend les LLM rapides », car elle situe le problème. Lorsqu’un modèle est déjà entraîné, il reste à faire fonctionner ce modèle pour de vrais utilisateurs : recevoir des requêtes, les mettre en attente, répartir le travail sur les GPU, conserver l’état de génération et limiter la latence. Un runtime d’inférence prend en charge une partie de cette mécanique.

### Une requête ne produit pas tout son texte d’un coup

Pour générer une réponse, un modèle lit d’abord le prompt : c’est le *prefill*. Il produit ensuite les tokens un par un : c’est le *decode*. À chaque token, le modèle doit tenir compte des tokens déjà vus. Il stocke donc des informations intermédiaires, appelées clés et valeurs, dans un **KV cache**. Cette distinction et la pression mémoire associée sont au cœur du problème étudié par le papier vLLM. [Source : *Efficient Memory Management for Large Language Model Serving with PagedAttention*](https://arxiv.org/abs/2309.06180)

Ce cache est central. Plus le prompt, la conversation ou le nombre de requêtes simultanées augmente, plus il consomme de mémoire. La mémoire GPU devient alors une contrainte de capacité : deux systèmes qui utilisent le même modèle peuvent accepter un nombre très différent de requêtes simultanées selon leur manière de gérer ce cache.

### Pourquoi PagedAttention et le batching continu apparaissent souvent dans les releases

Le papier vLLM présente PagedAttention comme une manière de gérer le KV cache avec une organisation inspirée de la mémoire paginée. L’idée utile à retenir est qu’il évite de réserver un grand espace contigu par requête lorsque cette réservation serait partiellement inutilisée. Ce mécanisme concerne la gestion mémoire ; il ne garantit pas, à lui seul, une latence ou un débit précis. [Source : papier vLLM / PagedAttention](https://arxiv.org/abs/2309.06180)

Le *continuous batching* répond à un autre problème. Dans un lot classique, on attend souvent que toutes les requêtes du lot soient terminées avant d’en introduire de nouvelles. Or les réponses n’ont pas la même longueur. Un batch continu permet d’ajouter ou de retirer des requêtes pendant le traitement, ce qui vise à utiliser plus régulièrement le matériel. vLLM indique proposer ce mécanisme ; son bénéfice réel dépend toutefois du modèle, du matériel, de la longueur des prompts, de la concurrence et des paramètres de génération. [Source : README officiel de vLLM](https://github.com/vllm-project/vllm/blob/main/README.md)

### Lire une release avec les bonnes questions

Une release vLLM se lit ensuite comme une hypothèse à vérifier, non comme une promesse à reprendre. Pour chaque changement annoncé, il faut demander : quels modèles et accélérateurs sont concernés ? Le comportement de l’API change-t-il ? Quelles métriques mesurons-nous — temps au premier token, tokens par seconde, p95, mémoire, taux d’erreur ? Quelle charge représente notre usage ?

Une amélioration du débit peut accroître la complexité opérationnelle, exiger une version CUDA précise ou ne pas s’appliquer au modèle servi. C’est cette grille qui permet de décider si une release mérite un test, plutôt que de l’adopter pour son numéro de version.

## Éléments manquants avant publication

- Ajouter un diagramme `requête → prefill → KV cache → decode → tokens`.
- Vérifier chaque formulation avec la documentation de conception actuelle de vLLM, en plus du README et du papier.
- Ajouter un exemple de protocole de benchmark reproductible.
- Créer l’exercice associé : comparer deux stratégies de batching face à des requêtes de longueurs très différentes.
- Faire relire le niveau de détail par une personne qui découvre réellement le serving de LLM.
