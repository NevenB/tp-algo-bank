<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;Solde (€): &quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2para="" F2defaut="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" nbDecimales="8" epaisseurPoint="2" totalBoucles="5000000" epaisseurLigne="2" totalAffichages="1000" arrondiAuto="vrai"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="isOverdraft EST_DU_TYPE CHAINE" code="1#CHAINE#isOverdraft"/>
        <item algoitem="overdraft EST_DU_TYPE NOMBRE" code="1#NOMBRE#overdraft"/>
        <item algoitem="sold EST_DU_TYPE NOMBRE" code="1#NOMBRE#sold"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Bienvenue chez GTM Bank&quot;" code="4#Bienvenue chez GTM Bank#1"/>
        <item algoitem="AFFICHER &quot;Voulez vous avoir un découvert (y ou Y pour oui, n'importe quel caractère pour non)&quot;" code="4#Voulez vous avoir un découvert (y ou Y pour oui, n'importe quel caractère pour non)#1"/>
        <item algoitem="LIRE isOverdraft" code="2#isOverdraft#pasliste"/>
        <item algoitem="SI (isOverdraft==&quot;y&quot; OU isOverdraft==&quot;Y&quot;) ALORS" code="6#isOverdraft==&quot;y&quot; OU isOverdraft==&quot;Y&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Saisissez le montant du découvert entre 100 et 2000€&quot;" code="4#Saisissez le montant du découvert entre 100 et 2000€#1"/>
            <item algoitem="TANT_QUE (overdraft&lt;100 OU overdraft>2000) FAIRE" code="15#overdraft&lt;100 OU overdraft>2000">
                <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                <item algoitem="LIRE overdraft" code="2#overdraft#pasliste"/>
                <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
            </item>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="AFFICHER &quot;Saisissez le dépot (montant d'ouverture de compte minimum de 500€)&quot;" code="4#Saisissez le dépot (montant d'ouverture de compte minimum de 500€)#1"/>
        <item algoitem="TANT_QUE (sold&lt;500) FAIRE" code="15#sold&lt;500">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="LIRE sold" code="2#sold#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Solde (€): &quot;" code="4#Solde (€): #0"/>
        <item algoitem="AFFICHER sold" code="3#sold#1#pasliste"/>
        <item algoitem="AFFICHER &quot;Découvert (€): &quot;" code="4#Découvert (€): #0"/>
        <item algoitem="AFFICHER overdraft" code="3#overdraft#1#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
