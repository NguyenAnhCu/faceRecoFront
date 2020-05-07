# FaceRecoFront

Cette application web est l'interface des fonctionnalités importantes de notre API Face Reco

## Fonctionnalités

Notre interface reprend les fonctionnalités suivantes :

* La création d'un étudiant
* L'ajout d'une photo à un étudiant
* La création une feuille de présence
* L'affichage des étudiants selon un groupe et une promotion
* La reconnaissance faciale d'un étudiant
* L'affichage des feuilles de présence


## Accès à l'API 

Actuellement, l'application web est liée avec l'API avec le compte ayant comme identifiant : admin et mot de passe admin.
Si vous souhaitez vous connecter avec un autre compte, il faut modifier le fichier api-face-reco.service.ts et modifier l'authentification dans les headers définis.

## La création d'une feuille de présence

Pour le moment, par manque de temps, avec l'interface web il est uniquement possible de créer une feuille de présence par promotion. Cependant, avec l'API il est possible de créer des feuilles de présence pour plusieurs groupes et/ou promotions.
