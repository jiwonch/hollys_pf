$(function () {
  $.ajax({
    url: "./hollys.json",
    dataType: "json",
    success: function (data) {
      console.log(data);

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

        $("#store_table table tr:nth-of-type(10)").nextAll().slideToggle();

        $("#tb_more").click(function () {
          $("#store_table table tr:nth-of-type(10)").nextAll().slideToggle();
          $(this).slideToggle();
          $("#tb_close").toggle();
        });

        $("#tb_close").click(function () {
          $("#store_table table tr:nth-of-type(10)").nextAll().slideToggle();
          $(this).slideToggle();
          $("#tb_more").toggle();
        });
      }
    }
  });
});

// const displayItems = (page = 1, perPage = 6) => {
//   let index, offSet;
//   if (page == 1 || page <= 0) {
//     index = 0;
//     offSet = perPage;
//   } else if (page > data.length) {
//     index = page - 1;
//     offSet = data.length;
//   } else {
//     index = page * perPage - perPage;
//     offSet = index + perPage;
//   }

//   const slicedItems = data.slice(index, offSet);
//   const html = slicedItems.map(item =>
//     `
//     <tr>
//       <td>${item.지역}</td>
//       <td>${item.매장명}</td>
//       <td>${item.주소}</td>
//       <td>${item.전화번호}</td>
//     </tr>`);

//   document.querySelector("#store_table > table").innerHTML = html.join('');

//   const displayPageNav = perPage => {

//     let pagination = ``;
//     const totalItems = data.length;
//     perPage = perPage ? perPage : 1;
//     const pages = Math.ceil(totalItems / perPage);

//     for (let i = 1; i <= pages; i++) {
//       pagination += `<a href="#" onclick="displayItems(${i},${perPage})">${i}</a>`;
//     }

//     document.getElementById('pagination').innerHTML = pagination;
//   }

//   let perPage = 20;
//   displayPageNav(perPage);
//   displayItems(1, perPage);
//   // }
//   // });
// });

$("#inputbox>button>img").on("click", function () {
  var value = $("#myInput").val();
  $("#store_table tr").filter(function () {
    $(this).toggle($(this).text().indexOf(value) > -1)
  });
  $("#tb_more").hide();
  $("#tb_close").hide();
});

$(".mapArea").on("click", function () {
  var value = $(this).attr("value");
  $("#store_table tr td:first-child").filter(function () {
    $(this).parent().toggle($(this).text().indexOf(value) > -1)
  });
  $("#tb_more").hide();
  $("#tb_close").hide();
});

$(".mapAll").on("click", function () {
  $("#tb_more").show();
  $("#store_table tr").show();
  $("#store_table table tr:nth-of-type(10)").nextAll().slideToggle();
});
