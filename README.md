# SAE 501 - API Rest Laravel et Figma
# Queti : Une Application Web pour l'Identification des Insectes des Vosges

## **Table des Matières**
1. [Description](#description)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies Utilisées](#technologies-utilisées)
4. [Lien](#lien)
5. [Utilisation](#utilisation)
6. [Structure du Projet](#structure-du-projet)
7. [Crédits et Sources](#crédits-et-sources)

## **Description**
Queti est une application web éducative qui vise à sensibiliser le grand public à la biodiversité des forêts vosgiennes. Elle permet :
- D'identifier rapidement les insectes grâce à un questionnaire inspiré d'une clé d'identification.
- De parcourir un catalogue interactif pour découvrir les insectes de la région.
- Aux utilisateurs connectés de sauvegarder une liste personnalisée de leurs insectes favoris.

L'installation de Angular a été réalisée par Louys Martin principalement.
Le CSS et l'architecture des pages ont été faits par Louys Martin.
Les fonctions de connexion ont été développées par Yolia Charpentier.
L'affichage des ordres pour le catalogue a été réalisé par Louys Martin et a été la base pour la suite du développement des autres fonctions codées par Yolia Charpentier. Cela inclut l'affichage des insectes par ordre, la mise en place des requêtes de l'utilisateur et celles en rapport avec le questionnaire.

## **Fonctionnalités**
- Questionnaire interactif pour déterminer l'ordre des insectes.
- Exploration d’un catalogue des insectes par ordre.
- Connexion utilisateur pour gérer une liste d’insectes favoris.

## **Technologies Utilisées**
- **Framework principal** : Angular
- **Langage** : TypeScript
- **Backend/API** : Laravel

## **Lien**
Ouvrez votre navigateur à l’adresse : `http://quetifront.queti.sc2zeep6040.universe.wf/`.

## **Utilisation**
1. Accédez à l'application.
2. Choisissez entre utiliser le questionnaire pour identifier un insecte ou explorer le catalogue.
3. Connectez-vous pour sauvegarder vos insectes favoris.

## **Structure du Projet**
- `src/app` : Contient les composants Angular.
- `src/assets` : Contient les images et autres ressources statiques.
- `src/environments` : Configuration des environnements de développement et de production.

## **Crédits et Sources**
- Le questionnaire est basé sur le PDF fourni par Pro Natura : [Lien vers le PDF](https://www.pronatura.ch/sites/pronatura.ch/files/CdD_Insectes.pdf).
- Les images d'insectes sont en majorité tirées du site Insecta : [Lien vers le site de Insecta](https://insecta.pro/)
- Les autres images d'insectes sont tirées de l'INPN : [Lien vers le site de l'INPN](https://inpn.mnhn.fr/)
