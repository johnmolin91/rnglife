$( document ).ready(function() {

    var ipCheckVar1 = 0;
    var ipCheckVar2 = 0;
    var ipCheckVar3 = 0;
    var ipCheckVar4 = 0;
    var ipCheckVar5 = 0; 
    var oopCheckVar1 = 0;
    var oopCheckVar2 = 0;
    var oopCheckVar3 = 0;
    var threeCheckVar1 = 0;
    var threeCheckVar2 = 0;
    var threeCheckVar3 = 0;
    var raisedVar1 = 0;
    var raisedVar2 = 0;

    var ipTurnVar1 = 0;
    var ipTurnVar2 = 0;
    var ipTurnVar3 = 0;
    var ipTurnVar4 = 0;
    var oopTurnVar1 = 0;
    var pasTurnVar1 = 0;

    var ipRiverVar2 = 0;
    var ipRiverVar3 = 0;
    var ipRiverVar1 = 0;
    var oopRiverVar2 = 0;
    var oopRiverVar1 = 0;

    function emptyTable() {
        $("#train-table > tbody").empty();
        $("#turn-table > tbody").empty();
        $("#river-table > tbody").empty();
    }

    function generateIPCheckStrat() {
        ipCheckVar1 = Math.random();
        if (ipCheckVar1 <= 0.8) {
            $("#train-table > tbody").append("<tr><td>IP HU or 3w Check</td><td>CHECK</td><td>" + ipCheckVar1.toFixed(3) + "</td>");
        }
        else if (ipCheckVar1 > 0.8 & ipCheckVar1 <= 0.9) {
            $("#train-table > tbody").append("<tr><td>IP HU or 3w Check</td><td>BET 1/3</td><td>" + ipCheckVar1.toFixed(3) + "</td>");
        } 
        else {
            $("#train-table > tbody").append("<tr><td>IP HU or 3w Check</td><td>BET 3/4</td><td>" + ipCheckVar1.toFixed(3) + "</td>");
        }
    }

    function generateIPLowBetStrat() {
        ipCheckVar2 = Math.random();
        if (ipCheckVar2 <= 0.2) {
            $("#train-table > tbody").append("<tr><td>IP Low/Dry Bet</td><td>CHECK</td><td>" + ipCheckVar2.toFixed(3) + "</td>");
        }
        else if (ipCheckVar2 > 0.2 & ipCheckVar2 <= 0.8) {
            $("#train-table > tbody").append("<tr><td>IP Low/Dry Bet</td><td>BET 1/3</td><td>" + ipCheckVar2.toFixed(3) + "</td>");
        } 
        else {
            $("#train-table > tbody").append("<tr><td>IP Low/Dry Bet</td><td>BET 3/4</td><td>" + ipCheckVar2.toFixed(3) + "</td>");
        }
    }

    function generateIPLowStrongStrat() {
        ipCheckVar3 = Math.random();
        if (ipCheckVar3 <= 0.05) {
            $("#train-table > tbody").append("<tr><td>IP Low/Dry Strong</td><td>CHECK</td><td>" + ipCheckVar3.toFixed(3) + "</td>");
        }
        else if (ipCheckVar3 > 0.05 & ipCheckVar3 <= 0.5) {
            $("#train-table > tbody").append("<tr><td>IP Low/Dry Strong</td><td>BET 1/3</td><td>" + ipCheckVar3.toFixed(3) + "</td>");
        } 
        else {
            $("#train-table > tbody").append("<tr><td>IP Low/Dry Strong</td><td>BET 3/4</td><td>" + ipCheckVar3.toFixed(3) + "</td>");
        }
    }

    function generateIPHighBetStrat() {
        ipCheckVar4 = Math.random();
        if (ipCheckVar4 <= 0.2) {
            $("#train-table > tbody").append("<tr><td>IP High Bet</td><td>CHECK</td><td>" + ipCheckVar4.toFixed(3) + "</td>");
        }
        else {
            $("#train-table > tbody").append("<tr><td>IP High Bet</td><td>BET 3/4</td><td>" + ipCheckVar4.toFixed(3) + "</td>");
        }
    }

    function generateIPHighStrongStrat() {
        ipCheckVar5 = Math.random();
        if (ipCheckVar5 <= 0.05) {
            $("#train-table > tbody").append("<tr><td>IP High Strong</td><td>CHECK</td><td>" + ipCheckVar5.toFixed(3) + "</td>");
        }
        else {
            $("#train-table > tbody").append("<tr><td>IP High Strong</td><td>BET 3/4</td><td>" + ipCheckVar5.toFixed(3) + "</td>");
        }
    }

    function generateOOPCheckStrat() {
        oopCheckVar1 = Math.random();
        if (oopCheckVar1 <= 0.9) {
            $("#train-table > tbody").append("<tr><td>OOP Check</td><td>CHECK</td><td>" + oopCheckVar1.toFixed(3) + "</td>");
        }
        else {
            $("#train-table > tbody").append("<tr><td>OOP Check</td><td>BET 3/4</td><td>" + oopCheckVar1.toFixed(3) + "</td>");
        }
    }

    function generateOOPBetStrat() {
        oopCheckVar2 = Math.random();
        if (oopCheckVar2 <= 0.5) {
            $("#train-table > tbody").append("<tr><td>OOP Bet</td><td>CHECK</td><td>" + oopCheckVar2.toFixed(3) + "</td>");
        }
        else {
            $("#train-table > tbody").append("<tr><td>OOP Bet</td><td>BET 3/4</td><td>" + oopCheckVar2.toFixed(3) + "</td>");
        }
    }

    function generateOOPStrongStrat() {
        oopCheckVar3 = Math.random();
        if (oopCheckVar3 <= 0.2) {
            $("#train-table > tbody").append("<tr><td>OOP Strong</td><td>CHECK</td><td>" + oopCheckVar3.toFixed(3) + "</td>");
        }
        else {
            $("#train-table > tbody").append("<tr><td>OOP Strong</td><td>BET 3/4</td><td>" + oopCheckVar3.toFixed(3) + "</td>");
        }
    }

    function generateOOP3BetStrat() {
        threeCheckVar1 = Math.random();
        if (threeCheckVar1 <= 0.2) {
            $("#train-table > tbody").append("<tr><td>OOP 3bet All</td><td>CHECK</td><td>" + threeCheckVar1.toFixed(3) + "</td>");
        }
        else {
            $("#train-table > tbody").append("<tr><td>OOP 3bet All</td><td>BET 1/3</td><td>" + threeCheckVar1.toFixed(3) + "</td>");
        }
    }

    function generateOOP3BetStrongStrat() {
        threeCheckVar2 = Math.random();
        if (threeCheckVar2 <= 0.1) {
            $("#train-table > tbody").append("<tr><td>OOP 3bet Vulnerable</td><td>CHECK</td><td>" + threeCheckVar2.toFixed(3) + "</td>");
        }
        else if (threeCheckVar2 > 0.1 & threeCheckVar2 <= 0.2) {
            $("#train-table > tbody").append("<tr><td>OOP 3bet Vulnerable</td><td>BET 1/3</td><td>" + threeCheckVar2.toFixed(3) + "</td>");
        } 
        else {
            $("#train-table > tbody").append("<tr><td>OOP 3bet Vulnerable</td><td>BET 3/4</td><td>" + threeCheckVar2.toFixed(3) + "</td>");
        }
    }

    function generateIP3BetStrat() {
        threeCheckVar3 = Math.random();
        if (threeCheckVar3 <= 0.2) {
            $("#train-table > tbody").append("<tr><td>IP 3bet All</td><td>CHECK</td><td>" + threeCheckVar3.toFixed(3) + "</td>");
        }
        else {
            $("#train-table > tbody").append("<tr><td>IP 3bet All</td><td>BET 1/3</td><td>" + threeCheckVar3.toFixed(3) + "</td>");
        }
    }

    function generateRaisedFlopBluffStrat() {
        raisedVar1 = Math.random();
        if (raisedVar1 <= 0.9) {
            $("#train-table > tbody").append("<tr><td>Bet/Raised on Flop Bluff</td><td>Fold</td><td>" + raisedVar1.toFixed(3) + "</td>");
        }
        else {
            $("#train-table > tbody").append("<tr><td>Bet/Raised on Flop Bluff</td><td>Raise 3/4</td><td>" + raisedVar1.toFixed(3) + "</td>");
        }
    }

    function generateRaisedFlopValueStrat() {
        raisedVar2 = Math.random();
        if (raisedVar2 <= 0.2) {
            $("#train-table > tbody").append("<tr><td>Bet/Raised on Flop Value</td><td>Call</td><td>" + raisedVar2.toFixed(3) + "</td>");
        }
        else {
            $("#train-table > tbody").append("<tr><td>Bet/Raised on Flop Value</td><td>Raise 3/4</td><td>" + raisedVar2.toFixed(3) + "</td>");
        }
    }

    function generateIPTurnCheckStrat() {
        ipTurnVar1= Math.random();
        if (ipTurnVar1 <= 0.95) {
            $("#turn-table > tbody").append("<tr><td>IP Check</td><td>CHECK</td><td>" + ipTurnVar1.toFixed(3) + "</td>");
        }
        else {
            $("#turn-table > tbody").append("<tr><td>IP Check</td><td>BET 3/4</td><td>" + ipTurnVar1.toFixed(3) + "</td>");
        }
    }

    function generateIPTurnMediumStrat() {
        ipTurnVar2= Math.random();
        if (ipTurnVar2 <= 0.2) {
            $("#turn-table > tbody").append("<tr><td>IP Medium</td><td>CHECK</td><td>" + ipTurnVar2.toFixed(3) + "</td>");
        } 
        else if (ipTurnVar2 > 0.2 & ipTurnVar2 <= 0.8) {
            $("#turn-table > tbody").append("<tr><td>IP Medium</td><td>BET 1/2</td><td>" + ipTurnVar2.toFixed(3) + "</td>");
        } 
        else {
            $("#turn-table > tbody").append("<tr><td>IP Medium</td><td>BET 3/4</td><td>" + ipTurnVar2.toFixed(3) + "</td>");
        }
    }

    function generateIPTurnBluffStrat() {
        ipTurnVar3= Math.random();
        if (ipTurnVar3 <= 0.1) {
            $("#turn-table > tbody").append("<tr><td>IP Semibluff</td><td>CHECK</td><td>" + ipTurnVar3.toFixed(3) + "</td>");
        } 
        else if (ipTurnVar3 > 0.1 & ipTurnVar3 <= 0.2) {
            $("#turn-table > tbody").append("<tr><td>IP Semibluff</td><td>BET 1/2</td><td>" + ipTurnVar3.toFixed(3) + "</td>");
        } 
        else {
            $("#turn-table > tbody").append("<tr><td>IP Semibluff</td><td>BET 3/4</td><td>" + ipTurnVar3.toFixed(3) + "</td>");
        }
    }

    function generateIPTurnStrongStrat() {
        ipTurnVar4= Math.random();
        if (ipTurnVar4 <= 0.05) {
            $("#turn-table > tbody").append("<tr><td>IP Strong</td><td>CHECK</td><td>" + ipTurnVar4.toFixed(3) + "</td>");
        } 
        else if (ipTurnVar4 > 0.05 & ipTurnVar4 <= 0.2) {
            $("#turn-table > tbody").append("<tr><td>IP Strong</td><td>BET 1/2</td><td>" + ipTurnVar4.toFixed(3) + "</td>");
        } 
        else {
            $("#turn-table > tbody").append("<tr><td>IP Strong</td><td>BET 3/4</td><td>" + ipTurnVar4.toFixed(3) + "</td>");
        }
    }

    function generateOOPTurnBetStrat() {
        oopTurnVar1= Math.random();
        if (oopTurnVar1 <= 0.20) {
            $("#turn-table > tbody").append("<tr><td>OOP Bet</td><td>CHECK</td><td>" + oopTurnVar1.toFixed(3) + "</td>");
        }
        else {
            $("#turn-table > tbody").append("<tr><td>OOP Bet</td><td>BET 3/4</td><td>" + oopTurnVar1.toFixed(3) + "</td>");
        }
    }

    function generateStrongTurnPassiveStrat() {
        pasTurnVar1= Math.random();
        if (pasTurnVar1 <= 0.20) {
            $("#turn-table > tbody").append("<tr><td>Bet Into Strong</td><td>Call</td><td>" + pasTurnVar1.toFixed(3) + "</td>");
        }
        else {
            $("#turn-table > tbody").append("<tr><td>Bet Into Strong</td><td>RAISE 3/4</td><td>" + pasTurnVar1.toFixed(3) + "</td>");
        }
    }

    function generateIPRiverMedStrat() {
        ipRiverVar2= Math.random();
        if (ipRiverVar2 <= 0.30) {
            $("#river-table > tbody").append("<tr><td>IP Medium</td><td>BET 1/2</td><td>" + ipRiverVar2.toFixed(3) + "</td>");
        }
        else {
            $("#river-table > tbody").append("<tr><td>IP Medium</td><td>BET 3/4</td><td>" + ipRiverVar2.toFixed(3) + "</td>");
        }
    }

    function generateIPRiverStrongStrat() {
        ipRiverVar1= Math.random();
        if (ipRiverVar1 <= 0.20) {
            $("#river-table > tbody").append("<tr><td>IP Strong</td><td>BET 1/2</td><td>" + ipRiverVar1.toFixed(3) + "</td>");
        }
        else if (ipRiverVar1 > 0.2 & ipRiverVar1 <= 0.5) {
            $("#river-table > tbody").append("<tr><td>IP Strong</td><td>BET 3/4</td><td>" + ipRiverVar1.toFixed(3) + "</td>");
        } 
        else {
            $("#river-table > tbody").append("<tr><td>IP Strong</td><td>BET 6/4</td><td>" + ipRiverVar1.toFixed(3) + "</td>");
        }
    }

    function generateIPRiverBluffStrat() {
        ipRiverVar3= Math.random();
        if (ipRiverVar3 <= 0.20) {
            $("#river-table > tbody").append("<tr><td>IP Bluff</td><td>CHECK</td><td>" + ipRiverVar3.toFixed(3) + "</td>");
        }
        else if (ipRiverVar3 > 0.20 & ipRiverVar3 <= 0.3) {
            $("#river-table > tbody").append("<tr><td>IP Bluff</td><td>BET 1/2</td><td>" + ipRiverVar3.toFixed(3) + "</td>");
        } 
        else if (ipRiverVar3 > 0.3 & ipRiverVar3 <= 0.5) {
            $("#river-table > tbody").append("<tr><td>IP Bluff</td><td>BET 3/4</td><td>" + ipRiverVar3.toFixed(3) + "</td>");
        } 
        else {
            $("#river-table > tbody").append("<tr><td>IP Bluff</td><td>BET 6/4</td><td>" + ipRiverVar3.toFixed(3) + "</td>");
        }
    }

    function generateOOPRiverBluffStrat() {
        oopRiverVar2= Math.random();
        if (oopRiverVar2 <= 0.20) {
            $("#river-table > tbody").append("<tr><td>OOP Bluff</td><td>CHECK</td><td>" + oopRiverVar2.toFixed(3) + "</td>");
        }
        else if (oopRiverVar2 > 0.2 & oopRiverVar2 <= 0.3) {
            $("#river-table > tbody").append("<tr><td>OOP Bluff</td><td>BET 1/2</td><td>" + oopRiverVar2.toFixed(3) + "</td>");
        } 
        else if (oopRiverVar2 > 0.3 & oopRiverVar2 <= 0.5) {
            $("#river-table > tbody").append("<tr><td>OOP Bluff</td><td>BET 3/4</td><td>" + oopRiverVar2.toFixed(3) + "</td>");
        } 
        else {
            $("#river-table > tbody").append("<tr><td>OOP Bluff</td><td>BET 6/4</td><td>" + oopRiverVar2.toFixed(3) + "</td>");
        }
    }

    function generateOOPRiverStrongStrat() {
        oopRiverVar1= Math.random();
        if (oopRiverVar1 <= 0.20) {
            $("#river-table > tbody").append("<tr><td>OOP Strong</td><td>CHECK</td><td>" + oopRiverVar1.toFixed(3) + "</td>");
        }
        else if (oopRiverVar1 > 0.20 & oopRiverVar1 <= 0.3) {
            $("#river-table > tbody").append("<tr><td>OOP Strong</td><td>BET 1/2</td><td>" + oopRiverVar1.toFixed(3) + "</td>");
        } 
        else if (oopRiverVar1 > 0.3 & oopRiverVar1 <= 0.5) {
            $("#river-table > tbody").append("<tr><td>OOP Strong</td><td>BET 3/4</td><td>" + oopRiverVar1.toFixed(3) + "</td>");
        } 
        else {
            $("#river-table > tbody").append("<tr><td>OOP Strong</td><td>BET 6/4</td><td>" + oopRiverVar1.toFixed(3) + "</td>");
        }
    }
    
    $(".generate").on("click", emptyTable);
    $(".generate").on("click", generateIPCheckStrat);
    $(".generate").on("click", generateIPLowBetStrat);
    $(".generate").on("click", generateIPLowStrongStrat);
    $(".generate").on("click", generateIPHighBetStrat);
    $(".generate").on("click", generateIPHighStrongStrat);
    $(".generate").on("click", generateOOPCheckStrat);
    $(".generate").on("click", generateOOPBetStrat);
    $(".generate").on("click", generateOOPStrongStrat);
    $(".generate").on("click", generateOOP3BetStrat);
    $(".generate").on("click", generateOOP3BetStrongStrat);
    $(".generate").on("click", generateIP3BetStrat);
    $(".generate").on("click", generateRaisedFlopBluffStrat);
    $(".generate").on("click", generateRaisedFlopValueStrat);
    $(".generate").on("click", generateIPTurnCheckStrat);
    $(".generate").on("click", generateIPTurnMediumStrat);
    $(".generate").on("click", generateIPTurnBluffStrat);
    $(".generate").on("click", generateIPTurnStrongStrat);
    $(".generate").on("click", generateOOPTurnBetStrat);
    $(".generate").on("click", generateStrongTurnPassiveStrat);
    $(".generate").on("click", generateIPRiverMedStrat);
    $(".generate").on("click", generateIPRiverBluffStrat);
    $(".generate").on("click", generateIPRiverStrongStrat);
    $(".generate").on("click", generateOOPRiverBluffStrat);
    $(".generate").on("click", generateOOPRiverStrongStrat);

});