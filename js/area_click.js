var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hollys-dev-default-rtdb.firebaseio.com"
});

function area() {
    var value = $(this).attr("title");
    $("#store_table table tr td:first-child").filter(function () {
        $(this).toggle($(this).text().indexOf(value) > -1)
    });
};