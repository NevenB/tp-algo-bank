<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Saisissez le montant du retrait (0 pour quitter)&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalAffichages="1000" maxBoucle="500000" epaisseurPoint="2" epaisseurLigne="2" totalBoucles="5000000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="overdraft EST_DU_TYPE NOMBRE" code="1#NOMBRE#overdraft"/>
        <item algoitem="sold EST_DU_TYPE NOMBRE" code="1#NOMBRE#sold"/>
        <item algoitem="withdraw EST_DU_TYPE NOMBRE" code="1#NOMBRE#withdraw"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Bienvenue chez GTM Bank&quot;" code="4#Bienvenue chez GTM Bank#1"/>
        <item algoitem="AFFICHER &quot;Saisissez le montant de votre découvert (0 si vous n'avez pas droit au découvert )&quot;" code="4#Saisissez le montant de votre découvert (0 si vous n'avez pas droit au découvert )#1"/>
        <item algoitem="LIRE overdraft" code="2#overdraft#pasliste"/>
        <item algoitem="TANT_QUE ((overdraft&lt;100 OU overdraft>2000) ET overdraft!=0) FAIRE" code="15#(overdraft&lt;100 OU overdraft>2000) ET overdraft!=0">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="LIRE overdraft" code="2#overdraft#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Saisissez le montant de votre solde&quot;" code="4#Saisissez le montant de votre solde#1"/>
        <item algoitem="LIRE sold" code="2#sold#pasliste"/>
        <item algoitem="SI (sold&lt;=-1*overdraft) ALORS" code="6#sold&lt;=-1*overdraft">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Vous avez déja dépassé votre découvert autorisé&quot;" code="4#Vous avez déja dépassé votre découvert autorisé#1"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="AFFICHER &quot;Saisissez le montant du retrait (0 pour quitter)&quot;" code="4#Saisissez le montant du retrait (0 pour quitter)#1"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
