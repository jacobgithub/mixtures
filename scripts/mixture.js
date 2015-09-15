$(document).ready(function () {
    $("#submit").click(function () {
        // Solution One
        var solutionOneVolume = $('input[name=solutionOneVolume]').val();
        var solutionOnePercent = $('input[name=solutionOnePercent]').val();

        // Solution Two
        var solutionTwoVolume = $('input[name=solutionTwoVolume]').val();
        var solutionTwoPercent = $('input[name=solutionTwoPercent]').val();

        // Totals
        var totalVolume = parseFloat(solutionOneVolume) + parseFloat(solutionTwoVolume);
        var totalParts = parseFloat((solutionOneVolume * (solutionOnePercent / 100))) + parseFloat((solutionTwoVolume * (solutionTwoPercent / 100)));

        $('p.solution_one_p').html("The total volume of the new solution is: " + totalVolume + "ml.<br />" +
            "The volume of parts in the new solution is: " + totalParts + "ml.<br />" +
            "The concentration of the new solution is: " + (totalParts / totalVolume * 100) + "%.");
    });
});