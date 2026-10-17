# Comment un article est préparé

Ce document rend visible le chemin qui mène d’un signal de veille à un contenu publié. Les brouillons vivent dans `docs/drafts/` et ne sont pas indexés par le site.

## 1. Cadrage

Avant d’écrire, définir une question précise, le lecteur visé et la place du contenu :

- **Discover** explique une évolution et ses implications ;
- **Learn** explique un mécanisme durable ;
- **Practice** place ce mécanisme dans une décision ou un diagnostic.

Une release n’est pas automatiquement un article. Si le lecteur ne possède pas les prérequis nécessaires, le travail commence par un primer ou un article Learn.

## 2. Lexique de départ

Avant le corpus, identifier les termes qu’un lecteur doit comprendre pour lire le reste. Le lexique ne contient que les notions indispensables ; il définit chaque terme en une ou deux phrases simples et renvoie, lorsque utile, vers un article Learn plus complet. Les définitions techniques sont sourcées comme le reste du contenu.

Un lexique est requis dès qu’un article introduit une technologie, une abréviation ou un mécanisme qui ne peut pas être déduit du contexte. Toute abréviation est développée à sa première occurrence — par exemple « grand modèle de langage (LLM) » — puis peut être employée sous sa forme courte. Elle figure aussi dans le lexique lorsqu’elle est nécessaire à la compréhension. Le lexique ne remplace pas l’explication : le corpus réemploie ensuite les termes dans une démonstration progressive.

## 3. Recherche avant rédaction

Le corpus est lu avant de choisir le plan définitif. L’agent ne part pas d’une idée puis ne cherche pas des liens pour l’habiller : il extrait des éléments précis des sources primaires, note leur contexte et repère les limites ou contradictions éventuelles.

Le dossier de recherche contient pour chaque source : sa date, son auteur ou organisme, le passage exploitable, le type d’affirmation qu’il soutient et les questions qu’il ne permet pas de trancher. Le plan de l’article est construit à partir de ce dossier.

## 4. Dossier de preuves

Chaque brouillon contient une liste de sources primaires et un registre d’affirmations. Une affirmation est classée comme :

- **documentée** : elle est explicitement présente dans une source ;
- **interprétation** : elle relie des faits documentés à un cas d’usage, et doit être formulée comme telle ;
- **à vérifier** : elle ne peut pas apparaître dans le texte publié tant qu’une source ne la confirme pas.

Les blogs secondaires, vidéos et réseaux sociaux peuvent suggérer un angle, mais ne suffisent pas à documenter une affirmation technique.

Les paragraphes factuels portent des citations directes. Une citation peut être placée à la fin du paragraphe lorsqu’une même source soutient tout le passage, ou après une affirmation précise lorsqu’elle ne soutient qu’une partie du passage. Les recommandations et interprétations restent identifiables comme telles ; elles indiquent les faits sur lesquels elles reposent.

## 5. Architecture pédagogique

Le plan répond à quatre niveaux :

1. une explication simple pour un lecteur nouveau sur le sujet ;
2. les mécanismes nécessaires à une compréhension technique ;
3. les compromis et limites ;
4. un scénario ou exercice qui oblige à raisonner.

L’article relie explicitement ses prérequis, contenus associés et sources. Les exemples de code sont choisis pour illustrer un mécanisme ; ils ne sont pas ajoutés comme décoration.

## 6. Relecture avant publication

La relecture vérifie : précision du titre, pertinence et concision du lexique, développement des abréviations à leur première occurrence, exactitude des affirmations, source de chaque fait important, citation locale de chaque paragraphe factuel, distinction entre faits et recommandations, cohérence du code, niveau de prérequis, lisibilité et liens internes.

Un brouillon est publié seulement lorsqu’il peut être déplacé de `docs/drafts/` vers `src/content/` sans ajouter de promesse non vérifiée.
