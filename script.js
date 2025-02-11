function calculateAge() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;

    var today = new Date();
    var d2 = today.getDate();
    var m2 = today.getMonth() + 1; // Months are zero-based
    var y2 = today.getFullYear();

    if (d1 > d2) {
        d2 += 30; // Adjust for days
        m2 -= 1; // Adjust for month
    }
    if (m1 > m2) {
        m2 += 12; // Adjust for year
        y2 -= 1; // Adjust for year
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById('age').innerHTML = `Your Age is ${y} Years, ${m} Months, and ${d} Days`;
}