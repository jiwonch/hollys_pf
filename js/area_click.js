$(function () {
  $.ajax({
    url: "./hollys.json",
    dataType: "json",
    success: function (data) {

      if (data.length > 0) {
        var tb = $("<table/>");

        for (var i in data) {
          var $area = data[i].지역;
          var $store = data[i].매장명;
          var $adrs = data[i].주소;
          var $tel = data[i].전화번호;

          var row = $("<tr/>").append(
            $("<td/>").text($area),
            $("<td/>").text($store),
            $("<td/>").text($adrs),
            $("<td/>").text($tel),
          );

          tb.append(row);
        }
        $("#store_table").append(tb);
      }
    }
  });
});

$("#myInput").on("keyup", function () {
  var value = $(this).val();
  $("#store_table tr").filter(function () {
    $(this).toggle($(this).text().indexOf(value) > -1)
  });
});

$(".mapArea").on("click", function () {
  var value = $(this).attr("value");
  $("#store_table tr td:first-child").filter(function () {
    $(this).parent().toggle($(this).text().indexOf(value) > -1)
  });
});

$(".mapAll").on("click", function () {
  $("#store_table tr").show();
});