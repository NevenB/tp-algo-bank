<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="LIRE withdraw"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" totalAffichages="1000" nbDecimales="8" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#overdraft" algoitem="overdraft EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Sold" algoitem="Sold EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#withdraw" algoitem="withdraw EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Bienvenue chez GTM Bank#0" algoitem="AFFICHER &quot;Bienvenue chez GTM Bank&quot;"/>
        <item code="4#Saisissez le montant de votre découvert#0" algoitem="AFFICHER &quot;Saisissez le montant de votre découvert&quot;"/>
        <item code="2#overdraft#pasliste" algoitem="LIRE overdraft"/>
        <item code="15#overdraft>2000 ou overdraft&lt;100" algoitem="TANT_QUE (overdraft>2000 ou overdraft&lt;100) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="2#overdraft#pasliste" algoitem="LIRE overdraft"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="12#Sold#100#2000" algoitem="POUR Sold ALLANT_DE 100 A 2000">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="2#Sold#pasliste" algoitem="LIRE Sold"/>
            <item code="4#Votre découvert est autorisé#0" algoitem="AFFICHER &quot;Votre découvert est autorisé&quot;"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="15#withdraw >100 " algoitem="TANT_QUE (withdraw >100 ) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="2#withdraw#pasliste" algoitem="LIRE withdraw"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
