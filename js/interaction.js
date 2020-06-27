function interact(msg, intent) {
  resetScreen();

  if (intent == "ouvrirPorte" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "nouveauRDV" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "reservationSalleStart" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "presence" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "visiteStart" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "ouvrirPorteDroite" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "ouvrirPorteGauche" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "listeRestaurants" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "RestauChinois" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "RestauItalien" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "RestauIndien" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "listeTransport" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "busStart" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "busStart" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else if (intent == "voitureStart" && authStatus == "inconnu") {
    document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    alert("Cette fonctionnalité nécessite d'être authentifié");
  } else {
    createMessageRobot(msg);
    readOutLoud(msg);
    console.log(intent);

    if (intent == "bonjour" && authStatus == "inconnu") {
      document.getElementById("screenInteract1").style.display = "block";
    } else if (intent == "bonjour" && authStatus == "authentifie") {
      document.getElementById("screenInteract4").style.display = "block";
    } else if (intent == "ouvrirPorte" && authStatus == "authentifie") {
      document.getElementById("screenInteractPorte").style.display = "block";
    } else if (intent == "ouvrirPorteGauche" && authStatus == "authentifie") {
      document.getElementById("ScreenVisageRbtContent").style.display = "block";
    } else if (intent == "ouvrirPorteDroite" && authStatus == "authentifie") {
      document.getElementById("ScreenVisageRbtContent").style.display = "block";
    } else if (intent == "reservationSalleStart" && authStatus == "authentifie") {
      document.getElementById("screenInteractSalle1").style.display = "block";
    } else if (intent == "reservationSalle2" && authStatus == "authentifie") {
      document.getElementById("screenInteractSalle2").style.display = "block";
    } else if (intent == "reservationOK" && authStatus == "authentifie") {
      document.getElementById("ScreenVisageRbtContent").style.display = "block";
    } else if (intent == "envoyerMessage" && authStatus == "authentifie") {
      document.getElementById("screenInteractEmail").style.display = "block";
    } else if (intent == "emailOK" && authStatus == "authentifie") {
      document.getElementById("ScreenVisageRbtContent").style.display = "block";
    } else if (intent == "presence" && authStatus == "authentifie") {
      document.getElementById("screenInteract7").style.display = "block";
    } else if (intent == "prensenceOK" && authStatus == "authentifie") {
      document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    } else if (intent == "listeRestaurants" && authStatus == "authentifie") {
      document.getElementById("screenInteractRestaurant").style.display = "block";
    } else if (intent == "RestauChinois" && authStatus == "authentifie") {
      document.getElementById("screenInteractRestaurantChinois").style.display = "block";
    } else if (intent == "RestauItalien" && authStatus == "authentifie") {
      document.getElementById("screenInteractRestaurantItalien").style.display = "block";
    } else if (intent == "RestauIndien" && authStatus == "authentifie") {
      document.getElementById("screenInteractRestaurantIndien").style.display = "block";
    } else if (intent == "affichageRestau" && authStatus == "authentifie") {
      document.getElementById("screenInteractRestaurantReservation").style.display = "block";
    } else if (intent == "restauOK" && authStatus == "authentifie") {
      document.getElementById("ScreenVisageRbtContent").style.display = "block";
    } else if (intent == "listeTransport" && authStatus == "authentifie") {
      document.getElementById("ScreenListeTransport").style.display = "block";
    } else if (intent == "busStart" && authStatus == "authentifie") {
      document.getElementById("screenInteractBus").style.display = "block";
    } else if (intent == "voitureStart" && authStatus == "authentifie") {
      document.getElementById("screenInteractVoiture").style.display = "block";
    } else if (intent == "trainStart" && authStatus == "authentifie") {
      document.getElementById("screenInteractTrain").style.display = "block";
    } else if (intent == "infoTransportOK" && authStatus == "authentifie") {
      document.getElementById("ScreenVisageRbtContent").style.display = "block";
    } else if (intent == "nouveauRDV") {
      document.getElementById("screenInteract6").style.display = "block";
    } else if (intent == "bonjourLoin") {
      document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    } else if (intent == "startRDV") {
      document.getElementById("ScreenCodeQR").style.display = "block";
      document.getElementById("btnQR1").style.display = "block";
      document.getElementById("btnQR2").style.display = "block";
    } else if (intent == "QRCodeOK") {
      document.getElementById("ScreenVisageRbtContent").style.display = "block";
    } else if (intent == "QRCodeKO") {
      document.getElementById("ScreenVisageRbtFrustre").style.display = "block";
    } else if (intent == "pasQRCode") {
      document.getElementById("screenInteract2").style.display = "block";
    } else if (intent == "temperature") {
      document.getElementById("ScreenVisageRbtFrustre").style.display = "block";
    } else if (intent == "questionnaire") {
      document.getElementById("ScreenQuestionnaireQR").style.display = "block";
    } else if (intent == "enqueteSat") {
      document.getElementById("screenInteract3").style.display = "block";
    } else if (intent == "remercier") {
      document.getElementById("ScreenVisageRbtContent").style.display = "block";
    } else if (intent == "menu") {
      document.getElementById("ScreenVisageRbtContent").style.display = "block";
    } else if (intent == "situeGuichet") {
      document.getElementById("ScreenVisageRbtContent").style.display = "block";
    } else if (intent == "menu2") {
      document.getElementById("screenInteract1").style.display = "block";
    } else if (intent == "presLausanneStart") {
      document.getElementById("presLausanne0").style.display = "block";
    } else if (intent == "presLaus0") {
      document.getElementById("presLausanne0").style.display = "block";
    } else if (intent == "presSOI0") {
      document.getElementById("presSOI0").style.display = "block";
    } else if (intent == "presSOI1") {
      document.getElementById("presSOI1").style.display = "block";
    } else if (intent == "presSOI2") {
      document.getElementById("presSOI2").style.display = "block";
    } else if (intent == "presSOI3") {
      document.getElementById("presSOI3").style.display = "block";
    } else if (intent == "presSOI4") {
      document.getElementById("presSOI4").style.display = "block";
    } else if (intent == "presSOI5") {
      document.getElementById("presSOI5").style.display = "block";
    } else if (intent == "presEventStart") {
      document.getElementById("screenInteract5").style.display = "block";
    } else if (intent == "event1") {
      document.getElementById("event1").style.display = "block";
    } else if (intent == "event2") {
      document.getElementById("event2").style.display = "block";
    } else if (intent == "event3") {
      document.getElementById("event3").style.display = "block";
    } else if (intent == "event4") {
      document.getElementById("event4").style.display = "block";
    } else if (intent == "event5") {
      document.getElementById("event5").style.display = "block";
    } else if (intent == "event6") {
      document.getElementById("event6").style.display = "block";
    } else if (intent == "event7") {
      document.getElementById("event7").style.display = "block";
    } else if (intent == "enrgistrementOK") {
      document.getElementById("ScreenVisageRbtContent").style.display = "block";
    } else {
      document.getElementById("ScreenVisageRbtNeutre").style.display = "block";
    }


  } // fin else authentifié
} // fin fonction

function resetScreen() {
  $(".screenDisplay").each(function() {
    $(this).css({
      "display": "none"
    });
  });
}

function actionEnvoyer() {
  interact("je vous ai généré le code QR et vous l'ai envoyé par email. Vous pouvez le transmettre à votre visiteur et je me chargerai de l'accueillir", "enrgistrementOK");
}